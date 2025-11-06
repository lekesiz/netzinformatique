import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Clock, ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

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
              {t('footer.tagline')}
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
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-background/80 hover:text-background transition">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-background/80 hover:text-background transition">
                  {t('nav.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/formation" className="text-background/80 hover:text-background transition">
                  {t('nav.formation')}
                </Link>
              </li>
              <li>
                <Link to="/materiel" className="text-background/80 hover:text-background transition">
                  {t('nav.materiel')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-background transition">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-background transition">
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/particuliers" className="text-background/80 hover:text-background transition">
                  {t('services.individual')}
                </Link>
              </li>
              <li>
                <Link to="/services/entreprises" className="text-background/80 hover:text-background transition">
                  {t('services.enterprise')}
                </Link>
              </li>
              <li>
                <Link to="/solutions/intelligence-artificielle" className="text-background/80 hover:text-background transition">
                  {t('solutions.ai')}
                </Link>
              </li>
              <li>
                <Link to="/solutions/web-developpement" className="text-background/80 hover:text-background transition">
                  {t('solutions.web')}
                </Link>
              </li>
              <li>
                <Link to="/formation/bilan-competences" className="text-background/80 hover:text-background transition">
                  {t('training.skillsAssessment')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contact')}</h3>
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
                <a href="tel:+33367310201" className="text-background/80 hover:text-background transition">
                  03 67 31 02 01
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
                  {t('footer.businessHours')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Sites */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <h3 className="font-bold text-lg mb-4 text-center">{t('footer.partnerSites')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a
              href="https://informatique-haguenau.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/10 rounded-lg p-4 hover:bg-background/20 transition text-center"
            >
              <div className="text-2xl mb-2">🛒</div>
              <div className="font-semibold mb-1">{t('footer.onlineShop')}</div>
              <div className="text-xs text-background/70">informatique-haguenau.fr</div>
            </a>
            <a
              href="https://formation-haguenau.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/10 rounded-lg p-4 hover:bg-background/20 transition text-center"
            >
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-semibold mb-1">{t('footer.trainingPlatform')}</div>
              <div className="text-xs text-background/70">formation-haguenau.fr</div>
            </a>
            <a
              href="https://netz-blog.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/10 rounded-lg p-4 hover:bg-background/20 transition text-center"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold mb-1">{t('footer.techBlog')}</div>
              <div className="text-xs text-background/70">netz-blog.fr</div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span>{t('footer.copyright')}</span>
              <span>•</span>
              <span>{t('footer.rcs')}</span>
              <span>•</span>
              <span>{t('footer.qualiopi')}</span>
            </div>
            <div className="flex gap-4">
              <Link to="/mentions-legales" className="hover:text-background transition">
                {t('footer.legalNotice')}
              </Link>
              <span>•</span>
              <Link to="/politique-confidentialite" className="hover:text-background transition">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Removed as it's now handled by BackToTop component */}
    </footer>
  )
}

export default Footer
