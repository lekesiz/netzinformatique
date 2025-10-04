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
    "image": image || "https://netzinformatique.vercel.app/images/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://netzinformatique.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NETZ Informatique",
      "logo": {
        "@type": "ImageObject",
        "url": "https://netzinformatique.vercel.app/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url ? `https://netzinformatique.vercel.app${url}` : "https://netzinformatique.vercel.app"
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
