import { Link } from 'react-router-dom'
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
  const pageTitle = 'Solutions IT pour entreprises & professionnels'
  const pageDescription =
    "Partenaire IT de confiance dans le Grand Est : maintenance et infogérance, cybersécurité & RGPD, cloud & réseaux Microsoft 365, IA Offline, développement web et formation QUALIOPI. Contrats de maintenance dès 79€/mois, surveillance 24/7."

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Entreprises', url: '/services/entreprises' },
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
    { icon: Shield, title: 'Partenaire IT de confiance', description: 'Un interlocuteur unique pour toute votre informatique.' },
    { icon: Clock, title: 'Contrats de maintenance', description: 'Forfaits dès 79€/mois avec surveillance 24/7.' },
    { icon: Server, title: 'Sécurité & conformité', description: 'Protection des données et conformité RGPD assurées.' },
  ]

  const services = [
    {
      icon: Building2,
      title: 'Maintenance & infogérance',
      description:
        'Gestion complète de votre parc informatique, support dédié et interventions proactives. Contrats sur mesure à partir de 79€/mois.',
      link: '/services/depannage-maintenance',
      linkLabel: 'Découvrir nos contrats',
    },
    {
      icon: Shield,
      title: 'Cybersécurité & RGPD',
      description:
        'Audit de sécurité, antivirus, pare-feu, sauvegardes et accompagnement RGPD pour protéger votre activité et vos données.',
      link: '/services/cybersecurite',
      linkLabel: 'En savoir plus',
    },
    {
      icon: Network,
      title: 'Cloud & réseaux / Microsoft 365',
      description:
        'Migration cloud, déploiement Microsoft 365, conception et sécurisation de votre infrastructure réseau et de vos accès distants.',
      link: '/services/cloud-reseau',
      linkLabel: 'Voir les solutions cloud',
    },
    {
      icon: BrainCircuit,
      title: 'Intelligence Artificielle Offline',
      description:
        "Déployez une IA 100% confidentielle dans vos locaux. Vos données ne quittent jamais l'entreprise. Conformité RGPD simplifiée.",
      link: '/services/ia-offline',
      linkLabel: "Découvrir l'IA Offline",
    },
    {
      icon: Globe,
      title: 'Développement web & SEO',
      description:
        'Sites vitrines, e-commerce et applications sur mesure, optimisés pour le référencement et la performance.',
      link: '/services/web-digital',
      linkLabel: 'Voir nos solutions web',
    },
    {
      icon: GraduationCap,
      title: 'Formation professionnelle QUALIOPI',
      description:
        'Montez vos équipes en compétences avec nos formations certifiées QUALIOPI (financement OPCO/CPF possible).',
      link: '/services/formation-professionnelle',
      linkLabel: 'Voir les formations',
    },
  ]

  const reasons = [
    {
      icon: Zap,
      title: 'Réactivité',
      description: 'Interventions rapides et support prioritaire pour limiter les interruptions de votre activité.',
    },
    {
      icon: Award,
      title: 'Expertise certifiée',
      description: 'Partenaires Microsoft, Cisco et Google : des compétences reconnues et à jour.',
    },
    {
      icon: MapPin,
      title: 'Proximité Grand Est',
      description: 'Une équipe locale basée à Haguenau, proche de vos équipes et de vos enjeux.',
    },
    {
      icon: Clock,
      title: "35 ans d'expérience",
      description: 'Une expertise IT solide au service des entreprises et des professionnels depuis des décennies.',
    },
  ]

  const maintenanceFeatures = [
    'Surveillance et monitoring 24/7',
    'Mises à jour de sécurité automatiques',
    'Sauvegardes régulières et plan de reprise',
    'Support technique prioritaire dédié',
    'Maintenance préventive du parc',
    'Reporting et conseils réguliers',
  ]

  const sectors = [
    {
      icon: Stethoscope,
      sector: 'Santé',
      description: 'Cabinets et professionnels de santé : confidentialité des données patients et conformité renforcée.',
    },
    {
      icon: Scale,
      sector: 'Juridique',
      description: "Avocats et notaires : secret professionnel préservé, sécurisation des documents sensibles.",
    },
    {
      icon: Briefcase,
      sector: 'PME & TPE',
      description: "Artisans, commerces et PME : une informatique fiable pour vous concentrer sur votre métier.",
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
              <span className="text-sm font-semibold">Entreprises & professionnels</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions IT pour entreprises & professionnels
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Votre partenaire IT de confiance dans le Grand Est : maintenance, cybersécurité, cloud et innovation pour
              une informatique fiable, sécurisée et performante.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-10">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Demander un devis gratuit <ArrowRight className="ml-2" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services pour les entreprises</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une offre IT complète pour accompagner votre croissance et sécuriser votre activité.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un partenaire local, expert et réactif pour votre informatique.
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
                  <span className="text-sm font-semibold">Contrat de maintenance</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Infogérance & surveillance 24/7</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">79€</span>
                  <span className="text-xl"> /mois</span>
                </div>
                <p className="opacity-90 mb-6">
                  Confiez-nous la gestion de votre parc informatique. Surveillance proactive, maintenance préventive et
                  support prioritaire pour une tranquillité d'esprit totale.
                </p>
                <Link to="/services/depannage-maintenance">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                    Découvrir les forfaits <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">Inclus dans nos contrats :</h4>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Des solutions adaptées à votre secteur</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous comprenons les enjeux spécifiques de votre métier.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Faisons de l'IT un atout pour votre entreprise</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Audit de vos besoins • Devis personnalisé • Contrats sur mesure dès 79€/mois • Accompagnement local
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Demander un devis gratuit <ArrowRight className="ml-2" />
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
