import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'NETZ Informatique',
  publishedTime,
  modifiedTime
}) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  
  const siteUrl = 'https://netzinformatique.fr'
  const defaultImage = `${siteUrl}/images/og-image.jpg`
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl

  // Default meta values
  const defaultTitle = {
    fr: 'NETZ Informatique - Expert IT à Haguenau | Dépannage, IA, Formation',
    en: 'NETZ Informatique - IT Expert in Haguenau | Repair, AI, Training',
    de: 'NETZ Informatique - IT-Experte in Haguenau | Reparatur, KI, Schulung',
    tr: 'NETZ Informatique - Haguenau\'da BT Uzmanı | Onarım, AI, Eğitim'
  }

  const defaultDescription = {
    fr: 'NETZ Informatique : Dépannage informatique, solutions IA Offline, formation professionnelle certifiée QUALIOPI. Plus de 20 ans d\'expertise à Haguenau. Intervention rapide 24-48h.',
    en: 'NETZ Informatique: IT repair, Offline AI solutions, QUALIOPI certified professional training. Over 20 years of expertise in Haguenau. Fast intervention 24-48h.',
    de: 'NETZ Informatique: IT-Reparatur, Offline-KI-Lösungen, QUALIOPI-zertifizierte Berufsausbildung. Über 20 Jahre Erfahrung in Haguenau. Schneller Eingriff 24-48 Stunden.',
    tr: 'NETZ Informatique: BT onarımı, Çevrimdışı AI çözümleri, QUALIOPI sertifikalı profesyonel eğitim. Haguenau\'da 20 yılı aşkın deneyim. Hızlı müdahale 24-48 saat.'
  }

  const defaultKeywords = {
    fr: 'informatique Haguenau, dépannage ordinateur, réparation PC, IA Offline, intelligence artificielle, formation informatique, QUALIOPI, maintenance IT, cybersécurité, cloud, Microsoft Partner, Cisco Partner',
    en: 'IT Haguenau, computer repair, PC repair, Offline AI, artificial intelligence, IT training, QUALIOPI, IT maintenance, cybersecurity, cloud, Microsoft Partner, Cisco Partner',
    de: 'IT Haguenau, Computerreparatur, PC-Reparatur, Offline-KI, künstliche Intelligenz, IT-Schulung, QUALIOPI, IT-Wartung, Cybersicherheit, Cloud, Microsoft-Partner, Cisco-Partner',
    tr: 'BT Haguenau, bilgisayar onarımı, PC onarımı, Çevrimdışı AI, yapay zeka, BT eğitimi, QUALIOPI, BT bakımı, siber güvenlik, bulut, Microsoft Ortağı, Cisco Ortağı'
  }

  const finalTitle = title || defaultTitle[currentLang] || defaultTitle.fr
  const finalDescription = description || defaultDescription[currentLang] || defaultDescription.fr
  const finalKeywords = keywords || defaultKeywords[currentLang] || defaultKeywords.fr
  const finalImage = image || defaultImage

  // Alternate language URLs
  const alternateUrls = {
    fr: `${siteUrl}/fr${url || ''}`,
    en: `${siteUrl}/en${url || ''}`,
    de: `${siteUrl}/de${url || ''}`,
    tr: `${siteUrl}/tr${url || ''}`
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="NETZ Informatique" />
      <meta property="og:locale" content={`${currentLang}_${currentLang.toUpperCase()}`} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Hreflang Tags for Multi-language */}
      <link rel="alternate" hrefLang="fr" href={alternateUrls.fr} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="de" href={alternateUrls.de} />
      <link rel="alternate" hrefLang="tr" href={alternateUrls.tr} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.fr} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="FR-67" />
      <meta name="geo.placename" content="Haguenau" />
      <meta name="geo.position" content="48.8156;7.8287" />
      <meta name="ICBM" content="48.8156, 7.8287" />
    </Helmet>
  )
}

export default SEO
