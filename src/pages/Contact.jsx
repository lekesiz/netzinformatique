import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci pour votre message!')
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom Complet *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea required rows="5" className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary" placeholder="Votre message..."></textarea>
                </div>
                <Button type="submit" size="lg" className="gradient-green text-white font-semibold w-full">
                  <Send className="mr-2" size={20} /> Envoyer
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
