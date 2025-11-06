import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Breadcrumb navigation component
 * Automatically generates breadcrumbs based on current route
 * Supports i18n for path names
 */
const Breadcrumb = () => {
  const location = useLocation()
  const { t } = useTranslation()

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null
  }

  // Split path into segments
  const pathSegments = location.pathname.split('/').filter(segment => segment)

  // Map of path segments to i18n keys
  const pathNameMap = {
    'services': 'nav.services',
    'particuliers': 'services.individual',
    'entreprises': 'services.enterprise',
    'depannage-maintenance': 'services.maintenance',
    'ia-offline': 'services.ai',
    'formation-professionnelle': 'services.training',
    'cybersecurite': 'services.security',
    'cloud-reseau': 'services.cloud',
    'web-digital': 'services.web',
    'solutions': 'nav.solutions',
    'intelligence-artificielle': 'solutions.ai',
    'web-developpement': 'solutions.web',
    'cloud': 'solutions.cloud',
    'formation': 'nav.training',
    'bilan-competences': 'training.skillsAssessment',
    'materiel': 'nav.shop',
    'blog': 'nav.blog',
    'contact': 'nav.contact',
    'faq': 'nav.faq',
    'a-propos': 'nav.about',
    'about': 'nav.about',
    'mentions-legales': 'footer.legal',
    'politique-confidentialite': 'footer.privacy',
    'sectors': 'Sectors'
  }

  // Generate breadcrumb items
  const breadcrumbItems = [
    {
      label: t('nav.home'),
      path: '/',
      icon: Home
    }
  ]

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1

    // Get translated name or use segment as fallback
    const label = pathNameMap[segment]
      ? t(pathNameMap[segment])
      : segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    breadcrumbItems.push({
      label,
      path: currentPath,
      isLast
    })
  })

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              {item.isLast ? (
                <span
                  className="text-gray-700 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  {index === 0 && item.icon && <item.icon className="w-4 h-4" aria-hidden="true" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
