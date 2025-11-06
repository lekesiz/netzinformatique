import { describe, it, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'
import SEO from './SEO'

// Helper to render with providers
const renderWithProviders = (component) => {
  return render(
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </HelmetProvider>
  )
}

describe('SEO Component', () => {
  beforeEach(() => {
    // Clear any previous head elements
    document.head.innerHTML = ''
  })

  it('should render default meta tags', () => {
    renderWithProviders(<SEO />)

    // Check for title
    const title = document.querySelector('title')
    expect(title).toBeTruthy()
    expect(title?.textContent).toContain('NETZ Informatique')
  })

  it('should render custom title', () => {
    const customTitle = 'Custom Page Title'
    renderWithProviders(<SEO title={customTitle} />)

    const title = document.querySelector('title')
    expect(title?.textContent).toBe(customTitle)
  })

  it('should render custom description', () => {
    const customDescription = 'This is a custom description'
    renderWithProviders(<SEO description={customDescription} />)

    const descriptionMeta = document.querySelector('meta[name="description"]')
    expect(descriptionMeta?.getAttribute('content')).toBe(customDescription)
  })

  it('should render Open Graph meta tags', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      url: '/test-page',
    }

    renderWithProviders(<SEO {...props} />)

    // Check OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')

    expect(ogTitle?.getAttribute('content')).toBe(props.title)
    expect(ogDescription?.getAttribute('content')).toBe(props.description)
    expect(ogUrl?.getAttribute('content')).toContain(props.url)
  })

  it('should render Twitter Card meta tags', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
    }

    renderWithProviders(<SEO {...props} />)

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const twitterCard = document.querySelector('meta[name="twitter:card"]')

    expect(twitterTitle?.getAttribute('content')).toBe(props.title)
    expect(twitterDescription?.getAttribute('content')).toBe(props.description)
    expect(twitterCard?.getAttribute('content')).toBe('summary_large_image')
  })

  it('should render canonical URL', () => {
    const testUrl = '/test-page'
    renderWithProviders(<SEO url={testUrl} />)

    const canonical = document.querySelector('link[rel="canonical"]')
    expect(canonical?.getAttribute('href')).toContain(testUrl)
  })

  it('should render hreflang tags for multiple languages', () => {
    renderWithProviders(<SEO url="/test" />)

    const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]')
    expect(hreflangLinks.length).toBeGreaterThan(0)

    // Check for common languages
    const languages = ['fr', 'en', 'de', 'tr']
    languages.forEach(lang => {
      const langLink = document.querySelector(`link[hreflang="${lang}"]`)
      expect(langLink).toBeTruthy()
    })

    // Check for x-default
    const xDefault = document.querySelector('link[hreflang="x-default"]')
    expect(xDefault).toBeTruthy()
  })

  it('should render geo meta tags', () => {
    renderWithProviders(<SEO />)

    const geoRegion = document.querySelector('meta[name="geo.region"]')
    const geoPlace = document.querySelector('meta[name="geo.placename"]')
    const geoPosition = document.querySelector('meta[name="geo.position"]')

    expect(geoRegion?.getAttribute('content')).toBe('FR-67')
    expect(geoPlace?.getAttribute('content')).toBe('Haguenau')
    expect(geoPosition?.getAttribute('content')).toBeTruthy()
  })

  it('should render robots meta tag', () => {
    renderWithProviders(<SEO />)

    const robots = document.querySelector('meta[name="robots"]')
    expect(robots?.getAttribute('content')).toContain('index')
    expect(robots?.getAttribute('content')).toContain('follow')
  })

  it('should render article published/modified times when provided', () => {
    const publishedTime = '2025-01-01T00:00:00Z'
    const modifiedTime = '2025-01-02T00:00:00Z'

    renderWithProviders(
      <SEO
        type="article"
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
      />
    )

    const publishedMeta = document.querySelector('meta[property="article:published_time"]')
    const modifiedMeta = document.querySelector('meta[property="article:modified_time"]')

    expect(publishedMeta?.getAttribute('content')).toBe(publishedTime)
    expect(modifiedMeta?.getAttribute('content')).toBe(modifiedTime)
  })

  it('should use default image when no custom image provided', () => {
    renderWithProviders(<SEO />)

    const ogImage = document.querySelector('meta[property="og:image"]')
    expect(ogImage?.getAttribute('content')).toContain('og-image.jpg')
  })

  it('should use custom image when provided', () => {
    const customImage = 'https://example.com/custom-image.jpg'
    renderWithProviders(<SEO image={customImage} />)

    const ogImage = document.querySelector('meta[property="og:image"]')
    expect(ogImage?.getAttribute('content')).toBe(customImage)
  })

  it('should render keywords meta tag', () => {
    const keywords = 'test, seo, keywords'
    renderWithProviders(<SEO keywords={keywords} />)

    const keywordsMeta = document.querySelector('meta[name="keywords"]')
    expect(keywordsMeta?.getAttribute('content')).toBe(keywords)
  })

  it('should set html lang attribute', () => {
    renderWithProviders(<SEO />)

    const html = document.querySelector('html')
    expect(html?.getAttribute('lang')).toBeTruthy()
  })
})
