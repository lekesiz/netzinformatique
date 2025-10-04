import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Wifi, Server, Shield, Zap, Users, CheckCircle, Phone, Database, Network, HardDrive } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CloudReseau = () => {
  const { t } = useTranslation();

  const pageTitle = 'Solutions Cloud & Infrastructure Réseau';
  const pageDescription = 'Modernisez votre infrastructure IT avec nos solutions Cloud et réseau. Migration Microsoft 365, serveurs, WiFi professionnel. Fiabilité et performance garanties.';

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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
    { icon: Cloud, title: 'Migration Cloud', description: 'Passage vers Microsoft 365, Google Workspace ou solutions privées' },
    { icon: Server, title: 'Serveurs', description: 'Installation et gestion de serveurs physiques ou virtuels (Windows Server, Linux)' },
    { icon: Wifi, title: 'Réseau WiFi', description: 'Déploiement de réseaux WiFi professionnels performants et sécurisés' },
    { icon: Network, title: 'Infrastructure Réseau', description: 'Câblage, switchs, routeurs, firewall pour une connectivité optimale' },
    { icon: Database, title: 'Stockage NAS', description: 'Solutions de stockage en réseau pour sauvegardes et partage de fichiers' },
    { icon: Shield, title: 'Sécurité Réseau', description: 'Firewall, VPN, segmentation réseau pour protéger vos données' }
  ];

  const cloudSolutions = [
    {
      name: 'Microsoft 365',
      icon: '☁️',
      description: 'Suite bureautique complète dans le cloud',
      features: [
        'Office (Word, Excel, PowerPoint, Outlook)',
        'Teams (visioconférence, chat)',
        'OneDrive (stockage 1TB/utilisateur)',
        'SharePoint (intranet collaboratif)',
        'Exchange Online (emails professionnels)',
        'Sécurité avancée (antivirus, DLP)'
      ],
      pricing: 'À partir de 10€/mois/utilisateur'
    },
    {
      name: 'Google Workspace',
      icon: '🌐',
      description: 'Productivité et collaboration Google',
      features: [
        'Gmail professionnel',
        'Google Drive (stockage cloud)',
        'Google Meet (visioconférence)',
        'Docs, Sheets, Slides',
        'Google Calendar',
        'Administration centralisée'
      ],
      pricing: 'À partir de 5€/mois/utilisateur'
    },
    {
      name: 'Cloud Privé',
      icon: '🔒',
      description: 'Solution cloud hébergée dans vos locaux',
      features: [
        'Contrôle total de vos données',
        'Conformité RGPD garantie',
        'Nextcloud ou ownCloud',
        'Pas d\'abonnement mensuel',
        'Performances optimales',
        'Indépendance vis-à-vis des GAFAM'
      ],
      pricing: 'À partir de 2000€ (investissement unique)'
    }
  ];

  const networkServices = [
    {
      title: 'Audit Réseau',
      description: 'Analyse complète de votre infrastructure actuelle : performance, sécurité, points faibles. Rapport détaillé avec recommandations.',
      price: 'À partir de 500€'
    },
    {
      title: 'Installation WiFi Pro',
      description: 'Déploiement de bornes WiFi professionnelles (Ubiquiti, Cisco) pour une couverture optimale. Gestion centralisée, authentification sécurisée.',
      price: 'À partir de 1500€'
    },
    {
      title: 'Câblage Réseau',
      description: 'Installation de câbles Cat6/Cat6a, baies de brassage, prises RJ45. Certification des liens. Respect des normes.',
      price: 'Sur devis'
    },
    {
      title: 'Serveur Windows/Linux',
      description: 'Installation et configuration de serveurs : Active Directory, partage de fichiers, serveur d\'impression, base de données.',
      price: 'À partir de 1200€'
    },
    {
      title: 'Firewall & VPN',
      description: 'Mise en place de pare-feu professionnels (pfSense, Fortinet) et VPN pour accès distant sécurisé.',
      price: 'À partir de 800€'
    },
    {
      title: 'NAS & Sauvegarde',
      description: 'Installation de NAS Synology ou QNAP pour stockage centralisé et sauvegardes automatiques. RAID pour sécurité des données.',
      price: 'À partir de 1000€ + matériel'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Performance',
      description: 'Réseau rapide et stable pour une productivité maximale'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Protection contre les cyberattaques et pertes de données'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail d\'équipe facilité avec outils cloud modernes'
    },
    {
      icon: Cloud,
      title: 'Accessibilité',
      description: 'Accès à vos données depuis n\'importe où, n\'importe quand'
    }
  ];

  const process = [
    { step: '1', title: 'Audit', description: 'Analyse de votre infrastructure actuelle' },
    { step: '2', title: 'Conception', description: 'Proposition d\'architecture adaptée' },
    { step: '3', title: 'Devis', description: 'Chiffrage détaillé du projet' },
    { step: '4', title: 'Installation', description: 'Déploiement de la solution' },
    { step: '5', title: 'Migration', description: 'Transfert des données sans interruption' },
    { step: '6', title: 'Formation', description: 'Accompagnement de vos équipes' }
  ];

  const faq = [
    {
      question: 'Pourquoi migrer vers le Cloud ?',
      answer: 'Le Cloud offre de nombreux avantages : accessibilité depuis n\'importe où, sauvegardes automatiques, mises à jour incluses, coûts prévisibles, scalabilité, collaboration facilitée. Plus besoin de gérer des serveurs sur site.'
    },
    {
      question: 'Microsoft 365 ou Google Workspace ?',
      answer: 'Microsoft 365 est recommandé si vous utilisez déjà Office et avez besoin de fonctionnalités avancées (Teams, SharePoint). Google Workspace est plus simple et économique pour les petites structures. Nous vous conseillons selon vos besoins.'
    },
    {
      question: 'Mes données sont-elles en sécurité dans le Cloud ?',
      answer: 'Oui, les solutions cloud professionnelles (Microsoft, Google) offrent une sécurité de niveau bancaire : chiffrement, authentification multi-facteurs, sauvegardes géo-redondantes, conformité RGPD. Souvent plus sûr qu\'un serveur local.'
    },
    {
      question: 'Combien coûte une infrastructure réseau complète ?',
      answer: 'Pour une PME de 10-20 postes : comptez 5000-15000€ pour un réseau complet (serveur, WiFi pro, câblage, firewall, NAS). Nous proposons des solutions évolutives adaptées à votre budget.'
    },
    {
      question: 'Proposez-vous la maintenance de l\'infrastructure ?',
      answer: 'Oui, nous proposons des contrats de maintenance incluant : surveillance 24/7, mises à jour, sauvegardes, support prioritaire. À partir de 200€/mois selon la taille de l\'infrastructure.'
    }
  ];

  const caseStudies = [
    {
      company: 'Cabinet Comptable (15 postes)',
      challenge: 'Serveur vieillissant, pas de sauvegarde, accès distant impossible',
      solution: 'Migration vers Microsoft 365 + NAS Synology pour archives',
      results: 'Économie de 40% sur 3 ans, télétravail possible, sécurité renforcée'
    },
    {
      company: 'PME Industrielle (50 postes)',
      challenge: 'WiFi instable, câblage obsolète, pas de segmentation réseau',
      solution: 'Nouveau câblage Cat6, WiFi Ubiquiti, firewall pfSense, VLANs',
      results: 'Performance x3, sécurité optimale, couverture WiFi 100%'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/cloud-reseau" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-4">
              <span className="text-blue-600 font-semibold flex items-center gap-2">
                <Cloud size={20} />
                Cloud & Réseau
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Solutions <span className="text-blue-600">Cloud</span> & Infrastructure <span className="text-blue-600">Réseau</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Modernisez votre infrastructure IT. Migration cloud, serveurs, WiFi professionnel. Performance, sécurité et fiabilité garanties.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="gradient-blue text-white">
                  Demander un Audit Gratuit <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline">
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
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Solutions */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solutions Cloud Professionnelles
              </h2>
              <p className="text-xl text-muted-foreground">
                Choisissez la solution adaptée à vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cloudSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-5xl mb-4 text-center">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{solution.name}</h3>
                  <p className="text-muted-foreground text-center mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center font-bold text-blue-600 mb-4">{solution.pricing}</div>
                  <Link to="/contact">
                    <Button className="w-full gradient-blue text-white">
                      En Savoir Plus
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
                Services Infrastructure Réseau
              </h2>
              <p className="text-xl text-muted-foreground">
                Conception, installation et maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {networkServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-3 text-blue-600">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-600">{service.price}</span>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">Devis</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Les Avantages d'une Infrastructure Moderne
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon size={32} className="text-blue-600" />
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
                Notre Processus de Déploiement
              </h2>
              <p className="text-xl text-muted-foreground">
                Méthodologie éprouvée pour une migration sans stress
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cas Clients
              </h2>
              <p className="text-xl text-muted-foreground">
                Découvrez comment nous avons transformé leur IT
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.company}</div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">Problématique:</div>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">Solution:</div>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Résultats:</div>
                    <p className="text-sm text-green-600 font-semibold">{study.results}</p>
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
                Questions Fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-lg mb-3 px-6 border shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-blue-600">
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
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Moderniser Votre Infrastructure IT ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Audit gratuit • Devis détaillé • Migration sans interruption • Support inclus
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Demander un Audit
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" />
                  Appeler Maintenant
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
