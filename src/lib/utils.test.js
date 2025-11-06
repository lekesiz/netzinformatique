import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-2 py-1', 'bg-blue-500')
    expect(result).toBe('px-2 py-1 bg-blue-500')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toBe('base-class active-class')
  })

  it('should dedupe conflicting Tailwind classes', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toBe('py-1 px-4')
  })

  it('should handle arrays of class names', () => {
    const result = cn(['px-2', 'py-1'], 'bg-blue-500')
    expect(result).toBe('px-2 py-1 bg-blue-500')
  })

  it('should handle undefined and null values', () => {
    const result = cn('px-2', undefined, null, 'py-1')
    expect(result).toBe('px-2 py-1')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should handle objects with boolean values', () => {
    const result = cn({
      'px-2': true,
      'py-1': false,
      'bg-blue-500': true,
    })
    expect(result).toBe('px-2 bg-blue-500')
  })
})
