import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BrainCircuit, Lock, Building, Zap, DollarSign, Users, Shield, Server, Cpu, HardDrive, Phone, TrendingUp, FileText, MessageSquare } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const IAOffline = () => {
  const pageTitle = 'IA Offline : Intelligence Artificielle 100% Confidentielle';
  const pageDescription = 'Déployez l\'IA dans vos locaux. Vos données restent chez vous, 100% confidentielles. LLM privés (Llama, Mistral), génération de texte, analyse de documents. Conformité RGPD garantie.';

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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
    { icon: Lock, title: 'Confidentialité Totale', description: 'Vos données ne quittent JAMAIS vos locaux. Aucun cloud, aucune fuite possible.' },
    { icon: Shield, title: 'Conformité RGPD', description: 'Traitement 100% local = conformité RGPD simplifiée. Idéal secteurs sensibles.' },
    { icon: DollarSign, title: 'Pas d\'Abonnement', description: 'Investissement unique. Pas de coût mensuel par utilisateur ou par requête.' },
    { icon: Zap, title: 'Performance Maximale', description: 'Latence minimale, pas de limite d\'utilisation. Serveur dédié à votre IA.' },
    { icon: Building, title: 'Souveraineté Numérique', description: 'Indépendance totale vis-à-vis des GAFAM. Contrôle total de votre IA.' },
    { icon: Users, title: 'Multi-Utilisateurs', description: 'Toute votre équipe peut utiliser l\'IA simultanément sans surcoût.' }
  ];

  const useCases = [
    {
      sector: 'Santé',
      icon: '🏥',
      challenge: 'Analyser dossiers patients sans exposer données médicales',
      solution: 'IA Offline pour résumés médicaux, aide au diagnostic, génération de comptes-rendus',
      benefit: 'Confidentialité patients garantie, gain de temps 50%'
    },
    {
      sector: 'Juridique',
      icon: '⚖️',
      challenge: 'Analyser contrats et jurisprudence sans risque de fuite',
      solution: 'IA pour analyse contractuelle, recherche jurisprudentielle, rédaction d\'actes',
      benefit: 'Secret professionnel préservé, productivité x3'
    },
    {
      sector: 'R&D / Industrie',
      icon: '🔬',
      challenge: 'Protéger secrets industriels et innovations',
      solution: 'IA pour analyse de brevets, génération de documentation technique, veille',
      benefit: 'Propriété intellectuelle sécurisée, innovation accélérée'
    },
    {
      sector: 'Finance / Comptabilité',
      icon: '💰',
      challenge: 'Traiter données financières sensibles en toute sécurité',
      solution: 'IA pour analyse financière, détection d\'anomalies, reporting automatisé',
      benefit: 'Conformité bancaire, détection fraude temps réel'
    }
  ];

  const features = [
    {
      title: 'Génération de Texte',
      description: 'Rédaction d\'emails, rapports, articles, documentation technique. Qualité GPT-4 en local.',
      examples: ['Emails professionnels', 'Comptes-rendus', 'Documentation', 'Traduction']
    },
    {
      title: 'Analyse de Documents',
      description: 'Extraction d\'informations, résumés, classification de documents PDF, Word, Excel.',
      examples: ['Résumés automatiques', 'Extraction de données', 'Classification', 'Indexation']
    },
    {
      title: 'Chatbot Intelligent',
      description: 'Assistant IA conversationnel formé sur vos données internes (base de connaissances, procédures).',
      examples: ['Support client', 'FAQ intelligente', 'Assistant RH', 'Onboarding']
    },
    {
      title: 'Analyse de Code',
      description: 'Revue de code, détection de bugs, génération de tests, documentation automatique.',
      examples: ['Code review', 'Debug assistance', 'Tests unitaires', 'Documentation']
    }
  ];

  const models = [
    {
      name: 'Llama 3 (Meta)',
      size: '8B - 70B paramètres',
      strengths: 'Polyvalent, excellent en français, open-source',
      recommended: 'Usage général, PME'
    },
    {
      name: 'Mistral (Français)',
      size: '7B - 22B paramètres',
      strengths: 'Optimisé français, rapide, efficace',
      recommended: 'Entreprises françaises, juridique'
    },
    {
      name: 'CodeLlama',
      size: '7B - 34B paramètres',
      strengths: 'Spécialisé programmation, 16 langages',
      recommended: 'Développeurs, équipes IT'
    },
    {
      name: 'Mixtral 8x7B',
      size: '47B paramètres',
      strengths: 'Performance GPT-3.5, multilingue',
      recommended: 'Grandes entreprises, usage intensif'
    }
  ];

  const configurations = [
    {
      name: 'Starter',
      target: 'TPE (1-5 utilisateurs)',
      hardware: 'Station de travail GPU',
      specs: 'RTX 4070 Ti (12GB), 32GB RAM, 1TB SSD',
      models: 'Llama 3 8B, Mistral 7B',
      performance: '20-30 tokens/sec',
      price: 'À partir de 5000€',
      popular: false
    },
    {
      name: 'Business',
      target: 'PME (5-20 utilisateurs)',
      hardware: 'Serveur GPU dédié',
      specs: 'RTX 4090 (24GB), 64GB RAM, 2TB NVMe',
      models: 'Llama 3 70B, Mixtral 8x7B',
      performance: '40-60 tokens/sec',
      price: 'À partir de 12000€',
      popular: true
    },
    {
      name: 'Enterprise',
      target: 'Grandes entreprises (20+ utilisateurs)',
      hardware: 'Serveur multi-GPU',
      specs: '2x A100 (80GB), 256GB RAM, 4TB NVMe RAID',
      models: 'Tous modèles, fine-tuning possible',
      performance: '100+ tokens/sec',
      price: 'À partir de 45000€',
      popular: false
    }
  ];

  const comparison = [
    { feature: 'Confidentialité', cloud: '❌ Données dans le cloud', offline: '✅ Données en local' },
    { feature: 'Coût mensuel', cloud: '💰 20-100€/utilisateur/mois', offline: '✅ 0€ après investissement' },
    { feature: 'Limite d\'utilisation', cloud: '❌ Quotas, rate limits', offline: '✅ Illimité' },
    { feature: 'Latence', cloud: '⚠️ 200-500ms (réseau)', offline: '✅ <50ms (local)' },
    { feature: 'Conformité RGPD', cloud: '⚠️ Complexe (DPA, etc.)', offline: '✅ Simplifiée' },
    { feature: 'Dépendance fournisseur', cloud: '❌ Oui (OpenAI, etc.)', offline: '✅ Indépendant' },
    { feature: 'Disponibilité', cloud: '⚠️ Dépend d\'Internet', offline: '✅ 100% même hors ligne' }
  ];

  const process = [
    { step: '1', title: 'Audit', description: 'Analyse de vos besoins et cas d\'usage' },
    { step: '2', title: 'Dimensionnement', description: 'Choix du matériel et des modèles IA' },
    { step: '3', title: 'Devis', description: 'Proposition technique et financière' },
    { step: '4', title: 'Installation', description: 'Déploiement du serveur IA dans vos locaux' },
    { step: '5', title: 'Formation', description: 'Accompagnement de vos équipes' },
    { step: '6', title: 'Support', description: 'Maintenance et mises à jour incluses 1 an' }
  ];

  const roi = [
    {
      scenario: 'Cabinet d\'Avocats (10 personnes)',
      cloudCost: '10 x 50€/mois x 12 = 6000€/an',
      offlineCost: '12000€ investissement unique',
      roi: 'ROI en 2 ans, puis économie de 6000€/an',
      savings: 'Économie 5 ans : 18000€'
    },
    {
      scenario: 'PME Industrielle (50 personnes)',
      cloudCost: '50 x 30€/mois x 12 = 18000€/an',
      offlineCost: '25000€ investissement unique',
      roi: 'ROI en 1.4 an, puis économie de 18000€/an',
      savings: 'Économie 5 ans : 65000€'
    }
  ];

  const faq = [
    {
      question: 'Quelle est la différence avec ChatGPT ?',
      answer: 'ChatGPT est hébergé dans le cloud d\'OpenAI : vos données transitent par leurs serveurs. L\'IA Offline est installée dans VOS locaux : vos données ne sortent JAMAIS. Idéal pour données sensibles (santé, juridique, finance, R&D).'
    },
    {
      question: 'Les performances sont-elles comparables à GPT-4 ?',
      answer: 'Les modèles open-source (Llama 3 70B, Mixtral) atteignent 85-95% des performances de GPT-4 pour la plupart des tâches. Pour des besoins spécifiques, nous pouvons fine-tuner les modèles sur vos données.'
    },
    {
      question: 'Quel est le coût total de possession (TCO) ?',
      answer: 'Investissement initial : 5000-45000€ selon configuration. Coût annuel : ~1000-3000€ (électricité, maintenance). Vs Cloud : 6000-50000€/an selon nombre d\'utilisateurs. ROI généralement atteint en 1-2 ans.'
    },
    {
      question: 'Puis-je utiliser mes propres données pour entraîner l\'IA ?',
      answer: 'Oui ! Nous pouvons fine-tuner les modèles sur vos données internes (documentation, procédures, historique) pour créer une IA spécialisée dans votre domaine. Vos données restent 100% confidentielles.'
    },
    {
      question: 'Que se passe-t-il en cas de panne ?',
      answer: 'Nous proposons un contrat de maintenance avec intervention sous 24-48h, pièces de rechange en stock, et possibilité de serveur de secours en option. Garantie matérielle 3 ans.'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/ia-offline" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-purple-50 to-card">
        {/* Hero Section */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="inline-block bg-purple-100 rounded-full px-6 py-2 mb-4">
              <span className="text-purple-600 font-semibold flex items-center gap-2">
                <BrainCircuit size={20} />
                IA Offline - Innovation NETZ
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-purple-600">Intelligence Artificielle</span><br />
              100% <span className="text-blue-600">Confidentielle</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Déployez l'IA dans vos locaux. Vos données restent chez vous, jamais dans le cloud. Conformité RGPD garantie, pas d'abonnement mensuel.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Link to="/contact">
                <Button size="lg" className="gradient-purple text-white">
                  Demander une Démo <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600">
                  <Phone className="mr-2" /> 03 67 31 02 01
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              🔒 Déjà déployé chez 15+ entreprises • 🏥 Santé • ⚖️ Juridique • 🔬 R&D • 💰 Finance
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi Choisir l'IA Offline ?
              </h2>
              <p className="text-xl text-muted-foreground">
                6 avantages décisifs pour votre entreprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cas d'Usage par Secteur
              </h2>
              <p className="text-xl text-muted-foreground">
                L'IA Offline transforme les secteurs sensibles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{useCase.icon}</div>
                    <h3 className="text-2xl font-bold">{useCase.sector}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-red-600 mb-1">Problématique:</div>
                      <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600 mb-1">Solution IA Offline:</div>
                      <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600 mb-1">Bénéfice:</div>
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
                Fonctionnalités IA Disponibles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.examples.map((example, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
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
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Modèles IA Open-Source
              </h2>
              <p className="text-xl text-muted-foreground">
                Les meilleurs LLM pour votre usage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {models.map((model, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg mb-2">{model.name}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{model.size}</div>
                  <div className="mb-3">
                    <div className="text-xs font-semibold mb-1">Points forts:</div>
                    <p className="text-xs text-muted-foreground">{model.strengths}</p>
                  </div>
                  <div className="bg-purple-50 rounded p-2">
                    <div className="text-xs font-semibold text-purple-600">Recommandé pour:</div>
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
                Configurations & Tarifs
              </h2>
              <p className="text-xl text-muted-foreground">
                Choisissez la solution adaptée à votre entreprise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {configurations.map((config, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-2xl shadow-xl overflow-hidden ${
                    config.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
                  }`}
                >
                  {config.popular && (
                    <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                      ⭐ Le Plus Populaire
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{config.name}</h3>
                    <div className="text-sm text-muted-foreground mb-4">{config.target}</div>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{config.price}</div>
                      <div className="text-xs text-muted-foreground">Investissement unique</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="text-xs font-semibold mb-1">Matériel:</div>
                        <p className="text-xs text-muted-foreground">{config.hardware}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">Specs:</div>
                        <p className="text-xs text-muted-foreground">{config.specs}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">Modèles:</div>
                        <p className="text-xs text-muted-foreground">{config.models}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold mb-1">Performance:</div>
                        <p className="text-xs text-green-600 font-semibold">{config.performance}</p>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className={`w-full ${config.popular ? 'gradient-purple text-white' : 'gradient-blue text-white'}`}>
                        Demander un Devis
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                IA Cloud vs IA Offline
              </h2>
              <p className="text-xl text-muted-foreground">
                Comparaison objective
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Critère</th>
                      <th className="px-6 py-4 text-left">IA Cloud (ChatGPT, etc.)</th>
                      <th className="px-6 py-4 text-left">IA Offline (NETZ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-6 py-4 font-semibold">{row.feature}</td>
                        <td className="px-6 py-4 text-sm">{row.cloud}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600">{row.offline}</td>
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
                Retour sur Investissement (ROI)
              </h2>
              <p className="text-xl text-muted-foreground">
                L'IA Offline est rentable dès la 2ème année
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {roi.map((scenario, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-purple-600">{scenario.scenario}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Coût Cloud (annuel):</span>
                      <span className="font-bold text-red-600">{scenario.cloudCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Coût Offline (unique):</span>
                      <span className="font-bold text-blue-600">{scenario.offlineCost}</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="font-semibold text-green-600 mb-2">{scenario.roi}</div>
                      <div className="text-lg font-bold text-green-700">{scenario.savings}</div>
                    </div>
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
                Notre Processus de Déploiement
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
            <BrainCircuit size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Déployer l'IA en Toute Confidentialité ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Démo gratuite • Audit de vos besoins • Devis personnalisé • Installation clé en main
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Demander une Démo
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

export default IAOffline;
