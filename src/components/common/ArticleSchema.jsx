import { Helmet } from 'react-helmet-async'

const ArticleSchema = ({ 
  title, 
  description, 
  image, 
  author = 'NETZ Informatique',
  datePublished, 
  dateModified,
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || "https://www.netzinformatique.fr/images/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://www.netzinformatique.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NETZ Informatique",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.netzinformatique.fr/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url ? `https://www.netzinformatique.fr${url}` : "https://www.netzinformatique.fr"
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

export default ArticleSchema
