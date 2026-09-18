import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import SEO from '../components/common/SEO'
import StructuredData from '../components/common/StructuredData'
import {
  CheckCircle, ArrowRight, Phone, Wrench, Monitor, HardDrive, Gauge,
  ShieldCheck, Server, Globe, ShoppingCart, GraduationCap, Cpu,
  Sparkles, CreditCard, FileCheck, HeartHandshake, Building2, User, Star,
} from 'lucide-react'

const Tarifs = () => {
  const { t } = useTranslation()

  // ---- Particuliers ----
  const particuliers = [
    {
      icon: Wrench,
      name: t('tarifs.part1Name', 'Dépannage sur site'),
      price: t('tarifs.part1Price', 'à partir de 49€'),
      note: t('tarifs.part1Note', 'Diagnostic gratuit'),
      description: t('tarifs.part1Desc', 'Intervention à domicile ou au bureau dans tout le secteur de Haguenau.'),
      features: [
        t('tarifs.part1Feat1', 'Diagnostic complet offert'),
        t('tarifs.part1Feat2', 'Devis avant toute intervention'),
        t('tarifs.part1Feat3', 'Déplacement secteur Haguenau inclus'),
        t('tarifs.part1Feat4', 'Conseils personnalisés'),
      ],
    },
    {
      icon: Monitor,
      name: t('tarifs.part2Name', 'Assistance à distance'),
      price: t('tarifs.part2Price', '60€ / h'),
      note: t('tarifs.part2Note', 'Sans déplacement'),
      description: t('tarifs.part2Desc', 'Prise en main sécurisée pour résoudre rapidement vos problèmes.'),
      features: [
        t('tarifs.part2Feat1', 'Connexion sécurisée'),
        t('tarifs.part2Feat2', 'Facturation au temps réel passé'),
        t('tarifs.part2Feat3', 'Idéal pour les petits soucis'),
        t('tarifs.part2Feat4', 'Disponible en journée'),
      ],
    },
    {
      icon: HardDrive,
      name: t('tarifs.part3Name', 'Récupération de données'),
      price: t('tarifs.part3Price', 'dès 150€'),
      note: t('tarifs.part3Note', 'Aucun frais si échec'),
      description: t('tarifs.part3Desc', 'Disques durs, SSD, clés USB, cartes mémoire. Vous ne payez que si nous réussissons.'),
      features: [
        t('tarifs.part3Feat1', 'Analyse préalable gratuite'),
        t('tarifs.part3Feat2', 'Aucun frais en cas d\'échec'),
        'Engagement de confidentialité précisé au devis',
        t('tarifs.part3Feat4', 'Devis ferme après diagnostic'),
      ],
    },
    {
      icon: Gauge,
      name: t('tarifs.part4Name', 'Réparation & optimisation'),
      price: t('tarifs.part4Price', 'à partir de 59€'),
      note: t('tarifs.part4Note', 'PC plus rapide'),
      description: t('tarifs.part4Desc', 'Nettoyage, suppression de virus, remplacement de composants, montée en gamme.'),
      features: [
        t('tarifs.part4Feat1', 'Nettoyage logiciel complet'),
        t('tarifs.part4Feat2', 'Suppression virus & malwares'),
        t('tarifs.part4Feat3', 'Remplacement de pièces (en sus)'),
        t('tarifs.part4Feat4', 'Optimisation des performances'),
      ],
    },
  ]

  // ---- Entreprises ----
  const entreprises = [
    {
      id: 'essentiel',
      icon: Server,
      name: 'Essentiel',
      price: 'À partir de 79 € HT',
      unit: '/ mois',
      popular: true,
      description: 'Base indicative pour une petite structure. Le nombre de postes, les licences et la durée sont fixés dans le devis.',
      features: [
        'Inventaire et maintenance planifiée',
        'Mises à jour et contrôle des sauvegardes selon devis',
        'Support pendant les horaires publiés',
        'Matériel, licences et déplacements exclus sauf mention',
      ],
    },
    {
      id: 'serenite',
      icon: ShieldCheck,
      name: 'Sérénité',
      price: 'Sur devis',
      description: 'Maintenance renforcée pour un parc multi-utilisateur, dimensionnée après inventaire technique.',
      features: [
        'Supervision automatisée 24/7, sans astreinte humaine implicite',
        'Support priorisé avec objectif de prise en charge contractuel',
        'Suivi des correctifs, sauvegardes et capacité',
        'Interventions sur site et licences cadrées au devis',
      ],
    },
    {
      id: 'cyber-renforcee',
      icon: Building2,
      name: 'Cyber renforcée',
      price: 'Sur devis',
      description: 'Socle de réduction des risques adapté à l’exposition, aux outils et aux obligations de l’organisation.',
      features: [
        'Audit, MFA, stratégie de correctifs et sauvegardes',
        'EDR, pare-feu et sensibilisation selon architecture',
        'Chemin d’escalade incident défini au contrat',
        'Aucune garantie de conformité juridique ou de résolution',
      ],
    },
  ]

  // ---- Création web ----
  const web = [
    {
      icon: Globe,
      name: t('tarifs.web1Name', 'Site vitrine'),
      price: t('tarifs.web1Price', 'dès 990€'),
      description: t('tarifs.web1Desc', 'Présentez votre activité avec un site moderne, rapide et responsive.'),
      features: [
        t('tarifs.web1Feat1', 'Jusqu\'à 5 pages'),
        t('tarifs.web1Feat2', 'Design responsive'),
        t('tarifs.web1Feat3', 'Optimisation SEO de base'),
        t('tarifs.web1Feat4', 'Formulaire de contact'),
      ],
    },
    {
      icon: Globe,
      name: t('tarifs.web2Name', 'Site business'),
      price: '1990€',
      popular: true,
      description: t('tarifs.web2Desc', 'Pour développer votre présence en ligne et générer plus de contacts.'),
      features: [
        t('tarifs.web2Feat1', 'Jusqu\'à 10 pages'),
        t('tarifs.web2Feat2', 'Blog intégré'),
        t('tarifs.web2Feat3', 'SEO avancé & Analytics'),
        t('tarifs.web2Feat4', 'Réseaux sociaux intégrés'),
      ],
    },
    {
      icon: ShoppingCart,
      name: t('tarifs.web3Name', 'E-commerce'),
      price: t('tarifs.web3Price', 'sur devis'),
      description: t('tarifs.web3Desc', 'Vendez en ligne avec une boutique complète et sécurisée.'),
      features: [
        t('tarifs.web3Feat1', 'Boutique complète'),
        t('tarifs.web3Feat2', 'Paiement sécurisé'),
        t('tarifs.web3Feat3', 'Gestion des stocks'),
        t('tarifs.web3Feat4', 'Formation à la gestion'),
      ],
    },
  ]

  // ---- Reassurance band ----
  const reassurance = [
    { icon: FileCheck, title: 'Diagnostic et devis', desc: 'Le périmètre, le prix et les éventuels frais sont confirmés avant intervention.' },
    { icon: HeartHandshake, title: 'Conditions lisibles', desc: 'Inclus, exclusions, délais et responsabilités figurent dans le devis ou le contrat.' },
    { icon: CreditCard, title: 'Modalités adaptées', desc: 'Les possibilités de paiement sont précisées au devis selon la prestation.' },
    { icon: Sparkles, title: 'Associations et organismes', desc: 'Une proposition adaptée peut être étudiée selon le besoin et le budget.' },
  ]

  const breadcrumbs = [
    { name: t('tarifs.bcHome', 'Accueil'), url: '/' },
    { name: t('tarifs.bcTarifs', 'Tarifs'), url: '/tarifs' },
  ]

  return (
    <div>
      <SEO
        title={t('tarifs.seoTitle', 'Tarifs transparents | Dépannage, Maintenance, Web & Formation | NETZ Informatique')}
        description={t('tarifs.seoDesc', 'Tarifs transparents NETZ Informatique : diagnostic gratuit, devis détaillé avant toute intervention. Dépannage dès 49€, maintenance entreprise dès 79€/mois, création web dès 990€. Pas de surprise.')}
        keywords={t('tarifs.seoKeywords', 'tarifs informatique Haguenau, prix dépannage ordinateur, devis gratuit, maintenance entreprise, création site web prix, récupération données')}
        url="/tarifs"
      />
      <StructuredData
        type="service"
        data={{
          service: {
            name: t('tarifs.sdName', 'Services informatiques NETZ'),
            description: t('tarifs.sdDesc', 'Dépannage, maintenance, cybersécurité, création web et formation à tarifs transparents avec diagnostic et devis gratuits.'),
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
            <span>{t('tarifs.heroBadge', 'Transparence totale, aucune mauvaise surprise')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('tarifs.heroTitle', 'Tarifs transparents')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            {t('tarifs.heroSubtitle', 'Diagnostic gratuit, devis détaillé avant toute intervention. Pas de surprise.')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2">
<Link to="/contact">
                {t('tarifs.heroCtaQuote', 'Demander un devis personnalisé')} <ArrowRight size={18} />
              </Link>
</Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
<a href="tel:+33367310201">
                <Phone size={18} /> 03 67 31 02 01
              </a>
</Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70 max-w-2xl mx-auto">
            {t('tarifs.heroNote', 'Tous les prix sont indicatifs et donnés « à partir de ». Chaque besoin est unique : nous établissons un devis gratuit et personnalisé.')}
          </p>
        </div>
      </section>

      {/* Particuliers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
              <User size={16} /> {t('tarifs.partBadge', 'Particuliers')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('tarifs.partTitle', 'Dépannage & assistance')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('tarifs.partSubtitle', 'Des solutions claires pour vos ordinateurs, à domicile ou à distance.')}
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
                <Button asChild variant="outline" className="w-full">
<Link to={`/contact?audience=entreprise&service=maintenance&offer=${item.id}&source=tarifs`} className="mt-auto">{t('tarifs.askQuote', 'Demander un devis')}</Link>
</Button>
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
              <Building2 size={16} /> {t('tarifs.entBadge', 'Entreprises')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('tarifs.entTitle', 'Maintenance & infogérance')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('tarifs.entSubtitle', 'Confiez-nous votre informatique et concentrez-vous sur votre métier.')}
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
                      <Star size={13} /> {t('tarifs.mostPopular', 'Le plus populaire')}
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
                <Button asChild
                    className={`w-full ${item.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                    variant={item.popular ? 'default' : 'outline'}
                  >
<Link to="/contact" className="mt-auto">
                    {t('tarifs.askQuote', 'Demander un devis')}
                  </Link>
</Button>
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
              <Globe size={16} /> {t('tarifs.webBadge', 'Création web')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('tarifs.webTitle', 'Sites web & e-commerce')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('tarifs.webSubtitle', 'Une présence en ligne professionnelle, pensée pour convertir.')}
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
                      <Star size={13} /> {t('tarifs.mostChosen', 'Le plus choisi')}
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
                <Button asChild
                    className={`w-full ${item.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                    variant={item.popular ? 'default' : 'outline'}
                  >
<Link to="/contact" className="mt-auto">
                    {t('tarifs.askQuote', 'Demander un devis')}
                  </Link>
</Button>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Server size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('tarifs.webMaintTitle', 'Maintenance web : 79€ / mois')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('tarifs.webMaintDesc', 'Hébergement, mises à jour de sécurité, sauvegardes automatiques, monitoring 24/7 et modifications de contenu. Votre site toujours à jour et performant.')}
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
              <h2 className="text-2xl font-bold mb-2">{t('tarifs.formTitle', 'Formation professionnelle')}</h2>
              <p className="text-muted-foreground mb-4">
                La certification QUALIOPI couvre les actions de formation et les bilans de compétences. Tout financement dépend du dispositif, de la formation et du dossier.
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>CPF</strong> : éligibilité à vérifier pour chaque parcours</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('tarifs.formOpcoPre', 'Prise en charge')} <strong>OPCO</strong> {t('tarifs.formOpcoPost', 'pour les entreprises')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('tarifs.formPePre', 'Financement')} <strong>France Travail</strong> {t('tarifs.formPePost', 'selon éligibilité et validation du dossier')}</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
<Link to="/formation" className="mt-auto">{t('tarifs.formCta', 'Voir les formations')}</Link>
</Button>
            </div>

            <div className="flex flex-col bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FileCheck size={26} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{t('tarifs.bilanTitle', 'Bilan de compétences')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('tarifs.bilanDesc', 'Faites le point sur votre parcours et construisez un projet professionnel solide, en toute confidentialité.')}
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Financement possible selon éligibilité et droits disponibles</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('tarifs.bilanFeat2', 'Accompagnement individuel certifié QUALIOPI')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('tarifs.bilanFeat3', 'Idéal pour une reconversion ou évolution')}</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
<Link to="/formation/bilan-competences" className="mt-auto">{t('tarifs.bilanCta', 'En savoir plus')}</Link>
</Button>
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
                  <Cpu size={16} /> {t('tarifs.iaBadge', 'Solution sur-mesure')}
                </div>
                <h2 className="text-3xl font-bold mb-4">{t('tarifs.iaTitle', 'IA Offline & confidentielle')}</h2>
                <p className="text-primary-foreground/90 mb-6">
                  {t('tarifs.iaDesc', 'Une solution d’IA locale ou hybride dimensionnée selon vos données, vos usages, les accès et les exigences du secteur. Chaque projet est étudié individuellement.')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Traitement local ou hybride selon l’architecture retenue</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('tarifs.iaFeat2', 'Location avec option d\'achat possible')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{t('tarifs.iaFeat3', 'Accompagnement & formation inclus')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center">
                <p className="text-sm uppercase tracking-wide text-primary-foreground/70 mb-2">{t('tarifs.iaInvestLabel', 'Investissement')}</p>
                <div className="text-4xl font-bold mb-1">5 000€ – 50 000€+</div>
                <p className="text-primary-foreground/80 mb-6">{t('tarifs.iaInvestNote', 'Location avec option d\'achat — sur étude')}</p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full font-semibold gap-2">
<Link to="/contact">
                    {t('tarifs.iaCta', 'Étudier mon projet')} <ArrowRight size={18} />
                  </Link>
</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance band */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('tarifs.engagTitle', 'Nos engagements')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La confiance repose sur un périmètre écrit, des limites explicites et un devis accepté avant intervention.
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
            {t('tarifs.ctaTitle', 'Un besoin précis ? Parlons-en.')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            {t('tarifs.ctaDesc', 'Chaque situation est unique. Décrivez-nous votre besoin et recevez un devis gratuit, détaillé et sans engagement.')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2">
<Link to="/contact">
                {t('tarifs.heroCtaQuote', 'Demander un devis personnalisé')} <ArrowRight size={18} />
              </Link>
</Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
<a href="tel:+33367310201">
                <Phone size={18} /> 03 67 31 02 01
              </a>
</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tarifs
