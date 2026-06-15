import { Link } from 'react-router-dom'
import SEO from '@/components/common/SEO'
import StructuredData from '@/components/common/StructuredData'
import { Button } from '@/components/ui/button'
import {
  Brain,
  ShieldCheck,
  Lock,
  Server,
  Cpu,
  Zap,
  CloudOff,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  HeartPulse,
  Scale,
  Landmark,
  FlaskConical,
  Wallet,
  Users,
} from 'lucide-react'

const SolutionAI = () => {
  const pageTitle = 'Intelligence Artificielle Offline | Serveurs IA sur site - NETZ'
  const pageDescription =
    "Déployez l'IA dans vos locaux avec NETZ Informatique. Serveurs IA installés sur site, données 100% confidentielles, aucun transit cloud. Conformité RGPD garantie, sans abonnement."

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Intelligence Artificielle', url: '/solutions/intelligence-artificielle' },
  ]

  const serviceData = {
    service: {
      name: 'Intelligence Artificielle Offline',
      description: pageDescription,
      type: 'ArtificialIntelligenceService',
    },
    breadcrumbs,
  }

  const benefits = [
    {
      icon: Lock,
      title: 'Confidentialité Totale',
      description: 'Vos données ne quittent jamais vos locaux. Aucun transit par le cloud, aucune fuite possible.',
    },
    {
      icon: Wallet,
      title: "Pas d'Abonnement",
      description: 'Un investissement unique, sans coût mensuel par utilisateur ni facturation à la requête.',
    },
    {
      icon: ShieldCheck,
      title: 'Conformité RGPD',
      description: 'Traitement 100% local : la conformité RGPD est grandement simplifiée pour les données sensibles.',
    },
    {
      icon: Zap,
      title: 'Latence Réduite',
      description: 'Le serveur IA est dédié à votre entreprise : réponses quasi instantanées, sans limite de débit.',
    },
    {
      icon: CloudOff,
      title: 'Indépendance Cloud',
      description: "Souveraineté numérique totale. Vous ne dépendez plus d'OpenAI, Google ou Microsoft.",
    },
    {
      icon: TrendingUp,
      title: 'ROI Rapide',
      description: "Rentabilisé en 1 à 2 ans face aux abonnements cloud, puis des années d'économies.",
    },
  ]

  const useCases = [
    {
      icon: HeartPulse,
      sector: 'Santé',
      challenge: 'Exploiter les dossiers patients sans jamais exposer de données médicales.',
      solution: "Résumés de comptes-rendus, aide à la rédaction, analyse documentaire — tout en local.",
      benefit: 'Secret médical préservé, jusqu’à 50% de temps administratif gagné.',
    },
    {
      icon: Scale,
      sector: 'Juridique',
      challenge: 'Analyser contrats et jurisprudence sans risque de fuite confidentielle.',
      solution: "Analyse contractuelle, recherche jurisprudentielle, rédaction d'actes assistée.",
      benefit: 'Secret professionnel garanti, productivité multipliée par 3.',
    },
    {
      icon: Landmark,
      sector: 'Finance',
      challenge: 'Traiter des données financières sensibles en toute sécurité.',
      solution: "Analyse financière, détection d'anomalies, reporting et synthèses automatisés.",
      benefit: 'Conformité bancaire respectée, contrôle interne renforcé.',
    },
    {
      icon: FlaskConical,
      sector: 'R&D / Industrie',
      challenge: 'Protéger les secrets industriels, brevets et innovations.',
      solution: 'Analyse de brevets, documentation technique, veille et synthèse de données R&D.',
      benefit: 'Propriété intellectuelle sécurisée, innovation accélérée.',
    },
  ]

  const steps = [
    {
      step: '1',
      icon: Users,
      title: 'Audit & Cadrage',
      description: "Nous analysons vos besoins, cas d'usage et contraintes de confidentialité.",
    },
    {
      step: '2',
      icon: Cpu,
      title: 'Dimensionnement',
      description: 'Choix du matériel (GPU, serveur) et des modèles IA adaptés à votre volumétrie.',
    },
    {
      step: '3',
      icon: Server,
      title: 'Installation sur Site',
      description: 'Déploiement du serveur IA dans vos locaux, configuration et tests de performance.',
    },
    {
      step: '4',
      icon: ShieldCheck,
      title: 'Formation & Support',
      description: 'Accompagnement de vos équipes, maintenance et mises à jour incluses.',
    },
  ]

  const faqs = [
    {
      question: "L'IA remplace-t-elle mes employés ?",
      answer:
        "Non. L'IA Offline est un assistant : elle automatise les tâches répétitives (rédaction, résumés, recherche documentaire) pour que vos équipes se concentrent sur l'essentiel. Elle augmente leur productivité, elle ne les remplace pas.",
    },
    {
      question: 'Mes données sont-elles vraiment à l’abri ?',
      answer:
        "Oui. Le serveur IA est physiquement installé dans vos locaux et fonctionne sans connexion externe. Aucune donnée ne transite par Internet ni par un cloud tiers : c'est la garantie d'une confidentialité totale.",
    },
    {
      question: "Faut-il une connexion Internet pour l'utiliser ?",
      answer:
        "Non. L'IA fonctionne intégralement hors ligne, même en cas de coupure Internet. C'est l'un des grands avantages d'une solution sur site.",
    },
    {
      question: 'Quels sont les délais de mise en place ?',
      answer:
        "Comptez en moyenne 2 à 4 semaines entre l'audit initial et la mise en production, selon la configuration matérielle retenue et le niveau de personnalisation.",
    },
  ]

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url="/solutions/intelligence-artificielle"
      />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2 mb-6">
              <Brain size={20} />
              <span className="font-semibold">IA Offline — L'innovation signée NETZ</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligence Artificielle Offline
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Déployez la puissance de l'IA directement dans vos locaux. Vos données restent
              100% confidentielles, sans aucun transit par le cloud. Conformité RGPD garantie,
              sans abonnement mensuel.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Demander un devis <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="mr-2" size={18} /> 03 67 31 02 01
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <CloudOff size={24} className="text-destructive" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Le problème de l'IA cloud</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Vos données confidentielles transitent par des serveurs étrangers.</li>
                  <li>Abonnements mensuels coûteux par utilisateur et par requête.</li>
                  <li>Conformité RGPD complexe pour les secteurs sensibles.</li>
                  <li>Dépendance totale à un fournisseur et à votre connexion Internet.</li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck size={24} className="text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-4">La solution NETZ : l'IA Offline</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Un serveur IA installé physiquement dans vos locaux.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Vos données ne quittent jamais votre infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Investissement unique, sans abonnement récurrent.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Indépendance et souveraineté numérique totales.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi choisir l'IA Offline ?
              </h2>
              <p className="text-xl text-muted-foreground">
                6 avantages décisifs pour votre entreprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg hover-lift border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases by Sector */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cas d'usage par secteur</h2>
              <p className="text-xl text-muted-foreground">
                L'IA Offline transforme les métiers où la confidentialité est essentielle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <useCase.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{useCase.sector}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-foreground mb-1">Problématique</div>
                      <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-accent mb-1">Solution IA Offline</div>
                      <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">Bénéfice</div>
                      <p className="text-sm font-medium">{useCase.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
              <p className="text-xl text-muted-foreground">
                Un déploiement clé en main, de l'audit au support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <item.icon size={32} />
                  </div>
                  <div className="text-sm font-semibold text-accent mb-1">Étape {item.step}</div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-primary-foreground text-center shadow-xl">
              <Server size={48} className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Un budget adapté à votre taille</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Nos solutions IA Offline vont de la station de travail pour TPE au serveur
                multi-GPU pour grandes entreprises.
              </p>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                de 5 000€ à 50 000€+
              </div>
              <p className="opacity-90 mb-8">
                Investissement unique • Location possible • Devis gratuit et personnalisé
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Obtenir mon devis gratuit <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ / Reassurance */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vos questions, nos réponses</h2>
              <p className="text-xl text-muted-foreground">
                Tout ce qu'il faut savoir avant de se lancer
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                >
                  <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Brain size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à déployer l'IA en toute confidentialité ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Audit de vos besoins, devis personnalisé et installation clé en main par nos experts.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Demander un devis <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="mr-2" size={18} /> 03 67 31 02 01
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SolutionAI
