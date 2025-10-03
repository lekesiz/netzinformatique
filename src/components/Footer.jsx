import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Clock, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                N
              </div>
              <span className="font-bold text-lg">NETZ Informatique</span>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Votre partenaire technologique de confiance depuis plus de 20 ans à Haguenau.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/informatiquehaguenau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/netz-informatique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-background/80 hover:text-background transition">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-background/80 hover:text-background transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/formation" className="text-background/80 hover:text-background transition">
                  Formation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-background transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/particuliers" className="text-background/80 hover:text-background transition">
                  Services Particuliers
                </Link>
              </li>
              <li>
                <Link to="/services/entreprises" className="text-background/80 hover:text-background transition">
                  Services Entreprises
                </Link>
              </li>
              <li>
                <Link to="/solutions/intelligence-artificielle" className="text-background/80 hover:text-background transition">
                  Intelligence Artificielle
                </Link>
              </li>
              <li>
                <Link to="/solutions/web-developpement" className="text-background/80 hover:text-background transition">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link to="/formation/bilan-competences" className="text-background/80 hover:text-background transition">
                  Bilan de Compétences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  1a Route de Schweighouse<br />
                  67500 Haguenau, France
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+33389992501" className="text-background/80 hover:text-background transition">
                  +(33) 0 8 99 25 01 51
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contact@netzinformatique.fr" className="text-background/80 hover:text-background transition">
                  contact@netzinformatique.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  Lundi - Samedi<br />
                  09:00-12:00 / 14:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span>© 2025 NETZ Informatique</span>
              <span>•</span>
              <span>RCS Strasbourg 818 347 346</span>
              <span>•</span>
              <span>Certification QUALIOPI</span>
            </div>
            <div className="flex gap-4">
              <Link to="/mentions-legales" className="hover:text-background transition">
                Mentions Légales
              </Link>
              <span>•</span>
              <Link to="/confidentialite" className="hover:text-background transition">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition flex items-center justify-center hover-lift"
        aria-label="Retour en haut"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}

export default Footer
