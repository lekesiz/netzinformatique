import { useEffect } from 'react'
import { useConsent } from '../../consent/ConsentProvider'

const GTM_SCRIPT_ID = 'netz-google-tag-manager'

const GoogleTagManager = () => {
  const { categories } = useConsent()
  const gtmId = import.meta.env.VITE_GTM_ID
  const isEnabled = import.meta.env.VITE_ENABLE_GTM === 'true'

  useEffect(() => {
    if (!categories.analytics || !isEnabled || !gtmId || gtmId === 'GTM-XXXXXXX') {
      document.getElementById(GTM_SCRIPT_ID)?.remove()
      return undefined
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

    if (!document.getElementById(GTM_SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = GTM_SCRIPT_ID
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`
      script.dataset.netzVendor = 'google-tag-manager'
      document.head.appendChild(script)
    }

    return () => document.getElementById(GTM_SCRIPT_ID)?.remove()
  }, [categories.analytics, gtmId, isEnabled])

  return null
}

export default GoogleTagManager
