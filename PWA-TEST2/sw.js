const assets = [
    "./",
    "./src/master.css",
    "./src/index.js",
    "./datas/data2.json",
    "./datas/data.json",
    "./images/icon-144x144.png",
    "./src/jquery3.6.0.js"

]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(assets);
        })
    );
});


self.addEventListener('fetch', evt =>{
    console.log('fetched');
    evt.respondWith(
        caches.match(evt.request).then(cachesRes => {
            return cachesRes || fetch(evt.request);
        })
    );
});

// self.addEventListener('install', e => {
    
//     console.log("service worker activated",e);
// });

// // self.addEventListener('activate', evt => {
// //     console.log('service worker activated',evt)
// // });

// // self.addEventListener('fetch', e =>{
// //     console.log('wow: ${e.request.url}');
      
// // });