import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, Cookie, Settings, Shield, CheckCircle } from 'lucide-react'
import useStore from '../../store/useStore'

/**
 * GDPR-compliant Cookie Consent Banner
 * Features:
 * - Accept all / Reject all / Customize
 * - Cookie preferences modal
 * - Google Analytics consent integration
 * - Multi-language support
 */
const CookieConsent = () => {
  const { t } = useTranslation()
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  const cookieConsent = useStore((state) => state.preferences.cookieConsentGiven)
  const setPreference = useStore((state) => state.setPreference)

  // Cookie categories state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already given consent
    const storedConsent = localStorage.getItem('netz_cookie_consent')

    if (!storedConsent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(storedConsent)
        setPreferences(saved)
        updateGoogleConsent(saved)
      } catch (error) {
        console.error('Error loading cookie preferences:', error)
      }
    }
  }, [])

  // Update Google Analytics consent mode
  const updateGoogleConsent = (prefs) => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'functionality_storage': prefs.functional ? 'granted' : 'denied'
      })
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }

    saveConsent(allAccepted)
  }

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Cannot reject necessary cookies
      analytics: false,
      marketing: false,
      functional: false
    }

    saveConsent(allRejected)
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
    setShowPreferences(false)
  }

  const saveConsent = (prefs) => {
    // Save to localStorage
    localStorage.setItem('netz_cookie_consent', JSON.stringify(prefs))
    localStorage.setItem('netz_cookie_consent_date', new Date().toISOString())

    // Update Zustand store
    setPreference('cookieConsentGiven', true)

    // Update Google Analytics consent
    updateGoogleConsent(prefs)

    // Hide banner
    setShowBanner(false)

    // Track consent event
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        analytics: prefs.analytics,
        marketing: prefs.marketing,
        functional: prefs.functional
      })
    }
  }

  const togglePreference = (category) => {
    if (category === 'necessary') return // Cannot toggle necessary cookies

    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  // Cookie categories data
  const cookieCategories = [
    {
      id: 'necessary',
      icon: Shield,
      locked: true,
      description: t('cookies.necessary.description'),
      examples: t('cookies.necessary.examples')
    },
    {
      id: 'analytics',
      icon: CheckCircle,
      locked: false,
      description: t('cookies.analytics.description'),
      examples: t('cookies.analytics.examples')
    },
    {
      id: 'functional',
      icon: Settings,
      locked: false,
      description: t('cookies.functional.description'),
      examples: t('cookies.functional.examples')
    },
    {
      id: 'marketing',
      icon: Cookie,
      locked: false,
      description: t('cookies.marketing.description'),
      examples: t('cookies.marketing.examples')
    }
  ]

  if (!showBanner && !showPreferences) return null

  return (
    <>
      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Cookie Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('cookies.banner.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                      {t('cookies.banner.description')}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        {t('cookies.banner.acceptAll')}
                      </button>

                      <button
                        onClick={handleRejectAll}
                        className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        {t('cookies.banner.rejectAll')}
                      </button>

                      <button
                        onClick={() => {
                          setShowPreferences(true)
                          setShowBanner(false)
                        }}
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-medium hover:border-primary hover:text-primary dark:hover:border-primary transition-colors flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        {t('cookies.banner.customize')}
                      </button>
                    </div>

                    {/* Privacy links */}
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                      <a href="/privacy-policy" className="hover:text-primary underline">
                        {t('cookies.banner.privacyPolicy')}
                      </a>
                      {' • '}
                      <a href="/cookie-policy" className="hover:text-primary underline">
                        {t('cookies.banner.cookiePolicy')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Preferences Modal */}
      <AnimatePresence>
        {showPreferences && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowPreferences(false)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t('cookies.preferences.title')}
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t('cookies.preferences.description')}
                  </p>

                  {/* Cookie Categories */}
                  <div className="space-y-4">
                    {cookieCategories.map((category) => {
                      const Icon = category.icon
                      const isEnabled = preferences[category.id]

                      return (
                        <div
                          key={category.id}
                          className="border border-gray-200 dark:border-gray-700 rounded-xl p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isEnabled ? 'bg-primary/10' : 'bg-gray-100 dark:bg-gray-700'
                              }`}>
                                <Icon className={`w-5 h-5 ${
                                  isEnabled ? 'text-primary' : 'text-gray-400'
                                }`} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                  {t(`cookies.${category.id}.title`)}
                                  {category.locked && (
                                    <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                                      {t('cookies.required')}
                                    </span>
                                  )}
                                </h3>
                              </div>
                            </div>

                            {/* Toggle */}
                            <button
                              onClick={() => togglePreference(category.id)}
                              disabled={category.locked}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                isEnabled ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                              } ${category.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  isEnabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {category.description}
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            <strong>{t('cookies.examples')}:</strong> {category.examples}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {t('cookies.preferences.save')}
                  </button>

                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {t('cookies.preferences.acceptAll')}
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default CookieConsent
