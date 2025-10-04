import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Globe, Code, Search, Smartphone, Zap, Shield, CheckCircle, ArrowRight, TrendingUp, Users, Award } from 'lucide-react'

const SolutionWeb = () => {
  const features = [
    {
      icon: Globe,
      title: 'Sites Web Modernes',
      description: 'Design responsive et interface utilisateur intuitive'
    },
    {
      icon: Search,
      title: 'SEO Optimisé',
      description: 'Référencement naturel pour une meilleure visibilité'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Parfaitement adapté à tous les appareils'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Chargement ultra-rapide et expérience fluide'
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'HTTPS, sauvegardes et protection contre les menaces'
    },
    {
      icon: Code,
      title: 'Technologies Modernes',
      description: 'React, Next.js, WordPress et solutions sur-mesure'
    }
  ]

  const packages = [
    {
      name: 'Site Vitrine',
      price: '990€',
      subtitle: 'Idéal pour présenter votre activité',
      features: [
        'Design professionnel et responsive',
        'Jusqu\'à 5 pages',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        'Certificat SSL (HTTPS)',
        'Formation à la gestion',
        'Support 3 mois'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Site Business',
      price: '1990€',
      subtitle: 'Pour développer votre présence en ligne',
      features: [
        'Design sur-mesure premium',
        'Jusqu\'à 10 pages',
        'Blog intégré',
        'SEO avancé',
        'Google Analytics',
        'Réseaux sociaux intégrés',
        'Hébergement 1 an inclus',
        'Support 6 mois',
        'Maintenance incluse'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Site E-commerce',
      price: 'Sur Devis',
      subtitle: 'Vendez en ligne efficacement',
      features: [
        'Boutique en ligne complète',
        'Gestion des produits',
        'Paiement sécurisé',
        'Gestion des stocks',
        'Tableau de bord admin',
        'SEO e-commerce',
        'Formation complète',
        'Support prioritaire 12 mois',
        'Maintenance incluse'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const subscriptionFeatures = [
    'Hébergement haute performance',
    'Mises à jour de sécurité',
    'Sauvegardes automatiques quotidiennes',
    'Support technique prioritaire',
    'Modifications de contenu',
    'Optimisation continue des performances',
    'Monitoring 24/7',
    'Rapports mensuels'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Développement <span className="text-primary">Web & SEO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sites web modernes, fonctionnels et optimisés pour le référencement. Donnez à votre entreprise la visibilité qu'elle mérite.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="gradient-blue text-white">
                Demander un Devis Gratuit <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="https://netz-blog.fr" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Voir Nos Réalisations
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi Choisir Nos Solutions Web ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Des sites web qui convertissent vos visiteurs en clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Forfaits de Développement Web
            </h2>
            <p className="text-xl text-muted-foreground">
              Des solutions adaptées à chaque besoin et budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-primary transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold">
                    ⭐ Le Plus Populaire
                  </div>
                )}
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-full flex items-center justify-center mb-4`}>
                    <Globe size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    {pkg.price !== 'Sur Devis' && <span className="text-muted-foreground"> HT</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'gradient-purple text-white' 
                          : 'gradient-blue text-white'
                      }`}
                    >
                      {pkg.price === 'Sur Devis' ? 'Demander un Devis' : 'Commander'}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              💡 Tous nos forfaits incluent une garantie satisfait ou remboursé de 30 jours
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/10 rounded-full px-6 py-2 mb-4">
                <span className="text-accent font-semibold">🔄 Abonnement Maintenance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Maintenance et Évolution Continue
              </h2>
              <p className="text-xl text-muted-foreground">
                Votre site web toujours à jour, sécurisé et performant
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Formule Maintenance</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">79€</span>
                    <span className="text-xl"> /mois</span>
                  </div>
                  <p className="opacity-90 mb-6">
                    Un site web nécessite un entretien régulier pour rester performant et sécurisé. Notre abonnement vous garantit tranquillité d'esprit.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full">
                      Souscrire Maintenant
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">Inclus dans l'abonnement :</h4>
                <ul className="space-y-3">
                  {subscriptionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm">
                    <strong>💰 Économisez jusqu'à 40%</strong> par rapport à des interventions ponctuelles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Processus de Développement
            </h2>
            <p className="text-xl text-muted-foreground">
              Une méthodologie éprouvée pour votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Analyse', desc: 'Étude de vos besoins et objectifs', icon: Users },
              { step: '2', title: 'Design', desc: 'Maquettes et validation visuelle', icon: Globe },
              { step: '3', title: 'Développement', desc: 'Codage et intégration', icon: Code },
              { step: '4', title: 'Lancement', desc: 'Mise en ligne et formation', icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <TrendingUp size={48} className="text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Sites Web Créés</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Users size={48} className="text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Clients Satisfaits</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Award size={48} className="text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">20+</div>
              <p className="text-muted-foreground">Ans d'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Lancer Votre Projet Web ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discutons de votre projet et trouvons ensemble la solution idéale pour votre entreprise
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Demander un Devis Gratuit
              </Button>
            </Link>
            <a href="tel:+33367310201">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                📞 03 67 31 02 01
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionWeb
