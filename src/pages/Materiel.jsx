import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Monitor, Server, Laptop, Printer, HardDrive, Cpu, ArrowRight, CheckCircle, Shield } from 'lucide-react'

const Materiel = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Matériel</span> Informatique
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Du matériel choisi uniquement auprès de marques réputées pour garantir qualité et performance
        </p>
      </div>
    </section>

    {/* PC Sur Mesure */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Monitor size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre PC Sur Mesure
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Spécialisée dans le montage de PC et serveurs, l'équipe de NETZ Informatique vous propose de monter votre ordinateur à la carte, en vous permettant de choisir les périphériques à intégrer, afin que votre matériel se calque au mieux sur vos besoins réels.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Configuration Personnalisée</p>
                  <p className="text-sm text-muted-foreground">Choisissez chaque composant selon vos besoins</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Marques Réputées</p>
                  <p className="text-sm text-muted-foreground">Uniquement des composants de qualité professionnelle</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Montage Professionnel</p>
                  <p className="text-sm text-muted-foreground">Assemblage et tests par nos techniciens experts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Garantie et Support</p>
                  <p className="text-sm text-muted-foreground">Maintenance et assistance technique incluses</p>
                </div>
              </li>
            </ul>
            <Link to="/contact">
              <Button size="lg" className="gradient-blue text-white">
                Demander un Devis Gratuit <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-xl mb-4">Configurations Populaires</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">PC Bureautique</p>
                  <p className="text-sm text-muted-foreground">Pour usage professionnel quotidien</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-semibold">PC Gaming</p>
                  <p className="text-sm text-muted-foreground">Performances maximales pour les jeux</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">Workstation</p>
                  <p className="text-sm text-muted-foreground">Pour création graphique et CAO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Product Categories */}
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Gamme de Produits
          </h2>
          <p className="text-xl text-muted-foreground">
            Solutions complètes pour particuliers et entreprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Serveurs */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
            <Server size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Serveurs</h3>
            <p className="text-muted-foreground mb-6">
              S'adressant principalement aux entreprises, NETZ Informatique se propose de vous commander, configurer, installer et paramétrer le serveur qui répond à vos besoins.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Microsoft Windows Server</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Configuration sur mesure</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Installation et paramétrage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Support technique dédié</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                Demander un Devis
              </Button>
            </Link>
          </div>

          {/* Portables */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
            <Laptop size={48} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">PC Portables</h3>
            <p className="text-muted-foreground mb-6">
              Acheter un PC portable est souvent une alternative performante pour remplacer et/ou compléter son PC de bureau. Mobilité et puissance réunies.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Marques professionnelles (HP, Dell, Lenovo)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Ultrabooks et workstations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Conseil personnalisé</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Configuration et livraison</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                Nous Contacter
              </Button>
            </Link>
          </div>

          {/* Périphériques */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
            <HardDrive size={48} className="text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Périphériques</h3>
            <p className="text-muted-foreground mb-6">
              Que serait un PC sans des périphériques de qualité ? NETZ Informatique vous propose des périphériques qui ont fait leur preuve tout en conservant un rapport qualité/prix intéressant.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Écrans professionnels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Claviers et souris ergonomiques</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Disques durs et SSD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Webcams et casques</span>
              </li>
            </ul>
            <a 
              href="https://informatique-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Voir la Boutique
              </Button>
            </a>
          </div>

          {/* PC Gaming */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
            <Cpu size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">PC Gaming</h3>
            <p className="text-muted-foreground mb-6">
              Configurations haute performance pour les joueurs exigeants. Composants gaming de dernière génération pour une expérience optimale.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Cartes graphiques NVIDIA/AMD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Processeurs Intel/AMD dernière gen</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Refroidissement performant</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>RGB et boîtiers gaming</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                Configurer mon PC
              </Button>
            </Link>
          </div>

          {/* Imprimantes */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
            <Printer size={48} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Imprimantes & Consommables</h3>
            <p className="text-muted-foreground mb-6">
              Alimenter régulièrement son imprimante représente un budget non négligeable. Nous proposons des tarifs très compétitifs sur les cartouches d'encre de toutes les grandes marques.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Imprimantes jet d'encre et laser</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Cartouches compatibles et originales</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Papier et fournitures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Prix compétitifs</span>
              </li>
            </ul>
            <a 
              href="https://informatique-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Commander
              </Button>
            </a>
          </div>

          {/* Garantie */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 shadow-lg text-white">
            <Shield size={48} className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">Garantie & Qualité</h3>
            <p className="mb-6 opacity-90">
              Tous nos produits sont garantis et bénéficient de notre support technique expert. Votre satisfaction est notre priorité.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Garantie constructeur</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Support technique 20+ ans d'expérience</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Intervention rapide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Pièces de rechange disponibles</span>
              </li>
            </ul>
            <Link to="/services/particuliers">
              <Button className="bg-white text-primary hover:bg-white/90 w-full">
                Nos Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin de Conseils ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous conseiller et vous accompagner dans le choix de votre matériel informatique
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="gradient-blue text-white">
                Nous Contacter
              </Button>
            </Link>
            <a 
              href="https://informatique-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                Visiter la Boutique en Ligne
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Materiel
