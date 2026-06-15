import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import StructuredData from '@/components/common/StructuredData'
import { Button } from '@/components/ui/button'
import {
  Cloud,
  Server,
  ShieldCheck,
  RefreshCw,
  Users,
  Database,
  Globe,
  TrendingDown,
  Layers,
  Mail,
  HardDrive,
  Network,
  CheckCircle,
  ArrowRight,
  Phone,
  Search,
  ClipboardList,
  Rocket,
  LifeBuoy,
} from 'lucide-react'

const SolutionCloud = () => {
  const { t } = useTranslation()
  const pageTitle = t('solCloud.pageTitle', 'Cloud Computing & Infrastructure | Migration, Microsoft 365 - NETZ')
  const pageDescription =
    t('solCloud.pageDescription', "Migration cloud, Microsoft 365, hébergement, sauvegarde et PRA, infrastructure hybride. NETZ Informatique accompagne les entreprises de Haguenau et d'Alsace dans leur transformation cloud.")

  const breadcrumbs = [
    { name: t('solCloud.breadcrumbHome', 'Accueil'), url: '/' },
    { name: t('solCloud.breadcrumbSolutions', 'Solutions'), url: '/solutions' },
    { name: t('solCloud.breadcrumbCloud', 'Cloud Computing'), url: '/solutions/cloud' },
  ]

  const serviceData = {
    service: {
      name: t('solCloud.serviceName', 'Cloud Computing & Infrastructure'),
      description: pageDescription,
      type: 'CloudComputingService',
    },
    breadcrumbs,
  }

  const benefits = [
    {
      icon: Globe,
      title: t('solCloud.benefit1Title', 'Accessibilité Partout'),
      description: t('solCloud.benefit1Desc', 'Accédez à vos fichiers et applications depuis n\'importe où, sur tous vos appareils.'),
    },
    {
      icon: RefreshCw,
      title: t('solCloud.benefit2Title', 'Sauvegardes Automatiques'),
      description: t('solCloud.benefit2Desc', 'Vos données sont sauvegardées en continu, sans intervention manuelle.'),
    },
    {
      icon: Layers,
      title: t('solCloud.benefit3Title', 'Scalabilité'),
      description: t('solCloud.benefit3Desc', 'Augmentez ou réduisez vos ressources à la demande, selon votre activité.'),
    },
    {
      icon: ShieldCheck,
      title: t('solCloud.benefit4Title', 'Sécurité Renforcée'),
      description: t('solCloud.benefit4Desc', 'Chiffrement, authentification multifacteur et conformité RGPD intégrés.'),
    },
    {
      icon: TrendingDown,
      title: t('solCloud.benefit5Title', 'Réduction des Coûts'),
      description: t('solCloud.benefit5Desc', 'Plus de serveurs à entretenir : vous ne payez que ce que vous utilisez.'),
    },
    {
      icon: Users,
      title: t('solCloud.benefit6Title', 'Collaboration M365'),
      description: t('solCloud.benefit6Desc', 'Travaillez à plusieurs en temps réel avec Teams, SharePoint et OneDrive.'),
    },
  ]

  const services = [
    {
      icon: Cloud,
      title: t('solCloud.service1Title', 'Migration Cloud'),
      description:
        t('solCloud.service1Desc', 'Transfert sécurisé de vos données et applications vers le cloud, sans interruption de votre activité.'),
      points: [t('solCloud.service1Pt1', 'Audit de l\'existant'), t('solCloud.service1Pt2', 'Plan de migration'), t('solCloud.service1Pt3', 'Bascule sans coupure'), t('solCloud.service1Pt4', 'Validation post-migration')],
    },
    {
      icon: Mail,
      title: t('solCloud.service2Title', 'Microsoft 365'),
      description:
        t('solCloud.service2Desc', 'Déploiement et gestion complète de la suite Microsoft 365 : messagerie, Office, Teams et stockage.'),
      points: [t('solCloud.service2Pt1', 'Exchange Online'), t('solCloud.service2Pt2', 'Teams & SharePoint'), t('solCloud.service2Pt3', 'OneDrive Entreprise'), t('solCloud.service2Pt4', 'Gestion des licences')],
    },
    {
      icon: Server,
      title: t('solCloud.service3Title', 'Hébergement'),
      description:
        t('solCloud.service3Desc', 'Hébergement haute disponibilité pour vos sites, applications et serveurs métiers.'),
      points: [t('solCloud.service3Pt1', 'Serveurs dédiés ou mutualisés'), t('solCloud.service3Pt2', 'Certificats SSL'), t('solCloud.service3Pt3', 'Monitoring 24/7'), t('solCloud.service3Pt4', 'Haute disponibilité')],
    },
    {
      icon: HardDrive,
      title: t('solCloud.service4Title', 'Sauvegarde & PRA'),
      description:
        t('solCloud.service4Desc', 'Plan de reprise d\'activité et sauvegardes externalisées pour protéger votre entreprise.'),
      points: [t('solCloud.service4Pt1', 'Sauvegardes chiffrées'), t('solCloud.service4Pt2', 'Restauration rapide'), t('solCloud.service4Pt3', 'Plan de reprise (PRA)'), t('solCloud.service4Pt4', 'Tests réguliers')],
    },
    {
      icon: Network,
      title: t('solCloud.service5Title', 'Cloud Hybride'),
      description:
        t('solCloud.service5Desc', 'Combinez le meilleur du cloud et de votre infrastructure locale pour plus de flexibilité.'),
      points: [t('solCloud.service5Pt1', 'Architecture sur-mesure'), t('solCloud.service5Pt2', 'Interconnexion sécurisée'), t('solCloud.service5Pt3', 'Données sensibles en local'), t('solCloud.service5Pt4', 'Évolutivité')],
    },
    {
      icon: Database,
      title: t('solCloud.service6Title', 'Infrastructure & Réseau'),
      description:
        t('solCloud.service6Desc', 'Conception, déploiement et supervision de votre infrastructure IT et de votre réseau.'),
      points: [t('solCloud.service6Pt1', 'Architecture réseau'), t('solCloud.service6Pt2', 'Virtualisation'), t('solCloud.service6Pt3', 'VPN sécurisé'), t('solCloud.service6Pt4', 'Supervision proactive')],
    },
  ]

  const steps = [
    {
      step: '1',
      icon: Search,
      title: t('solCloud.step1Title', 'Audit'),
      description: t('solCloud.step1Desc', 'Analyse de votre infrastructure actuelle et de vos besoins métiers.'),
    },
    {
      step: '2',
      icon: ClipboardList,
      title: t('solCloud.step2Title', 'Planification'),
      description: t('solCloud.step2Desc', 'Conception d\'une architecture cloud adaptée et d\'un plan de migration.'),
    },
    {
      step: '3',
      icon: Rocket,
      title: t('solCloud.step3Title', 'Déploiement'),
      description: t('solCloud.step3Desc', 'Migration et mise en service, sans interruption de votre activité.'),
    },
    {
      step: '4',
      icon: LifeBuoy,
      title: t('solCloud.step4Title', 'Accompagnement'),
      description: t('solCloud.step4Desc', 'Formation, supervision et support technique en continu.'),
    },
  ]

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/solutions/cloud" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2 mb-6">
              <Cloud size={20} />
              <span className="font-semibold">{t('solCloud.heroBadge', 'Cloud & Infrastructure')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('solCloud.heroTitle', 'Cloud Computing & Infrastructure')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              {t('solCloud.heroSubtitle', 'Migration cloud, Microsoft 365, hébergement, sauvegarde et infrastructure hybride. NETZ Informatique accompagne votre entreprise vers une informatique plus agile, sécurisée et accessible partout.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('solCloud.heroCtaQuote', 'Demander un devis')} <ArrowRight className="ml-2" size={18} />
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

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('solCloud.benefitsTitle', 'Pourquoi passer au cloud ?')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('solCloud.benefitsSubtitle', 'Des bénéfices concrets pour votre productivité et votre sérénité')}
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

        {/* Services */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solCloud.servicesTitle', 'Nos services cloud')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('solCloud.servicesSubtitle', 'Une offre complète, de la migration à la supervision')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border flex flex-col"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solCloud.processTitle', 'Notre méthode')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('solCloud.processSubtitle', 'Une migration maîtrisée, étape par étape')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <item.icon size={32} />
                  </div>
                  <div className="text-sm font-semibold text-accent mb-1">{t('solCloud.stepLabel', 'Étape')} {item.step}</div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-primary-foreground text-center shadow-xl">
              <Cloud size={48} className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('solCloud.pricingTitle', 'Une solution adaptée à votre entreprise')}
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                {t('solCloud.pricingDesc', 'Chaque projet cloud est unique. Nous établissons un devis sur mesure après un audit gratuit de votre infrastructure, avec un accompagnement complet à chaque étape de votre transformation.')}
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-8">
                {t('solCloud.pricingNote', 'Tarifs sur devis • Audit gratuit')}
              </div>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('solCloud.pricingCta', 'Demander un devis')} <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Server size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('solCloud.ctaTitle', 'Prêt à moderniser votre infrastructure ?')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('solCloud.ctaSubtitle', 'Discutons de votre projet cloud et construisons ensemble une infrastructure fiable, sécurisée et évolutive.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('solCloud.ctaQuote', 'Demander un devis')} <ArrowRight className="ml-2" size={18} />
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

export default SolutionCloud
