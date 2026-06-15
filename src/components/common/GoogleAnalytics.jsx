import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID } from '@/utils/analytics';

/**
 * gtag.js is loaded once from the static snippet in index.html <head>
 * (with Consent Mode defaults). This component only sends a page_view on
 * SPA route changes — client-side navigation isn't a full page load, so GA4
 * would otherwise only ever see the first page. It does NOT inject a second
 * gtag script (which would double-count) and skips the initial render
 * (already counted by the index.html config call).
 */
const GoogleAnalytics = () => {
  const location = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
