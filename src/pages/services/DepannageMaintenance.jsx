import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Phone, Wrench, Clock, Shield, TrendingUp, AlertCircle, Laptop } from 'lucide-react';
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
    { icon: Wrench, text: 'Diagnostic complet et rapide' },
    { icon: Shield, text: 'Réparation matérielle et logicielle' },
    { icon: AlertCircle, text: 'Éradication de virus et malwares' },
    { icon: TrendingUp, text: 'Optimisation des performances' },
    { icon: Clock, text: 'Maintenance préventive' },
    { icon: Laptop, text: 'Intervention sur site ou en atelier' },
  ];

  const commonProblems = [
    {
      title: 'Ordinateur Lent',
      description: 'Votre PC met plusieurs minutes à démarrer ? Les applications se figent ? Nous identifions la cause (disque saturé, RAM insuffisante, virus) et optimisons les performances.',
      price: 'À partir de 60€'
    },
    {
      title: 'Écran Bleu / Noir',
      description: 'Écran bleu de la mort (BSOD) ou écran noir au démarrage ? Problème matériel ou logiciel, nous diagnostiquons et réparons rapidement.',
      price: 'Diagnostic gratuit'
    },
    {
      title: 'Virus & Malwares',
      description: 'Publicités intempestives, ransomware, spyware ? Nous éradiquons toutes les menaces et sécurisons votre système pour éviter les récidives.',
      price: 'À partir de 80€'
    },
    {
      title: 'Panne Matérielle',
      description: 'Disque dur défaillant, RAM défectueuse, alimentation HS ? Nous remplaçons les composants défectueux avec des pièces de qualité garanties.',
      price: 'Devis gratuit'
    },
    {
      title: 'Récupération de Données',
      description: 'Données perdues suite à une suppression accidentelle ou une panne ? Nous récupérons vos fichiers précieux (photos, documents, emails).',
      price: 'À partir de 150€'
    },
    {
      title: 'Problèmes Réseau',
      description: 'Pas de connexion Internet, WiFi instable, imprimante non détectée ? Nous résolvons tous vos problèmes de connectivité.',
      price: 'À partir de 50€'
    }
  ];

  const process = [
    { step: '1', title: 'Contact', description: 'Appelez-nous ou remplissez le formulaire' },
    { step: '2', title: 'Diagnostic', description: 'Analyse complète gratuite de votre problème' },
    { step: '3', title: 'Devis', description: 'Proposition détaillée avant intervention' },
    { step: '4', title: 'Réparation', description: 'Intervention rapide sous 24-48h' },
    { step: '5', title: 'Test', description: 'Vérification complète du bon fonctionnement' },
    { step: '6', title: 'Garantie', description: '3 mois de garantie pièces et main d\'œuvre' }
  ];

  const pricing = [
    { service: 'Diagnostic complet', price: 'Gratuit' },
    { service: 'Nettoyage et optimisation', price: '60€' },
    { service: 'Suppression virus/malware', price: '80€' },
    { service: 'Installation Windows', price: '100€' },
    { service: 'Upgrade SSD (avec clonage)', price: '150€ + pièce' },
    { service: 'Upgrade RAM', price: '50€ + pièce' },
    { service: 'Réparation matérielle', price: 'Sur devis' },
    { service: 'Intervention à domicile', price: '+30€' }
  ];

  const maintenancePackages = [
    {
      name: 'Essentiel',
      price: '49€/mois',
      features: [
        'Mises à jour automatiques',
        'Antivirus professionnel',
        'Sauvegarde mensuelle',
        'Support téléphonique',
        '1 intervention/an incluse'
      ]
    },
    {
      name: 'Confort',
      price: '79€/mois',
      popular: true,
      features: [
        'Tout Essentiel +',
        'Surveillance 24/7',
        'Sauvegarde hebdomadaire',
        'Support prioritaire',
        '2 interventions/an incluses',
        'Optimisation trimestrielle'
      ]
    },
    {
      name: 'Premium',
      price: '129€/mois',
      features: [
        'Tout Confort +',
        'Sauvegarde quotidienne',
        'Interventions illimitées',
        'Remplacement matériel',
        'Astreinte 24/7',
        'Technicien dédié'
      ]
    }
  ];

  const faq = [
    {
      question: 'Quels sont vos délais d\'intervention ?',
      answer: 'Nous intervenons généralement sous 24 à 48h. Pour les urgences critiques (serveur down, perte de données), nous pouvons intervenir le jour même selon disponibilité.'
    },
    {
      question: 'Intervenez-vous sur Mac et PC ?',
      answer: 'Oui, nous intervenons sur tous types d\'ordinateurs : PC Windows, Mac (macOS), Linux, ainsi que sur les serveurs et NAS. Plus de 20 ans d\'expérience multi-plateforme.'
    },
    {
      question: 'Proposez-vous un service à distance ?',
      answer: 'Oui, pour les problèmes logiciels, nous proposons une intervention à distance sécurisée via TeamViewer ou AnyDesk. Plus rapide et moins cher (60€/h au lieu de 80€/h + déplacement).'
    },
    {
      question: 'Garantissez-vous vos réparations ?',
      answer: 'Oui, toutes nos réparations sont garanties 3 mois pièces et main d\'œuvre. Les pièces neuves bénéficient de la garantie constructeur (1 à 2 ans).'
    },
    {
      question: 'Puis-je récupérer mes données perdues ?',
      answer: 'Oui, nous proposons un service de récupération de données avec un taux de réussite de 85%. Diagnostic gratuit. Tarifs à partir de 150€. Aucun frais si la récupération est impossible.'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/depannage-maintenance" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-primary/5 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-accent/10 rounded-full px-6 py-2 mb-4">
              <span className="text-accent font-semibold flex items-center gap-2">
                <Wrench size={20} />
                Dépannage Informatique
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dépannage & Maintenance <span className="text-primary">Informatique</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Intervention rapide à Haguenau pour tous vos problèmes informatiques. Diagnostic gratuit, réparation sous 24-48h, garantie 3 mois.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="gradient-green text-white">
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

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
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
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Problèmes Courants que Nous Résolvons
              </h2>
              <p className="text-xl text-muted-foreground">
                Quelle que soit votre panne, nous avons la solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-3 text-primary">{problem.title}</h3>
                  <p className="text-muted-foreground mb-4">{problem.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-accent">{problem.price}</span>
                    <Link to="/contact">
                      <Button size="sm" variant="outline">Devis</Button>
                    </Link>
                  </div>
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
                Notre Processus d'Intervention
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple, rapide et transparent
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
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tarifs Dépannage
              </h2>
              <p className="text-xl text-muted-foreground">
                Prix transparents, pas de surprise
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <span className="font-medium">{item.service}</span>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-center">
                  💡 <strong>Diagnostic gratuit</strong> - Devis détaillé avant toute intervention - Paiement après réparation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contrats de Maintenance
              </h2>
              <p className="text-xl text-muted-foreground">
                Prévenez les pannes et économisez jusqu'à 40%
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {maintenancePackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                    pkg.popular ? 'ring-4 ring-primary transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-primary text-white text-center py-2 font-semibold">
                      ⭐ Le Plus Populaire
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
                      <Button className={`w-full ${pkg.popular ? 'gradient-purple text-white' : 'gradient-blue text-white'}`}>
                        Souscrire
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions Fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-lg mb-3 px-6 border shadow-sm">
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
              Un Problème Informatique ? Nous Intervenons Rapidement !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Diagnostic gratuit • Intervention 24-48h • Garantie 3 mois • Plus de 2772 réparations
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Demander un Devis
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

export default DepannageMaintenance;
