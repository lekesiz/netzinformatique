import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  getDefaultConsent,
  openConsentPreferences,
  readConsent,
  saveConsent,
  subscribeConsent,
} from './consentStore'

const ConsentContext = createContext(null)
const serverConsent = getDefaultConsent()
const serverFallback = {
  consent: serverConsent,
  categories: serverConsent.categories,
  isDecided: false,
  save: () => serverConsent,
  openPreferences: () => {},
}

export function ConsentProvider({ children }) {
  const isHydrating = typeof document !== 'undefined' && document.getElementById('root')?.hasChildNodes()
  const [consent, setConsent] = useState(() => {
    if (typeof window === 'undefined' || isHydrating) return getDefaultConsent()
    return readConsent()
  })

  useEffect(() => {
    if (isHydrating) setConsent(readConsent())
    return subscribeConsent(setConsent)
  }, [isHydrating])

  const save = useCallback((categories, source = 'explicit') => {
    const nextConsent = saveConsent(categories, source)
    setConsent(nextConsent)
    return nextConsent
  }, [])

  const openPreferences = useCallback((source) => {
    openConsentPreferences(source)
  }, [])

  const value = useMemo(() => ({
    consent,
    categories: consent.categories,
    isDecided: consent.status === 'decided',
    save,
    openPreferences,
  }), [consent, openPreferences, save])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (!context && typeof window === 'undefined') return serverFallback
  if (!context) throw new Error('useConsent must be used inside ConsentProvider')
  return context
}
