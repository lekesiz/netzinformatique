import * as Sentry from '@sentry/react'

// Initialize Sentry
export function initSentry() {
  // Only initialize in production
  if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,

      // Environment
      environment: import.meta.env.MODE,

      // Release tracking
      release: `netz-informatique@${import.meta.env.VITE_APP_VERSION || '1.0.0'}`,

      // Performance Monitoring
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],

      // Performance Monitoring - Sample rate
      tracesSampleRate: 0.1, // 10% of transactions

      // Session Replay - Sample rate
      replaysSessionSampleRate: 0.1, // 10% of sessions
      replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors

      // Errors to ignore
      ignoreErrors: [
        // Browser extensions
        'top.GLOBALS',
        'chrome-extension://',
        'moz-extension://',
        // Network errors
        'NetworkError',
        'Failed to fetch',
        // Third-party
        'ResizeObserver loop limit exceeded',
      ],

      // URLs to ignore
      denyUrls: [
        // Browser extensions
        /extensions\//i,
        /^chrome:\/\//i,
        /^moz-extension:\/\//i,
      ],

      // Before sending event
      beforeSend(event, hint) {
        // Don't send events in development
        if (import.meta.env.DEV) {
          console.error('Sentry Event (DEV):', event, hint)
          return null
        }

        // Filter out certain errors
        if (event.exception) {
          const error = hint.originalException

          // Ignore cancelled requests
          if (error?.message?.includes('cancelled')) {
            return null
          }
        }

        return event
      },

      // Before sending breadcrumb
      beforeBreadcrumb(breadcrumb) {
        // Filter console breadcrumbs in production
        if (breadcrumb.category === 'console' && breadcrumb.level === 'log') {
          return null
        }
        return breadcrumb
      },
    })

    console.log('✅ Sentry initialized')
  } else {
    console.log('ℹ️ Sentry not initialized (development or DSN not configured)')
  }
}

// Capture exception manually
export function captureException(error, context = {}) {
  if (import.meta.env.DEV) {
    console.error('Error captured:', error, context)
  }

  Sentry.captureException(error, {
    extra: context,
  })
}

// Capture message manually
export function captureMessage(message, level = 'info', context = {}) {
  if (import.meta.env.DEV) {
    console.log(`[${level}] ${message}`, context)
  }

  Sentry.captureMessage(message, {
    level,
    extra: context,
  })
}

// Set user context
export function setUserContext(user) {
  Sentry.setUser(user ? {
    id: user.id,
    email: user.email,
    username: user.username,
  } : null)
}

// Add breadcrumb
export function addBreadcrumb(breadcrumb) {
  Sentry.addBreadcrumb(breadcrumb)
}

// Set tag
export function setTag(key, value) {
  Sentry.setTag(key, value)
}

// Set context
export function setContext(name, context) {
  Sentry.setContext(name, context)
}

export default Sentry
