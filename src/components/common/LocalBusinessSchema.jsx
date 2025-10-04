import { Helmet } from 'react-helmet-async'

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://netzinformatique.fr/#organization",
    "name": "NETZ Informatique",
    "alternateName": "NETZ IT",
    "url": "https://netzinformatique.fr",
    "logo": "https://netzinformatique.fr/logo.png",
    "image": "https://netzinformatique.fr/images/og-image.jpg",
    "description": "Expert informatique à Haguenau depuis plus de 20 ans. Dépannage, maintenance, solutions IA Offline, formation professionnelle certifiée QUALIOPI.",
    "telephone": "+33367310201",
    "email": "contact@netzinformatique.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1a Route de Schweighouse",
      "addressLocality": "Haguenau",
      "addressRegion": "Grand Est",
      "postalCode": "67500",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8156,
      "longitude": 7.8287
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "14:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.8156,
        "longitude": 7.8287
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.facebook.com/netzinformatique",
      "https://www.linkedin.com/company/netz-informatique",
      "https://informatique-haguenau.fr",
      "https://formation-haguenau.fr",
      "https://netz-blog.fr"
    ],
    "founder": {
      "@type": "Person",
      "name": "NETZ Informatique Team"
    },
    "foundingDate": "2003",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5-10"
    },
    "slogan": "Votre Partenaire Technologique",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services IT",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dépannage Informatique",
            "description": "Réparation et maintenance d'ordinateurs, PC et Mac"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solutions IA Offline",
            "description": "Intelligence artificielle sans connexion internet"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formation Professionnelle",
            "description": "Formations certifiées QUALIOPI et TOSA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement Web",
            "description": "Création de sites web et applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersécurité",
            "description": "Protection et sécurisation des données"
          }
        }
      ]
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default LocalBusinessSchema
