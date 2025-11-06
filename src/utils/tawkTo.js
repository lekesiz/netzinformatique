/**
 * Tawk.to Live Chat Integration
 *
 * Provides methods to interact with Tawk.to widget
 * and seamlessly transition from AI bot to live agent
 */

/**
 * Initialize Tawk.to widget
 * @param {string} propertyId - Your Tawk.to property ID
 * @param {string} widgetId - Your Tawk.to widget ID
 */
export function initTawkTo(propertyId, widgetId) {
  if (typeof window === 'undefined') return

  // Check if already initialized
  if (window.Tawk_API) {
    console.log('[Tawk.to] Already initialized')
    return
  }

  // Create Tawk.to script
  const s1 = document.createElement('script')
  const s0 = document.getElementsByTagName('script')[0]

  s1.async = true
  s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')

  s0.parentNode.insertBefore(s1, s0)

  // Initialize Tawk_API
  window.Tawk_API = window.Tawk_API || {}
  window.Tawk_LoadStart = new Date()

  // Hide Tawk.to widget by default (we'll use our custom chat widget)
  window.Tawk_API.onLoad = function () {
    console.log('[Tawk.to] Widget loaded')
    window.Tawk_API.hideWidget()
  }

  console.log('[Tawk.to] Initializing...')
}

/**
 * Show Tawk.to widget
 */
export function showTawkWidget() {
  if (window.Tawk_API) {
    window.Tawk_API.showWidget()
  }
}

/**
 * Hide Tawk.to widget
 */
export function hideTawkWidget() {
  if (window.Tawk_API) {
    window.Tawk_API.hideWidget()
  }
}

/**
 * Open Tawk.to chat window (maximize)
 */
export function openTawkChat() {
  if (window.Tawk_API) {
    window.Tawk_API.showWidget()
    window.Tawk_API.maximize()
    return true
  }
  return false
}

/**
 * Close Tawk.to chat window (minimize)
 */
export function closeTawkChat() {
  if (window.Tawk_API) {
    window.Tawk_API.minimize()
  }
}

/**
 * Set visitor attributes (useful for context from AI chat)
 */
export function setTawkVisitorAttributes(attributes) {
  if (window.Tawk_API && window.Tawk_API.setAttributes) {
    window.Tawk_API.setAttributes(attributes, function (error) {
      if (error) {
        console.error('[Tawk.to] Error setting attributes:', error)
      } else {
        console.log('[Tawk.to] Attributes set successfully')
      }
    })
  }
}

/**
 * Add event listener to Tawk.to
 */
export function addTawkEventListener(event, callback) {
  if (window.Tawk_API) {
    window.Tawk_API[event] = callback
  }
}

/**
 * Send conversation context from AI bot to Tawk.to
 */
export function sendContextToTawk(conversationHistory, userInfo = {}) {
  if (!window.Tawk_API) return

  // Format conversation history
  const historyText = conversationHistory
    .map((msg) => `[${msg.role}]: ${msg.content}`)
    .join('\n\n')

  // Set visitor attributes with conversation context
  setTawkVisitorAttributes({
    name: userInfo.name || 'Visiteur',
    email: userInfo.email || '',
    'Conversation AI': historyText,
    'Langue': userInfo.locale || 'fr',
    'Dernier sujet': userInfo.lastTopic || 'Non spécifié',
  })

  // Add initial message to agent
  const contextMessage = `
🤖 Conversation transférée depuis l'assistant IA

📝 Historique récent:
${historyText}

ℹ️ Informations visiteur:
- Langue: ${userInfo.locale || 'fr'}
- Dernier sujet: ${userInfo.lastTopic || 'Non spécifié'}
`.trim()

  // Note: Tawk.to doesn't allow directly sending messages via API
  // This context is stored in visitor attributes for the agent to see
  console.log('[Tawk.to] Context prepared for agent:', contextMessage)
}

/**
 * Check if Tawk.to is loaded and ready
 */
export function isTawkReady() {
  return typeof window !== 'undefined' && window.Tawk_API !== undefined
}

/**
 * Get Tawk.to widget status
 */
export function getTawkStatus() {
  if (!isTawkReady()) {
    return 'not_loaded'
  }

  // Check if agents are online
  if (window.Tawk_API.isChatOngoing && window.Tawk_API.isChatOngoing()) {
    return 'chatting'
  }

  return 'ready'
}

/**
 * Hybrid chat handler - transition from AI to live agent
 */
export function transitionToLiveAgent(conversationContext, userInfo = {}) {
  if (!isTawkReady()) {
    console.error('[Tawk.to] Widget not ready')
    // Fallback to contact page
    window.location.href = '/contact'
    return false
  }

  // Send conversation context to Tawk.to
  const history = conversationContext.getConversationHistory()
  const contextInfo = {
    ...userInfo,
    locale: userInfo.locale || 'fr',
    lastTopic: conversationContext.currentTopic || 'Non spécifié',
  }

  sendContextToTawk(history, contextInfo)

  // Open Tawk.to chat
  openTawkChat()

  // Track transition
  if (window.gtag) {
    window.gtag('event', 'chatbot_to_live_agent', {
      event_category: 'Chatbot',
      event_label: conversationContext.currentTopic || 'unknown',
    })
  }

  return true
}

/**
 * Example Tawk.to Property ID (you need to replace with real one)
 * Get yours from: https://dashboard.tawk.to/
 */
export const TAWK_PROPERTY_ID = '507f1f77bcf86cd799439011' // REPLACE WITH YOUR ID
export const TAWK_WIDGET_ID = 'default' // REPLACE WITH YOUR WIDGET ID
