const CACHE_VERSION = 'v2.0.0'
const CACHE_NAME = `netz-shell-${CACHE_VERSION}`
const RUNTIME_CACHE = `netz-runtime-${CACHE_VERSION}`

const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((name) => name.startsWith('netz-') && name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name)),
      ))
      .then(() => self.clients.claim()),
  )
})

const isCacheable = (response) => (
  response.ok && response.status === 200 && response.type === 'basic'
)

const isUnexpectedHtmlAsset = (request, response) => {
  const expectsExecutableAsset = ['script', 'style', 'font'].includes(request.destination)
  const contentType = response.headers.get('content-type') || ''
  return expectsExecutableAsset && contentType.includes('text/html')
}

async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)
  if (cached) return cached

  const response = await fetch(request)
  if (isCacheable(response) && !isUnexpectedHtmlAsset(request, response)) {
    await cache.put(request, response.clone())
  }
  return response
}

async function networkFirst(request, offlineFallback = false) {
  const cache = await caches.open(RUNTIME_CACHE)
  try {
    const response = await fetch(request)
    if (isCacheable(response) && !isUnexpectedHtmlAsset(request, response)) {
      await cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    const cached = await cache.match(request)
    if (cached) return cached
    if (offlineFallback) {
      const offline = await caches.match('/offline.html')
      if (offline) return offline
    }
    throw error
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/api/')) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, true))
    return
  }

  if (['script', 'style', 'image', 'font'].includes(request.destination)) {
    event.respondWith(cacheFirst(request))
    return
  }

  event.respondWith(networkFirst(request))
})

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting()

  if (event.data?.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys()
        .then((cacheNames) => Promise.all(cacheNames.map((name) => caches.delete(name))))
        .then(() => event.ports[0]?.postMessage({ success: true })),
    )
  }
})
