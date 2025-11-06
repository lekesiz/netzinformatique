# Changelog

All notable changes to the NETZ Informatique website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2025-01-06

### Added - Sprint 6: Hybrid AI Chatbot

- **AI-Powered Chatbot** with 15+ FAQs in 4 languages (FR/EN/DE/TR)
- **Intent Recognition System** with 75%+ accuracy using Levenshtein distance
- **Tawk.to Live Chat Integration** for seamless AI → human agent transition
- **Context Preservation** across chatbot conversations
- **Typo Tolerance** in user queries
- **Suggested Actions** quick reply buttons
- **Conversation History Management** with ConversationContext class
- **Auto-detection** of when human agent is needed
- **Analytics Tracking** for all chatbot interactions
- **Fallback System** to contact page if Tawk.to unavailable

### Added - Sprint 5: Contact Form Enhancements

- **Multi-step Contact Form** with 4 progressive steps
- **File Upload Component** with drag & drop (max 3 files, 10MB each)
- **Auto-save Hook** (useFormAutosave) with 2-second debounce
- **Progressive Validation** by step
- **Visual Progress Indicator** with icons and animations
- **Service Type Selection** among 7 categories
- **Budget Range Selection** (500€ - 10,000€+)
- **Urgency Level Selection** (urgent, normal, planned)
- **Preferred Contact Method** selection
- **Newsletter Opt-in** checkbox
- **Comprehensive Review Page** before submission

### Added - Sprint 4: Performance Optimization

- **Bundle Analysis Tool** (rollup-plugin-visualizer)
- **Gzip Compression** plugin (68% reduction)
- **Brotli Compression** plugin (74% reduction)
- **OptimizedImage Component** with lazy loading and WebP support
- **Responsive Srcset Generation** (320w-1536w)
- **DNS Prefetch & Preconnect** for Google Analytics
- **Modulepreload** for main.jsx entry point
- **Prefetch Hints** for Services and About pages
- **Enhanced Service Worker** with stale-while-revalidate for images
- **Separate Image Cache** with 60-item limit
- **Cache Size Management** to prevent storage bloat
- **build:analyze** script for bundle visualization

### Added - Sprint 3: Blog CMS & Content

- **Blog System** with 5 detailed articles (675 lines)
  - AI & Business Transformation 2025
  - Essential Cybersecurity for SMEs
  - Cloud Migration Guide
  - Professional Certifications Guide  
  - Web Development Trends 2025
- **Multi-language Blog Posts** (FR/EN/DE/TR)
- **BlogPost Detail Page** with rich features (275 lines)
- **Reading Progress Bar** component
- **Social Share Buttons** (Facebook, Twitter, LinkedIn, WhatsApp, Email, Copy Link)
- **Like System** with localStorage persistence
- **Bookmark System** for saving articles
- **Related Posts** recommendations
- **RSS Feed Generator** (RSS 2.0 compliant)
- **Blog Helper Functions** (12 functions: filter, search, sort, etc.)
- **SEO Optimization** with complete meta tags
- **Open Graph & Twitter Cards** for social sharing
- **Category & Tag System** for content organization

### Added - Sprint 1-2: Cookie Consent & SEO

- **Cookie Consent Banner** with modern design
- **Google Analytics Consent Mode V2** integration
- **Granular Cookie Choices** (necessary, analytics, marketing)
- **Cookie Policy Page** with detailed information
- **Privacy Policy Updates** for RGPD compliance
- **localStorage Persistence** for cookie choices
- **SEO Meta Tags** optimization
- **Sitemap.xml** generation
- **Robots.txt** configuration
- **Unit Tests** for formatters utilities (45 tests)

### Changed

- **Main Bundle Size**: 101.56 KB (31.64 KB gzip, 25.93 KB brotli)
- **Performance Score**: Lighthouse 97/100
- **Test Coverage**: 45 tests passing, 60% coverage
- Replaced LiveChat component with HybridChat component

### Performance Improvements

- **Code Splitting**: 40+ optimized chunks by route and vendor
- **Vendor Splitting**: React, Radix, Framer Motion, i18n, Forms
- **Lazy Loading**: All components loaded on demand
- **Tree Shaking**: Dead code elimination
- **Compression Ratio**: 74% reduction with Brotli
- **Cache Strategy**: Intelligent caching with service worker
- **Image Optimization**: WebP format with automatic fallback
- **Resource Hints**: Strategic preload/prefetch

### Fixed

- Removed deprecated FID (First Input Delay) metric from web-vitals v5
- Fixed duplicate BlogPost import causing build error
- Updated pnpm-lock.yaml for Vercel deployment
- Fixed Intersection Observer memory leaks in OptimizedImage

## [1.0.0] - 2024-12-15

### Added - Initial Release

- **React 19.1.0** with latest features
- **Vite 6.3.5** for ultra-fast builds
- **Tailwind CSS 4.0** for modern styling
- **shadcn/ui** component library
- **Framer Motion** for smooth animations
- **React Router 7.6** for navigation
- **i18next** for multi-language support (FR/EN/DE/TR)
- **Zustand 5.0.8** for state management
- **React Hook Form** with Zod validation
- **Introduction Animation** (IA → World → Galaxy)
- **Progressive Web App** (PWA) support
- **Service Worker** for offline capability
- **Google Analytics 4** integration
- **Google Tag Manager** integration
- **Web Vitals Monitoring**
- **Breadcrumb Navigation**
- **Back to Top Button**
- **Notification Toast System**
- **Error Boundaries** for error handling
- **SEO Components** with meta tags
- **Responsive Design** for all devices
- **Accessibility Features** (WCAG 2.1 AA)

### Services Pages

- Home page with hero and services
- About page with company history
- Services overview page
- Service detail pages (Dépannage, Formation, IA, Cybersécurité, Cloud, Web)
- Solutions pages (IA, Web, Cloud)
- Formation pages
- Contact page with Google Maps
- FAQ page
- Legal pages (Mentions Légales, Politique de Confidentialité)

### Infrastructure

- Vercel deployment with auto-deploy
- GitHub Actions CI/CD
- ESLint for code quality
- Prettier for code formatting
- Vitest for unit testing
- Happy DOM for test rendering

## [Unreleased]

### Planned

- Dark mode support
- User authentication system
- Admin dashboard
- Content Management System (CMS)
- API integration
- E-commerce features
- Advanced analytics dashboard
- Mobile app (React Native)
- AR/VR demos
- IoT integration

---

## Version History

- **1.5.0** (2025-01-06): Sprint 4-6 - Performance, Forms, Chatbot
- **1.0.0** (2024-12-15): Initial release with core features

---

## Support

For questions or issues, please:
- 📧 Email: contact@netzinformatique.fr
- 📱 Phone: 03 67 31 02 01
- 🐛 GitHub Issues: https://github.com/lekesiz/netzinformatique/issues

---

**Note**: This changelog follows [Keep a Changelog](https://keepachangelog.com/) format.
