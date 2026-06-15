import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import SEO from '@/components/common/SEO'
import { Award, Users, Target, Heart, TrendingUp, Shield, CheckCircle, MapPin, Calendar, Briefcase, ArrowRight, Star } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()

  const values = [
    { icon: Award, title: t('about.value1Title', 'Excellence'), description: t('about.value1Desc', 'Recherche permanente de la qualité supérieure dans chaque intervention') },
    { icon: Users, title: t('about.value2Title', 'Partenariat'), description: t('about.value2Desc', 'Relations durables basées sur la confiance mutuelle') },
    { icon: TrendingUp, title: t('about.value3Title', 'Innovation'), description: t('about.value3Desc', 'Rester à la pointe de la technologie') },
    { icon: Shield, title: t('about.value4Title', 'Intégrité'), description: t('about.value4Desc', 'Transparence et honnêteté dans toutes nos interactions') },
    { icon: Heart, title: t('about.value5Title', 'Humain'), description: t('about.value5Desc', 'La technologie au service des personnes') },
    { icon: Target, title: t('about.value6Title', 'Responsabilité'), description: t('about.value6Desc', 'Conscience de notre impact environnemental') },
  ]

  const certifications = [
    { name: 'QUALIOPI', description: t('about.cert1Desc', 'Certification qualité pour les formations professionnelles') },
    { name: 'TOSA', description: t('about.cert2Desc', 'Certifications bureautiques reconnues') },
    { name: 'Microsoft Partner', description: t('about.cert3Desc', 'Partenaire officiel Microsoft') },
    { name: 'Cisco Partner', description: t('about.cert4Desc', 'Expertise réseau certifiée') },
    { name: 'Google Partner', description: t('about.cert5Desc', 'Solutions cloud et productivité') }
  ]

  const milestones = [
    { year: '2009', title: t('about.milestone2009Title', 'Les Débuts'), description: t('about.milestone2009Desc', 'Début de l\'activité informatique en France (anciennement Orditeur)') },
    { year: '2012', title: t('about.milestone2012Title', 'Boutique en ligne'), description: t('about.milestone2012Desc', 'Lancement de la boutique informatique-haguenau.fr') },
    { year: '2016', title: t('about.milestone2016Title', 'Création'), description: t('about.milestone2016Desc', 'Fondation de NETZ Informatique à Haguenau par Mikail Lekesiz') },
    { year: '2022', title: t('about.milestone2022Title', 'Certification'), description: t('about.milestone2022Desc', 'Obtention de la certification QUALIOPI') },
    { year: '2023', title: t('about.milestone2023Title', 'Innovation'), description: t('about.milestone2023Desc', 'Lancement des solutions IA Offline') },
    { year: '2025', title: t('about.milestone2025Title', 'Leadership'), description: t('about.milestone2025Desc', 'Plus de 900 clients satisfaits dans le Grand Est') }
  ]

  const team = [
    {
      role: t('about.teamRole1', 'Direction'),
      description: t('about.teamDesc1', 'Plus de 35 ans d\'expérience en informatique et gestion d\'entreprise'),
      expertise: [t('about.teamExp1a', 'Stratégie IT'), t('about.teamExp1b', 'Gestion de projet'), t('about.teamExp1c', 'Conseil')]
    },
    {
      role: t('about.teamRole2', 'Techniciens Experts'),
      description: t('about.teamDesc2', 'Équipe certifiée et passionnée par les nouvelles technologies'),
      expertise: [t('about.teamExp2a', 'Dépannage'), t('about.teamExp2b', 'Maintenance'), t('about.teamExp2c', 'Réseau')]
    },
    {
      role: t('about.teamRole3', 'Développeurs'),
      description: t('about.teamDesc3', 'Spécialistes en développement web et solutions sur-mesure'),
      expertise: ['React', 'WordPress', 'E-commerce']
    },
    {
      role: t('about.teamRole4', 'Formateurs'),
      description: t('about.teamDesc4', 'Experts pédagogiques certifiés QUALIOPI et TOSA'),
      expertise: [t('about.teamExp4a', 'Bureautique'), t('about.teamExp4b', 'IA'), t('about.teamExp4c', 'Digital')]
    }
  ]

  return (
    <div className="overflow-x-hidden">
      <SEO
        title={t('about.seoTitle', 'À Propos de NETZ Informatique | Expert IT à Haguenau')}
        description={t('about.seoDescription', "Plus de 35 ans d'expertise IT au service de votre transformation digitale dans le Grand Est. Découvrez notre histoire, nos valeurs et notre équipe.")}
        url="/a-propos"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.heroTitlePart1', 'À Propos de')} <span className="text-accent">NETZ Informatique</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {t('about.heroSubtitle', "Plus de 35 ans d'expertise au service de votre transformation digitale dans le Grand Est")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap text-sm">
              <div className="flex items-center gap-2 bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-2">
                <MapPin size={16} className="text-accent" />
                <span>{t('about.heroLocation', 'Haguenau, Alsace')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-2">
                <Calendar size={16} className="text-accent" />
                <span>{t('about.heroSince', 'Depuis 2009')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-2">
                <Briefcase size={16} className="text-accent" />
                <span>{t('about.heroClients', '900+ Clients')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('about.storyTitlePart1', 'Notre')} <span className="text-primary">{t('about.storyTitleHighlight', 'Histoire')}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('about.storySubtitle', "Une aventure technologique au cœur de l'Alsace")}
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-8">
                <h3 className="text-2xl font-bold mb-4">{t('about.story1Title', 'Les Débuts (2009)')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.story1Para1', "L'aventure a démarré en 2009 avec une activité informatique en France (anciennement Orditeur), avec une vision claire : rendre la technologie accessible et utile pour tous. NETZ Informatique a ensuite été fondée en 2016 à Haguenau, dans le Bas-Rhin. Dès le départ, notre approche s'est distinguée par une proximité avec nos clients et une expertise technique de haut niveau.")}
                </p>
                <p className="text-muted-foreground">
                  {t('about.story1Para2', "Nos premiers clients étaient principalement des particuliers et des petites entreprises locales qui cherchaient un partenaire de confiance pour leurs besoins informatiques. Cette relation de proximité reste au cœur de notre ADN aujourd'hui.")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-8">
                <h3 className="text-2xl font-bold mb-4">{t('about.story2Title', 'Croissance et Diversification (2012-2022)')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.story2Para1a', 'Face à la demande croissante, nous avons élargi notre offre de services. En 2012, nous avons lancé notre boutique en ligne')} <strong>informatique-haguenau.fr</strong>{t('about.story2Para1b', ", permettant à nos clients d'accéder facilement à du matériel informatique de qualité à des prix compétitifs.")}
                </p>
                <p className="text-muted-foreground">
                  {t('about.story2Para2a', 'En 2022, nous avons obtenu la certification')} <strong>QUALIOPI</strong>{t('about.story2Para2b', ", marquant notre engagement dans la formation professionnelle. Cette certification nous a permis de proposer des formations certifiées et éligibles au CPF, renforçant notre position d'expert en développement des compétences numériques.")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">{t('about.story3Title', "Innovation et Leadership (2023-Aujourd'hui)")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.story3Para1a', "Toujours à l'avant-garde de l'innovation, nous avons été parmi les premiers en Alsace à proposer des")} <strong>{t('about.story3Para1Bold', "solutions d'intelligence artificielle offline")}</strong>{t('about.story3Para1b', ", permettant aux entreprises de bénéficier de la puissance de l'IA tout en gardant le contrôle total de leurs données.")}
                </p>
                <p className="text-muted-foreground">
                  {t('about.story3Para2a', "Aujourd'hui, NETZ Informatique c'est plus de")} <strong>{t('about.story3Para2Bold1', '900 clients satisfaits')}</strong>,
                  <strong>{t('about.story3Para2Bold2', '2772+ appareils réparés')}</strong>{t('about.story3Para2b', ", et une équipe passionnée qui continue d'innover pour répondre aux défis technologiques de demain. Notre plateforme de formation")}
                  <strong> formation-haguenau.fr</strong> {t('about.story3Para2c', 'et notre blog technique')} <strong>netz-blog.fr</strong>
                  {t('about.story3Para2d', ' témoignent de notre engagement à partager notre expertise.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.timelineTitlePart1', 'Nos')} <span className="text-primary">{t('about.timelineTitleHighlight', 'Étapes Clés')}</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-primary">{t('about.missionTitle', 'Notre Mission')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.missionDesc', 'Transformer la technologie en véritable atout stratégique pour nos clients, en proposant des solutions sur mesure, sécurisées et évolutives.')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>{t('about.missionItem1', 'Accompagner la transformation digitale des entreprises')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>{t('about.missionItem2', "Démocratiser l'accès aux technologies avancées")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>{t('about.missionItem3', 'Former les professionnels aux compétences numériques')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/5 rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">{t('about.visionTitle', 'Notre Vision')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.visionDesc', 'Devenir le pilier technologique incontournable de la région Grand Est, reconnu pour son excellence, son innovation et son engagement envers ses clients.')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>{t('about.visionItem1', 'Leader régional des solutions IT innovantes')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>{t('about.visionItem2', 'Référence en formation professionnelle numérique')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>{t('about.visionItem3', 'Partenaire de confiance pour 1000+ entreprises')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.valuesTitlePart1', 'Nos')} <span className="text-primary">{t('about.valuesTitleHighlight', 'Valeurs')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.valuesSubtitle', 'Les principes qui guident chacune de nos actions')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.teamTitlePart1', 'Notre')} <span className="text-primary">{t('about.teamTitleHighlight', 'Équipe')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.teamSubtitle', 'Des experts passionnés à votre service')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-3">{member.role}</h3>
                <p className="text-muted-foreground mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-card px-3 py-1 rounded-full text-sm font-semibold text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.certsTitlePart1', 'Nos')} <span className="text-primary">{t('about.certsTitleHighlight', 'Certifications')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.certsSubtitle', 'Reconnus par les plus grandes marques')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.statsTitle', 'NETZ Informatique en Chiffres')}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2772+</div>
              <div className="text-lg opacity-90">{t('about.statRepaired', 'Appareils Réparés')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">35+</div>
              <div className="text-lg opacity-90">{t('about.statExperience', "Années d'Expérience")}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">900+</div>
              <div className="text-lg opacity-90">{t('about.statClients', 'Clients Satisfaits')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">670+</div>
              <div className="text-lg opacity-90">{t('about.statTrained', 'Participants Formés')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.ctaTitle', 'Rejoignez Plus de 900 Clients Satisfaits')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('about.ctaSubtitle', "Faites confiance à l'expertise NETZ Informatique pour votre transformation digitale")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  {t('about.ctaContact', 'Nous Contacter')}
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
                  {t('about.ctaServices', 'Découvrir Nos Services')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
