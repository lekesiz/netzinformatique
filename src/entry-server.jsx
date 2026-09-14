import { prerender } from 'react-dom/static'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router'
import { AppShell } from './App.jsx'
import i18n from './i18n.js'

const createTree = (url, helmetContext) => (
  <HelmetProvider context={helmetContext}>
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  </HelmetProvider>
)

export async function render(url) {
  await i18n.changeLanguage('fr')

  const warmupErrors = []
  const { prelude } = await prerender(createTree(url, {}), {
    onError(error) {
      warmupErrors.push(error)
    },
  })
  await new Response(prelude).text()
  if (warmupErrors.length) throw warmupErrors[0]

  const helmetContext = {}
  const html = renderToString(createTree(url, helmetContext))
  const { helmet } = helmetContext

  return {
    html,
    head: [
      helmet?.title?.toString(),
      helmet?.priority?.toString(),
      helmet?.meta?.toString(),
      helmet?.link?.toString(),
      helmet?.script?.toString(),
      helmet?.style?.toString(),
    ].filter(Boolean).join('\n'),
    htmlAttributes: helmet?.htmlAttributes?.toString() || 'lang="fr"',
    bodyAttributes: helmet?.bodyAttributes?.toString() || '',
  }
}
