const staticCacheName = "site-staticv-v1";
const assets = [
  "/",
  "/index.html",
  "app.js",
  "gsap.min.js",
  //"/blog/index.html",
  //"/blog/style.css",
  //"/blog/",
  "/style/style.css",
  "https://kit.fontawesome.com/4bb691d9cc.js",
  "https://ka-f.fontawesome.com/releases/v5.15.3/webfonts/free-fa-brands-400.woff2",
  "https://ka-f.fontawesome.com/releases/v5.15.3/webfonts/free-fa-solid-900.woff2",
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;1,200&family=Play:wght@400;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;1,200&family=Play:wght@400;700&display=swap",
  "favicon.png",
  "/images/ron21.png",
  "/images/d-resort.png",
  "/images/arsenal-f-c-seeklogo.com.svg",
];
// install service worker
self.addEventListener("install", (evt) => {
  //console.log('service worker has been installed')
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate service worker
self.addEventListener("activate", (evt) => {
  //console.log("service worker has been activated");
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
// self.addEventListener("fetch", (evt) => {
//   evt.respondWith(
//     caches.match(evt.request).then((cacheRes) => {
//       return (
//         cacheRes ||
//         fetch(evt.request).then((fetchRes) => {
//           return caches.open(dynamicCache).then((cache) => {
//             cache.put(evt.request.url, fetchRes.clone());
//             return fetchRes;
//           });
//         })
//       );
//     })
//   );
// });
