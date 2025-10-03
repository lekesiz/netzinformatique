import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const DepannageMaintenance = () => {
  const { t } = useTranslation();

  const pageTitle = t('depannage.title', 'Dépannage & Maintenance Informatique');
  const pageDescription = t('depannage.description', 'Intervention rapide à Haguenau pour tous vos problèmes informatiques, PC et Mac. Réparation, optimisation et maintenance préventive.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/depannage-maintenance' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'ComputerRepair',
    },
    breadcrumbs,
  };

  const features = [
    { text: t('depannage.feature1', 'Diagnostic complet et rapide') },
    { text: t('depannage.feature2', 'Réparation matérielle et logicielle') },
    { text: t('depannage.feature3', 'Éradication de virus et malwares') },
    { text: t('depannage.feature4', 'Optimisation des performances') },
    { text: t('depannage.feature5', 'Maintenance préventive') },
    { text: t('depannage.feature6', 'Intervention sur site ou en atelier') },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/depannage-maintenance" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-primary/5 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('depannage.subtitle', 'Une solution pour chaque problème')}</h2>
                <p className="mb-6 text-muted-foreground">{t('depannage.p1', 'Votre ordinateur est lent, ne démarre plus ou se comporte étrangement ? Ne laissez pas un problème technique ralentir votre productivité. Chez NETZ Informatique, nous offrons un service de dépannage complet pour tous types d\`ordinateurs (PC, Mac, portables) et de systèmes d\`exploitation (Windows, macOS, Linux).')}</p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-accent" size={22} />
                      <span className="text-lg">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold text-center mb-6">{t('depannage.ctaTitle', 'Besoin d\`une intervention ?')}</h3>
                <p className="text-center text-muted-foreground mb-6">{t('depannage.ctaDescription', 'Contactez-nous pour un diagnostic gratuit et une intervention rapide sous 24-48h.')}</p>
                <div className="flex flex-col gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full gradient-green text-white font-semibold">
                      {t('depannage.ctaButton1', 'Demander un Devis')}
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <a href="tel:+33899250151">
                    <Button size="lg" variant="outline" className="w-full">
                      <Phone className="mr-2" size={20} />
                      {t('common.callNow', 'Appeler Maintenant')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DepannageMaintenance;
