import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import StructuredData from '@/components/common/StructuredData'
import { Button } from '@/components/ui/button'
import {
  Building2,
  Shield,
  Network,
  BrainCircuit,
  Globe,
  GraduationCap,
  Server,
  Zap,
  Award,
  MapPin,
  Clock,
  CheckCircle,
  Stethoscope,
  Scale,
  Briefcase,
  ArrowRight,
  Phone,
} from 'lucide-react'

const ServiceEnterprise = () => {
  const { t } = useTranslation()
  const pageTitle = t('svcEnt.pageTitle', 'Solutions IT pour entreprises & professionnels')
  const pageDescription =
    t('svcEnt.pageDescription', "Partenaire IT de confiance dans le Grand Est : maintenance et infogérance, cybersécurité & RGPD, cloud & réseaux Microsoft 365, IA Offline, développement web et formation QUALIOPI. Contrats de maintenance dès 79€/mois, surveillance 24/7.")

  const breadcrumbs = [
    { name: t('svcEnt.bcHome', 'Accueil'), url: '/' },
    { name: t('svcEnt.bcServices', 'Services'), url: '/services' },
    { name: t('svcEnt.bcEnt', 'Entreprises'), url: '/services/entreprises' },
  ]

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'IT Services',
    },
    breadcrumbs,
  }

  const valueProps = [
    { icon: Shield, title: t('svcEnt.vp1Title', 'Partenaire IT de confiance'), description: t('svcEnt.vp1Desc', 'Un interlocuteur unique pour toute votre informatique.') },
    { icon: Clock, title: t('svcEnt.vp2Title', 'Contrats de maintenance'), description: t('svcEnt.vp2Desc', 'Forfaits dès 79€/mois avec surveillance 24/7.') },
    { icon: Server, title: t('svcEnt.vp3Title', 'Sécurité & conformité'), description: t('svcEnt.vp3Desc', 'Protection des données et conformité RGPD assurées.') },
  ]

  const services = [
    {
      icon: Building2,
      title: t('svcEnt.svc1Title', 'Maintenance & infogérance'),
      description:
        t('svcEnt.svc1Desc', 'Gestion complète de votre parc informatique, support dédié et interventions proactives. Contrats sur mesure à partir de 79€/mois.'),
      link: '/services/depannage-maintenance',
      linkLabel: t('svcEnt.svc1Link', 'Découvrir nos contrats'),
    },
    {
      icon: Shield,
      title: t('svcEnt.svc2Title', 'Cybersécurité & RGPD'),
      description:
        t('svcEnt.svc2Desc', 'Audit de sécurité, antivirus, pare-feu, sauvegardes et accompagnement RGPD pour protéger votre activité et vos données.'),
      link: '/services/cybersecurite',
      linkLabel: t('svcEnt.svc2Link', 'En savoir plus'),
    },
    {
      icon: Network,
      title: t('svcEnt.svc3Title', 'Cloud & réseaux / Microsoft 365'),
      description:
        t('svcEnt.svc3Desc', 'Migration cloud, déploiement Microsoft 365, conception et sécurisation de votre infrastructure réseau et de vos accès distants.'),
      link: '/services/cloud-reseau',
      linkLabel: t('svcEnt.svc3Link', 'Voir les solutions cloud'),
    },
    {
      icon: BrainCircuit,
      title: t('svcEnt.svc4Title', 'Intelligence Artificielle Offline'),
      description:
        t('svcEnt.svc4Desc', "Déployez une IA 100% confidentielle dans vos locaux. Vos données ne quittent jamais l'entreprise. Conformité RGPD simplifiée."),
      link: '/services/ia-offline',
      linkLabel: t('svcEnt.svc4Link', "Découvrir l'IA Offline"),
    },
    {
      icon: Globe,
      title: t('svcEnt.svc5Title', 'Développement web & SEO'),
      description:
        t('svcEnt.svc5Desc', 'Sites vitrines, e-commerce et applications sur mesure, optimisés pour le référencement et la performance.'),
      link: '/services/web-digital',
      linkLabel: t('svcEnt.svc5Link', 'Voir nos solutions web'),
    },
    {
      icon: GraduationCap,
      title: t('svcEnt.svc6Title', 'Formation professionnelle QUALIOPI'),
      description:
        t('svcEnt.svc6Desc', 'Montez vos équipes en compétences avec nos formations certifiées QUALIOPI (financement OPCO/CPF possible).'),
      link: '/services/formation-professionnelle',
      linkLabel: t('svcEnt.svc6Link', 'Voir les formations'),
    },
  ]

  const reasons = [
    {
      icon: Zap,
      title: t('svcEnt.reason1Title', 'Réactivité'),
      description: t('svcEnt.reason1Desc', 'Interventions rapides et support prioritaire pour limiter les interruptions de votre activité.'),
    },
    {
      icon: Award,
      title: t('svcEnt.reason2Title', 'Expertise certifiée'),
      description: t('svcEnt.reason2Desc', 'Partenaires Microsoft, Cisco et Google : des compétences reconnues et à jour.'),
    },
    {
      icon: MapPin,
      title: t('svcEnt.reason3Title', 'Proximité Grand Est'),
      description: t('svcEnt.reason3Desc', 'Une équipe locale basée à Haguenau, proche de vos équipes et de vos enjeux.'),
    },
    {
      icon: Clock,
      title: t('svcEnt.reason4Title', "35 ans d'expérience"),
      description: t('svcEnt.reason4Desc', 'Une expertise IT solide au service des entreprises et des professionnels depuis des décennies.'),
    },
  ]

  const maintenanceFeatures = [
    t('svcEnt.maintFeat1', 'Surveillance et monitoring 24/7'),
    t('svcEnt.maintFeat2', 'Mises à jour de sécurité automatiques'),
    t('svcEnt.maintFeat3', 'Sauvegardes régulières et plan de reprise'),
    t('svcEnt.maintFeat4', 'Support technique prioritaire dédié'),
    t('svcEnt.maintFeat5', 'Maintenance préventive du parc'),
    t('svcEnt.maintFeat6', 'Reporting et conseils réguliers'),
  ]

  const sectors = [
    {
      icon: Stethoscope,
      sector: t('svcEnt.sector1Name', 'Santé'),
      description: t('svcEnt.sector1Desc', 'Cabinets et professionnels de santé : confidentialité des données patients et conformité renforcée.'),
    },
    {
      icon: Scale,
      sector: t('svcEnt.sector2Name', 'Juridique'),
      description: t('svcEnt.sector2Desc', "Avocats et notaires : secret professionnel préservé, sécurisation des documents sensibles."),
    },
    {
      icon: Briefcase,
      sector: t('svcEnt.sector3Name', 'PME & TPE'),
      description: t('svcEnt.sector3Desc', "Artisans, commerces et PME : une informatique fiable pour vous concentrer sur votre métier."),
    },
  ]

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/entreprises" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2 mb-6">
              <Building2 size={18} />
              <span className="text-sm font-semibold">{t('svcEnt.heroBadge', 'Entreprises & professionnels')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('svcEnt.heroTitle', 'Solutions IT pour entreprises & professionnels')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {t('svcEnt.heroSubtitle', 'Votre partenaire IT de confiance dans le Grand Est : maintenance, cybersécurité, cloud et innovation pour une informatique fiable, sécurisée et performante.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-10">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('svcEnt.heroCtaQuote', 'Demander un devis gratuit')} <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="mr-2" /> 03 67 31 02 01
                </Button>
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {valueProps.map((item, index) => (
                <div key={index} className="bg-primary-foreground/10 rounded-xl p-5 text-left">
                  <item.icon size={28} className="mb-3" />
                  <div className="font-bold mb-1">{item.title}</div>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('svcEnt.servicesTitle', 'Nos services pour les entreprises')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('svcEnt.servicesSubtitle', 'Une offre IT complète pour accompagner votre croissance et sécuriser votre activité.')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border hover-lift flex flex-col"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"
                  >
                    {service.linkLabel} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('svcEnt.whyTitle', 'Pourquoi nous choisir ?')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('svcEnt.whySubtitle', 'Un partenaire local, expert et réactif pour votre informatique.')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Plan Teaser */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-primary-foreground">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-4">
                  <Server size={16} />
                  <span className="text-sm font-semibold">{t('svcEnt.maintBadge', 'Contrat de maintenance')}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('svcEnt.maintTitle', 'Infogérance & surveillance 24/7')}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">79€</span>
                  <span className="text-xl"> {t('svcEnt.maintPerMonth', '/mois')}</span>
                </div>
                <p className="opacity-90 mb-6">
                  {t('svcEnt.maintDesc', 'Confiez-nous la gestion de votre parc informatique. Surveillance proactive, maintenance préventive et support prioritaire pour une tranquillité d\'esprit totale.')}
                </p>
                <Link to="/services/depannage-maintenance">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                    {t('svcEnt.maintCta', 'Découvrir les forfaits')} <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">{t('svcEnt.maintInclTitle', 'Inclus dans nos contrats :')}</h4>
                <ul className="space-y-3">
                  {maintenanceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('svcEnt.sectorsTitle', 'Des solutions adaptées à votre secteur')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('svcEnt.sectorsSubtitle', 'Nous comprenons les enjeux spécifiques de votre métier.')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sectors.map((item, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg border border-border"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.sector}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Building2 size={56} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('svcEnt.ctaTitle', 'Faisons de l\'IT un atout pour votre entreprise')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('svcEnt.ctaSubtitle', 'Audit de vos besoins • Devis personnalisé • Contrats sur mesure dès 79€/mois • Accompagnement local')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('svcEnt.heroCtaQuote', 'Demander un devis gratuit')} <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="mr-2" /> 03 67 31 02 01
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServiceEnterprise
