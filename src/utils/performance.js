/**
 * Performance utilities for lazy loading and optimization
 */

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImages(selector = 'img[data-src]') {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.getAttribute('data-src')
          const srcset = img.getAttribute('data-srcset')

          if (src) {
            img.src = src
            img.removeAttribute('data-src')
          }

          if (srcset) {
            img.srcset = srcset
            img.removeAttribute('data-srcset')
          }

          img.classList.add('loaded')
          observer.unobserve(img)
        }
      })
    }, {
      rootMargin: '50px', // Start loading 50px before entering viewport
    })

    document.querySelectorAll(selector).forEach(img => {
      imageObserver.observe(img)
    })

    return imageObserver
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll(selector).forEach(img => {
      const src = img.getAttribute('data-src')
      const srcset = img.getAttribute('data-srcset')

      if (src) img.src = src
      if (srcset) img.srcset = srcset

      img.classList.add('loaded')
    })
  }
}

/**
 * Preload critical resources
 */
export function preloadResource(href, as = 'image', type = null) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as

  if (type) {
    link.type = type
  }

  document.head.appendChild(link)
}

/**
 * Prefetch resources for next navigation
 */
export function prefetchResource(href) {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = href
  document.head.appendChild(link)
}

/**
 * Debounce function for performance
 */
export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for performance
 */
export function throttle(func, limit = 100) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Check connection type and speed
 */
export function getConnectionInfo() {
  if ('connection' in navigator || 'mozConnection' in navigator || 'webkitConnection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    return {
      effectiveType: connection.effectiveType, // '4g', '3g', '2g', 'slow-2g'
      downlink: connection.downlink, // Mbps
      rtt: connection.rtt, // Round trip time in ms
      saveData: connection.saveData, // Boolean
    }
  }

  return null
}

/**
 * Check if connection is slow
 */
export function isSlowConnection() {
  const connection = getConnectionInfo()

  if (!connection) return false

  return (
    connection.saveData ||
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    (connection.effectiveType === '3g' && connection.rtt > 300)
  )
}

/**
 * Dynamically import module with error handling
 */
export async function dynamicImport(importFn, retries = 3) {
  try {
    return await importFn()
  } catch (error) {
    if (retries > 0) {
      console.warn(`Import failed, retrying... (${retries} attempts left)`)
      await new Promise(resolve => setTimeout(resolve, 1000))
      return dynamicImport(importFn, retries - 1)
    }
    throw error
  }
}

/**
 * Request idle callback polyfill
 */
export function requestIdleCallback(callback, options) {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options)
  }

  // Fallback
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => 50,
    })
  }, 1)
}

/**
 * Cancel idle callback polyfill
 */
export function cancelIdleCallback(id) {
  if ('cancelIdleCallback' in window) {
    return window.cancelIdleCallback(id)
  }

  return clearTimeout(id)
}

/**
 * Optimize font loading
 */
export function optimizeFontLoading() {
  if ('fonts' in document) {
    // Preload critical fonts
    const fonts = [
      new FontFace('Inter', 'url(/fonts/inter-var.woff2)', {
        weight: '100 900',
        style: 'normal',
      }),
    ]

    fonts.forEach(font => {
      font.load().then(loadedFont => {
        document.fonts.add(loadedFont)
      }).catch(error => {
        console.error('Font loading failed:', error)
      })
    })
  }
}

/**
 * Get device memory (if available)
 */
export function getDeviceMemory() {
  return navigator.deviceMemory || null // Returns GB or null
}

/**
 * Get hardware concurrency (CPU cores)
 */
export function getHardwareConcurrency() {
  return navigator.hardwareConcurrency || 2 // Default to 2 if not available
}

/**
 * Check if device is low-end
 */
export function isLowEndDevice() {
  const memory = getDeviceMemory()
  const cores = getHardwareConcurrency()

  return (memory && memory < 4) || cores < 4
}

/**
 * Adaptive loading based on device capability
 */
export function shouldLoadHighQuality() {
  const isLowEnd = isLowEndDevice()
  const isSlow = isSlowConnection()

  return !isLowEnd && !isSlow
}

/**
 * Log bundle size warning in development
 */
export function logBundleSize() {
  if (import.meta.env.DEV && performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource')
    const jsResources = resources.filter(r => r.name.endsWith('.js'))

    let totalSize = 0
    jsResources.forEach(resource => {
      totalSize += resource.transferSize || 0
    })

    const totalKB = (totalSize / 1024).toFixed(2)

    if (totalSize > 500000) { // > 500KB
      console.warn(`⚠️ Large bundle size detected: ${totalKB} KB`)
    } else {
      console.log(`✅ Bundle size: ${totalKB} KB`)
    }
  }
}
