/* Sajilo Nepali offline support.
   - The page, lessons and audio list: network first (so updates show up), cached copy when offline.
   - Audio clips and pictures: cached the first time they are used (their URLs change when the file changes).
   - Safari asks for audio in byte ranges, so cached clips are answered with the requested slice. */
const SHELL = "sn-shell-v1", MEDIA = "sn-media-v1";
const CORE = ["/", "/lessons.js", "/audio-manifest.js", "/manifest.webmanifest", "/icon-192.png", "/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== MEDIA).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function sliced(res, range) {
  const buf = await res.arrayBuffer(), size = buf.byteLength;
  const m = /^bytes=(\d*)-(\d*)$/.exec(range || "");
  if (!m) return new Response(buf, { status: 200, headers: { "content-type": res.headers.get("content-type") || "audio/mpeg", "accept-ranges": "bytes", "content-length": String(size) } });
  let start = m[1] === "" ? Math.max(0, size - Number(m[2])) : Number(m[1]);
  let end = m[1] !== "" && m[2] !== "" ? Math.min(Number(m[2]), size - 1) : size - 1;
  if (start >= size || start > end) return new Response(null, { status: 416, headers: { "content-range": `bytes */${size}` } });
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    "content-type": res.headers.get("content-type") || "audio/mpeg", "accept-ranges": "bytes",
    "content-range": `bytes ${start}-${end}/${size}`, "content-length": String(end - start + 1) } });
}

async function media(req) {
  const url = req.url, cache = await caches.open(MEDIA);
  let res = await cache.match(url);
  if (!res) {
    res = await fetch(url);                       // whole file, no range, so it can be cached
    if (res.ok && res.status === 200) await cache.put(url, res.clone());
  }
  return url.includes("/audio/") ? sliced(res, req.headers.get("range")) : res;
}

async function networkFirst(req) {
  const cache = await caches.open(SHELL);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req.mode === "navigate" ? "/" : req, res.clone());
    return res;
  } catch (err) {
    return (await cache.match(req.mode === "navigate" ? "/" : req, { ignoreSearch: true })) || (await cache.match("/")) || Response.error();
  }
}

async function fonts(req) {
  const cache = await caches.open(MEDIA), hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req); if (res.ok) cache.put(req, res.clone()); return res;
}

self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") { e.respondWith(fonts(req)); return; }
  if (u.origin !== self.location.origin) return;
  if (u.pathname.startsWith("/audio/") || /\.(png|svg)$/.test(u.pathname)) { e.respondWith(media(req)); return; }
  e.respondWith(networkFirst(req));
});
