import { useTranslation } from 'react-i18next'
import { Award, Users, Target, Heart, TrendingUp, Shield, CheckCircle } from 'lucide-react'

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

  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="text-primary">NETZ Informatique</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Plus de 20 ans d'expertise au service de votre transformation digitale
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transformer la technologie en véritable atout stratégique pour nos clients, en proposant 
                des solutions sur mesure, sécurisées et évolutives.
              </p>
            </div>
            <div className="bg-secondary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Notre Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Devenir le pilier technologique incontournable de la région Grand Est.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-primary">Valeurs</span>
            </h2>
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

      <section className="py-20 gradient-purple text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2772+</div>
              <div className="text-lg opacity-90">Réparations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Années</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">900+</div>
              <div className="text-lg opacity-90">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
