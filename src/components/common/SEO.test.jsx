import { beforeEach, describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import SEO from './SEO'

const renderSEO = (component) => render(
  <HelmetProvider>
    <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
  </HelmetProvider>,
)

describe('SEO', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })

  it('renders useful default metadata', () => {
    renderSEO(<SEO />)
    expect(document.querySelector('title')?.textContent).toContain('NETZ Informatique')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBeTruthy()
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toContain('index')
  })

  it('renders custom title, description, and keywords', () => {
    renderSEO(<SEO title="Custom" description="Description" keywords="one, two" />)
    expect(document.querySelector('title')?.textContent).toBe('Custom')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Description')
    expect(document.querySelector('meta[name="keywords"]')?.getAttribute('content')).toBe('one, two')
  })

  it('resolves relative canonical and image values to production URLs', () => {
    renderSEO(<SEO url="/blog/article" image="/images/blog/article.jpg" />)
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe('https://www.netzinformatique.fr/blog/article')
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe('https://www.netzinformatique.fr/images/blog/article.jpg')
  })

  it('keeps already absolute social images unchanged', () => {
    renderSEO(<SEO image="https://cdn.example.com/image.jpg" />)
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe('https://cdn.example.com/image.jpg')
  })

  it('does not advertise localized routes that are not crawlable', () => {
    renderSEO(<SEO url="/test" />)
    expect(document.querySelectorAll('link[rel="alternate"][hreflang]')).toHaveLength(0)
  })

  it('renders noindex and nofollow consistently', () => {
    renderSEO(<SEO noindex />)
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('noindex, nofollow')
    expect(document.querySelector('meta[name="googlebot"]')?.getAttribute('content')).toBe('noindex, nofollow')
    expect(document.querySelector('meta[name="bingbot"]')?.getAttribute('content')).toBe('noindex, nofollow')
  })

  it('renders correct French Open Graph locale and Twitter card', () => {
    renderSEO(<SEO title="Titre" description="Texte" />)
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute('content')).toBe('fr_FR')
    expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary_large_image')
  })

  it('renders article timestamps when supplied', () => {
    renderSEO(<SEO type="article" publishedTime="2025-01-01" modifiedTime="2025-01-02" />)
    expect(document.querySelector('meta[property="article:published_time"]')?.getAttribute('content')).toBe('2025-01-01')
    expect(document.querySelector('meta[property="article:modified_time"]')?.getAttribute('content')).toBe('2025-01-02')
  })

  it('sets language and geographic metadata', () => {
    renderSEO(<SEO />)
    expect(document.documentElement.lang).toBeTruthy()
    expect(document.querySelector('meta[name="geo.region"]')?.getAttribute('content')).toBe('FR-67')
    expect(document.querySelector('meta[name="geo.placename"]')?.getAttribute('content')).toBe('Haguenau')
  })
})
