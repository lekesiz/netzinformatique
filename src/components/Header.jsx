import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, Clock, ChevronDown, ArrowRight } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './common/ThemeToggle'

const Header = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

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
      ],
    },
    {
      name: 'Solutions',
      path: '/solutions',
      dropdown: [
        { name: 'Toutes les Solutions', path: '/solutions' },
        { name: 'Intelligence Artificielle', path: '/solutions/intelligence-artificielle' },
        { name: 'Web & SEO', path: '/solutions/web-developpement' },
        { name: 'Cloud Computing', path: '/solutions/cloud' },
      ],
    },
    {
      name: 'Formation',
      path: '/formation',
      dropdown: [
        { name: 'Formations', path: '/formation' },
        { name: 'Bilan de Compétences', path: '/formation/bilan-competences' },
      ],
    },
    { name: 'Matériel', path: '/materiel' },
    { name: 'Boutique', path: 'https://informatique-haguenau.fr/', external: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="tel:+33367310201" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone size={15} />
              <span>03 67 31 02 01</span>
            </a>
            <a href="mailto:contact@netzinformatique.fr" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition">
              <Mail size={15} />
              <span>contact@netzinformatique.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Clock size={15} />
            <span>Lun–Sam : 9h–12h / 14h–18h</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border'
            : 'bg-background/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo-netz.png"
                alt="NETZ Informatique"
                width={520}
                height={221}
                className="h-9 md:h-11 w-auto dark:brightness-0 dark:invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-accent hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent hover:bg-muted ${
                        isActive(item.path) ? 'text-accent' : 'text-foreground/80'
                      }`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown size={15} className="opacity-70" />}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-60 bg-popover text-popover-foreground rounded-xl shadow-xl border border-border py-2 animate-fadeIn">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-accent transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side: theme, lang, CTA */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <ThemeToggle />
              <LanguageSwitcher />
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-1.5">
                  {t('common.getQuote', 'Devis gratuit')}
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fadeIn max-h-[calc(100dvh-7rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2.5 px-4 rounded-lg font-medium hover:bg-muted transition"
                  >
                    {item.name}
                  </a>
                ) : (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block py-2.5 px-4 rounded-lg font-medium transition ${
                        isActive(item.path) ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 px-3 text-sm rounded-lg text-muted-foreground hover:bg-muted hover:text-accent transition"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
              <div className="flex items-center gap-2 pt-3">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              <Link to="/contact">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-2 gap-1.5">
                  {t('common.getQuote', 'Devis gratuit')}
                  <ArrowRight size={16} />
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
