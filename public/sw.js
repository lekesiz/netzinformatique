/**
 * Service Worker for NETZ Informatique PWA
 * Provides offline support, caching, and background sync
 */

const CACHE_VERSION = 'v1.0.0'
const CACHE_NAME = `netz-cache-${CACHE_VERSION}`
const RUNTIME_CACHE = `netz-runtime-${CACHE_VERSION}`
const IMAGE_CACHE = `netz-images-${CACHE_VERSION}`

// Cache expiration settings
const MAX_RUNTIME_CACHE_SIZE = 50 // Maximum number of items in runtime cache
const MAX_IMAGE_CACHE_SIZE = 60 // Maximum number of images to cache
const IMAGE_CACHE_EXPIRATION = 30 * 24 * 60 * 60 * 1000 // 30 days

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// Routes that should work offline (cache-first strategy)
const OFFLINE_ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/blog',
  '/faq'
]

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...')

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching app shell')
        return cache.addAll(PRECACHE_ASSETS)
      })
      .then(() => {
        console.log('[SW] Service worker installed successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('[SW] Precache failed:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...')

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              // Delete caches that don't match current version
              return name.startsWith('netz-') && name !== CACHE_NAME && name !== RUNTIME_CACHE
            })
            .map((name) => {
              console.log('[SW] Deleting old cache:', name)
              return caches.delete(name)
            })
        )
      })
      .then(() => {
        console.log('[SW] Service worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return
  }

  // Skip chrome extensions
  if (url.protocol === 'chrome-extension:') {
    return
  }

  // API requests - network first, fallback to cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request))
    return
  }

  // HTML pages - network first, fallback to cache, then offline page
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstWithOffline(request))
    return
  }

  // Images - stale while revalidate (for better performance)
  if (request.destination === 'image') {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE, MAX_IMAGE_CACHE_SIZE))
    return
  }

  // Static assets (JS, CSS, fonts) - cache first
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font'
  ) {
    event.respondWith(cacheFirst(request))
    return
  }

  // Default: network first
  event.respondWith(networkFirst(request))
})

/**
 * Cache first strategy
 * Serve from cache if available, otherwise fetch from network and cache
 */
async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)

  if (cached) {
    return cached
  }

  try {
    const response = await fetch(request)

    // Cache successful responses
    if (response.status === 200) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    console.error('[SW] Fetch failed:', error)

    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html')
    }

    throw error
  }
}

/**
 * Network first strategy
 * Try network first, fallback to cache if offline
 */
async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE)

  try {
    const response = await fetch(request)

    // Cache successful responses
    if (response.status === 200) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url)

    const cached = await cache.match(request)

    if (cached) {
      return cached
    }

    throw error
  }
}

/**
 * Network first with offline fallback
 * For HTML pages - try network, then cache, then offline page
 */
async function networkFirstWithOffline(request) {
  const cache = await caches.open(RUNTIME_CACHE)

  try {
    const response = await fetch(request)

    // Cache successful responses
    if (response.status === 200) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url)

    const cached = await cache.match(request)

    if (cached) {
      return cached
    }

    // Fallback to offline page
    console.log('[SW] No cache, returning offline page')
    return caches.match('/offline.html')
  }
}

// Message event - handle commands from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => caches.delete(name))
        )
      }).then(() => {
        event.ports[0].postMessage({ success: true })
      })
    )
  }
})

// Background sync event (optional - for form submissions)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms())
  }
})

async function syncForms() {
  // Implement background form sync if needed
  console.log('[SW] Background sync triggered')
}

/**
 * Stale-while-revalidate strategy
 * Serve from cache immediately, update cache in background
 */
async function staleWhileRevalidate(request, cacheName, maxSize) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)

  // Fetch in background
  const fetchPromise = fetch(request)
    .then(async (response) => {
      if (response.status === 200) {
        // Limit cache size
        const keys = await cache.keys()
        if (keys.length >= maxSize) {
          await cache.delete(keys[0]) // Delete oldest
        }

        cache.put(request, response.clone())
      }
      return response
    })
    .catch((error) => {
      console.error('[SW] Fetch failed:', error)
      return cached // Return cached if network fails
    })

  // Return cached immediately if available, otherwise wait for network
  return cached || fetchPromise
}

/**
 * Limit cache size
 */
async function limitCacheSize(cacheName, maxSize) {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()

  if (keys.length > maxSize) {
    // Delete oldest items
    const deletePromises = keys.slice(0, keys.length - maxSize).map((key) => cache.delete(key))
    await Promise.all(deletePromises)
  }
}

console.log('[SW] Service worker loaded')
