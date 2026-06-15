import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Users, Clock, TrendingUp, BookOpen, Phone, GraduationCap, FileText, Euro, Building, Briefcase, Bot, ShieldCheck, Globe, User, Target, ClipboardList, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FormationProfessionnelle = () => {
  const { t } = useTranslation();

  const pageTitle = t('formationPro.title', 'Formation Professionnelle Certifiée QUALIOPI');
  const pageDescription = t('formationPro.description', 'Formations informatiques certifiées QUALIOPI. Bureautique, IA, cybersécurité, web. Financement OPCO, CPF, Pôle Emploi. Présentiel ou distanciel.');

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

  const features = [
    { icon: Award, title: t('formationPro.feature1Title', 'Certifié QUALIOPI'), description: t('formationPro.feature1Desc', 'Organisme de formation certifié, gage de qualité') },
    { icon: Euro, title: t('formationPro.feature2Title', 'Financement Possible'), description: t('formationPro.feature2Desc', 'OPCO, CPF, Pôle Emploi, Plan de formation') },
    { icon: Users, title: t('formationPro.feature3Title', 'Sur Mesure'), description: t('formationPro.feature3Desc', 'Programmes adaptés à vos besoins spécifiques') },
    { icon: Clock, title: t('formationPro.feature4Title', 'Flexible'), description: t('formationPro.feature4Desc', 'Présentiel, distanciel, intra ou inter-entreprise') },
    { icon: GraduationCap, title: t('formationPro.feature5Title', 'Formateurs Experts'), description: t('formationPro.feature5Desc', '15+ ans d\'expérience terrain') },
    { icon: FileText, title: t('formationPro.feature6Title', 'Certification'), description: t('formationPro.feature6Desc', 'Attestation de formation, passage TOSA possible') }
  ];

  const trainingCategories = [
    {
      name: t('formationPro.cat1Name', 'Bureautique'),
      icon: Briefcase,
      description: t('formationPro.cat1Desc', 'Maîtrisez les outils essentiels du quotidien'),
      courses: [
        { name: t('formationPro.cat1Course1Name', 'Excel : Initiation'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelBeginner', 'Débutant'), price: '600€' },
        { name: t('formationPro.cat1Course2Name', 'Excel : Perfectionnement'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelIntermediate', 'Intermédiaire'), price: '600€' },
        { name: t('formationPro.cat1Course3Name', 'Excel : Tableaux Croisés & Macros'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelAdvanced', 'Avancé'), price: '700€' },
        { name: t('formationPro.cat1Course4Name', 'Word : Mise en Page Professionnelle'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '350€' },
        { name: t('formationPro.cat1Course5Name', 'PowerPoint : Présentations Impactantes'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '350€' },
        { name: t('formationPro.cat1Course6Name', 'Outlook : Gestion Emails & Agenda'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '300€' }
      ]
    },
    {
      name: t('formationPro.cat2Name', 'Intelligence Artificielle'),
      icon: Bot,
      description: t('formationPro.cat2Desc', 'Exploitez la puissance de l\'IA dans votre métier'),
      courses: [
        { name: t('formationPro.cat2Course1Name', 'IA Générative pour Professionnels'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelBeginner', 'Débutant'), price: '450€' },
        { name: t('formationPro.cat2Course2Name', 'ChatGPT & Prompting Avancé'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelIntermediate', 'Intermédiaire'), price: '450€' },
        { name: t('formationPro.cat2Course3Name', 'IA pour le Marketing & Communication'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '800€' },
        { name: t('formationPro.cat2Course4Name', 'Automatisation avec IA'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelAdvanced', 'Avancé'), price: '900€' }
      ]
    },
    {
      name: t('formationPro.cat3Name', 'Cybersécurité'),
      icon: ShieldCheck,
      description: t('formationPro.cat3Desc', 'Protégez votre entreprise des cybermenaces'),
      courses: [
        { name: t('formationPro.cat3Course1Name', 'Sensibilisation Cybersécurité'), duration: t('formationPro.duration05d', '0.5 jour'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '250€' },
        { name: t('formationPro.cat3Course2Name', 'RGPD : Mise en Conformité'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '500€' },
        { name: t('formationPro.cat3Course3Name', 'Cybersécurité pour Dirigeants'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelDecision', 'Décideurs'), price: '600€' },
        { name: t('formationPro.cat3Course4Name', 'Gestion de Crise Cyber'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelAdvanced', 'Avancé'), price: '700€' }
      ]
    },
    {
      name: t('formationPro.cat4Name', 'Web & Digital'),
      icon: Globe,
      description: t('formationPro.cat4Desc', 'Développez votre présence en ligne'),
      courses: [
        { name: t('formationPro.cat4Course1Name', 'WordPress : Créer son Site'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelBeginner', 'Débutant'), price: '600€' },
        { name: t('formationPro.cat4Course2Name', 'SEO : Référencement Naturel'), duration: t('formationPro.duration2d', '2 jours'), level: t('formationPro.levelIntermediate', 'Intermédiaire'), price: '700€' },
        { name: t('formationPro.cat4Course3Name', 'Google Ads : Publicité en Ligne'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelIntermediate', 'Intermédiaire'), price: '450€' },
        { name: t('formationPro.cat4Course4Name', 'Réseaux Sociaux Professionnels'), duration: t('formationPro.duration1d', '1 jour'), level: t('formationPro.levelAll', 'Tous niveaux'), price: '400€' }
      ]
    }
  ];

  const fundingOptions = [
    {
      name: 'OPCO',
      icon: Building,
      target: t('formationPro.fund1Target', 'Entreprises'),
      description: t('formationPro.fund1Desc', 'Opérateurs de Compétences financent les formations de vos salariés'),
      coverage: t('formationPro.fund1Coverage', 'Jusqu\'à 100% du coût'),
      process: t('formationPro.fund1Process', 'Nous vous accompagnons dans les démarches administratives')
    },
    {
      name: 'CPF',
      icon: User,
      target: t('formationPro.fund2Target', 'Particuliers & Salariés'),
      description: t('formationPro.fund2Desc', 'Compte Personnel de Formation pour financer votre montée en compétences'),
      coverage: t('formationPro.fund2Coverage', 'Selon vos droits acquis'),
      process: t('formationPro.fund2Process', 'Inscription directe sur moncompteformation.gouv.fr')
    },
    {
      name: 'Pôle Emploi',
      icon: Target,
      target: t('formationPro.fund3Target', 'Demandeurs d\'Emploi'),
      description: t('formationPro.fund3Desc', 'AIF (Aide Individuelle à la Formation) pour votre retour à l\'emploi'),
      coverage: t('formationPro.fund3Coverage', 'Jusqu\'à 100% selon situation'),
      process: t('formationPro.fund3Process', 'Validation par votre conseiller Pôle Emploi')
    },
    {
      name: t('formationPro.fund4Name', 'Plan de Formation'),
      icon: ClipboardList,
      target: t('formationPro.fund4Target', 'Entreprises'),
      description: t('formationPro.fund4Desc', 'Budget formation de l\'entreprise pour développer les compétences'),
      coverage: t('formationPro.fund4Coverage', '100% pris en charge par l\'entreprise'),
      process: t('formationPro.fund4Process', 'Devis et convention de formation')
    }
  ];

  const formats = [
    {
      type: t('formationPro.format1Type', 'Intra-Entreprise'),
      description: t('formationPro.format1Desc', 'Formation dans vos locaux, groupe de vos collaborateurs'),
      advantages: [t('formationPro.format1Adv1', 'Contenu sur mesure'), t('formationPro.format1Adv2', 'Exemples de votre métier'), t('formationPro.format1Adv3', 'Confidentialité'), t('formationPro.format1Adv4', 'Pas de déplacement')],
      price: t('formationPro.format1Price', 'À partir de 1200€/jour')
    },
    {
      type: t('formationPro.format2Type', 'Inter-Entreprise'),
      description: t('formationPro.format2Desc', 'Formation dans nos locaux, groupe mixte d\'entreprises'),
      advantages: [t('formationPro.format2Adv1', 'Tarif par personne'), t('formationPro.format2Adv2', 'Échanges enrichissants'), t('formationPro.format2Adv3', 'Networking'), t('formationPro.format2Adv4', 'Dates planifiées')],
      price: t('formationPro.format2Price', 'Selon tarif catalogue')
    },
    {
      type: t('formationPro.format3Type', 'Distanciel'),
      description: t('formationPro.format3Desc', 'Formation en visioconférence, depuis votre bureau'),
      advantages: [t('formationPro.format3Adv1', 'Pas de déplacement'), t('formationPro.format3Adv2', 'Économie temps/argent'), t('formationPro.format3Adv3', 'Flexible'), t('formationPro.format3Adv4', 'Enregistrement disponible')],
      price: t('formationPro.format3Price', '-20% sur tarif présentiel')
    }
  ];

  const process = [
    { step: '1', title: t('formationPro.proc1Title', 'Analyse'), description: t('formationPro.proc1Desc', 'Audit de vos besoins et objectifs') },
    { step: '2', title: t('formationPro.proc2Title', 'Proposition'), description: t('formationPro.proc2Desc', 'Programme et devis personnalisés') },
    { step: '3', title: t('formationPro.proc3Title', 'Financement'), description: t('formationPro.proc3Desc', 'Montage du dossier OPCO/CPF') },
    { step: '4', title: t('formationPro.proc4Title', 'Planification'), description: t('formationPro.proc4Desc', 'Dates et modalités de formation') },
    { step: '5', title: t('formationPro.proc5Title', 'Formation'), description: t('formationPro.proc5Desc', 'Déroulé pédagogique et exercices') },
    { step: '6', title: t('formationPro.proc6Title', 'Évaluation'), description: t('formationPro.proc6Desc', 'Attestation et suivi post-formation') }
  ];

  const stats = [
    { value: '670+', label: t('formationPro.stat1Label', 'Stagiaires formés') },
    { value: '95%', label: t('formationPro.stat2Label', 'Taux de réussite') },
    { value: '98%', label: t('formationPro.stat3Label', 'Satisfaction') },
    { value: '4.9/5', label: t('formationPro.stat4Label', 'Note moyenne') }
  ];

  const testimonials = [
    {
      company: t('formationPro.testi1Company', 'Cabinet Comptable'),
      text: t('formationPro.testi1Text', 'Formation Excel avancée sur mesure pour notre équipe de 8 comptables. Formateur pédagogue, exemples concrets de notre métier. Gain de productivité immédiat !'),
      author: 'Marie D., Expert-Comptable'
    },
    {
      company: t('formationPro.testi2Company', 'PME Industrielle'),
      text: t('formationPro.testi2Text', 'Sensibilisation cybersécurité pour 30 collaborateurs. Format ludique et interactif, prise de conscience réelle des risques. Financement OPCO sans souci.'),
      author: 'Thomas L., DSI'
    }
  ];

  const faq = [
    {
      question: t('formationPro.faq1Q', 'Qu\'est-ce que la certification QUALIOPI ?'),
      answer: t('formationPro.faq1A', 'QUALIOPI est la certification qualité obligatoire pour tous les organismes de formation souhaitant accéder aux fonds publics ou mutualisés (OPCO, CPF, etc.). Elle garantit la qualité des processus de formation. NETZ Informatique est certifié QUALIOPI depuis 2021.')
    },
    {
      question: t('formationPro.faq2Q', 'Comment financer ma formation avec mon CPF ?'),
      answer: t('formationPro.faq2A', 'Connectez-vous sur moncompteformation.gouv.fr, recherchez "NETZ Informatique" ou la formation souhaitée. Vérifiez vos droits disponibles. Si suffisants, inscrivez-vous directement. Sinon, complément possible par l\'entreprise ou Pôle Emploi.')
    },
    {
      question: t('formationPro.faq3Q', 'Combien de temps pour monter un dossier OPCO ?'),
      answer: t('formationPro.faq3A', 'Délai moyen : 3-4 semaines. Nous vous accompagnons : devis, programme, convention. Vous transmettez à votre OPCO. Accord sous 2-3 semaines. Anticipez 1 mois avant la date de formation souhaitée.')
    },
    {
      question: t('formationPro.faq4Q', 'Proposez-vous des formations sur mesure ?'),
      answer: t('formationPro.faq4A', 'OUI ! 80% de nos formations sont personnalisées. Nous adaptons le contenu, les exemples, la durée à vos besoins spécifiques. Audit préalable gratuit pour définir le programme optimal.')
    },
    {
      question: t('formationPro.faq5Q', 'Délivrez-vous une certification en fin de formation ?'),
      answer: t('formationPro.faq5A', 'Oui, attestation de formation systématique. Pour certaines formations (Excel, Word, PowerPoint), passage possible de la certification TOSA (reconnue par l\'État) en fin de formation (+150€).')
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/formation-professionnelle" />
      <StructuredData type="course" data={serviceData} />

      <div className="bg-gradient-to-b from-green-50 to-card">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-green-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-600 font-semibold flex items-center gap-2">
                <Award size={20} />
                {t('formationPro.heroBadge', 'Certifié QUALIOPI')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-green-600">{t('formationPro.heroTitleHighlight', 'Formation Professionnelle')}</span><br />
              {t('formationPro.heroTitleRest', 'Certifiée QUALIOPI')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('formationPro.heroSubtitle', 'Développez vos compétences informatiques. Bureautique, IA, cybersécurité, web. Financement OPCO, CPF, Pôle Emploi.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <a href="https://formation-haguenau.fr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  {t('formationPro.heroCtaCatalog', 'Catalogue Complet')} <ArrowRight className="ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600">
                  <Phone className="mr-2" /> {t('formationPro.heroCtaQuote', 'Demander un Devis')}
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-x-4 gap-y-1 flex-wrap">
              <span className="flex items-center gap-1.5"><GraduationCap size={16} className="text-green-600" /> {t('formationPro.heroStat1', '670+ stagiaires formés')}</span>
              <span className="flex items-center gap-1.5"><Star size={16} className="text-green-600 fill-current" /> {t('formationPro.heroStat2', '98% satisfaction')}</span>
              <span className="flex items-center gap-1.5"><Award size={16} className="text-green-600" /> {t('formationPro.heroStat3', 'Certifié QUALIOPI')}</span>
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
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
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
                {t('formationPro.categoriesHeading', 'Nos Domaines de Formation')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('formationPro.categoriesSubheading', 'Plus de 30 formations au catalogue')}
              </p>
            </div>

            <div className="space-y-8">
              {trainingCategories.map((category, index) => (
                <div key={index} className="bg-card rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
                    <div className="flex items-center gap-4">
                      <category.icon size={48} className="flex-shrink-0" />
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
                              <Button size="sm" variant="outline">{t('formationPro.infosBtn', 'Infos')}</Button>
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
                  {t('formationPro.seeAllCatalog', 'Voir Tout le Catalogue')} <ArrowRight className="ml-2" />
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
                {t('formationPro.fundingHeading', 'Options de Financement')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('formationPro.fundingSubheading', "Jusqu'à 100% de prise en charge possible")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fundingOptions.map((option, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="flex justify-center mb-4">
                    <option.icon size={48} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-center">{option.name}</h3>
                  <div className="text-sm text-center text-green-600 font-semibold mb-3">{option.target}</div>
                  <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                  <div className="bg-green-50 rounded p-3 mb-3">
                    <div className="text-xs font-semibold mb-1">{t('formationPro.coverageLabel', 'Prise en charge:')}</div>
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
                {t('formationPro.formatsHeading', 'Formats de Formation')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('formationPro.formatsSubheading', 'Choisissez la modalité adaptée')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {formats.map((format, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-600">{format.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{format.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-2">{t('formationPro.advantagesLabel', 'Avantages:')}</div>
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
                {t('formationPro.processHeading', 'Processus de Formation')}
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
                {t('formationPro.testimonialsHeading', 'Témoignages')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
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
                {t('formationPro.faqHeading', 'Questions Fréquentes')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg mb-3 px-6 border shadow-sm">
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
              {t('formationPro.ctaHeading', 'Prêt à Développer Vos Compétences ?')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('formationPro.ctaSubheading', "Catalogue complet • Financement jusqu'à 100% • Formateurs experts • Certification QUALIOPI")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://formation-haguenau.fr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                  {t('formationPro.ctaCatalog', 'Voir le Catalogue')}
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" />
                  {t('formationPro.ctaQuote', 'Demander un Devis')}
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
