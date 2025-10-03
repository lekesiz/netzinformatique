import { useTranslation } from 'react-i18next'

const GoogleMap = ({ 
  width = '100%', 
  height = '450px',
  className = ''
}) => {
  const { t } = useTranslation()

  // NETZ Informatique address coordinates
  const address = '1a Route de Schweighouse, 67500 Haguenau, France'
  const latitude = 48.8156
  const longitude = 7.8287

  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.5!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ4JzU2LjIiTiA3wrA0OSc0My4zIkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`

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
