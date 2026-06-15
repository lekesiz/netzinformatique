import SEO from '@/components/common/SEO'
import { Link } from 'react-router-dom'
import {
  ShieldCheck, Database, Target, Share2, Clock, UserCheck, Cookie, Lock, Mail,
} from 'lucide-react'

const Section = ({ icon: Icon, title, children }) => (
  <section className="scroll-mt-24">
    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
        <Icon size={20} />
      </span>
      {title}
    </h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </section>
)

const Privacy = () => {
  return (
    <>
      <SEO
        title="Politique de Confidentialité | NETZ Informatique"
        description="Comment NETZ Informatique collecte, utilise et protège vos données personnelles, conformément au RGPD."
        url="/politique-confidentialite"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
            <ShieldCheck size={16} className="text-accent" /> Conforme RGPD
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Politique de Confidentialité</h1>
          <p className="mt-3 text-primary-foreground/80">Dernière mise à jour : 15 juin 2026</p>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            NETZ Informatique s'engage à protéger la vie privée des utilisateurs de son site. La présente
            politique explique quelles données nous collectons, pourquoi, comment nous les utilisons et
            quels sont vos droits, conformément au Règlement Général sur la Protection des Données (RGPD)
            et à la loi « Informatique et Libertés ».
          </p>

          <Section icon={ShieldCheck} title="Responsable du traitement">
            <p>
              Le responsable du traitement est <strong className="text-foreground">NETZ Informatique</strong>,
              1a Route de Schweighouse, 67500 Haguenau, France.<br />
              Contact : <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a> — <a href="tel:+33367310201" className="text-accent hover:underline">03 67 31 02 01</a>.
            </p>
          </Section>

          <Section icon={Database} title="Données collectées">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Formulaire de contact :</strong> nom, adresse email, téléphone (facultatif), objet et message.</li>
              <li><strong className="text-foreground">Newsletter :</strong> adresse email.</li>
              <li><strong className="text-foreground">Prise de rendez-vous :</strong> données fournies via l'outil Calendly.</li>
              <li><strong className="text-foreground">Navigation :</strong> données de mesure d'audience (pages visitées, appareil), via cookies, uniquement après votre consentement.</li>
            </ul>
            <p>Aucune donnée sensible n'est collectée. Les champs obligatoires sont signalés dans les formulaires.</p>
          </Section>

          <Section icon={Target} title="Finalités & bases légales">
            <ul className="list-disc pl-5 space-y-2">
              <li>Répondre à vos demandes de contact ou de devis — <em>base : mesures précontractuelles / intérêt légitime</em>.</li>
              <li>Vous envoyer notre newsletter — <em>base : consentement</em> (désinscription possible à tout moment).</li>
              <li>Améliorer le site et mesurer l'audience — <em>base : consentement</em> (cookies analytiques).</li>
            </ul>
          </Section>

          <Section icon={Share2} title="Destinataires & sous-traitants">
            <p>Vos données ne sont jamais vendues. Elles peuvent être traitées par des sous-traitants techniques, dans le respect du RGPD :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Resend</strong> — acheminement des emails de contact.</li>
              <li><strong className="text-foreground">Google Analytics</strong> — mesure d'audience (mode consentement, IP anonymisée).</li>
              <li><strong className="text-foreground">Vercel</strong> — hébergement du site.</li>
              <li><strong className="text-foreground">Calendly</strong> — prise de rendez-vous en ligne.</li>
            </ul>
          </Section>

          <Section icon={Clock} title="Durée de conservation">
            <ul className="list-disc pl-5 space-y-2">
              <li>Demandes de contact : jusqu'à 3 ans après le dernier échange.</li>
              <li>Newsletter : jusqu'à votre désinscription.</li>
              <li>Données de mesure d'audience : 14 mois maximum.</li>
            </ul>
          </Section>

          <Section icon={UserCheck} title="Vos droits">
            <p>Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de définir des directives post-mortem.</p>
            <p>
              Pour les exercer, contactez-nous à <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a>.
              Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cnil.fr</a>).
            </p>
          </Section>

          <Section icon={Cookie} title="Cookies">
            <p>
              Le site utilise des cookies de mesure d'audience soumis à votre consentement (bandeau au premier
              accès). Les détails et la gestion de vos préférences sont décrits dans notre{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">Politique des Cookies</Link>.
            </p>
          </Section>

          <Section icon={Lock} title="Sécurité">
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (chiffrement HTTPS, accès restreints, hébergement sécurisé) pour protéger vos données contre tout accès non autorisé, perte ou altération.</p>
          </Section>

          <Section icon={Mail} title="Contact">
            <p>
              Pour toute question relative à cette politique : <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a> ou <a href="tel:+33367310201" className="text-accent hover:underline">03 67 31 02 01</a>.
            </p>
          </Section>
        </div>
      </div>
    </>
  )
}

export default Privacy
