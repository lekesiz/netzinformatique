import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { HelpCircle, ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Reveal from '@/components/common/Reveal'

const HomeFAQSection = () => {
  const { t } = useTranslation()

  // Reuse the already-translated top FAQ keys (faq.q1–q5 / a1–a5)
  const faqs = [
    { q: t('faq.q1', 'Quels sont vos délais d\'intervention ?'), a: t('faq.a1', 'Nous intervenons généralement sous 24 à 48h pour les urgences à Haguenau et ses environs (rayon de 30 km). Pour les interventions planifiées, nous nous adaptons à votre agenda.') },
    { q: t('faq.q2', 'Quels sont vos tarifs ?'), a: t('faq.a2', 'Nos tarifs varient selon la nature de l\'intervention. Diagnostic gratuit, puis devis détaillé avant toute intervention. Forfaits mensuels disponibles pour les entreprises à partir de 79€/mois.') },
    { q: t('faq.q3', 'Intervenez-vous sur Mac et PC ?'), a: t('faq.a3', 'Oui, nous intervenons sur tous types d\'ordinateurs : PC (Windows, Linux) et Mac (macOS). Nous sommes également compétents sur les serveurs, NAS, équipements réseau, imprimantes et périphériques.') },
    { q: t('faq.q4', 'Proposez-vous des formations ?'), a: t('faq.a4', 'Oui, nous sommes un organisme de formation certifié QUALIOPI. Nos formations sont éligibles aux financements OPCO, Pôle Emploi et CPF. Plus de 670 participants formés.') },
    { q: t('faq.q5', 'Qu\'est-ce que l\'IA Offline ?'), a: t('faq.a5', 'L\'IA Offline consiste à installer un serveur d\'intelligence artificielle directement dans vos locaux. Vos données restent 100% confidentielles, sans jamais transiter par le cloud. Conformité RGPD garantie.') },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          {/* Left: intro + CTA */}
          <Reveal className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-medium">
              <HelpCircle size={16} /> {t('homeFaq.badge', 'Questions fréquentes')}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              {t('homeFaq.titlePre', 'Vous avez des')} <span className="text-accent">{t('homeFaq.titleHighlight', 'questions')}</span> ?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              {t('homeFaq.subtitle', 'Voici les réponses aux questions les plus posées. Vous ne trouvez pas la vôtre ?')}
            </p>
            <Link to="/faq" className="inline-block mt-6">
              <Button variant="outline" className="gap-2">
                {t('homeFaq.cta', 'Voir toutes les questions')}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </Reveal>

          {/* Right: accordion */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-5 mb-3 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default HomeFAQSection
