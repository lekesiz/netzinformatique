import { act, fireEvent, render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter, useNavigate } from 'react-router-dom'
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

const renderPixel = (children = null) => render(
  <MemoryRouter>
    {children}
    <OpenAITrackingPixel />
  </MemoryRouter>
)

const NavigationTrigger = () => {
  const navigate = useNavigate()
  return <button onClick={() => navigate('/services?source=test')}>Navigate</button>
}

describe('OpenAITrackingPixel', () => {
  beforeEach(() => {
    resetPixel()
    vi.clearAllMocks()
  })

  it('does not load before marketing consent is granted', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify({ marketing: false }))

    renderPixel()

    expect(document.getElementById('openai-advertising-pixel')).toBeNull()
    expect(window.oaiq).toBeUndefined()
  })

  it('loads and measures the first page for stored marketing consent', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify({ marketing: true }))

    renderPixel()

    const script = document.getElementById('openai-advertising-pixel')
    expect(script).toBeTruthy()
    expect(script.src).toBe(OPENAI_PIXEL_SCRIPT_URL)
    expect(Array.from(window.oaiq.q[0])).toEqual([
      'init',
      { pixelId: OPENAI_PIXEL_ID, debug: true },
    ])
    expect(Array.from(window.oaiq.q[1])).toEqual([
      'measure',
      'page_viewed',
      { type: 'contents' },
    ])
  })

  it('loads and measures immediately when consent changes', () => {
    localStorage.getItem.mockReturnValue(null)

    renderPixel()

    act(() => {
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, {
        detail: { marketing: true },
      }))
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, {
        detail: { marketing: true },
      }))
    })

    expect(document.querySelectorAll('#openai-advertising-pixel')).toHaveLength(1)
    expect(window.oaiq.q).toHaveLength(2)
  })

  it('measures each SPA location once after consent', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify({ marketing: true }))

    const { getByRole } = renderPixel(<NavigationTrigger />)

    fireEvent.click(getByRole('button', { name: 'Navigate' }))

    const calls = window.oaiq.q.map(call => Array.from(call))
    expect(calls).toEqual([
      ['init', { pixelId: OPENAI_PIXEL_ID, debug: true }],
      ['measure', 'page_viewed', { type: 'contents' }],
      ['measure', 'page_viewed', { type: 'contents' }],
    ])
  })
})
