import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Laptop, Shield, Cloud, Cpu, GraduationCap, Wrench, Users, Award, CheckCircle, ArrowRight, Star, Phone } from 'lucide-react'

const Home = () => {
  const { t } = useTranslation()
  
  const stats = [
    { icon: Wrench, value: '2772+', label: t('home.statsRepairs') },
    { icon: Award, value: '20+', label: t('home.statsExperience') },
    { icon: Users, value: '900+', label: t('home.statsClients') },
    { icon: Award, value: '24/7', label: t('home.statsSupport') },
  ]

  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('home.heroTitle')} <span className="text-primary">{t('home.heroTitleHighlight')}</span> {t('home.heroLocation')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t('home.heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-green text-white font-semibold w-full sm:w-auto">
                    {t('home.getFreeQuote')}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {t('home.discoverServices')}
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <Phone className="text-primary" size={20} />
                  <a href="tel:+33389992501" className="font-semibold hover:text-primary transition">
                    0 8 99 25 01 51
                  </a>
                </div>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {t('home.quickIntervention')}
                </span>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 hover-lift">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Laptop size={120} className="text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">20+</span>
                  <span className="text-xs">ans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fadeIn">
                <stat.icon size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-background/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('home.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto">
                {t('common.contactUs')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <a href="tel:+33389992501">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Phone className="mr-2" size={20} />
                {t('common.callNow')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
