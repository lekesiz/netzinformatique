import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, lazy, Suspense, useEffect } from 'react'
import useStore from './store/useStore'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'
import CookieConsent from './components/common/CookieConsent'
import AppointmentWidget from './components/common/AppointmentWidget'
import HybridChat from './components/common/HybridChat'
import GoogleAnalytics from './components/common/GoogleAnalytics'
import GoogleTagManager from './components/common/GoogleTagManager'
import ErrorBoundary from './components/common/ErrorBoundary'
import Breadcrumb from './components/common/Breadcrumb'
import BackToTop from './components/common/BackToTop'
import NotificationToast from './components/common/NotificationToast'

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceIndividual = lazy(() => import('./pages/ServiceIndividual'))
const ServiceEnterprise = lazy(() => import('./pages/ServiceEnterprise'))
const Solutions = lazy(() => import('./pages/Solutions'))
const SolutionAI = lazy(() => import('./pages/SolutionAI'))
const SolutionWeb = lazy(() => import('./pages/SolutionWeb'))
const SolutionCloud = lazy(() => import('./pages/SolutionCloud'))
const Formation = lazy(() => import('./pages/Formation'))
const BilanCompetences = lazy(() => import('./pages/BilanCompetences'))
const Materiel = lazy(() => import('./pages/Materiel'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))

// New service detail pages
const DepannageMaintenance = lazy(() => import('./pages/services/DepannageMaintenance'))
const IAOffline = lazy(() => import('./pages/services/IAOffline'))
const FormationProfessionnelle = lazy(() => import('./pages/services/FormationProfessionnelle'))
const Cybersecurite = lazy(() => import('./pages/services/Cybersecurite'))
const CloudReseau = lazy(() => import('./pages/services/CloudReseau'))
const WebDigital = lazy(() => import('./pages/services/WebDigital'))

// Blog pages
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'))
const BlogPost = lazy(() => import('./pages/blog/BlogPost'))

// Sector pages
const SectorPage = lazy(() => import('./pages/sectors/SectorPage'))

// Other pages
const FAQ = lazy(() => import('./pages/FAQ'))
const Legal = lazy(() => import('./pages/Legal'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  // Use Zustand for intro state management
  const introShown = useStore((state) => state.preferences.introShown)
  const setPreference = useStore((state) => state.setPreference)

  const [showIntro, setShowIntro] = useState(!introShown)
  const [introComplete, setIntroComplete] = useState(introShown)

  const handleIntroComplete = () => {
    setIntroComplete(true)
    setPreference('introShown', true)
    setTimeout(() => setShowIntro(false), 500)
  }

  // Initialize theme on mount
  const theme = useStore((state) => state.theme)
  const setTheme = useStore((state) => state.setTheme)

  useEffect(() => {
    // Apply initial theme
    setTheme(theme)
  }, [])

  return (
    <ErrorBoundary>
      <Router>
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
        <div className={`min-h-screen flex flex-col ${!introComplete ? 'hidden' : ''}`}>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg transition-all"
          >
            Skip to main content
          </a>
          <Header />
          <Breadcrumb />
          <main id="main-content" className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/about" element={<About />} />
              
              {/* Services */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/particuliers" element={<ServiceIndividual />} />
              <Route path="/services/entreprises" element={<ServiceEnterprise />} />
              <Route path="/services/depannage-maintenance" element={<DepannageMaintenance />} />
              <Route path="/services/ia-offline" element={<IAOffline />} />
              <Route path="/services/formation-professionnelle" element={<FormationProfessionnelle />} />
              <Route path="/services/cybersecurite" element={<Cybersecurite />} />
              <Route path="/services/cloud-reseau" element={<CloudReseau />} />
              <Route path="/services/web-digital" element={<WebDigital />} />
              
              {/* Solutions */}
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/intelligence-artificielle" element={<SolutionAI />} />
              <Route path="/solutions/web-developpement" element={<SolutionWeb />} />
              <Route path="/solutions/cloud" element={<SolutionCloud />} />
              
              {/* Formation */}
              <Route path="/formation" element={<Formation />} />
              <Route path="/formation/bilan-competences" element={<BilanCompetences />} />
              
              {/* Materiel */}
              <Route path="/materiel" element={<Materiel />} />
              
              {/* Blog */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Sectors */}
              <Route path="/sectors/:slug" element={<SectorPage />} />
              
              {/* Other pages */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/politique-confidentialite" element={<Privacy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />

              {/* 404 - Catch all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
        <AppointmentWidget />
        <HybridChat />
        <BackToTop />
        <NotificationToast />
        <GoogleAnalytics />
        <GoogleTagManager />
      </div>
    </Router>
    </ErrorBoundary>
  )
}

export default App
