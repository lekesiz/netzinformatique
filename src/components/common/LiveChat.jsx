import { useEffect } from 'react'
import { useConsent } from '../../consent/ConsentProvider'

const TAWK_SCRIPT_ID = 'netz-tawk-chat'

const LiveChat = () => {
  const { categories } = useConsent()

  useEffect(() => {
    const tawkPropertyId = import.meta.env.VITE_TAWK_PROPERTY_ID
    const tawkWidgetId = import.meta.env.VITE_TAWK_WIDGET_ID

    if (!categories.functional || !tawkPropertyId || !tawkWidgetId) {
      window.Tawk_API?.hideWidget?.()
      document.getElementById(TAWK_SCRIPT_ID)?.remove()
      return undefined
    }

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    if (!document.getElementById(TAWK_SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = TAWK_SCRIPT_ID
      script.async = true
      script.src = `https://embed.tawk.to/${encodeURIComponent(tawkPropertyId)}/${encodeURIComponent(tawkWidgetId)}`
      script.charset = 'UTF-8'
      script.crossOrigin = 'anonymous'
      script.dataset.netzVendor = 'tawk-chat'
      document.head.appendChild(script)
    }

    return () => {
      window.Tawk_API?.hideWidget?.()
      document.getElementById(TAWK_SCRIPT_ID)?.remove()
    }
  }, [categories.functional])

  return null
}

export default LiveChat
