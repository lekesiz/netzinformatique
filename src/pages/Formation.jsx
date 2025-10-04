import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { GraduationCap, Award, User, Building2, ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react'

const Formation = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Formation</span> QUALIOPI
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Formations certifiées et bilan de compétences financés par CPF, OPCO et Pôle Emploi
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-white rounded-lg px-6 py-3 shadow-md">
            <p className="text-sm text-muted-foreground">Certification</p>
            <p className="font-bold text-primary">QUALIOPI</p>
          </div>
          <div className="bg-white rounded-lg px-6 py-3 shadow-md">
            <p className="text-sm text-muted-foreground">Certification</p>
            <p className="font-bold text-primary">TOSA</p>
          </div>
          <div className="bg-white rounded-lg px-6 py-3 shadow-md">
            <p className="text-sm text-muted-foreground">Éligible</p>
            <p className="font-bold text-primary">Mon Compte Formation</p>
          </div>
        </div>
      </div>
    </section>

    {/* Formation Types */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Solutions de Formation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des formations adaptées à votre situation professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CPF Card - Particuliers */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-primary transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <User size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Formation CPF</h3>
            <p className="text-sm text-primary font-semibold mb-4">Pour Particuliers</p>
            <p className="text-muted-foreground mb-6">
              Financez votre formation avec votre Compte Personnel de Formation. Accessible à tous les salariés et demandeurs d'emploi.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Financement jusqu'à 100%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Formations bureautiques certifiées</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Présentiel ou à distance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Certification TOSA incluse</span>
              </li>
            </ul>
            <a 
              href="https://formation-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="gradient-blue text-white w-full">
                Découvrir les Formations <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>

          {/* OPCO Card - Professionnels */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-primary transition-all">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Building2 size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Formation OPCO</h3>
            <p className="text-sm text-secondary font-semibold mb-4">Pour Entreprises</p>
            <p className="text-muted-foreground mb-6">
              Développez les compétences de vos équipes avec un financement OPCO. Solutions sur-mesure pour les professionnels.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Prise en charge par votre OPCO</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Programmes personnalisés</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Formation en groupe ou individuelle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Suivi post-formation</span>
              </li>
            </ul>
            <a 
              href="https://formation-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="gradient-purple text-white w-full">
                En Savoir Plus <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>

          {/* Bilan de Compétences */}
          <Link to="/formation/bilan-competences">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift h-full border-2 border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Bilan de Compétences</h3>
              <p className="text-sm text-accent font-semibold mb-4">Pour Tous</p>
              <p className="text-muted-foreground mb-6">
                Évaluez et valorisez vos compétences professionnelles. Construisez un projet professionnel solide et réaliste.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Analyse approfondie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Accompagnement personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Financement CPF possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Experts certifiés</span>
                </li>
              </ul>
              <Button className="gradient-green text-white w-full">
                Découvrir le Bilan <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Résultats en Chiffres
          </h2>
          <p className="text-xl text-muted-foreground">
            Une transparence totale sur nos formations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Users size={48} className="text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-primary mb-2">670+</div>
            <p className="text-muted-foreground">Participants formés</p>
            <p className="text-sm text-muted-foreground mt-2">depuis notre création</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <TrendingUp size={48} className="text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <p className="text-muted-foreground">Taux de réalisation</p>
            <p className="text-sm text-muted-foreground mt-2">objectifs atteints à 6 mois</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Award size={48} className="text-secondary mx-auto mb-4" />
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <p className="text-muted-foreground">Satisfaction</p>
            <p className="text-sm text-muted-foreground mt-2">participants satisfaits</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Développer Vos Compétences ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de formation et découvrir les solutions de financement adaptées
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Nous Contacter
              </Button>
            </Link>
            <a 
              href="https://formation-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Voir Toutes les Formations
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Formation
