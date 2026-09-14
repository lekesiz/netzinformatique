# NETZ Informatique Modernization Implementation

**Implementation date:** 14 September 2026  
**Branch:** `modernization-2026`  
**Scope:** Security, privacy, consent, APIs, accessibility, performance, SEO, content integrity, conversion architecture, quality automation, and governance.

## Executive outcome

The modernization report has been implemented as a production-ready program rather than a visual-only redesign. The application now has one versioned consent source of truth, no eager analytics loader, hardened serverless endpoints, double opt-in newsletter activation, deterministic prerendering, clean canonical URLs, true static 404 output, first-party fonts, responsive AVIF/WebP blog imagery, blocking quality gates, recurring governance, and a public trust center.

Unsupported anonymized testimonials and case-study outcomes were removed instead of being converted into invented evidence. The site now states certification, financing, monitoring, response-time, cybersecurity, and performance claims with explicit scope and limitations.

## Delivered work

| Workstream | Production result |
|---|---|
| Dependency and CI security | Vulnerable or unreachable packages were removed, current compatible packages were installed, GitHub Actions were pinned to immutable SHAs, production dependency auditing is blocking, and Vercel uses the same verified build command. |
| Consent and privacy | A single versioned consent store controls analytics, marketing, functional vendors, Sentry, Maps, Calendly, Tawk, GTM, GA, and the OpenAI pixel. Visitors can reopen preferences; withdrawal removes owned vendor resources and analytics cookies. |
| API hardening | Contact and newsletter endpoints enforce origin, method, media type, body size, strict shared Zod validation, rate limits, duplicate protection, honeypots, context-safe escaping, truthful provider results, and safe error responses. |
| Newsletter | Signup creates a pending unsubscribed Resend contact, sends an encrypted 24-hour confirmation link, and activates the contact only after an explicit confirmation action. |
| Forms and conversion | Contact paths preserve audience, service, offer, sector, and source. The form adapts to B2B or B2C needs, applies a 12-second timeout and one controlled retry, and tracks consented funnel events without personal data. |
| Performance | All canonical routes are prerendered, fonts are first-party, floating widgets are lazy chunks, the service worker bypasses mutations and APIs, stale chunks recover safely, backup and redundant image assets were removed, and blog images use responsive AVIF/WebP variants. |
| SEO and AI discovery | Forty-five canonical routes emit route-specific HTML, metadata, structured data, RSS, and sitemap output. Invalid localized hreflang signals were removed; 404s and newsletter confirmation are noindex. JSON-LD serialization is hardened. |
| Accessibility | The app includes a localized skip link, semantic main target, keyboard-operable menus, focus-managed form errors, accessible cookie dialog behavior, minimum control targets, reduced-motion support, and no invalid anchor/button nesting. |
| Trust and content | A public `/confiance` center links to the official French company registry and explains certification scope, security, privacy, editorial corrections, and accessibility. Six priority articles now expose named editorial ownership, review dates, and primary sources. |
| Governance | A monthly GitHub technical audit runs security, tests, coverage, prerender, budgets, and Lighthouse. A quarterly workflow opens an evidence, search, privacy, security, accessibility, and performance review issue without duplicating an open issue. |

## Release evidence

The release gate completed with **133 passing tests across 13 test files**, no production dependency vulnerabilities, and **83.49% statement / 86.48% line coverage** across the measured code. The prerender build validated **45 canonical routes plus `404.html`**, with the sitemap containing the same 45 canonical URLs.

Production budgets passed at **654 KiB initial JS/CSS**, **489 KiB largest JavaScript chunk**, **126 KiB largest CSS file**, and **80 KiB largest built image**. These are raw transfer-independent guardrails; the HTTP layer additionally compresses eligible content.

| Critical route | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---:|---:|---:|---:|---:|---:|
| Home | 99 | 100 | 96 | 100 | 0.87 s | 0.0001 |
| Services | 99 | 100 | 96 | 92 | 0.79 s | 0.0012 |
| Tarifs | 99 | 100 | 96 | 92 | 0.79 s | 0.0028 |
| Contact | 99 | 100 | 96 | 92 | 0.79 s | 0.0009 |
| Blog | 97 | 100 | 96 | 92 | 1.16 s | 0.0016 |

These Lighthouse figures are local desktop laboratory measurements and are not substitutes for the consented field p75 Web Vitals that will accumulate after deployment.

## External prerequisites and evidence boundaries

Three outcomes cannot be honestly completed in source code alone. First, real client case studies require source measurements and written publication permission; unverified case studies and testimonials were removed, and the governance workflow now checks this evidence quarterly. Second, manual NVDA/Firefox, VoiceOver/Safari, TalkBack/Chrome, and keyboard-only verification needs human assistive-technology sessions; automated Lighthouse accessibility is blocking and currently scores 100 on all five critical routes, but the trust center deliberately does not claim formal WCAG or RGAA compliance. Third, field p75 Web Vitals and funnel conversion outcomes require live traffic after release; the consented first-party `/api/vitals` endpoint and GA event taxonomy are now in place for that observation period.

For stronger key separation, configure a dedicated `NEWSLETTER_TOKEN_SECRET` in Vercel. The implementation safely falls back to the existing Resend API key so the deployment does not break if this optional secret is absent.

## Verified primary references

The identity and Qualiopi statements were checked against the [official French Annuaire des Entreprises](https://annuaire-entreprises.data.gouv.fr/entreprise/netz-informatique-818347346). Double opt-in activation uses the documented [Resend Update Contact API](https://resend.com/docs/api-reference/contacts/update-contact). Editorial source links are recorded in `docs/EXTERNAL_SOURCES.md` and rendered directly on the six priority articles.
