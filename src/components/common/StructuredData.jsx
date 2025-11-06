import { Helmet } from 'react-helmet-async'

const StructuredData = ({ type = 'all', data = {} }) => {
  const siteUrl = 'https://netzinformatique.fr'

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "@id": `${siteUrl}/#organization`,
    "name": "NETZ Informatique",
    "alternateName": "NETZ",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/images/og-image.jpg`,
    "description": "Expert informatique à Haguenau : dépannage, maintenance, solutions IA Offline, formation professionnelle certifiée QUALIOPI. Fondé en 2016 par Mikail Lekesiz, fort de 20 ans d'expérience IT.",
    "telephone": "+33899250151",
    "email": "contact@netzinformatique.fr",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1a Route de Schweighouse",
      "addressLocality": "Haguenau",
      "addressRegion": "Alsace",
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
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.8156,
        "longitude": 7.8287
      },
      "geoRadius": "30000"
    },
    "sameAs": [
      "https://www.facebook.com/informatiquehaguenau",
      "https://fr.linkedin.com/company/netz-informatique"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Informatiques",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dépannage & Maintenance Informatique",
            "description": "Intervention rapide sous 24-48h pour tous vos problèmes informatiques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solutions IA Offline",
            "description": "Intelligence artificielle avec confidentialité totale pour secteurs sensibles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formation Professionnelle QUALIOPI",
            "description": "Formations certifiées en informatique, IA et outils numériques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersécurité",
            "description": "Protection antivirus, pare-feu, conformité RGPD et audit de sécurité"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & Transformation Digitale",
            "description": "Migration cloud, Microsoft 365, accompagnement digital"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Mikail Lekesiz"
    },
    "foundingDate": "2016",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "2-10"
    }
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "NETZ Informatique",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`,
      "width": 250,
      "height": 60
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33899250151",
      "contactType": "customer service",
      "email": "contact@netzinformatique.fr",
      "areaServed": "FR",
      "availableLanguage": ["French", "English", "German", "Turkish"]
    },
    "sameAs": [
      "https://www.facebook.com/informatiquehaguenau",
      "https://fr.linkedin.com/company/netz-informatique"
    ]
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "NETZ Informatique",
    "description": "Expert informatique à Haguenau",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["fr-FR", "en-US", "de-DE", "tr-TR"]
  }

  // Service Schema (for service pages)
  const serviceSchema = data.service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.service.name,
    "description": data.service.description,
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "areaServed": {
      "@type": "City",
      "name": "Haguenau"
    },
    "serviceType": data.service.type || "IT Services"
  } : null

  // Course Schema (for training pages)
  const courseSchema = data.course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.course.name,
    "description": data.course.description,
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1a Route de Schweighouse",
          "addressLocality": "Haguenau",
          "postalCode": "67500",
          "addressCountry": "FR"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "priceCurrency": "EUR"
    }
  } : null

  // FAQ Schema
  const faqSchema = data.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  // BreadcrumbList Schema
  const breadcrumbSchema = data.breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  } : null

  // Combine schemas based on type
  let schemas = []
  
  if (type === 'all' || type === 'home') {
    schemas.push(localBusinessSchema, organizationSchema, websiteSchema)
  }
  
  if (type === 'service' && serviceSchema) {
    schemas.push(serviceSchema)
  }
  
  if (type === 'course' && courseSchema) {
    schemas.push(courseSchema)
  }
  
  if (type === 'faq' && faqSchema) {
    schemas.push(faqSchema)
  }
  
  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema)
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default StructuredData
