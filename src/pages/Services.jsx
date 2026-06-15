import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import SEO from '@/components/common/SEO'
import { Users, Building2, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const { t } = useTranslation()
  return (
    <div>
      <SEO
        title={t('services.seoTitle', 'Nos Services Informatiques | NETZ Informatique')}
        description={t('services.seoDescription', 'Des solutions technologiques complètes pour particuliers et entreprises : dépannage, maintenance IT, infrastructure réseau et cybersécurité.')}
        url="/services"
      />
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.heroTitlePre', 'Nos')} <span className="text-accent">{t('services.heroTitleHighlight', 'Services')}</span> {t('services.heroTitlePost', 'Informatiques')}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t('services.heroSubtitle', 'Des solutions technologiques complètes pour particuliers et entreprises')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Users size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('services.partTitle', 'Services pour Particuliers')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('services.partDesc', 'Solutions personnalisées pour vos besoins informatiques quotidiens')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>{t('services.partFeat1', 'Dépannage et réparation rapide')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>{t('services.partFeat2', 'PC sur mesure et gaming')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>{t('services.partFeat3', 'Installation et configuration')}</span>
                </li>
              </ul>
              <Link to="/services/particuliers">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full">
                  {t('services.discover', 'Découvrir')} <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Building2 size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('services.entTitle', 'Services pour Entreprises')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('services.entDesc', 'Solutions IT complètes pour optimiser votre activité professionnelle')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>{t('services.entFeat1', 'Maintenance IT et contrats')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>{t('services.entFeat2', 'Infrastructure réseau')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>{t('services.entFeat3', 'Cybersécurité avancée')}</span>
                </li>
              </ul>
              <Link to="/services/entreprises">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full">
                  {t('services.discover', 'Découvrir')} <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
