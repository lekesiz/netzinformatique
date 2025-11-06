/**
 * Enhanced Google Analytics Event Tracking Utility
 *
 * Usage:
 * trackEvent('button_click', { button_name: 'contact', page: 'home' });
 * trackFormSubmit('contact_form');
 * trackPageView('/about');
 */

/**
 * Generate or retrieve anonymous user ID
 * Stored in localStorage for consistent tracking across sessions
 */
export function getOrCreateUserId() {
  const STORAGE_KEY = 'netz_user_id'

  let userId = localStorage.getItem(STORAGE_KEY)

  if (!userId) {
    // Generate anonymous user ID (UUID v4 format)
    userId = 'uid_' + Date.now() + '_' + Math.random().toString(36).substring(2, 15)
    localStorage.setItem(STORAGE_KEY, userId)
  }

  return userId
}

/**
 * Initialize user ID tracking with Google Analytics
 */
export function initUserIdTracking() {
  const userId = getOrCreateUserId()

  if (window.gtag) {
    window.gtag('config', 'G-RXFKWB8YQJ', {
      user_id: userId,
      cookie_flags: 'SameSite=None;Secure'
    })

    console.log('✅ User ID tracking initialized:', userId)
  }

  return userId
}

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
      user_id: getOrCreateUserId(),
      timestamp: Date.now()
    });
  }
};

export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};

export const trackDownload = (fileName) => {
  trackEvent('file_download', {
    file_name: fileName,
  });
};

export const trackOutboundLink = (url, linkText) => {
  trackEvent('outbound_link', {
    url: url,
    link_text: linkText,
  });
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

export const trackCalendlyOpen = () => {
  trackEvent('calendly_open', {
    source: 'floating_button',
  });
};

export const trackNewsletterSignup = (email) => {
  trackEvent('newsletter_signup', {
    email_domain: email.split('@')[1],
  });
};

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA4_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// E-commerce tracking (for future use)
export const trackProductView = (productId, productName, category) => {
  trackEvent('view_item', {
    items: [{
      item_id: productId,
      item_name: productName,
      item_category: category,
    }],
  });
};

export const trackAddToCart = (productId, productName, price) => {
  trackEvent('add_to_cart', {
    items: [{
      item_id: productId,
      item_name: productName,
      price: price,
    }],
  });
};

export const trackPurchase = (transactionId, value, items) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'EUR',
    items: items,
  });
};

/**
 * Track scroll depth
 * Tracks when user scrolls to 25%, 50%, 75%, 90%, 100% of page
 */
export function initScrollDepthTracking() {
  const thresholds = [25, 50, 75, 90, 100]
  const reached = new Set()

  const checkScrollDepth = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    const scrollPercent = Math.round((scrollTop + windowHeight) / documentHeight * 100)

    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !reached.has(threshold)) {
        reached.add(threshold)

        trackEvent('scroll_depth', {
          depth: threshold,
          page_path: window.location.pathname
        })
      }
    })
  }

  let scrollTimeout
  const handleScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(checkScrollDepth, 100)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}

/**
 * Track time on page
 */
export function initTimeTracking() {
  const startTime = Date.now()
  let isActive = true

  // Track when user leaves page
  const trackTimeOnPage = () => {
    if (!isActive) return

    const timeSpent = Math.round((Date.now() - startTime) / 1000) // in seconds

    trackEvent('time_on_page', {
      time_seconds: timeSpent,
      time_minutes: Math.round(timeSpent / 60),
      page_path: window.location.pathname
    })
  }

  // Track on page unload
  window.addEventListener('beforeunload', trackTimeOnPage)

  // Track on visibility change (tab switch)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      trackTimeOnPage()
      isActive = false
    } else {
      isActive = true
    }
  })

  // Cleanup
  return () => {
    window.removeEventListener('beforeunload', trackTimeOnPage)
  }
}

/**
 * Conversion Funnels
 * Track user progress through defined conversion paths
 */
export const CONVERSION_FUNNELS = {
  contact: {
    name: 'Contact Form',
    steps: [
      'contact_page_view',
      'contact_form_start',
      'contact_form_field_complete',
      'contact_form_submit',
      'contact_form_success'
    ]
  },

  service_inquiry: {
    name: 'Service Inquiry',
    steps: [
      'services_page_view',
      'service_detail_view',
      'service_cta_click',
      'inquiry_form_start',
      'inquiry_form_submit'
    ]
  },

  training_registration: {
    name: 'Training Registration',
    steps: [
      'training_page_view',
      'training_detail_view',
      'registration_form_start',
      'registration_payment_info',
      'registration_complete'
    ]
  },

  quote_request: {
    name: 'Quote Request',
    steps: [
      'quote_page_view',
      'quote_form_start',
      'quote_service_selection',
      'quote_details_complete',
      'quote_submit'
    ]
  }
}

/**
 * Track conversion funnel step
 * @param {string} funnelName - Funnel identifier
 * @param {string} stepName - Step identifier
 * @param {Object} metadata - Additional data
 */
export function trackFunnelStep(funnelName, stepName, metadata = {}) {
  const funnel = CONVERSION_FUNNELS[funnelName]

  if (!funnel) {
    console.warn('Unknown funnel:', funnelName)
    return
  }

  const stepIndex = funnel.steps.indexOf(stepName)

  trackEvent('funnel_step', {
    funnel_name: funnelName,
    funnel_display_name: funnel.name,
    step_name: stepName,
    step_index: stepIndex,
    step_total: funnel.steps.length,
    ...metadata
  })

  // Also track the specific step event
  trackEvent(stepName, {
    funnel: funnelName,
    ...metadata
  })
}

/**
 * Track form interactions (enhanced)
 * @param {string} formName - Form identifier
 * @param {string} action - Action (start, field_complete, submit, success, error)
 * @param {Object} data - Additional data
 */
export function trackFormInteraction(formName, action, data = {}) {
  trackEvent(`form_${action}`, {
    form_name: formName,
    ...data
  })
}

/**
 * Track errors
 * @param {string} errorType - Error type
 * @param {string} errorMessage - Error message
 * @param {Object} context - Error context
 */
export function trackError(errorType, errorMessage, context = {}) {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
    ...context
  })
}

/**
 * Track engagement metrics
 * @param {string} engagementType - Type of engagement
 * @param {Object} data - Engagement data
 */
export function trackEngagement(engagementType, data = {}) {
  trackEvent('engagement', {
    engagement_type: engagementType,
    ...data
  })
}

/**
 * Initialize all analytics features
 */
export function initAnalytics() {
  // Initialize user ID tracking
  initUserIdTracking()

  // Initialize scroll depth tracking
  const cleanupScroll = initScrollDepthTracking()

  // Initialize time tracking
  const cleanupTime = initTimeTracking()

  console.log('✅ Enhanced analytics initialized')

  // Return cleanup function
  return () => {
    cleanupScroll()
    cleanupTime()
  }
}
