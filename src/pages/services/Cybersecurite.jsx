import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, FileText, AlertTriangle, Eye, Key, Database, Users, CheckCircle, Phone, ShieldAlert, Bug, Fingerprint } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Cybersecurite = () => {
  const pageTitle = 'Cybersécurité & Protection des Données';
  const pageDescription = 'Protégez votre entreprise contre les cyberattaques. Audit de sécurité, antivirus professionnel, firewall, sauvegardes, conformité RGPD. Expertise certifiée.';

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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
    { icon: Shield, title: 'Antivirus Pro', description: 'Protection avancée contre malwares, ransomwares, spyware' },
    { icon: ShieldAlert, title: 'Firewall', description: 'Pare-feu professionnel pour bloquer les intrusions' },
    { icon: Database, title: 'Sauvegardes', description: 'Backup automatique quotidien avec versioning' },
    { icon: Key, title: 'Authentification', description: 'MFA, SSO, gestion des mots de passe' },
    { icon: Eye, title: 'Surveillance', description: 'Monitoring 24/7 des menaces et alertes' },
    { icon: FileText, title: 'RGPD', description: 'Mise en conformité et accompagnement DPO' }
  ];

  const threats = [
    {
      name: 'Ransomware',
      icon: '🔒',
      description: 'Chiffrement de vos données avec demande de rançon',
      impact: 'Perte de données, arrêt d\'activité, rançon de 5000€ à 500000€',
      prevention: 'Sauvegardes isolées, antivirus avancé, formation utilisateurs'
    },
    {
      name: 'Phishing',
      icon: '🎣',
      description: 'Emails frauduleux pour voler identifiants et données',
      impact: 'Vol de données bancaires, usurpation d\'identité, espionnage',
      prevention: 'Formation anti-phishing, filtrage emails, authentification 2FA'
    },
    {
      name: 'Fuite de Données',
      icon: '💧',
      description: 'Exposition de données confidentielles (clients, employés)',
      impact: 'Amende RGPD jusqu\'à 4% du CA, perte de confiance, poursuites',
      prevention: 'Chiffrement, contrôle d\'accès, audit régulier, conformité RGPD'
    },
    {
      name: 'Attaque DDoS',
      icon: '⚡',
      description: 'Saturation de vos serveurs pour rendre services indisponibles',
      impact: 'Site web inaccessible, perte de chiffre d\'affaires, image dégradée',
      prevention: 'Protection DDoS, CDN, infrastructure redondante'
    }
  ];

  const securityServices = [
    {
      title: 'Audit de Sécurité',
      description: 'Analyse complète de votre infrastructure : vulnérabilités, failles, risques. Rapport détaillé avec plan d\'action prioritaire.',
      includes: ['Scan de vulnérabilités', 'Test d\'intrusion', 'Audit des accès', 'Conformité RGPD', 'Rapport exécutif'],
      price: 'À partir de 1200€'
    },
    {
      title: 'Protection Antivirus Pro',
      description: 'Déploiement d\'antivirus professionnels (Bitdefender, ESET, Kaspersky) avec console de gestion centralisée.',
      includes: ['Protection temps réel', 'Anti-ransomware', 'Firewall intégré', 'Contrôle web', 'Mises à jour auto'],
      price: '5-15€/mois/poste'
    },
    {
      title: 'Firewall & VPN',
      description: 'Installation de pare-feu professionnels (pfSense, Fortinet, SonicWall) et VPN pour accès distant sécurisé.',
      includes: ['Filtrage avancé', 'IPS/IDS', 'VPN SSL/IPSec', 'Logs et alertes', 'Support 24/7'],
      price: 'À partir de 1500€'
    },
    {
      title: 'Sauvegardes Sécurisées',
      description: 'Stratégie de sauvegarde 3-2-1 : 3 copies, 2 supports différents, 1 hors site. Restauration testée mensuellement.',
      includes: ['Backup quotidien', 'Versioning 30 jours', 'Chiffrement AES-256', 'Stockage cloud', 'Test de restauration'],
      price: 'À partir de 200€/mois'
    },
    {
      title: 'Conformité RGPD',
      description: 'Accompagnement complet pour la mise en conformité : audit, documentation, procédures, formation, DPO externalisé.',
      includes: ['Audit RGPD', 'Registre des traitements', 'Politique de confidentialité', 'Formation équipe', 'DPO externalisé'],
      price: 'À partir de 2500€'
    },
    {
      title: 'Formation Cybersécurité',
      description: 'Sensibilisation de vos équipes aux bonnes pratiques : phishing, mots de passe, RGPD, télétravail sécurisé.',
      includes: ['Session 2-4h', 'Support pédagogique', 'Quiz d\'évaluation', 'Attestation', 'Suivi 6 mois'],
      price: '800€/session (jusqu\'à 15 pers.)'
    }
  ];

  const rgpdSteps = [
    { step: '1', title: 'Audit', description: 'Cartographie des traitements de données' },
    { step: '2', title: 'Analyse', description: 'Identification des non-conformités' },
    { step: '3', title: 'Documentation', description: 'Registre, politiques, procédures' },
    { step: '4', title: 'Sécurisation', description: 'Mesures techniques et organisationnelles' },
    { step: '5', title: 'Formation', description: 'Sensibilisation des équipes' },
    { step: '6', title: 'Suivi', description: 'Veille réglementaire et mises à jour' }
  ];

  const stats = [
    { value: '43%', label: 'des PME victimes de cyberattaque en 2024' },
    { value: '60%', label: 'des PME attaquées ferment dans les 6 mois' },
    { value: '4%', label: 'du CA : amende RGPD maximale' },
    { value: '287 jours', label: 'délai moyen de détection d\'une intrusion' }
  ];

  const faq = [
    {
      question: 'Mon entreprise est-elle vraiment une cible ?',
      answer: 'OUI ! 43% des cyberattaques visent les PME. Les hackers ciblent les petites structures car elles sont souvent moins protégées que les grandes entreprises. Toute entreprise avec des données clients, bancaires ou stratégiques est une cible potentielle.'
    },
    {
      question: 'Que faire en cas de ransomware ?',
      answer: 'NE PAYEZ PAS la rançon (aucune garantie de récupération) ! 1) Déconnectez immédiatement le poste du réseau. 2) Contactez-nous en urgence. 3) Déposez plainte. 4) Nous analysons l\'infection et restaurons depuis les sauvegardes. Prévention : sauvegardes régulières + formation.'
    },
    {
      question: 'La conformité RGPD est-elle obligatoire ?',
      answer: 'OUI, pour toute entreprise traitant des données personnelles (clients, prospects, employés). Non-conformité = risque d\'amende jusqu\'à 4% du CA ou 20M€. Au-delà de l\'obligation légale, c\'est un gage de confiance pour vos clients.'
    },
    {
      question: 'Combien coûte une cyberattaque ?',
      answer: 'Coût moyen pour une PME : 50000€ à 200000€ (rançon, perte d\'activité, restauration, image). Sans compter l\'amende RGPD si données clients compromises. La prévention coûte 10 à 20 fois moins cher qu\'une attaque.'
    },
    {
      question: 'Un antivirus gratuit suffit-il ?',
      answer: 'NON pour une entreprise. Les antivirus gratuits n\'offrent pas : protection avancée anti-ransomware, gestion centralisée, support professionnel, protection des serveurs, conformité RGPD. Investissement minimal : 5-10€/mois/poste.'
    }
  ];

  const testimonials = [
    {
      company: 'Cabinet Médical',
      text: 'Après un ransomware qui a chiffré toutes nos données patients, NETZ a tout restauré en 4h grâce aux sauvegardes. Ils ont ensuite sécurisé notre infrastructure. Plus jamais ça !',
      author: 'Dr. Martin, Haguenau'
    },
    {
      company: 'E-commerce',
      text: 'L\'audit RGPD a révélé 15 non-conformités majeures. NETZ nous a accompagnés sur 3 mois pour tout mettre en conformité. Contrôle CNIL passé sans problème.',
      author: 'Sophie L., Gérante'
    }
  ];

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url="/services/cybersecurite" />
      <StructuredData type="service" data={serviceData} />

      <div className="bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-red-100 rounded-full px-6 py-2 mb-4">
              <span className="text-red-600 font-semibold flex items-center gap-2">
                <Shield size={20} />
                Cybersécurité
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-600">Cybersécurité</span> & Protection des Données
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Protégez votre entreprise contre les cyberattaques. 43% des PME sont victimes chaque année. Ne soyez pas la prochaine !
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Audit de Sécurité Gratuit <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+33367310201">
                <Button size="lg" variant="outline" className="border-red-600 text-red-600">
                  <Phone className="mr-2" /> Urgence Cyberattaque
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
                Protection Complète Multi-Couches
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
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
                Principales Menaces Cyber
              </h2>
              <p className="text-xl text-muted-foreground">
                Connaître les risques pour mieux s'en protéger
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{threat.icon}</div>
                    <h3 className="text-2xl font-bold">{threat.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{threat.description}</p>
                  <div className="bg-red-50 rounded-lg p-4 mb-4">
                    <div className="font-semibold text-red-600 mb-1">Impact:</div>
                    <p className="text-sm">{threat.impact}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="font-semibold text-green-600 mb-1">Prévention:</div>
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
                Nos Services de Cybersécurité
              </h2>
              <p className="text-xl text-muted-foreground">
                Solutions complètes pour protéger votre entreprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-600">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <div className="mb-4">
                      <div className="font-semibold mb-2 text-sm">Inclus:</div>
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
                        Demander un Devis
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
                Mise en Conformité RGPD
              </h2>
              <p className="text-xl text-muted-foreground">
                6 étapes pour être 100% conforme
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
                Ils Nous Font Confiance
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
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
                Questions Fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-lg mb-3 px-6 border shadow-sm">
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
              Ne Attendez Pas d'Être Victime !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              60% des PME attaquées ferment dans les 6 mois. Protégez votre entreprise dès maintenant.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                  Audit de Sécurité Gratuit
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
