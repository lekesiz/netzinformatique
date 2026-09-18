import { Helmet } from 'react-helmet-async'
import { serializeJsonLd } from '../../utils/jsonLd'

const SITE_URL = 'https://www.netzinformatique.fr'

const StructuredData = ({ type = 'all', data = {} }) => {
  const localBusinessSchema = {
    '@type': ['ComputerStore', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'NETZ Informatique',
    alternateName: 'NETZ',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: 'Entreprise de services informatiques et organisme de formation à Haguenau, créée en 2016 et certifiée QUALIOPI pour les actions de formation et les bilans de compétences.',
    telephone: '+33367310201',
    email: 'contact@netzinformatique.fr',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1a Route de Schweighouse',
      addressLocality: 'Haguenau',
      addressRegion: 'Grand Est',
      postalCode: '67500',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8112633,
      longitude: 7.7814016,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.8112633,
        longitude: 7.7814016,
      },
      geoRadius: '50000',
    },
    knowsLanguage: ['fr', 'en', 'de', 'tr'],
    sameAs: [
      'https://www.facebook.com/informatiquehaguenau',
      'https://fr.linkedin.com/company/netz-informatique',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services informatiques',
      itemListElement: [
        'Dépannage et maintenance informatique',
        'Solutions IA locales',
        'Formation professionnelle QUALIOPI',
        'Cybersécurité',
        'Cloud et transformation digitale',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      '@id': 'https://mikail.net/#person',
      name: 'Mikail Lekesiz',
      url: 'https://mikail.net/mikail/',
      jobTitle: 'Formateur en intelligence artificielle et transformation numérique',
      sameAs: [
        'https://www.linkedin.com/in/mikail-lekesiz/',
        'https://github.com/lekesiz',
        'https://sessionize.com/mikail-lekesiz',
        'https://speakerhub.com/speaker/mikail-lekesiz',
      ],
    },
    slogan: 'Solutions informatiques, IA responsable et formation professionnelle',
  }

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'NETZ Informatique',
    description: 'Expert informatique à Haguenau',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  const graph = []
  if (type === 'all' || type === 'home') graph.push(localBusinessSchema, websiteSchema)

  if (type === 'service' && data.service) {
    graph.push({
      '@type': 'Service',
      name: data.service.name,
      description: data.service.description,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'City', name: 'Haguenau' },
      serviceType: data.service.type || 'IT Services',
    })
  }

  if (type === 'course' && data.course) {
    graph.push({
      '@type': 'Course',
      name: data.course.name,
      description: data.course.description,
      provider: { '@id': `${SITE_URL}/#organization` },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        location: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1a Route de Schweighouse',
            addressLocality: 'Haguenau',
            postalCode: '67500',
            addressCountry: 'FR',
          },
        },
      },
    })
  }

  if (type === 'faq' && data.faqs) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    })
  }

  if (data.breadcrumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: data.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: new URL(crumb.url, SITE_URL).toString(),
      })),
    })
  }

  if (!graph.length) return null
  const schema = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    </Helmet>
  )
}

export default StructuredData
