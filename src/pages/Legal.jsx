import SEO from '@/components/common/SEO'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Building2, User, Server, Shield, Scale, FileText, Mail } from 'lucide-react'

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

const Legal = () => {
  const { t } = useTranslation()
  const editor = [
    [t('legal.editorDenomination', 'Dénomination sociale'), 'NETZ Informatique'],
    [t('legal.editorLegalForm', 'Forme juridique'), 'SASU (Société par actions simplifiée à associé unique)'],
    [t('legal.editorHeadquarters', 'Siège social'), '1a Route de Schweighouse, 67500 Haguenau, France'],
    [t('legal.editorCapital', 'Capital social'), '1 000,00 €'],
    ['SIREN', '818 347 346'],
    ['RCS', 'Strasbourg B 818 347 346'],
    [t('legal.editorVat', 'TVA intracommunautaire'), 'FR44 818 347 346'],
    [t('legal.editorPhone', 'Téléphone'), '03 67 31 02 01'],
    [t('legal.editorEmail', 'Email'), 'contact@netzinformatique.fr'],
  ]
  return (
    <>
      <SEO
        title="Mentions Légales | NETZ Informatique"
        description="Mentions légales de NETZ Informatique — éditeur, hébergeur, propriété intellectuelle et données personnelles."
        url="/mentions-legales"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
            <Scale size={16} className="text-accent" /> {t('legal.heroBadge', 'Informations légales')}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t('legal.heroTitle', 'Mentions Légales')}</h1>
          <p className="mt-3 text-primary-foreground/80">{t('legal.lastUpdate', 'Dernière mise à jour : 15 juin 2026')}</p>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <Section icon={Building2} title={t('legal.editorTitle', 'Éditeur du site')}>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 rounded-2xl border border-border bg-card p-6">
              {editor.map(([k, v]) => (
                <div key={k} className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section icon={User} title={t('legal.directorTitle', 'Directeur de la publication')}>
            <p>{t('legal.directorTextPrefix', 'Monsieur')} <strong className="text-foreground">Mikail Lekesiz</strong>{t('legal.directorTextSuffix', ', en qualité de Président de NETZ Informatique.')}</p>
          </Section>

          <Section icon={Server} title={t('legal.hostingTitle', 'Hébergement')}>
            <p>{t('legal.hostingIntro', 'Le site est hébergé par :')}</p>
            <p>
              <strong className="text-foreground">Vercel Inc.</strong><br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a>
            </p>
          </Section>

          <Section icon={FileText} title={t('legal.ipTitle', 'Propriété intellectuelle')}>
            <p>
              {t('legal.ipPara1', "L'ensemble de ce site (structure, textes, logos, images, graphismes et icônes) relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans l'autorisation écrite de NETZ Informatique est interdite et constitue une contrefaçon.")}
            </p>
            <p>{t('legal.ipPara2', 'Les marques et logos des partenaires (Microsoft, Cisco, Google…) restent la propriété de leurs détenteurs respectifs.')}</p>
          </Section>

          <Section icon={Shield} title={t('legal.dataTitle', 'Données personnelles & cookies')}>
            <p>
              {t('legal.dataTextPart1', 'Le traitement de vos données personnelles est décrit en détail dans notre')}{' '}
              <Link to="/politique-confidentialite" className="text-accent hover:underline">{t('legal.dataPrivacyLink', 'Politique de Confidentialité')}</Link>.
              {' '}{t('legal.dataTextPart2', 'La gestion des cookies est détaillée dans notre')}{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">{t('legal.dataCookieLink', 'Politique des Cookies')}</Link>.
            </p>
          </Section>

          <Section icon={Scale} title={t('legal.lawTitle', 'Droit applicable & litiges')}>
            <p>
              {t('legal.lawPara1', 'Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de résolution amiable, les tribunaux du ressort de Strasbourg seront seuls compétents.')}
            </p>
            <p>
              {t('legal.lawPara2', "Conformément à l'article L.612-1 du Code de la consommation, le consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige.")}
            </p>
          </Section>

          <Section icon={Mail} title={t('legal.contactTitle', 'Contact')}>
            <p>
              {t('legal.contactTextPrefix', 'Pour toute question :')} <a href="mailto:contact@netzinformatique.fr" className="text-accent hover:underline">contact@netzinformatique.fr</a>{' '}
              {t('legal.contactTextOr', 'ou')} <a href="tel:+33367310201" className="text-accent hover:underline">03 67 31 02 01</a>.
            </p>
          </Section>
        </div>
      </div>
    </>
  )
}

export default Legal
