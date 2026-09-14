import { useEffect, useId, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, Cookie, Settings, Shield, CheckCircle } from 'lucide-react'
import { useConsent } from '../../consent/ConsentProvider'
import { CONSENT_OPEN_EVENT } from '../../consent/consentStore'

const ALL_ACCEPTED = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: true,
}

const ALL_REJECTED = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
}

const CookieConsent = () => {
  const { t } = useTranslation()
  const { categories, isDecided, save } = useConsent()
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState(categories)
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    setPreferences(categories)
  }, [categories])

  useEffect(() => {
    const isOpen = !isDecided || showPreferences
    document.documentElement.toggleAttribute('data-consent-layer-open', isOpen)
    if (isOpen) window.Tawk_API?.hideWidget?.()
    else if (categories.functional) window.Tawk_API?.showWidget?.()
    return () => document.documentElement.removeAttribute('data-consent-layer-open')
  }, [categories.functional, isDecided, showPreferences])

  useEffect(() => {
    const openPreferences = () => {
      previousFocusRef.current = document.activeElement
      setPreferences(categories)
      setShowPreferences(true)
    }

    window.addEventListener(CONSENT_OPEN_EVENT, openPreferences)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openPreferences)
  }, [categories])

  useEffect(() => {
    if (!showPreferences) return undefined

    const dialog = dialogRef.current
    const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const focusable = () => Array.from(dialog?.querySelectorAll(focusableSelector) ?? [])

    focusable()[0]?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setShowPreferences(false)
        return
      }

      if (event.key !== 'Tab') return
      const elements = focusable()
      if (!elements.length) return
      const first = elements[0]
      const last = elements[elements.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus?.()
    }
  }, [showPreferences])

  const commitConsent = (nextCategories, source) => {
    save(nextCategories, source)
    setShowPreferences(false)
  }

  const openPreferences = (event) => {
    previousFocusRef.current = event.currentTarget
    setPreferences(categories)
    setShowPreferences(true)
  }

  const closePreferences = () => setShowPreferences(false)

  const togglePreference = (category) => {
    if (category === 'necessary') return
    setPreferences((current) => ({
      ...current,
      [category]: !current[category],
    }))
  }

  const cookieCategories = [
    {
      id: 'necessary',
      icon: Shield,
      locked: true,
      description: t('cookies.necessary.description'),
      examples: t('cookies.necessary.examples'),
    },
    {
      id: 'analytics',
      icon: CheckCircle,
      description: t('cookies.analytics.description'),
      examples: t('cookies.analytics.examples'),
    },
    {
      id: 'functional',
      icon: Settings,
      description: t('cookies.functional.description'),
      examples: t('cookies.functional.examples'),
    },
    {
      id: 'marketing',
      icon: Cookie,
      description: t('cookies.marketing.description'),
      examples: t('cookies.marketing.examples'),
    },
  ]

  if (isDecided && !showPreferences) return null

  return (
    <>
      <AnimatePresence>
        {!isDecided && !showPreferences && (
          <motion.section
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            role="region"
            aria-label={t('cookies.banner.title')}
          >
            <div className="max-w-7xl mx-auto bg-card text-card-foreground rounded-2xl shadow-2xl border border-border">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:grid w-12 h-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">{t('cookies.banner.title')}</h2>
                    <p className="text-muted-foreground mb-4 text-sm md:text-base">{t('cookies.banner.description')}</p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => commitConsent(ALL_ACCEPTED, 'accept-all')}
                        className="min-h-12 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {t('cookies.banner.acceptAll')}
                      </button>
                      <button
                        type="button"
                        onClick={() => commitConsent(ALL_REJECTED, 'reject-all')}
                        className="min-h-12 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {t('cookies.banner.rejectAll')}
                      </button>
                      <button
                        type="button"
                        onClick={openPreferences}
                        className="min-h-12 px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" aria-hidden="true" />
                        {t('cookies.banner.customize')}
                      </button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <a href="/politique-confidentialite" className="hover:text-primary underline">{t('cookies.banner.privacyPolicy')}</a>
                      <a href="/cookie-policy" className="hover:text-primary underline">{t('cookies.banner.cookiePolicy')}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closePreferences}
              aria-label={t('cookies.preferences.close')}
            />
            <motion.div
              ref={dialogRef}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-card text-card-foreground rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
            >
              <div className="p-6 border-b border-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid w-10 h-10 place-items-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 id={titleId} className="text-2xl font-bold">{t('cookies.preferences.title')}</h2>
                </div>
                <button
                  type="button"
                  onClick={closePreferences}
                  className="min-h-11 min-w-11 grid place-items-center hover:bg-muted rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={t('cookies.preferences.close')}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-210px)]">
                <p id={descriptionId} className="text-muted-foreground mb-6">{t('cookies.preferences.description')}</p>
                <div className="space-y-4">
                  {cookieCategories.map((category) => {
                    const Icon = category.icon
                    const isEnabled = preferences[category.id]
                    return (
                      <section key={category.id} className="border border-border rounded-xl p-4">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`grid w-10 h-10 place-items-center rounded-lg ${isEnabled ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`} aria-hidden="true">
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-semibold flex flex-wrap items-center gap-2">
                              {t(`cookies.${category.id}.title`)}
                              {category.locked && <span className="text-xs px-2 py-1 bg-muted rounded-full">{t('cookies.required')}</span>}
                            </h3>
                          </div>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={isEnabled}
                            aria-label={t('cookies.preferences.toggle', { category: t(`cookies.${category.id}.title`) })}
                            onClick={() => togglePreference(category.id)}
                            disabled={category.locked}
                            className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isEnabled ? 'bg-primary' : 'bg-muted-foreground/40'} ${category.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                        <p className="text-xs text-muted-foreground"><strong>{t('cookies.examples')}:</strong> {category.examples}</p>
                      </section>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 border-t border-border grid sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => commitConsent(preferences, 'custom')}
                  className="min-h-12 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t('cookies.preferences.save')}
                </button>
                <button
                  type="button"
                  onClick={() => commitConsent(ALL_REJECTED, 'reject-all')}
                  className="min-h-12 px-5 py-3 border-2 border-border rounded-lg font-semibold hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t('cookies.banner.rejectAll')}
                </button>
                <button
                  type="button"
                  onClick={() => commitConsent(ALL_ACCEPTED, 'accept-all')}
                  className="min-h-12 px-5 py-3 border-2 border-border rounded-lg font-semibold hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t('cookies.preferences.acceptAll')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CookieConsent
