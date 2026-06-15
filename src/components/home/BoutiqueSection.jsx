import { ShoppingCart, Package, Truck, Shield, ArrowRight, Laptop, Wrench, Mouse, Printer, Palette, Headphones, Phone, Mail, CreditCard, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BoutiqueSection = () => {
  const features = [
    {
      icon: Package,
      title: 'Large Choix',
      description: 'Matériel informatique, périphériques et consommables'
    },
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: 'Livraison à domicile ou retrait en magasin'
    },
    {
      icon: Shield,
      title: 'Garantie Constructeur',
      description: 'Tous nos produits sont garantis'
    }
  ]

  const categories = [
    { name: 'PC & Portables', icon: Laptop },
    { name: 'Composants', icon: Wrench },
    { name: 'Périphériques', icon: Mouse },
    { name: 'Imprimantes', icon: Printer },
    { name: 'Cartouches', icon: Palette },
    { name: 'Accessoires', icon: Headphones }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 rounded-full px-6 py-2 mb-4">
            <span className="text-accent font-semibold inline-flex items-center gap-2"><ShoppingCart size={18} /> Boutique en Ligne</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achetez Votre Matériel Informatique
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des prix compétitifs, un large choix et un service de qualité
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Features */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Pourquoi Commander Chez Nous ?
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart size={32} className="text-accent" />
                <div>
                  <p className="font-semibold text-lg">Besoin de Conseils ?</p>
                  <p className="text-sm text-muted-foreground">Notre équipe vous aide à choisir</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a 
                  href="tel:+33367310201"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <Phone size={16} className="mr-2" /> 03 67 31 02 01
                  </Button>
                </a>
                <a 
                  href="mailto:contact@netzinformatique.fr"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <Mail size={16} className="mr-2" /> Email
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Categories */}
          <div>
            <div className="bg-card rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Nos Catégories
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <category.icon size={32} className="text-primary mb-2" />
                    <p className="font-semibold">{category.name}</p>
                  </div>
                ))}
              </div>

              <a 
                href="https://informatique-haguenau.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="gradient-green text-white w-full font-semibold">
                  Visiter la Boutique en Ligne
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>

              <p className="text-sm text-muted-foreground text-center mt-4 inline-flex items-center justify-center gap-1.5 w-full flex-wrap">
                <CreditCard size={16} className="text-accent" /> Paiement sécurisé
                <span className="mx-1">•</span>
                <Truck size={16} className="text-accent" /> Livraison gratuite dès 50€
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2 inline-flex items-center justify-center gap-2">
            <Gift size={24} /> Offre Spéciale : Cartouches d'Encre à Prix Compétitifs
          </h3>
          <p className="text-lg opacity-90 mb-4">
            Économisez jusqu'à 30% sur nos cartouches compatibles de toutes les grandes marques
          </p>
          <a 
            href="https://informatique-haguenau.fr/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Découvrir les Offres
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BoutiqueSection
