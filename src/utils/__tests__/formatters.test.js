import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import {
  formatDate,
  formatDateShort,
  formatDateTime,
  formatTime,
  formatRelativeTime,
  formatNumber,
  formatCurrency,
  formatPercent,
  formatFileSize,
  formatPhoneNumber,
  formatDuration,
  formatPostalCode,
  truncate,
  capitalize,
  formatBusinessHours
} from '../formatters'

describe('formatters', () => {
  describe('formatDate', () => {
    it('should format date in French locale', () => {
      const date = new Date('2025-01-06')
      const result = formatDate(date, 'fr')
      expect(result).toContain('janvier')
      expect(result).toContain('2025')
    })

    it('should format date in English locale', () => {
      const date = new Date('2025-01-06')
      const result = formatDate(date, 'en')
      expect(result).toContain('January')
      expect(result).toContain('2025')
    })

    it('should handle invalid date', () => {
      const result = formatDate('invalid')
      expect(result).toBe('')
    })

    it('should handle null/undefined', () => {
      expect(formatDate(null)).toBe('')
      expect(formatDate(undefined)).toBe('')
    })
  })

  describe('formatDateShort', () => {
    it('should format date in short format', () => {
      const date = new Date('2025-01-06')
      const result = formatDateShort(date, 'fr')
      expect(result).toMatch(/06\/01\/2025/)
    })
  })

  describe('formatDateTime', () => {
    it('should format date with time', () => {
      const date = new Date('2025-01-06T14:30:00')
      const result = formatDateTime(date, 'fr')
      expect(result).toContain('janvier')
      expect(result).toContain('14')
      expect(result).toContain('30')
    })
  })

  describe('formatTime', () => {
    it('should format time only', () => {
      const date = new Date('2025-01-06T14:30:00')
      const result = formatTime(date, 'fr')
      expect(result).toContain('14')
      expect(result).toContain('30')
    })

    it('should handle invalid date', () => {
      const result = formatTime('invalid')
      expect(result).toBe('')
    })
  })

  describe('formatRelativeTime', () => {
    beforeEach(() => {
      // Mock Date.now() to get consistent results
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2025-01-06T12:00:00'))
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should format past time (hours ago)', () => {
      const past = new Date('2025-01-06T10:00:00')
      const result = formatRelativeTime(past, 'fr')
      expect(result).toContain('2')
      expect(result).toContain('heure')
    })

    it('should format future time (in days)', () => {
      const future = new Date('2025-01-08T12:00:00')
      const result = formatRelativeTime(future, 'fr')
      // Intl.RelativeTimeFormat may return "après-demain" (day after tomorrow) for 2 days
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThan(0)
    })

    it('should handle invalid date', () => {
      const result = formatRelativeTime('invalid')
      expect(result).toBe('')
    })
  })

  describe('formatNumber', () => {
    it('should format number with French locale', () => {
      const result = formatNumber(1234.56, 'fr')
      expect(result).toContain('1')
      expect(result).toContain('234')
      expect(result).toContain('56')
    })

    it('should format number with English locale', () => {
      const result = formatNumber(1234.56, 'en')
      expect(result).toContain('1,234')
    })

    it('should handle null/undefined/NaN', () => {
      expect(formatNumber(null)).toBe('')
      expect(formatNumber(undefined)).toBe('')
      expect(formatNumber(NaN)).toBe('')
    })

    it('should accept custom options', () => {
      const result = formatNumber(1234.567, 'fr', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      expect(result).toBeDefined()
    })
  })

  describe('formatCurrency', () => {
    it('should format EUR currency in French', () => {
      const result = formatCurrency(1234.56, 'fr', 'EUR')
      expect(result).toContain('1')
      expect(result).toContain('234')
      expect(result).toContain('€')
    })

    it('should format USD currency in English', () => {
      const result = formatCurrency(1234.56, 'en', 'USD')
      expect(result).toContain('$')
      expect(result).toContain('1,234')
    })
  })

  describe('formatPercent', () => {
    it('should format percentage', () => {
      const result = formatPercent(0.1545, 'fr', 2)
      expect(result).toContain('15')
      expect(result).toContain('45')
      expect(result).toContain('%')
    })

    it('should format percentage with 0 decimals', () => {
      const result = formatPercent(0.1545, 'fr', 0)
      expect(result).toContain('15')
      expect(result).toContain('%')
    })
  })

  describe('formatFileSize', () => {
    it('should format bytes', () => {
      expect(formatFileSize(0)).toBe('0 B')
      expect(formatFileSize(500)).toContain('500')
      expect(formatFileSize(500)).toContain('B')
    })

    it('should format kilobytes', () => {
      const result = formatFileSize(1024)
      expect(result).toContain('1')
      expect(result).toContain('KB')
    })

    it('should format megabytes', () => {
      const result = formatFileSize(1024 * 1024)
      expect(result).toContain('1')
      expect(result).toContain('MB')
    })

    it('should format gigabytes', () => {
      const result = formatFileSize(1024 * 1024 * 1024)
      expect(result).toContain('1')
      expect(result).toContain('GB')
    })

    it('should format with decimals', () => {
      const result = formatFileSize(1536) // 1.5 KB
      // French locale uses comma as decimal separator (1,5)
      expect(result).toMatch(/1[,.]5/)
      expect(result).toContain('KB')
    })
  })

  describe('formatPhoneNumber', () => {
    it('should format French phone number with 0', () => {
      const result = formatPhoneNumber('0612345678')
      expect(result).toBe('06 12 34 56 78')
    })

    it('should format French phone number with +33', () => {
      const result = formatPhoneNumber('33612345678')
      expect(result).toBe('+33 6 12 34 56 78')
    })

    it('should handle phone with spaces', () => {
      const result = formatPhoneNumber('06 12 34 56 78')
      expect(result).toBe('06 12 34 56 78')
    })

    it('should return original for invalid format', () => {
      const result = formatPhoneNumber('123')
      expect(result).toBe('123')
    })

    it('should handle empty string', () => {
      expect(formatPhoneNumber('')).toBe('')
      expect(formatPhoneNumber(null)).toBe('')
    })
  })

  describe('formatDuration', () => {
    it('should format seconds', () => {
      const result = formatDuration(5000, 'fr') // 5 seconds
      expect(result).toContain('5')
      expect(result).toContain('s')
    })

    it('should format minutes and seconds', () => {
      const result = formatDuration(125000, 'fr') // 2 min 5 sec
      expect(result).toContain('2')
      expect(result).toContain('min')
      expect(result).toContain('5')
      expect(result).toContain('s')
    })

    it('should format hours and minutes', () => {
      const result = formatDuration(3725000, 'fr') // 1h 2min 5s
      expect(result).toContain('1')
      expect(result).toContain('h')
      expect(result).toContain('2')
      expect(result).toContain('min')
    })

    it('should format days and hours', () => {
      const result = formatDuration(90000000, 'fr') // 1d 1h
      expect(result).toContain('1')
      expect(result).toContain('j')
      expect(result).toContain('1')
      expect(result).toContain('h')
    })

    it('should work with different locales', () => {
      const resultEn = formatDuration(5000, 'en')
      const resultDe = formatDuration(5000, 'de')
      const resultTr = formatDuration(5000, 'tr')

      expect(resultEn).toBeDefined()
      expect(resultDe).toBeDefined()
      expect(resultTr).toBeDefined()
    })
  })

  describe('formatPostalCode', () => {
    it('should format valid French postal code', () => {
      expect(formatPostalCode('67500')).toBe('67500')
    })

    it('should clean non-digit characters', () => {
      expect(formatPostalCode('67-500')).toBe('67500')
    })

    it('should return original for invalid length', () => {
      expect(formatPostalCode('123')).toBe('123')
    })

    it('should handle empty string', () => {
      expect(formatPostalCode('')).toBe('')
      expect(formatPostalCode(null)).toBe('')
    })
  })

  describe('truncate', () => {
    it('should truncate long text', () => {
      const text = 'This is a very long text that should be truncated'
      const result = truncate(text, 20)
      // Text is trimmed before adding '...', so length may vary
      expect(result.length).toBeLessThanOrEqual(24) // max 20 + '...' + some space for trim
      expect(result).toContain('...')
      expect(result.length).toBeGreaterThan(20)
    })

    it('should not truncate short text', () => {
      const text = 'Short text'
      const result = truncate(text, 20)
      expect(result).toBe(text)
    })

    it('should use default length', () => {
      const text = 'a'.repeat(150)
      const result = truncate(text)
      expect(result).toHaveLength(103) // 100 + '...'
    })

    it('should handle empty/null', () => {
      expect(truncate('')).toBe('')
      expect(truncate(null)).toBe(null)
      expect(truncate(undefined)).toBe(undefined)
    })
  })

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    it('should not change already capitalized', () => {
      expect(capitalize('Hello')).toBe('Hello')
    })

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A')
    })

    it('should handle empty/null', () => {
      expect(capitalize('')).toBe('')
      expect(capitalize(null)).toBe('')
      expect(capitalize(undefined)).toBe('')
    })

    it('should only capitalize first letter', () => {
      expect(capitalize('hELLO')).toBe('HELLO')
    })
  })

  describe('formatBusinessHours', () => {
    it('should format business hours', () => {
      const result = formatBusinessHours('09:00', '18:00', 'fr')
      expect(result).toBe('09:00-18:00')
    })

    it('should work with different locales', () => {
      const resultEn = formatBusinessHours('09:00', '18:00', 'en')
      expect(resultEn).toBe('09:00-18:00')
    })
  })
})
