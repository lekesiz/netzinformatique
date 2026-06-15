import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, FileText, AlertTriangle, Eye, Key, Database, Users, CheckCircle, Phone, ShieldAlert, Bug, Fingerprint, Fish, Droplets, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Cybersecurite = () => {
  const { t } = useTranslation();

  const pageTitle = t('cyber.title', 'Cybersécurité & Protection des Données');
  const pageDescription = t('cyber.description', 'Protégez votre entreprise contre les cyberattaques. Audit de sécurité, antivirus professionnel, firewall, sauvegardes, conformité RGPD. Expertise certifiée.');

  const breadcrumbs = [
    { name: t('breadcrumbs.home', 'Accueil'), url: '/' },
    { name: t('breadcrumbs.services', 'Services'), url: '/services' },
    { name: pageTitle, url: '/services/cybersecurite' },
  ];

  const serviceData = {
    service: {
      name: pageTitle,
      description: pageDescription,
      type: 'SecurityService',
    },
    breadcrumbs,
  };

  const features = [
    { icon: Shield, title: t('cyber.feature1Title', 'Antivirus Pro'), description: t('cyber.feature1Desc', 'Protection avancée contre malwares, ransomwares, spyware') },
    { icon: ShieldAlert, title: t('cyber.feature2Title', 'Firewall'), description: t('cyber.feature2Desc', 'Pare-feu professionnel pour bloquer les intrusions') },
    { icon: Database, title: t('cyber.feature3Title', 'Sauvegardes'), description: t('cyber.feature3Desc', 'Backup automatique quotidien avec versioning') },
    { icon: Key, title: t('cyber.feature4Title', 'Authentification'), description: t('cyber.feature4Desc', 'MFA, SSO, gestion des mots de passe') },
    { icon: Eye, title: t('cyber.feature5Title', 'Surveillance'), description: t('cyber.feature5Desc', 'Monitoring 24/7 des menaces et alertes') },
    { icon: FileText, title: t('cyber.feature6Title', 'RGPD'), description: t('cyber.feature6Desc', 'Mise en conformité et accompagnement DPO') }
  ];

  const threats = [
    {
      name: t('cyber.threat1Name', 'Ransomware'),
      icon: Lock,
      description: t('cyber.threat1Desc', 'Chiffrement de vos données avec demande de rançon'),
      impact: t('cyber.threat1Impact', 'Perte de données, arrêt d\'activité, rançon de 5000€ à 500000€'),
      prevention: t('cyber.threat1Prevention', 'Sauvegardes isolées, antivirus avancé, formation utilisateurs')
    },
    {
      name: t('cyber.threat2Name', 'Phishing'),
      icon: Fish,
      description: t('cyber.threat2Desc', 'Emails frauduleux pour voler identifiants et données'),
      impact: t('cyber.threat2Impact', 'Vol de données bancaires, usurpation d\'identité, espionnage'),
      prevention: t('cyber.threat2Prevention', 'Formation anti-phishing, filtrage emails, authentification 2FA')
    },
    {
      name: t('cyber.threat3Name', 'Fuite de Données'),
      icon: Droplets,
      description: t('cyber.threat3Desc', 'Exposition de données confidentielles (clients, employés)'),
      impact: t('cyber.threat3Impact', 'Amende RGPD jusqu\'à 4% du CA, perte de confiance, poursuites'),
      prevention: t('cyber.threat3Prevention', 'Chiffrement, contrôle d\'accès, audit régulier, conformité RGPD')
    },
    {
      name: t('cyber.threat4Name', 'Attaque DDoS'),
      icon: Zap,
      description: t('cyber.threat4Desc', 'Saturation de vos serveurs pour rendre services indisponibles'),
      impact: t('cyber.threat4Impact', 'Site web inaccessible, perte de chiffre d\'affaires, image dégradée'),
      prevention: t('cyber.threat4Prevention', 'Protection DDoS, CDN, infrastructure redondante')
    }
  ];

  const securityServices = [
    {
      title: t('cyber.svc1Title', 'Audit de Sécurité'),
      description: t('cyber.svc1Desc', 'Analyse complète de votre infrastructure : vulnérabilités, failles, risques. Rapport détaillé avec plan d\'action prioritaire.'),
      includes: [t('cyber.svc1Inc1', 'Scan de vulnérabilités'), t('cyber.svc1Inc2', 'Test d\'intrusion'), t('cyber.svc1Inc3', 'Audit des accès'), t('cyber.svc1Inc4', 'Conformité RGPD'), t('cyber.svc1Inc5', 'Rapport exécutif')],
      price: t('cyber.svc1Price', 'À partir de 1200€')
    },
    {
      title: t('cyber.svc2Title', 'Protection Antivirus Pro'),
      description: t('cyber.svc2Desc', 'Déploiement d\'antivirus professionnels (Bitdefender, ESET, Kaspersky) avec console de gestion centralisée.'),
      includes: [t('cyber.svc2Inc1', 'Protection temps réel'), t('cyber.svc2Inc2', 'Anti-ransomware'), t('cyber.svc2Inc3', 'Firewall intégré'), t('cyber.svc2Inc4', 'Contrôle web'), t('cyber.svc2Inc5', 'Mises à jour auto')],
      price: t('cyber.svc2Price', '5-15€/mois/poste')
    },
    {
      title: t('cyber.svc3Title', 'Firewall & VPN'),
      description: t('cyber.svc3Desc', 'Installation de pare-feu professionnels (pfSense, Fortinet, SonicWall) et VPN pour accès distant sécurisé.'),
      includes: [t('cyber.svc3Inc1', 'Filtrage avancé'), t('cyber.svc3Inc2', 'IPS/IDS'), t('cyber.svc3Inc3', 'VPN SSL/IPSec'), t('cyber.svc3Inc4', 'Logs et alertes'), t('cyber.svc3Inc5', 'Support 24/7')],
      price: t('cyber.svc3Price', 'À partir de 1500€')
    },
    {
      title: t('cyber.svc4Title', 'Sauvegardes Sécurisées'),
      description: t('cyber.svc4Desc', 'Stratégie de sauvegarde 3-2-1 : 3 copies, 2 supports différents, 1 hors site. Restauration testée mensuellement.'),
      includes: [t('cyber.svc4Inc1', 'Backup quotidien'), t('cyber.svc4Inc2', 'Versioning 30 jours'), t('cyber.svc4Inc3', 'Chiffrement AES-256'), t('cyber.svc4Inc4', 'Stockage cloud'), t('cyber.svc4Inc5', 'Test de restauration')],
      price: t('cyber.svc4Price', 'À partir de 200€/mois')
    },
    {
      title: t('cyber.svc5Title', 'Conformité RGPD'),
      description: t('cyber.svc5Desc', 'Accompagnement complet pour la mise en conformité : audit, documentation, procédures, formation, DPO externalisé.'),
      includes: [t('cyber.svc5Inc1', 'Audit RGPD'), t('cyber.svc5Inc2', 'Registre des traitements'), t('cyber.svc5Inc3', 'Politique de confidentialité'), t('cyber.svc5Inc4', 'Formation équipe'), t('cyber.svc5Inc5', 'DPO externalisé')],
      price: t('cyber.svc5Price', 'À partir de 2500€')
    },
    {
      title: t('cyber.svc6Title', 'Formation Cybersécurité'),
      description: t('cyber.svc6Desc', 'Sensibilisation de vos équipes aux bonnes pratiques : phishing, mots de passe, RGPD, télétravail sécurisé.'),
      includes: [t('cyber.svc6Inc1', 'Session 2-4h'), t('cyber.svc6Inc2', 'Support pédagogique'), t('cyber.svc6Inc3', 'Quiz d\'évaluation'), t('cyber.svc6Inc4', 'Attestation'), t('cyber.svc6Inc5', 'Suivi 6 mois')],
      price: t('cyber.svc6Price', '800€/session (jusqu\'à 15 pers.)')
    }
  ];

  const rgpdSteps = [
    { step: '1', title: t('cyber.rgpd1Title', 'Audit'), description: t('cyber.rgpd1Desc', 'Cartographie des traitements de données') },
    { step: '2', title: t('cyber.rgpd2Title', 'Analyse'), description: t('cyber.rgpd2Desc', 'Identification des non-conformités') },
    { step: '3', title: t('cyber.rgpd3Title', 'Documentation'), description: t('cyber.rgpd3Desc', 'Registre, politiques, procédures') },
    { step: '4', title: t('cyber.rgpd4Title', 'Sécurisation'), description: t('cyber.rgpd4Desc', 'Mesures techniques et organisationnelles') },
    { step: '5', title: t('cyber.rgpd5Title', 'Formation'), description: t('cyber.rgpd5Desc', 'Sensibilisation des équipes') },
    { step: '6', title: t('cyber.rgpd6Title', 'Suivi'), description: t('cyber.rgpd6Desc', 'Veille réglementaire et mises à jour') }
  ];

  const stats = [
    { value: '43%', label: t('cyber.stat1Label', 'des PME victimes de cyberattaque en 2024') },
    { value: '60%', label: t('cyber.stat2Label', 'des PME attaquées ferment dans les 6 mois') },
    { value: '4%', label: t('cyber.stat3Label', 'du CA : amende RGPD maximale') },
    { value: '287 jours', label: t('cyber.stat4Label', 'délai moyen de détection d\'une intrusion') }
  ];

  const faq = [
    {
      question: t('cyber.faq1Q', 'Mon entreprise est-elle vraiment une cible ?'),
      answer: t('cyber.faq1A', 'OUI ! 43% des cyberattaques visent les PME. Les hackers ciblent les petites structures car elles sont souvent moins protégées que les grandes entreprises. Toute entreprise avec des données clients, bancaires ou stratégiques est une cible potentielle.')
    },
    {
      question: t('cyber.faq2Q', 'Que faire en cas de ransomware ?'),
      answer: t('cyber.faq2A', 'NE PAYEZ PAS la rançon (aucune garantie de récupération) ! 1) Déconnectez immédiatement le poste du réseau. 2) Contactez-nous en urgence. 3) Déposez plainte. 4) Nous analysons l\'infection et restaurons depuis les sauvegardes. Prévention : sauvegardes régulières + formation.')
    },
    {
      question: t('cyber.faq3Q', 'La conformité RGPD est-elle obligatoire ?'),
      answer: t('cyber.faq3A', 'OUI, pour toute entreprise traitant des données personnelles (clients, prospects, employés). Non-conformité = risque d\'amende jusqu\'à 4% du CA ou 20M€. Au-delà de l\'obligation légale, c\'est un gage de confiance pour vos clients.')
    },
    {
      question: t('cyber.faq4Q', 'Combien coûte une cyberattaque ?'),
      answer: t('cyber.faq4A', 'Coût moyen pour une PME : 50000€ à 200000€ (rançon, perte d\'activité, restauration, image). Sans compter l\'amende RGPD si données clients compromises. La prévention coûte 10 à 20 fois moins cher qu\'une attaque.')
    },
    {
      question: t('cyber.faq5Q', 'Un antivirus gratuit suffit-il ?'),
      answer: t('cyber.faq5A', 'NON pour une entreprise. Les antivirus gratuits n\'offrent pas : protection avancée anti-ransomware, gestion centralisée, support professionnel, protection des serveurs, conformité RGPD. Investissement minimal : 5-10€/mois/poste.')
    }
  ];

  const testimonials = [
    {
      company: t('cyber.testi1Company', 'Cabinet Médical'),
      text: t('cyber.testi1Text', 'Après un ransomware qui a chiffré toutes nos données patients, NETZ a tout restauré en 4h grâce aux sauvegardes. Ils ont ensuite sécurisé notre infrastructure. Plus jamais ça !'),
      author: 'Dr. Martin, Haguenau'
    },
    {
      company: t('cyber.testi2Company', 'E-commerce'),
      text: t('cyber.testi2Text', 'L\'audit RGPD a révélé 15 non-conformités majeures. NETZ nous a accompagnés sur 3 mois pour tout mettre en conformité. Contrôle CNIL passé sans problème.'),
      author: 'Sophie L., Gérante'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/cybersecurite" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-red-50 to-card">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-red-100 rounded-full px-6 py-2 mb-4">
              <span className="text-red-600 font-semibold flex items-center gap-2">
                <Shield size={20} />
                {t('cyber.heroBadge', 'Cybersécurité')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-600">{t('cyber.heroTitleHighlight', 'Cybersécurité')}</span> {t('cyber.heroTitleRest', '& Protection des Données')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('cyber.heroSubtitle', 'Protégez votre entreprise contre les cyberattaques. 43% des PME sont victimes chaque année. Ne soyez pas la prochaine !')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  {t('cyber.heroCtaAudit', 'Audit de Sécurité Gratuit')} <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Phone className="mr-2" /> {t('cyber.heroCtaUrgence', 'Urgence Cyberattaque')}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Alert */}
        <section className="py-12 bg-red-600 text-white">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cyber.featuresHeading', 'Protection Complète Multi-Couches')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threats */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cyber.threatsHeading', 'Principales Menaces Cyber')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cyber.threatsSubheading', "Connaître les risques pour mieux s'en protéger")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <threat.icon size={48} className="text-red-600 flex-shrink-0" />
                    <h3 className="text-2xl font-bold">{threat.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{threat.description}</p>
                  <div className="bg-red-50 rounded-lg p-4 mb-4">
                    <div className="font-semibold text-red-600 mb-1">{t('cyber.impactLabel', 'Impact:')}</div>
                    <p className="text-sm">{threat.impact}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="font-semibold text-green-600 mb-1">{t('cyber.preventionLabel', 'Prévention:')}</div>
                    <p className="text-sm">{threat.prevention}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cyber.servicesHeading', 'Nos Services de Cybersécurité')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cyber.servicesSubheading', 'Solutions complètes pour protéger votre entreprise')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-card rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-600">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <div className="mb-4">
                      <div className="font-semibold mb-2 text-sm">{t('cyber.includesLabel', 'Inclus:')}</div>
                      <ul className="space-y-1">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="font-bold text-red-600 mb-4">{service.price}</div>
                    <Link to="/contact">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        {t('cyber.requestQuote', 'Demander un Devis')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RGPD Process */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cyber.rgpdHeading', 'Mise en Conformité RGPD')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('cyber.rgpdSubheading', '6 étapes pour être 100% conforme')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {rgpdSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cyber.testimonialsHeading', 'Ils Nous Font Confiance')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
                  <div className="text-sm text-red-600 font-semibold mb-4">{testimonial.company}</div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">— {testimonial.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('cyber.faqHeading', 'Questions Fréquentes')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg mb-3 px-6 border shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-red-600">
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
        <section className="py-20 bg-gradient-to-br from-red-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cyber.ctaHeading', "Ne Attendez Pas d'Être Victime !")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('cyber.ctaSubheading', '60% des PME attaquées ferment dans les 6 mois. Protégez votre entreprise dès maintenant.')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                  {t('cyber.ctaAudit', 'Audit de Sécurité Gratuit')}
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2" />
                  03 67 31 02 01
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cybersecurite;
