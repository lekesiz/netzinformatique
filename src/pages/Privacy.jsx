import SEO from '@/components/common/SEO'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
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
            <ShieldCheck size={16} className="text-accent" /> {t('privacy.heroBadge', 'Conforme RGPD')}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t('privacy.heroTitle', 'Politique de Confidentialité')}</h1>
          <p className="mt-3 text-primary-foreground/80">{t('privacy.lastUpdate', 'Dernière mise à jour : 15 juin 2026')}</p>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('privacy.intro', "NETZ Informatique s'engage à protéger la vie privée des utilisateurs de son site. La présente politique explique quelles données nous collectons, pourquoi, comment nous les utilisons et quels sont vos droits, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés ».")}
          </p>

          <Section icon={ShieldCheck} title={t('privacy.controllerTitle', 'Responsable du traitement')}>
            <p>
              {t('privacy.controllerTextPrefix', 'Le responsable du traitement est')} <strong className="text-foreground">NETZ Informatique</strong>,
              1a Route de Schweighouse, 67500 Haguenau, France.<br />
              {t('privacy.controllerContactLabel', 'Contact :')} <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a> — <a href="tel:+33367310201" className="text-accent hover:underline">03 67 31 02 01</a>.
            </p>
          </Section>

          <Section icon={Database} title={t('privacy.dataCollectedTitle', 'Données collectées')}>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">{t('privacy.dataContactLabel', 'Formulaire de contact :')}</strong> {t('privacy.dataContactValue', 'nom, adresse email, téléphone (facultatif), objet et message.')}</li>
              <li><strong className="text-foreground">{t('privacy.dataNewsletterLabel', 'Newsletter :')}</strong> {t('privacy.dataNewsletterValue', 'adresse email.')}</li>
              <li><strong className="text-foreground">{t('privacy.dataAppointmentLabel', 'Prise de rendez-vous :')}</strong> {t('privacy.dataAppointmentValue', "données fournies via l'outil Calendly.")}</li>
              <li><strong className="text-foreground">{t('privacy.dataNavigationLabel', 'Navigation :')}</strong> {t('privacy.dataNavigationValue', "données de mesure d'audience (pages visitées, appareil), via cookies, uniquement après votre consentement.")}</li>
            </ul>
            <p>{t('privacy.dataNoSensitive', "Aucune donnée sensible n'est collectée. Les champs obligatoires sont signalés dans les formulaires.")}</p>
          </Section>

          <Section icon={Target} title={t('privacy.purposesTitle', 'Finalités & bases légales')}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('privacy.purpose1Prefix', 'Répondre à vos demandes de contact ou de devis —')} <em>{t('privacy.purpose1Basis', 'base : mesures précontractuelles / intérêt légitime')}</em>.</li>
              <li>{t('privacy.purpose2Prefix', 'Vous envoyer notre newsletter —')} <em>{t('privacy.purpose2Basis', 'base : consentement')}</em> {t('privacy.purpose2Suffix', '(désinscription possible à tout moment).')}</li>
              <li>{t('privacy.purpose3Prefix', "Améliorer le site et mesurer l'audience —")} <em>{t('privacy.purpose3Basis', 'base : consentement')}</em> {t('privacy.purpose3Suffix', '(cookies analytiques).')}</li>
            </ul>
          </Section>

          <Section icon={Share2} title={t('privacy.recipientsTitle', 'Destinataires & sous-traitants')}>
            <p>{t('privacy.recipientsIntro', 'Vos données ne sont jamais vendues. Elles peuvent être traitées par des sous-traitants techniques, dans le respect du RGPD :')}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Resend</strong> {t('privacy.recipientResend', '— acheminement des emails de contact.')}</li>
              <li><strong className="text-foreground">Google Analytics</strong> {t('privacy.recipientGA', "— mesure d'audience (mode consentement, IP anonymisée).")}</li>
              <li><strong className="text-foreground">Vercel</strong> {t('privacy.recipientVercel', '— hébergement du site.')}</li>
              <li><strong className="text-foreground">Calendly</strong> {t('privacy.recipientCalendly', '— prise de rendez-vous en ligne.')}</li>
            </ul>
          </Section>

          <Section icon={Clock} title={t('privacy.retentionTitle', 'Durée de conservation')}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('privacy.retention1', "Demandes de contact : jusqu'à 3 ans après le dernier échange.")}</li>
              <li>{t('privacy.retention2', "Newsletter : jusqu'à votre désinscription.")}</li>
              <li>{t('privacy.retention3', "Données de mesure d'audience : 14 mois maximum.")}</li>
            </ul>
          </Section>

          <Section icon={UserCheck} title={t('privacy.rightsTitle', 'Vos droits')}>
            <p>{t('privacy.rightsPara1', "Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de définir des directives post-mortem.")}</p>
            <p>
              {t('privacy.rightsPara2Prefix', 'Pour les exercer, contactez-nous à')} <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a>.
              {' '}{t('privacy.rightsPara2Suffix', 'Vous pouvez également introduire une réclamation auprès de la CNIL')} (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cnil.fr</a>).
            </p>
          </Section>

          <Section icon={Cookie} title={t('privacy.cookiesTitle', 'Cookies')}>
            <p>
              {t('privacy.cookiesText', 'Le site utilise des cookies de mesure d\'audience soumis à votre consentement (bandeau au premier accès). Les détails et la gestion de vos préférences sont décrits dans notre')}{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">{t('privacy.cookiesLink', 'Politique des Cookies')}</Link>.
            </p>
          </Section>

          <Section icon={Lock} title={t('privacy.securityTitle', 'Sécurité')}>
            <p>{t('privacy.securityText', 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (chiffrement HTTPS, accès restreints, hébergement sécurisé) pour protéger vos données contre tout accès non autorisé, perte ou altération.')}</p>
          </Section>

          <Section icon={Mail} title={t('privacy.contactTitle', 'Contact')}>
            <p>
              {t('privacy.contactTextPrefix', 'Pour toute question relative à cette politique :')} <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a> {t('privacy.contactTextOr', 'ou')} <a href="tel:+33367310201" className="text-accent hover:underline">03 67 31 02 01</a>.
            </p>
          </Section>
        </div>
      </div>
    </>
  )
}

export default Privacy
