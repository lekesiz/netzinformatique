import { useEffect } from 'react'
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
  useEffect(() => {
    const initializeWhenAllowed = (event) => {
      const preferences = event?.detail ?? readCookiePreferences()

      if (preferences?.marketing) {
        initOpenAITrackingPixel()
      }
    }

    initializeWhenAllowed()
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, initializeWhenAllowed)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, initializeWhenAllowed)
    }
  }, [])

  return null
}

export default OpenAITrackingPixel
