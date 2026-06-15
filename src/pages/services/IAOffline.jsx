import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BrainCircuit, Lock, Building, Zap, DollarSign, Users, Shield, Server, Cpu, HardDrive, Phone, TrendingUp, FileText, MessageSquare, Stethoscope, Scale, Microscope, Wallet, Star, XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const IAOffline = () => {
  const { t } = useTranslation();
  const pageTitle = t('iaOffline.pageTitle', 'IA Offline : Intelligence Artificielle 100% Confidentielle');
  const pageDescription = t('iaOffline.pageDescription', 'Déployez l\'IA dans vos locaux. Vos données restent chez vous, 100% confidentielles. LLM privés (Llama, Mistral), génération de texte, analyse de documents. Conformité RGPD garantie.');

  const breadcrumbs = [
    { name: t('iaOffline.breadcrumbHome', 'Accueil'), url: '/' },
    { name: t('iaOffline.breadcrumbServices', 'Services'), url: '/services' },
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
    { icon: Lock, title: t('iaOffline.benefit1Title', 'Confidentialité Totale'), description: t('iaOffline.benefit1Desc', 'Vos données ne quittent JAMAIS vos locaux. Aucun cloud, aucune fuite possible.') },
    { icon: Shield, title: t('iaOffline.benefit2Title', 'Conformité RGPD'), description: t('iaOffline.benefit2Desc', 'Traitement 100% local = conformité RGPD simplifiée. Idéal secteurs sensibles.') },
    { icon: DollarSign, title: t('iaOffline.benefit3Title', 'Pas d\'Abonnement'), description: t('iaOffline.benefit3Desc', 'Investissement unique. Pas de coût mensuel par utilisateur ou par requête.') },
    { icon: Zap, title: t('iaOffline.benefit4Title', 'Performance Maximale'), description: t('iaOffline.benefit4Desc', 'Latence minimale, pas de limite d\'utilisation. Serveur dédié à votre IA.') },
    { icon: Building, title: t('iaOffline.benefit5Title', 'Souveraineté Numérique'), description: t('iaOffline.benefit5Desc', 'Indépendance totale vis-à-vis des GAFAM. Contrôle total de votre IA.') },
    { icon: Users, title: t('iaOffline.benefit6Title', 'Multi-Utilisateurs'), description: t('iaOffline.benefit6Desc', 'Toute votre équipe peut utiliser l\'IA simultanément sans surcoût.') }
  ];

  const useCases = [
    {
      sector: t('iaOffline.useCase1Sector', 'Santé'),
      icon: Stethoscope,
      challenge: t('iaOffline.useCase1Challenge', 'Analyser dossiers patients sans exposer données médicales'),
      solution: t('iaOffline.useCase1Solution', 'IA Offline pour résumés médicaux, aide au diagnostic, génération de comptes-rendus'),
      benefit: t('iaOffline.useCase1Benefit', 'Confidentialité patients garantie, gain de temps 50%')
    },
    {
      sector: t('iaOffline.useCase2Sector', 'Juridique'),
      icon: Scale,
      challenge: t('iaOffline.useCase2Challenge', 'Analyser contrats et jurisprudence sans risque de fuite'),
      solution: t('iaOffline.useCase2Solution', 'IA pour analyse contractuelle, recherche jurisprudentielle, rédaction d\'actes'),
      benefit: t('iaOffline.useCase2Benefit', 'Secret professionnel préservé, productivité x3')
    },
    {
      sector: t('iaOffline.useCase3Sector', 'R&D / Industrie'),
      icon: Microscope,
      challenge: t('iaOffline.useCase3Challenge', 'Protéger secrets industriels et innovations'),
      solution: t('iaOffline.useCase3Solution', 'IA pour analyse de brevets, génération de documentation technique, veille'),
      benefit: t('iaOffline.useCase3Benefit', 'Propriété intellectuelle sécurisée, innovation accélérée')
    },
    {
      sector: t('iaOffline.useCase4Sector', 'Finance / Comptabilité'),
      icon: Wallet,
      challenge: t('iaOffline.useCase4Challenge', 'Traiter données financières sensibles en toute sécurité'),
      solution: t('iaOffline.useCase4Solution', 'IA pour analyse financière, détection d\'anomalies, reporting automatisé'),
      benefit: t('iaOffline.useCase4Benefit', 'Conformité bancaire, détection fraude temps réel')
    }
  ];

  const features = [
    {
      title: t('iaOffline.feature1Title', 'Génération de Texte'),
      description: t('iaOffline.feature1Desc', 'Rédaction d\'emails, rapports, articles, documentation technique. Qualité GPT-4 en local.'),
      examples: [t('iaOffline.feature1Ex1', 'Emails professionnels'), t('iaOffline.feature1Ex2', 'Comptes-rendus'), t('iaOffline.feature1Ex3', 'Documentation'), t('iaOffline.feature1Ex4', 'Traduction')]
    },
    {
      title: t('iaOffline.feature2Title', 'Analyse de Documents'),
      description: t('iaOffline.feature2Desc', 'Extraction d\'informations, résumés, classification de documents PDF, Word, Excel.'),
      examples: [t('iaOffline.feature2Ex1', 'Résumés automatiques'), t('iaOffline.feature2Ex2', 'Extraction de données'), t('iaOffline.feature2Ex3', 'Classification'), t('iaOffline.feature2Ex4', 'Indexation')]
    },
    {
      title: t('iaOffline.feature3Title', 'Chatbot Intelligent'),
      description: t('iaOffline.feature3Desc', 'Assistant IA conversationnel formé sur vos données internes (base de connaissances, procédures).'),
      examples: [t('iaOffline.feature3Ex1', 'Support client'), t('iaOffline.feature3Ex2', 'FAQ intelligente'), t('iaOffline.feature3Ex3', 'Assistant RH'), t('iaOffline.feature3Ex4', 'Onboarding')]
    },
    {
      title: t('iaOffline.feature4Title', 'Analyse de Code'),
      description: t('iaOffline.feature4Desc', 'Revue de code, détection de bugs, génération de tests, documentation automatique.'),
      examples: [t('iaOffline.feature4Ex1', 'Code review'), t('iaOffline.feature4Ex2', 'Debug assistance'), t('iaOffline.feature4Ex3', 'Tests unitaires'), t('iaOffline.feature4Ex4', 'Documentation')]
    }
  ];

  const models = [
    {
      name: 'Llama 3 (Meta)',
      size: t('iaOffline.model1Size', '8B - 70B paramètres'),
      strengths: t('iaOffline.model1Strengths', 'Polyvalent, excellent en français, open-source'),
      recommended: t('iaOffline.model1Recommended', 'Usage général, PME')
    },
    {
      name: 'Mistral (Français)',
      size: t('iaOffline.model2Size', '7B - 22B paramètres'),
      strengths: t('iaOffline.model2Strengths', 'Optimisé français, rapide, efficace'),
      recommended: t('iaOffline.model2Recommended', 'Entreprises françaises, juridique')
    },
    {
      name: 'CodeLlama',
      size: t('iaOffline.model3Size', '7B - 34B paramètres'),
      strengths: t('iaOffline.model3Strengths', 'Spécialisé programmation, 16 langages'),
      recommended: t('iaOffline.model3Recommended', 'Développeurs, équipes IT')
    },
    {
      name: 'Mixtral 8x7B',
      size: t('iaOffline.model4Size', '47B paramètres'),
      strengths: t('iaOffline.model4Strengths', 'Performance GPT-3.5, multilingue'),
      recommended: t('iaOffline.model4Recommended', 'Grandes entreprises, usage intensif')
    }
  ];

  const configurations = [
    {
      name: 'Starter',
      target: t('iaOffline.config1Target', 'TPE (1-5 utilisateurs)'),
      hardware: t('iaOffline.config1Hardware', 'Station de travail GPU'),
      specs: 'RTX 4070 Ti (12GB), 32GB RAM, 1TB SSD',
      models: 'Llama 3 8B, Mistral 7B',
      performance: '20-30 tokens/sec',
      price: t('iaOffline.config1Price', 'À partir de 5000€'),
      popular: false
    },
    {
      name: 'Business',
      target: t('iaOffline.config2Target', 'PME (5-20 utilisateurs)'),
      hardware: t('iaOffline.config2Hardware', 'Serveur GPU dédié'),
      specs: 'RTX 4090 (24GB), 64GB RAM, 2TB NVMe',
      models: 'Llama 3 70B, Mixtral 8x7B',
      performance: '40-60 tokens/sec',
      price: t('iaOffline.config2Price', 'À partir de 12000€'),
      popular: true
    },
    {
      name: 'Enterprise',
      target: t('iaOffline.config3Target', 'Grandes entreprises (20+ utilisateurs)'),
      hardware: t('iaOffline.config3Hardware', 'Serveur multi-GPU'),
      specs: '2x A100 (80GB), 256GB RAM, 4TB NVMe RAID',
      models: t('iaOffline.config3Models', 'Tous modèles, fine-tuning possible'),
      performance: '100+ tokens/sec',
      price: t('iaOffline.config3Price', 'À partir de 45000€'),
      popular: false
    }
  ];

  const comparison = [
    { feature: t('iaOffline.comp1Feature', 'Confidentialité'), cloudStatus: 'bad', cloud: t('iaOffline.comp1Cloud', 'Données dans le cloud'), offline: t('iaOffline.comp1Offline', 'Données en local') },
    { feature: t('iaOffline.comp2Feature', 'Coût mensuel'), cloudStatus: 'warn', cloud: t('iaOffline.comp2Cloud', '20-100€/utilisateur/mois'), offline: t('iaOffline.comp2Offline', '0€ après investissement') },
    { feature: t('iaOffline.comp3Feature', 'Limite d\'utilisation'), cloudStatus: 'bad', cloud: t('iaOffline.comp3Cloud', 'Quotas, rate limits'), offline: t('iaOffline.comp3Offline', 'Illimité') },
    { feature: t('iaOffline.comp4Feature', 'Latence'), cloudStatus: 'warn', cloud: t('iaOffline.comp4Cloud', '200-500ms (réseau)'), offline: t('iaOffline.comp4Offline', '<50ms (local)') },
    { feature: t('iaOffline.comp5Feature', 'Conformité RGPD'), cloudStatus: 'warn', cloud: t('iaOffline.comp5Cloud', 'Complexe (DPA, etc.)'), offline: t('iaOffline.comp5Offline', 'Simplifiée') },
    { feature: t('iaOffline.comp6Feature', 'Dépendance fournisseur'), cloudStatus: 'bad', cloud: t('iaOffline.comp6Cloud', 'Oui (OpenAI, etc.)'), offline: t('iaOffline.comp6Offline', 'Indépendant') },
    { feature: t('iaOffline.comp7Feature', 'Disponibilité'), cloudStatus: 'warn', cloud: t('iaOffline.comp7Cloud', 'Dépend d\'Internet'), offline: t('iaOffline.comp7Offline', '100% même hors ligne') }
  ];

  const cloudStatusIcon = {
    bad: <XCircle size={16} className="text-destructive flex-shrink-0" />,
    warn: <AlertTriangle size={16} className="text-amber-600 flex-shrink-0" />
  };

  const process = [
    { step: '1', title: t('iaOffline.process1Title', 'Audit'), description: t('iaOffline.process1Desc', 'Analyse de vos besoins et cas d\'usage') },
    { step: '2', title: t('iaOffline.process2Title', 'Dimensionnement'), description: t('iaOffline.process2Desc', 'Choix du matériel et des modèles IA') },
    { step: '3', title: t('iaOffline.process3Title', 'Devis'), description: t('iaOffline.process3Desc', 'Proposition technique et financière') },
    { step: '4', title: t('iaOffline.process4Title', 'Installation'), description: t('iaOffline.process4Desc', 'Déploiement du serveur IA dans vos locaux') },
    { step: '5', title: t('iaOffline.process5Title', 'Formation'), description: t('iaOffline.process5Desc', 'Accompagnement de vos équipes') },
    { step: '6', title: t('iaOffline.process6Title', 'Support'), description: t('iaOffline.process6Desc', 'Maintenance et mises à jour incluses 1 an') }
  ];

  const roi = [
    {
      scenario: t('iaOffline.roi1Scenario', 'Cabinet d\'Avocats (10 personnes)'),
      cloudCost: t('iaOffline.roi1CloudCost', '10 x 50€/mois x 12 = 6000€/an'),
      offlineCost: t('iaOffline.roi1OfflineCost', '12000€ investissement unique'),
      roi: t('iaOffline.roi1Roi', 'ROI en 2 ans, puis économie de 6000€/an'),
      savings: t('iaOffline.roi1Savings', 'Économie 5 ans : 18000€')
    },
    {
      scenario: t('iaOffline.roi2Scenario', 'PME Industrielle (50 personnes)'),
      cloudCost: t('iaOffline.roi2CloudCost', '50 x 30€/mois x 12 = 18000€/an'),
      offlineCost: t('iaOffline.roi2OfflineCost', '25000€ investissement unique'),
      roi: t('iaOffline.roi2Roi', 'ROI en 1.4 an, puis économie de 18000€/an'),
      savings: t('iaOffline.roi2Savings', 'Économie 5 ans : 65000€')
    }
  ];

  const faq = [
    {
      question: t('iaOffline.faqQ1', 'Quelle est la différence avec ChatGPT ?'),
      answer: t('iaOffline.faqA1', 'ChatGPT est hébergé dans le cloud d\'OpenAI : vos données transitent par leurs serveurs. L\'IA Offline est installée dans VOS locaux : vos données ne sortent JAMAIS. Idéal pour données sensibles (santé, juridique, finance, R&D).')
    },
    {
      question: t('iaOffline.faqQ2', 'Les performances sont-elles comparables à GPT-4 ?'),
      answer: t('iaOffline.faqA2', 'Les modèles open-source (Llama 3 70B, Mixtral) atteignent 85-95% des performances de GPT-4 pour la plupart des tâches. Pour des besoins spécifiques, nous pouvons fine-tuner les modèles sur vos données.')
    },
    {
      question: t('iaOffline.faqQ3', 'Quel est le coût total de possession (TCO) ?'),
      answer: t('iaOffline.faqA3', 'Investissement initial : 5000-45000€ selon configuration. Coût annuel : ~1000-3000€ (électricité, maintenance). Vs Cloud : 6000-50000€/an selon nombre d\'utilisateurs. ROI généralement atteint en 1-2 ans.')
    },
    {
      question: t('iaOffline.faqQ4', 'Puis-je utiliser mes propres données pour entraîner l\'IA ?'),
      answer: t('iaOffline.faqA4', 'Oui ! Nous pouvons fine-tuner les modèles sur vos données internes (documentation, procédures, historique) pour créer une IA spécialisée dans votre domaine. Vos données restent 100% confidentielles.')
    },
    {
      question: t('iaOffline.faqQ5', 'Que se passe-t-il en cas de panne ?'),
      answer: t('iaOffline.faqA5', 'Nous proposons un contrat de maintenance avec intervention sous 24-48h, pièces de rechange en stock, et possibilité de serveur de secours en option. Garantie matérielle 3 ans.')
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/ia-offline" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="inline-block rounded-full px-6 py-2 mb-4 bg-white/10 ring-1 ring-white/20">
              <span className="font-semibold flex items-center gap-2">
                <BrainCircuit size={20} />
                {t('iaOffline.heroBadge', 'IA Offline - Innovation NETZ')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span>{t('iaOffline.heroTitleLine1', 'Intelligence Artificielle')}</span><br />
              100% <span className="text-accent">{t('iaOffline.heroTitleHighlight', 'Confidentielle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              {t('iaOffline.heroSubtitle', "Déployez l'IA dans vos locaux. Vos données restent chez vous, jamais dans le cloud. Conformité RGPD garantie, pas d'abonnement mensuel.")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('iaOffline.heroCtaDemo', 'Demander une Démo')} <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
                  <Phone className="mr-2" /> 03 67 31 02 01
                </Button>
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 flex items-center justify-center gap-x-3 gap-y-1 flex-wrap">
              <span className="flex items-center gap-1.5"><Lock size={16} className="text-accent" /> {t('iaOffline.trustDeployed', 'Déjà déployé chez 15+ entreprises')}</span>
              <span className="flex items-center gap-1.5"><Stethoscope size={16} className="text-accent" /> {t('iaOffline.trustHealth', 'Santé')}</span>
              <span className="flex items-center gap-1.5"><Scale size={16} className="text-accent" /> {t('iaOffline.trustLegal', 'Juridique')}</span>
              <span className="flex items-center gap-1.5"><Microscope size={16} className="text-accent" /> {t('iaOffline.trustRD', 'R&D')}</span>
              <span className="flex items-center gap-1.5"><Wallet size={16} className="text-accent" /> {t('iaOffline.trustFinance', 'Finance')}</span>
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.benefitsTitle', "Pourquoi Choisir l'IA Offline ?")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('iaOffline.benefitsSubtitle', '6 avantages décisifs pour votre entreprise')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.useCasesTitle', "Cas d'Usage par Secteur")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('iaOffline.useCasesSubtitle', "L'IA Offline transforme les secteurs sensibles")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <useCase.icon size={48} className="text-accent flex-shrink-0" />
                    <h3 className="text-2xl font-bold">{useCase.sector}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-destructive mb-1">{t('iaOffline.labelChallenge', 'Problématique:')}</div>
                      <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">{t('iaOffline.labelSolution', 'Solution IA Offline:')}</div>
                      <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-accent mb-1">{t('iaOffline.labelBenefit', 'Bénéfice:')}</div>
                      <p className="text-sm font-semibold">{useCase.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.featuresTitle', 'Fonctionnalités IA Disponibles')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-accent">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.examples.map((example, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Models */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.modelsTitle', 'Modèles IA Open-Source')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('iaOffline.modelsSubtitle', 'Les meilleurs LLM pour votre usage')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {models.map((model, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg mb-2">{model.name}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{model.size}</div>
                  <div className="mb-3">
                    <div className="text-xs font-semibold mb-1">{t('iaOffline.modelStrengthsLabel', 'Points forts:')}</div>
                    <p className="text-xs text-muted-foreground">{model.strengths}</p>
                  </div>
                  <div className="bg-accent/10 rounded p-2">
                    <div className="text-xs font-semibold text-accent">{t('iaOffline.modelRecommendedLabel', 'Recommandé pour:')}</div>
                    <p className="text-xs">{model.recommended}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Configurations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.configsTitle', 'Configurations & Tarifs')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('iaOffline.configsSubtitle', 'Choisissez la solution adaptée à votre entreprise')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {configurations.map((config, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-2xl shadow-xl overflow-hidden ${
                    config.popular ? 'ring-4 ring-accent transform scale-105' : ''
                  }`}
                >
                  {config.popular && (
                    <div className="bg-accent text-accent-foreground text-center py-2 font-semibold flex items-center justify-center gap-2">
                      <Star size={18} className="fill-current" /> {t('iaOffline.popularBadge', 'Le Plus Populaire')}
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{config.name}</h3>
                    <div className="text-sm text-muted-foreground mb-4">{config.target}</div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-accent mb-2">{config.price}</div>
                      <div className="text-xs text-muted-foreground">{t('iaOffline.uniqueInvestment', 'Investissement unique')}</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="text-xs font-semibold mb-1">{t('iaOffline.hardwareLabel', 'Matériel:')}</div>
                        <p className="text-xs text-muted-foreground">{config.hardware}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">{t('iaOffline.specsLabel', 'Specs:')}</div>
                        <p className="text-xs text-muted-foreground">{config.specs}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">{t('iaOffline.modelsLabel', 'Modèles:')}</div>
                        <p className="text-xs text-muted-foreground">{config.models}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">{t('iaOffline.performanceLabel', 'Performance:')}</div>
                        <p className="text-xs text-accent font-semibold">{config.performance}</p>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className={`w-full ${config.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`} variant={config.popular ? 'default' : 'outline'}>
                        {t('iaOffline.configCtaQuote', 'Demander un Devis')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.comparisonTitle', 'IA Cloud vs IA Offline')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('iaOffline.comparisonSubtitle', 'Comparaison objective')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left">{t('iaOffline.tableColCriteria', 'Critère')}</th>
                      <th className="px-6 py-4 text-left">{t('iaOffline.tableColCloud', 'IA Cloud (ChatGPT, etc.)')}</th>
                      <th className="px-6 py-4 text-left">{t('iaOffline.tableColOffline', 'IA Offline (NETZ)')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-6 py-4 font-semibold">{row.feature}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="flex items-center gap-2">
                            {cloudStatusIcon[row.cloudStatus]}
                            {row.cloud}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                            {row.offline}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.roiTitle', 'Retour sur Investissement (ROI)')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('iaOffline.roiSubtitle', "L'IA Offline est rentable dès la 2ème année")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {roi.map((scenario, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-accent">{scenario.scenario}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">{t('iaOffline.roiCloudCostLabel', 'Coût Cloud (annuel):')}</span>
                      <span className="font-bold text-destructive">{scenario.cloudCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">{t('iaOffline.roiOfflineCostLabel', 'Coût Offline (unique):')}</span>
                      <span className="font-bold text-primary">{scenario.offlineCost}</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <div className="font-semibold text-accent mb-2">{scenario.roi}</div>
                      <div className="text-lg font-bold text-accent">{scenario.savings}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.processTitle', 'Notre Processus de Déploiement')}
              </h2>
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

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('iaOffline.faqTitle', 'Questions Fréquentes')}
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
            <BrainCircuit size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('iaOffline.ctaTitle', "Prêt à Déployer l'IA en Toute Confidentialité ?")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
              {t('iaOffline.ctaSubtitle', 'Démo gratuite • Audit de vos besoins • Devis personnalisé • Installation clé en main')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('iaOffline.ctaDemo', 'Demander une Démo')}
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
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

export default IAOffline;
