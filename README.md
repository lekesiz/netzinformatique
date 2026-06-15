# 🌟 NETZ Informatique — Site Web Officiel

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-Production-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<div align="center" style="margin-top: 10px;">
  <img src="https://img.shields.io/badge/Tests-121_Passing-success?style=for-the-badge&logo=vitest&logoColor=white" alt="Tests" />
  <img src="https://img.shields.io/badge/i18n-FR_·_EN_·_DE_·_TR-blue?style=for-the-badge&logo=googletranslate&logoColor=white" alt="i18n" />
  <img src="https://img.shields.io/badge/Lighthouse-A11y_100_·_SEO_100-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse" />
</div>

<div align="center">
  <h3>🚀 Site en Production</h3>
  <p>
    <a href="https://www.netzinformatique.fr" target="_blank">
      <img src="https://img.shields.io/badge/Visiter_netzinformatique.fr-0369A1?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Visiter le Site" />
    </a>
  </p>
</div>

---

## 📖 Table des Matières

- [À Propos du Projet](#-à-propos-du-projet)
- [Fonctionnalités Principales](#-fonctionnalités-principales)
- [Architecture Technique](#️-architecture-technique)
- [Internationalisation (i18n)](#-internationalisation-i18n)
- [Optimisation IA / GEO & SEO](#-optimisation-ia--geo--seo)
- [Guide d'Installation](#️-guide-dinstallation)
- [Documentation Développeur](#-documentation-développeur)
- [Déploiement et CI/CD](#-déploiement-et-cicd)
- [Performances](#-performances)
- [Sécurité et Conformité](#-sécurité-et-conformité)
- [Roadmap](#-roadmap)
- [Contribution](#-contribution)
- [Support et Contact](#-support-et-contact)

---

## 🎯 À Propos du Projet

### Contexte

**NETZ Informatique** est un acteur des services informatiques basé à **Haguenau (Alsace)**. La société NETZ a été **créée en 2016**, dans la continuité d'une activité commerciale en France depuis **2009** (anciennement *Orditeur*), pour une expérience cumulée de **35 ans** dans le secteur.

Ce dépôt contient le **site web officiel** de l'entreprise : une vitrine moderne, rapide, multilingue et orientée conversion, pensée pour les **particuliers** comme pour les **entreprises**.

### Objectifs

1. **Image moderne** — une expérience « Trust & Authority » qui inspire confiance (palette bleu marine / bleu, certifications, résultats chiffrés).
2. **Performance** — navigation ultra-rapide sur tous les appareils (LCP < 1,5 s, CLS ≈ 0).
3. **Multilingue** — FR / EN / DE / TR, intégralement traduit (navigation incluse).
4. **Génération de leads** — parcours « Je suis un particulier / une entreprise », CTA clairs, formulaire de contact, WhatsApp et prise de RDV.
5. **Visibilité** — SEO local fort + optimisation pour les moteurs et assistants IA (GEO).

---

## ✨ Fonctionnalités Principales

### 🎨 Interface et Design

- **Design system « Trust & Authority »** — palette bleu marine (`#0F172A`) + bleu accent (`#0369A1`), basée sur **shadcn/ui** (style *new-york*) et des tokens **oklch**.
- **Mode sombre natif** — thème clair/sombre complet avec bascule et respect de la préférence système.
- **Responsive** — mobile-first, optimisé pour mobile / tablette / desktop.
- **Méga-menu** — Services & Solutions en panneaux 2 colonnes (icône + description) avec encart CTA.
- **Animations au scroll** — `framer-motion` (apparition progressive, compteurs animés), respectueuses de `prefers-reduced-motion`.
- **Icônes SVG** — `lucide-react` uniquement (aucun emoji-icône).

### 🏠 Sections de la page d'accueil

Parcours « Enterprise Gateway » : hero avec sélection de profil (particulier / entreprise) · statistiques animées · services · pourquoi nous choisir · **méthode en 4 étapes** · **études de cas chiffrées** · témoignages · partenaires · boutique · **FAQ** · newsletter · CTA final.

### 🛒 Pages

47 pages/écrans : accueil, à propos, services (dépannage, IA Offline, cybersécurité, cloud & réseau, web & digital, formation), solutions (IA, web, cloud), formation & bilan de compétences, matériel, tarifs, blog, secteurs, contact, FAQ, et pages légales (mentions légales, confidentialité, cookies).

### 📱 Progressive Web App (PWA)

- Installation sur l'écran d'accueil (manifest + icônes).
- Service Worker (mise en cache des assets statiques, garde-fous anti-empoisonnement de cache).

### 📊 Analytics

- **Google Analytics 4** (`G-1P3QYCN1MJ`) avec **Consent Mode** (bannière cookies RGPD).

---

## 🏗️ Architecture Technique

### Stack

```javascript
{
  "framework":  "React 19.2",
  "bundler":    "Vite 6.4",
  "styling":    "Tailwind CSS 4.1 (CSS-first, @theme dans src/App.css)",
  "components": "shadcn/ui (new-york) + Radix UI",
  "animations": "Framer Motion 12.23",
  "routing":    "React Router 7.9",
  "i18n":       "i18next 25.6 + react-i18next (lazy-loaded)",
  "icons":      "Lucide React",
  "email":      "Resend",
  "tests":      "Vitest 4 (121 tests)"
}
```

> **Note Tailwind 4** : configuration *CSS-first*, pas de `tailwind.config.js`. Les tokens, le thème clair/sombre et les plugins (`@tailwindcss/typography`) sont déclarés dans **`src/App.css`** (`@theme` / `@plugin`).

### Arborescence

```
src/
├── components/
│   ├── ui/            # Bibliothèque shadcn/ui
│   ├── home/          # Sections de l'accueil (Hero, Process, CaseStudies, FAQ…)
│   ├── common/        # SEO, StructuredData, Reveal, CountUp, GoogleMap, ThemeToggle…
│   ├── Header.jsx     # Navigation + méga-menu (traduits)
│   └── Footer.jsx
├── pages/             # Pages de l'application (services/, solutions/, sectors/…)
├── locales/           # Traductions EN / DE / TR (chargées à la demande)
├── data/              # Données (blog, etc.)
├── store/             # État global (thème)
└── i18n.js            # Configuration i18next + lazy-loading des locales
```

### Bonnes pratiques

- Composition over inheritance · responsabilité unique · Error Boundaries
- Accessibilité (WCAG 2.1 AA) : focus visibles, `aria-label`, hiérarchie des titres, contrastes vérifiés
- Tokens sémantiques (pas de hex brut dans les composants)

---

## 🌍 Internationalisation (i18n)

Le site est **réellement quadrilingue** : **Français** (langue par défaut, valeurs inline dans les `t()`), **Anglais**, **Allemand**, **Turc** — y compris la **navigation** et le **méga-menu**.

- **Chargement paresseux** : seul le bundle FR est inclus de base ; `en.js` / `de.js` / `tr.js` sont importés dynamiquement à la sélection de la langue (`import()` + `addResourceBundle`), ce qui garde le bundle initial léger.
- **Détection automatique** selon la préférence du navigateur, avec sélecteur de langue persistant.

---

## 🤖 Optimisation IA / GEO & SEO

Le site est optimisé à la fois pour le **référencement classique** et pour les **moteurs/assistants IA** (Generative Engine Optimization) :

- **`llms.txt` / `llms-full.txt`** — résumé structuré du site pour les LLM.
- **`robots.txt`** — autorisation explicite des principaux crawlers IA.
- **Données structurées JSON-LD** — graphe `@graph` (Organization, LocalBusiness, Website), `FAQPage`, fil d'Ariane.
- **`sitemap.xml`** — toutes les URLs (pages, blog, secteurs), soumis à Google Search Console.
- **Métadonnées** — titres/descriptions par page, Open Graph + image `og-image`, `theme-color`.
- **Données NPO/Local** — coordonnées exactes, horaires, géolocalisation, note clients.

---

## 🛠️ Guide d'Installation

### Prérequis

- **Node.js** 18+
- **pnpm** (recommandé)
- **Git**

### Installation

```bash
# 1. Cloner le repository
git clone https://github.com/lekesiz/netzinformatique.git
cd netzinformatique

# 2. Installer les dépendances
pnpm install

# 3. Variables d'environnement (optionnel — ex. RESEND_API_KEY)
cp .env.example .env.local

# 4. Lancer le serveur de développement
pnpm dev   # http://localhost:5173
```

### Scripts

```bash
# Développement
pnpm dev              # Serveur de dev avec HMR
pnpm preview          # Aperçu du build de production

# Build
pnpm build            # Build optimisé pour la production

# Qualité
pnpm lint             # ESLint (flat config)

# Tests (Vitest)
pnpm test             # Lance les 121 tests
pnpm test:watch       # Mode watch
pnpm test:coverage    # Rapport de couverture

# Images
pnpm optimize:images  # Optimisation / conversion (sharp)
```

---

## 📚 Documentation Développeur

### i18n dans un composant

```jsx
import { useTranslation } from 'react-i18next'

export default function Example() {
  const { t } = useTranslation()
  // FR = valeur par défaut inline ; EN/DE/TR fournies par les locales
  return <h2>{t('process.titlePre', 'Comment nous')}</h2>
}
```

### Animation au scroll

```jsx
import Reveal from '@/components/common/Reveal'

<Reveal delay={0.1}>
  <Card>…</Card>
</Reveal>   // respecte prefers-reduced-motion
```

### Conventions

- **Composants** : PascalCase · **utilitaires** : camelCase · **constantes** : UPPER_SNAKE_CASE
- Commits conventionnels : `feat:`, `fix:`, `refactor:`, `docs:`
- Styles via classes Tailwind + tokens du thème (jamais de hex brut)

---

## 🚀 Déploiement et CI/CD

Déploiement continu sur **Vercel** : chaque push sur `main` déclenche un build et un déploiement automatique en production. Les branches de feature génèrent des **déploiements de prévisualisation**.

```json
{
  "framework": "vite",
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install"
}
```

- **Production** : branche `main` → https://www.netzinformatique.fr
- **Preview** : branches de feature (auto-deploy)

---

## ⚡ Performances

Mesures Lighthouse (page d'accueil, production) :

| Métrique | Cible | Actuel |
|----------|-------|--------|
| Accessibility | 100 | ✅ 100 |
| SEO | 100 | ✅ 100 |
| Largest Contentful Paint | < 2,5 s | ✅ ~1,2 s |
| Cumulative Layout Shift | < 0,1 | ✅ ~0 |

**Stratégies** : code splitting par route, lazy-loading des locales et des composants hors écran, images WebP/AVIF avec dimensions réservées, polices non bloquantes (`font-display: swap` + preconnect), Service Worker pour les assets statiques.

---

## 🔒 Sécurité et Conformité

- **HTTPS** obligatoire, en-têtes de sécurité (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
- **Formulaires** : validation des entrées, rate limiting, anti-spam.
- **RGPD** : bannière de consentement cookies, Consent Mode GA4, pages **Mentions légales**, **Politique de confidentialité** et **Cookies** complètes.

---

## 📅 Roadmap

### Réalisé ✅
- [x] Refonte complète « Trust & Authority » (bleu marine / bleu)
- [x] **Mode sombre** natif
- [x] Site **réellement 4 langues** (navigation + méga-menu inclus)
- [x] Méga-menu Services / Solutions
- [x] Sections accueil : méthode en 4 étapes, études de cas, FAQ
- [x] Animations au scroll + compteurs animés
- [x] Optimisation IA / GEO (llms.txt, JSON-LD, FAQPage)
- [x] SEO : sitemap + Google Search Console, GA4 (Consent Mode)
- [x] WhatsApp + prise de RDV (Calendly)
- [x] Pages légales refondues (RGPD)

### À venir 🚧
- [ ] Photos réelles (bureau, équipe, avant/après)
- [ ] Logos clients / références
- [ ] Bios de l'équipe avec photos
- [ ] Barre CTA collante sur mobile
- [ ] Traduction des contenus longs (corps de blog & secteurs)

---

## 🤝 Contribution

1. **Fork** le projet
2. Créer une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commit (`git commit -m 'feat: ma fonctionnalité'`)
4. Push (`git push origin feature/ma-fonctionnalite`)
5. Ouvrir une **Pull Request**

> Respecter les conventions de code, ajouter/maintenir les tests, vérifier `pnpm lint` (0 erreur) et `pnpm build`, et assurer la compatibilité multilingue.

---

## 📞 Support et Contact

🐛 **Bug** : [Ouvrir une issue](https://github.com/lekesiz/netzinformatique/issues)
💡 **Suggestion** : [Discussions GitHub](https://github.com/lekesiz/netzinformatique/discussions)

### Contact

📧 **Email** : contact@netzinformatique.fr
📱 **Téléphone** : +33 3 67 31 02 01
💬 **WhatsApp** : +33 7 66 63 80 40
📍 **Adresse** : 1a Route de Schweighouse, 67500 Haguenau, France
🕒 **Horaires** : Lun–Ven 9h–12h / 14h–18h · Sam 9h–12h

---

## 📜 Licence et Crédits

© 2025–2026 NETZ Informatique. Tous droits réservés.

Ce projet est la propriété de NETZ Informatique. Toute reproduction, distribution ou modification sans autorisation écrite préalable est interdite.

**Construit avec** : React · Vite · Tailwind CSS · shadcn/ui · Radix UI · Framer Motion · i18next · Vercel.

---

<div align="center">
  <h3>🌟 Fait avec passion à Haguenau, Alsace 🥨</h3>
</div>
