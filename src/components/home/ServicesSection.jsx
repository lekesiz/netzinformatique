import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { 
  Wrench, Cpu, Network, Brain, Shield, Cloud, Code, GraduationCap, ArrowRight 
} from 'lucide-react'
import { services } from '@/data/services'

const iconMap = {
  Wrench, Cpu, Network, Brain, Shield, Cloud, Code, GraduationCap
}

const ServicesSection = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.servicesTitle', 'Nos')} <span className="text-primary">{t('home.servicesTitleHighlight', 'Services')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('home.servicesDescription', 'Des solutions informatiques complètes pour particuliers et entreprises')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 border border-gray-100 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  {IconComponent && <IconComponent size={32} className="text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title[currentLang] || service.title.fr}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description[currentLang] || service.description.fr}
                </p>
                <Link to={service.link}>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    {t('common.learnMore', 'En savoir plus')}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                {service.featured && (
                  <div className="mt-3">
                    <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {t('common.exclusive', 'Exclusif')}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="gradient-blue text-white font-semibold">
              {t('home.viewAllServices', 'Voir tous nos services')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
