// Tiny worker in front of the static files. It only handles sounds: Safari asks for audio in byte ranges
// (Range: bytes=0-1 …) and needs a 206 slice back, which plain static assets don't give. Everything else is
// served straight from public/ by Cloudflare's asset server.
export default {
  async fetch(request, env) {
    const range = request.headers.get("range");
    const res = await env.ASSETS.fetch(new Request(request.url, { method: "GET", headers: { "accept": request.headers.get("accept") || "*/*" } }));
    if (res.status !== 200) return request.method === "HEAD" ? new Response(null, res) : res;
    // clip URLs carry ?v=<hash of the file>, so a changed recording gets a new URL: safe to cache for a year
    const headers = new Headers(res.headers); headers.set("accept-ranges", "bytes");
    if (new URL(request.url).searchParams.has("v")) headers.set("cache-control", "public, max-age=31536000, immutable");
    if (!range) return new Response(request.method === "HEAD" ? null : res.body, { status: 200, headers });
    const body = new Uint8Array(await res.arrayBuffer()), size = body.length;
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!m) return new Response(body, { status: 200, headers });
    let start = m[1] === "" ? Math.max(0, size - Number(m[2])) : Number(m[1]);
    let end = m[1] !== "" && m[2] !== "" ? Math.min(Number(m[2]), size - 1) : size - 1;
    if (start >= size || start > end) { headers.set("content-range", `bytes */${size}`); return new Response(null, { status: 416, headers }); }
    headers.set("content-range", `bytes ${start}-${end}/${size}`); headers.set("content-length", String(end - start + 1));
    return new Response(request.method === "HEAD" ? null : body.slice(start, end + 1), { status: 206, headers });
  }
};
