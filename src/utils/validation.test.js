import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidPhoneNumber,
  isValidName,
  isValidMessage,
  sanitizeString,
  formatPhoneNumber,
  truncateText,
  isSafeString,
} from './validation'

describe('Email Validation', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
    expect(isValidEmail('contact@netzinformatique.fr')).toBe(true)
  })

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('invalid')).toBe(false)
    expect(isValidEmail('invalid@')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
    expect(isValidEmail('user@domain')).toBe(false)
    expect(isValidEmail(null)).toBe(false)
    expect(isValidEmail(undefined)).toBe(false)
  })
})

describe('Phone Number Validation', () => {
  it('should validate French phone numbers', () => {
    expect(isValidPhoneNumber('0123456789')).toBe(true)
    expect(isValidPhoneNumber('01 23 45 67 89')).toBe(true)
    expect(isValidPhoneNumber('01-23-45-67-89')).toBe(true)
    expect(isValidPhoneNumber('01.23.45.67.89')).toBe(true)
  })

  it('should validate international format', () => {
    expect(isValidPhoneNumber('+33123456789')).toBe(true)
    expect(isValidPhoneNumber('0033123456789')).toBe(true)
  })

  it('should reject invalid phone numbers', () => {
    expect(isValidPhoneNumber('')).toBe(false)
    expect(isValidPhoneNumber('123')).toBe(false)
    expect(isValidPhoneNumber('abcdefghij')).toBe(false)
    expect(isValidPhoneNumber(null)).toBe(false)
    expect(isValidPhoneNumber(undefined)).toBe(false)
  })
})

describe('Name Validation', () => {
  it('should validate correct names', () => {
    expect(isValidName('John Doe')).toBe(true)
    expect(isValidName('Marie-Claire')).toBe(true)
    expect(isValidName('O\'Brien')).toBe(true)
  })

  it('should respect length constraints', () => {
    expect(isValidName('A')).toBe(false) // Too short (< 2)
    expect(isValidName('AB')).toBe(true) // Min length
    expect(isValidName('A'.repeat(100))).toBe(true) // Max length
    expect(isValidName('A'.repeat(101))).toBe(false) // Too long
  })

  it('should reject invalid names', () => {
    expect(isValidName('')).toBe(false)
    expect(isValidName('   ')).toBe(false)
    expect(isValidName(null)).toBe(false)
    expect(isValidName(undefined)).toBe(false)
  })

  it('should support custom length constraints', () => {
    expect(isValidName('ABC', 5, 10)).toBe(false) // Too short
    expect(isValidName('ABCDE', 5, 10)).toBe(true) // Min
    expect(isValidName('ABCDEFGHIJ', 5, 10)).toBe(true) // Max
    expect(isValidName('ABCDEFGHIJK', 5, 10)).toBe(false) // Too long
  })
})

describe('Message Validation', () => {
  it('should validate correct messages', () => {
    expect(isValidMessage('This is a valid message')).toBe(true)
    expect(isValidMessage('A'.repeat(100))).toBe(true)
  })

  it('should respect length constraints', () => {
    expect(isValidMessage('Short')).toBe(false) // Too short (< 10)
    expect(isValidMessage('A'.repeat(10))).toBe(true) // Min length
    expect(isValidMessage('A'.repeat(5000))).toBe(true) // Max length
    expect(isValidMessage('A'.repeat(5001))).toBe(false) // Too long
  })

  it('should reject invalid messages', () => {
    expect(isValidMessage('')).toBe(false)
    expect(isValidMessage('   ')).toBe(false)
    expect(isValidMessage(null)).toBe(false)
    expect(isValidMessage(undefined)).toBe(false)
  })
})

describe('String Sanitization', () => {
  it('should escape HTML special characters', () => {
    expect(sanitizeString('<script>alert("xss")</script>'))
      .toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')

    expect(sanitizeString('Hello & goodbye'))
      .toBe('Hello &amp; goodbye')

    expect(sanitizeString("It's a test"))
      .toBe('It&#x27;s a test')
  })

  it('should handle empty or null values', () => {
    expect(sanitizeString('')).toBe('')
    expect(sanitizeString(null)).toBe('')
    expect(sanitizeString(undefined)).toBe('')
  })

  it('should not modify safe strings', () => {
    expect(sanitizeString('Hello World')).toBe('Hello World')
    expect(sanitizeString('123')).toBe('123')
  })
})

describe('Phone Number Formatting', () => {
  it('should format French phone numbers', () => {
    expect(formatPhoneNumber('0123456789')).toBe('01 23 45 67 89')
    expect(formatPhoneNumber('0612345678')).toBe('06 12 34 56 78')
  })

  it('should format international phone numbers', () => {
    expect(formatPhoneNumber('+33123456789'))
      .toBe('+33 1 23 45 67 89')
  })

  it('should handle already formatted numbers', () => {
    expect(formatPhoneNumber('01 23 45 67 89')).toBeTruthy()
  })

  it('should handle empty or null values', () => {
    expect(formatPhoneNumber('')).toBe('')
    expect(formatPhoneNumber(null)).toBe('')
    expect(formatPhoneNumber(undefined)).toBe('')
  })
})

describe('Text Truncation', () => {
  it('should truncate long text', () => {
    const longText = 'A'.repeat(200)
    const result = truncateText(longText, 100)
    expect(result.length).toBeLessThanOrEqual(103) // 100 + '...'
    expect(result).toMatch(/\.\.\.$/)
  })

  it('should not truncate short text', () => {
    const shortText = 'Short text'
    expect(truncateText(shortText, 100)).toBe(shortText)
  })

  it('should handle edge cases', () => {
    expect(truncateText('')).toBe('')
    expect(truncateText(null)).toBe(null)
    expect(truncateText(undefined)).toBe(undefined)
  })

  it('should respect custom max length', () => {
    const text = 'This is a test message'
    const result = truncateText(text, 10)
    expect(result.length).toBeLessThanOrEqual(13) // 10 + '...'
  })
})

describe('Safe String Validation', () => {
  it('should validate safe strings', () => {
    expect(isSafeString('Hello World')).toBe(true)
    expect(isSafeString('Test 123')).toBe(true)
    expect(isSafeString('Hello, World!')).toBe(true)
    expect(isSafeString('C\'est bon.')).toBe(true)
    expect(isSafeString('Café')).toBe(true) // Accented characters
  })

  it('should reject potentially dangerous strings', () => {
    expect(isSafeString('<script>')).toBe(false)
    expect(isSafeString('test@#$%^&*')).toBe(false)
    expect(isSafeString('test|pipe')).toBe(false)
  })

  it('should handle empty or null values', () => {
    expect(isSafeString('')).toBe(true)
    expect(isSafeString(null)).toBe(true)
    expect(isSafeString(undefined)).toBe(true)
  })
})
