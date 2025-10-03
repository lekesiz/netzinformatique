import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, FileText } from 'lucide-react';

const Cybersecurite = () => {
  const { t } = useTranslation();

  const pageTitle = t('cyber.title', 'Cybersécurité & Protection des Données');
  const pageDescription = t('cyber.description', 'Protégez votre entreprise contre les menaces numériques. Solutions de cybersécurité complètes, de l`antivirus à la conformité RGPD.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/cybersecurite' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'SecurityService',
    },
    breadcrumbs,
  };

  const protections = [
    { icon: Shield, title: t('cyber.protection1Title', 'Protection Antivirus & Pare-feu'), text: t('cyber.protection1Text', 'Solutions de pointe pour bloquer les malwares, ransomwares et autres menaces en temps réel.') },
    { icon: Lock, title: t('cyber.protection2Title', 'Sauvegarde & Récupération'), text: t('cyber.protection2Text', 'Mise en place de stratégies de sauvegarde robustes pour garantir la continuité de votre activité.') },
    { icon: FileText, title: t('cyber.protection3Title', 'Conformité RGPD'), text: t('cyber.protection3Text', 'Audit et accompagnement pour assurer votre conformité avec le Règlement Général sur la Protection des Données.') },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/cybersecurite" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{t('cyber.subtitle', 'Votre bouclier numérique')}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('cyber.p1', 'Dans un monde de plus en plus connecté, la sécurité de vos données est primordiale. Nous vous aidons à identifier les failles, à mettre en place les bonnes protections et à former vos équipes aux meilleures pratiques.')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {protections.map((protection, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <protection.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{protection.title}</h3>
                  <p className="text-muted-foreground">{protection.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
                <Link to="/contact?subject=Audit%20de%20sécurité">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                        {t('cyber.ctaButton', 'Demander un Audit de Sécurité')}
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

export default Cybersecurite;
