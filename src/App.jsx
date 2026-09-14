import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useStore from './store/useStore'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/common/CookieConsent'
import GoogleAnalytics from './components/common/GoogleAnalytics'
import GoogleTagManager from './components/common/GoogleTagManager'
import OpenAITrackingPixel from './components/common/OpenAITrackingPixel'
import ConsentIntegrations from './components/common/ConsentIntegrations'
import ErrorBoundary from './components/common/ErrorBoundary'
import Breadcrumb from './components/common/Breadcrumb'
import BackToTop from './components/common/BackToTop'
import NotificationToast from './components/common/NotificationToast'
import SkipLink from './components/common/SkipLink'
import { ConsentProvider } from './consent/ConsentProvider'

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Chargement">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" aria-hidden="true" />
  </div>
)

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
const Tarifs = lazy(() => import('./pages/Tarifs'))
const Contact = lazy(() => import('./pages/Contact'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const DepannageMaintenance = lazy(() => import('./pages/services/DepannageMaintenance'))
const IAOffline = lazy(() => import('./pages/services/IAOffline'))
const FormationProfessionnelle = lazy(() => import('./pages/services/FormationProfessionnelle'))
const Cybersecurite = lazy(() => import('./pages/services/Cybersecurite'))
const CloudReseau = lazy(() => import('./pages/services/CloudReseau'))
const WebDigital = lazy(() => import('./pages/services/WebDigital'))
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'))
const BlogPost = lazy(() => import('./pages/blog/BlogPost'))
const SectorPage = lazy(() => import('./pages/sectors/SectorPage'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Legal = lazy(() => import('./pages/Legal'))
const Privacy = lazy(() => import('./pages/Privacy'))
const TrustCenter = lazy(() => import('./pages/TrustCenter'))
const NewsletterConfirmation = lazy(() => import('./pages/NewsletterConfirmation'))
const NotFound = lazy(() => import('./pages/NotFound'))
const AppointmentWidget = lazy(() => import('./components/common/AppointmentWidget'))
const WhatsAppButton = lazy(() => import('./components/common/WhatsAppButton'))
const LiveChat = lazy(() => import('./components/common/LiveChat'))

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/particuliers" element={<ServiceIndividual />} />
        <Route path="/services/entreprises" element={<ServiceEnterprise />} />
        <Route path="/services/depannage-maintenance" element={<DepannageMaintenance />} />
        <Route path="/services/ia-offline" element={<IAOffline />} />
        <Route path="/services/formation-professionnelle" element={<FormationProfessionnelle />} />
        <Route path="/services/cybersecurite" element={<Cybersecurite />} />
        <Route path="/services/cloud-reseau" element={<CloudReseau />} />
        <Route path="/services/web-digital" element={<WebDigital />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/intelligence-artificielle" element={<SolutionAI />} />
        <Route path="/solutions/web-developpement" element={<SolutionWeb />} />
        <Route path="/solutions/cloud" element={<SolutionCloud />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/formation/bilan-competences" element={<BilanCompetences />} />
        <Route path="/materiel" element={<Materiel />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/sectors/:slug" element={<SectorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="/politique-confidentialite" element={<Privacy />} />
        <Route path="/confiance" element={<TrustCenter />} />
        <Route path="/newsletter-confirmation" element={<NewsletterConfirmation />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export function AppShell() {
  useEffect(() => {
    useStore.persist.rehydrate().then(() => {
      const state = useStore.getState()
      state.setTheme(state.theme)
    })
  }, [])

  return (
    <ConsentProvider>
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />
        <Breadcrumb />
        <main id="main-content" tabIndex={-1} className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
        <CookieConsent />
        <Suspense fallback={null}>
          <AppointmentWidget />
          <WhatsAppButton />
          <LiveChat />
        </Suspense>
        <BackToTop />
        <NotificationToast />
        <GoogleAnalytics />
        <GoogleTagManager />
        <OpenAITrackingPixel />
        <ConsentIntegrations />
      </div>
    </ConsentProvider>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
