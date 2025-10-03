import { useTranslation } from 'react-i18next'

const PartnersSection = () => {
  const { t } = useTranslation()

  const partners = [
    {
      name: 'Microsoft',
      description: 'Microsoft Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    {
      name: 'Cisco',
      description: 'Cisco Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg'
    },
    {
      name: 'Google',
      description: 'Google Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.partnersTitle', 'Nos')} <span className="text-primary">{t('home.partnersTitleHighlight', 'Partenaires')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('home.partnersDescription', 'Nous travaillons avec les leaders de l\'industrie')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {t('home.partnersNote', 'Partenariats officiels garantissant qualité et expertise')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
