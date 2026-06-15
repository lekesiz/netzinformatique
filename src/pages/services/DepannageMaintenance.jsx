import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Phone, Wrench, Clock, Shield, TrendingUp, AlertCircle, Laptop, Star, Lightbulb } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    { icon: Wrench, text: t('depannage.feature1', 'Diagnostic complet et rapide') },
    { icon: Shield, text: t('depannage.feature2', 'Réparation matérielle et logicielle') },
    { icon: AlertCircle, text: t('depannage.feature3', 'Éradication de virus et malwares') },
    { icon: TrendingUp, text: t('depannage.feature4', 'Optimisation des performances') },
    { icon: Clock, text: t('depannage.feature5', 'Maintenance préventive') },
    { icon: Laptop, text: t('depannage.feature6', 'Intervention sur site ou en atelier') },
  ];

  const commonProblems = [
    {
      title: t('depannage.prob1Title', 'Ordinateur Lent'),
      description: t('depannage.prob1Desc', 'Votre PC met plusieurs minutes à démarrer ? Les applications se figent ? Nous identifions la cause (disque saturé, RAM insuffisante, virus) et optimisons les performances.'),
      price: t('depannage.prob1Price', 'À partir de 60€')
    },
    {
      title: t('depannage.prob2Title', 'Écran Bleu / Noir'),
      description: t('depannage.prob2Desc', 'Écran bleu de la mort (BSOD) ou écran noir au démarrage ? Problème matériel ou logiciel, nous diagnostiquons et réparons rapidement.'),
      price: t('depannage.prob2Price', 'Diagnostic gratuit')
    },
    {
      title: t('depannage.prob3Title', 'Virus & Malwares'),
      description: t('depannage.prob3Desc', 'Publicités intempestives, ransomware, spyware ? Nous éradiquons toutes les menaces et sécurisons votre système pour éviter les récidives.'),
      price: t('depannage.prob3Price', 'À partir de 80€')
    },
    {
      title: t('depannage.prob4Title', 'Panne Matérielle'),
      description: t('depannage.prob4Desc', 'Disque dur défaillant, RAM défectueuse, alimentation HS ? Nous remplaçons les composants défectueux avec des pièces de qualité garanties.'),
      price: t('depannage.prob4Price', 'Devis gratuit')
    },
    {
      title: t('depannage.prob5Title', 'Récupération de Données'),
      description: t('depannage.prob5Desc', 'Données perdues suite à une suppression accidentelle ou une panne ? Nous récupérons vos fichiers précieux (photos, documents, emails).'),
      price: t('depannage.prob5Price', 'À partir de 150€')
    },
    {
      title: t('depannage.prob6Title', 'Problèmes Réseau'),
      description: t('depannage.prob6Desc', 'Pas de connexion Internet, WiFi instable, imprimante non détectée ? Nous résolvons tous vos problèmes de connectivité.'),
      price: t('depannage.prob6Price', 'À partir de 50€')
    }
  ];

  const process = [
    { step: '1', title: t('depannage.proc1Title', 'Contact'), description: t('depannage.proc1Desc', 'Appelez-nous ou remplissez le formulaire') },
    { step: '2', title: t('depannage.proc2Title', 'Diagnostic'), description: t('depannage.proc2Desc', 'Analyse complète gratuite de votre problème') },
    { step: '3', title: t('depannage.proc3Title', 'Devis'), description: t('depannage.proc3Desc', 'Proposition détaillée avant intervention') },
    { step: '4', title: t('depannage.proc4Title', 'Réparation'), description: t('depannage.proc4Desc', 'Intervention rapide sous 24-48h') },
    { step: '5', title: t('depannage.proc5Title', 'Test'), description: t('depannage.proc5Desc', 'Vérification complète du bon fonctionnement') },
    { step: '6', title: t('depannage.proc6Title', 'Garantie'), description: t('depannage.proc6Desc', '3 mois de garantie pièces et main d\'œuvre') }
  ];

  const pricing = [
    { service: t('depannage.price1Service', 'Diagnostic complet'), price: t('depannage.price1Value', 'Gratuit') },
    { service: t('depannage.price2Service', 'Nettoyage et optimisation'), price: '60€' },
    { service: t('depannage.price3Service', 'Suppression virus/malware'), price: '80€' },
    { service: t('depannage.price4Service', 'Installation Windows'), price: '100€' },
    { service: t('depannage.price5Service', 'Upgrade SSD (avec clonage)'), price: t('depannage.price5Value', '150€ + pièce') },
    { service: t('depannage.price6Service', 'Upgrade RAM'), price: t('depannage.price6Value', '50€ + pièce') },
    { service: t('depannage.price7Service', 'Réparation matérielle'), price: t('depannage.price7Value', 'Sur devis') },
    { service: t('depannage.price8Service', 'Intervention à domicile'), price: '+30€' }
  ];

  const maintenancePackages = [
    {
      name: t('depannage.pkg1Name', 'Essentiel'),
      price: '49€/mois',
      features: [
        t('depannage.pkg1Feat1', 'Mises à jour automatiques'),
        t('depannage.pkg1Feat2', 'Antivirus professionnel'),
        t('depannage.pkg1Feat3', 'Sauvegarde mensuelle'),
        t('depannage.pkg1Feat4', 'Support téléphonique'),
        t('depannage.pkg1Feat5', '1 intervention/an incluse')
      ]
    },
    {
      name: t('depannage.pkg2Name', 'Confort'),
      price: '79€/mois',
      popular: true,
      features: [
        t('depannage.pkg2Feat1', 'Tout Essentiel +'),
        t('depannage.pkg2Feat2', 'Surveillance 24/7'),
        t('depannage.pkg2Feat3', 'Sauvegarde hebdomadaire'),
        t('depannage.pkg2Feat4', 'Support prioritaire'),
        t('depannage.pkg2Feat5', '2 interventions/an incluses'),
        t('depannage.pkg2Feat6', 'Optimisation trimestrielle')
      ]
    },
    {
      name: t('depannage.pkg3Name', 'Premium'),
      price: '129€/mois',
      features: [
        t('depannage.pkg3Feat1', 'Tout Confort +'),
        t('depannage.pkg3Feat2', 'Sauvegarde quotidienne'),
        t('depannage.pkg3Feat3', 'Interventions illimitées'),
        t('depannage.pkg3Feat4', 'Remplacement matériel'),
        t('depannage.pkg3Feat5', 'Astreinte 24/7'),
        t('depannage.pkg3Feat6', 'Technicien dédié')
      ]
    }
  ];

  const faq = [
    {
      question: t('depannage.faq1Q', 'Quels sont vos délais d\'intervention ?'),
      answer: t('depannage.faq1A', 'Nous intervenons généralement sous 24 à 48h. Pour les urgences critiques (serveur down, perte de données), nous pouvons intervenir le jour même selon disponibilité.')
    },
    {
      question: t('depannage.faq2Q', 'Intervenez-vous sur Mac et PC ?'),
      answer: t('depannage.faq2A', 'Oui, nous intervenons sur tous types d\'ordinateurs : PC Windows, Mac (macOS), Linux, ainsi que sur les serveurs et NAS. Plus de 35 ans d\'expérience multi-plateforme.')
    },
    {
      question: t('depannage.faq3Q', 'Proposez-vous un service à distance ?'),
      answer: t('depannage.faq3A', 'Oui, pour les problèmes logiciels, nous proposons une intervention à distance sécurisée via TeamViewer ou AnyDesk. Plus rapide et moins cher (60€/h au lieu de 80€/h + déplacement).')
    },
    {
      question: t('depannage.faq4Q', 'Garantissez-vous vos réparations ?'),
      answer: t('depannage.faq4A', 'Oui, toutes nos réparations sont garanties 3 mois pièces et main d\'œuvre. Les pièces neuves bénéficient de la garantie constructeur (1 à 2 ans).')
    },
    {
      question: t('depannage.faq5Q', 'Puis-je récupérer mes données perdues ?'),
      answer: t('depannage.faq5A', 'Oui, nous proposons un service de récupération de données avec un taux de réussite de 85%. Diagnostic gratuit. Tarifs à partir de 150€. Aucun frais si la récupération est impossible.')
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/depannage-maintenance" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-card">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-center">
          <div className="container mx-auto px-4 py-20">
            <div className="inline-block bg-white/10 ring-1 ring-white/20 rounded-full px-6 py-2 mb-4">
              <span className="text-primary-foreground font-semibold flex items-center gap-2">
                <Wrench size={20} />
                {t('depannage.heroBadge', 'Dépannage Informatique')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('depannage.heroTitlePart1', 'Dépannage & Maintenance')} <span className="text-accent">{t('depannage.heroTitleHighlight', 'Informatique')}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              {t('depannage.heroSubtitle', 'Intervention rapide à Haguenau pour tous vos problèmes informatiques. Diagnostic gratuit, réparation sous 24-48h, garantie 3 mois.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('depannage.heroCtaQuote', 'Demander un Devis Gratuit')} <ArrowRight className="ml-2" />
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('depannage.problemsHeading', 'Problèmes Courants que Nous Résolvons')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('depannage.problemsSubheading', 'Quelle que soit votre panne, nous avons la solution')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((problem, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-3 text-primary">{problem.title}</h3>
                  <p className="text-muted-foreground mb-4">{problem.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-accent">{problem.price}</span>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">{t('depannage.quoteBtn', 'Devis')}</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('depannage.processHeading', "Notre Processus d'Intervention")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('depannage.processSubheading', 'Simple, rapide et transparent')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('depannage.pricingHeading', 'Tarifs Dépannage')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('depannage.pricingSubheading', 'Prix transparents, pas de surprise')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl p-8">
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <span className="font-medium">{item.service}</span>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-center inline-flex items-center justify-center gap-2 w-full">
                  <Lightbulb size={18} className="text-accent flex-shrink-0" />
                  <span><strong>{t('depannage.pricingNoteBold', 'Diagnostic gratuit')}</strong> {t('depannage.pricingNoteRest', '- Devis détaillé avant toute intervention - Paiement après réparation')}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('depannage.maintenanceHeading', 'Contrats de Maintenance')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('depannage.maintenanceSubheading', "Prévenez les pannes et économisez jusqu'à 40%")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {maintenancePackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-2xl shadow-xl overflow-hidden ${
                    pkg.popular ? 'ring-4 ring-primary transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-primary text-white text-center py-2 font-semibold flex items-center justify-center gap-2">
                      <Star size={16} className="fill-current" /> {t('depannage.mostPopular', 'Le Plus Populaire')}
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className={`w-full ${pkg.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}>
                        {t('depannage.subscribe', 'Souscrire')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('depannage.faqHeading', 'Questions Fréquentes')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg mb-3 px-6 border shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
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
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('depannage.ctaHeading', 'Un Problème Informatique ? Nous Intervenons Rapidement !')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('depannage.ctaSubheading', 'Diagnostic gratuit • Intervention 24-48h • Garantie 3 mois • Plus de 2772 réparations')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t('depannage.ctaQuote', 'Demander un Devis')}
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" />
                  {t('depannage.ctaCall', 'Appeler Maintenant')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DepannageMaintenance;
