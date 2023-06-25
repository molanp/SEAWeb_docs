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
    "revision": "68c3d15327632151e950384d538f6694"
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
    "url": "assets/js/10.6d7be649.js",
    "revision": "26e95faebc4be1aeda692c910f25433d"
  },
  {
    "url": "assets/js/11.8fdbe3c3.js",
    "revision": "f60ab11f7d11b97b6b65ac73958f31e6"
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
    "url": "assets/js/7.bdeecef7.js",
    "revision": "81c9d188dde38b269112280844c6c872"
  },
  {
    "url": "assets/js/8.746c79fd.js",
    "revision": "c6d76e91303179ab8ff5e184be0810d1"
  },
  {
    "url": "assets/js/9.a3e489f3.js",
    "revision": "d4cf2bdcb2a951ee3d6ed2d829a86def"
  },
  {
    "url": "assets/js/app.143cac12.js",
    "revision": "f23e3cd9bb9427169c1d2bf76b93c375"
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
    "revision": "f9fdffba91a91db6c47837ed585caf2e"
  },
  {
    "url": "guide/hook.html",
    "revision": "883ff2c71e34ec3b37371992b7a84196"
  },
  {
    "url": "guide/index.html",
    "revision": "4f9708bdb4ab111987e19e37d8649b7b"
  },
  {
    "url": "guide/q&a.html",
    "revision": "97800228864468a719be1ce7353309fb"
  },
  {
    "url": "index.html",
    "revision": "ec16a749a6a0a1774602ab5da2a17022"
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
