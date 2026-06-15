import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const pageTitle = t('solAI.pageTitle', 'Intelligence Artificielle Offline | Serveurs IA sur site - NETZ')
  const pageDescription =
    t('solAI.pageDescription', "Déployez l'IA dans vos locaux avec NETZ Informatique. Serveurs IA installés sur site, données 100% confidentielles, aucun transit cloud. Conformité RGPD garantie, sans abonnement.")

  const breadcrumbs = [
    { name: t('solAI.breadcrumbHome', 'Accueil'), url: '/' },
    { name: t('solAI.breadcrumbSolutions', 'Solutions'), url: '/solutions' },
    { name: t('solAI.breadcrumbAI', 'Intelligence Artificielle'), url: '/solutions/intelligence-artificielle' },
  ]

  const serviceData = {
    service: {
      name: t('solAI.serviceName', 'Intelligence Artificielle Offline'),
      description: pageDescription,
      type: 'ArtificialIntelligenceService',
    },
    breadcrumbs,
  }

  const benefits = [
    {
      icon: Lock,
      title: t('solAI.benefit1Title', 'Confidentialité Totale'),
      description: t('solAI.benefit1Desc', 'Vos données ne quittent jamais vos locaux. Aucun transit par le cloud, aucune fuite possible.'),
    },
    {
      icon: Wallet,
      title: t('solAI.benefit2Title', "Pas d'Abonnement"),
      description: t('solAI.benefit2Desc', 'Un investissement unique, sans coût mensuel par utilisateur ni facturation à la requête.'),
    },
    {
      icon: ShieldCheck,
      title: t('solAI.benefit3Title', 'Conformité RGPD'),
      description: t('solAI.benefit3Desc', 'Traitement 100% local : la conformité RGPD est grandement simplifiée pour les données sensibles.'),
    },
    {
      icon: Zap,
      title: t('solAI.benefit4Title', 'Latence Réduite'),
      description: t('solAI.benefit4Desc', 'Le serveur IA est dédié à votre entreprise : réponses quasi instantanées, sans limite de débit.'),
    },
    {
      icon: CloudOff,
      title: t('solAI.benefit5Title', 'Indépendance Cloud'),
      description: t('solAI.benefit5Desc', "Souveraineté numérique totale. Vous ne dépendez plus d'OpenAI, Google ou Microsoft."),
    },
    {
      icon: TrendingUp,
      title: t('solAI.benefit6Title', 'ROI Rapide'),
      description: t('solAI.benefit6Desc', "Rentabilisé en 1 à 2 ans face aux abonnements cloud, puis des années d'économies."),
    },
  ]

  const useCases = [
    {
      icon: HeartPulse,
      sector: t('solAI.useCase1Sector', 'Santé'),
      challenge: t('solAI.useCase1Challenge', 'Exploiter les dossiers patients sans jamais exposer de données médicales.'),
      solution: t('solAI.useCase1Solution', "Résumés de comptes-rendus, aide à la rédaction, analyse documentaire — tout en local."),
      benefit: t('solAI.useCase1Benefit', 'Secret médical préservé, jusqu’à 50% de temps administratif gagné.'),
    },
    {
      icon: Scale,
      sector: t('solAI.useCase2Sector', 'Juridique'),
      challenge: t('solAI.useCase2Challenge', 'Analyser contrats et jurisprudence sans risque de fuite confidentielle.'),
      solution: t('solAI.useCase2Solution', "Analyse contractuelle, recherche jurisprudentielle, rédaction d'actes assistée."),
      benefit: t('solAI.useCase2Benefit', 'Secret professionnel garanti, productivité multipliée par 3.'),
    },
    {
      icon: Landmark,
      sector: t('solAI.useCase3Sector', 'Finance'),
      challenge: t('solAI.useCase3Challenge', 'Traiter des données financières sensibles en toute sécurité.'),
      solution: t('solAI.useCase3Solution', "Analyse financière, détection d'anomalies, reporting et synthèses automatisés."),
      benefit: t('solAI.useCase3Benefit', 'Conformité bancaire respectée, contrôle interne renforcé.'),
    },
    {
      icon: FlaskConical,
      sector: t('solAI.useCase4Sector', 'R&D / Industrie'),
      challenge: t('solAI.useCase4Challenge', 'Protéger les secrets industriels, brevets et innovations.'),
      solution: t('solAI.useCase4Solution', 'Analyse de brevets, documentation technique, veille et synthèse de données R&D.'),
      benefit: t('solAI.useCase4Benefit', 'Propriété intellectuelle sécurisée, innovation accélérée.'),
    },
  ]

  const steps = [
    {
      step: '1',
      icon: Users,
      title: t('solAI.step1Title', 'Audit & Cadrage'),
      description: t('solAI.step1Desc', "Nous analysons vos besoins, cas d'usage et contraintes de confidentialité."),
    },
    {
      step: '2',
      icon: Cpu,
      title: t('solAI.step2Title', 'Dimensionnement'),
      description: t('solAI.step2Desc', 'Choix du matériel (GPU, serveur) et des modèles IA adaptés à votre volumétrie.'),
    },
    {
      step: '3',
      icon: Server,
      title: t('solAI.step3Title', 'Installation sur Site'),
      description: t('solAI.step3Desc', 'Déploiement du serveur IA dans vos locaux, configuration et tests de performance.'),
    },
    {
      step: '4',
      icon: ShieldCheck,
      title: t('solAI.step4Title', 'Formation & Support'),
      description: t('solAI.step4Desc', 'Accompagnement de vos équipes, maintenance et mises à jour incluses.'),
    },
  ]

  const faqs = [
    {
      question: t('solAI.faqQ1', "L'IA remplace-t-elle mes employés ?"),
      answer:
        t('solAI.faqA1', "Non. L'IA Offline est un assistant : elle automatise les tâches répétitives (rédaction, résumés, recherche documentaire) pour que vos équipes se concentrent sur l'essentiel. Elle augmente leur productivité, elle ne les remplace pas."),
    },
    {
      question: t('solAI.faqQ2', 'Mes données sont-elles vraiment à l’abri ?'),
      answer:
        t('solAI.faqA2', "Oui. Le serveur IA est physiquement installé dans vos locaux et fonctionne sans connexion externe. Aucune donnée ne transite par Internet ni par un cloud tiers : c'est la garantie d'une confidentialité totale."),
    },
    {
      question: t('solAI.faqQ3', "Faut-il une connexion Internet pour l'utiliser ?"),
      answer:
        t('solAI.faqA3', "Non. L'IA fonctionne intégralement hors ligne, même en cas de coupure Internet. C'est l'un des grands avantages d'une solution sur site."),
    },
    {
      question: t('solAI.faqQ4', 'Quels sont les délais de mise en place ?'),
      answer:
        t('solAI.faqA4', "Comptez en moyenne 2 à 4 semaines entre l'audit initial et la mise en production, selon la configuration matérielle retenue et le niveau de personnalisation."),
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
              <span className="font-semibold">{t('solAI.heroBadge', "IA Offline — L'innovation signée NETZ")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('solAI.heroTitle', 'Intelligence Artificielle Offline')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              {t('solAI.heroSubtitle', "Déployez la puissance de l'IA directement dans vos locaux. Vos données restent 100% confidentielles, sans aucun transit par le cloud. Conformité RGPD garantie, sans abonnement mensuel.")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('solAI.heroCtaQuote', 'Demander un devis')} <ArrowRight className="ml-2" size={18} />
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
                <h2 className="text-2xl font-bold mb-4">{t('solAI.problemTitle', "Le problème de l'IA cloud")}</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>{t('solAI.problem1', 'Vos données confidentielles transitent par des serveurs étrangers.')}</li>
                  <li>{t('solAI.problem2', 'Abonnements mensuels coûteux par utilisateur et par requête.')}</li>
                  <li>{t('solAI.problem3', 'Conformité RGPD complexe pour les secteurs sensibles.')}</li>
                  <li>{t('solAI.problem4', 'Dépendance totale à un fournisseur et à votre connexion Internet.')}</li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck size={24} className="text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{t('solAI.solutionTitle', "La solution NETZ : l'IA Offline")}</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('solAI.solution1', 'Un serveur IA installé physiquement dans vos locaux.')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('solAI.solution2', 'Vos données ne quittent jamais votre infrastructure.')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('solAI.solution3', 'Investissement unique, sans abonnement récurrent.')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('solAI.solution4', 'Indépendance et souveraineté numérique totales.')}</span>
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
                {t('solAI.benefitsTitle', "Pourquoi choisir l'IA Offline ?")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('solAI.benefitsSubtitle', '6 avantages décisifs pour votre entreprise')}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solAI.useCasesTitle', "Cas d'usage par secteur")}</h2>
              <p className="text-xl text-muted-foreground">
                {t('solAI.useCasesSubtitle', "L'IA Offline transforme les métiers où la confidentialité est essentielle")}
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
                      <div className="font-semibold text-foreground mb-1">{t('solAI.labelChallenge', 'Problématique')}</div>
                      <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-accent mb-1">{t('solAI.labelSolution', 'Solution IA Offline')}</div>
                      <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <div className="font-semibold text-foreground mb-1">{t('solAI.labelBenefit', 'Bénéfice')}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solAI.stepsTitle', 'Comment ça marche ?')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('solAI.stepsSubtitle', "Un déploiement clé en main, de l'audit au support")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <item.icon size={32} />
                  </div>
                  <div className="text-sm font-semibold text-accent mb-1">{t('solAI.stepLabel', 'Étape')} {item.step}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solAI.pricingTitle', 'Un budget adapté à votre taille')}</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                {t('solAI.pricingDesc', 'Nos solutions IA Offline vont de la station de travail pour TPE au serveur multi-GPU pour grandes entreprises.')}
              </p>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                de 5 000€ à 50 000€+
              </div>
              <p className="opacity-90 mb-8">
                {t('solAI.pricingNote', 'Investissement unique • Location possible • Devis gratuit et personnalisé')}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('solAI.pricingCta', 'Obtenir mon devis gratuit')} <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ / Reassurance */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solAI.faqTitle', 'Vos questions, nos réponses')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('solAI.faqSubtitle', "Tout ce qu'il faut savoir avant de se lancer")}
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
              {t('solAI.ctaTitle', "Prêt à déployer l'IA en toute confidentialité ?")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('solAI.ctaSubtitle', 'Audit de vos besoins, devis personnalisé et installation clé en main par nos experts.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('solAI.ctaQuote', 'Demander un devis')} <ArrowRight className="ml-2" size={18} />
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
