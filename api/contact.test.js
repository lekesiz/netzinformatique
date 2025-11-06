import { describe, it, expect, vi, beforeEach } from 'vitest'
import handler from './contact.js'

// Mock dependencies
vi.mock('@sendgrid/mail', () => ({
  default: {
    setApiKey: vi.fn(),
    send: vi.fn(),
  }
}))

vi.mock('isomorphic-dompurify', () => ({
  default: {
    sanitize: vi.fn((str) => str), // Simple pass-through for testing
  }
}))

vi.mock('validator', () => ({
  default: {
    isEmail: vi.fn((email) => email && email.includes('@')),
    isMobilePhone: vi.fn(() => true),
  }
}))

describe('Contact API Handler', () => {
  let mockReq
  let mockRes

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks()

    // Mock request
    mockReq = {
      method: 'POST',
      headers: {
        origin: 'https://netzinformatique.fr',
        'x-forwarded-for': '127.0.0.1',
      },
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message that is long enough',
      },
      connection: {
        remoteAddress: '127.0.0.1',
      }
    }

    // Mock response
    mockRes = {
      setHeader: vi.fn(),
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      end: vi.fn(),
    }

    // Mock environment variables
    process.env.SENDGRID_API_KEY = 'test_api_key'
    process.env.SENDGRID_FROM_EMAIL = 'test@example.com'
    process.env.SENDGRID_TO_EMAIL = 'admin@example.com'
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

  it('should validate required fields', async () => {
    mockReq.body = { email: 'test@example.com' } // Missing name and message

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Missing required fields' })
    )
  })

  it('should validate email format', async () => {
    mockReq.body.email = 'invalid-email'

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Invalid email' })
    )
  })

  it('should validate name length', async () => {
    mockReq.body.name = 'A' // Too short

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Invalid name' })
    )
  })

  it('should validate message length', async () => {
    mockReq.body.message = 'Short' // Too short (< 10 chars)

    await handler(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: 'Invalid message' })
    )
  })

  it('should set CORS headers for allowed origins', async () => {
    await handler(mockReq, mockRes)

    expect(mockRes.setHeader).toHaveBeenCalledWith(
      'Access-Control-Allow-Origin',
      'https://netzinformatique.fr'
    )
  })

  it('should not set CORS headers for disallowed origins', async () => {
    mockReq.headers.origin = 'https://malicious-site.com'

    await handler(mockReq, mockRes)

    const corsCall = mockRes.setHeader.mock.calls.find(
      call => call[0] === 'Access-Control-Allow-Origin' && call[1] === 'https://malicious-site.com'
    )
    expect(corsCall).toBeUndefined()
  })

  it('should enforce rate limiting', async () => {
    // Make 6 requests (limit is 5)
    for (let i = 0; i < 6; i++) {
      await handler(mockReq, mockRes)
    }

    // Last request should be rate limited
    expect(mockRes.status).toHaveBeenLastCalledWith(429)
    expect(mockRes.json).toHaveBeenLastCalledWith(
      expect.objectContaining({ error: 'Too many requests' })
    )
  })
})
