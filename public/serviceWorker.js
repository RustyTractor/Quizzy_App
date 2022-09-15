const cacheName = "v1";

// The essential files that we need if the connection lose..
const cacheAssets = [
  "./static/css/main.c33d829b.css",
  "./static/css/main.c33d829b.css.map",
  "./static/js/main.88878ecc.js",
  "./static/js/main.88878ecc.js.map",
  "./asset-manifest.json",
  "./index.html",
  "./manifest.json",
  "./logo192.png",
  "./logo512.png",
  "./favicon.ico",
];

// Save our essential files into the cache...
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Clear old saves from the cache..
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      cacheNames.map((cache) => cache !== cacheName && caches.delete(cache));
    })
  );
});

// If we can't fetch data from the server, we'r using the cache..
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      caches.match(e.request);
    })
  );
});
