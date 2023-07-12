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
    "revision": "4e58af92a5d770ac13feef65b344a0a8"
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
    "url": "assets/js/10.23658078.js",
    "revision": "ba7062b3dfd4f1d921498d9570cc7bd3"
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
    "url": "assets/js/9.10b72488.js",
    "revision": "5c88b0815656357f0ad40347ded56c54"
  },
  {
    "url": "assets/js/app.64007fb6.js",
    "revision": "335dc8555643479bf7e386f0aca69d17"
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
    "revision": "25481419057ff45b85affad5c82993f1"
  },
  {
    "url": "guide/hook.html",
    "revision": "76b2e9093df4d22e3a7f99565040a7e1"
  },
  {
    "url": "guide/index.html",
    "revision": "9d5637124c225e4d15cdf0184fc0bab7"
  },
  {
    "url": "guide/q&a.html",
    "revision": "c179300a517451fd8a2f0155620df0df"
  },
  {
    "url": "index.html",
    "revision": "f5db30f2e9c3c161af423c5108447641"
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
