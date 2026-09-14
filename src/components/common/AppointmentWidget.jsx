import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, LoaderCircle } from 'lucide-react'
import { useConsent } from '../../consent/ConsentProvider'
import { loadVendorScript, loadVendorStyle, removeVendorNodes } from '../../consent/vendorLoader'
import { trackCalendlyOpen } from '../../utils/analytics'

const CALENDLY_VENDOR = 'calendly'

const AppointmentWidget = () => {
  const { t } = useTranslation()
  const { categories, openPreferences } = useConsent()
  const [isLoading, setIsLoading] = useState(false)
  const generation = useRef(0)
  const calendlyUsername = import.meta.env.VITE_CALENDLY_USERNAME || 'mikail-netzinformatique'
  const calendlyUrl = `https://calendly.com/${calendlyUsername}`

  useEffect(() => {
    if (categories.functional) return
    generation.current += 1
    document.querySelector('.calendly-overlay')?.remove()
    removeVendorNodes(CALENDLY_VENDOR)
    setIsLoading(false)
  }, [categories.functional])

  const openCalendly = async () => {
    if (!categories.functional) {
      openPreferences('appointment-widget')
      return
    }

    const requestGeneration = ++generation.current
    setIsLoading(true)
    trackCalendlyOpen()

    try {
      loadVendorStyle({
        id: 'netz-calendly-style',
        href: 'https://assets.calendly.com/assets/external/widget.css',
        vendor: CALENDLY_VENDOR,
      })
      await loadVendorScript({
        id: 'netz-calendly-script',
        src: 'https://assets.calendly.com/assets/external/widget.js',
        vendor: CALENDLY_VENDOR,
      })

      if (requestGeneration !== generation.current) return
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: calendlyUrl })
      } else {
        window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
      }
    } catch (error) {
      console.error('Calendly could not be loaded:', error)
    } finally {
      if (requestGeneration === generation.current) setIsLoading(false)
    }
  }

  return (
    <button
      data-floating-widget
      type="button"
      onClick={openCalendly}
      disabled={isLoading}
      className="fixed bottom-6 right-6 z-40 min-h-12 min-w-12 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
      aria-label={categories.functional
        ? t('appointment.bookNow', 'Prendre rendez-vous')
        : t('cookies.enableAppointment', 'Autoriser le service de rendez-vous')}
      title={t('appointment.bookNow', 'Prendre rendez-vous')}
    >
      {isLoading
        ? <LoaderCircle size={24} className="animate-spin" aria-hidden="true" />
        : <Calendar size={24} className="group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />}
    </button>
  )
}

export default AppointmentWidget
