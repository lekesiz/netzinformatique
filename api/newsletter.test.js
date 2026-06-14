import { describe, it, expect, vi, beforeEach } from 'vitest'
import handler, { __resetRateLimit } from './newsletter.js'

// Mock dependencies
vi.mock('isomorphic-dompurify', () => ({
  default: {
    sanitize: vi.fn((str) => str?.toLowerCase().trim()),
  }
}))

vi.mock('validator', () => ({
  default: {
    isEmail: vi.fn((email) => email && email.includes('@') && email.includes('.')),
  }
}))

// Mock Resend
const mockSend = vi.fn()
const mockContactsCreate = vi.fn()
vi.mock('resend', () => ({
  // Must be a real function (not arrow) so `new Resend()` works
  Resend: vi.fn(function () {
    return {
      emails: { send: mockSend },
      contacts: { create: mockContactsCreate },
    }
  }),
}))

describe('Newsletter API Handler', () => {
  let mockReq
  let mockRes

  beforeEach(() => {
    vi.clearAllMocks()
    // Reset rate-limit state so each test starts clean
    __resetRateLimit()

    mockReq = {
      method: 'POST',
      headers: {
        origin: 'https://netzinformatique.fr',
        'x-forwarded-for': '127.0.0.1',
      },
      body: {
        email: 'test@example.com',
      },
      connection: {
        remoteAddress: '127.0.0.1',
      }
    }

    mockRes = {
      setHeader: vi.fn(),
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      end: vi.fn(),
    }

    process.env.RESEND_API_KEY = 'test_api_key'
    process.env.RESEND_FROM_EMAIL = 'newsletter@example.com'

    // Mock successful email send
    mockSend.mockResolvedValue({ id: 'email_123' })
    mockContactsCreate.mockResolvedValue({ id: 'contact_123' })
  })

  it('should handle OPTIONS request', async () => {
    mockReq.method = 'OPTIONS'

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.end).toHaveBeenCalled()
  })

  it('should reject non-POST requests', async () => {
    mockReq.method = 'GET'

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(405)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Method not allowed' })
    )
  })

  it('should validate email format', async () => {
    mockReq.body.email = 'invalid-email'

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: 'Invalid email address',
      })
    )
  })

  it('should reject missing email', async () => {
    mockReq.body = {}

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
  })

  it('should set CORS headers for allowed origins', async () => {
    await handler(mockReq, mockRes)

    expect(mockRes.setHeader).toHaveBeenCalledWith(
      'Access-Control-Allow-Origin',
      'https://netzinformatique.fr'
    )
  })

  it('should subscribe successfully and send a welcome email', async () => {
    await handler(mockReq, mockRes)

    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'test@example.com' })
    )
    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true })
    )
  })

  it('should enforce rate limiting', async () => {
    // Limit is 3 per window; the 4th request from the same IP is rejected
    for (let i = 0; i < 4; i++) {
      await handler(mockReq, mockRes)
    }

    expect(mockRes.status).toHaveBeenLastCalledWith(429)
  })

  it('should return error when RESEND_API_KEY is missing', async () => {
    delete process.env.RESEND_API_KEY

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Newsletter service not configured' })
    )
  })

  it('should handle Resend API errors', async () => {
    mockSend.mockRejectedValue(new Error('Resend error'))

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Failed to subscribe to newsletter' })
    )
  })
})
