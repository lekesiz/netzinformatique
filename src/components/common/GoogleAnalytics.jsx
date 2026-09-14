import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useConsent } from '../../consent/ConsentProvider'
import {
  disposeGoogleAnalytics,
  initAnalytics,
  initGoogleAnalytics,
  trackPageView,
} from '../../utils/analytics'
import { initWebVitals } from '../../utils/webVitals'

const GoogleAnalytics = () => {
  const location = useLocation()
  const { categories } = useConsent()
  const lifecycleCleanup = useRef(null)
  const lastPage = useRef(null)

  useEffect(() => {
    if (!categories.analytics) {
      lifecycleCleanup.current?.()
      lifecycleCleanup.current = null
      lastPage.current = null
      disposeGoogleAnalytics()
      return undefined
    }

    initGoogleAnalytics()
    const cleanupAnalytics = initAnalytics()
    const cleanupVitals = initWebVitals()
    lifecycleCleanup.current = () => {
      cleanupAnalytics()
      cleanupVitals()
    }

    return () => {
      lifecycleCleanup.current?.()
      lifecycleCleanup.current = null
    }
  }, [categories.analytics])

  useEffect(() => {
    if (!categories.analytics || !initGoogleAnalytics()) return undefined

    const page = location.pathname + location.search
    if (lastPage.current === page) return undefined

    const frame = requestAnimationFrame(() => {
      trackPageView(page)
      lastPage.current = page
    })

    return () => cancelAnimationFrame(frame)
  }, [categories.analytics, location.pathname, location.search])

  return null
}

export default GoogleAnalytics
