import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

const FormationProfessionnelle = () => {
  const { t } = useTranslation();

  const pageTitle = t('formation.title', 'Formation Professionnelle Certifiée QUALIOPI');
  const pageDescription = t('formation.description', 'Développez vos compétences et celles de vos équipes avec nos formations informatiques certifiées QUALIOPI, éligibles au financement.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/formation-professionnelle' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'EducationalOccupationalProgram',
    },
    breadcrumbs,
  };

  const courses = [
    { title: t('formation.course1', 'Maîtrise des Outils Bureautiques (Excel, Word, etc.)') },
    { title: t('formation.course2', 'Initiation à l`Intelligence Artificielle') },
    { title: t('formation.course3', 'Cybersécurité pour les PME') },
    { title: t('formation.course4', 'Marketing Digital et SEO') },
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/formation-professionnelle" />
      <StructuredData type="course" data={serviceData} />

      <div className="bg-gradient-to-b from-accent/5 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
                <img src="/images/qualiopi-logo.png" alt="QUALIOPI Logo" className="h-24" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent-dark mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('formation.subtitle', 'Des formations adaptées à vos besoins')}</h2>
                <p className="mb-6 text-muted-foreground">{t('formation.p1', 'En tant qu`organisme de formation certifié QUALIOPI, nous garantissons des programmes de haute qualité, conçus pour être directement applicables dans votre environnement professionnel. Nos formations sont éligibles aux financements par les OPCO, Pôle Emploi, et autres dispositifs.')}</p>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
                      <Award className="text-accent" size={24} />
                      <span className="text-lg font-medium">{course.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <h3 className="text-2xl font-bold text-center mb-6">{t('formation.ctaTitle', 'Consultez notre catalogue')}</h3>
                <p className="text-center text-muted-foreground mb-6">{t('formation.ctaDescription', 'Découvrez toutes nos formations et trouvez celle qui correspond à vos objectifs.')}</p>
                <div className="flex flex-col gap-4">
                  <Link to="/formation">
                    <Button size="lg" className="w-full gradient-green text-white font-semibold">
                      {t('formation.ctaButton', 'Voir le Catalogue')}
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationProfessionnelle;
