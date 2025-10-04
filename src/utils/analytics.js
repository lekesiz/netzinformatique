/**
 * Google Analytics Event Tracking Utility
 * 
 * Usage:
 * trackEvent('button_click', { button_name: 'contact', page: 'home' });
 * trackFormSubmit('contact_form');
 * trackPageView('/about');
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
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
