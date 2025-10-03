import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectorPage = ({ sector }) => {
  const { t } = useTranslation();

  const { name, description, heroImage, challenges, solutions, icon: Icon } = sector;

  return (
    <>
      <SEO title={name} description={description} />
      <div className="bg-white">
        {/* Hero Section */}
        <section 
          className="py-24 text-white text-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-4">
            <Icon className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('sectors.for', { sector: name })}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">{description}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('sectors.challenges', 'Vos Enjeux')}</h2>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('sectors.solutions', 'Nos Solutions')}</h2>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="gradient-blue text-white font-semibold">
                  {t('sectors.cta', { sector: name })}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectorPage;
