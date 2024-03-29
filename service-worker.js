var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/siteprincipal.html',
  '/ongletrecherche.html',
  '/références.html ',
  '/styles/main.css',
  '/script/main.js',
  "https://thedidi2a.github.io"
  'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
