# NETZ Informatique Website

Modern, responsive website for NETZ Informatique - IT services company in Haguenau, France.

## 🚀 Live Demo

**Production URL**: [https://netzinformatique.vercel.app](https://netzinformatique.vercel.app)

> Note: When custom domain is configured, the site will be available at: https://netzinformatique.fr

## 📋 Features

- ✅ **Multi-language Support**: French, English, German, Turkish
- ✅ **Modern Tech Stack**: React + Vite + Tailwind CSS
- ✅ **SEO Optimized**: Sitemap, robots.txt, meta tags, JSON-LD
- ✅ **Performance**: Lazy loading, code splitting, PWA support
- ✅ **Animations**: Stunning AI → World → Galaxy intro animation
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Contact Form**: Functional backend API
- ✅ **Legal Compliance**: Privacy policy and legal notices pages

## 🛠️ Technology Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **CSS**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Internationalization**: i18next
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lekesiz/netzinformatique.git

# Navigate to project directory
cd netzinformatique

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## 🌐 Deployment

The website is automatically deployed to Vercel on every push to the `main` branch.

### Vercel Configuration

- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Environment Variables

No environment variables required for basic deployment.

For email functionality, you'll need to configure:
- Email service API keys (SendGrid, Mailgun, etc.)

## 📁 Project Structure

```
netz-informatique-website/
├── api/                    # Vercel serverless functions
│   └── contact.js         # Contact form API endpoint
├── public/                # Static assets
│   ├── favicon.ico
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── IntroAnimation.jsx
│   │   └── LanguageSwitcher.jsx
│   ├── pages/            # Page components
│   ├── i18n.js           # Internationalization config
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── vercel.json           # Vercel configuration
└── package.json
```

## 🔒 Security

- HTTPS enforced
- Security headers configured
- Input validation on contact form
- RGPD/GDPR compliant

## 📝 License

© 2025 NETZ Informatique. All rights reserved.

## 📞 Contact

- **Website**: https://netzinformatique.fr
- **Email**: contact@netzinformatique.fr
- **Phone**: +(33) 0 8 99 25 01 51
- **Address**: 1a Route de Schweighouse, 67500 Haguenau, France

---

**Developed with ❤️ using modern web technologies**