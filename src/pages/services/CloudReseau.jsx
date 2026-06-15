import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Wifi, Server, Shield, Zap, Users, CheckCircle, Phone, Database, Network, HardDrive, Globe, Lock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CloudReseau = () => {
  const { t } = useTranslation();

  const pageTitle = t('cloudReseau.title', 'Solutions Cloud & Infrastructure Réseau');
  const pageDescription = t('cloudReseau.description', 'Modernisez votre infrastructure IT avec nos solutions Cloud et réseau. Migration Microsoft 365, serveurs, WiFi professionnel. Fiabilité et performance garanties.');

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

  const features = [
    { icon: Cloud, title: t('cloudReseau.feature1Title', 'Migration Cloud'), description: t('cloudReseau.feature1Desc', 'Passage vers Microsoft 365, Google Workspace ou solutions privées') },
    { icon: Server, title: t('cloudReseau.feature2Title', 'Serveurs'), description: t('cloudReseau.feature2Desc', 'Installation et gestion de serveurs physiques ou virtuels (Windows Server, Linux)') },
    { icon: Wifi, title: t('cloudReseau.feature3Title', 'Réseau WiFi'), description: t('cloudReseau.feature3Desc', 'Déploiement de réseaux WiFi professionnels performants et sécurisés') },
    { icon: Network, title: t('cloudReseau.feature4Title', 'Infrastructure Réseau'), description: t('cloudReseau.feature4Desc', 'Câblage, switchs, routeurs, firewall pour une connectivité optimale') },
    { icon: Database, title: t('cloudReseau.feature5Title', 'Stockage NAS'), description: t('cloudReseau.feature5Desc', 'Solutions de stockage en réseau pour sauvegardes et partage de fichiers') },
    { icon: Shield, title: t('cloudReseau.feature6Title', 'Sécurité Réseau'), description: t('cloudReseau.feature6Desc', 'Firewall, VPN, segmentation réseau pour protéger vos données') }
  ];

  const cloudSolutions = [
    {
      name: 'Microsoft 365',
      icon: Cloud,
      description: t('cloudReseau.sol1Desc', 'Suite bureautique complète dans le cloud'),
      features: [
        t('cloudReseau.sol1Feat1', 'Office (Word, Excel, PowerPoint, Outlook)'),
        t('cloudReseau.sol1Feat2', 'Teams (visioconférence, chat)'),
        t('cloudReseau.sol1Feat3', 'OneDrive (stockage 1TB/utilisateur)'),
        t('cloudReseau.sol1Feat4', 'SharePoint (intranet collaboratif)'),
        t('cloudReseau.sol1Feat5', 'Exchange Online (emails professionnels)'),
        t('cloudReseau.sol1Feat6', 'Sécurité avancée (antivirus, DLP)')
      ],
      pricing: t('cloudReseau.sol1Pricing', 'À partir de 10€/mois/utilisateur')
    },
    {
      name: 'Google Workspace',
      icon: Globe,
      description: t('cloudReseau.sol2Desc', 'Productivité et collaboration Google'),
      features: [
        t('cloudReseau.sol2Feat1', 'Gmail professionnel'),
        t('cloudReseau.sol2Feat2', 'Google Drive (stockage cloud)'),
        t('cloudReseau.sol2Feat3', 'Google Meet (visioconférence)'),
        t('cloudReseau.sol2Feat4', 'Docs, Sheets, Slides'),
        t('cloudReseau.sol2Feat5', 'Google Calendar'),
        t('cloudReseau.sol2Feat6', 'Administration centralisée')
      ],
      pricing: t('cloudReseau.sol2Pricing', 'À partir de 5€/mois/utilisateur')
    },
    {
      name: t('cloudReseau.sol3Name', 'Cloud Privé'),
      icon: Lock,
      description: t('cloudReseau.sol3Desc', 'Solution cloud hébergée dans vos locaux'),
      features: [
        t('cloudReseau.sol3Feat1', 'Contrôle total de vos données'),
        t('cloudReseau.sol3Feat2', 'Conformité RGPD garantie'),
        t('cloudReseau.sol3Feat3', 'Nextcloud ou ownCloud'),
        t('cloudReseau.sol3Feat4', 'Pas d\'abonnement mensuel'),
        t('cloudReseau.sol3Feat5', 'Performances optimales'),
        t('cloudReseau.sol3Feat6', 'Indépendance vis-à-vis des GAFAM')
      ],
      pricing: t('cloudReseau.sol3Pricing', 'À partir de 2000€ (investissement unique)')
    }
  ];

  const networkServices = [
    {
      title: t('cloudReseau.net1Title', 'Audit Réseau'),
      description: t('cloudReseau.net1Desc', 'Analyse complète de votre infrastructure actuelle : performance, sécurité, points faibles. Rapport détaillé avec recommandations.'),
      price: t('cloudReseau.net1Price', 'À partir de 500€')
    },
    {
      title: t('cloudReseau.net2Title', 'Installation WiFi Pro'),
      description: t('cloudReseau.net2Desc', 'Déploiement de bornes WiFi professionnelles (Ubiquiti, Cisco) pour une couverture optimale. Gestion centralisée, authentification sécurisée.'),
      price: t('cloudReseau.net2Price', 'À partir de 1500€')
    },
    {
      title: t('cloudReseau.net3Title', 'Câblage Réseau'),
      description: t('cloudReseau.net3Desc', 'Installation de câbles Cat6/Cat6a, baies de brassage, prises RJ45. Certification des liens. Respect des normes.'),
      price: t('cloudReseau.net3Price', 'Sur devis')
    },
    {
      title: t('cloudReseau.net4Title', 'Serveur Windows/Linux'),
      description: t('cloudReseau.net4Desc', 'Installation et configuration de serveurs : Active Directory, partage de fichiers, serveur d\'impression, base de données.'),
      price: t('cloudReseau.net4Price', 'À partir de 1200€')
    },
    {
      title: t('cloudReseau.net5Title', 'Firewall & VPN'),
      description: t('cloudReseau.net5Desc', 'Mise en place de pare-feu professionnels (pfSense, Fortinet) et VPN pour accès distant sécurisé.'),
      price: t('cloudReseau.net5Price', 'À partir de 800€')
    },
    {
      title: t('cloudReseau.net6Title', 'NAS & Sauvegarde'),
      description: t('cloudReseau.net6Desc', 'Installation de NAS Synology ou QNAP pour stockage centralisé et sauvegardes automatiques. RAID pour sécurité des données.'),
      price: t('cloudReseau.net6Price', 'À partir de 1000€ + matériel')
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: t('cloudReseau.benefit1Title', 'Performance'),
      description: t('cloudReseau.benefit1Desc', 'Réseau rapide et stable pour une productivité maximale')
    },
    {
      icon: Shield,
      title: t('cloudReseau.benefit2Title', 'Sécurité'),
      description: t('cloudReseau.benefit2Desc', 'Protection contre les cyberattaques et pertes de données')
    },
    {
      icon: Users,
      title: t('cloudReseau.benefit3Title', 'Collaboration'),
      description: t('cloudReseau.benefit3Desc', 'Travail d\'équipe facilité avec outils cloud modernes')
    },
    {
      icon: Cloud,
      title: t('cloudReseau.benefit4Title', 'Accessibilité'),
      description: t('cloudReseau.benefit4Desc', 'Accès à vos données depuis n\'importe où, n\'importe quand')
    }
  ];

  const process = [
    { step: '1', title: t('cloudReseau.proc1Title', 'Audit'), description: t('cloudReseau.proc1Desc', 'Analyse de votre infrastructure actuelle') },
    { step: '2', title: t('cloudReseau.proc2Title', 'Conception'), description: t('cloudReseau.proc2Desc', 'Proposition d\'architecture adaptée') },
    { step: '3', title: t('cloudReseau.proc3Title', 'Devis'), description: t('cloudReseau.proc3Desc', 'Chiffrage détaillé du projet') },
    { step: '4', title: t('cloudReseau.proc4Title', 'Installation'), description: t('cloudReseau.proc4Desc', 'Déploiement de la solution') },
    { step: '5', title: t('cloudReseau.proc5Title', 'Migration'), description: t('cloudReseau.proc5Desc', 'Transfert des données sans interruption') },
    { step: '6', title: t('cloudReseau.proc6Title', 'Formation'), description: t('cloudReseau.proc6Desc', 'Accompagnement de vos équipes') }
  ];

  const faq = [
    {
      question: t('cloudReseau.faq1Q', 'Pourquoi migrer vers le Cloud ?'),
      answer: t('cloudReseau.faq1A', 'Le Cloud offre de nombreux avantages : accessibilité depuis n\'importe où, sauvegardes automatiques, mises à jour incluses, coûts prévisibles, scalabilité, collaboration facilitée. Plus besoin de gérer des serveurs sur site.')
    },
    {
      question: t('cloudReseau.faq2Q', 'Microsoft 365 ou Google Workspace ?'),
      answer: t('cloudReseau.faq2A', 'Microsoft 365 est recommandé si vous utilisez déjà Office et avez besoin de fonctionnalités avancées (Teams, SharePoint). Google Workspace est plus simple et économique pour les petites structures. Nous vous conseillons selon vos besoins.')
    },
    {
      question: t('cloudReseau.faq3Q', 'Mes données sont-elles en sécurité dans le Cloud ?'),
      answer: t('cloudReseau.faq3A', 'Oui, les solutions cloud professionnelles (Microsoft, Google) offrent une sécurité de niveau bancaire : chiffrement, authentification multi-facteurs, sauvegardes géo-redondantes, conformité RGPD. Souvent plus sûr qu\'un serveur local.')
    },
    {
      question: t('cloudReseau.faq4Q', 'Combien coûte une infrastructure réseau complète ?'),
      answer: t('cloudReseau.faq4A', 'Pour une PME de 10-20 postes : comptez 5000-15000€ pour un réseau complet (serveur, WiFi pro, câblage, firewall, NAS). Nous proposons des solutions évolutives adaptées à votre budget.')
    },
    {
      question: t('cloudReseau.faq5Q', 'Proposez-vous la maintenance de l\'infrastructure ?'),
      answer: t('cloudReseau.faq5A', 'Oui, nous proposons des contrats de maintenance incluant : surveillance 24/7, mises à jour, sauvegardes, support prioritaire. À partir de 200€/mois selon la taille de l\'infrastructure.')
    }
  ];

  const caseStudies = [
    {
      company: t('cloudReseau.case1Company', 'Cabinet Comptable (15 postes)'),
      challenge: t('cloudReseau.case1Challenge', 'Serveur vieillissant, pas de sauvegarde, accès distant impossible'),
      solution: t('cloudReseau.case1Solution', 'Migration vers Microsoft 365 + NAS Synology pour archives'),
      results: t('cloudReseau.case1Results', 'Économie de 40% sur 3 ans, télétravail possible, sécurité renforcée')
    },
    {
      company: t('cloudReseau.case2Company', 'PME Industrielle (50 postes)'),
      challenge: t('cloudReseau.case2Challenge', 'WiFi instable, câblage obsolète, pas de segmentation réseau'),
      solution: t('cloudReseau.case2Solution', 'Nouveau câblage Cat6, WiFi Ubiquiti, firewall pfSense, VLANs'),
      results: t('cloudReseau.case2Results', 'Performance x3, sécurité optimale, couverture WiFi 100%')
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/cloud-reseau" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="inline-block rounded-full px-6 py-2 mb-4 bg-white/10 ring-1 ring-white/20">
              <span className="font-semibold flex items-center gap-2">
                <Cloud size={20} />
                {t('cloudReseau.heroBadge', 'Cloud & Réseau')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('cloudReseau.heroTitlePart1', 'Solutions')} <span className="text-accent">{t('cloudReseau.heroTitleCloud', 'Cloud')}</span> {t('cloudReseau.heroTitlePart2', '& Infrastructure')} <span className="text-accent">{t('cloudReseau.heroTitleReseau', 'Réseau')}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              {t('cloudReseau.heroSubtitle', 'Modernisez votre infrastructure IT. Migration cloud, serveurs, WiFi professionnel. Performance, sécurité et fiabilité garanties.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('cloudReseau.heroCtaAudit', 'Demander un Audit Gratuit')} <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
                  <Phone className="mr-2" /> 03 67 31 02 01
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Solutions */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cloudReseau.solutionsHeading', 'Solutions Cloud Professionnelles')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cloudReseau.solutionsSubheading', 'Choisissez la solution adaptée à vos besoins')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cloudSolutions.map((solution, index) => (
                <div key={index} className="bg-card rounded-2xl shadow-xl p-8">
                  <div className="flex justify-center mb-4">
                    <solution.icon size={48} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{solution.name}</h3>
                  <p className="text-muted-foreground text-center mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center font-bold text-accent mb-4">{solution.pricing}</div>
                  <Link to="/contact">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      {t('cloudReseau.learnMore', 'En Savoir Plus')}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cloudReseau.networkHeading', 'Services Infrastructure Réseau')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cloudReseau.networkSubheading', 'Conception, installation et maintenance')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {networkServices.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-3 text-accent">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-accent">{service.price}</span>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">{t('cloudReseau.quoteBtn', 'Devis')}</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cloudReseau.benefitsHeading', "Les Avantages d'une Infrastructure Moderne")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon size={32} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cloudReseau.processHeading', 'Notre Processus de Déploiement')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cloudReseau.processSubheading', 'Méthodologie éprouvée pour une migration sans stress')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cloudReseau.caseHeading', 'Cas Clients')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cloudReseau.caseSubheading', 'Découvrez comment nous avons transformé leur IT')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <div className="text-sm text-accent font-semibold mb-2">{study.company}</div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">{t('cloudReseau.caseChallengeLabel', 'Problématique:')}</div>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">{t('cloudReseau.caseSolutionLabel', 'Solution:')}</div>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <div className="font-bold mb-1">{t('cloudReseau.caseResultsLabel', 'Résultats:')}</div>
                    <p className="text-sm text-accent font-semibold">{study.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cloudReseau.faqHeading', 'Questions Fréquentes')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg mb-3 px-6 border shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cloudReseau.ctaHeading', 'Prêt à Moderniser Votre Infrastructure IT ?')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
              {t('cloudReseau.ctaSubheading', 'Audit gratuit • Devis détaillé • Migration sans interruption • Support inclus')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('cloudReseau.ctaAudit', 'Demander un Audit')}
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
                  <Phone className="mr-2" />
                  {t('cloudReseau.ctaCall', 'Appeler Maintenant')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudReseau;
