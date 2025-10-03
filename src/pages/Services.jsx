import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Users, Building2, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Nos <span className="text-primary">Services</span> Informatiques
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Des solutions technologiques complètes pour particuliers et entreprises
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-20 h-20 gradient-purple rounded-xl flex items-center justify-center mb-6">
                <Users size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Services pour Particuliers</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Solutions personnalisées pour vos besoins informatiques quotidiens
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Dépannage et réparation rapide</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>PC sur mesure et gaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Installation et configuration</span>
                </li>
              </ul>
              <Link to="/services/particuliers">
                <Button size="lg" className="gradient-purple text-white font-semibold w-full">
                  Découvrir <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-20 h-20 gradient-blue rounded-xl flex items-center justify-center mb-6">
                <Building2 size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Services pour Entreprises</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Solutions IT complètes pour optimiser votre activité professionnelle
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Maintenance IT et contrats</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Infrastructure réseau</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Cybersécurité avancée</span>
                </li>
              </ul>
              <Link to="/services/entreprises">
                <Button size="lg" className="gradient-blue text-white font-semibold w-full">
                  Découvrir <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services