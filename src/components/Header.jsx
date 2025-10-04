import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Tous les Services', path: '/services' },
        { name: 'Pour Particuliers', path: '/services/particuliers' },
        { name: 'Pour Entreprises', path: '/services/entreprises' },
      ]
    },
    {
      name: 'Solutions',
      path: '/solutions',
      dropdown: [
        { name: 'Toutes les Solutions', path: '/solutions' },
        { name: 'Intelligence Artificielle', path: '/solutions/intelligence-artificielle' },
        { name: 'Web & SEO', path: '/solutions/web-developpement' },
        { name: 'Cloud Computing', path: '/solutions/cloud' },
      ]
    },
    {
      name: 'Formation',
      path: '/formation',
      dropdown: [
        { name: 'Formations', path: '/formation' },
        { name: 'Bilan de Compétences', path: '/formation/bilan-competences' },
      ]
    },
    { name: 'Matériel', path: '/materiel' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="tel:+33367310201" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone size={16} />
              <span>03 67 31 02 01</span>
            </a>
            <a href="mailto:contact@netzinformatique.fr" className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail size={16} />
              <span>contact@netzinformatique.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Lun-Sam: 09:00-12:00 / 14:00-18:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-primary via-purple-600 to-green-500 bg-clip-text text-transparent">
                  NETZ Informatique
                </span>
                <span className="text-xs text-muted-foreground">Votre Partenaire Technologique</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-border py-2 animate-fadeIn">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="gradient-green text-white font-semibold">
                  {t('common.getQuote')}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white animate-fadeIn">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg font-medium transition ${
                      location.pathname === item.path
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-4 text-sm rounded-lg hover:bg-muted transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gradient-green text-white font-semibold mt-4">
                  Demander un Devis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
