import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'
import CookieBanner from './components/CookieBanner'

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
              <Route path="/services" element={<Services />} />
              <Route path="/services/particuliers" element={<ServiceIndividual />} />
              <Route path="/services/entreprises" element={<ServiceEnterprise />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/intelligence-artificielle" element={<SolutionAI />} />
              <Route path="/solutions/web-developpement" element={<SolutionWeb />} />
              <Route path="/solutions/cloud" element={<SolutionCloud />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/formation/bilan-competences" element={<BilanCompetences />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  )
}

export default App
