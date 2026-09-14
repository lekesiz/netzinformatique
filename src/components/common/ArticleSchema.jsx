import { Helmet } from 'react-helmet-async'
import { serializeJsonLd } from '../../utils/jsonLd'

const SITE_URL = 'https://www.netzinformatique.fr'
const absoluteUrl = (value, fallback = '/') => new URL(value || fallback, SITE_URL).toString()

const ArticleSchema = ({
  title,
  description,
  image,
  author = 'Mikail Lekesiz',
  authorUrl = '/a-propos#direction',
  datePublished,
  dateModified,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: absoluteUrl(image, '/og-image.jpg'),
    author: {
      '@type': 'Person',
      name: author,
      url: absoluteUrl(authorUrl),
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(url),
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    </Helmet>
  )
}

export default ArticleSchema
