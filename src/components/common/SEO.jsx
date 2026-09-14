import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SITE_URL = 'https://www.netzinformatique.fr'
const OPEN_GRAPH_LOCALES = {
  fr: 'fr_FR',
  en: 'en_US',
  de: 'de_DE',
  tr: 'tr_TR',
}

const absoluteUrl = (value, fallback = '/') => {
  try {
    return new URL(value || fallback, SITE_URL).toString()
  } catch {
    return new URL(fallback, SITE_URL).toString()
  }
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'NETZ Informatique',
  publishedTime,
  modifiedTime,
  noindex = false,
}) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage || i18n.language || 'fr'

  const defaultTitle = {
    fr: 'NETZ Informatique - Expert IT à Haguenau | Dépannage, IA, Formation',
    en: 'NETZ Informatique - IT Expert in Haguenau | Repair, AI, Training',
    de: 'NETZ Informatique - IT-Experte in Haguenau | Reparatur, KI, Schulung',
    tr: "NETZ Informatique - Haguenau'da BT Uzmanı | Onarım, AI, Eğitim",
  }
  const defaultDescription = {
    fr: 'NETZ Informatique : dépannage informatique, solutions IA locales, cybersécurité et formation professionnelle à Haguenau. Société créée en 2016 ; certification QUALIOPI pour les actions de formation et les bilans de compétences.',
    en: 'NETZ Informatique: IT support, local AI solutions, cybersecurity and professional training in Haguenau. Company established in 2016; QUALIOPI certified for training actions and skills assessments.',
    de: 'NETZ Informatique: IT-Support, lokale KI-Lösungen, Cybersicherheit und berufliche Weiterbildung in Haguenau. Unternehmen gegründet 2016; QUALIOPI-zertifiziert für Weiterbildung und Kompetenzbilanzen.',
    tr: 'NETZ Informatique: Haguenau’da BT desteği, yerel AI çözümleri, siber güvenlik ve mesleki eğitim. Şirket 2016’da kuruldu; eğitim faaliyetleri ve yetkinlik değerlendirmeleri için QUALIOPI sertifikalıdır.',
  }
  const defaultKeywords = {
    fr: 'informatique Haguenau, dépannage ordinateur, réparation PC, IA Offline, formation informatique, QUALIOPI, maintenance IT, cybersécurité, cloud',
    en: 'IT Haguenau, computer repair, Offline AI, IT training, QUALIOPI, IT maintenance, cybersecurity, cloud',
    de: 'IT Haguenau, Computerreparatur, Offline-KI, IT-Schulung, QUALIOPI, IT-Wartung, Cybersicherheit, Cloud',
    tr: 'BT Haguenau, bilgisayar onarımı, çevrimdışı AI, BT eğitimi, QUALIOPI, BT bakımı, siber güvenlik, bulut',
  }

  const finalTitle = title || defaultTitle[currentLang] || defaultTitle.fr
  const finalDescription = description || defaultDescription[currentLang] || defaultDescription.fr
  const finalKeywords = keywords || defaultKeywords[currentLang] || defaultKeywords.fr
  const canonicalUrl = absoluteUrl(url)
  const finalImage = absoluteUrl(image, '/og-image.jpg')
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{String(finalTitle)}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="NETZ Informatique" />
      <meta property="og:locale" content={OPEN_GRAPH_LOCALES[currentLang] || OPEN_GRAPH_LOCALES.fr} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="FR-67" />
      <meta name="geo.placename" content="Haguenau" />
      <meta name="geo.position" content="48.8112633;7.7814" />
      <meta name="ICBM" content="48.8112633, 7.7814" />
    </Helmet>
  )
}

export default SEO
