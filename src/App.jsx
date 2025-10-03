import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'
import CookieBanner from './components/CookieBanner'
import AppointmentWidget from './components/common/AppointmentWidget'
import LiveChat from './components/common/LiveChat'
import GoogleAnalytics from './components/common/GoogleAnalytics'

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
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'))

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
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = () => {
    setIntroComplete(true)
    setTimeout(() => setShowIntro(false), 500)
  }

  return (
    <Router>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className={`min-h-screen flex flex-col ${!introComplete ? 'hidden' : ''}`}>
        <Header />
        <main className="flex-1">
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
              
              {/* 404 - Catch all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
        <AppointmentWidget />
        <LiveChat />
        <GoogleAnalytics />
      </div>
    </Router>
  )
}

export default App
