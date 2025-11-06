import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

/**
 * Initialize Web Vitals monitoring
 * Sends metrics to Google Analytics and console in development
 */
export function initWebVitals() {
  const sendToAnalytics = (metric) => {
    // Log in development
    if (import.meta.env.DEV) {
      console.log('📊 Web Vital:', metric)
    }

    // Send to Google Analytics 4
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_rating: metric.rating,
      })
    }

    // Send to custom analytics endpoint (optional)
    if (import.meta.env.VITE_ANALYTICS_ENDPOINT) {
      fetch(import.meta.env.VITE_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
          id: metric.id,
          timestamp: Date.now(),
          url: window.location.pathname,
        }),
      }).catch(err => console.error('Failed to send metric:', err))
    }
  }

  // Measure Core Web Vitals
  onCLS(sendToAnalytics)  // Cumulative Layout Shift
  onFID(sendToAnalytics)  // First Input Delay (deprecated, use INP)
  onFCP(sendToAnalytics)  // First Contentful Paint
  onLCP(sendToAnalytics)  // Largest Contentful Paint
  onTTFB(sendToAnalytics) // Time to First Byte
  onINP(sendToAnalytics)  // Interaction to Next Paint (new metric)

  console.log('✅ Web Vitals monitoring initialized')
}

/**
 * Get performance metrics summary
 */
export function getPerformanceMetrics() {
  if (!window.performance) {
    return null
  }

  const navigation = performance.getEntriesByType('navigation')[0]
  const paint = performance.getEntriesByType('paint')

  const fcp = paint.find(entry => entry.name === 'first-contentful-paint')
  const lcp = performance.getEntriesByType('largest-contentful-paint').slice(-1)[0]

  return {
    // Navigation Timing
    dns: navigation ? Math.round(navigation.domainLookupEnd - navigation.domainLookupStart) : 0,
    tcp: navigation ? Math.round(navigation.connectEnd - navigation.connectStart) : 0,
    ttfb: navigation ? Math.round(navigation.responseStart - navigation.requestStart) : 0,
    download: navigation ? Math.round(navigation.responseEnd - navigation.responseStart) : 0,
    domInteractive: navigation ? Math.round(navigation.domInteractive) : 0,
    domComplete: navigation ? Math.round(navigation.domComplete) : 0,
    loadComplete: navigation ? Math.round(navigation.loadEventEnd) : 0,

    // Paint Timing
    fcp: fcp ? Math.round(fcp.startTime) : 0,
    lcp: lcp ? Math.round(lcp.startTime) : 0,

    // Resource Timing
    resources: performance.getEntriesByType('resource').length,
  }
}

/**
 * Measure custom timing
 */
export function measurePerformance(name, startMark, endMark) {
  try {
    if (performance.measure) {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name)[0]

      if (import.meta.env.DEV) {
        console.log(`⏱️ ${name}: ${Math.round(measure.duration)}ms`)
      }

      return Math.round(measure.duration)
    }
  } catch (error) {
    console.error('Performance measurement error:', error)
  }
  return null
}

/**
 * Mark performance checkpoint
 */
export function markPerformance(name) {
  try {
    if (performance.mark) {
      performance.mark(name)
    }
  } catch (error) {
    console.error('Performance mark error:', error)
  }
}

/**
 * Clear performance marks
 */
export function clearPerformanceMarks(name) {
  try {
    if (name) {
      performance.clearMarks(name)
    } else {
      performance.clearMarks()
    }
  } catch (error) {
    console.error('Clear marks error:', error)
  }
}

/**
 * Log performance summary to console
 */
export function logPerformanceSummary() {
  const metrics = getPerformanceMetrics()

  if (metrics) {
    console.table({
      'DNS Lookup': `${metrics.dns}ms`,
      'TCP Connection': `${metrics.tcp}ms`,
      'Time to First Byte': `${metrics.ttfb}ms`,
      'Download Time': `${metrics.download}ms`,
      'DOM Interactive': `${metrics.domInteractive}ms`,
      'DOM Complete': `${metrics.domComplete}ms`,
      'Load Complete': `${metrics.loadComplete}ms`,
      'First Contentful Paint': `${metrics.fcp}ms`,
      'Largest Contentful Paint': `${metrics.lcp}ms`,
      'Total Resources': metrics.resources,
    })
  }
}

/**
 * Monitor long tasks (> 50ms)
 */
export function monitorLongTasks(callback) {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            if (import.meta.env.DEV) {
              console.warn('⚠️ Long task detected:', {
                duration: Math.round(entry.duration),
                startTime: Math.round(entry.startTime),
              })
            }

            if (callback) {
              callback(entry)
            }
          }
        }
      })

      observer.observe({ entryTypes: ['longtask'] })

      return () => observer.disconnect()
    } catch (error) {
      console.error('Long task observer error:', error)
    }
  }

  return () => {}
}

/**
 * Get Web Vitals thresholds and ratings
 */
export const WEB_VITALS_THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 },    // First Contentful Paint
  LCP: { good: 2500, poor: 4000 },    // Largest Contentful Paint
  FID: { good: 100, poor: 300 },      // First Input Delay
  INP: { good: 200, poor: 500 },      // Interaction to Next Paint
  CLS: { good: 0.1, poor: 0.25 },     // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 },    // Time to First Byte
}

/**
 * Rate a metric value (good, needs-improvement, poor)
 */
export function rateMetric(name, value) {
  const threshold = WEB_VITALS_THRESHOLDS[name]
  if (!threshold) return 'unknown'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}
