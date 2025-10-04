import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Wrench, CheckCircle, Clock, Shield, Phone, ArrowRight, 
  Laptop, Monitor, HardDrive, Wifi, Printer, Smartphone 
} from 'lucide-react'
import SEO from '@/components/common/SEO'
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema'

const DepannageMaintenance = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Clock,
      title: 'Intervention Rapide',
      description: 'Dépannage sous 24-48h, intervention d\'urgence disponible'
    },
    {
      icon: Shield,
      title: 'Garantie Pièces & Main d\'Œuvre',
      description: 'Toutes nos réparations sont garanties 3 mois'
    },
    {
      icon: Laptop,
      title: 'Sur Site ou en Atelier',
      description: 'Intervention à domicile ou en entreprise, ou réparation en atelier'
    },
    {
      icon: Phone,
      title: 'Support Téléphonique',
      description: 'Assistance technique par téléphone incluse'
    }
  ]

  const services = [
    {
      icon: Laptop,
      title: 'Réparation PC & Mac',
      items: [
        'Diagnostic complet gratuit',
        'Remplacement écran, clavier, batterie',
        'Réparation carte mère, alimentation',
        'Nettoyage et optimisation système'
      ]
    },
    {
      icon: Monitor,
      title: 'Dépannage Matériel',
      items: [
        'Réparation écrans, moniteurs',
        'Dépannage imprimantes',
        'Réparation périphériques',
        'Récupération de données'
      ]
    },
    {
      icon: HardDrive,
      title: 'Maintenance Préventive',
      items: [
        'Nettoyage physique et logiciel',
        'Mise à jour système et drivers',
        'Optimisation performances',
        'Sauvegarde automatique'
      ]
    },
    {
      icon: Wifi,
      title: 'Problèmes Réseau',
      items: [
        'Configuration WiFi',
        'Dépannage connexion Internet',
        'Partage fichiers et imprimantes',
        'Sécurisation réseau domestique'
      ]
    },
    {
      icon: Printer,
      title: 'Imprimantes & Scanners',
      items: [
        'Installation et configuration',
        'Dépannage bourrage papier',
        'Problèmes d\'impression',
        'Remplacement cartouches'
      ]
    },
    {
      icon: Smartphone,
      title: 'Smartphones & Tablettes',
      items: [
        'Réparation écran tactile',
        'Remplacement batterie',
        'Problèmes logiciels',
        'Récupération données'
      ]
    }
  ]

  const pricingPlans = [
    {
      name: 'Diagnostic',
      price: 'Gratuit',
      description: 'Analyse complète du problème',
      features: [
        'Diagnostic approfondi',
        'Devis détaillé',
        'Conseils personnalisés',
        'Sans engagement'
      ],
      highlighted: false
    },
    {
      name: 'Dépannage Standard',
      price: 'À partir de 49€',
      description: 'Réparation en atelier',
      features: [
        'Diagnostic inclus',
        'Réparation en atelier',
        'Garantie 3 mois',
        'Délai 48-72h'
      ],
      highlighted: true
    },
    {
      name: 'Intervention à Domicile',
      price: 'À partir de 79€',
      description: 'Dépannage sur site',
      features: [
        'Déplacement inclus (30km)',
        'Intervention sur place',
        'Garantie 3 mois',
        'Rendez-vous sous 24-48h'
      ],
      highlighted: false
    }
  ]

  const faq = [
    {
      question: 'Quel est le délai d\'intervention ?',
      answer: 'Nous intervenons sous 24 à 48 heures pour les urgences. Pour les réparations en atelier, le délai moyen est de 48 à 72 heures.'
    },
    {
      question: 'Proposez-vous une garantie ?',
      answer: 'Oui, toutes nos réparations sont garanties 3 mois pièces et main d\'œuvre. Les pièces neuves bénéficient de la garantie constructeur.'
    },
    {
      question: 'Intervenez-vous à domicile ?',
      answer: 'Oui, nous nous déplaçons dans un rayon de 30 km autour de Haguenau. Le déplacement est inclus dans le tarif d\'intervention.'
    },
    {
      question: 'Que faire en cas de panne urgente ?',
      answer: 'Contactez-nous immédiatement au 03 67 31 02 01. Nous proposons un service d\'intervention d\'urgence pour les cas critiques.'
    }
  ]

  const breadcrumbItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Dépannage & Maintenance', path: '/services/depannage-maintenance' }
  ]

  return (
    <>
      <SEO 
        title="Dépannage & Maintenance Informatique à Haguenau | NETZ Informatique"
        description="Réparation PC, Mac, imprimantes. Intervention rapide 24-48h. Garantie 3 mois. Diagnostic gratuit. Dépannage à domicile ou en atelier à Haguenau."
        keywords="dépannage informatique Haguenau, réparation PC, réparation Mac, maintenance ordinateur, dépannage imprimante, intervention rapide"
        url="/services/depannage-maintenance"
        type="service"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-blue-100 rounded-full p-4 mb-6">
                <Wrench size={48} className="text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dépannage & Maintenance <span className="text-blue-600">Informatique</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Intervention rapide sous 24-48h pour tous vos problèmes informatiques. 
                Plus de 2772 appareils réparés avec succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="gradient-blue text-white font-semibold">
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <a href="tel:+33367310201">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2" size={20} />
                    03 67 31 02 01
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Services de Dépannage
              </h2>
              <p className="text-xl text-gray-600">
                Une expertise complète pour tous vos équipements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tarifs Transparents
              </h2>
              <p className="text-xl text-gray-600">
                Pas de mauvaise surprise, devis gratuit avant intervention
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-8 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105' 
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <h3 className={`font-bold text-2xl mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </div>
                  <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle 
                          size={20} 
                          className={plan.highlighted ? 'text-green-300' : 'text-green-500'} 
                        />
                        <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-white text-blue-600 hover:bg-blue-50' 
                          : 'gradient-blue text-white'
                      }`}
                    >
                      Demander un Devis
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Questions Fréquentes
              </h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-lg mb-3 text-blue-600">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un Problème Informatique ? Nous Sommes Là !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous dès maintenant pour un diagnostic gratuit et une intervention rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Demander un Devis
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" size={20} />
                  Appeler Maintenant
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DepannageMaintenance
