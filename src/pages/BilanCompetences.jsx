import { CheckCircle, Clock, Users, Award, TrendingUp, Target, FileText, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';

const BilanCompetences = () => {
  const { t } = useTranslation();
  const phases = [
    {
      number: "01",
      title: t('bilan.phase1Title', 'Phase Préliminaire'),
      duration: t('bilan.phase1Duration', '2-3 heures'),
      icon: Target,
      items: [
        t('bilan.phase1Item1', 'Analyse de votre demande et de vos besoins'),
        t('bilan.phase1Item2', 'Présentation des méthodes et outils utilisés'),
        t('bilan.phase1Item3', 'Définition des objectifs personnalisés'),
        t('bilan.phase1Item4', 'Établissement du planning des séances')
      ]
    },
    {
      number: "02",
      title: t('bilan.phase2Title', "Phase d'Investigation"),
      duration: t('bilan.phase2Duration', '16-18 heures'),
      icon: TrendingUp,
      items: [
        t('bilan.phase2Item1', 'Identification de vos compétences professionnelles'),
        t('bilan.phase2Item2', 'Analyse de vos aptitudes et motivations'),
        t('bilan.phase2Item3', 'Exploration des pistes professionnelles'),
        t('bilan.phase2Item4', "Tests psychométriques et d'orientation"),
        t('bilan.phase2Item5', 'Validation des options les plus pertinentes')
      ]
    },
    {
      number: "03",
      title: t('bilan.phase3Title', 'Phase de Conclusion'),
      duration: t('bilan.phase3Duration', '3-4 heures'),
      icon: FileText,
      items: [
        t('bilan.phase3Item1', 'Synthèse complète des résultats'),
        t('bilan.phase3Item2', "Élaboration d'un plan d'action concret"),
        t('bilan.phase3Item3', 'Remise du document de synthèse confidentiel'),
        t('bilan.phase3Item4', 'Conseils pour la mise en œuvre')
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: t('bilan.benefit1Title', 'Certifié QUALIOPI'),
      description: t('bilan.benefit1Desc', 'Un gage de qualité et de conformité aux standards nationaux de formation professionnelle.')
    },
    {
      icon: Users,
      title: t('bilan.benefit2Title', 'Accompagnement Personnalisé'),
      description: t('bilan.benefit2Desc', 'Un consultant certifié dédié vous accompagne tout au long de votre parcours.')
    },
    {
      icon: Clock,
      title: t('bilan.benefit3Title', 'Flexibilité Totale'),
      description: t('bilan.benefit3Desc', 'Sessions en présentiel à Haguenau ou à distance selon vos disponibilités et préférences.')
    },
    {
      icon: CheckCircle,
      title: t('bilan.benefit4Title', 'Financement CPF'),
      description: t('bilan.benefit4Desc', "Éligible au Compte Personnel de Formation, financement possible jusqu'à 100%.")
    }
  ];

  const reasons = [
    {
      title: t('bilan.reason1Title', 'Évolution Professionnelle'),
      description: t('bilan.reason1Desc', 'Vous souhaitez explorer de nouvelles opportunités de carrière ou préparer une reconversion professionnelle réussie.')
    },
    {
      title: t('bilan.reason2Title', 'Confiance en Soi'),
      description: t('bilan.reason2Desc', 'Prenez conscience de vos forces, compétences clés et valeur ajoutée sur le marché du travail.')
    },
    {
      title: t('bilan.reason3Title', 'Projet Professionnel'),
      description: t('bilan.reason3Desc', 'Construisez un projet professionnel clair, cohérent et réalisable aligné avec vos aspirations.')
    },
    {
      title: t('bilan.reason4Title', 'Valorisation des Acquis'),
      description: t('bilan.reason4Desc', 'Identifiez et valorisez vos compétences transférables pour mieux anticiper votre avenir.')
    }
  ];

  const faq = [
    {
      question: t('bilan.faq1Q', "Quelle est la durée d'un bilan de compétences ?"),
      answer: t('bilan.faq1A', 'Le bilan de compétences se déroule sur 24 heures réparties sur 1 à 3 mois, selon votre rythme et vos disponibilités.')
    },
    {
      question: t('bilan.faq2Q', 'Comment financer mon bilan de compétences ?'),
      answer: t('bilan.faq2A', "Le bilan est éligible au CPF (Compte Personnel de Formation). Vous pouvez utiliser vos droits acquis pour financer tout ou partie du bilan. D'autres solutions de financement existent selon votre situation.")
    },
    {
      question: t('bilan.faq3Q', 'Le bilan peut-il se faire à distance ?'),
      answer: t('bilan.faq3A', "Oui, nous proposons des sessions en visioconférence pour s'adapter à vos contraintes géographiques et d'emploi du temps.")
    },
    {
      question: t('bilan.faq4Q', 'Mes résultats sont-ils confidentiels ?'),
      answer: t('bilan.faq4A', 'Absolument. Le document de synthèse vous appartient et reste strictement confidentiel. Vous seul décidez de le partager.')
    },
    {
      question: t('bilan.faq5Q', "Qui peut bénéficier d'un bilan de compétences ?"),
      answer: t('bilan.faq5A', "Toute personne active (salarié, demandeur d'emploi, indépendant) souhaitant faire le point sur sa carrière et définir un projet professionnel.")
    }
  ];

  return (
    <>
      <SEO 
        title="Bilan de Compétences QUALIOPI | CPF | Haguenau"
        description="Bilan de compétences certifié QUALIOPI à Haguenau. Financé par CPF. Accompagnement personnalisé pour votre projet professionnel et reconversion."
        keywords="bilan de compétences, CPF, QUALIOPI, reconversion professionnelle, Haguenau, orientation professionnelle"
      />
      
      <StructuredData 
        type="Service"
        name="Bilan de Compétences"
        description="Bilan de compétences certifié QUALIOPI, finançable par CPF"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-purple-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="inline-block w-4 h-4 mr-2" />
              {t('bilan.heroBadge', 'Certifié QUALIOPI • Finançable CPF')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('bilan.heroTitlePrefix', 'Bilan de')} <span className="bg-gradient-to-r from-primary via-purple-600 to-green-500 bg-clip-text text-transparent">{t('bilan.heroTitleHighlight', 'Compétences')}</span> {t('bilan.heroTitleSuffix', 'à Haguenau')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('bilan.heroDesc', "Faites le point sur votre parcours professionnel et construisez un projet d'avenir aligné avec vos aspirations. Un accompagnement personnalisé pour révéler votre potentiel et définir votre prochaine étape de carrière.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('bilan.heroCtaAppointment', 'Prendre Rendez-vous')}
              </a>
              <a
                href="https://www.moncompteformation.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                {t('bilan.heroCtaCpf', 'Financer avec Mon CPF')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un bilan de compétences */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('bilan.whatTitlePrefix', "Qu'est-ce qu'un")} <span className="text-primary">{t('bilan.whatTitleHighlight', 'Bilan de Compétences')}</span> ?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('bilan.whatPara1', "Le bilan de compétences est un dispositif d'accompagnement personnalisé qui permet d'analyser vos compétences professionnelles et personnelles, vos aptitudes et vos motivations. Il vous aide à définir un projet professionnel cohérent et réalisable, ou à valider un projet de formation.")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('bilan.whatPara2', 'Réalisé par un consultant certifié, ce bilan vous offre un temps de réflexion structuré pour faire le point sur votre parcours, identifier vos atouts et construire votre avenir professionnel en toute confiance.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi réaliser un bilan */}
      <section className="py-16 bg-gradient-to-br from-muted to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('bilan.whyTitlePrefix', 'Pourquoi Réaliser un')} <span className="text-primary">{t('bilan.whyTitleHighlight', 'Bilan de Compétences')}</span> ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement du bilan */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {t('bilan.processTitlePrefix', 'Déroulement du')} <span className="text-primary">{t('bilan.processTitleHighlight', 'Bilan')}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('bilan.processSubtitle', 'Un processus structuré en 3 phases sur 24 heures réparties sur 1 à 3 mois')}
              </p>
            </div>
            
            <div className="space-y-8">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="relative bg-gradient-to-br from-primary/5 to-purple-50 p-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                          {phase.number}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                          <span className="ml-auto text-sm text-muted-foreground bg-card px-3 py-1 rounded-full">
                            <Clock className="inline-block w-4 h-4 mr-1" />
                            {phase.duration}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Nos avantages */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('bilan.advantagesTitlePrefix', 'Nos')} <span className="text-primary">{t('bilan.advantagesTitleHighlight', 'Avantages')}</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('bilan.faqTitlePrefix', 'Questions')} <span className="text-primary">{t('bilan.faqTitleHighlight', 'Fréquentes')}</span>
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-muted to-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-primary via-purple-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('bilan.ctaTitle', 'Prêt à Donner un Nouvel Élan à Votre Carrière ?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('bilan.ctaSubtitle', 'Contactez-nous pour un entretien préliminaire gratuit et sans engagement. Découvrez comment notre bilan de compétences peut vous aider.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t('bilan.ctaAppointment', 'Prendre Rendez-vous')}
            </a>
            <a 
              href="tel:0367310201" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              03 67 31 02 01
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BilanCompetences;
