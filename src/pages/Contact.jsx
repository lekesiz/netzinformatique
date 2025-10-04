import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/schemas/contactSchema'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import GoogleMap from '@/components/common/GoogleMap'
import SEO from '@/components/common/SEO'

const Contact = () => {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', or 'error'

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO 
        title={t('contact.metaTitle', 'Contactez-nous | NETZ Informatique Haguenau')}
        description={t('contact.metaDescription', 'Contactez NETZ Informatique à Haguenau pour tous vos besoins informatiques. Intervention rapide 24-48h. Tél: 03 67 31 02 01')}
        url="/contact"
        type="website"
      />

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title', 'Contactez')} <span className="text-primary">{t('contact.titleHighlight', 'NETZ Informatique')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle', 'Notre équipe est à votre écoute pour répondre à toutes vos questions')}
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6">
                  {t('contact.formTitle', 'Envoyez-nous un Message')}
                </h2>
                
                {submitStatus === 'success' && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      {t('contact.successMessage', 'Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.')}
                    </AlertDescription>
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      {t('contact.errorMessage', 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement par téléphone.')}
                    </AlertDescription>
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.nameLabel', 'Nom Complet')} *
                    </label>
                    <input 
                      type="text" 
                      {...register('name')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.name ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder={t('contact.namePlaceholder', 'Votre nom')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.emailLabel', 'Email')} *
                    </label>
                    <input 
                      type="email" 
                      {...register('email')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.email ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder={t('contact.emailPlaceholder', 'votre@email.com')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.phoneLabel', 'Téléphone')}
                    </label>
                    <input 
                      type="tel" 
                      {...register('phone')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.phone ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder={t('contact.phonePlaceholder', '+33 6 XX XX XX XX')}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.subjectLabel', 'Sujet')}
                    </label>
                    <input 
                      type="text" 
                      {...register('subject')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.subject ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder={t('contact.subjectPlaceholder', 'Sujet de votre message')}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.messageLabel', 'Message')} *
                    </label>
                    <textarea 
                      {...register('message')}
                      rows="5" 
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.message ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder={t('contact.messagePlaceholder', 'Votre message...')}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="gradient-green text-white font-semibold w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>{t('contact.sending', 'Envoi en cours...')}</>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} /> 
                        {t('contact.send', 'Envoyer')}
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6">
                    {t('contact.infoTitle', 'Informations')}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="text-primary" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">{t('contact.phone', 'Téléphone')}</h3>
                        <a href="tel:+33367310201" className="text-muted-foreground hover:text-primary transition">
                          03 67 31 02 01
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="text-secondary" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">{t('contact.email', 'Email')}</h3>
                        <a href="mailto:contact@netzinformatique.fr" className="text-muted-foreground hover:text-primary transition">
                          contact@netzinformatique.fr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="text-accent" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">{t('contact.address', 'Adresse')}</h3>
                        <p className="text-muted-foreground">
                          1a Route de Schweighouse<br />
                          67500 Haguenau, France
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="text-green-600" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">{t('contact.hours', 'Horaires')}</h3>
                        <p className="text-muted-foreground">
                          {t('contact.hoursDetail', 'Lun-Ven: 09:00-12:00 / 14:00-18:00')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    {t('contact.urgentTitle', 'Besoin Urgent ?')}
                  </h3>
                  <p className="mb-6 opacity-90">
                    {t('contact.urgentDescription', 'Notre équipe est disponible pour une intervention rapide sous 24-48h.')}
                  </p>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+33367310201">
                      <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                        <Phone className="mr-2" size={20} />
                        {t('contact.callNow', 'Appeler Maintenant')}
                      </Button>
                    </a>
                    <a href="mailto:contact@netzinformatique.fr">
                      <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10">
                        <Mail className="mr-2" size={20} />
                        {t('contact.emailUs', 'Nous Écrire')}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {t('contact.mapTitle', 'Notre Localisation')}
              </h2>
              <p className="text-muted-foreground">
                {t('contact.mapDescription', 'Venez nous rendre visite à notre bureau à Haguenau')}
              </p>
            </div>
            <GoogleMap />
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
