import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceIndividual from './pages/ServiceIndividual'
import ServiceEnterprise from './pages/ServiceEnterprise'
import Solutions from './pages/Solutions'
import SolutionAI from './pages/SolutionAI'
import SolutionWeb from './pages/SolutionWeb'
import SolutionCloud from './pages/SolutionCloud'
import Formation from './pages/Formation'
import BilanCompetences from './pages/BilanCompetences'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
