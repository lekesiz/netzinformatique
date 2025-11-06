import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'

// Custom render function that includes providers
export function renderWithProviders(ui, options = {}) {
  const {
    route = '/',
    i18nInstance = i18n,
    ...renderOptions
  } = options

  // Set initial route if provided
  window.history.pushState({}, 'Test page', route)

  const Wrapper = ({ children }) => (
    <BrowserRouter>
      <I18nextProvider i18n={i18nInstance}>
        {children}
      </I18nextProvider>
    </BrowserRouter>
  )

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    i18n: i18nInstance,
  }
}

// Mock i18n for faster tests
export function createMockI18n(translations = {}) {
  return {
    t: (key) => translations[key] || key,
    language: 'fr',
    changeLanguage: () => Promise.resolve(),
    use: () => {},
    init: () => Promise.resolve(),
  }
}

// Helper to wait for async operations
export const waitForLoadingToFinish = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0)
  })
}

// Mock API response helper
export function mockApiResponse(data, options = {}) {
  const { status = 200, ok = true, delay = 0 } = options

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok,
        status,
        json: async () => data,
        text: async () => JSON.stringify(data),
      })
    }, delay)
  })
}

// Mock API error helper
export function mockApiError(error = 'API Error', status = 500) {
  return Promise.reject(new Error(error))
}

// Re-export everything from testing library
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
