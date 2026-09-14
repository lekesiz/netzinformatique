import { useTranslation } from 'react-i18next'
import { MapPin, Settings } from 'lucide-react'
import { useConsent } from '../../consent/ConsentProvider'

const GoogleMap = ({ width = '100%', height = '450px', className = '' }) => {
  const { t } = useTranslation()
  const { categories, openPreferences } = useConsent()
  const address = '1a Route de Schweighouse, 67500 Haguenau, France'
  const latitude = 48.8112633
  const longitude = 7.7814016
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&hl=fr&output=embed`

  return (
    <div className={`relative overflow-hidden rounded-lg bg-muted ${className}`} style={{ width, minHeight: height }}>
      {categories.functional ? (
        <iframe
          src={mapUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={t('map.title', 'Localisation NETZ Informatique')}
          className="rounded-lg shadow-lg"
        />
      ) : (
        <div className="grid place-items-center p-8 text-center" style={{ minHeight: height }}>
          <div className="max-w-md">
            <MapPin className="mx-auto mb-4 text-primary" size={36} aria-hidden="true" />
            <h3 className="text-xl font-bold">{t('map.addressTitle', 'NETZ Informatique')}</h3>
            <p className="mt-2 text-muted-foreground">{address}</p>
            <p className="mt-4 text-sm text-muted-foreground">{t('cookies.mapDisabled', 'La carte externe est désactivée tant que les services fonctionnels ne sont pas autorisés.')}</p>
            <button
              type="button"
              onClick={() => openPreferences('google-map')}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Settings size={18} aria-hidden="true" />
              {t('cookies.managePreferences', 'Gérer mes cookies')}
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-card/95 p-4 text-card-foreground shadow-xl backdrop-blur-sm">
        <h3 className="font-bold text-lg mb-1">{t('map.addressTitle', 'NETZ Informatique')}</h3>
        <p className="text-sm text-muted-foreground mb-2">{address}</p>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-semibold">
          {t('map.getDirections', 'Obtenir l\'itinéraire')} →
        </a>
      </div>
    </div>
  )
}

export default GoogleMap
