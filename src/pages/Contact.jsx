import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez <span className="text-primary">NETZ Informatique</span>
          </h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un Message</h2>
              
              {submitStatus === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.
                  </AlertDescription>
                </Alert>
              )}
              
              {submitStatus === 'error' && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone.
                  </AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom Complet *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" 
                    placeholder="votre@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" 
                    placeholder="+33 6 XX XX XX XX" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" 
                    placeholder="Sujet de votre message" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    rows="5" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" 
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="gradient-green text-white font-semibold w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <><Send className="mr-2" size={20} /> Envoyer</>
                  )}
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6">Informations</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Téléphone</h3>
                      <a href="tel:+33389992501" className="text-muted-foreground hover:text-primary">+(33) 0 8 99 25 01 51</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:contact@netzinformatique.fr" className="text-muted-foreground hover:text-primary">contact@netzinformatique.fr</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">1a Route de Schweighouse<br />67500 Haguenau, France</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
