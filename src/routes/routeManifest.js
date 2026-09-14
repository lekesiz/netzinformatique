import { posts } from '../content/blog/posts.js'
import { sectors } from '../pages/sectors/sectorsData.js'

export const staticRoutes = [
  '/',
  '/a-propos',
  '/services',
  '/services/particuliers',
  '/services/entreprises',
  '/services/depannage-maintenance',
  '/services/ia-offline',
  '/services/formation-professionnelle',
  '/services/cybersecurite',
  '/services/cloud-reseau',
  '/services/web-digital',
  '/solutions',
  '/solutions/intelligence-artificielle',
  '/solutions/web-developpement',
  '/solutions/cloud',
  '/formation',
  '/formation/bilan-competences',
  '/materiel',
  '/tarifs',
  '/blog',
  '/contact',
  '/faq',
  '/mentions-legales',
  '/politique-confidentialite',
  '/cookie-policy',
  '/confiance',
]

export const blogRoutes = posts.map((post) => ({
  path: `/blog/${post.slug}`,
  lastmod: post.date,
}))

export const sectorRoutes = sectors.map((sector) => ({
  path: `/sectors/${sector.slug}`,
}))

export const canonicalRoutes = [
  ...staticRoutes.map((path) => ({ path })),
  ...blogRoutes,
  ...sectorRoutes,
]

export const redirectAliases = [
  { source: '/about', destination: '/a-propos', permanent: true },
]
