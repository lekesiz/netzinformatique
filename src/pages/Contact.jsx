import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/schemas/contactSchema'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import GoogleMap from '@/components/common/GoogleMap'
import SEO from '@/components/common/SEO'
import { trackFunnelStep } from '@/utils/analytics'

const Contact = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', or 'error'
  const [submitMessage, setSubmitMessage] = useState('')
  const startedAt = useRef(null)
  const statusRef = useRef(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {
      audience: searchParams.get('audience') || undefined,
      service: searchParams.get('service') || undefined,
      offer: searchParams.get('offer') || undefined,
      sector: searchParams.get('sector') || undefined,
      urgency: 'standard',
      contactPreference: 'email',
      intervention: 'a-definir',
    },
  })

  const audience = watch('audience')

  const postContact = async (payload) => {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const controller = new AbortController()
      const timeout = window.setTimeout(() => controller.abort(), 12_000)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
        })
        if (attempt === 0 && [502, 503, 504].includes(response.status)) continue
        return response
      } catch (error) {
        if (attempt === 1 || error.name === 'AbortError') throw error
      } finally {
        window.clearTimeout(timeout)
      }
    }
    throw new Error('contact_delivery_failed')
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      trackFunnelStep('contact', 'contact_form_submit', { audience: data.audience || 'unknown', service: data.service || 'unknown' })
      const response = await postContact({
        ...data,
        startedAt: startedAt.current || Date.now() - 2000,
        source: searchParams.get('source') || 'contact',
      })

      const result = await response.json().catch(() => ({}))

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || t('contact.successMessage', 'Votre message a été envoyé avec succès.'))
        reset()
        startedAt.current = null
        trackFunnelStep('contact', 'contact_form_success', { audience: data.audience || 'unknown', service: data.service || 'unknown' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message || t('contact.errorMessage', 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement par téléphone.'))
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage(t('contact.errorMessage', 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement par téléphone.'))
    } finally {
      setIsSubmitting(false)
      requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  const onInvalid = () => {
    setSubmitStatus('validation')
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  return (
    <>
      <SEO
        title={t('contact.metaTitle', 'Contactez-nous | NETZ Informatique Haguenau')}
        description="Contactez NETZ Informatique à Haguenau. Le délai et le mode d’intervention sont confirmés selon la disponibilité et le diagnostic. Tél. : 03 67 31 02 01."
        url="/contact"
        type="website"
      />

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title', 'Contactez')} <span className="text-accent">{t('contact.titleHighlight', 'NETZ Informatique')}</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              {t('contact.subtitle', 'Notre équipe est à votre écoute pour répondre à toutes vos questions')}
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6">
                  {t('contact.formTitle', 'Envoyez-nous un Message')}
                </h2>

                {submitStatus === 'success' && (
                  <Alert ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      {submitMessage}
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert ref={statusRef} tabIndex={-1} role="alert" aria-live="assertive" className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      {submitMessage}
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === 'validation' && Object.keys(errors).length > 0 && (
                  <Alert ref={statusRef} tabIndex={-1} role="alert" className="mb-6 border-destructive/40 bg-destructive/5">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <AlertDescription>
                      <p className="font-semibold">{t('contact.validationSummary', 'Veuillez corriger les champs suivants :')}</p>
                      <ul className="mt-2 list-disc pl-5">
                        {Object.entries(errors).map(([field, error]) => (
                          <li key={field}><a href={`#${field}`} className="underline">{error.message}</a></li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}

                <form
                  noValidate
                  onFocus={() => { startedAt.current ||= Date.now() }}
                  onPointerDown={() => trackFunnelStep('contact', 'contact_form_start', { source: searchParams.get('source') || 'contact' })}
                  onSubmit={handleSubmit(onSubmit, onInvalid)}
                  className="space-y-6"
                >
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Site web</label>
                    <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audience" className="block text-sm font-medium mb-2">Vous êtes *</label>
                      <select id="audience" required {...register('audience')} className="w-full min-h-12 px-4 border rounded-lg bg-background">
                        <option value="">Choisir</option>
                        <option value="particulier">Particulier</option>
                        <option value="entreprise">Entreprise / association</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">Besoin principal</label>
                      <select id="service" {...register('service')} className="w-full min-h-12 px-4 border rounded-lg bg-background">
                        <option value="">À définir ensemble</option>
                        <option value="depannage">Dépannage</option><option value="maintenance">Maintenance / infogérance</option>
                        <option value="cybersecurite">Cybersécurité</option><option value="cloud-reseau">Cloud & réseau</option>
                        <option value="ia-offline">IA locale / hybride</option><option value="web-digital">Web & digital</option>
                        <option value="formation">Formation</option><option value="materiel">Matériel</option><option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  {audience === 'entreprise' && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label htmlFor="company" className="block text-sm font-medium mb-2">Organisation</label><input id="company" autoComplete="organization" {...register('company')} className="w-full min-h-12 px-4 border rounded-lg" /></div>
                      <div><label htmlFor="scale" className="block text-sm font-medium mb-2">Utilisateurs / postes</label><select id="scale" {...register('scale')} className="w-full min-h-12 px-4 border rounded-lg bg-background"><option value="">Non précisé</option><option value="1-5">1–5</option><option value="6-20">6–20</option><option value="21-50">21–50</option><option value="51-200">51–200</option><option value="200-plus">200+</option></select></div>
                    </div>
                  )}
                  {audience === 'particulier' && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label htmlFor="device" className="block text-sm font-medium mb-2">Appareil</label><input id="device" placeholder="PC, Mac, téléphone…" {...register('device')} className="w-full min-h-12 px-4 border rounded-lg" /></div>
                      <div><label htmlFor="intervention" className="block text-sm font-medium mb-2">Mode souhaité</label><select id="intervention" {...register('intervention')} className="w-full min-h-12 px-4 border rounded-lg bg-background"><option value="a-definir">À définir</option><option value="atelier">Atelier</option><option value="sur-site">Sur site</option><option value="distance">À distance</option></select></div>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label htmlFor="urgency" className="block text-sm font-medium mb-2">Urgence</label><select id="urgency" {...register('urgency')} className="w-full min-h-12 px-4 border rounded-lg bg-background"><option value="standard">Standard</option><option value="48h">Sous 48 h si disponibilité</option><option value="urgent">Urgent — appelez-nous aussi</option></select></div>
                    <div><label htmlFor="contactPreference" className="block text-sm font-medium mb-2">Réponse préférée</label><select id="contactPreference" {...register('contactPreference')} className="w-full min-h-12 px-4 border rounded-lg bg-background"><option value="email">Email</option><option value="telephone">Téléphone</option><option value="whatsapp">WhatsApp</option></select></div>
                  </div>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.nameLabel', 'Nom Complet')} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      required
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={t('contact.namePlaceholder', 'Votre nom')}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.emailLabel', 'Email')} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      required
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={t('contact.emailPlaceholder', 'votre@email.com')}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {t('contact.phoneLabel', 'Téléphone')}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.phone ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={t('contact.phonePlaceholder', '+33 6 XX XX XX XX')}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {t('contact.subjectLabel', 'Sujet')}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.subject ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={t('contact.subjectPlaceholder', 'Sujet de votre message')}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact.messageLabel', 'Message')} *
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      rows="5"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                        errors.message ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder={t('contact.messagePlaceholder', 'Votre message...')}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
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
                <div className="bg-card rounded-2xl p-8 shadow-xl">
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
                      <MessageCircle className="text-[#25D366]" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">WhatsApp</h3>
                        <a
                          href="https://wa.me/33766638040"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition"
                        >
                          +33 7 66 63 80 40
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
                    Appelez-nous : nous confirmerons immédiatement la disponibilité, le délai et le mode d’intervention possibles.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90">
<a href="tel:+33367310201">
                        <Phone className="mr-2" size={20} />
                        {t('contact.callNow', 'Appeler Maintenant')}
                      </a>
</Button>
                    <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90">
<a href="https://wa.me/33766638040" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2" size={20} />
                        WhatsApp
                      </a>
</Button>
                    <Button asChild size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10">
<a href="mailto:contact@netzinformatique.fr">
                        <Mail className="mr-2" size={20} />
                        {t('contact.emailUs', 'Nous Écrire')}
                      </a>
</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-12 bg-muted">
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
