import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Award, Users, Target, Heart, TrendingUp, Shield, CheckCircle, MapPin, Calendar, Briefcase, ArrowRight, Star } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()
  
  const values = [
    { icon: Award, title: 'Excellence', description: 'Recherche permanente de la qualité supérieure dans chaque intervention' },
    { icon: Users, title: 'Partenariat', description: 'Relations durables basées sur la confiance mutuelle' },
    { icon: TrendingUp, title: 'Innovation', description: 'Rester à la pointe de la technologie' },
    { icon: Shield, title: 'Intégrité', description: 'Transparence et honnêteté dans toutes nos interactions' },
    { icon: Heart, title: 'Humain', description: 'La technologie au service des personnes' },
    { icon: Target, title: 'Responsabilité', description: 'Conscience de notre impact environnemental' },
  ]

  const certifications = [
    { name: 'QUALIOPI', description: 'Certification qualité pour les formations professionnelles' },
    { name: 'TOSA', description: 'Certifications bureautiques reconnues' },
    { name: 'Microsoft Partner', description: 'Partenaire officiel Microsoft' },
    { name: 'Cisco Partner', description: 'Expertise réseau certifiée' },
    { name: 'Google Partner', description: 'Solutions cloud et productivité' }
  ]

  const milestones = [
    { year: '2003', title: 'Création', description: 'Fondation de NETZ Informatique à Haguenau' },
    { year: '2008', title: 'Expansion', description: 'Ouverture de notre boutique en ligne' },
    { year: '2015', title: 'Certification', description: 'Obtention de la certification QUALIOPI' },
    { year: '2020', title: 'Innovation', description: 'Lancement des solutions IA offline' },
    { year: '2025', title: 'Leadership', description: 'Plus de 900 clients satisfaits dans le Grand Est' }
  ]

  const team = [
    { 
      role: 'Direction', 
      description: 'Plus de 20 ans d\'expérience en informatique et gestion d\'entreprise',
      expertise: ['Stratégie IT', 'Gestion de projet', 'Conseil']
    },
    { 
      role: 'Techniciens Experts', 
      description: 'Équipe certifiée et passionnée par les nouvelles technologies',
      expertise: ['Dépannage', 'Maintenance', 'Réseau']
    },
    { 
      role: 'Développeurs', 
      description: 'Spécialistes en développement web et solutions sur-mesure',
      expertise: ['React', 'WordPress', 'E-commerce']
    },
    { 
      role: 'Formateurs', 
      description: 'Experts pédagogiques certifiés QUALIOPI et TOSA',
      expertise: ['Bureautique', 'IA', 'Digital']
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="text-primary">NETZ Informatique</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Plus de 20 ans d'expertise au service de votre transformation digitale dans le Grand Est
            </p>
            <div className="flex gap-4 justify-center flex-wrap text-sm">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <MapPin size={16} className="text-primary" />
                <span>Haguenau, Alsace</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Calendar size={16} className="text-primary" />
                <span>Depuis 2003</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Briefcase size={16} className="text-primary" />
                <span>900+ Clients</span>
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
                Notre <span className="text-primary">Histoire</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Une aventure technologique au cœur de l'Alsace
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-8">
                <h3 className="text-2xl font-bold mb-4">Les Débuts (2003)</h3>
                <p className="text-muted-foreground mb-4">
                  NETZ Informatique a été fondée en 2003 à Haguenau, dans le Bas-Rhin, avec une vision claire : 
                  rendre la technologie accessible et utile pour tous. Dès le départ, notre approche s'est distinguée 
                  par une proximité avec nos clients et une expertise technique de haut niveau.
                </p>
                <p className="text-muted-foreground">
                  Nos premiers clients étaient principalement des particuliers et des petites entreprises locales 
                  qui cherchaient un partenaire de confiance pour leurs besoins informatiques. Cette relation de 
                  proximité reste au cœur de notre ADN aujourd'hui.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-8">
                <h3 className="text-2xl font-bold mb-4">Croissance et Diversification (2008-2015)</h3>
                <p className="text-muted-foreground mb-4">
                  Face à la demande croissante, nous avons élargi notre offre de services. En 2008, nous avons lancé 
                  notre boutique en ligne <strong>informatique-haguenau.fr</strong>, permettant à nos clients d'accéder 
                  facilement à du matériel informatique de qualité à des prix compétitifs.
                </p>
                <p className="text-muted-foreground">
                  En 2015, nous avons obtenu la certification <strong>QUALIOPI</strong>, marquant notre engagement dans 
                  la formation professionnelle. Cette certification nous a permis de proposer des formations certifiées 
                  et éligibles au CPF, renforçant notre position d'expert en développement des compétences numériques.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Innovation et Leadership (2020-Aujourd'hui)</h3>
                <p className="text-muted-foreground mb-4">
                  Toujours à l'avant-garde de l'innovation, nous avons été parmi les premiers en Alsace à proposer 
                  des <strong>solutions d'intelligence artificielle offline</strong>, permettant aux entreprises de 
                  bénéficier de la puissance de l'IA tout en gardant le contrôle total de leurs données.
                </p>
                <p className="text-muted-foreground">
                  Aujourd'hui, NETZ Informatique c'est plus de <strong>900 clients satisfaits</strong>, 
                  <strong>2772+ appareils réparés</strong>, et une équipe passionnée qui continue d'innover pour 
                  répondre aux défis technologiques de demain. Notre plateforme de formation 
                  <strong> formation-haguenau.fr</strong> et notre blog technique <strong>netz-blog.fr</strong> 
                  témoignent de notre engagement à partager notre expertise.
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
              Nos <span className="text-primary">Étapes Clés</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
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
              <h2 className="text-3xl font-bold mb-6 text-primary">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transformer la technologie en véritable atout stratégique pour nos clients, en proposant 
                des solutions sur mesure, sécurisées et évolutives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Accompagner la transformation digitale des entreprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Démocratiser l'accès aux technologies avancées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Former les professionnels aux compétences numériques</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/5 rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Devenir le pilier technologique incontournable de la région Grand Est, reconnu pour son 
                excellence, son innovation et son engagement envers ses clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Leader régional des solutions IT innovantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Référence en formation professionnelle numérique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span>Partenaire de confiance pour 1000+ entreprises</span>
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
              Nos <span className="text-primary">Valeurs</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift">
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
              Notre <span className="text-primary">Équipe</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Des experts passionnés à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-3">{member.role}</h3>
                <p className="text-muted-foreground mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary">
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
              Nos <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Reconnus par les plus grandes marques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
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
      <section className="py-20 gradient-purple text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              NETZ Informatique en Chiffres
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2772+</div>
              <div className="text-lg opacity-90">Appareils Réparés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">900+</div>
              <div className="text-lg opacity-90">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">670+</div>
              <div className="text-lg opacity-90">Participants Formés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rejoignez Plus de 900 Clients Satisfaits
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Faites confiance à l'expertise NETZ Informatique pour votre transformation digitale
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Nous Contacter
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Découvrir Nos Services
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
