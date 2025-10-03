import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Building2, Shield, Network, ArrowRight } from 'lucide-react'

const ServiceEnterprise = () => {
  const { t } = useTranslation()
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services pour <span className="text-primary">Entreprises</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solutions IT complètes pour optimiser votre activité professionnelle
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <Building2 size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Maintenance IT</h3>
              <p className="text-muted-foreground mb-6">
                Contrats de maintenance sur mesure avec support technique dédié
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <Network size={48} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Infrastructure Réseau</h3>
              <p className="text-muted-foreground mb-6">
                Conception et installation d'infrastructures réseau performantes
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <Shield size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Cybersécurité</h3>
              <p className="text-muted-foreground mb-6">
                Protection avancée contre les menaces numériques
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="gradient-blue text-white">
                {t('common.getQuote')} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceEnterprise
