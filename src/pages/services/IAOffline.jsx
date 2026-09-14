import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BrainCircuit, Lock, Building, Zap, DollarSign, Users, Shield, Server, Cpu, HardDrive, Phone, TrendingUp, FileText, MessageSquare, Stethoscope, Scale, Microscope, Wallet, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const IAOffline = () => {
  const { t } = useTranslation();
  const pageTitle = t('iaOffline.pageTitle', 'IA Offline : intelligence artificielle à traitement local');
  const pageDescription = t('iaOffline.pageDescription', 'Déployez l\'IA dans vos locaux avec des LLM privés, de la génération de texte et de l\'analyse de documents. La confidentialité et la conformité RGPD dépendent des contrôles techniques et organisationnels retenus.');

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
    { icon: Lock, title: t('iaOffline.benefit1Title', 'Traitement local maîtrisé'), description: t('iaOffline.benefit1Desc', 'Une architecture sur site peut réduire les transferts vers le cloud ; les flux réels dépendent des intégrations et de la configuration retenues.') },
    { icon: Shield, title: t('iaOffline.benefit2Title', 'Démarche RGPD'), description: t('iaOffline.benefit2Desc', 'Le traitement local peut soutenir une stratégie de conformité, qui doit aussi couvrir les finalités, les accès, la conservation et les procédures.') },
    { icon: DollarSign, title: t('iaOffline.benefit3Title', 'Pas d\'Abonnement'), description: t('iaOffline.benefit3Desc', 'Investissement unique. Pas de coût mensuel par utilisateur ou par requête.') },
    { icon: Zap, title: t('iaOffline.benefit4Title', 'Performance dimensionnée'), description: t('iaOffline.benefit4Desc', 'La latence et le débit sont mesurés sur vos cas d’usage avant le choix du matériel et du modèle.') },
    { icon: Building, title: t('iaOffline.benefit5Title', 'Maîtrise de l’architecture'), description: t('iaOffline.benefit5Desc', 'L’organisation maîtrise davantage le matériel, les modèles et les politiques d’accès, sans supprimer toutes les dépendances techniques.') },
    { icon: Users, title: t('iaOffline.benefit6Title', 'Multi-utilisateurs'), description: t('iaOffline.benefit6Desc', 'Le nombre d’utilisateurs simultanés dépend du dimensionnement, de la charge et des licences éventuelles.') }
  ];

  const useCases = [
    {
      sector: t('iaOffline.useCase1Sector', 'Santé'),
      icon: Stethoscope,
      challenge: t('iaOffline.useCase1Challenge', 'Analyser dossiers patients sans exposer données médicales'),
      solution: t('iaOffline.useCase1Solution', 'IA Offline pour résumés médicaux, aide au diagnostic, génération de comptes-rendus'),
      benefit: t('iaOffline.useCase1Benefit', 'Réduction possible des transferts externes et gains de temps à mesurer sur un pilote')
    },
    {
      sector: t('iaOffline.useCase2Sector', 'Juridique'),
      icon: Scale,
      challenge: t('iaOffline.useCase2Challenge', 'Analyser contrats et jurisprudence sans risque de fuite'),
      solution: t('iaOffline.useCase2Solution', 'IA pour analyse contractuelle, recherche jurisprudentielle, rédaction d\'actes'),
      benefit: t('iaOffline.useCase2Benefit', 'Traitement local possible et gains de productivité à mesurer sur les tâches ciblées')
    },
    {
      sector: t('iaOffline.useCase3Sector', 'R&D / Industrie'),
      icon: Microscope,
      challenge: t('iaOffline.useCase3Challenge', 'Protéger secrets industriels et innovations'),
      solution: t('iaOffline.useCase3Solution', 'IA pour analyse de brevets, génération de documentation technique, veille'),
      benefit: t('iaOffline.useCase3Benefit', 'Meilleure maîtrise des flux de données selon les contrôles mis en place')
    },
    {
      sector: t('iaOffline.useCase4Sector', 'Finance / Comptabilité'),
      icon: Wallet,
      challenge: t('iaOffline.useCase4Challenge', 'Traiter données financières sensibles en toute sécurité'),
      solution: t('iaOffline.useCase4Solution', 'IA pour analyse financière, détection d\'anomalies, reporting automatisé'),
      benefit: t('iaOffline.useCase4Benefit', 'Analyse locale possible sous réserve des contrôles métier, sécurité et conformité requis')
    }
  ];

  const features = [
    {
      title: t('iaOffline.feature1Title', 'Génération de Texte'),
      description: t('iaOffline.feature1Desc', 'Rédaction d\'emails, rapports, articles et documentation technique ; la qualité dépend du modèle et de l’évaluation menée sur vos données.'),
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

  const process = [
    { step: '1', title: t('iaOffline.process1Title', 'Audit'), description: t('iaOffline.process1Desc', 'Analyse de vos besoins et cas d\'usage') },
    { step: '2', title: t('iaOffline.process2Title', 'Dimensionnement'), description: t('iaOffline.process2Desc', 'Choix du matériel et des modèles IA') },
    { step: '3', title: t('iaOffline.process3Title', 'Devis'), description: t('iaOffline.process3Desc', 'Proposition technique et financière') },
    { step: '4', title: t('iaOffline.process4Title', 'Installation'), description: t('iaOffline.process4Desc', 'Déploiement du serveur IA dans vos locaux') },
    { step: '5', title: t('iaOffline.process5Title', 'Formation'), description: t('iaOffline.process5Desc', 'Accompagnement de vos équipes') },
    { step: '6', title: t('iaOffline.process6Title', 'Support'), description: t('iaOffline.process6Desc', 'Maintenance et mises à jour incluses 1 an') }
  ];

  const faq = [
    {
      question: t('iaOffline.faqQ1', 'Quelle est la différence avec ChatGPT ?'),
      answer: t('iaOffline.faqA1', 'Un service cloud traite les données selon son architecture et ses contrats. Une solution sur site peut réduire les transferts externes, mais les flux doivent être vérifiés pour chaque intégration et procédure.')
    },
    {
      question: t('iaOffline.faqQ2', 'Les performances sont-elles comparables à GPT-4 ?'),
      answer: t('iaOffline.faqA2', "Les performances des modèles open source dépendent du cas d'usage, de l'infrastructure et de la méthode d'évaluation. Un benchmark sur des données représentatives est recommandé avant déploiement.")
    },
    {
      question: t('iaOffline.faqQ3', 'Quel est le coût total de possession (TCO) ?'),
      answer: t('iaOffline.faqA3', 'Le coût total dépend du matériel, des modèles, de l’intégration, de l’énergie, de la maintenance et du support. Un devis et une comparaison TCO adaptés au cas d’usage sont nécessaires.')
    },
    {
      question: t('iaOffline.faqQ4', 'Puis-je utiliser mes propres données pour entraîner l\'IA ?'),
      answer: t('iaOffline.faqA4', 'Selon le besoin, une base documentaire, une recherche augmentée ou un ajustement de modèle peuvent être étudiés. La confidentialité dépend des accès, des journaux, des sauvegardes et de l’architecture complète.')
    },
    {
      question: t('iaOffline.faqQ5', 'Que se passe-t-il en cas de panne ?'),
      answer: t('iaOffline.faqA5', 'Les options de maintenance, de délai d’intervention, de pièces et de serveur de secours sont définies dans le devis ou le contrat. La garantie matérielle dépend du fabricant et de la configuration.')
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
              <span className="text-accent">{t('iaOffline.heroTitleHighlight', 'Traitement local maîtrisé')}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              {t('iaOffline.heroSubtitle', "Exécutez l'IA dans vos locaux afin de réduire la dépendance au cloud. Les flux de données et obligations RGPD doivent être évalués selon l'architecture et les procédures.")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
<Link to="/contact?audience=entreprise&service=ia-offline&source=services">
                  {t('iaOffline.heroCtaDemo', 'Demander une Démo')} <ArrowRight className="ml-2" />
                </Link>
</Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
<a href="tel:+33367310201">
                  <Phone className="mr-2" /> 03 67 31 02 01
                </a>
</Button>
            </div>
            <p className="text-sm text-primary-foreground/80 flex items-center justify-center gap-x-3 gap-y-1 flex-wrap">
              <span className="flex items-center gap-1.5"><Lock size={16} className="text-accent" /> {t('iaOffline.trustDeployed', 'Architecture évaluée selon le contexte')}</span>
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
                {t('iaOffline.useCasesSubtitle', "Exemples à valider selon le contexte métier et réglementaire")}
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
                    <Button asChild className={`w-full ${config.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`} variant={config.popular ? 'default' : 'outline'}>
<Link to="/contact?audience=entreprise&service=ia-offline&source=services">
                        {t('iaOffline.configCtaQuote', 'Demander un Devis')}
                      </Link>
</Button>
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
              {t('iaOffline.ctaTitle', "Prêt à évaluer une architecture IA locale ?")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
              {t('iaOffline.ctaSubtitle', 'Démo gratuite • Audit de vos besoins • Devis personnalisé • Installation clé en main')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
<Link to="/contact?audience=entreprise&service=ia-offline&source=services">
                  {t('iaOffline.ctaDemo', 'Demander une Démo')}
                  <ArrowRight className="ml-2" />
                </Link>
</Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
<a href="tel:+33367310201">
                  <Phone className="mr-2" />
                  03 67 31 02 01
                </a>
</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IAOffline;
