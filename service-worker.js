/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d907ce819022e401d16375e1f2de6ced"
  },
  {
    "url": "assets/css/0.styles.3bfe12ef.css",
    "revision": "c81f7600872b2654c125ede4ddbef60d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4c4ca378.js",
    "revision": "a00ae936365029c9d0d687ffcb0c9984"
  },
  {
    "url": "assets/js/11.455414ab.js",
    "revision": "fc0f3f977c802a45e5211b8e9c53670f"
  },
  {
    "url": "assets/js/12.47af8962.js",
    "revision": "47ac22e7e07f715a34bbae7a72007a31"
  },
  {
    "url": "assets/js/2.b968aa13.js",
    "revision": "cde36eca47fc62115f2829cf414bff5f"
  },
  {
    "url": "assets/js/3.bc9fb1ae.js",
    "revision": "e3fc7a6a2b7e1c5a9d1e7558edaa8381"
  },
  {
    "url": "assets/js/4.8b8ae20d.js",
    "revision": "0ec3eeffbcdf1a5873b6eeacc5088c87"
  },
  {
    "url": "assets/js/5.e0f13adb.js",
    "revision": "697bf0e8ecbeb8475de67c94433a678f"
  },
  {
    "url": "assets/js/6.88d03338.js",
    "revision": "4717c8fa01763df0e0dfbdd838f7b85b"
  },
  {
    "url": "assets/js/7.9de3ff65.js",
    "revision": "6f2d29f15e429fd2bc39e70590dde69b"
  },
  {
    "url": "assets/js/8.746c79fd.js",
    "revision": "c6d76e91303179ab8ff5e184be0810d1"
  },
  {
    "url": "assets/js/9.d4b0a7dc.js",
    "revision": "f860030b12e55a7806b867765a6c95ef"
  },
  {
    "url": "assets/js/app.8dd8fef5.js",
    "revision": "e0e92d49bb11f8c0bc21ac94e6918c0d"
  },
  {
    "url": "bg.jpg",
    "revision": "503b0aff3723c3c26a0cdda198b1cc9d"
  },
  {
    "url": "favicon.png",
    "revision": "fb7ba421d95799f6cd225dfa154e1ef9"
  },
  {
    "url": "guide/function.html",
    "revision": "568255e59f69394fbfebcad491598621"
  },
  {
    "url": "guide/hook.html",
    "revision": "ee9717afeb56e51828f752678d4f7d0c"
  },
  {
    "url": "guide/index.html",
    "revision": "70321bcad21dc3bee72cda29503559ce"
  },
  {
    "url": "guide/q&a.html",
    "revision": "7da496c879fa4131a3bcdeabcb74a002"
  },
  {
    "url": "index.html",
    "revision": "2c6a59483c6cda51b48a25da7b0e2b54"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
