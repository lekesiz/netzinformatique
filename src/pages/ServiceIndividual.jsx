import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Laptop, Wrench, HardDrive, ArrowRight } from 'lucide-react'

const ServiceIndividual = () => {
  const { t } = useTranslation()
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services pour <span className="text-primary">Particuliers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solutions informatiques personnalisées pour vos besoins quotidiens
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <Laptop size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">PC Sur Mesure</h3>
              <p className="text-muted-foreground mb-6">
                Configuration personnalisée adaptée à vos besoins gaming, bureautique ou multimédia
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <Wrench size={48} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Dépannage Rapide</h3>
              <p className="text-muted-foreground mb-6">
                Intervention sous 24-48h pour tous vos problèmes informatiques
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
              <HardDrive size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Récupération de Données</h3>
              <p className="text-muted-foreground mb-6">
                Sauvegarde et récupération de vos données précieuses
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="gradient-green text-white">
                {t('common.contactUs')} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceIndividual
