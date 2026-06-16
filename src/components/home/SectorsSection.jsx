import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Building2 } from 'lucide-react'
import { sectors } from '@/pages/sectors/sectorsData'
import Reveal from '@/components/common/Reveal'

const SectorsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium">
            <Building2 size={16} /> {t('sectorsSection.badge', 'Secteurs d\'activité')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            {t('sectorsSection.titlePre', 'Des solutions pour')} <span className="text-accent">{t('sectorsSection.titleHighlight', 'votre métier')}</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('sectorsSection.subtitle', 'Nous connaissons les enjeux de votre secteur et adaptons nos solutions à vos besoins.')}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link
                to={`/sectors/${s.slug}`}
                className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon size={22} />
                </span>
                <span className="flex-1 font-heading text-sm font-semibold leading-tight">
                  {t(`sectorNames.${s.slug}`, s.name)}
                </span>
                <ArrowRight size={16} className="shrink-0 text-muted-foreground/50 transition group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectorsSection
