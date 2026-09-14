import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  initOpenAITrackingPixel,
  readCookiePreferences,
} from '../../utils/openaiTrackingPixel'

/**
 * Loads the OpenAI advertising pixel only after the visitor has granted
 * marketing-cookie consent. It also reacts immediately to a new consent
 * choice without requiring a page refresh.
 */
const OpenAITrackingPixel = () => {
  const location = useLocation()
  const lastMeasuredLocation = useRef(null)

  useEffect(() => {
    const initializeAndMeasureWhenAllowed = (event) => {
      const preferences = event?.detail ?? readCookiePreferences()

      if (preferences?.marketing) {
        initOpenAITrackingPixel()

        const currentLocation = location.pathname + location.search
        if (lastMeasuredLocation.current !== currentLocation) {
          window.oaiq('measure', 'page_viewed', { type: 'contents' })
          lastMeasuredLocation.current = currentLocation
        }
      }
    }

    initializeAndMeasureWhenAllowed()
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, initializeAndMeasureWhenAllowed)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, initializeAndMeasureWhenAllowed)
    }
  }, [location.pathname, location.search])

  return null
}

export default OpenAITrackingPixel
