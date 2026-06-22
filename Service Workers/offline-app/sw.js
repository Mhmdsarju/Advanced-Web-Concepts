const CACHE_NAME = 'offline-cache-v1';

const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './offline.html'
];


// INSTALL EVENT

self.addEventListener('install', (event) => {

    console.log('Service Worker Installing...');

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {

                console.log('Caching App Files');

                return cache.addAll(urlsToCache);

            })

    );

});


// ACTIVATE EVENT

self.addEventListener('activate', (event) => {

    console.log('Service Worker Activated');

    event.waitUntil(

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames.map((cache) => {

                        if (cache !== CACHE_NAME) {

                            console.log('Deleting Old Cache');

                            return caches.delete(cache);

                        }

                    })

                );

            })

    );

});


// FETCH EVENT

self.addEventListener('fetch', (event) => {

    event.respondWith(

        caches.match(event.request)

            .then((response) => {

                // Return cache if available

                if (response) {
                    return response;
                }

                // Otherwise fetch from network

                return fetch(event.request)

                    .catch(() => {

                        // If network fails, show offline page

                        return caches.match('./offline.html');

                    });

            })

    );

});