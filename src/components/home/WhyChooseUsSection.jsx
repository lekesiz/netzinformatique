import { useTranslation } from 'react-i18next'
import { Award, MapPin, Shield, Users, Certificate, Leaf } from 'lucide-react'
import { whyChooseUs } from '@/data/services'

const iconMap = {
  Award, MapPin, Shield, Users, Certificate, Leaf
}

const WhyChooseUsSection = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.whyChooseUsTitle', 'Pourquoi Choisir')} <span className="text-primary">{t('home.whyChooseUsTitleHighlight', 'NETZ ?')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('home.whyChooseUsDescription', 'Votre partenaire IT de confiance depuis plus de 20 ans')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 gradient-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent size={32} className="text-white" />}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title[currentLang] || item.title.fr}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description[currentLang] || item.description.fr}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
