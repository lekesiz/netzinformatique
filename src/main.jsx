import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import './i18n'
import { initSentry } from './utils/sentry'
import { initWebVitals, logPerformanceSummary } from './utils/webVitals'

// Initialize error tracking and monitoring
initSentry()
initWebVitals()

// Log performance summary in development
if (import.meta.env.DEV) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      logPerformanceSummary()
    }, 1000)
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
