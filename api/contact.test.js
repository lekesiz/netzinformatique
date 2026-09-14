import { beforeEach, describe, expect, it, vi } from 'vitest'
import handler, { __resetRateLimit } from './contact.js'

const { mockSend } = vi.hoisted(() => ({ mockSend: vi.fn() }))
vi.mock('resend', () => ({
  Resend: vi.fn(function Resend() {
    return { emails: { send: mockSend } }
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
    'x-forwarded-for': '127.0.0.1, 10.0.0.1',
  },
  body: {
    name: 'Jean Dupont',
    email: 'jean@example.com',
    message: 'Bonjour, je souhaite obtenir un devis.',
  },
  socket: { remoteAddress: '127.0.0.1' },
})

describe('contact API', () => {
  let req
  let res

  beforeEach(() => {
    vi.clearAllMocks()
    __resetRateLimit()
    req = createRequest()
    res = createResponse()
    process.env.RESEND_API_KEY = 'test-key'
    process.env.RESEND_FROM_EMAIL = 'site@example.com'
    process.env.RESEND_TO_EMAIL = 'contact@example.com'
    mockSend.mockResolvedValue({ data: { id: 'email_123' }, error: null })
  })

  it('returns a 204 preflight with explicit methods', async () => {
    req.method = 'OPTIONS'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(204)
    expect(res.setHeader).toHaveBeenCalledWith('Allow', 'POST, OPTIONS')
    expect(res.end).toHaveBeenCalled()
  })

  it('rejects unsupported methods and origins', async () => {
    req.method = 'GET'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(405)

    res = createResponse()
    req = createRequest()
    req.headers.origin = 'https://attacker.example'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(403)
  })

  it('rejects wrong media types and oversized requests', async () => {
    req.headers['content-type'] = 'text/plain'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(415)

    res = createResponse()
    req = createRequest()
    req.headers['content-length'] = String(17 * 1024)
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(413)
  })

  it('returns field errors for invalid input and unknown fields', async () => {
    req.body = { ...req.body, name: 'A', email: 'invalid', extra: true }
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(422)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      code: 'validation_failed',
      fieldErrors: expect.any(Object),
    }))
  })

  it('acknowledges honeypot traffic without sending email', async () => {
    req.body.website = 'spam.example'
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('returns 503 instead of false success when delivery is unconfigured', async () => {
    delete process.env.RESEND_API_KEY
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(503)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ code: 'delivery_unavailable' }))
  })

  it('escapes every HTML interpolation and normalizes the mail subject', async () => {
    req.body = {
      name: '<img src=x onerror=alert(1)>',
      email: 'safe@example.com',
      phone: '+33 6 12 34 56 78',
      subject: 'Hello\r\nBcc: attacker@example.com',
      message: '<script>alert(1)</script>\nNext line',
    }
    await handler(req, res)

    const payload = mockSend.mock.calls[0][0]
    expect(payload.html).not.toContain('<script>alert(1)</script>')
    expect(payload.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;<br>Next line')
    expect(payload.html).toContain('&lt;img src=x onerror=alert(1)&gt;')
    expect(payload.subject).not.toMatch(/[\r\n]/)
    expect(payload.replyTo).toBe('safe@example.com')
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('returns 502 when Resend resolves with an error', async () => {
    mockSend.mockResolvedValue({ data: null, error: { name: 'validation_error', statusCode: 422 } })
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(502)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ code: 'delivery_failed' }))
  })

  it('enforces a bounded per-IP rate limit with Retry-After', async () => {
    for (let index = 0; index < 6; index += 1) await handler(req, res)
    expect(res.status).toHaveBeenLastCalledWith(429)
    expect(res.setHeader).toHaveBeenCalledWith('Retry-After', expect.any(String))
  })
})
