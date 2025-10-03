import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, ShoppingCart } from 'lucide-react';

const WebDigital = () => {
  const { t } = useTranslation();

  const pageTitle = t('web.title', 'Création de Site Web & Marketing Digital');
  const pageDescription = t('web.description', 'Augmentez votre visibilité en ligne avec un site web professionnel et une stratégie de marketing digital sur mesure.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/web-digital' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'WebDevelopmentService',
    },
    breadcrumbs,
  };

  const offerings = [
    { icon: Globe, title: t('web.offering1Title', 'Site Vitrine & Institutionnel'), text: t('web.offering1Text', 'Création de sites web modernes, responsive et optimisés pour présenter votre activité.') },
    { icon: ShoppingCart, title: t('web.offering2Title', 'E-commerce'), text: t('web.offering2Text', 'Développement de boutiques en ligne performantes pour vendre vos produits et services.') },
    { icon: Search, title: t('web.offering3Title', 'Référencement (SEO)'), text: t('web.offering3Text', 'Optimisation de votre site pour apparaître dans les premiers résultats de Google.') },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/web-digital" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{t('web.subtitle', 'Votre présence digitale, notre expertise')}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('web.p1', 'Un site web est plus qu`une simple vitrine, c`est un outil de croissance. Nous vous accompagnons de la conception à la mise en ligne, en passant par la stratégie de contenu et le référencement pour attirer de nouveaux clients.')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {offerings.map((offering, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <offering.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground">{offering.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
                <Link to="/contact?subject=Projet%20Web">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                        {t('web.ctaButton', 'Obtenir une Consultation Gratuite')}
                        <ArrowRight className="ml-2" size={20} />
                    </Button>
                </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDigital;
