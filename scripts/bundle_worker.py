"""Bundle public/ into a single Cloudflare Worker script (dist/worker.js).

Used for direct deploys when Cloudflare's Git builds aren't running:
    python3 scripts/bundle_worker.py
    cd dist && npx wrangler deploy
"""
import base64, json, os

ROOT = os.path.join(os.path.dirname(__file__), "..")
PUBLIC, DIST = os.path.join(ROOT, "public"), os.path.join(ROOT, "dist")
TYPES = {".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mp3": "audio/mpeg"}

files = {}
for d, _, names in os.walk(PUBLIC):
    for n in names:
        p = os.path.join(d, n)
        files["/" + os.path.relpath(p, PUBLIC).replace(os.sep, "/")] = [
            TYPES.get(os.path.splitext(n)[1], "application/octet-stream"),
            base64.b64encode(open(p, "rb").read()).decode()]

os.makedirs(DIST, exist_ok=True)
with open(os.path.join(DIST, "worker.js"), "w") as f:
    f.write("const FILES = " + json.dumps(files) + r""";
const cache = {};
function bytes(b64) { if (!cache[b64]) { const s = atob(b64); const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); cache[b64] = u; } return cache[b64]; }
export default {
  async fetch(request) {
    let path = new URL(request.url).pathname;
    if (path === "/" || path === "") path = "/index.html";
    const f = FILES[path];
    if (!f) return new Response("Not found", { status: 404, headers: { "content-type": "text/plain" } });
    const long = path.startsWith("/audio/");
    const body = bytes(f[1]);
    const headers = { "content-type": f[0], "accept-ranges": "bytes", "cache-control": long ? "public, max-age=604800" : "public, max-age=60", "x-content-type-options": "nosniff" };
    // Safari needs byte-range responses to play audio.
    const m = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("range") || "");
    if (m) {
      let start = m[1] === "" ? Math.max(0, body.length - Number(m[2])) : Number(m[1]);
      let end = m[1] !== "" && m[2] !== "" ? Math.min(Number(m[2]), body.length - 1) : body.length - 1;
      if (start >= body.length || start > end) return new Response(null, { status: 416, headers: { ...headers, "content-range": `bytes */${body.length}` } });
      return new Response(request.method === "HEAD" ? null : body.slice(start, end + 1), { status: 206, headers: { ...headers, "content-range": `bytes ${start}-${end}/${body.length}`, "content-length": String(end - start + 1) } });
    }
    return new Response(request.method === "HEAD" ? null : body, { headers: { ...headers, "content-length": String(body.length) } });
  }
};
""")
with open(os.path.join(DIST, "wrangler.jsonc"), "w") as f:
    # Custom domains are listed here so a deploy keeps them connected.
    f.write(json.dumps({"name": "sajilo-nepali", "main": "worker.js", "compatibility_date": "2026-11-04",
                        "workers_dev": True,
                        "routes": [{"pattern": "sajilonepali.app", "custom_domain": True},
                                   {"pattern": "www.sajilonepali.app", "custom_domain": True}]}, indent=2) + "\n")
print(f"Bundled {len(files)} files into dist/worker.js")
