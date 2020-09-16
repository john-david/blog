importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13d05af.js",
    "revision": "4953e595d11f444c0162822fec9eb2a8"
  },
  {
    "url": "/_nuxt/200312a.js",
    "revision": "98fe3a3cd41d55c2141f899834eda0b1"
  },
  {
    "url": "/_nuxt/204d89b.js",
    "revision": "3f3018cc883b0c08cba0a26b5bc66291"
  },
  {
    "url": "/_nuxt/5944929.js",
    "revision": "c428c2afd173bd45bbb8a45caa2fd81e"
  },
  {
    "url": "/_nuxt/8936c19.js",
    "revision": "86e8c3841765b72e14e34dcc2336e932"
  },
  {
    "url": "/_nuxt/9b4ef5c.js",
    "revision": "eec93e02f28cdb032d685934e7bc4250"
  },
  {
    "url": "/_nuxt/app.db06eec.css",
    "revision": "c9ec394e935eb37753d33233fb3d9d63"
  },
  {
    "url": "/_nuxt/c8e6c94.js",
    "revision": "d753a50bdaf03c9d3ba3e88b9ac053a4"
  },
  {
    "url": "/_nuxt/d624c4e.js",
    "revision": "99df464f03cbddb9fbd210f6277748a6"
  },
  {
    "url": "/_nuxt/f011f12.js",
    "revision": "414c876eca7cc62eb5e2341c0d2827e3"
  },
  {
    "url": "/_nuxt/pages/categories.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/_slug.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/index.fc6cde2.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  },
  {
    "url": "/_nuxt/vendors/app.580f46c.css",
    "revision": "1d6cd4793334d3db929aba7e3e98ec92"
  }
], {
  "cacheId": "johndavid.org",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
