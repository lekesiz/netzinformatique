import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';

const Legal = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('legal.title', 'Mentions Légales')} description={t('legal.description', 'Consultez les mentions légales de NETZ Informatique.')} url="/mentions-legales" />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
          <h1>{t('legal.title', 'Mentions Légales')}</h1>
          <p>{t('legal.lastUpdated', 'Dernière mise à jour : 3 octobre 2025')}</p>
          
          <h2>{t('legal.editorTitle', 'Éditeur du site')}</h2>
          <p>
            <strong>{t('legal.companyName', 'Dénomination sociale :')}</strong> NETZ Informatique<br/>
            <strong>{t('legal.legalForm', 'Forme juridique :')}</strong> SASU (Société par actions simplifiée à associé unique)<br/>
            <strong>{t('legal.address', 'Adresse du siège social :')}</strong> 1a Route de Schweighouse, 67500 Haguenau, France<br/>
            <strong>{t('legal.shareCapital', 'Capital social :')}</strong> 1 000,00 €<br/>
            <strong>{t('legal.siren', 'SIREN :')}</strong> 818 347 346<br/>
            <strong>{t('legal.rcs', 'RCS :')}</strong> Strasbourg B 818 347 346<br/>
            <strong>{t('legal.vat', 'Numéro de TVA intracommunautaire :')}</strong> FR44818347346<br/>
            <strong>{t('legal.phone', 'Téléphone :')}</strong> +(33) 08 99 25 01 51<br/>
            <strong>{t('legal.email', 'Email :')}</strong> contact@netzinformatique.fr
          </p>

          <h2>{t('legal.publicationDirectorTitle', 'Directeur de la publication')}</h2>
          <p>{t('legal.publicationDirectorName', 'Mikail Lekesiz, en qualité de Président.')}</p>

          <h2>{t('legal.hostingTitle', 'Hébergement')}</h2>
          <p>
            <strong>{t('legal.hostName', 'Hébergeur :')}</strong> Vercel Inc.<br/>
            <strong>{t('legal.hostAddress', 'Adresse :')}</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br/>
            <strong>{t('legal.hostContact', 'Contact :')}</strong> privacy@vercel.com
          </p>

          <h2>{t('legal.ipTitle', 'Propriété Intellectuelle')}</h2>
          <p>{t('legal.ipContent', 'L`ensemble de ce site relève de la législation française et internationale sur le droit d`auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.')}</p>

          <h2>{t('legal.pdTitle', 'Données Personnelles')}</h2>
          <p>{t('legal.pdContent', 'Pour plus d`informations sur la manière dont nous collectons et traitons vos données, veuillez consulter notre <a href="/politique-confidentialite">Politique de Confidentialité</a>.')}</p>
        </div>
      </div>
    </>
  );
};

export default Legal;
