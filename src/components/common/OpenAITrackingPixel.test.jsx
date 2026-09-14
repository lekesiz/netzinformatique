import { act, render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import OpenAITrackingPixel from './OpenAITrackingPixel'
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  OPENAI_PIXEL_ID,
  OPENAI_PIXEL_SCRIPT_URL,
} from '../../utils/openaiTrackingPixel'

const resetPixel = () => {
  document.getElementById('openai-advertising-pixel')?.remove()
  delete window.oaiq
  delete window.__netzOpenAIPixelInitialized
}

describe('OpenAITrackingPixel', () => {
  beforeEach(() => {
    resetPixel()
    vi.clearAllMocks()
  })

  it('does not load before marketing consent is granted', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify({ marketing: false }))

    render(<OpenAITrackingPixel />)

    expect(document.getElementById('openai-advertising-pixel')).toBeNull()
    expect(window.oaiq).toBeUndefined()
  })

  it('loads and initializes immediately for stored marketing consent', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify({ marketing: true }))

    render(<OpenAITrackingPixel />)

    const script = document.getElementById('openai-advertising-pixel')
    expect(script).toBeTruthy()
    expect(script.src).toBe(OPENAI_PIXEL_SCRIPT_URL)
    expect(Array.from(window.oaiq.q[0])).toEqual([
      'init',
      { pixelId: OPENAI_PIXEL_ID, debug: true },
    ])
  })

  it('loads after consent changes and initializes only once', () => {
    localStorage.getItem.mockReturnValue(null)

    render(<OpenAITrackingPixel />)

    act(() => {
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, {
        detail: { marketing: true },
      }))
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, {
        detail: { marketing: true },
      }))
    })

    expect(document.querySelectorAll('#openai-advertising-pixel')).toHaveLength(1)
    expect(window.oaiq.q).toHaveLength(1)
  })
})
