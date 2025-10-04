import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Search, ShoppingCart, Smartphone, Palette, Code, TrendingUp, Users, CheckCircle, Phone, Zap, Eye, BarChart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const WebDigital = () => {
  const { t } = useTranslation();

  const pageTitle = 'Création Site Web & Marketing Digital';
  const pageDescription = 'Site vitrine, e-commerce, application web sur mesure. Référencement SEO, Google Ads, réseaux sociaux. Augmentez votre visibilité et vos ventes en ligne.';

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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

  const features = [
    { icon: Globe, title: 'Site Vitrine', description: 'Présentation professionnelle de votre activité' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Boutique en ligne performante et sécurisée' },
    { icon: Code, title: 'Application Web', description: 'Développement sur mesure (React, Node.js)' },
    { icon: Smartphone, title: 'Responsive', description: 'Adapté mobile, tablette, desktop' },
    { icon: Search, title: 'SEO', description: 'Référencement naturel Google' },
    { icon: TrendingUp, title: 'Marketing Digital', description: 'Google Ads, réseaux sociaux, emailing' }
  ];

  const webPackages = [
    {
      name: 'Site Vitrine',
      icon: '🌐',
      target: 'TPE, artisans, professions libérales',
      pages: '5-10 pages',
      features: [
        'Design moderne et responsive',
        'Formulaire de contact',
        'Google Maps intégré',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        'Formation à la gestion',
        'Support 3 mois'
      ],
      price: '990€',
      monthly: 'ou 79€/mois (maintenance incluse)',
      deliveryTime: '2-3 semaines'
    },
    {
      name: 'Site Business',
      icon: '💼',
      target: 'PME, cabinets, agences',
      pages: '10-20 pages',
      features: [
        'Design premium sur mesure',
        'Blog intégré',
        'Espace client sécurisé',
        'Multilingue (2-3 langues)',
        'SEO avancé',
        'Analytics et reporting',
        'Support 6 mois'
      ],
      price: '1990€',
      monthly: 'ou 149€/mois (maintenance incluse)',
      deliveryTime: '4-6 semaines',
      popular: true
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      target: 'Boutiques en ligne',
      pages: 'Illimité',
      features: [
        'WooCommerce ou PrestaShop',
        'Paiement sécurisé (Stripe, PayPal)',
        'Gestion stocks et commandes',
        'Facturation automatique',
        'SEO e-commerce',
        'Formation vendeur',
        'Support 12 mois'
      ],
      price: 'Sur devis',
      monthly: 'À partir de 2990€',
      deliveryTime: '6-10 semaines'
    }
  ];

  const digitalServices = [
    {
      title: 'Référencement SEO',
      description: 'Positionnement dans les premiers résultats Google pour attirer du trafic qualifié.',
      includes: ['Audit SEO complet', 'Optimisation technique', 'Contenu optimisé', 'Netlinking', 'Suivi mensuel'],
      price: 'À partir de 500€/mois'
    },
    {
      title: 'Google Ads (SEA)',
      description: 'Campagnes publicitaires ciblées pour générer des leads et ventes rapidement.',
      includes: ['Stratégie de campagne', 'Création annonces', 'Gestion quotidienne', 'Optimisation ROI', 'Reporting hebdo'],
      price: 'À partir de 300€/mois + budget pub'
    },
    {
      title: 'Réseaux Sociaux',
      description: 'Gestion de vos pages Facebook, Instagram, LinkedIn pour développer votre communauté.',
      includes: ['Stratégie éditoriale', 'Création de contenu', 'Publication régulière', 'Community management', 'Statistiques'],
      price: 'À partir de 400€/mois'
    },
    {
      title: 'Emailing',
      description: 'Campagnes d\'emailing pour fidéliser clients et prospects.',
      includes: ['Design template', 'Rédaction contenu', 'Envoi et suivi', 'A/B testing', 'Analytics'],
      price: 'À partir de 200€/campagne'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'WordPress', category: 'CMS', icon: '📝' },
    { name: 'WooCommerce', category: 'E-commerce', icon: '🛒' },
    { name: 'Tailwind CSS', category: 'Design', icon: '🎨' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' }
  ];

  const process = [
    { step: '1', title: 'Cahier des Charges', description: 'Définition de vos besoins et objectifs' },
    { step: '2', title: 'Maquette', description: 'Design et validation de l\'interface' },
    { step: '3', title: 'Développement', description: 'Codage et intégration des fonctionnalités' },
    { step: '4', title: 'Tests', description: 'Vérification sur tous les navigateurs et appareils' },
    { step: '5', title: 'Mise en Ligne', description: 'Déploiement et configuration serveur' },
    { step: '6', title: 'Formation', description: 'Accompagnement à la gestion du site' }
  ];

  const stats = [
    { value: '150+', label: 'Sites créés' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '<3s', label: 'Temps de chargement' },
    { value: '100%', label: 'Mobile-friendly' }
  ];

  const seoTips = [
    {
      title: 'Contenu de Qualité',
      description: 'Articles de blog réguliers, mots-clés pertinents, contenu unique'
    },
    {
      title: 'Technique',
      description: 'Vitesse de chargement, HTTPS, sitemap XML, balises meta'
    },
    {
      title: 'Popularité',
      description: 'Backlinks de qualité, partages sociaux, avis clients'
    },
    {
      title: 'Expérience Utilisateur',
      description: 'Navigation intuitive, design responsive, temps de visite'
    }
  ];

  const caseStudies = [
    {
      client: 'Restaurant Gastronomique',
      challenge: 'Augmenter les réservations en ligne',
      solution: 'Site vitrine + SEO local + Google Ads',
      results: '+250% de réservations en 6 mois, 1ère page Google "restaurant Haguenau"'
    },
    {
      client: 'Boutique Mode',
      challenge: 'Lancer la vente en ligne',
      solution: 'E-commerce WooCommerce + SEO + Instagram Ads',
      results: '15000€ CA/mois après 3 mois, 500+ commandes'
    }
  ];

  const faq = [
    {
      question: 'Combien de temps pour créer un site web ?',
      answer: 'Site vitrine : 2-3 semaines. Site business : 4-6 semaines. E-commerce : 6-10 semaines. Délai dépend de la complexité, du nombre de pages, et de la rapidité de vos retours sur les maquettes et contenus.'
    },
    {
      question: 'Puis-je modifier mon site moi-même après la livraison ?',
      answer: 'OUI ! Nous créons des sites avec CMS (WordPress, etc.) faciles à gérer. Formation incluse pour que vous puissiez modifier textes, images, ajouter des pages. Pour des modifications complexes, nous restons disponibles.'
    },
    {
      question: 'Le référencement SEO est-il inclus ?',
      answer: 'SEO de base OUI (structure, balises, sitemap, vitesse). Pour un référencement avancé (contenu optimisé, netlinking, suivi mensuel), nous proposons des forfaits SEO à partir de 500€/mois.'
    },
    {
      question: 'Proposez-vous l\'hébergement et la maintenance ?',
      answer: 'OUI. Hébergement inclus 1ère année. Ensuite : 10-30€/mois selon taille du site. Maintenance (mises à jour, sauvegardes, support) : 79-149€/mois selon formule. Ou achat unique sans abonnement.'
    },
    {
      question: 'Combien coûte une campagne Google Ads ?',
      answer: 'Gestion : 300€/mois. Budget publicitaire : à définir selon vos objectifs (minimum 300€/mois recommandé). Exemple : 300€ gestion + 500€ pub = 800€/mois. ROI généralement positif dès le 2ème mois.'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/web-digital" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-purple-100 rounded-full px-6 py-2 mb-4">
              <span className="text-purple-600 font-semibold flex items-center gap-2">
                <Globe size={20} />
                Web & Digital
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Création <span className="text-purple-600">Site Web</span> & <span className="text-blue-600">Marketing Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Augmentez votre visibilité et vos ventes en ligne. Site vitrine, e-commerce, SEO, Google Ads. Solutions clé en main.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="gradient-purple text-white">
                  Demander un Devis Gratuit <ArrowRight className="ml-2" />
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

        {/* Stats */}
        <section className="py-12 bg-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Web Packages */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Formules de Création de Site Web
              </h2>
              <p className="text-xl text-muted-foreground">
                Choisissez la solution adaptée à votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {webPackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                    pkg.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                      ⭐ Le Plus Populaire
                    </div>
                  )}
                  <div className="p-8">
                    <div className="text-5xl mb-4 text-center">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-center">{pkg.name}</h3>
                    <div className="text-sm text-muted-foreground text-center mb-4">{pkg.target}</div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-purple-600 mb-1">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">{pkg.monthly}</div>
                      <div className="text-xs text-green-600 mt-2">⏱️ {pkg.deliveryTime}</div>
                    </div>
                    <div className="mb-4">
                      <div className="font-semibold mb-2 text-sm">{pkg.pages}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="w-full gradient-purple text-white">
                        Demander un Devis
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Marketing Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Services Marketing Digital
              </h2>
              <p className="text-xl text-muted-foreground">
                Boostez votre visibilité et générez des leads
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {digitalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="mb-4">
                    <div className="font-semibold mb-2 text-sm">Inclus:</div>
                    <ul className="space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-600">{service.price}</span>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">Devis</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Tips */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Les 4 Piliers du Référencement SEO
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">{index + 1}</div>
                  <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologies Utilisées
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg px-6 py-3 shadow-md flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <div className="font-bold">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Notre Processus de Création
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cas Clients
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-sm text-purple-600 font-semibold mb-2">{study.client}</div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">Défi:</div>
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
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions Fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-lg mb-3 px-6 border shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-purple-600">
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
        <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Lancer Votre Projet Web ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Devis gratuit • Design moderne • Livraison rapide • Support inclus
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Demander un Devis
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" />
                  03 67 31 02 01
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDigital;
