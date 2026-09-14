import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  CONSENT_CHANGED_EVENT,
  CONSENT_STORAGE_KEY,
  LEGACY_CONSENT_DATE_KEY,
  getDefaultConsent,
  hasConsent,
  readConsent,
  saveConsent,
} from './consentStore'

const createStorage = (entries = {}) => {
  const values = new Map(Object.entries(entries))
  return {
    getItem: vi.fn((key) => values.get(key) ?? null),
    setItem: vi.fn((key, value) => values.set(key, value)),
    removeItem: vi.fn((key) => values.delete(key)),
  }
}

describe('consentStore', () => {
  beforeEach(() => vi.clearAllMocks())

  it('defaults every optional category to denied', () => {
    const consent = getDefaultConsent()
    expect(consent.status).toBe('undecided')
    expect(consent.categories).toEqual({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    })
    expect(hasConsent('analytics', consent)).toBe(false)
  })

  it('migrates the previous flat schema without changing choices', () => {
    const storage = createStorage({
      [CONSENT_STORAGE_KEY]: JSON.stringify({
        necessary: true,
        analytics: true,
        functional: false,
        marketing: true,
      }),
      [LEGACY_CONSENT_DATE_KEY]: '2026-08-01T10:00:00.000Z',
    })

    const consent = readConsent(storage)
    expect(consent.version).toBe(2)
    expect(consent.source).toBe('legacy-v1')
    expect(consent.categories.analytics).toBe(true)
    expect(consent.categories.functional).toBe(false)
    expect(storage.setItem).toHaveBeenCalledWith(CONSENT_STORAGE_KEY, expect.any(String))
    expect(storage.removeItem).toHaveBeenCalledWith(LEGACY_CONSENT_DATE_KEY)
  })

  it('clears malformed data and returns an undecided choice', () => {
    const storage = createStorage({ [CONSENT_STORAGE_KEY]: '{broken' })
    const consent = readConsent(storage)

    expect(consent.status).toBe('undecided')
    expect(storage.removeItem).toHaveBeenCalledWith(CONSENT_STORAGE_KEY)
  })

  it('persists normalized choices and publishes the canonical event', () => {
    const storage = createStorage()
    const listener = vi.fn()
    window.addEventListener(CONSENT_CHANGED_EVENT, listener)

    const saved = saveConsent({ analytics: true, marketing: true }, 'test', storage)

    expect(saved.categories).toEqual({
      necessary: true,
      analytics: true,
      functional: false,
      marketing: true,
    })
    expect(storage.setItem).toHaveBeenCalledWith(CONSENT_STORAGE_KEY, expect.any(String))
    expect(listener).toHaveBeenCalledOnce()
    window.removeEventListener(CONSENT_CHANGED_EVENT, listener)
  })
})
