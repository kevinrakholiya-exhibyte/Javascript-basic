// web worker
const worker = new Worker('worker.js')

worker.postMessage(1000000000000)

worker.onmessage = function (event) {
  console.log("get the Result from Worker:", event.data);
};

//service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js')
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("SW registration failed", err));
}

