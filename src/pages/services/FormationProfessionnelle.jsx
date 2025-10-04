import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Users, Clock, TrendingUp, BookOpen, Phone, GraduationCap, FileText, Euro, Building } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FormationProfessionnelle = () => {
  const { t } = useTranslation();

  const pageTitle = 'Formation Professionnelle Certifiée QUALIOPI';
  const pageDescription = 'Formations informatiques certifiées QUALIOPI. Bureautique, IA, cybersécurité, web. Financement OPCO, CPF, Pôle Emploi. Présentiel ou distanciel.';

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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

  const features = [
    { icon: Award, title: 'Certifié QUALIOPI', description: 'Organisme de formation certifié, gage de qualité' },
    { icon: Euro, title: 'Financement Possible', description: 'OPCO, CPF, Pôle Emploi, Plan de formation' },
    { icon: Users, title: 'Sur Mesure', description: 'Programmes adaptés à vos besoins spécifiques' },
    { icon: Clock, title: 'Flexible', description: 'Présentiel, distanciel, intra ou inter-entreprise' },
    { icon: GraduationCap, title: 'Formateurs Experts', description: '15+ ans d\'expérience terrain' },
    { icon: FileText, title: 'Certification', description: 'Attestation de formation, passage TOSA possible' }
  ];

  const trainingCategories = [
    {
      name: 'Bureautique',
      icon: '💼',
      description: 'Maîtrisez les outils essentiels du quotidien',
      courses: [
        { name: 'Excel : Initiation', duration: '2 jours', level: 'Débutant', price: '600€' },
        { name: 'Excel : Perfectionnement', duration: '2 jours', level: 'Intermédiaire', price: '600€' },
        { name: 'Excel : Tableaux Croisés & Macros', duration: '2 jours', level: 'Avancé', price: '700€' },
        { name: 'Word : Mise en Page Professionnelle', duration: '1 jour', level: 'Tous niveaux', price: '350€' },
        { name: 'PowerPoint : Présentations Impactantes', duration: '1 jour', level: 'Tous niveaux', price: '350€' },
        { name: 'Outlook : Gestion Emails & Agenda', duration: '1 jour', level: 'Tous niveaux', price: '300€' }
      ]
    },
    {
      name: 'Intelligence Artificielle',
      icon: '🤖',
      description: 'Exploitez la puissance de l\'IA dans votre métier',
      courses: [
        { name: 'IA Générative pour Professionnels', duration: '1 jour', level: 'Débutant', price: '450€' },
        { name: 'ChatGPT & Prompting Avancé', duration: '1 jour', level: 'Intermédiaire', price: '450€' },
        { name: 'IA pour le Marketing & Communication', duration: '2 jours', level: 'Tous niveaux', price: '800€' },
        { name: 'Automatisation avec IA', duration: '2 jours', level: 'Avancé', price: '900€' }
      ]
    },
    {
      name: 'Cybersécurité',
      icon: '🔒',
      description: 'Protégez votre entreprise des cybermenaces',
      courses: [
        { name: 'Sensibilisation Cybersécurité', duration: '0.5 jour', level: 'Tous niveaux', price: '250€' },
        { name: 'RGPD : Mise en Conformité', duration: '1 jour', level: 'Tous niveaux', price: '500€' },
        { name: 'Cybersécurité pour Dirigeants', duration: '1 jour', level: 'Décideurs', price: '600€' },
        { name: 'Gestion de Crise Cyber', duration: '1 jour', level: 'Avancé', price: '700€' }
      ]
    },
    {
      name: 'Web & Digital',
      icon: '🌐',
      description: 'Développez votre présence en ligne',
      courses: [
        { name: 'WordPress : Créer son Site', duration: '2 jours', level: 'Débutant', price: '600€' },
        { name: 'SEO : Référencement Naturel', duration: '2 jours', level: 'Intermédiaire', price: '700€' },
        { name: 'Google Ads : Publicité en Ligne', duration: '1 jour', level: 'Intermédiaire', price: '450€' },
        { name: 'Réseaux Sociaux Professionnels', duration: '1 jour', level: 'Tous niveaux', price: '400€' }
      ]
    }
  ];

  const fundingOptions = [
    {
      name: 'OPCO',
      icon: '🏢',
      target: 'Entreprises',
      description: 'Opérateurs de Compétences financent les formations de vos salariés',
      coverage: 'Jusqu\'à 100% du coût',
      process: 'Nous vous accompagnons dans les démarches administratives'
    },
    {
      name: 'CPF',
      icon: '👤',
      target: 'Particuliers & Salariés',
      description: 'Compte Personnel de Formation pour financer votre montée en compétences',
      coverage: 'Selon vos droits acquis',
      process: 'Inscription directe sur moncompteformation.gouv.fr'
    },
    {
      name: 'Pôle Emploi',
      icon: '🎯',
      target: 'Demandeurs d\'Emploi',
      description: 'AIF (Aide Individuelle à la Formation) pour votre retour à l\'emploi',
      coverage: 'Jusqu\'à 100% selon situation',
      process: 'Validation par votre conseiller Pôle Emploi'
    },
    {
      name: 'Plan de Formation',
      icon: '📋',
      target: 'Entreprises',
      description: 'Budget formation de l\'entreprise pour développer les compétences',
      coverage: '100% pris en charge par l\'entreprise',
      process: 'Devis et convention de formation'
    }
  ];

  const formats = [
    {
      type: 'Intra-Entreprise',
      description: 'Formation dans vos locaux, groupe de vos collaborateurs',
      advantages: ['Contenu sur mesure', 'Exemples de votre métier', 'Confidentialité', 'Pas de déplacement'],
      price: 'À partir de 1200€/jour'
    },
    {
      type: 'Inter-Entreprise',
      description: 'Formation dans nos locaux, groupe mixte d\'entreprises',
      advantages: ['Tarif par personne', 'Échanges enrichissants', 'Networking', 'Dates planifiées'],
      price: 'Selon tarif catalogue'
    },
    {
      type: 'Distanciel',
      description: 'Formation en visioconférence, depuis votre bureau',
      advantages: ['Pas de déplacement', 'Économie temps/argent', 'Flexible', 'Enregistrement disponible'],
      price: '-20% sur tarif présentiel'
    }
  ];

  const process = [
    { step: '1', title: 'Analyse', description: 'Audit de vos besoins et objectifs' },
    { step: '2', title: 'Proposition', description: 'Programme et devis personnalisés' },
    { step: '3', title: 'Financement', description: 'Montage du dossier OPCO/CPF' },
    { step: '4', title: 'Planification', description: 'Dates et modalités de formation' },
    { step: '5', title: 'Formation', description: 'Déroulé pédagogique et exercices' },
    { step: '6', title: 'Évaluation', description: 'Attestation et suivi post-formation' }
  ];

  const stats = [
    { value: '670+', label: 'Stagiaires formés' },
    { value: '95%', label: 'Taux de réussite' },
    { value: '98%', label: 'Satisfaction' },
    { value: '4.8/5', label: 'Note moyenne' }
  ];

  const testimonials = [
    {
      company: 'Cabinet Comptable',
      text: 'Formation Excel avancée sur mesure pour notre équipe de 8 comptables. Formateur pédagogue, exemples concrets de notre métier. Gain de productivité immédiat !',
      author: 'Marie D., Expert-Comptable'
    },
    {
      company: 'PME Industrielle',
      text: 'Sensibilisation cybersécurité pour 30 collaborateurs. Format ludique et interactif, prise de conscience réelle des risques. Financement OPCO sans souci.',
      author: 'Thomas L., DSI'
    }
  ];

  const faq = [
    {
      question: 'Qu\'est-ce que la certification QUALIOPI ?',
      answer: 'QUALIOPI est la certification qualité obligatoire pour tous les organismes de formation souhaitant accéder aux fonds publics ou mutualisés (OPCO, CPF, etc.). Elle garantit la qualité des processus de formation. NETZ Informatique est certifié QUALIOPI depuis 2021.'
    },
    {
      question: 'Comment financer ma formation avec mon CPF ?',
      answer: 'Connectez-vous sur moncompteformation.gouv.fr, recherchez "NETZ Informatique" ou la formation souhaitée. Vérifiez vos droits disponibles. Si suffisants, inscrivez-vous directement. Sinon, complément possible par l\'entreprise ou Pôle Emploi.'
    },
    {
      question: 'Combien de temps pour monter un dossier OPCO ?',
      answer: 'Délai moyen : 3-4 semaines. Nous vous accompagnons : devis, programme, convention. Vous transmettez à votre OPCO. Accord sous 2-3 semaines. Anticipez 1 mois avant la date de formation souhaitée.'
    },
    {
      question: 'Proposez-vous des formations sur mesure ?',
      answer: 'OUI ! 80% de nos formations sont personnalisées. Nous adaptons le contenu, les exemples, la durée à vos besoins spécifiques. Audit préalable gratuit pour définir le programme optimal.'
    },
    {
      question: 'Délivrez-vous une certification en fin de formation ?',
      answer: 'Oui, attestation de formation systématique. Pour certaines formations (Excel, Word, PowerPoint), passage possible de la certification TOSA (reconnue par l\'État) en fin de formation (+150€).'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/formation-professionnelle" />
      <StructuredData type="course" data={serviceData} />

      <div className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-green-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-600 font-semibold flex items-center gap-2">
                <Award size={20} />
                Certifié QUALIOPI
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-green-600">Formation Professionnelle</span><br />
              Certifiée QUALIOPI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Développez vos compétences informatiques. Bureautique, IA, cybersécurité, web. Financement OPCO, CPF, Pôle Emploi.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <a href="https://formation-haguenau.fr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Catalogue Complet <ArrowRight className="ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600">
                  <Phone className="mr-2" /> Demander un Devis
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              🎓 670+ stagiaires formés • ⭐ 98% satisfaction • 🏆 Certifié QUALIOPI
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Categories */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Domaines de Formation
              </h2>
              <p className="text-xl text-muted-foreground">
                Plus de 30 formations au catalogue
              </p>
            </div>

            <div className="space-y-8">
              {trainingCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{category.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                        <p className="opacity-90">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.courses.map((course, idx) => (
                        <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition">
                          <h4 className="font-bold mb-2">{course.name}</h4>
                          <div className="space-y-1 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-2">
                              <Clock size={14} />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <BookOpen size={14} />
                              <span>{course.level}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-green-600">{course.price}</span>
                            <Link to="/contact">
                              <Button size="sm" variant="outline">Infos</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="https://formation-haguenau.fr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Voir Tout le Catalogue <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Funding Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Options de Financement
              </h2>
              <p className="text-xl text-muted-foreground">
                Jusqu'à 100% de prise en charge possible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fundingOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-5xl mb-4 text-center">{option.icon}</div>
                  <h3 className="font-bold text-xl mb-2 text-center">{option.name}</h3>
                  <div className="text-sm text-center text-green-600 font-semibold mb-3">{option.target}</div>
                  <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                  <div className="bg-green-50 rounded p-3 mb-3">
                    <div className="text-xs font-semibold mb-1">Prise en charge:</div>
                    <div className="text-sm font-bold text-green-600">{option.coverage}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{option.process}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Formats de Formation
              </h2>
              <p className="text-xl text-muted-foreground">
                Choisissez la modalité adaptée
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {formats.map((format, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-600">{format.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{format.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-2">Avantages:</div>
                    <ul className="space-y-1">
                      {format.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="font-bold text-green-600">{format.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Processus de Formation
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Témoignages
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-sm text-green-600 font-semibold mb-4">{testimonial.company}</div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">— {testimonial.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions Fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-lg mb-3 px-6 border shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-green-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <GraduationCap size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Développer Vos Compétences ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Catalogue complet • Financement jusqu'à 100% • Formateurs experts • Certification QUALIOPI
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://formation-haguenau.fr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                  Voir le Catalogue
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" />
                  Demander un Devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationProfessionnelle;
