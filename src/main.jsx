import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import i18n, { applySavedLanguage } from './i18n'
import { logPerformanceSummary } from './utils/webVitals'

if (import.meta.env.DEV) {
  window.addEventListener('load', () => setTimeout(logPerformanceSummary, 1000), { once: true })
}

const rootElement = document.getElementById('root')
const application = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

if (rootElement.hasChildNodes()) hydrateRoot(rootElement, application)
else createRoot(rootElement).render(application)

requestAnimationFrame(() => {
  applySavedLanguage().catch(() => i18n.changeLanguage('fr'))
})

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      registration.update()
      const checkInterval = window.setInterval(() => registration.update(), 60 * 60 * 1000)
      window.addEventListener('pagehide', () => window.clearInterval(checkInterval), { once: true })

      registration.addEventListener('updatefound', () => {
        const installing = registration.installing
        installing?.addEventListener('statechange', () => {
          if (installing.state === 'installed' && navigator.serviceWorker.controller) {
            installing.postMessage({ type: 'SKIP_WAITING' })
          }
        })
      })
    }).catch((error) => {
      console.error('Service worker registration failed:', error)
    })

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      const key = 'netz-sw-reload-at'
      const now = Date.now()
      const previous = Number(sessionStorage.getItem(key) || 0)
      if (now - previous > 60_000) {
        sessionStorage.setItem(key, String(now))
        window.location.reload()
      }
    })
  }, { once: true })
}
