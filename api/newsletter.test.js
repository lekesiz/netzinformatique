import { describe, it, expect, vi, beforeEach } from 'vitest'
import handler from './newsletter.js'

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

// Mock global fetch
global.fetch = vi.fn()

describe('Newsletter API Handler', () => {
  let mockReq
  let mockRes

  beforeEach(() => {
    vi.clearAllMocks()

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

    process.env.SENDGRID_API_KEY = 'test_api_key'
    process.env.SENDGRID_FROM_EMAIL = 'newsletter@example.com'

    // Mock successful fetch response
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })
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

  it('should enforce rate limiting', async () => {
    // Make 4 requests (limit is 3)
    for (let i = 0; i < 4; i++) {
      // Use different IPs to avoid rate limit collision
      mockReq.headers['x-forwarded-for'] = `127.0.0.${i}`
      if (i === 3) {
        // Fourth request with same IP should be rate limited
        mockReq.headers['x-forwarded-for'] = '127.0.0.0'
      }
      await handler(mockReq, mockRes)
    }

    // Last request should be rate limited
    expect(mockRes.status).toHaveBeenLastCalledWith(429)
  })

  it('should return error when SENDGRID_API_KEY is missing', async () => {
    delete process.env.SENDGRID_API_KEY

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Newsletter service not configured' })
    )
  })

  it('should handle SendGrid API errors', async () => {
    process.env.SENDGRID_API_KEY = 'test_key'

    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'SendGrid error' }),
    })

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(500)
  })
})
