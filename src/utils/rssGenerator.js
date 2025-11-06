/**
 * RSS Feed Generator
 * Generates RSS 2.0 compliant XML feed for blog posts
 */

import { blogPosts } from '../data/blogPosts'

/**
 * Generate RSS Feed XML
 * @param {string} locale - Language locale (fr, en, de, tr)
 * @returns {string} RSS XML string
 */
export function generateRSSFeed(locale = 'fr') {
  const siteUrl = 'https://netzinformatique.fr'
  const blogUrl = `${siteUrl}/blog`

  const siteInfo = {
    fr: {
      title: 'NETZ Informatique Blog - Actualités Tech & IT',
      description: 'Découvrez les dernières actualités IT, cybersécurité, cloud, IA et développement web. Guides, tutoriels et conseils d\'experts.',
      language: 'fr-FR'
    },
    en: {
      title: 'NETZ Informatique Blog - Tech & IT News',
      description: 'Discover the latest IT news, cybersecurity, cloud, AI and web development. Guides, tutorials and expert advice.',
      language: 'en-US'
    },
    de: {
      title: 'NETZ Informatique Blog - Tech & IT Nachrichten',
      description: 'Entdecken Sie die neuesten IT-Nachrichten, Cybersicherheit, Cloud, KI und Webentwicklung. Leitfäden, Tutorials und Expertenrat.',
      language: 'de-DE'
    },
    tr: {
      title: 'NETZ Informatique Blog - Teknoloji & BT Haberleri',
      description: 'En son BT haberlerini, siber güvenliği, bulutu, yapay zekayı ve web geliştirmeyi keşfedin. Kılavuzlar, öğreticiler ve uzman tavsiyeleri.',
      language: 'tr-TR'
    }
  }

  const info = siteInfo[locale] || siteInfo.fr

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">\n'
  xml += '  <channel>\n'
  xml += `    <title>${escapeXml(info.title)}</title>\n`
  xml += `    <description>${escapeXml(info.description)}</description>\n`
  xml += `    <link>${siteUrl}</link>\n`
  xml += `    <language>${info.language}</language>\n`
  xml += `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n`
  xml += `    <atom:link href="${blogUrl}/rss.xml" rel="self" type="application/rss+xml"/>\n`
  xml += `    <copyright>© ${new Date().getFullYear()} NETZ Informatique. Tous droits réservés.</copyright>\n`
  xml += `    <managingEditor>contact@netzinformatique.fr (NETZ Informatique)</managingEditor>\n`
  xml += `    <webMaster>contact@netzinformatique.fr (NETZ Informatique)</webMaster>\n`
  xml += `    <image>\n`
  xml += `      <url>${siteUrl}/logo-512x512.png</url>\n`
  xml += `      <title>${escapeXml(info.title)}</title>\n`
  xml += `      <link>${siteUrl}</link>\n`
  xml += `    </image>\n\n`

  // Add posts
  sortedPosts.forEach((post) => {
    const postUrl = `${blogUrl}/${post.slug}`
    const title = post.title[locale] || post.title.fr
    const excerpt = post.excerpt[locale] || post.excerpt.fr
    const content = post.content[locale] || post.content.fr

    xml += '    <item>\n'
    xml += `      <title>${escapeXml(title)}</title>\n`
    xml += `      <link>${postUrl}</link>\n`
    xml += `      <guid isPermaLink="true">${postUrl}</guid>\n`
    xml += `      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>\n`
    xml += `      <description>${escapeXml(excerpt)}</description>\n`
    xml += `      <content:encoded><![CDATA[${content}]]></content:encoded>\n`
    xml += `      <author>contact@netzinformatique.fr (${escapeXml(post.author.name)})</author>\n`
    xml += `      <category>${escapeXml(post.category)}</category>\n`

    // Add tags as categories
    post.tags.forEach((tag) => {
      xml += `      <category>${escapeXml(tag)}</category>\n`
    })

    // Add cover image as enclosure
    if (post.coverImage) {
      const imageUrl = `${siteUrl}${post.coverImage}`
      xml += `      <enclosure url="${imageUrl}" type="image/jpeg"/>\n`
    }

    xml += '    </item>\n\n'
  })

  xml += '  </channel>\n'
  xml += '</rss>'

  return xml
}

/**
 * Escape XML special characters
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeXml(str) {
  if (!str) return ''

  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Generate RSS feed file
 * This should be called during build process
 */
export function generateRSSFiles() {
  const locales = ['fr', 'en', 'de', 'tr']
  const feeds = {}

  locales.forEach((locale) => {
    feeds[locale] = generateRSSFeed(locale)
  })

  return feeds
}

/**
 * Get RSS feed URL for current locale
 * @param {string} locale - Current language
 * @returns {string} RSS feed URL
 */
export function getRSSFeedUrl(locale = 'fr') {
  return `/rss-${locale}.xml`
}

export default generateRSSFeed
