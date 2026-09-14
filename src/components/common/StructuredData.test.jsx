import { beforeEach, describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import StructuredData from './StructuredData'

const renderSchema = (component) => render(<HelmetProvider>{component}</HelmetProvider>)

describe('StructuredData', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })

  it('publishes one parseable home graph with a real image and no fake search action', () => {
    renderSchema(<StructuredData type="home" />)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts).toHaveLength(1)
    const schema = JSON.parse(scripts[0].textContent)
    expect(schema['@graph']).toHaveLength(2)
    expect(schema['@graph'][0].image).toBe('https://www.netzinformatique.fr/og-image.jpg')
    expect(JSON.stringify(schema)).not.toContain('SearchAction')
    expect(JSON.stringify(schema)).not.toContain('/search')
  })

  it('escapes unsafe values while remaining valid JSON', () => {
    renderSchema(<StructuredData type="service" data={{ service: { name: '</script>', description: 'Safe' } }} />)
    const content = document.querySelector('script[type="application/ld+json"]').textContent
    expect(content).not.toContain('</script>')
    expect(JSON.parse(content)['@graph'][0].name).toBe('</script>')
  })
})
