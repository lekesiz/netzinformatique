import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useConsent } from '../../consent/ConsentProvider'
import {
  disposeOpenAITrackingPixel,
  initOpenAITrackingPixel,
} from '../../utils/openaiTrackingPixel'

const OpenAITrackingPixel = () => {
  const location = useLocation()
  const { categories } = useConsent()
  const lastMeasuredLocation = useRef(null)

  useEffect(() => {
    if (!categories.marketing) {
      lastMeasuredLocation.current = null
      disposeOpenAITrackingPixel()
      return
    }

    initOpenAITrackingPixel()
  }, [categories.marketing])

  useEffect(() => {
    if (!categories.marketing) return

    initOpenAITrackingPixel()
    const currentLocation = location.pathname + location.search
    if (lastMeasuredLocation.current !== currentLocation && typeof window.oaiq === 'function') {
      window.oaiq('measure', 'page_viewed', { type: 'contents' })
      lastMeasuredLocation.current = currentLocation
    }
  }, [categories.marketing, location.pathname, location.search])

  return null
}

export default OpenAITrackingPixel
