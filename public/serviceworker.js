// This var will storage cache files on the cache API on the browser
const CACHE_NAME = 'version-1'
// offline.html is the view that represents out page when there is no internet conection
const urlsToCache = ['./index.html', './bundle.js','./bundle.js.map', './images']

const self = this;

// Events
// Install SW
// self => serviceWorker itself
self.addEventListener('install', (event) => {
    // wait until caches are opened
    event.waitUntil(
        caches.open(CACHE_NAME) // returns promise
                    .then((cache) => {
                        console.log('Opened cache')
                        return cache.addAll(urlsToCache);
                    })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                    .catch(() => caches.match('./index.html'))
        })
    )
});

//  Activate the serviceworker
// activation checking for previous caches and keeping the new ones
self.addEventListener('activate', (event) => {
    const cacheWhiteList = ['bundle.js'];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys()
            .then(cacheNames => Promise.all(
                cacheNames.map((cacheName) => {
                    if(!cacheWhiteList.includes(cacheName)){
                        return caches.delete(cacheName);
                    }
                })
            ))
    )
});
