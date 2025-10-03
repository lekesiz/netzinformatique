import { useTranslation } from 'react-i18next';
import { CheckCircle, Clock, Users, Award, TrendingUp, Target, FileText, Calendar } from 'lucide-react';
import SEO from '../components/common/SEO';
import StructuredData from '../components/common/StructuredData';

const BilanCompetences = () => {
  const { t } = useTranslation();

  const phases = [
    {
      number: "01",
      title: "Phase Préliminaire",
      duration: "2-3 heures",
      icon: Target,
      items: [
        "Analyse de votre demande et de vos besoins",
        "Présentation des méthodes et outils utilisés",
        "Définition des objectifs personnalisés",
        "Établissement du planning des séances"
      ]
    },
    {
      number: "02",
      title: "Phase d'Investigation",
      duration: "16-18 heures",
      icon: TrendingUp,
      items: [
        "Identification de vos compétences professionnelles",
        "Analyse de vos aptitudes et motivations",
        "Exploration des pistes professionnelles",
        "Tests psychométriques et d'orientation",
        "Validation des options les plus pertinentes"
      ]
    },
    {
      number: "03",
      title: "Phase de Conclusion",
      duration: "3-4 heures",
      icon: FileText,
      items: [
        "Synthèse complète des résultats",
        "Élaboration d'un plan d'action concret",
        "Remise du document de synthèse confidentiel",
        "Conseils pour la mise en œuvre"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certifié QUALIOPI",
      description: "Un gage de qualité et de conformité aux standards nationaux de formation professionnelle."
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Un consultant certifié dédié vous accompagne tout au long de votre parcours."
    },
    {
      icon: Clock,
      title: "Flexibilité Totale",
      description: "Sessions en présentiel à Haguenau ou à distance selon vos disponibilités et préférences."
    },
    {
      icon: CheckCircle,
      title: "Financement CPF",
      description: "Éligible au Compte Personnel de Formation, financement possible jusqu'à 100%."
    }
  ];

  const reasons = [
    {
      title: "Évolution Professionnelle",
      description: "Vous souhaitez explorer de nouvelles opportunités de carrière ou préparer une reconversion professionnelle réussie."
    },
    {
      title: "Confiance en Soi",
      description: "Prenez conscience de vos forces, compétences clés et valeur ajoutée sur le marché du travail."
    },
    {
      title: "Projet Professionnel",
      description: "Construisez un projet professionnel clair, cohérent et réalisable aligné avec vos aspirations."
    },
    {
      title: "Valorisation des Acquis",
      description: "Identifiez et valorisez vos compétences transférables pour mieux anticiper votre avenir."
    }
  ];

  const faq = [
    {
      question: "Quelle est la durée d'un bilan de compétences ?",
      answer: "Le bilan de compétences se déroule sur 24 heures réparties sur 1 à 3 mois, selon votre rythme et vos disponibilités."
    },
    {
      question: "Comment financer mon bilan de compétences ?",
      answer: "Le bilan est éligible au CPF (Compte Personnel de Formation). Vous pouvez utiliser vos droits acquis pour financer tout ou partie du bilan. D'autres solutions de financement existent selon votre situation."
    },
    {
      question: "Le bilan peut-il se faire à distance ?",
      answer: "Oui, nous proposons des sessions en visioconférence pour s'adapter à vos contraintes géographiques et d'emploi du temps."
    },
    {
      question: "Mes résultats sont-ils confidentiels ?",
      answer: "Absolument. Le document de synthèse vous appartient et reste strictement confidentiel. Vous seul décidez de le partager."
    },
    {
      question: "Qui peut bénéficier d'un bilan de compétences ?",
      answer: "Toute personne active (salarié, demandeur d'emploi, indépendant) souhaitant faire le point sur sa carrière et définir un projet professionnel."
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
              Certifié QUALIOPI • Finançable CPF
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bilan de <span className="bg-gradient-to-r from-primary via-purple-600 to-green-500 bg-clip-text text-transparent">Compétences</span> à Haguenau
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Faites le point sur votre parcours professionnel et construisez un projet d'avenir aligné avec vos aspirations. 
              Un accompagnement personnalisé pour révéler votre potentiel et définir votre prochaine étape de carrière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Prendre Rendez-vous
              </a>
              <a 
                href="https://www.moncompteformation.gouv.fr/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Financer avec Mon CPF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un bilan de compétences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Qu'est-ce qu'un <span className="text-primary">Bilan de Compétences</span> ?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le bilan de compétences est un dispositif d'accompagnement personnalisé qui permet d'analyser vos compétences professionnelles et personnelles, 
                vos aptitudes et vos motivations. Il vous aide à définir un projet professionnel cohérent et réalisable, ou à valider un projet de formation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Réalisé par un consultant certifié, ce bilan vous offre un temps de réflexion structuré pour faire le point sur votre parcours, 
                identifier vos atouts et construire votre avenir professionnel en toute confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi réaliser un bilan */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Pourquoi Réaliser un <span className="text-primary">Bilan de Compétences</span> ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Déroulement du <span className="text-primary">Bilan</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Un processus structuré en 3 phases sur 24 heures réparties sur 1 à 3 mois
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
                          <span className="ml-auto text-sm text-muted-foreground bg-white px-3 py-1 rounded-full">
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
              Nos <span className="text-primary">Avantages</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Questions <span className="text-primary">Fréquentes</span>
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
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
            Prêt à Donner un Nouvel Élan à Votre Carrière ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour un entretien préliminaire gratuit et sans engagement. 
            Découvrez comment notre bilan de compétences peut vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prendre Rendez-vous
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
