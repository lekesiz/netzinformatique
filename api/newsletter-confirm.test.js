import { beforeEach, describe, expect, it, vi } from 'vitest'
import handler from './newsletter-confirm.js'
import { createNewsletterToken } from '../server/newsletterToken.js'

const { mockUpdate } = vi.hoisted(() => ({ mockUpdate: vi.fn() }))
vi.mock('resend', () => ({ Resend: vi.fn(function Resend() { return { contacts: { update: mockUpdate } } }) }))
const response = () => ({ setHeader: vi.fn(), status: vi.fn().mockReturnThis(), json: vi.fn().mockReturnThis(), end: vi.fn() })
const request = (token) => ({ method: 'POST', headers: { origin: 'https://www.netzinformatique.fr', 'content-type': 'application/json' }, body: { token } })

describe('newsletter confirmation API', () => {
  beforeEach(() => { vi.clearAllMocks(); process.env.RESEND_API_KEY = 'test-key'; mockUpdate.mockResolvedValue({ data: { id: 'contact' }, error: null }) })
  it('activates a valid pending contact', async () => {
    const req = request(createNewsletterToken('person@example.com', 'test-key')); const res = response()
    await handler(req, res)
    expect(mockUpdate).toHaveBeenCalledWith({ email: 'person@example.com', unsubscribed: false })
    expect(res.status).toHaveBeenCalledWith(200)
  })
  it('rejects a tampered token without contacting Resend', async () => {
    const req = request('a'.repeat(80)); const res = response()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(410)
    expect(mockUpdate).not.toHaveBeenCalled()
  })
})
