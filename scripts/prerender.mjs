import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { canonicalRoutes } from '../src/routes/routeManifest.js'
import { posts } from '../src/content/blog/posts.js'

const ROOT = process.cwd()
const DIST = join(ROOT, 'dist')
const SITE_URL = 'https://www.netzinformatique.fr'
const template = await readFile(join(DIST, 'index.html'), 'utf8')
const serverEntryUrl = pathToFileURL(join(ROOT, '.prerender', 'entry-server.js')).href
const { render } = await import(`${serverEntryUrl}?v=${Date.now()}`)

const escapeXml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const outputPathFor = (route) => {
  if (route === '/') return join(DIST, 'index.html')
  return join(DIST, `${route.slice(1)}.html`)
}

const inject = (rendered) => {
  const extractedHead = []
  const bodyHtml = rendered.html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, (tag) => { extractedHead.push(tag); return '' })
    .replace(/<meta\b[^>]*>/gi, (tag) => { extractedHead.push(tag); return '' })
    .replace(/<link\b[^>]*(?:rel="(?:canonical|preload)"|as="image")[^>]*>/gi, (tag) => { extractedHead.push(tag); return '' })
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, (tag) => { extractedHead.push(tag); return '' })
  const head = [rendered.head, ...extractedHead].filter(Boolean).join('\n')

  return template
    .replace(/<html\b[^>]*>/i, `<html ${rendered.htmlAttributes}>`)
    .replace(/<body\b[^>]*>/i, `<body${rendered.bodyAttributes ? ` ${rendered.bodyAttributes}` : ''}>`)
    .replace(/\s*<title>NETZ Informatique<\/title>/i, '')
    .replace('</head>', `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)
}

const renderedRoutes = []
for (const route of canonicalRoutes) {
  const rendered = await render(route.path)
  const output = outputPathFor(route.path)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, inject(rendered))
  renderedRoutes.push({ ...route, output })
}

for (const path of ['/newsletter-confirmation']) {
  const rendered = await render(path)
  const output = outputPathFor(path)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, inject(rendered))
}

const notFound = await render('/__not-found__')
await writeFile(join(DIST, '404.html'), inject(notFound))

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...canonicalRoutes.map(({ path, lastmod }) => [
    '  <url>',
    `    <loc>${escapeXml(new URL(path, SITE_URL).toString())}</loc>`,
    lastmod ? `    <lastmod>${escapeXml(lastmod)}</lastmod>` : null,
    '  </url>',
  ].filter(Boolean).join('\n')),
  '</urlset>',
  '',
].join('\n')

const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
const rssItems = sortedPosts.map((post) => {
  const url = new URL(`/blog/${post.slug}`, SITE_URL).toString()
  const content = String(post.content.fr || '').replaceAll(']]>', ']]]]><![CDATA[>')
  const tags = Array.isArray(post.tags?.fr) ? post.tags.fr : []
  return [
    '    <item>',
    `      <title>${escapeXml(post.title.fr)}</title>`,
    `      <link>${escapeXml(url)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
    `      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>`,
    `      <description>${escapeXml(post.excerpt.fr)}</description>`,
    `      <content:encoded><![CDATA[${content}]]></content:encoded>`,
    ...tags.map((tag) => `      <category>${escapeXml(tag)}</category>`),
    post.image ? `      <enclosure url="${escapeXml(new URL(post.image, SITE_URL).toString())}" type="image/jpeg" />` : null,
    '    </item>',
  ].filter(Boolean).join('\n')
}).join('\n')

const rss = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">',
  '  <channel>',
  '    <title>NETZ Informatique — Conseils et actualités IT</title>',
  '    <description>Guides pratiques sur l’informatique, la cybersécurité, le cloud et l’intelligence artificielle pour les entreprises.</description>',
  `    <link>${SITE_URL}/blog</link>`,
  '    <language>fr-FR</language>',
  `    <lastBuildDate>${new Date(`${sortedPosts[0].date}T12:00:00Z`).toUTCString()}</lastBuildDate>`,
  `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
  rssItems,
  '  </channel>',
  '</rss>',
  '',
].join('\n')

for (const [name, value] of [['sitemap.xml', sitemap], ['rss.xml', rss]]) {
  await writeFile(join(DIST, name), value)
  await writeFile(join(ROOT, 'public', name), value)
}

const manifest = renderedRoutes.map(({ path, output }) => ({ path, file: output.slice(DIST.length + 1) }))
await writeFile(join(DIST, 'prerender-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)

for (const { path, output } of renderedRoutes) {
  const html = await readFile(output, 'utf8')
  const canonicalCount = (html.match(/rel="canonical"/g) || []).length
  if (!html.includes('<div id="root">') || html.includes('aria-label="Chargement"')) throw new Error(`Incomplete prerender for ${path}`)
  if (canonicalCount !== 1) throw new Error(`Expected one canonical for ${path}, found ${canonicalCount}`)
  if (!/<title>[^<]+<\/title>/.test(html) || !/<meta name="description" content="[^"]+"/.test(html)) throw new Error(`Missing metadata for ${path}`)
}
const notFoundHtml = await readFile(join(DIST, '404.html'), 'utf8')
if (!notFoundHtml.includes('noindex, nofollow')) throw new Error('404.html must be noindex, nofollow')
if (canonicalRoutes.length !== 45) throw new Error(`Expected 45 canonical routes, found ${canonicalRoutes.length}`)
if (sortedPosts.length !== 12) throw new Error(`Expected 12 RSS posts, found ${sortedPosts.length}`)

await rm(join(ROOT, '.prerender'), { recursive: true, force: true })
console.log(`Prerendered and validated ${canonicalRoutes.length} canonical routes plus 404.html.`)
