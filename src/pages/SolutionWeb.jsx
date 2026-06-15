import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Globe, Code, Search, Smartphone, Zap, Shield, CheckCircle, ArrowRight, TrendingUp, Users, Award, Star, RefreshCw, Lightbulb, Wallet, Phone } from 'lucide-react'

const SolutionWeb = () => {
  const { t } = useTranslation()
  const features = [
    {
      icon: Globe,
      title: t('solWeb.feature1Title', 'Sites Web Modernes'),
      description: t('solWeb.feature1Desc', 'Design responsive et interface utilisateur intuitive')
    },
    {
      icon: Search,
      title: t('solWeb.feature2Title', 'SEO Optimisé'),
      description: t('solWeb.feature2Desc', 'Référencement naturel pour une meilleure visibilité')
    },
    {
      icon: Smartphone,
      title: t('solWeb.feature3Title', 'Mobile First'),
      description: t('solWeb.feature3Desc', 'Parfaitement adapté à tous les appareils')
    },
    {
      icon: Zap,
      title: t('solWeb.feature4Title', 'Performance'),
      description: t('solWeb.feature4Desc', 'Chargement ultra-rapide et expérience fluide')
    },
    {
      icon: Shield,
      title: t('solWeb.feature5Title', 'Sécurisé'),
      description: t('solWeb.feature5Desc', 'HTTPS, sauvegardes et protection contre les menaces')
    },
    {
      icon: Code,
      title: t('solWeb.feature6Title', 'Technologies Modernes'),
      description: t('solWeb.feature6Desc', 'React, Next.js, WordPress et solutions sur-mesure')
    }
  ]

  const packages = [
    {
      name: t('solWeb.pkg1Name', 'Site Vitrine'),
      price: '990€',
      subtitle: t('solWeb.pkg1Subtitle', 'Idéal pour présenter votre activité'),
      features: [
        t('solWeb.pkg1Feat1', 'Design professionnel et responsive'),
        t('solWeb.pkg1Feat2', 'Jusqu\'à 5 pages'),
        t('solWeb.pkg1Feat3', 'Formulaire de contact'),
        t('solWeb.pkg1Feat4', 'Optimisation SEO de base'),
        t('solWeb.pkg1Feat5', 'Hébergement 1 an inclus'),
        t('solWeb.pkg1Feat6', 'Certificat SSL (HTTPS)'),
        t('solWeb.pkg1Feat7', 'Formation à la gestion'),
        t('solWeb.pkg1Feat8', 'Support 3 mois')
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: t('solWeb.pkg2Name', 'Site Business'),
      price: '1990€',
      subtitle: t('solWeb.pkg2Subtitle', 'Pour développer votre présence en ligne'),
      features: [
        t('solWeb.pkg2Feat1', 'Design sur-mesure premium'),
        t('solWeb.pkg2Feat2', 'Jusqu\'à 10 pages'),
        t('solWeb.pkg2Feat3', 'Blog intégré'),
        t('solWeb.pkg2Feat4', 'SEO avancé'),
        t('solWeb.pkg2Feat5', 'Google Analytics'),
        t('solWeb.pkg2Feat6', 'Réseaux sociaux intégrés'),
        t('solWeb.pkg2Feat7', 'Hébergement 1 an inclus'),
        t('solWeb.pkg2Feat8', 'Support 6 mois'),
        t('solWeb.pkg2Feat9', 'Maintenance incluse')
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: t('solWeb.pkg3Name', 'Site E-commerce'),
      price: 'Sur Devis',
      subtitle: t('solWeb.pkg3Subtitle', 'Vendez en ligne efficacement'),
      features: [
        t('solWeb.pkg3Feat1', 'Boutique en ligne complète'),
        t('solWeb.pkg3Feat2', 'Gestion des produits'),
        t('solWeb.pkg3Feat3', 'Paiement sécurisé'),
        t('solWeb.pkg3Feat4', 'Gestion des stocks'),
        t('solWeb.pkg3Feat5', 'Tableau de bord admin'),
        t('solWeb.pkg3Feat6', 'SEO e-commerce'),
        t('solWeb.pkg3Feat7', 'Formation complète'),
        t('solWeb.pkg3Feat8', 'Support prioritaire 12 mois'),
        t('solWeb.pkg3Feat9', 'Maintenance incluse')
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const subscriptionFeatures = [
    t('solWeb.subFeat1', 'Hébergement haute performance'),
    t('solWeb.subFeat2', 'Mises à jour de sécurité'),
    t('solWeb.subFeat3', 'Sauvegardes automatiques quotidiennes'),
    t('solWeb.subFeat4', 'Support technique prioritaire'),
    t('solWeb.subFeat5', 'Modifications de contenu'),
    t('solWeb.subFeat6', 'Optimisation continue des performances'),
    t('solWeb.subFeat7', 'Monitoring 24/7'),
    t('solWeb.subFeat8', 'Rapports mensuels')
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('solWeb.heroTitlePrefix', 'Développement')} <span className="text-primary">{t('solWeb.heroTitleHighlight', 'Web & SEO')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('solWeb.heroSubtitle', 'Sites web modernes, fonctionnels et optimisés pour le référencement. Donnez à votre entreprise la visibilité qu\'elle mérite.')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="gradient-blue text-white">
                {t('solWeb.heroCtaQuote', 'Demander un Devis Gratuit')} <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="https://netz-blog.fr" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                {t('solWeb.heroCtaPortfolio', 'Voir Nos Réalisations')}
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
              {t('solWeb.featuresTitle', 'Pourquoi Choisir Nos Solutions Web ?')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('solWeb.featuresSubtitle', 'Des sites web qui convertissent vos visiteurs en clients')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
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
              {t('solWeb.packagesTitle', 'Nos Forfaits de Développement Web')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('solWeb.packagesSubtitle', 'Des solutions adaptées à chaque besoin et budget')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-primary transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold flex items-center justify-center gap-2">
                    <Star size={16} className="fill-current" /> {t('solWeb.popularBadge', 'Le Plus Populaire')}
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
                    {pkg.price !== 'Sur Devis' && <span className="text-muted-foreground"> {t('solWeb.priceHt', 'HT')}</span>}
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
                      {pkg.price === 'Sur Devis' ? t('solWeb.btnQuote', 'Demander un Devis') : t('solWeb.btnOrder', 'Commander')}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground inline-flex items-center gap-2">
              <Lightbulb size={18} className="text-accent" /> {t('solWeb.guaranteeNote', 'Tous nos forfaits incluent une garantie satisfait ou remboursé de 30 jours')}
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
                <span className="text-accent font-semibold inline-flex items-center gap-2"><RefreshCw size={18} /> {t('solWeb.subBadge', 'Abonnement Maintenance')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('solWeb.subTitle', 'Maintenance et Évolution Continue')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('solWeb.subSubtitle', 'Votre site web toujours à jour, sécurisé et performant')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">{t('solWeb.subPlanName', 'Formule Maintenance')}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">79€</span>
                    <span className="text-xl"> {t('solWeb.perMonth', '/mois')}</span>
                  </div>
                  <p className="opacity-90 mb-6">
                    {t('solWeb.subPlanDesc', 'Un site web nécessite un entretien régulier pour rester performant et sécurisé. Notre abonnement vous garantit tranquillité d\'esprit.')}
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full">
                      {t('solWeb.subscribeBtn', 'Souscrire Maintenant')}
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">{t('solWeb.subIncludedTitle', 'Inclus dans l\'abonnement :')}</h4>
                <ul className="space-y-3">
                  {subscriptionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm inline-flex items-center gap-2">
                    <Wallet size={18} className="text-accent flex-shrink-0" />
                    <span><strong>{t('solWeb.savingsStrong', 'Économisez jusqu\'à 40%')}</strong> {t('solWeb.savingsText', 'par rapport à des interventions ponctuelles')}</span>
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
              {t('solWeb.processTitle', 'Notre Processus de Développement')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('solWeb.processSubtitle', 'Une méthodologie éprouvée pour votre réussite')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: t('solWeb.step1Title', 'Analyse'), desc: t('solWeb.step1Desc', 'Étude de vos besoins et objectifs'), icon: Users },
              { step: '2', title: t('solWeb.step2Title', 'Design'), desc: t('solWeb.step2Desc', 'Maquettes et validation visuelle'), icon: Globe },
              { step: '3', title: t('solWeb.step3Title', 'Développement'), desc: t('solWeb.step3Desc', 'Codage et intégration'), icon: Code },
              { step: '4', title: t('solWeb.step4Title', 'Lancement'), desc: t('solWeb.step4Desc', 'Mise en ligne et formation'), icon: TrendingUp }
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
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <TrendingUp size={48} className="text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">{t('solWeb.statSites', 'Sites Web Créés')}</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <Users size={48} className="text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">{t('solWeb.statClients', 'Clients Satisfaits')}</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <Award size={48} className="text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">35+</div>
              <p className="text-muted-foreground">{t('solWeb.statYears', 'Ans d\'Expérience')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('solWeb.ctaTitle', 'Prêt à Lancer Votre Projet Web ?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('solWeb.ctaSubtitle', 'Discutons de votre projet et trouvons ensemble la solution idéale pour votre entreprise')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {t('solWeb.ctaQuote', 'Demander un Devis Gratuit')}
              </Button>
            </Link>
            <a href="tel:+33367310201">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2" size={18} /> 03 67 31 02 01
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionWeb
