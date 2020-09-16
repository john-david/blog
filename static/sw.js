importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1d69aff.js",
    "revision": "a0e3ba561e39457480961bf04429ec2f"
  },
  {
    "url": "/_nuxt/2f3b282.js",
    "revision": "b665a1a8ddf26461cab1a0db100a5770"
  },
  {
    "url": "/_nuxt/3170e1c.js",
    "revision": "25a6fe71d6ec0e1d9e0a10d3c5d3759d"
  },
  {
    "url": "/_nuxt/6b0d0d9.js",
    "revision": "8db6bbb37146934e4ae00fa3ac288cfd"
  },
  {
    "url": "/_nuxt/8153221.js",
    "revision": "5c455cd0feb0ac6f37682615f5582942"
  },
  {
    "url": "/_nuxt/8748572.js",
    "revision": "67108ee12de97bd0488933ef1a7c0aa1"
  },
  {
    "url": "/_nuxt/8eaeebd.js",
    "revision": "2ec99e7f9018e0103fcc3e9dc13a9276"
  },
  {
    "url": "/_nuxt/a70ca79.js",
    "revision": "0d55cb3efe00cc01b6c86f2b8915a41d"
  },
  {
    "url": "/_nuxt/app.db06eec.css",
    "revision": "c9ec394e935eb37753d33233fb3d9d63"
  },
  {
    "url": "/_nuxt/d87b05a.js",
    "revision": "d487704969ccf929c75f377508fe6f44"
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
    "url": "/_nuxt/vendors/app.920e5d8.css",
    "revision": "3e3569ee1fdeca689c8b42a2f26636bd"
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
