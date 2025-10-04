import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema } from '@/schemas/contactSchema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

const NewsletterSection = () => {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(newsletterSchema)
  })

  const onSubmit = async (data) => {
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe')
      }

      setStatus('success')
      setMessage(t('newsletter.success', 'Merci ! Vous êtes maintenant inscrit à notre newsletter.'))
      reset()
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage(t('newsletter.error', 'Une erreur est survenue. Veuillez réessayer.'))
      console.error('Newsletter subscription error:', error)
    }
  }

  return (
    <section className="py-20 gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
            <Mail size={40} className="text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('newsletter.title', 'Restez Informé')}
          </h2>
          
          <p className="text-xl opacity-90 mb-8">
            {t('newsletter.description', 'Recevez nos dernières actualités, conseils IT et offres exclusives directement dans votre boîte mail.')}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
            <div className="flex-1">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder', 'Votre adresse email')}
                {...register('email')}
                className={`h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition ${
                  errors.email ? 'border-red-300' : ''
                }`}
                disabled={status === 'loading'}
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1 text-left">{errors.email.message}</p>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-8 transition-all"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  {t('newsletter.subscribing', 'Inscription...')}
                </span>
              ) : (
                t('newsletter.subscribe', 'S\'inscrire')
              )}
            </Button>
          </form>

          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 text-accent bg-white/10 rounded-lg p-4 max-w-xl mx-auto animate-fadeIn">
              <CheckCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 text-red-300 bg-white/10 rounded-lg p-4 max-w-xl mx-auto animate-fadeIn">
              <AlertCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          <p className="text-sm opacity-70 mt-4">
            {t('newsletter.privacy', 'Nous respectons votre vie privée. Désinscription possible à tout moment.')}
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="font-bold mb-2">{t('newsletter.benefit1Title', 'Actualités IT')}</h3>
              <p className="text-sm opacity-80">
                {t('newsletter.benefit1Description', 'Les dernières tendances et innovations technologiques')}
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold mb-2">{t('newsletter.benefit2Title', 'Conseils Experts')}</h3>
              <p className="text-sm opacity-80">
                {t('newsletter.benefit2Description', 'Astuces et bonnes pratiques pour optimiser votre IT')}
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-bold mb-2">{t('newsletter.benefit3Title', 'Offres Exclusives')}</h3>
              <p className="text-sm opacity-80">
                {t('newsletter.benefit3Description', 'Promotions et réductions réservées aux abonnés')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
