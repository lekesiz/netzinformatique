import { Link } from 'react-router-dom'
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
  const pageTitle = 'Cloud Computing & Infrastructure | Migration, Microsoft 365 - NETZ'
  const pageDescription =
    "Migration cloud, Microsoft 365, hébergement, sauvegarde et PRA, infrastructure hybride. NETZ Informatique accompagne les entreprises de Haguenau et d'Alsace dans leur transformation cloud."

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Cloud Computing', url: '/solutions/cloud' },
  ]

  const serviceData = {
    service: {
      name: 'Cloud Computing & Infrastructure',
      description: pageDescription,
      type: 'CloudComputingService',
    },
    breadcrumbs,
  }

  const benefits = [
    {
      icon: Globe,
      title: 'Accessibilité Partout',
      description: 'Accédez à vos fichiers et applications depuis n\'importe où, sur tous vos appareils.',
    },
    {
      icon: RefreshCw,
      title: 'Sauvegardes Automatiques',
      description: 'Vos données sont sauvegardées en continu, sans intervention manuelle.',
    },
    {
      icon: Layers,
      title: 'Scalabilité',
      description: 'Augmentez ou réduisez vos ressources à la demande, selon votre activité.',
    },
    {
      icon: ShieldCheck,
      title: 'Sécurité Renforcée',
      description: 'Chiffrement, authentification multifacteur et conformité RGPD intégrés.',
    },
    {
      icon: TrendingDown,
      title: 'Réduction des Coûts',
      description: 'Plus de serveurs à entretenir : vous ne payez que ce que vous utilisez.',
    },
    {
      icon: Users,
      title: 'Collaboration M365',
      description: 'Travaillez à plusieurs en temps réel avec Teams, SharePoint et OneDrive.',
    },
  ]

  const services = [
    {
      icon: Cloud,
      title: 'Migration Cloud',
      description:
        'Transfert sécurisé de vos données et applications vers le cloud, sans interruption de votre activité.',
      points: ['Audit de l\'existant', 'Plan de migration', 'Bascule sans coupure', 'Validation post-migration'],
    },
    {
      icon: Mail,
      title: 'Microsoft 365',
      description:
        'Déploiement et gestion complète de la suite Microsoft 365 : messagerie, Office, Teams et stockage.',
      points: ['Exchange Online', 'Teams & SharePoint', 'OneDrive Entreprise', 'Gestion des licences'],
    },
    {
      icon: Server,
      title: 'Hébergement',
      description:
        'Hébergement haute disponibilité pour vos sites, applications et serveurs métiers.',
      points: ['Serveurs dédiés ou mutualisés', 'Certificats SSL', 'Monitoring 24/7', 'Haute disponibilité'],
    },
    {
      icon: HardDrive,
      title: 'Sauvegarde & PRA',
      description:
        'Plan de reprise d\'activité et sauvegardes externalisées pour protéger votre entreprise.',
      points: ['Sauvegardes chiffrées', 'Restauration rapide', 'Plan de reprise (PRA)', 'Tests réguliers'],
    },
    {
      icon: Network,
      title: 'Cloud Hybride',
      description:
        'Combinez le meilleur du cloud et de votre infrastructure locale pour plus de flexibilité.',
      points: ['Architecture sur-mesure', 'Interconnexion sécurisée', 'Données sensibles en local', 'Évolutivité'],
    },
    {
      icon: Database,
      title: 'Infrastructure & Réseau',
      description:
        'Conception, déploiement et supervision de votre infrastructure IT et de votre réseau.',
      points: ['Architecture réseau', 'Virtualisation', 'VPN sécurisé', 'Supervision proactive'],
    },
  ]

  const steps = [
    {
      step: '1',
      icon: Search,
      title: 'Audit',
      description: 'Analyse de votre infrastructure actuelle et de vos besoins métiers.',
    },
    {
      step: '2',
      icon: ClipboardList,
      title: 'Planification',
      description: 'Conception d\'une architecture cloud adaptée et d\'un plan de migration.',
    },
    {
      step: '3',
      icon: Rocket,
      title: 'Déploiement',
      description: 'Migration et mise en service, sans interruption de votre activité.',
    },
    {
      step: '4',
      icon: LifeBuoy,
      title: 'Accompagnement',
      description: 'Formation, supervision et support technique en continu.',
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
              <span className="font-semibold">Cloud & Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Computing & Infrastructure
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Migration cloud, Microsoft 365, hébergement, sauvegarde et infrastructure hybride.
              NETZ Informatique accompagne votre entreprise vers une informatique plus agile,
              sécurisée et accessible partout.
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

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi passer au cloud ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Des bénéfices concrets pour votre productivité et votre sérénité
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services cloud</h2>
              <p className="text-xl text-muted-foreground">
                Une offre complète, de la migration à la supervision
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre méthode</h2>
              <p className="text-xl text-muted-foreground">
                Une migration maîtrisée, étape par étape
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
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-primary-foreground text-center shadow-xl">
              <Cloud size={48} className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Une solution adaptée à votre entreprise
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Chaque projet cloud est unique. Nous établissons un devis sur mesure après un
                audit gratuit de votre infrastructure, avec un accompagnement complet à chaque
                étape de votre transformation.
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-8">
                Tarifs sur devis • Audit gratuit
              </div>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Demander un devis <ArrowRight className="ml-2" size={18} />
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
              Prêt à moderniser votre infrastructure ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Discutons de votre projet cloud et construisons ensemble une infrastructure fiable,
              sécurisée et évolutive.
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

export default SolutionCloud
