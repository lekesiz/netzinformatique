module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/index.html', '/services.html', '/tarifs.html', '/contact.html', '/blog.html'],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        chromeFlags: '--no-sandbox --headless --disable-gpu',
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:performance': ['warn', { minScore: 0.8 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 3000 }],
        'total-blocking-time': ['warn', { maxNumericValue: 350 }],
      },
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci' },
  },
}
