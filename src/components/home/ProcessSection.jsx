import { useTranslation } from 'react-i18next'
import { PhoneCall, FileText, Wrench, HeartHandshake } from 'lucide-react'
import Reveal from '@/components/common/Reveal'

const ProcessSection = () => {
  const { t } = useTranslation()

  const steps = [
    {
      icon: PhoneCall,
      title: t('process.s1Title', 'Échange & diagnostic'),
      desc: t('process.s1Desc', 'Vous nous expliquez votre besoin. Nous réalisons un diagnostic gratuit, sans engagement.'),
    },
    {
      icon: FileText,
      title: t('process.s2Title', 'Devis transparent'),
      desc: t('process.s2Desc', 'Vous recevez une proposition claire et détaillée, sans surprise ni frais cachés.'),
    },
    {
      icon: Wrench,
      title: t('process.s3Title', 'Intervention experte'),
      desc: t('process.s3Desc', 'Nos techniciens certifiés interviennent rapidement, sur site ou à distance.'),
    },
    {
      icon: HeartHandshake,
      title: t('process.s4Title', 'Suivi & garantie'),
      desc: t('process.s4Desc', 'Nous restons disponibles après l\'intervention pour assurer votre tranquillité.'),
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium">
            {t('process.badge', 'Notre méthode')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            {t('process.titlePre', 'Comment nous')} <span className="text-accent">{t('process.titleHighlight', 'travaillons')}</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle', 'Une approche simple et transparente, de votre premier appel jusqu\'au suivi.')}
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* connector line (desktop) */}
          <div className="pointer-events-none absolute top-7 left-0 right-0 hidden lg:block">
            <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.1} className="relative text-center">
              <div className="relative mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                <step.icon size={24} />
                <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground text-xs font-bold ring-2 ring-background">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
