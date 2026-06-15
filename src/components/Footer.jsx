import { Link } from 'react-router-dom'
import {
  Phone, Mail, MapPin, Facebook, Linkedin, Clock,
  ShoppingCart, GraduationCap, FileText,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const partnerSites = [
    { icon: ShoppingCart, href: 'https://informatique-haguenau.fr', label: t('footer.onlineShop'), domain: 'informatique-haguenau.fr' },
    { icon: GraduationCap, href: 'https://formation-haguenau.fr', label: t('footer.trainingPlatform'), domain: 'formation-haguenau.fr' },
    { icon: FileText, href: 'https://netz-blog.fr', label: t('footer.techBlog'), domain: 'netz-blog.fr' },
  ]

  const linkCls = 'text-slate-400 hover:text-white transition-colors'

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex mb-4">
              <img
                src="/logo-netz.png"
                alt="NETZ Informatique"
                width={520}
                height={221}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/informatiquehaguenau"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 text-white rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/netz-informatique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 text-white rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className={linkCls}>{t('nav.home')}</Link></li>
              <li><Link to="/a-propos" className={linkCls}>{t('nav.about')}</Link></li>
              <li><Link to="/services" className={linkCls}>{t('nav.services')}</Link></li>
              <li><Link to="/solutions" className={linkCls}>{t('nav.solutions')}</Link></li>
              <li><Link to="/formation" className={linkCls}>{t('nav.formation')}</Link></li>
              <li><Link to="/materiel" className={linkCls}>{t('nav.materiel')}</Link></li>
              <li><Link to="/blog" className={linkCls}>{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className={linkCls}>{t('nav.contact')}</Link></li>
              <li><Link to="/faq" className={linkCls}>{t('nav.faq')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">{t('footer.ourServices')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/particuliers" className={linkCls}>{t('services.individual')}</Link></li>
              <li><Link to="/services/entreprises" className={linkCls}>{t('services.enterprise')}</Link></li>
              <li><Link to="/solutions/intelligence-artificielle" className={linkCls}>{t('solutions.ai')}</Link></li>
              <li><Link to="/solutions/web-developpement" className={linkCls}>{t('solutions.web')}</Link></li>
              <li><Link to="/formation/bilan-competences" className={linkCls}>{t('training.skillsAssessment')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-slate-400">
                  1a Route de Schweighouse<br />
                  67500 Haguenau, France
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <a href="tel:+33367310201" className={linkCls}>03 67 31 02 01</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <a href="mailto:contact@netzinformatique.fr" className={linkCls}>contact@netzinformatique.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-slate-400">{t('footer.businessHours')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Sites */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="font-heading font-bold text-lg mb-4 text-center text-white">{t('footer.partnerSites')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partnerSites.map((s) => (
              <a
                key={s.domain}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-accent/40 transition text-center"
              >
                <s.icon size={24} className="mb-1 text-accent" />
                <div className="font-semibold text-white">{s.label}</div>
                <div className="text-xs text-slate-400">{s.domain}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
              <span>{t('footer.copyright')}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t('footer.rcs')}</span>
              <span className="hidden sm:inline">•</span>
              <span>{t('footer.qualiopi')}</span>
            </div>
            <div className="flex gap-4">
              <Link to="/mentions-legales" className={linkCls}>{t('footer.legalNotice')}</Link>
              <span>•</span>
              <Link to="/politique-confidentialite" className={linkCls}>{t('footer.privacy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
