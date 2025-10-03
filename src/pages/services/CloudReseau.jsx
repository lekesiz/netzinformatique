import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Wifi, Server } from 'lucide-react';

const CloudReseau = () => {
  const { t } = useTranslation();

  const pageTitle = t('cloud.title', 'Solutions Cloud & Infrastructure Réseau');
  const pageDescription = t('cloud.description', 'Modernisez votre infrastructure avec nos solutions Cloud et réseau. Fiabilité, performance et sécurité pour votre entreprise.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/cloud-reseau' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'InternetService',
    },
    breadcrumbs,
  };

  const services = [
    { icon: Cloud, title: t('cloud.service1Title', 'Migration vers le Cloud'), text: t('cloud.service1Text', 'Accompagnement complet pour migrer vos applications et données vers des solutions Cloud (Microsoft 365, etc.).') },
    { icon: Wifi, title: t('cloud.service2Title', 'Infrastructure Réseau'), text: t('cloud.service2Text', 'Conception et installation de réseaux filaires et Wi-Fi performants et sécurisés pour vos locaux.') },
    { icon: Server, title: t('cloud.service3Title', 'Gestion de Serveurs'), text: t('cloud.service3Text', 'Installation, configuration et maintenance de vos serveurs physiques ou virtuels.') },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/cloud-reseau" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{t('cloud.subtitle', 'Une infrastructure agile et performante')}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('cloud.p1', 'Que vous souhaitiez adopter le Cloud pour plus de flexibilité ou renforcer votre réseau local, nous avons l`expertise pour construire une infrastructure informatique solide, adaptée à vos enjeux de croissance.')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
                <Link to="/contact?subject=Projet%20Infrastructure">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        {t('cloud.ctaButton', 'Discuter de mon projet')}
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

export default CloudReseau;
