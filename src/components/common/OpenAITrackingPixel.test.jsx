import { act, fireEvent, render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import OpenAITrackingPixel from './OpenAITrackingPixel'
import { ConsentProvider } from '../../consent/ConsentProvider'
import {
  CONSENT_CHANGED_EVENT,
  CONSENT_STORAGE_KEY,
} from '../../consent/consentStore'
import { OPENAI_PIXEL_ID, OPENAI_PIXEL_SCRIPT_URL } from '../../utils/openaiTrackingPixel'

const consentRecord = (marketing) => ({
  version: 2,
  status: 'decided',
  source: 'test',
  updatedAt: '2026-09-14T00:00:00.000Z',
  policyRevision: '2026-09',
  categories: {
    necessary: true,
    analytics: false,
    functional: false,
    marketing,
  },
})

const setStoredConsent = (marketing) => {
  localStorage.getItem.mockImplementation((key) => (
    key === CONSENT_STORAGE_KEY ? JSON.stringify(consentRecord(marketing)) : null
  ))
}

const resetPixel = () => {
  document.getElementById('openai-advertising-pixel')?.remove()
  delete window.oaiq
  delete window.__netzOpenAIPixelInitialized
}

const renderPixel = (children = null) => render(
  <MemoryRouter>
    <ConsentProvider>
      {children}
      <OpenAITrackingPixel />
    </ConsentProvider>
  </MemoryRouter>
)

const NavigationTrigger = () => {
  const navigate = useNavigate()
  return <button onClick={() => navigate('/services?source=test')}>Navigate</button>
}

const publishConsent = (marketing) => {
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, {
    detail: consentRecord(marketing),
  }))
}

describe('OpenAITrackingPixel', () => {
  beforeEach(() => {
    resetPixel()
    vi.clearAllMocks()
  })

  it('does not load before marketing consent is granted', () => {
    setStoredConsent(false)
    renderPixel()

    expect(document.getElementById('openai-advertising-pixel')).toBeNull()
    expect(window.oaiq).toBeUndefined()
  })

  it('loads and measures the first page for stored marketing consent', () => {
    setStoredConsent(true)
    renderPixel()

    const script = document.getElementById('openai-advertising-pixel')
    expect(script).toBeTruthy()
    expect(script.src).toBe(OPENAI_PIXEL_SCRIPT_URL)
    expect(Array.from(window.oaiq.q[0])).toEqual([
      'init',
      { pixelId: OPENAI_PIXEL_ID, debug: false },
    ])
    expect(Array.from(window.oaiq.q[1])).toEqual([
      'measure',
      'page_viewed',
      { type: 'contents' },
    ])
  })

  it('loads and measures immediately when consent changes', () => {
    setStoredConsent(false)
    renderPixel()

    act(() => publishConsent(true))

    expect(document.querySelectorAll('#openai-advertising-pixel')).toHaveLength(1)
    expect(window.oaiq.q).toHaveLength(2)
  })

  it('measures each SPA location once after consent', () => {
    setStoredConsent(true)
    const { getByRole } = renderPixel(<NavigationTrigger />)

    fireEvent.click(getByRole('button', { name: 'Navigate' }))

    const calls = window.oaiq.q.map((call) => Array.from(call))
    expect(calls).toEqual([
      ['init', { pixelId: OPENAI_PIXEL_ID, debug: false }],
      ['measure', 'page_viewed', { type: 'contents' }],
      ['measure', 'page_viewed', { type: 'contents' }],
    ])
  })

  it('removes the pixel on withdrawal and can initialize again after regrant', () => {
    setStoredConsent(true)
    renderPixel()

    act(() => publishConsent(false))
    expect(document.getElementById('openai-advertising-pixel')).toBeNull()
    expect(window.oaiq).toBeUndefined()

    act(() => publishConsent(true))
    expect(document.getElementById('openai-advertising-pixel')).toBeTruthy()
    expect(window.oaiq.q.map((call) => Array.from(call))).toEqual([
      ['init', { pixelId: OPENAI_PIXEL_ID, debug: false }],
      ['measure', 'page_viewed', { type: 'contents' }],
    ])
  })
})
