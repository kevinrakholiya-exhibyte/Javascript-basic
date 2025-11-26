// webworker example 
self.onmessage = function (event) {
    let num = event.data;
    let sum = 0;

    for (let i = 0; i < num; i++) {
        sum += i;
    }

    self.postMessage(sum);
};

// service worker example 
self.addEventListener('install', (event) => {
    console.log("Service Worker Installed");

    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([,
                '/main.js',
            ]);
        })
    );
});

//offline access
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cachedFile => {
            return cachedFile || fetch(event.request);
        })
    );
});

//Used for receiving push notifications from server
self.addEventListener("sync", event => {
    if (event.tag === "sync-messages") {
        console.log("Sync started...");
    }
});
