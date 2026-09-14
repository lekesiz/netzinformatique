export const OPENAI_PIXEL_ID = 'TSLUo3yYe2rsjCqYKsxpya'
export const OPENAI_PIXEL_SCRIPT_URL = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'
export const COOKIE_CONSENT_STORAGE_KEY = 'netz_cookie_consent'
export const COOKIE_CONSENT_UPDATED_EVENT = 'netz:cookie-consent-updated'

const OPENAI_PIXEL_SCRIPT_ID = 'openai-advertising-pixel'
const OPENAI_PIXEL_INITIALIZED_FLAG = '__netzOpenAIPixelInitialized'

export function readCookiePreferences(storage = window.localStorage) {
  try {
    const storedConsent = storage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    return storedConsent ? JSON.parse(storedConsent) : null
  } catch (error) {
    console.warn('Could not read cookie preferences:', error)
    return null
  }
}

export function initOpenAITrackingPixel(win = window, doc = document) {
  if (win[OPENAI_PIXEL_INITIALIZED_FLAG]) return false

  if (!win.oaiq) {
    const queue = function () {
      queue.q.push(arguments)
    }
    queue.q = []
    win.oaiq = queue
  }

  if (!doc.getElementById(OPENAI_PIXEL_SCRIPT_ID)) {
    const script = doc.createElement('script')
    script.id = OPENAI_PIXEL_SCRIPT_ID
    script.async = true
    script.src = OPENAI_PIXEL_SCRIPT_URL

    const firstScript = doc.getElementsByTagName('script')[0]
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      doc.head.appendChild(script)
    }
  }

  win.oaiq('init', {
    pixelId: OPENAI_PIXEL_ID,
    debug: true,
  })
  win[OPENAI_PIXEL_INITIALIZED_FLAG] = true

  return true
}
