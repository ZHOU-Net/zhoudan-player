const CACHE_NAME = 'zhoudan-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // 如果 HTML 内嵌了外部资源，也需列出
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});