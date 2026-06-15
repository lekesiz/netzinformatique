import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import SEO from '@/components/common/SEO'
import { GraduationCap, Award, User, Building2, ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react'

const Formation = () => {
  const { t } = useTranslation()
  return (
  <div>
    <SEO
      title={t('formation.seoTitle', 'Formations QUALIOPI & Bilan de Compétences | NETZ Informatique')}
      description={t('formation.seoDescription', 'Formations certifiées QUALIOPI et bilan de compétences financés par CPF, OPCO et Pôle Emploi. Développez vos compétences numériques à Haguenau.')}
      url="/formation"
    />
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-accent">{t('formation.heroTitleHighlight', 'Formation')}</span> QUALIOPI
        </h1>
        <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
          {t('formation.heroSubtitle', 'Formations certifiées et bilan de compétences financés par CPF, OPCO et Pôle Emploi')}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-white/10 ring-1 ring-white/20 rounded-lg px-6 py-3">
            <p className="text-sm text-primary-foreground/80">{t('formation.certificationLabel', 'Certification')}</p>
            <p className="font-bold text-accent">QUALIOPI</p>
          </div>
          <div className="bg-white/10 ring-1 ring-white/20 rounded-lg px-6 py-3">
            <p className="text-sm text-primary-foreground/80">{t('formation.certificationLabel', 'Certification')}</p>
            <p className="font-bold text-accent">TOSA</p>
          </div>
          <div className="bg-white/10 ring-1 ring-white/20 rounded-lg px-6 py-3">
            <p className="text-sm text-primary-foreground/80">{t('formation.eligibleLabel', 'Éligible')}</p>
            <p className="font-bold text-accent">Mon Compte Formation</p>
          </div>
        </div>
      </div>
    </section>

    {/* Formation Types */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('formation.solutionsTitle', 'Nos Solutions de Formation')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('formation.solutionsSubtitle', 'Des formations adaptées à votre situation professionnelle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CPF Card - Particuliers */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-primary transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <User size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('formation.cpfTitle', 'Formation CPF')}</h3>
            <p className="text-sm text-primary font-semibold mb-4">{t('formation.cpfAudience', 'Pour Particuliers')}</p>
            <p className="text-muted-foreground mb-6">
              {t('formation.cpfDesc', "Financez votre formation avec votre Compte Personnel de Formation. Accessible à tous les salariés et demandeurs d'emploi.")}
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.cpfFeature1', "Financement jusqu'à 100%")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.cpfFeature2', 'Formations bureautiques certifiées')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.cpfFeature3', 'Présentiel ou à distance')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.cpfFeature4', 'Certification TOSA incluse')}</span>
              </li>
            </ul>
            <a 
              href="https://formation-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                {t('formation.cpfCta', 'Découvrir les Formations')} <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>

          {/* OPCO Card - Professionnels */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-primary transition-all">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Building2 size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('formation.opcoTitle', 'Formation OPCO')}</h3>
            <p className="text-sm text-secondary font-semibold mb-4">{t('formation.opcoAudience', 'Pour Entreprises')}</p>
            <p className="text-muted-foreground mb-6">
              {t('formation.opcoDesc', 'Développez les compétences de vos équipes avec un financement OPCO. Solutions sur-mesure pour les professionnels.')}
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.opcoFeature1', 'Prise en charge par votre OPCO')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.opcoFeature2', 'Programmes personnalisés')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.opcoFeature3', 'Formation en groupe ou individuelle')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('formation.opcoFeature4', 'Suivi post-formation')}</span>
              </li>
            </ul>
            <a 
              href="https://formation-haguenau.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                {t('formation.opcoCta', 'En Savoir Plus')} <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>

          {/* Bilan de Compétences */}
          <Link to="/formation/bilan-competences">
            <div className="bg-card rounded-xl p-8 shadow-lg hover-lift h-full border-2 border-transparent hover:border-primary transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('formation.bilanTitle', 'Bilan de Compétences')}</h3>
              <p className="text-sm text-accent font-semibold mb-4">{t('formation.bilanAudience', 'Pour Tous')}</p>
              <p className="text-muted-foreground mb-6">
                {t('formation.bilanDesc', 'Évaluez et valorisez vos compétences professionnelles. Construisez un projet professionnel solide et réaliste.')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{t('formation.bilanFeature1', 'Analyse approfondie')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{t('formation.bilanFeature2', 'Accompagnement personnalisé')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{t('formation.bilanFeature3', 'Financement CPF possible')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{t('formation.bilanFeature4', 'Experts certifiés')}</span>
                </li>
              </ul>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                {t('formation.bilanCta', 'Découvrir le Bilan')} <ArrowRight className="ml-2" size={18} />
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
            {t('formation.statsTitle', 'Nos Résultats en Chiffres')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('formation.statsSubtitle', 'Une transparence totale sur nos formations')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg text-center">
            <Users size={48} className="text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-primary mb-2">670+</div>
            <p className="text-muted-foreground">{t('formation.stat1Label', 'Participants formés')}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('formation.stat1Sub', 'depuis notre création')}</p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg text-center">
            <TrendingUp size={48} className="text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <p className="text-muted-foreground">{t('formation.stat2Label', 'Taux de réalisation')}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('formation.stat2Sub', 'objectifs atteints à 6 mois')}</p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg text-center">
            <Award size={48} className="text-secondary mx-auto mb-4" />
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <p className="text-muted-foreground">{t('formation.stat3Label', 'Satisfaction')}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('formation.stat3Sub', 'participants satisfaits')}</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('formation.ctaTitle', 'Prêt à Développer Vos Compétences ?')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('formation.ctaSubtitle', 'Contactez-nous pour discuter de votre projet de formation et découvrir les solutions de financement adaptées')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                {t('formation.ctaContact', 'Nous Contacter')}
              </Button>
            </Link>
            <a
              href="https://formation-haguenau.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15">
                {t('formation.ctaAllFormations', 'Voir Toutes les Formations')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Formation
