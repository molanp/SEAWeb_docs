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
    "revision": "353ae01395d650c57ce6b6b8e206a943"
  },
  {
    "url": "assets/css/0.styles.9de2d00b.css",
    "revision": "1bea49d91e0c566d8a35bcd3e88c5b48"
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
    "url": "assets/js/4.e6919fdb.js",
    "revision": "97170edbdf65832966c34b3eb402aa0b"
  },
  {
    "url": "assets/js/5.66625a72.js",
    "revision": "c44dc646b9bd96a52b992a753a34be5b"
  },
  {
    "url": "assets/js/6.88d03338.js",
    "revision": "4717c8fa01763df0e0dfbdd838f7b85b"
  },
  {
    "url": "assets/js/7.a77d2d2a.js",
    "revision": "8d8e0e23dd44c9bdc2ea9e0bc5038f03"
  },
  {
    "url": "assets/js/8.bdf11ea4.js",
    "revision": "fb51b67dcc62cf80a400a96b601c9901"
  },
  {
    "url": "assets/js/9.8e84623e.js",
    "revision": "5f26f3bbb0b592b975514db620491432"
  },
  {
    "url": "assets/js/app.5ef38942.js",
    "revision": "9cd9bc10363ee3c1df20a529441c7e91"
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
    "revision": "87a4e5110d0d03b5e81b97f198e02ad6"
  },
  {
    "url": "guide/hook.html",
    "revision": "bf3576d0fc3f08769dc8513817db1d3a"
  },
  {
    "url": "guide/index.html",
    "revision": "e6aa759b7ceed336a19aa6c4d9aae97e"
  },
  {
    "url": "guide/q&a.html",
    "revision": "ce8ca37555ab99a16096993505b42cc8"
  },
  {
    "url": "index.html",
    "revision": "cfb41f5d2b780c83751569e2661eeaa5"
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
