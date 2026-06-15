import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Factory, Scale, ShoppingBag, GraduationCap, ArrowRight, TrendingUp } from 'lucide-react'
import Reveal from '@/components/common/Reveal'

const CaseStudiesSection = () => {
  const { t } = useTranslation()

  const cases = [
    {
      icon: Factory,
      sector: t('cases.c1Sector', 'PME industrielle · Haguenau'),
      challenge: t('cases.c1Challenge', 'Pannes informatiques fréquentes et aucune sauvegarde fiable, mettant la production à l\'arrêt.'),
      solution: t('cases.c1Solution', 'Contrat de maintenance proactive + sauvegardes automatiques et supervision 24/7.'),
      metric: '-70%',
      result: t('cases.c1Result', 'd\'incidents, zéro perte de données'),
    },
    {
      icon: Scale,
      sector: t('cases.c2Sector', 'Cabinet juridique'),
      challenge: t('cases.c2Challenge', 'Besoin d\'IA pour gagner du temps, sans envoyer de données confidentielles dans le cloud.'),
      solution: t('cases.c2Solution', 'Déploiement d\'une IA Offline 100% locale, conforme RGPD.'),
      metric: '100%',
      result: t('cases.c2Result', 'des données traitées en local, conformité RGPD'),
    },
    {
      icon: ShoppingBag,
      sector: t('cases.c3Sector', 'Commerce local'),
      challenge: t('cases.c3Challenge', 'Très faible visibilité en ligne et aucune présence commerciale digitale.'),
      solution: t('cases.c3Solution', 'Création d\'un site vitrine optimisé SEO + référencement local.'),
      metric: '×3',
      result: t('cases.c3Result', 'de visiteurs en 6 mois'),
    },
    {
      icon: GraduationCap,
      sector: t('cases.c4Sector', 'Formation professionnelle'),
      challenge: t('cases.c4Challenge', 'Montée en compétences des équipes sur les outils numériques et l\'IA.'),
      solution: t('cases.c4Solution', 'Formations certifiées QUALIOPI, finançables CPF/OPCO.'),
      metric: '670+',
      result: t('cases.c4Result', 'participants formés'),
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-medium">
            <TrendingUp size={16} /> {t('cases.badge', 'Résultats concrets')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            {t('cases.title', 'Nos')} <span className="text-accent">{t('cases.titleHighlight', 'réalisations')}</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cases.subtitle', 'Des exemples concrets de l\'impact de nos solutions pour nos clients du Grand Est.')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full flex flex-col bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <c.icon size={24} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">{c.sector}</p>
                <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">{t('cases.challengeLabel', 'Défi :')}</strong> {c.challenge}</p>
                <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">{t('cases.solutionLabel', 'Solution :')}</strong> {c.solution}</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="text-3xl font-bold text-accent font-heading">{c.metric}</div>
                  <div className="text-sm text-muted-foreground">{c.result}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              {t('cases.cta', 'Discutons de votre projet')}
              <ArrowRight size={18} />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default CaseStudiesSection
