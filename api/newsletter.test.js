import { beforeEach, describe, expect, it, vi } from 'vitest'
import handler, { __resetRateLimit } from './newsletter.js'

const { mockSend, mockContactsCreate } = vi.hoisted(() => ({
  mockSend: vi.fn(),
  mockContactsCreate: vi.fn(),
}))

vi.mock('resend', () => ({
  Resend: vi.fn(function Resend() {
    return {
      emails: { send: mockSend },
      contacts: { create: mockContactsCreate },
    }
  }),
}))

const createResponse = () => ({
  setHeader: vi.fn(),
  status: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnThis(),
  end: vi.fn(),
})

const createRequest = () => ({
  method: 'POST',
  headers: {
    origin: 'https://www.netzinformatique.fr',
    'content-type': 'application/json',
    'x-forwarded-for': '127.0.0.1',
  },
  body: { email: ' Test@Example.com ', consent: true, consentVersion: '2026-09' },
  socket: { remoteAddress: '127.0.0.1' },
})

describe('newsletter API', () => {
  let req
  let res

  beforeEach(() => {
    vi.clearAllMocks()
    __resetRateLimit()
    req = createRequest()
    res = createResponse()
    process.env.RESEND_API_KEY = 'test-key'
    process.env.RESEND_FROM_EMAIL = 'newsletter@example.com'
    process.env.RESEND_AUDIENCE_ID = 'audience_123'
    mockContactsCreate.mockResolvedValue({ data: { id: 'contact_123' }, error: null })
    mockSend.mockResolvedValue({ data: { id: 'email_123' }, error: null })
  })

  it('handles preflight and rejects unsupported methods', async () => {
    req.method = 'OPTIONS'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(204)

    res = createResponse()
    req = createRequest()
    req.method = 'GET'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(405)
  })

  it('requires a valid email and explicit newsletter consent', async () => {
    req.body = { email: 'invalid', consent: false }
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(422)
    expect(mockContactsCreate).not.toHaveBeenCalled()
  })

  it('normalizes the address, keeps it unsubscribed, and sends an encrypted confirmation link', async () => {
    await handler(req, res)
    expect(mockContactsCreate).toHaveBeenCalledWith({
      email: 'test@example.com',
      unsubscribed: true,
      audienceId: 'audience_123',
    })
    expect(mockSend).toHaveBeenCalledWith(expect.objectContaining({
      to: 'test@example.com',
      subject: expect.stringContaining('Confirmez'),
      html: expect.stringContaining('/newsletter-confirmation?token='),
    }))
    expect(res.status).toHaveBeenCalledWith(202)
  })

  it('requires durable audience and sender configuration', async () => {
    delete process.env.RESEND_AUDIENCE_ID
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(503)
    expect(mockContactsCreate).not.toHaveBeenCalled()
  })

  it('returns 502 when audience creation is rejected', async () => {
    mockContactsCreate.mockResolvedValue({ data: null, error: { name: 'provider_error', statusCode: 400 } })
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(502)
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('treats an existing subscriber as idempotent success', async () => {
    mockContactsCreate.mockResolvedValue({ data: null, error: { name: 'already_exists', statusCode: 409 } })
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(202)
    expect(mockSend).toHaveBeenCalled()
  })

  it('does not claim success when the mandatory confirmation email is rejected', async () => {
    mockSend.mockResolvedValue({ data: null, error: { name: 'email_rejected', statusCode: 422 } })
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(502)
  })

  it('acknowledges honeypot traffic without calling Resend', async () => {
    req.body.website = 'spam.example'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(mockContactsCreate).not.toHaveBeenCalled()
  })

  it('enforces rate limiting and returns Retry-After', async () => {
    for (let index = 0; index < 4; index += 1) await handler(req, res)
    expect(res.status).toHaveBeenLastCalledWith(429)
    expect(res.setHeader).toHaveBeenCalledWith('Retry-After', expect.any(String))
  })
})
