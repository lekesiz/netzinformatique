import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react'

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation()

  const sections = [
    {
      icon: Shield,
      title: "Introduction",
      content: `NETZ Informatique s'engage à protéger la confidentialité des données personnelles de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.`
    },
    {
      icon: Database,
      title: "Données collectées",
      items: [
        "Nom et prénom",
        "Adresse email",
        "Numéro de téléphone",
        "Adresse postale (pour les livraisons)",
        "Données de navigation (cookies)",
        "Informations techniques (adresse IP, navigateur)"
      ]
    },
    {
      icon: Eye,
      title: "Utilisation des données",
      items: [
        "Traitement de vos demandes et commandes",
        "Communication sur nos services",
        "Amélioration de notre site web",
        "Respect des obligations légales",
        "Envoi d'informations commerciales (avec votre consentement)"
      ]
    },
    {
      icon: Lock,
      title: "Protection des données",
      content: `Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.`
    },
    {
      icon: UserCheck,
      title: "Vos droits",
      items: [
        "Droit d'accès à vos données",
        "Droit de rectification",
        "Droit à l'effacement",
        "Droit à la limitation du traitement",
        "Droit à la portabilité",
        "Droit d'opposition"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Politique de Confidentialité</h1>
        
        <div className="grid gap-6">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {section.content && (
                  <p className="text-muted-foreground mb-4">{section.content}</p>
                )}
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Notre site utilise des cookies pour :</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mémoriser vos préférences linguistiques</li>
                <li>Analyser le trafic du site (Google Analytics)</li>
                <li>Améliorer votre expérience de navigation</li>
              </ul>
              <p className="text-sm">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
                mais cela peut affecter votre expérience sur notre site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conservation des données</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
                aux finalités pour lesquelles elles ont été collectées, conformément à la législation 
                en vigueur.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Données clients : 3 ans après la dernière interaction</li>
                <li>Données de prospection : 3 ans après collecte</li>
                <li>Cookies : 13 mois maximum</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer 
                vos droits, vous pouvez nous contacter :
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email :</strong> contact@netzinformatique.fr</p>
                <p><strong>Téléphone :</strong> +(33) 0 8 99 25 01 51</p>
                <p><strong>Adresse :</strong> 1a Route de Schweighouse, 67500 Haguenau</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Cette politique de confidentialité est conforme au RGPD (Règlement Général sur la Protection des Données)
          </p>
        </div>
      </div>
    </div>
  )
}