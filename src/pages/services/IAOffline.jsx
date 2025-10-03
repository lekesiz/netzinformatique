import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BrainCircuit, Lock, Building } from 'lucide-react';

const IAOffline = () => {
  const { t } = useTranslation();

  const pageTitle = t('ia.title', 'Solutions IA Offline & Confidentielles');
  const pageDescription = t('ia.description', 'Déployez la puissance de l`intelligence artificielle sans compromettre la sécurité de vos données. Solutions 100% locales et confidentielles.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/ia-offline' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'ArtificialIntelligenceService',
    },
    breadcrumbs,
  };

  const benefits = [
    { icon: Lock, title: t('ia.benefit1Title', 'Confidentialité Maximale'), text: t('ia.benefit1Text', 'Aucune donnée ne quitte votre infrastructure. Idéal pour les secteurs sensibles (santé, juridique, R&D).') },
    { icon: BrainCircuit, title: t('ia.benefit2Title', 'Performances et Rapidité'), text: t('ia.benefit2Text', 'Traitement en temps réel sans latence réseau. Accès instantané à vos modèles IA.') },
    { icon: Building, title: t('ia.benefit3Title', 'Souveraineté des Données'), text: t('ia.benefit3Text', 'Contrôle total sur vos données et vos modèles. Conformité RGPD simplifiée.') },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/ia-offline" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-secondary/5 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{t('ia.subtitle', 'L`IA sans les risques du Cloud')}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('ia.p1', 'Nous installons et configurons des serveurs d`IA directement dans vos locaux, vous donnant un accès exclusif à des modèles de langage avancés (type GPT-4) pour analyser vos documents, automatiser des tâches et bien plus, en toute sécurité.')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <benefit.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
                <Link to="/contact">
                    <Button size="lg" className="gradient-purple text-white font-semibold">
                        {t('ia.ctaButton', 'Planifier une Démo')}
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

export default IAOffline;
