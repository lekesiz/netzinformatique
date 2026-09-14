export const OPENAI_PIXEL_ID = 'TSLUo3yYe2rsjCqYKsxpya'
export const OPENAI_PIXEL_SCRIPT_URL = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'

const OPENAI_PIXEL_SCRIPT_ID = 'openai-advertising-pixel'
const OPENAI_PIXEL_INITIALIZED_FLAG = '__netzOpenAIPixelInitialized'

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
    script.dataset.netzVendor = 'openai-advertising'
    doc.head.appendChild(script)
  }

  win.oaiq('init', {
    pixelId: OPENAI_PIXEL_ID,
    debug: false,
  })
  win[OPENAI_PIXEL_INITIALIZED_FLAG] = true
  return true
}

export function disposeOpenAITrackingPixel(win = window, doc = document) {
  doc.getElementById(OPENAI_PIXEL_SCRIPT_ID)?.remove()
  delete win.oaiq
  delete win[OPENAI_PIXEL_INITIALIZED_FLAG]
}
