import { hasConsent } from '../consent/consentStore'

export const GA_MEASUREMENT_ID = 'G-1P3QYCN1MJ'
export const GA_SCRIPT_ID = 'netz-google-analytics'

const BLOCKED_PARAMETER_PATTERN = /^(email|message|phone|full_name|user_id|address|content|query|error_message)$/i
let analyticsCleanup = null
let googleAnalyticsInitialized = false

export const canUseAnalytics = () => (
  typeof window !== 'undefined' && hasConsent('analytics')
)

const sanitizeEventParams = (params = {}) => Object.fromEntries(
  Object.entries(params)
    .filter(([key, value]) => !BLOCKED_PARAMETER_PATTERN.test(key) && ['string', 'number', 'boolean'].includes(typeof value))
    .map(([key, value]) => [key, typeof value === 'string' ? value.slice(0, 100) : value])
)

const ensureGtagQueue = () => {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }
  return window.gtag
}

export function initGoogleAnalytics() {
  if (!canUseAnalytics()) return false

  const gtag = ensureGtagQueue()
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement('script')
    script.id = GA_SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`
    script.dataset.netzVendor = 'google-analytics'
    document.head.appendChild(script)
  }

  if (!googleAnalyticsInitialized) {
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
      cookie_flags: 'SameSite=None;Secure',
    })
    googleAnalyticsInitialized = true
  }

  return true
}

const removeFirstPartyAnalyticsCookies = () => {
  document.cookie.split(';').forEach((entry) => {
    const name = entry.split('=')[0]?.trim()
    if (!name || (!name.startsWith('_ga') && !name.startsWith('_gid'))) return
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.netzinformatique.fr; SameSite=Lax`
  })
}

export function disposeGoogleAnalytics() {
  if (typeof window === 'undefined') return
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true
  analyticsCleanup?.()
  analyticsCleanup = null
  googleAnalyticsInitialized = false
  document.getElementById(GA_SCRIPT_ID)?.remove()
  localStorage.removeItem('netz_user_id')
  removeFirstPartyAnalyticsCookies()
}

/** @deprecated Persistent analytics identifiers were removed for data minimization. */
export function getOrCreateUserId() {
  return null
}

/** @deprecated Google Analytics is now initialized by the consent-aware route adapter. */
export function initUserIdTracking() {
  return null
}

export const trackEvent = (eventName, eventParams = {}) => {
  if (!canUseAnalytics() || typeof window.gtag !== 'function') return false
  window.gtag('event', eventName, sanitizeEventParams(eventParams))
  return true
}

export const trackFormSubmit = (formName) => trackEvent('form_submit', { form_name: formName })
export const trackButtonClick = (buttonName, location) => trackEvent('button_click', { button_name: buttonName, location })
export const trackServiceView = (serviceName) => trackEvent('service_view', { service_name: serviceName })
export const trackDownload = (fileName) => trackEvent('file_download', { file_name: fileName })
export const trackOutboundLink = (url, linkText) => trackEvent('outbound_link', {
  destination_host: (() => {
    try { return new URL(url, window.location.origin).hostname } catch { return 'invalid' }
  })(),
  link_label: linkText,
})
export const trackSearch = () => trackEvent('search_used')
export const trackCalendlyOpen = () => trackEvent('calendly_open', { source: 'floating_button' })
export const trackNewsletterSignup = () => trackEvent('newsletter_signup')

export const trackPageView = (path) => trackEvent('page_view', {
  page_path: path,
  page_title: document.title,
})

export const trackProductView = (productId, productName, category) => trackEvent('view_item', {
  item_id: productId,
  item_label: productName,
  item_category: category,
})

export const trackAddToCart = (productId, productName, price) => trackEvent('add_to_cart', {
  item_id: productId,
  item_label: productName,
  price,
  currency: 'EUR',
})

export const trackPurchase = (transactionId, value) => trackEvent('purchase', {
  transaction_id: transactionId,
  value,
  currency: 'EUR',
})

export function initScrollDepthTracking() {
  const thresholds = [25, 50, 75, 90, 100]
  const reached = new Set()
  let scrollTimeout

  const checkScrollDepth = () => {
    if (!canUseAnalytics()) return
    const documentHeight = document.documentElement.scrollHeight
    if (!documentHeight) return
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollPercent = Math.round(((scrollTop + window.innerHeight) / documentHeight) * 100)

    thresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !reached.has(threshold)) {
        reached.add(threshold)
        trackEvent('scroll_depth', { depth: threshold, page_path: window.location.pathname })
      }
    })
  }

  const handleScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(checkScrollDepth, 100)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => {
    clearTimeout(scrollTimeout)
    window.removeEventListener('scroll', handleScroll)
  }
}

export function initTimeTracking() {
  const startTime = Date.now()
  let isActive = true

  const trackTimeOnPage = () => {
    if (!isActive || !canUseAnalytics()) return
    const timeSpent = Math.round((Date.now() - startTime) / 1000)
    trackEvent('time_on_page', {
      time_seconds: timeSpent,
      page_path: window.location.pathname,
    })
  }

  const handleVisibilityChange = () => {
    if (document.hidden) {
      trackTimeOnPage()
      isActive = false
    } else {
      isActive = true
    }
  }

  window.addEventListener('beforeunload', trackTimeOnPage)
  document.addEventListener('visibilitychange', handleVisibilityChange)

  return () => {
    window.removeEventListener('beforeunload', trackTimeOnPage)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  }
}

export const CONVERSION_FUNNELS = {
  contact: {
    name: 'Contact Form',
    steps: ['contact_page_view', 'contact_form_start', 'contact_form_field_complete', 'contact_form_submit', 'contact_form_success'],
  },
  service_inquiry: {
    name: 'Service Inquiry',
    steps: ['services_page_view', 'service_detail_view', 'service_cta_click', 'inquiry_form_start', 'inquiry_form_submit'],
  },
  training_registration: {
    name: 'Training Registration',
    steps: ['training_page_view', 'training_detail_view', 'registration_form_start', 'registration_payment_info', 'registration_complete'],
  },
  quote_request: {
    name: 'Quote Request',
    steps: ['quote_page_view', 'quote_form_start', 'quote_service_selection', 'quote_details_complete', 'quote_submit'],
  },
}

export function trackFunnelStep(funnelName, stepName, metadata = {}) {
  const funnel = CONVERSION_FUNNELS[funnelName]
  if (!funnel) return false
  const stepIndex = funnel.steps.indexOf(stepName)
  trackEvent('funnel_step', {
    funnel_name: funnelName,
    funnel_label: funnel.name,
    step_name: stepName,
    step_index: stepIndex,
    step_total: funnel.steps.length,
    ...metadata,
  })
  return trackEvent(stepName, { funnel: funnelName, ...metadata })
}

export function trackFormInteraction(formName, action, data = {}) {
  return trackEvent(`form_${action}`, { form_name: formName, ...data })
}

export function initConversionTracking() {
  const handleClick = (event) => {
    if (!canUseAnalytics()) return
    const link = event.target.closest?.('a[href]')
    if (!link) return
    const href = link.getAttribute('href') || ''
    const sourceRoute = window.location.pathname

    if (href.startsWith('tel:')) trackEvent('phone_click', { source_route: sourceRoute })
    else if (href.includes('wa.me/')) trackEvent('whatsapp_click', { source_route: sourceRoute })
    else if (href.startsWith('/contact')) {
      const target = new URL(href, window.location.origin)
      trackEvent('quote_cta_click', {
        source_route: sourceRoute,
        audience: target.searchParams.get('audience') || 'unknown',
        service: target.searchParams.get('service') || 'unknown',
        offer: target.searchParams.get('offer') || 'none',
      })
    }
  }

  document.addEventListener('click', handleClick)
  return () => document.removeEventListener('click', handleClick)
}

export function trackError(errorType) {
  return trackEvent('error', { error_type: errorType })
}

export function trackEngagement(engagementType, data = {}) {
  return trackEvent('engagement', { engagement_type: engagementType, ...data })
}

export function initAnalytics() {
  if (!canUseAnalytics()) return () => {}
  if (analyticsCleanup) return analyticsCleanup

  const cleanupScroll = initScrollDepthTracking()
  const cleanupTime = initTimeTracking()
  const cleanupConversions = initConversionTracking()
  analyticsCleanup = () => {
    cleanupScroll()
    cleanupTime()
    cleanupConversions()
  }
  return analyticsCleanup
}
