import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('privacy.title', 'Politique de Confidentialité')} description={t('privacy.description', 'Notre politique de confidentialité concernant la collecte et le traitement de vos données personnelles.')} url="/politique-confidentialite" />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
          <h1>{t('privacy.title', 'Politique de Confidentialité')}</h1>
          <p>{t('privacy.lastUpdated', 'Dernière mise à jour : 3 octobre 2025')}</p>

          <p>{t('privacy.intro', 'NETZ Informatique s`engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique quelles données nous collectons, pourquoi nous les collectons, et comment nous les utilisons.')}</p>

          <h2>{t('privacy.collectionTitle', 'Collecte des données')}</h2>
          <p>{t('privacy.collectionContent', 'Nous collectons des données lorsque vous utilisez notre formulaire de contact (nom, email, téléphone, message) ou lorsque vous naviguez sur notre site (données analytiques anonymes via des cookies).')}</p>

          <h2>{t('privacy.usageTitle', 'Utilisation des données')}</h2>
          <p>{t('privacy.usageContent', 'Les données du formulaire de contact sont utilisées uniquement pour répondre à votre demande. Les données analytiques nous aident à améliorer notre site.')}</p>

          <h2>{t('privacy.sharingTitle', 'Partage des données')}</h2>
          <p>{t('privacy.sharingContent', 'Nous ne vendons, n`échangeons et ne transférons pas vos données personnelles identifiables à des tiers.')}</p>

          <h2>{t('privacy.rightsTitle', 'Vos droits')}</h2>
          <p>{t('privacy.rightsContent', 'Conformément au RGPD, vous disposez d`un droit d`accès, de rectification, de suppression et d`opposition à vos données. Pour exercer ces droits, contactez-nous à contact@netzinformatique.fr.')}</p>

          <h2>{t('privacy.cookiesTitle', 'Cookies')}</h2>
          <p>{t('privacy.cookiesContent', 'Notre site utilise des cookies pour améliorer l`expérience utilisateur et pour des mesures d`audience. Vous pouvez configurer votre navigateur pour refuser les cookies.')}</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
