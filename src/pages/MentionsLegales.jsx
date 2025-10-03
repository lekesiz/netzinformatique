import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function MentionsLegales() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Mentions Légales</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Éditeur du site</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Raison sociale :</strong> NETZ Informatique</p>
            <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
            <p><strong>Siège social :</strong> 1a Route de Schweighouse, 67500 Haguenau, France</p>
            <p><strong>SIRET :</strong> RCS Strasbourg 818 347 346</p>
            <p><strong>Téléphone :</strong> +(33) 0 8 99 25 01 51</p>
            <p><strong>Email :</strong> contact@netzinformatique.fr</p>
            <p><strong>Directeur de la publication :</strong> M. Mikail Lekesiz</p>
            <p><strong>Certification :</strong> QUALIOPI</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Hébergement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p><strong>Site web :</strong> https://vercel.com</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Propriété intellectuelle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              L'ensemble de ce site relève de la législation française et internationale 
              sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés, y compris pour les documents téléchargeables et 
              les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur quelque support que ce soit 
              est formellement interdite sauf autorisation expresse de NETZ Informatique.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Données personnelles et RGPD</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la 
              loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, 
              de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter par email à : 
              contact@netzinformatique.fr ou par courrier à notre adresse postale.
            </p>
            <p>
              Pour plus d'informations sur notre politique de confidentialité, veuillez consulter 
              notre <a href="/politique-confidentialite" className="text-primary hover:underline">
              page dédiée</a>.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant 
              à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre 
              politique de confidentialité.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limitation de responsabilité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site 
              est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, 
              des omissions ou des lacunes.
            </p>
            <p>
              NETZ Informatique ne pourra être tenue responsable des dommages directs et indirects 
              causés au matériel de l'utilisateur, lors de l'accès au site, et résultant de 
              l'utilisation d'un matériel ne répondant pas aux spécifications requises.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  )
}