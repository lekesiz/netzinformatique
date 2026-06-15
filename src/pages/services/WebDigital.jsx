import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Search, ShoppingCart, Smartphone, Palette, Code, TrendingUp, Users, CheckCircle, Phone, Zap, Eye, BarChart, Briefcase, Star, Clock, Server, FileText, Database } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const WebDigital = () => {
  const { t } = useTranslation();
  const pageTitle = t('webDigital.pageTitle', 'Création Site Web & Marketing Digital');
  const pageDescription = t('webDigital.pageDescription', 'Site vitrine, e-commerce, application web sur mesure. Référencement SEO, Google Ads, réseaux sociaux. Augmentez votre visibilité et vos ventes en ligne.');

  const breadcrumbs = [
    { name: t('webDigital.breadcrumbHome', 'Accueil'), url: '/' },
    { name: t('webDigital.breadcrumbServices', 'Services'), url: '/services' },
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
    { icon: Globe, title: t('webDigital.feature1Title', 'Site Vitrine'), description: t('webDigital.feature1Desc', 'Présentation professionnelle de votre activité') },
    { icon: ShoppingCart, title: t('webDigital.feature2Title', 'E-commerce'), description: t('webDigital.feature2Desc', 'Boutique en ligne performante et sécurisée') },
    { icon: Code, title: t('webDigital.feature3Title', 'Application Web'), description: t('webDigital.feature3Desc', 'Développement sur mesure (React, Node.js)') },
    { icon: Smartphone, title: t('webDigital.feature4Title', 'Responsive'), description: t('webDigital.feature4Desc', 'Adapté mobile, tablette, desktop') },
    { icon: Search, title: t('webDigital.feature5Title', 'SEO'), description: t('webDigital.feature5Desc', 'Référencement naturel Google') },
    { icon: TrendingUp, title: t('webDigital.feature6Title', 'Marketing Digital'), description: t('webDigital.feature6Desc', 'Google Ads, réseaux sociaux, emailing') }
  ];

  const webPackages = [
    {
      name: t('webDigital.pkg1Name', 'Site Vitrine'),
      icon: Globe,
      target: t('webDigital.pkg1Target', 'TPE, artisans, professions libérales'),
      pages: t('webDigital.pkg1Pages', '5-10 pages'),
      features: [
        t('webDigital.pkg1Feat1', 'Design moderne et responsive'),
        t('webDigital.pkg1Feat2', 'Formulaire de contact'),
        t('webDigital.pkg1Feat3', 'Google Maps intégré'),
        t('webDigital.pkg1Feat4', 'Optimisation SEO de base'),
        t('webDigital.pkg1Feat5', 'Hébergement 1 an inclus'),
        t('webDigital.pkg1Feat6', 'Formation à la gestion'),
        t('webDigital.pkg1Feat7', 'Support 3 mois')
      ],
      price: '990€',
      monthly: t('webDigital.pkg1Monthly', 'ou 79€/mois (maintenance incluse)'),
      deliveryTime: t('webDigital.pkg1Delivery', '2-3 semaines')
    },
    {
      name: t('webDigital.pkg2Name', 'Site Business'),
      icon: Briefcase,
      target: t('webDigital.pkg2Target', 'PME, cabinets, agences'),
      pages: t('webDigital.pkg2Pages', '10-20 pages'),
      features: [
        t('webDigital.pkg2Feat1', 'Design premium sur mesure'),
        t('webDigital.pkg2Feat2', 'Blog intégré'),
        t('webDigital.pkg2Feat3', 'Espace client sécurisé'),
        t('webDigital.pkg2Feat4', 'Multilingue (2-3 langues)'),
        t('webDigital.pkg2Feat5', 'SEO avancé'),
        t('webDigital.pkg2Feat6', 'Analytics et reporting'),
        t('webDigital.pkg2Feat7', 'Support 6 mois')
      ],
      price: '1990€',
      monthly: t('webDigital.pkg2Monthly', 'ou 149€/mois (maintenance incluse)'),
      deliveryTime: t('webDigital.pkg2Delivery', '4-6 semaines'),
      popular: true
    },
    {
      name: t('webDigital.pkg3Name', 'E-commerce'),
      icon: ShoppingCart,
      target: t('webDigital.pkg3Target', 'Boutiques en ligne'),
      pages: t('webDigital.pkg3Pages', 'Illimité'),
      features: [
        t('webDigital.pkg3Feat1', 'WooCommerce ou PrestaShop'),
        t('webDigital.pkg3Feat2', 'Paiement sécurisé (Stripe, PayPal)'),
        t('webDigital.pkg3Feat3', 'Gestion stocks et commandes'),
        t('webDigital.pkg3Feat4', 'Facturation automatique'),
        t('webDigital.pkg3Feat5', 'SEO e-commerce'),
        t('webDigital.pkg3Feat6', 'Formation vendeur'),
        t('webDigital.pkg3Feat7', 'Support 12 mois')
      ],
      price: 'Sur devis',
      monthly: t('webDigital.pkg3Monthly', 'À partir de 2990€'),
      deliveryTime: t('webDigital.pkg3Delivery', '6-10 semaines')
    }
  ];

  const digitalServices = [
    {
      title: t('webDigital.digital1Title', 'Référencement SEO'),
      description: t('webDigital.digital1Desc', 'Positionnement dans les premiers résultats Google pour attirer du trafic qualifié.'),
      includes: [t('webDigital.digital1Inc1', 'Audit SEO complet'), t('webDigital.digital1Inc2', 'Optimisation technique'), t('webDigital.digital1Inc3', 'Contenu optimisé'), t('webDigital.digital1Inc4', 'Netlinking'), t('webDigital.digital1Inc5', 'Suivi mensuel')],
      price: t('webDigital.digital1Price', 'À partir de 500€/mois')
    },
    {
      title: t('webDigital.digital2Title', 'Google Ads (SEA)'),
      description: t('webDigital.digital2Desc', 'Campagnes publicitaires ciblées pour générer des leads et ventes rapidement.'),
      includes: [t('webDigital.digital2Inc1', 'Stratégie de campagne'), t('webDigital.digital2Inc2', 'Création annonces'), t('webDigital.digital2Inc3', 'Gestion quotidienne'), t('webDigital.digital2Inc4', 'Optimisation ROI'), t('webDigital.digital2Inc5', 'Reporting hebdo')],
      price: t('webDigital.digital2Price', 'À partir de 300€/mois + budget pub')
    },
    {
      title: t('webDigital.digital3Title', 'Réseaux Sociaux'),
      description: t('webDigital.digital3Desc', 'Gestion de vos pages Facebook, Instagram, LinkedIn pour développer votre communauté.'),
      includes: [t('webDigital.digital3Inc1', 'Stratégie éditoriale'), t('webDigital.digital3Inc2', 'Création de contenu'), t('webDigital.digital3Inc3', 'Publication régulière'), t('webDigital.digital3Inc4', 'Community management'), t('webDigital.digital3Inc5', 'Statistiques')],
      price: t('webDigital.digital3Price', 'À partir de 400€/mois')
    },
    {
      title: t('webDigital.digital4Title', 'Emailing'),
      description: t('webDigital.digital4Desc', 'Campagnes d\'emailing pour fidéliser clients et prospects.'),
      includes: [t('webDigital.digital4Inc1', 'Design template'), t('webDigital.digital4Inc2', 'Rédaction contenu'), t('webDigital.digital4Inc3', 'Envoi et suivi'), t('webDigital.digital4Inc4', 'A/B testing'), t('webDigital.digital4Inc5', 'Analytics')],
      price: t('webDigital.digital4Price', 'À partir de 200€/campagne')
    }
  ];

  const technologies = [
    { name: 'React', category: t('webDigital.techCatFrontend', 'Frontend'), icon: Code },
    { name: 'Node.js', category: t('webDigital.techCatBackend', 'Backend'), icon: Server },
    { name: 'WordPress', category: t('webDigital.techCatCMS', 'CMS'), icon: FileText },
    { name: 'WooCommerce', category: t('webDigital.techCatEcommerce', 'E-commerce'), icon: ShoppingCart },
    { name: 'Tailwind CSS', category: t('webDigital.techCatDesign', 'Design'), icon: Palette },
    { name: 'PostgreSQL', category: t('webDigital.techCatDatabase', 'Database'), icon: Database }
  ];

  const process = [
    { step: '1', title: t('webDigital.process1Title', 'Cahier des Charges'), description: t('webDigital.process1Desc', 'Définition de vos besoins et objectifs') },
    { step: '2', title: t('webDigital.process2Title', 'Maquette'), description: t('webDigital.process2Desc', 'Design et validation de l\'interface') },
    { step: '3', title: t('webDigital.process3Title', 'Développement'), description: t('webDigital.process3Desc', 'Codage et intégration des fonctionnalités') },
    { step: '4', title: t('webDigital.process4Title', 'Tests'), description: t('webDigital.process4Desc', 'Vérification sur tous les navigateurs et appareils') },
    { step: '5', title: t('webDigital.process5Title', 'Mise en Ligne'), description: t('webDigital.process5Desc', 'Déploiement et configuration serveur') },
    { step: '6', title: t('webDigital.process6Title', 'Formation'), description: t('webDigital.process6Desc', 'Accompagnement à la gestion du site') }
  ];

  const stats = [
    { value: '150+', label: t('webDigital.stat1Label', 'Sites créés') },
    { value: '98%', label: t('webDigital.stat2Label', 'Clients satisfaits') },
    { value: '<3s', label: t('webDigital.stat3Label', 'Temps de chargement') },
    { value: '100%', label: t('webDigital.stat4Label', 'Mobile-friendly') }
  ];

  const seoTips = [
    {
      title: t('webDigital.seoTip1Title', 'Contenu de Qualité'),
      description: t('webDigital.seoTip1Desc', 'Articles de blog réguliers, mots-clés pertinents, contenu unique')
    },
    {
      title: t('webDigital.seoTip2Title', 'Technique'),
      description: t('webDigital.seoTip2Desc', 'Vitesse de chargement, HTTPS, sitemap XML, balises meta')
    },
    {
      title: t('webDigital.seoTip3Title', 'Popularité'),
      description: t('webDigital.seoTip3Desc', 'Backlinks de qualité, partages sociaux, avis clients')
    },
    {
      title: t('webDigital.seoTip4Title', 'Expérience Utilisateur'),
      description: t('webDigital.seoTip4Desc', 'Navigation intuitive, design responsive, temps de visite')
    }
  ];

  const caseStudies = [
    {
      client: t('webDigital.case1Client', 'Restaurant Gastronomique'),
      challenge: t('webDigital.case1Challenge', 'Augmenter les réservations en ligne'),
      solution: t('webDigital.case1Solution', 'Site vitrine + SEO local + Google Ads'),
      results: t('webDigital.case1Results', '+250% de réservations en 6 mois, 1ère page Google "restaurant Haguenau"')
    },
    {
      client: t('webDigital.case2Client', 'Boutique Mode'),
      challenge: t('webDigital.case2Challenge', 'Lancer la vente en ligne'),
      solution: t('webDigital.case2Solution', 'E-commerce WooCommerce + SEO + Instagram Ads'),
      results: t('webDigital.case2Results', '15000€ CA/mois après 3 mois, 500+ commandes')
    }
  ];

  const faq = [
    {
      question: t('webDigital.faqQ1', 'Combien de temps pour créer un site web ?'),
      answer: t('webDigital.faqA1', 'Site vitrine : 2-3 semaines. Site business : 4-6 semaines. E-commerce : 6-10 semaines. Délai dépend de la complexité, du nombre de pages, et de la rapidité de vos retours sur les maquettes et contenus.')
    },
    {
      question: t('webDigital.faqQ2', 'Puis-je modifier mon site moi-même après la livraison ?'),
      answer: t('webDigital.faqA2', 'OUI ! Nous créons des sites avec CMS (WordPress, etc.) faciles à gérer. Formation incluse pour que vous puissiez modifier textes, images, ajouter des pages. Pour des modifications complexes, nous restons disponibles.')
    },
    {
      question: t('webDigital.faqQ3', 'Le référencement SEO est-il inclus ?'),
      answer: t('webDigital.faqA3', 'SEO de base OUI (structure, balises, sitemap, vitesse). Pour un référencement avancé (contenu optimisé, netlinking, suivi mensuel), nous proposons des forfaits SEO à partir de 500€/mois.')
    },
    {
      question: t('webDigital.faqQ4', 'Proposez-vous l\'hébergement et la maintenance ?'),
      answer: t('webDigital.faqA4', 'OUI. Hébergement inclus 1ère année. Ensuite : 10-30€/mois selon taille du site. Maintenance (mises à jour, sauvegardes, support) : 79-149€/mois selon formule. Ou achat unique sans abonnement.')
    },
    {
      question: t('webDigital.faqQ5', 'Combien coûte une campagne Google Ads ?'),
      answer: t('webDigital.faqA5', 'Gestion : 300€/mois. Budget publicitaire : à définir selon vos objectifs (minimum 300€/mois recommandé). Exemple : 300€ gestion + 500€ pub = 800€/mois. ROI généralement positif dès le 2ème mois.')
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/web-digital" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-purple-50 to-card">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-purple-100 rounded-full px-6 py-2 mb-4">
              <span className="text-purple-600 font-semibold flex items-center gap-2">
                <Globe size={20} />
                {t('webDigital.heroBadge', 'Web & Digital')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('webDigital.heroTitlePrefix', 'Création')} <span className="text-purple-600">{t('webDigital.heroTitleHl1', 'Site Web')}</span> & <span className="text-blue-600">{t('webDigital.heroTitleHl2', 'Marketing Digital')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('webDigital.heroSubtitle', 'Augmentez votre visibilité et vos ventes en ligne. Site vitrine, e-commerce, SEO, Google Ads. Solutions clé en main.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="gradient-purple text-white">
                  {t('webDigital.heroCtaQuote', 'Demander un Devis Gratuit')} <ArrowRight className="ml-2" />
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
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
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
                {t('webDigital.packagesTitle', 'Nos Formules de Création de Site Web')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('webDigital.packagesSubtitle', 'Choisissez la solution adaptée à votre projet')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {webPackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-2xl shadow-xl overflow-hidden ${
                    pkg.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-purple-600 text-white text-center py-2 font-semibold flex items-center justify-center gap-2">
                      <Star size={18} className="fill-current" /> {t('webDigital.popularBadge', 'Le Plus Populaire')}
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-center mb-4">
                      <pkg.icon size={48} className="text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center">{pkg.name}</h3>
                    <div className="text-sm text-muted-foreground text-center mb-4">{pkg.target}</div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-purple-600 mb-1">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">{pkg.monthly}</div>
                      <div className="text-xs text-green-600 mt-2 flex items-center justify-center gap-1">
                        <Clock size={14} /> {pkg.deliveryTime}
                      </div>
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
                        {t('webDigital.pkgCtaQuote', 'Demander un Devis')}
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
                {t('webDigital.digitalTitle', 'Services Marketing Digital')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('webDigital.digitalSubtitle', 'Boostez votre visibilité et générez des leads')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {digitalServices.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="mb-4">
                    <div className="font-semibold mb-2 text-sm">{t('webDigital.includesLabel', 'Inclus:')}</div>
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
                      <Button size="sm" variant="outline">{t('webDigital.btnQuoteShort', 'Devis')}</Button>
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
                {t('webDigital.seoTitle', 'Les 4 Piliers du Référencement SEO')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoTips.map((tip, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center shadow-lg">
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
                {t('webDigital.techTitle', 'Technologies Utilisées')}
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-card rounded-lg px-6 py-3 shadow-md flex items-center gap-3">
                  <tech.icon size={28} className="text-purple-600" />
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
                {t('webDigital.processTitle', 'Notre Processus de Création')}
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
                {t('webDigital.caseTitle', 'Cas Clients')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <div className="text-sm text-purple-600 font-semibold mb-2">{study.client}</div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">{t('webDigital.caseChallengeLabel', 'Défi:')}</div>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold mb-1">{t('webDigital.caseSolutionLabel', 'Solution:')}</div>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <div className="font-bold mb-1">{t('webDigital.caseResultsLabel', 'Résultats:')}</div>
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
                {t('webDigital.faqTitle', 'Questions Fréquentes')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg mb-3 px-6 border shadow-sm">
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
              {t('webDigital.ctaTitle', 'Prêt à Lancer Votre Projet Web ?')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('webDigital.ctaSubtitle', 'Devis gratuit • Design moderne • Livraison rapide • Support inclus')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  {t('webDigital.ctaQuote', 'Demander un Devis')}
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
