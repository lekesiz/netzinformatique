import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';
import SEO from '@/components/common/SEO';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('notFound.title', '404 - Page Non Trouvée')}
        description={t('notFound.description', 'La page que vous recherchez n`existe pas ou a été déplacée.')}
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('notFound.heading', 'Oups ! Page Non Trouvée')}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            {t('notFound.message', 'La page que vous recherchez n`existe pas, a été déplacée ou n`est plus disponible. Retournez à l`accueil ou utilisez la recherche.')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button size="lg" className="gradient-blue text-white font-semibold w-full sm:w-auto">
                <Home className="mr-2" size={20} />
                {t('notFound.backHome', 'Retour à l`Accueil')}
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Search className="mr-2" size={20} />
                {t('notFound.contact', 'Nous Contacter')}
              </Button>
            </Link>
          </div>

          {/* Popular Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {t('notFound.popularPages', 'Pages populaires :')}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/services" className="text-primary hover:underline text-sm">
                {t('nav.services', 'Services')}
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/solutions" className="text-primary hover:underline text-sm">
                {t('nav.solutions', 'Solutions')}
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/formation" className="text-primary hover:underline text-sm">
                {t('nav.formation', 'Formation')}
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/blog" className="text-primary hover:underline text-sm">
                {t('nav.blog', 'Blog')}
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/faq" className="text-primary hover:underline text-sm">
                {t('nav.faq', 'FAQ')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
