import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock environment variables for tests
vi.stubEnv('VITE_CALENDLY_USERNAME', 'test-calendly')
vi.stubEnv('VITE_GA4_MEASUREMENT_ID', 'G-TEST123')
vi.stubEnv('VITE_GTM_ID', 'GTM-TEST123')

// Mock fetch for API tests
global.fetch = vi.fn()

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
}

// Mock scrollTo
window.scrollTo = vi.fn()

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

// Extend expect with custom matchers if needed
expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null && received !== undefined
    return {
      pass,
      message: () => `expected element ${pass ? 'not ' : ''}to be in the document`,
    }
  },
})
