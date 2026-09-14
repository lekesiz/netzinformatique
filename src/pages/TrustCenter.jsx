import { Link } from 'react-router-dom'
import { Building2, ShieldCheck, FileCheck2, Accessibility, BookOpenCheck, Mail, ExternalLink } from 'lucide-react'
import SEO from '@/components/common/SEO'

const sections = [
  {
    icon: Building2,
    title: 'Identité vérifiable',
    content: <><p>NETZ Informatique est une SAS française active, créée le 10 février 2016, SIREN 818 347 346, dont le siège est situé 1 A Route de Schweighouse, 67500 Haguenau.</p><a href="https://annuaire-entreprises.data.gouv.fr/entreprise/netz-informatique-818347346" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">Vérifier sur l’Annuaire des Entreprises <ExternalLink size={16} aria-hidden="true" /></a></>,
  },
  {
    icon: FileCheck2,
    title: 'Qualité et périmètre des certifications',
    content: <p>La fiche publique de l’Annuaire des Entreprises indique que la structure est un organisme de formation certifié Qualiopi. Le périmètre publié sur ce site est limité aux actions de formation et aux bilans de compétences. Un financement n’est jamais présenté comme automatique : il dépend du dispositif et du dossier.</p>,
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité et confidentialité par conception',
    content: <p>Les formulaires appliquent une validation serveur stricte, des limites de taille, des protections anti-abus et une journalisation sans contenu personnel. Les outils d’analyse, de marketing et les services tiers restent bloqués jusqu’au consentement correspondant. Les prestations de cybersécurité réduisent le risque mais ne constituent ni une garantie d’absence d’incident ni un conseil juridique.</p>,
  },
  {
    icon: BookOpenCheck,
    title: 'Méthode éditoriale et corrections',
    content: <p>Les articles prioritaires indiquent un auteur, une date de révision et des sources primaires. Les chiffres, certifications, résultats et témoignages ne sont publiés qu’avec une source ou une autorisation traçable. Pour signaler une erreur, écrivez à l’adresse ci-dessous avec l’URL et le passage concerné ; une correction matérielle est datée sur la page.</p>,
  },
  {
    icon: Accessibility,
    title: 'Accessibilité',
    content: <p>Notre objectif produit est WCAG 2.2 niveau AA et RGAA, sans présenter les tests automatisés comme une déclaration officielle de conformité. Le site prévoit navigation clavier, lien d’évitement, zones de statut accessibles, réduction des animations et contrôles tactiles dimensionnés. Signalez tout obstacle : nous proposerons une alternative accessible et prioriserons la correction.</p>,
  },
]

const TrustCenter = () => (
  <>
    <SEO title="Centre de confiance | NETZ Informatique" description="Identité légale, qualité, sécurité, confidentialité, méthode éditoriale, corrections et engagement d’accessibilité de NETZ Informatique." url="/confiance" />
    <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="font-semibold text-accent mb-3">Transparence opérationnelle</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Centre de confiance</h1>
        <p className="max-w-3xl mx-auto text-lg text-primary-foreground/85">Les éléments vérifiables qui encadrent notre entreprise, notre site et notre manière de travailler.</p>
      </div>
    </section>
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto grid gap-6">
        {sections.map(({ icon: Icon, title, content }) => (
          <section key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon aria-hidden="true" /></span><div className="space-y-3 text-muted-foreground"><h2 className="text-2xl font-bold text-foreground">{title}</h2>{content}</div></div>
          </section>
        ))}
        <section className="rounded-2xl bg-muted p-7">
          <h2 className="text-2xl font-bold mb-3">Contact confiance et accessibilité</h2>
          <p className="text-muted-foreground mb-4">Objet conseillé : « Correction », « Sécurité » ou « Accessibilité ». N’incluez pas de mot de passe ou de donnée sensible.</p>
          <a href="mailto:contact@netzinformatique.fr" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"><Mail size={18} aria-hidden="true" /> contact@netzinformatique.fr</a>
        </section>
        <p className="text-sm text-muted-foreground">Dernière révision : 14 septembre 2026. Voir aussi les <Link to="/mentions-legales" className="text-primary hover:underline">mentions légales</Link>, la <Link to="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> et la <Link to="/cookie-policy" className="text-primary hover:underline">politique des cookies</Link>.</p>
      </div>
    </div>
  </>
)

export default TrustCenter
