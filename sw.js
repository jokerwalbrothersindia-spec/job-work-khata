// Offline support: app ki files phone me save rehti hain; data Firebase khud sync karta hai.
const CACHE = "jw-khata-v2";
const SHELL = ["./", "index.html", "app.js", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  const sameOrigin = u.origin === location.origin;
  const staticCdn = u.hostname === "www.gstatic.com" || u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !staticCdn) return; // Firebase data/login requests ko chhedna nahi
  if (sameOrigin && u.pathname.endsWith("old-data.json")) return;
  // Pehle internet se naya version, na mile to saved copy
  e.respondWith(fetch(e.request).then(r => {
    if (r && (r.ok || r.type === "opaque")) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
    return r;
  }).catch(() => caches.match(e.request).then(m => m || (e.request.mode === "navigate" ? caches.match("index.html") : undefined))));
});
