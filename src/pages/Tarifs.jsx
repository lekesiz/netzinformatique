import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SEO from '../components/common/SEO'
import StructuredData from '../components/common/StructuredData'
import {
  CheckCircle, ArrowRight, Phone, Wrench, Monitor, HardDrive, Gauge,
  ShieldCheck, Server, Globe, ShoppingCart, GraduationCap, Cpu,
  Sparkles, CreditCard, FileCheck, HeartHandshake, Building2, User, Star,
} from 'lucide-react'

const Tarifs = () => {
  // ---- Particuliers ----
  const particuliers = [
    {
      icon: Wrench,
      name: 'Dépannage sur site',
      price: 'à partir de 49€',
      note: 'Diagnostic gratuit',
      description: 'Intervention à domicile ou au bureau dans tout le secteur de Haguenau.',
      features: [
        'Diagnostic complet offert',
        'Devis avant toute intervention',
        'Déplacement secteur Haguenau inclus',
        'Conseils personnalisés',
      ],
    },
    {
      icon: Monitor,
      name: 'Assistance à distance',
      price: '60€ / h',
      note: 'Sans déplacement',
      description: 'Prise en main sécurisée pour résoudre rapidement vos problèmes.',
      features: [
        'Connexion sécurisée',
        'Facturation au temps réel passé',
        'Idéal pour les petits soucis',
        'Disponible en journée',
      ],
    },
    {
      icon: HardDrive,
      name: 'Récupération de données',
      price: 'dès 150€',
      note: 'Aucun frais si échec',
      description: 'Disques durs, SSD, clés USB, cartes mémoire. Vous ne payez que si nous réussissons.',
      features: [
        'Analyse préalable gratuite',
        'Aucun frais en cas d\'échec',
        'Confidentialité garantie',
        'Devis ferme après diagnostic',
      ],
    },
    {
      icon: Gauge,
      name: 'Réparation & optimisation',
      price: 'à partir de 59€',
      note: 'PC plus rapide',
      description: 'Nettoyage, suppression de virus, remplacement de composants, montée en gamme.',
      features: [
        'Nettoyage logiciel complet',
        'Suppression virus & malwares',
        'Remplacement de pièces (en sus)',
        'Optimisation des performances',
      ],
    },
  ]

  // ---- Entreprises ----
  const entreprises = [
    {
      icon: Server,
      name: 'Contrat de maintenance',
      price: 'À partir de 79€',
      unit: '/ mois',
      popular: true,
      description: 'La tranquillité d\'esprit pour votre parc informatique, sans mauvaise surprise.',
      features: [
        'Mises à jour & correctifs',
        'Sauvegardes automatiques',
        'Surveillance 24/7',
        'Support prioritaire',
        'Rapports mensuels',
      ],
    },
    {
      icon: ShieldCheck,
      name: 'Audit & cybersécurité',
      price: 'sur devis',
      description: 'Évaluation de votre sécurité, conformité RGPD et plan d\'action concret.',
      features: [
        'Audit de votre infrastructure',
        'Analyse des vulnérabilités',
        'Conformité RGPD',
        'Recommandations chiffrées',
      ],
    },
    {
      icon: Building2,
      name: 'Infogérance',
      price: 'sur devis',
      description: 'Gestion complète et externalisée de votre informatique au quotidien.',
      features: [
        'Gestion complète du parc',
        'Support utilisateurs illimité',
        'Interlocuteur dédié',
        'Engagement de service (SLA)',
      ],
    },
  ]

  // ---- Création web ----
  const web = [
    {
      icon: Globe,
      name: 'Site vitrine',
      price: 'dès 990€',
      description: 'Présentez votre activité avec un site moderne, rapide et responsive.',
      features: [
        'Jusqu\'à 5 pages',
        'Design responsive',
        'Optimisation SEO de base',
        'Formulaire de contact',
      ],
    },
    {
      icon: Globe,
      name: 'Site business',
      price: '1990€',
      popular: true,
      description: 'Pour développer votre présence en ligne et générer plus de contacts.',
      features: [
        'Jusqu\'à 10 pages',
        'Blog intégré',
        'SEO avancé & Analytics',
        'Réseaux sociaux intégrés',
      ],
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      price: 'sur devis',
      description: 'Vendez en ligne avec une boutique complète et sécurisée.',
      features: [
        'Boutique complète',
        'Paiement sécurisé',
        'Gestion des stocks',
        'Formation à la gestion',
      ],
    },
  ]

  // ---- Reassurance band ----
  const reassurance = [
    { icon: FileCheck, title: 'Diagnostic gratuit', desc: 'Avant toute intervention, sans engagement.' },
    { icon: HeartHandshake, title: 'Devis sans engagement', desc: 'Un prix clair, validé avant de commencer.' },
    { icon: CreditCard, title: 'Paiement en 2-3x', desc: 'Sans frais pour toute prestation > 500€.' },
    { icon: Sparkles, title: 'Tarifs associations', desc: '-20% pour les associations & organismes à but non lucratif.' },
  ]

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Tarifs', url: '/tarifs' },
  ]

  return (
    <div>
      <SEO
        title="Tarifs transparents | Dépannage, Maintenance, Web & Formation | NETZ Informatique"
        description="Tarifs transparents NETZ Informatique : diagnostic gratuit, devis détaillé avant toute intervention. Dépannage dès 49€, maintenance entreprise dès 79€/mois, création web dès 990€. Pas de surprise."
        keywords="tarifs informatique Haguenau, prix dépannage ordinateur, devis gratuit, maintenance entreprise, création site web prix, récupération données"
        url="/tarifs"
      />
      <StructuredData
        type="service"
        data={{
          service: {
            name: 'Services informatiques NETZ',
            description: 'Dépannage, maintenance, cybersécurité, création web et formation à tarifs transparents avec diagnostic et devis gratuits.',
            type: 'IT Services',
          },
          breadcrumbs,
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 mb-6 text-sm font-medium">
            <Sparkles size={16} />
            <span>Transparence totale, aucune mauvaise surprise</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tarifs transparents
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Diagnostic gratuit, devis détaillé avant toute intervention. Pas de surprise.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2">
                Demander un devis personnalisé <ArrowRight size={18} />
              </Button>
            </Link>
            <a href="tel:+33367310201">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Phone size={18} /> 03 67 31 02 01
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-2xl mx-auto">
            Tous les prix sont indicatifs et donnés « à partir de ». Chaque besoin est unique : nous établissons un devis gratuit et personnalisé.
          </p>
        </div>
      </section>

      {/* Particuliers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
              <User size={16} /> Particuliers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dépannage & assistance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions claires pour vos ordinateurs, à domicile ou à distance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {particuliers.map((item, index) => (
              <div key={index} className="flex flex-col bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <div className="mb-1">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-xs font-medium text-accent mb-3">{item.note}</p>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button variant="outline" className="w-full">Demander un devis</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entreprises */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
              <Building2 size={16} /> Entreprises
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance & infogérance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confiez-nous votre informatique et concentrez-vous sur votre métier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {entreprises.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col bg-card rounded-2xl p-8 shadow-sm transition-all ${
                  item.popular
                    ? 'border-2 border-accent shadow-xl lg:scale-105'
                    : 'border border-border hover:shadow-lg'
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      <Star size={13} /> Le plus populaire
                    </span>
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${item.popular ? 'bg-accent/15' : 'bg-primary/10'}`}>
                  <item.icon size={26} className={item.popular ? 'text-accent' : 'text-primary'} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{item.price}</span>
                  {item.unit && <span className="text-muted-foreground"> {item.unit}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button
                    className={`w-full ${item.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                    variant={item.popular ? 'default' : 'outline'}
                  >
                    Demander un devis
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Création web */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
              <Globe size={16} /> Création web
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sites web & e-commerce</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une présence en ligne professionnelle, pensée pour convertir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {web.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col bg-card rounded-2xl p-8 shadow-sm transition-all ${
                  item.popular
                    ? 'border-2 border-accent shadow-xl lg:scale-105'
                    : 'border border-border hover:shadow-lg'
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      <Star size={13} /> Le plus choisi
                    </span>
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${item.popular ? 'bg-accent/15' : 'bg-primary/10'}`}>
                  <item.icon size={26} className={item.popular ? 'text-accent' : 'text-primary'} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button
                    className={`w-full ${item.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                    variant={item.popular ? 'default' : 'outline'}
                  >
                    Demander un devis
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Server size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Maintenance web : 79€ / mois</h3>
              <p className="text-sm text-muted-foreground">
                Hébergement, mises à jour de sécurité, sauvegardes automatiques, monitoring 24/7 et modifications de contenu. Votre site toujours à jour et performant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <div className="flex flex-col bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap size={26} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Formation professionnelle</h2>
              <p className="text-muted-foreground mb-4">
                Nos formations sont certifiées QUALIOPI et finançables. Reste à charge souvent nul selon votre situation.
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Éligible <strong>CPF</strong> (Compte Personnel de Formation)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Prise en charge <strong>OPCO</strong> pour les entreprises</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Financement <strong>Pôle Emploi</strong> / France Travail</span>
                </li>
              </ul>
              <Link to="/formation" className="mt-auto">
                <Button variant="outline" className="w-full">Voir les formations</Button>
              </Link>
            </div>

            <div className="flex flex-col bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FileCheck size={26} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Bilan de compétences</h2>
              <p className="text-muted-foreground mb-4">
                Faites le point sur votre parcours et construisez un projet professionnel solide, en toute confidentialité.
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Finançable à 100% par le CPF</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Accompagnement individuel certifié QUALIOPI</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Idéal pour une reconversion ou évolution</span>
                </li>
              </ul>
              <Link to="/formation/bilan-competences" className="mt-auto">
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IA Offline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 mb-4 text-sm font-medium">
                  <Cpu size={16} /> Solution sur-mesure
                </div>
                <h2 className="text-3xl font-bold mb-4">IA Offline & confidentielle</h2>
                <p className="text-primary-foreground/90 mb-6">
                  Une intelligence artificielle hébergée chez vous, sans cloud, pour les secteurs sensibles (santé, juridique, industrie). Chaque projet est étudié individuellement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Confidentialité totale, données 100% locales</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Location avec option d'achat possible</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Accompagnement & formation inclus</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center">
                <p className="text-sm uppercase tracking-wide text-primary-foreground/70 mb-2">Investissement</p>
                <div className="text-4xl font-bold mb-1">5 000€ – 50 000€+</div>
                <p className="text-primary-foreground/80 mb-6">Location avec option d'achat — sur étude</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full font-semibold gap-2">
                    Étudier mon projet <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance band */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Nos engagements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Parce que la confiance se construit sur la clarté, voici ce que nous garantissons à chaque client.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reassurance.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un besoin précis ? Parlons-en.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Chaque situation est unique. Décrivez-nous votre besoin et recevez un devis gratuit, détaillé et sans engagement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2">
                Demander un devis personnalisé <ArrowRight size={18} />
              </Button>
            </Link>
            <a href="tel:+33367310201">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Phone size={18} /> 03 67 31 02 01
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tarifs
