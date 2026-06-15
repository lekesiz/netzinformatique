import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Wrench, Users, Award, ArrowRight, Phone, Star, ShieldCheck,
  Building2, User, Clock,
} from 'lucide-react'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection'
import PartnersSection from '@/components/home/PartnersSection'
import BoutiqueSection from '@/components/home/BoutiqueSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import SEO from '@/components/common/SEO'
import StructuredData from '@/components/common/StructuredData'

const Home = () => {
  const { t } = useTranslation()

  const stats = [
    { icon: Wrench, value: '2772+', label: t('home.statsRepairs', 'Appareils réparés') },
    { icon: Award, value: '35+', label: t('home.statsExperience', 'Ans d\'expérience') },
    { icon: Users, value: '900+', label: t('home.statsClients', 'Clients satisfaits') },
    { icon: Clock, value: '24-48h', label: t('home.statsSupport', 'Délai d\'intervention') },
  ]

  const audiences = [
    {
      icon: User,
      title: t('home.audienceIndividual', 'Je suis un particulier'),
      desc: t('home.audienceIndividualDesc', 'Dépannage, réparation, formation et conseils.'),
      to: '/services/particuliers',
    },
    {
      icon: Building2,
      title: t('home.audienceBusiness', 'Je suis une entreprise'),
      desc: t('home.audienceBusinessDesc', 'Maintenance, cybersécurité, cloud, IA et infrastructure.'),
      to: '/services/entreprises',
    },
  ]

  return (
    <>
      <SEO url="/" type="website" />
      <StructuredData type="home" />

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
          {/* decorative grid / glow */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInLeft">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-white/20">
                  <ShieldCheck size={16} className="text-accent" />
                  {t('home.heroBadge', 'Expert IT certifié QUALIOPI · Haguenau')}
                </span>
                <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t('home.heroTitlePre', 'Votre partenaire')} <span className="text-accent">{t('home.heroTitleHighlight', 'technologique')}</span> {t('home.heroTitlePost', 'à Haguenau')}
                </h1>
                <p className="mt-5 text-lg md:text-xl text-primary-foreground/80 max-w-xl">
                  {t('home.heroDescPre', 'Dépannage, maintenance, cybersécurité, solutions IA et formation professionnelle.')}
                  <span className="font-semibold text-primary-foreground"> {t('home.heroDescExp', '35 ans d\'expérience')}</span> {t('home.heroDescPost', 'au service des particuliers et des entreprises.')}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link to="/contact">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full sm:w-auto gap-2">
                      {t('home.heroCtaQuote', 'Demander un devis gratuit')}
                      <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <a href="tel:+33367310201">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
                      <Phone size={18} />
                      03 67 31 02 01
                    </Button>
                  </a>
                </div>

                {/* Trust row */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1.5">
                    <span className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                    <span className="font-semibold text-primary-foreground">4,9/5</span>
                  </span>
                  <span className="flex items-center gap-1.5"><Users size={15} className="text-accent" /> {t('home.trustClients', '900+ clients')}</span>
                  <span className="flex items-center gap-1.5"><Clock size={15} className="text-accent" /> {t('home.trustIntervention', 'Intervention 24-48h')}</span>
                </div>
              </div>

              {/* Right: audience path selection (Enterprise Gateway) */}
              <div className="animate-slideInRight">
                <div className="grid gap-4">
                  {audiences.map((a) => (
                    <Link
                      key={a.to}
                      to={a.to}
                      className="group flex items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/15 hover:ring-accent/50"
                    >
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent">
                        <a.icon size={26} />
                      </span>
                      <span className="flex-1">
                        <span className="block font-heading font-semibold text-lg">{a.title}</span>
                        <span className="block text-sm text-primary-foreground/70">{a.desc}</span>
                      </span>
                      <ArrowRight size={20} className="shrink-0 text-primary-foreground/50 transition group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  ))}
                  <div className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 p-4 text-sm text-primary-foreground/70">
                    <Award size={16} className="text-accent" />
                    Microsoft · Cisco · Google Partner · QUALIOPI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon size={36} className="mx-auto mb-3 text-accent" />
                  <div className="text-3xl md:text-4xl font-bold mb-1 font-heading">{stat.value}</div>
                  <div className="text-sm md:text-base text-background/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Partners Section */}
        <PartnersSection />

        {/* Boutique Section */}
        <BoutiqueSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.ctaTitle', 'Prêt à transformer votre IT ?')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/85">
              {t('home.ctaDescription', 'Contactez-nous dès aujourd\'hui pour un diagnostic gratuit et découvrez comment optimiser votre infrastructure informatique.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full sm:w-auto gap-2">
                  {t('common.contactUs', 'Nous contacter')}
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15 w-full sm:w-auto gap-2">
                  <Phone size={20} />
                  {t('common.callNow', 'Appeler maintenant')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
