import { useEffect } from 'react'
import ChatWidget from '@/components/chat/ChatWidget'
import { initTawkTo, TAWK_PROPERTY_ID, TAWK_WIDGET_ID } from '@/utils/tawkTo'

/**
 * Hybrid Chat System
 *
 * Combines AI-powered chatbot with Tawk.to live chat
 * - Initial interactions handled by AI bot
 * - Seamless transition to live agent when needed
 * - Context preservation across transition
 */
const HybridChat = () => {
  useEffect(() => {
    // Get Tawk.to credentials from environment variables
    const tawkPropertyId = import.meta.env.VITE_TAWK_PROPERTY_ID || TAWK_PROPERTY_ID
    const tawkWidgetId = import.meta.env.VITE_TAWK_WIDGET_ID || TAWK_WIDGET_ID

    if (!tawkPropertyId || !tawkWidgetId) {
      console.warn('[HybridChat] Tawk.to credentials not configured, using fallback')
      console.warn('[HybridChat] Add VITE_TAWK_PROPERTY_ID and VITE_TAWK_WIDGET_ID to .env file')
      return
    }

    // Initialize Tawk.to (hidden by default, shown when user requests live agent)
    initTawkTo(tawkPropertyId, tawkWidgetId)

    // Cleanup function
    return () => {
      // Remove Tawk.to widget on unmount
      const tawkWidget = document.getElementById('tawkId')
      if (tawkWidget) {
        tawkWidget.remove()
      }
    }
  }, [])

  return (
    <>
      {/* AI-powered Chat Widget (primary interface) */}
      <ChatWidget />
    </>
  )
}

export default HybridChat
