import * as Sentry from '@sentry/react'

let isSentryActive = false

const removeSensitiveUrlParts = (url) => {
  if (!url) return url
  try {
    const parsed = new URL(url)
    parsed.search = ''
    parsed.hash = ''
    return parsed.toString()
  } catch {
    return String(url).split(/[?#]/)[0]
  }
}

const scrubEvent = (event) => {
  const clean = { ...event }
  if (clean.request) {
    clean.request = {
      method: clean.request.method,
      url: removeSensitiveUrlParts(clean.request.url),
    }
  }
  delete clean.user
  if (clean.extra) clean.extra = { note: 'Additional context removed for privacy.' }
  if (clean.contexts) delete clean.contexts.user
  return clean
}

export function startSentry() {
  if (isSentryActive || !import.meta.env.PROD || !import.meta.env.VITE_SENTRY_DSN) return false

  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: `netz-informatique@${import.meta.env.VITE_APP_VERSION || '1.0.0'}`,
    sendDefaultPii: false,
    integrations: [],
    tracesSampleRate: 0,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    ignoreErrors: [
      'top.GLOBALS',
      'chrome-extension://',
      'moz-extension://',
      'NetworkError',
      'Failed to fetch',
      'ResizeObserver loop limit exceeded',
    ],
    denyUrls: [/extensions\//i, /^chrome:\/\//i, /^moz-extension:\/\//i],
    beforeSend(event, hint) {
      if (hint.originalException?.message?.includes('cancelled')) return null
      return scrubEvent(event)
    },
    beforeBreadcrumb(breadcrumb) {
      if (breadcrumb.category === 'console') return null
      const clean = { ...breadcrumb }
      if (clean.data?.url) clean.data = { ...clean.data, url: removeSensitiveUrlParts(clean.data.url) }
      return clean
    },
  })

  isSentryActive = true
  return true
}

export async function stopSentry() {
  if (!isSentryActive) return
  isSentryActive = false
  Sentry.setUser(null)
  await Sentry.close(1500)
}

/** @deprecated Use startSentry from the consent-aware integration lifecycle. */
export const initSentry = startSentry

export function captureException(error, context = {}) {
  if (import.meta.env.DEV) console.error('Error captured:', error)
  if (!isSentryActive) return null
  return Sentry.captureException(error, {
    extra: context.componentStack ? { componentStack: String(context.componentStack).slice(0, 2000) } : {},
  })
}

export function captureMessage(message, level = 'info') {
  if (!isSentryActive) return null
  return Sentry.captureMessage(String(message).slice(0, 200), { level })
}

export function setUserContext() {
  if (isSentryActive) Sentry.setUser(null)
}

export function addBreadcrumb(breadcrumb) {
  if (isSentryActive) Sentry.addBreadcrumb({
    category: breadcrumb?.category,
    level: breadcrumb?.level,
    message: breadcrumb?.message ? String(breadcrumb.message).slice(0, 200) : undefined,
  })
}

export function setTag(key, value) {
  if (isSentryActive) Sentry.setTag(String(key).slice(0, 50), String(value).slice(0, 100))
}

export function setContext(name) {
  if (isSentryActive) Sentry.setContext(name, null)
}

export const isSentryEnabled = () => isSentryActive

export default Sentry
