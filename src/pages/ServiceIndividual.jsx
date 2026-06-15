import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import StructuredData from '@/components/common/StructuredData'
import { Button } from '@/components/ui/button'
import {
  Laptop,
  Wrench,
  HardDrive,
  ShieldCheck,
  Settings,
  ShoppingCart,
  GraduationCap,
  Headset,
  Search,
  FileText,
  CheckCircle,
  Star,
  Users,
  Clock,
  ArrowRight,
  Phone,
} from 'lucide-react'

const ServiceIndividual = () => {
  const { t } = useTranslation()
  const pageTitle = t('svcInd.pageTitle', 'Services informatiques pour particuliers à Haguenau')
  const pageDescription =
    t('svcInd.pageDescription', 'Dépannage et réparation PC/Mac, récupération de données, suppression de virus, installation, vente de matériel et assistance à distance. Diagnostic gratuit, intervention 24-48h, réparations garanties 3 mois.')

  const breadcrumbs = [
    { name: t('svcInd.bcHome', 'Accueil'), url: '/' },
    { name: t('svcInd.bcServices', 'Services'), url: '/services' },
    { name: t('svcInd.bcPart', 'Particuliers'), url: '/services/particuliers' },
  ]

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'IT Support',
    },
    breadcrumbs,
  }

  const reassurances = [
    { icon: Search, title: t('svcInd.reass1Title', 'Diagnostic gratuit'), description: t('svcInd.reass1Desc', 'Établissement précis de la panne sans engagement.') },
    { icon: Clock, title: t('svcInd.reass2Title', 'Intervention 24-48h'), description: t('svcInd.reass2Desc', 'Réactivité maximale, en atelier ou à domicile.') },
    { icon: ShieldCheck, title: t('svcInd.reass3Title', 'Réparations garanties 3 mois'), description: t('svcInd.reass3Desc', 'Toutes nos interventions sont garanties.') },
  ]

  const services = [
    {
      icon: Wrench,
      title: t('svcInd.svc1Title', 'Dépannage & réparation PC/Mac'),
      description:
        t('svcInd.svc1Desc', 'Panne matérielle ou logicielle, écran cassé, surchauffe, lenteurs : nous diagnostiquons et réparons vos ordinateurs Windows et Mac.'),
      link: '/services/depannage-maintenance',
      linkLabel: t('svcInd.svc1Link', 'En savoir plus'),
    },
    {
      icon: HardDrive,
      title: t('svcInd.svc2Title', 'Récupération de données'),
      description:
        t('svcInd.svc2Desc', 'Disque dur en panne, fichiers supprimés, clé USB illisible : nous récupérons vos photos, documents et données précieuses.'),
    },
    {
      icon: ShieldCheck,
      title: t('svcInd.svc3Title', 'Suppression virus & optimisation'),
      description:
        t('svcInd.svc3Desc', 'Élimination des virus, malwares et logiciels indésirables, nettoyage et optimisation pour retrouver un PC rapide et sécurisé.'),
    },
    {
      icon: Settings,
      title: t('svcInd.svc4Title', 'Installation & configuration'),
      description:
        t('svcInd.svc4Desc', "Installation de Windows, macOS, logiciels, imprimantes, box Internet et Wi-Fi. Tout est prêt et configuré pour vous."),
    },
    {
      icon: ShoppingCart,
      title: t('svcInd.svc5Title', 'Vente de matériel & PC sur mesure'),
      description:
        t('svcInd.svc5Desc', 'Ordinateurs, composants et accessoires neufs. Nous assemblons aussi des PC sur mesure adaptés au gaming, à la bureautique ou au multimédia.'),
      link: '/materiel',
      linkLabel: t('svcInd.svc5Link', 'Voir le matériel'),
    },
    {
      icon: GraduationCap,
      title: t('svcInd.svc6Title', 'Formation & initiation'),
      description:
        t('svcInd.svc6Desc', "Cours et initiation à l'informatique, à Internet et aux outils du quotidien, à votre rythme, en toute simplicité."),
      link: '/formation',
      linkLabel: t('svcInd.svc6Link', 'Découvrir les formations'),
    },
    {
      icon: Headset,
      title: t('svcInd.svc7Title', 'Assistance à distance'),
      description:
        t('svcInd.svc7Desc', 'Une aide rapide sans vous déplacer : nous prenons la main sur votre ordinateur pour résoudre votre problème. 60€/h.'),
    },
  ]

  const process = [
    {
      step: '1',
      icon: Search,
      title: t('svcInd.proc1Title', 'Diagnostic gratuit'),
      description: t('svcInd.proc1Desc', "Nous analysons votre matériel et identifions précisément l'origine de la panne, sans frais ni engagement."),
    },
    {
      step: '2',
      icon: FileText,
      title: t('svcInd.proc2Title', 'Devis transparent'),
      description: t('svcInd.proc2Desc', 'Vous recevez un devis clair et détaillé. Aucune intervention payante sans votre accord.'),
    },
    {
      step: '3',
      icon: Wrench,
      title: t('svcInd.proc3Title', 'Intervention rapide'),
      description: t('svcInd.proc3Desc', 'Réparation en atelier ou à domicile sous 24-48h, avec une garantie de 3 mois sur nos interventions.'),
    },
  ]

  const stats = [
    { icon: Star, value: '4,9/5', label: t('svcInd.stat1Label', 'Note moyenne clients') },
    { icon: Users, value: '900+', label: t('svcInd.stat2Label', 'Clients accompagnés') },
    { icon: ShieldCheck, value: '3 mois', label: t('svcInd.stat3Label', 'Garantie sur réparations') },
  ]

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/particuliers" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2 mb-6">
              <Laptop size={18} />
              <span className="text-sm font-semibold">{t('svcInd.heroBadge', 'Particuliers')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('svcInd.heroTitle', 'Services informatiques pour particuliers')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {t('svcInd.heroSubtitle', 'Dépannage, réparation, récupération de données et conseils : un interlocuteur de confiance pour tous vos besoins informatiques à Haguenau et alentours.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-10">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('svcInd.heroCtaQuote', 'Demander un devis gratuit')} <ArrowRight className="ml-2" />
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
              {reassurances.map((item, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('svcInd.servicesTitle', 'Nos services pour les particuliers')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('svcInd.servicesSubtitle', 'Une solution adaptée à chaque situation, expliquée simplement et sans jargon.')}
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
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"
                    >
                      {service.linkLabel} <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('svcInd.processTitle', 'Comment ça se passe ?')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('svcInd.processSubtitle', 'Une démarche simple et transparente, en 3 étapes.')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg border border-border text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
                    {item.step}
                  </div>
                  <item.icon size={28} className="text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('svcInd.trustTitle', 'Ils nous font confiance')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('svcInd.trustSubtitle', 'Un service de proximité reconnu par nos clients particuliers.')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border"
                >
                  <stat.icon size={48} className="text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <CheckCircle size={56} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('svcInd.ctaTitle', 'Un souci avec votre ordinateur ?')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('svcInd.ctaSubtitle', 'Diagnostic gratuit • Devis transparent • Intervention 24-48h • Réparations garanties 3 mois')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('svcInd.heroCtaQuote', 'Demander un devis gratuit')} <ArrowRight className="ml-2" />
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

export default ServiceIndividual
