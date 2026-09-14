import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { sectors } from './sectorsData';
import NotFound from '../NotFound';

const SectorPage = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const sector = sectors.find((s) => s.slug === slug);

  // Graceful fallback when the slug doesn't match any sector
  if (!sector) {
    return <NotFound />;
  }

  const { name, description, heroImage, challenges, solutions, icon: Icon } = sector;

  return (
    <>
      <SEO title={`Solutions IT pour ${name} | NETZ Informatique`} description={description} url={`/sectors/${slug}`} />
      <div className="bg-background">
        {/* Hero Section */}
        <section
          className="relative py-24 text-white text-center bg-cover bg-center bg-primary"
          style={heroImage ? { backgroundImage: `linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url(${heroImage})` } : undefined}
        >
          <div className="container mx-auto px-4">
            {Icon && <Icon className="w-16 h-16 mx-auto mb-4" />}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('sectors.for', { sector: name, defaultValue: 'Solutions informatiques pour {{sector}}' })}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">{description}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('sectors.challenges', 'Vos Enjeux')}</h2>
                <ul className="space-y-4">
                  {(challenges || []).map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('sectors.solutions', 'Nos Solutions')}</h2>
                <ul className="space-y-4">
                  {(solutions || []).map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl">✓</span>
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
<Link to="/contact">
                  {t('sectors.cta', { sector: name, defaultValue: 'Discutons de votre projet — {{sector}}' })}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectorPage;
