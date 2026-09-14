import { describe, expect, it, vi } from 'vitest'
import { createNewsletterToken, verifyNewsletterToken } from './newsletterToken.js'

describe('newsletter confirmation tokens', () => {
  it('round-trips an email without exposing it in the token', () => {
    const token = createNewsletterToken('person@example.com', 'secret')
    expect(token).not.toContain('person')
    expect(verifyNewsletterToken(token, 'secret')?.email).toBe('person@example.com')
    expect(verifyNewsletterToken(token, 'wrong-secret')).toBeNull()
  })

  it('rejects expired tokens', () => {
    vi.spyOn(Date, 'now').mockReturnValueOnce(1).mockReturnValue(25 * 60 * 60 * 1000)
    const token = createNewsletterToken('person@example.com', 'secret')
    expect(verifyNewsletterToken(token, 'secret')).toBeNull()
    vi.restoreAllMocks()
  })
})
