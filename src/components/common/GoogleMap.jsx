import { useTranslation } from 'react-i18next'

const GoogleMap = ({ 
  width = '100%', 
  height = '450px',
  className = ''
}) => {
  const { t } = useTranslation()

  // NETZ Informatique address coordinates
  const address = '1a Route de Schweighouse, 67500 Haguenau, France'
  const latitude = 48.8112633
  const longitude = 7.7814016

  // Google Maps embed URL — q=lat,lng drops a marker exactly at the coordinates
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&hl=fr&output=embed`

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={mapUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t('map.title', 'Localisation NETZ Informatique')}
        className="rounded-lg shadow-lg"
      />
      
      {/* Overlay with address info */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
        <h3 className="font-bold text-lg mb-2">
          {t('map.addressTitle', 'NETZ Informatique')}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {address}
        </p>
        <div className="flex gap-2">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-semibold"
          >
            {t('map.getDirections', 'Obtenir l\'itinéraire')} →
          </a>
        </div>
      </div>
    </div>
  )
}

export default GoogleMap
