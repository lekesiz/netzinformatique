import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import { Button } from '@/components/ui/button'
import { Monitor, Server, Laptop, Printer, HardDrive, Cpu, ArrowRight, CheckCircle, Shield } from 'lucide-react'

const Materiel = () => {
  const { t } = useTranslation()
  return (
  <div>
    <SEO
      title={t('materiel.metaTitle', 'Matériel informatique | NETZ Informatique')}
      description={t('materiel.metaDesc', 'PC sur mesure, serveurs, portables, périphériques et imprimantes de marques réputées à Haguenau. Conseil, montage et garantie par NETZ Informatique.')}
      url="/materiel"
    />
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-accent">{t('materiel.heroTitleHighlight', 'Matériel')}</span> {t('materiel.heroTitleSuffix', 'Informatique')}
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
          {t('materiel.heroSubtitle', 'Du matériel choisi uniquement auprès de marques réputées pour garantir qualité et performance')}
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
              {t('materiel.pcTitle', 'Votre PC Sur Mesure')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('materiel.pcDesc', "Spécialisée dans le montage de PC et serveurs, l'équipe de NETZ Informatique vous propose de monter votre ordinateur à la carte, en vous permettant de choisir les périphériques à intégrer, afin que votre matériel se calque au mieux sur vos besoins réels.")}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('materiel.pcFeature1Title', 'Configuration Personnalisée')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.pcFeature1Desc', 'Choisissez chaque composant selon vos besoins')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('materiel.pcFeature2Title', 'Marques Réputées')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.pcFeature2Desc', 'Uniquement des composants de qualité professionnelle')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('materiel.pcFeature3Title', 'Montage Professionnel')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.pcFeature3Desc', 'Assemblage et tests par nos techniciens experts')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('materiel.pcFeature4Title', 'Garantie et Support')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.pcFeature4Desc', 'Maintenance et assistance technique incluses')}</p>
                </div>
              </li>
            </ul>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('materiel.pcCta', 'Demander un Devis Gratuit')} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-xl mb-4">{t('materiel.popularTitle', 'Configurations Populaires')}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">{t('materiel.popular1Title', 'PC Bureautique')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.popular1Desc', 'Pour usage professionnel quotidien')}</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-semibold">{t('materiel.popular2Title', 'PC Gaming')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.popular2Desc', 'Performances maximales pour les jeux')}</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">{t('materiel.popular3Title', 'Workstation')}</p>
                  <p className="text-sm text-muted-foreground">{t('materiel.popular3Desc', 'Pour création graphique et CAO')}</p>
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
            {t('materiel.rangeTitle', 'Notre Gamme de Produits')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('materiel.rangeSubtitle', 'Solutions complètes pour particuliers et entreprises')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Serveurs */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift">
            <Server size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('materiel.serversTitle', 'Serveurs')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('materiel.serversDesc', "S'adressant principalement aux entreprises, NETZ Informatique se propose de vous commander, configurer, installer et paramétrer le serveur qui répond à vos besoins.")}
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>Microsoft Windows Server</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.serversFeature2', 'Configuration sur mesure')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.serversFeature3', 'Installation et paramétrage')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.serversFeature4', 'Support technique dédié')}</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                {t('materiel.serversCta', 'Demander un Devis')}
              </Button>
            </Link>
          </div>

          {/* Portables */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift">
            <Laptop size={48} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('materiel.laptopsTitle', 'PC Portables')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('materiel.laptopsDesc', 'Acheter un PC portable est souvent une alternative performante pour remplacer et/ou compléter son PC de bureau. Mobilité et puissance réunies.')}
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.laptopsFeature1', 'Marques professionnelles (HP, Dell, Lenovo)')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.laptopsFeature2', 'Ultrabooks et workstations')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.laptopsFeature3', 'Conseil personnalisé')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.laptopsFeature4', 'Configuration et livraison')}</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                {t('materiel.laptopsCta', 'Nous Contacter')}
              </Button>
            </Link>
          </div>

          {/* Périphériques */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift">
            <HardDrive size={48} className="text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('materiel.peripheralsTitle', 'Périphériques')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('materiel.peripheralsDesc', 'Que serait un PC sans des périphériques de qualité ? NETZ Informatique vous propose des périphériques qui ont fait leur preuve tout en conservant un rapport qualité/prix intéressant.')}
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.peripheralsFeature1', 'Écrans professionnels')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.peripheralsFeature2', 'Claviers et souris ergonomiques')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.peripheralsFeature3', 'Disques durs et SSD')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.peripheralsFeature4', 'Webcams et casques')}</span>
              </li>
            </ul>
            <a
              href="https://informatique-haguenau.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                {t('materiel.peripheralsCta', 'Voir la Boutique')}
              </Button>
            </a>
          </div>

          {/* PC Gaming */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift">
            <Cpu size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('materiel.gamingTitle', 'PC Gaming')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('materiel.gamingDesc', 'Configurations haute performance pour les joueurs exigeants. Composants gaming de dernière génération pour une expérience optimale.')}
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.gamingFeature1', 'Cartes graphiques NVIDIA/AMD')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.gamingFeature2', 'Processeurs Intel/AMD dernière gen')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.gamingFeature3', 'Refroidissement performant')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.gamingFeature4', 'RGB et boîtiers gaming')}</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                {t('materiel.gamingCta', 'Configurer mon PC')}
              </Button>
            </Link>
          </div>

          {/* Imprimantes */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift">
            <Printer size={48} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('materiel.printersTitle', 'Imprimantes & Consommables')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('materiel.printersDesc', "Alimenter régulièrement son imprimante représente un budget non négligeable. Nous proposons des tarifs très compétitifs sur les cartouches d'encre de toutes les grandes marques.")}
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.printersFeature1', "Imprimantes jet d'encre et laser")}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.printersFeature2', 'Cartouches compatibles et originales')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.printersFeature3', 'Papier et fournitures')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                <span>{t('materiel.printersFeature4', 'Prix compétitifs')}</span>
              </li>
            </ul>
            <a
              href="https://informatique-haguenau.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                {t('materiel.printersCta', 'Commander')}
              </Button>
            </a>
          </div>

          {/* Garantie */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 shadow-lg text-white">
            <Shield size={48} className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('materiel.warrantyTitle', 'Garantie & Qualité')}</h3>
            <p className="mb-6 opacity-90">
              {t('materiel.warrantyDesc', 'Tous nos produits sont garantis et bénéficient de notre support technique expert. Votre satisfaction est notre priorité.')}
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t('materiel.warrantyFeature1', 'Garantie constructeur')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t('materiel.warrantyFeature2', "Support technique 35+ ans d'expérience")}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t('materiel.warrantyFeature3', 'Intervention rapide')}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>{t('materiel.warrantyFeature4', 'Pièces de rechange disponibles')}</span>
              </li>
            </ul>
            <Link to="/services/particuliers">
              <Button className="bg-white text-primary hover:bg-white/90 w-full">
                {t('materiel.warrantyCta', 'Nos Services')}
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
            {t('materiel.ctaTitle', 'Besoin de Conseils ?')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('materiel.ctaSubtitle', "Notre équipe d'experts est à votre disposition pour vous conseiller et vous accompagner dans le choix de votre matériel informatique")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t('materiel.ctaContact', 'Nous Contacter')}
              </Button>
            </Link>
            <a 
              href="https://informatique-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                {t('materiel.ctaShop', 'Visiter la Boutique en Ligne')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Materiel
