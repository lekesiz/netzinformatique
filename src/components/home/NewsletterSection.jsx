import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema } from '@/schemas/contactSchema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle, AlertCircle, Loader2, Newspaper, Lightbulb, Gift } from 'lucide-react'

const NewsletterSection = () => {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const startedAt = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(newsletterSchema) })

  const onSubmit = async (data) => {
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          consentVersion: '2026-09',
          startedAt: startedAt.current || Date.now() - 2000,
        }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) throw new Error(result.message || 'Subscription failed')

      setStatus('success')
      setMessage(result.message || 'Vérifiez votre boîte email pour confirmer votre inscription dans les 24 heures.')
      reset()
      startedAt.current = null
    } catch (error) {
      setStatus('error')
      setMessage(error.message || t('newsletter.error', 'Une erreur est survenue. Veuillez réessayer.'))
    }
  }

  return (
    <section className="py-20 gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow" aria-hidden="true">
            <Mail size={40} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('newsletter.title', 'Restez Informé')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('newsletter.description', 'Recevez nos dernières actualités et conseils IT directement dans votre boîte mail.')}</p>

          <form
            noValidate
            onFocus={() => { startedAt.current ||= Date.now() }}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto mb-6 text-left"
          >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="newsletter-website">Site web</label>
              <input id="newsletter-website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">{t('newsletter.placeholder', 'Votre adresse email')}</label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t('newsletter.placeholder', 'Votre adresse email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                  {...register('email')}
                  className={`h-12 bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 transition ${errors.email ? 'border-red-200' : ''}`}
                  disabled={status === 'loading'}
                />
                {errors.email && <p id="newsletter-email-error" className="text-red-100 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-8" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" aria-hidden="true" />{t('newsletter.subscribing', 'Inscription...')}</span>
                ) : t('newsletter.subscribe', 'S\'inscrire')}
              </Button>
            </div>

            <label className="mt-4 flex items-start gap-3 text-sm text-white/90">
              <input
                type="checkbox"
                required
                {...register('consent')}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? 'newsletter-consent-error' : undefined}
                className="mt-1 size-4 shrink-0 accent-current"
              />
              <span>{t('newsletter.consent', 'J’accepte de recevoir la newsletter de NETZ Informatique. Je peux retirer mon accord à tout moment en écrivant à contact@netzinformatique.fr.')}</span>
            </label>
            {errors.consent && <p id="newsletter-consent-error" className="text-red-100 text-sm mt-1">{errors.consent.message}</p>}
          </form>

          {status === 'success' && (
            <div role="status" aria-live="polite" className="flex items-center justify-center gap-2 text-white bg-white/15 rounded-lg p-4 max-w-xl mx-auto">
              <CheckCircle size={20} aria-hidden="true" /><span>{message}</span>
            </div>
          )}
          {status === 'error' && (
            <div role="alert" className="flex items-center justify-center gap-2 text-red-100 bg-red-950/40 rounded-lg p-4 max-w-xl mx-auto">
              <AlertCircle size={20} aria-hidden="true" /><span>{message}</span>
            </div>
          )}

          <p className="text-sm opacity-80 mt-4">{t('newsletter.privacy', 'Aucune inscription sans votre accord explicite. Désinscription par simple demande.')}</p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"><Newspaper size={32} className="text-white mb-3" aria-hidden="true" /><h3 className="font-bold mb-2">{t('newsletter.benefit1Title', 'Actualités IT')}</h3><p className="text-sm opacity-90">{t('newsletter.benefit1Description', 'Les dernières tendances et innovations technologiques')}</p></div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"><Lightbulb size={32} className="text-white mb-3" aria-hidden="true" /><h3 className="font-bold mb-2">{t('newsletter.benefit2Title', 'Conseils Experts')}</h3><p className="text-sm opacity-90">{t('newsletter.benefit2Description', 'Astuces et bonnes pratiques pour optimiser votre IT')}</p></div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"><Gift size={32} className="text-white mb-3" aria-hidden="true" /><h3 className="font-bold mb-2">{t('newsletter.benefit3Title', 'Offres ciblées')}</h3><p className="text-sm opacity-90">{t('newsletter.benefit3Description', 'Informations commerciales destinées aux abonnés')}</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
