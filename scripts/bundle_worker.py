"""Bundle public/ into a single Cloudflare Worker script (dist/worker.js).

Used for direct deploys when Cloudflare's Git builds aren't running:
    python3 scripts/bundle_worker.py
    cd dist && npx wrangler deploy
"""
import base64, json, os

ROOT = os.path.join(os.path.dirname(__file__), "..")
PUBLIC, DIST = os.path.join(ROOT, "public"), os.path.join(ROOT, "dist")
TYPES = {".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mp3": "audio/mpeg", ".png": "image/png", ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml", ".webp": "image/webp"}

# Cloudflare limits a worker script to 15 MiB gzipped, so the bundle carries lighter copies of the media:
# speech clips at 48 kbps mono (plenty for a voice) and pictures re-saved as smaller WebP. The originals in public/
# are untouched. Copies are cached in .bundle-cache/ by content hash, so only new or changed files are re-encoded.
import hashlib, subprocess
CACHE = os.path.join(ROOT, ".bundle-cache"); os.makedirs(CACHE, exist_ok=True)
def light(p):
    if KV: return open(p, "rb").read()   # KV mode: full-quality originals
    raw = open(p, "rb").read(); ext = os.path.splitext(p)[1]
    if ext not in (".mp3", ".webp"): return raw
    c = os.path.join(CACHE, hashlib.sha1(raw).hexdigest() + ext)
    if not os.path.exists(c):
        if ext == ".mp3":
            subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", p, "-ac", "1", "-ar", "24000", "-b:a", "48k", c], check=True)
        else:
            from PIL import Image
            im = Image.open(p); im.save(c, "WEBP", quality=74, method=6)
        if os.path.getsize(c) >= len(raw): open(c, "wb").write(raw)
    return open(c, "rb").read()
KV = json.load(open(os.path.join(ROOT, "scripts", "kv_config.json"))) if os.path.exists(os.path.join(ROOT, "scripts", "kv_config.json")) else None
in_kv = lambda rel: KV and (rel.startswith("/audio/") or rel.startswith("/img/"))
files = {}
for d, _, names in os.walk(PUBLIC):
    for n in names:
        p = os.path.join(d, n); rel = "/" + os.path.relpath(p, PUBLIC).replace(os.sep, "/")
        if in_kv(rel): continue
        files[rel] = [
            TYPES.get(os.path.splitext(n)[1], "application/octet-stream"),
            base64.b64encode(light(p)).decode()]

os.makedirs(DIST, exist_ok=True)
with open(os.path.join(DIST, "worker.js"), "w") as f:
    f.write("const FILES = " + json.dumps(files) + r""";
const cache = {};
function bytes(b64) { if (!cache[b64]) { const s = atob(b64); const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); cache[b64] = u; } return cache[b64]; }
const MEDIA_TYPES = { mp3: "audio/mpeg", webp: "image/webp", png: "image/png", svg: "image/svg+xml" };
export default {
  async fetch(request, env, ctx) {
    let path = new URL(request.url).pathname;
    if (path === "/" || path === "") path = "/index.html";
    const long = path.startsWith("/audio/") || path.startsWith("/img/");
    let body, type;
    if (long && env && env.MEDIA) {
      // Sounds and pictures from KV, kept in Cloudflare's edge cache so KV is read rarely.
      const ck = new Request(new URL(path, request.url).toString()), cache = caches.default;
      let hit = await cache.match(ck);
      if (!hit) {
        const v = await env.MEDIA.get(path, "arrayBuffer");
        if (!v) return new Response("Not found", { status: 404, headers: { "content-type": "text/plain" } });
        hit = new Response(v, { headers: { "content-type": MEDIA_TYPES[path.split(".").pop()] || "application/octet-stream", "cache-control": "public, max-age=604800" } });
        ctx.waitUntil(cache.put(ck, hit.clone()));
      }
      body = new Uint8Array(await hit.arrayBuffer()); type = hit.headers.get("content-type");
    } else {
      const f = FILES[path];
      if (!f) return new Response("Not found", { status: 404, headers: { "content-type": "text/plain" } });
      body = bytes(f[1]); type = f[0];
    }
    const headers = { "content-type": type, "accept-ranges": "bytes", "cache-control": long ? "public, max-age=604800" : "public, max-age=60", "x-content-type-options": "nosniff" };
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
                        **({"kv_namespaces": [{"binding": "MEDIA", "id": KV["namespace_id"]}]} if KV else {}),
                        "routes": [{"pattern": "sajilonepali.app", "custom_domain": True},
                                   {"pattern": "www.sajilonepali.app", "custom_domain": True}]}, indent=2) + "\n")
import gzip
size = os.path.getsize(os.path.join(DIST, "worker.js")); gz = len(gzip.compress(open(os.path.join(DIST, "worker.js"), "rb").read(), 6))
print(f"Bundled {len(files)} files into dist/worker.js: {size / 2**20:.1f} MiB, {gz / 2**20:.1f} MiB gzipped (Cloudflare limit 15 MiB gzipped)")
