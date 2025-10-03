import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

const NewsletterSection = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage(t('newsletter.errorInvalid', 'Veuillez entrer une adresse email valide'))
      return
    }

    setStatus('loading')

    try {
      // TODO: Implement newsletter API call
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus('success')
      setMessage(t('newsletter.success', 'Merci ! Vous êtes maintenant inscrit à notre newsletter.'))
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(t('newsletter.error', 'Une erreur est survenue. Veuillez réessayer.'))
    }
  }

  return (
    <section className="py-20 gradient-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={40} className="text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('newsletter.title', 'Restez Informé')}
          </h2>
          
          <p className="text-xl opacity-90 mb-8">
            {t('newsletter.description', 'Recevez nos dernières actualités, conseils IT et offres exclusives directement dans votre boîte mail.')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder', 'Votre adresse email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              disabled={status === 'loading'}
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold h-12 px-8"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('newsletter.subscribing', 'Inscription...') : t('newsletter.subscribe', 'S\'inscrire')}
            </Button>
          </form>

          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 text-accent bg-white/10 rounded-lg p-4 max-w-xl mx-auto">
              <CheckCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 text-red-300 bg-white/10 rounded-lg p-4 max-w-xl mx-auto">
              <AlertCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          <p className="text-sm opacity-70 mt-4">
            {t('newsletter.privacy', 'Nous respectons votre vie privée. Désinscription possible à tout moment.')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
