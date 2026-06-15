import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { ArrowRight, HelpCircle, MessageCircle, Phone, Briefcase, Wrench, GraduationCap, Bot, Globe, ShieldCheck, ShoppingCart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const { t } = useTranslation();

  const faqCategories = [
    {
      category: 'Services Généraux',
      icon: Briefcase,
      questions: [
        { 
          question: t('faq.q1', 'Quels sont vos délais d\'intervention ?'), 
          answer: t('faq.a1', 'Nous intervenons généralement sous 24 à 48h pour les urgences à Haguenau et ses environs (rayon de 30 km). Pour les interventions planifiées, nous nous adaptons à votre agenda. En cas d\'urgence critique, nous pouvons intervenir le jour même selon disponibilité.')
        },
        { 
          question: t('faq.q2', 'Quels sont vos tarifs ?'), 
          answer: t('faq.a2', 'Nos tarifs varient selon la nature de l\'intervention. Diagnostic gratuit, puis devis détaillé avant toute intervention. Forfaits mensuels disponibles pour les entreprises à partir de 79€/mois. Contactez-nous pour un devis personnalisé adapté à vos besoins.')
        },
        { 
          question: 'Intervenez-vous uniquement à Haguenau ?', 
          answer: 'Non, nous intervenons dans tout le Grand Est, avec un focus particulier sur Haguenau et un rayon de 50 km (Strasbourg, Saverne, Wissembourg, etc.). Pour les interventions plus éloignées, nous proposons également des solutions à distance.'
        },
        { 
          question: 'Proposez-vous un contrat de maintenance ?', 
          answer: 'Oui, nous proposons des contrats de maintenance mensuels incluant : mises à jour automatiques, sauvegardes quotidiennes, surveillance 24/7, support prioritaire et interventions illimitées. Tarifs dégressifs selon le nombre de postes. À partir de 79€/mois.'
        },
        {
          question: 'Quels sont vos horaires d\'ouverture ?',
          answer: 'Nous sommes ouverts du lundi au vendredi de 9h à 12h et de 14h à 18h. Pour les urgences entreprises, nous proposons un service d\'astreinte 24/7 sur demande.'
        }
      ]
    },
    {
      category: 'Dépannage & Réparation',
      icon: Wrench,
      questions: [
        { 
          question: t('faq.q3', 'Intervenez-vous sur Mac et PC ?'), 
          answer: t('faq.a3', 'Oui, nous intervenons sur tous types d\'ordinateurs : PC (Windows, Linux) et Mac (macOS). Nous sommes également compétents sur les serveurs, NAS, équipements réseau, imprimantes et périphériques. Plus de 35 ans d\'expérience multi-plateforme.')
        },
        { 
          question: 'Mon ordinateur est très lent, que faire ?', 
          answer: 'La lenteur peut avoir plusieurs causes : virus, disque dur saturé, RAM insuffisante, programmes au démarrage, etc. Nous effectuons un diagnostic complet gratuit pour identifier la cause et proposer la solution optimale (nettoyage, upgrade RAM/SSD, réinstallation).'
        },
        {
          question: 'Récupérez-vous les données perdues ?',
          answer: 'Oui, nous proposons un service de récupération de données sur disques durs, SSD, clés USB et cartes mémoire. Taux de réussite de 85%. Diagnostic gratuit. Tarifs selon la complexité (à partir de 150€). Aucun frais si récupération impossible.'
        },
        {
          question: 'Comment se passe une intervention à distance ?',
          answer: 'Nous utilisons des outils sécurisés (TeamViewer, AnyDesk) pour prendre le contrôle de votre ordinateur avec votre autorisation. Connexion cryptée, aucune donnée stockée. Idéal pour les dépannages rapides sans déplacement. Tarif horaire : 60€/h.'
        },
        {
          question: 'Garantissez-vous vos réparations ?',
          answer: 'Oui, toutes nos réparations sont garanties 3 mois pièces et main d\'œuvre. Les pièces neuves bénéficient de la garantie constructeur (généralement 1 à 2 ans). Nous utilisons uniquement des pièces de qualité.'
        }
      ]
    },
    {
      category: 'Formation Professionnelle',
      icon: GraduationCap,
      questions: [
        { 
          question: t('faq.q4', 'Proposez-vous des formations ?'), 
          answer: t('faq.a4', 'Oui, nous sommes un organisme de formation certifié QUALIOPI. Nos formations couvrent la bureautique (Word, Excel, PowerPoint), l\'IA, la cybersécurité et le marketing digital. Elles sont éligibles aux financements OPCO, Pôle Emploi et CPF. Plus de 670 participants formés.')
        },
        {
          question: 'Mes formations sont-elles finançables par le CPF ?',
          answer: 'Oui, nos formations certifiantes (TOSA, ICDL) sont éligibles au CPF (Compte Personnel de Formation). Nous vous accompagnons dans les démarches administratives. Vous pouvez vérifier votre solde CPF sur moncompteformation.gouv.fr.'
        },
        {
          question: 'Proposez-vous des formations en entreprise ?',
          answer: 'Oui, nous proposons des formations intra-entreprise sur mesure, adaptées à vos besoins spécifiques. Nos formateurs se déplacent dans vos locaux. Financement possible via OPCO. Tarifs dégressifs pour les groupes.'
        },
        {
          question: 'Qu\'est-ce qu\'un bilan de compétences ?',
          answer: 'Le bilan de compétences permet d\'analyser vos compétences professionnelles et personnelles, vos aptitudes et motivations. Il vous aide à définir un projet professionnel ou de formation. Durée : 24h réparties sur 2-3 mois. Finançable par le CPF.'
        },
        {
          question: 'Délivrez-vous des certificats ?',
          answer: 'Oui, toutes nos formations donnent lieu à une attestation de formation. Les formations certifiantes (TOSA, ICDL) incluent un passage de certification reconnu par l\'État et les entreprises.'
        }
      ]
    },
    {
      category: 'Intelligence Artificielle',
      icon: Bot,
      questions: [
        { 
          question: t('faq.q5', 'Qu\'est-ce que l\'IA Offline ?'), 
          answer: t('faq.a5', 'L\'IA Offline consiste à installer un serveur d\'intelligence artificielle directement dans vos locaux. Vos données restent 100% confidentielles, sans jamais transiter par le cloud. Idéal pour les secteurs sensibles (santé, juridique, R&D, finance). Conformité RGPD garantie.')
        },
        {
          question: 'Quels sont les avantages de l\'IA Offline ?',
          answer: 'Confidentialité totale (données en local), pas d\'abonnement mensuel, pas de limite d\'utilisation, latence réduite, indépendance vis-à-vis des fournisseurs cloud, conformité RGPD facilitée. Investissement unique avec ROI rapide pour les utilisateurs intensifs.'
        },
        {
          question: 'Quel est le coût d\'une solution IA Offline ?',
          answer: 'Le coût varie selon la puissance nécessaire : de 5000€ (station de travail) à 50000€+ (serveur haute performance). Nous proposons également des solutions de location avec option d\'achat. Devis gratuit après analyse de vos besoins.'
        },
        {
          question: 'L\'IA peut-elle remplacer mes employés ?',
          answer: 'Non, l\'IA est un outil d\'assistance qui augmente la productivité de vos équipes. Elle automatise les tâches répétitives pour libérer du temps pour des missions à plus forte valeur ajoutée. L\'humain reste indispensable pour la créativité, l\'empathie et la prise de décision stratégique.'
        }
      ]
    },
    {
      category: 'Développement Web',
      icon: Globe,
      questions: [
        { 
          question: t('faq.q6', 'Faites-vous de la création de sites web ?'), 
          answer: t('faq.a6', 'Oui, nous créons des sites vitrine (à partir de 990€), sites business (1990€) et e-commerce (sur devis). Nous gérons également le référencement (SEO), l\'hébergement et la maintenance (79€/mois). Plus de 150 sites créés. Demandez un devis gratuit.')
        },
        {
          question: 'Combien de temps faut-il pour créer un site web ?',
          answer: 'Site vitrine : 2-4 semaines. Site business : 4-8 semaines. E-commerce : 8-12 semaines. Les délais dépendent de la complexité et de la rapidité de vos retours. Nous vous tenons informé à chaque étape.'
        },
        {
          question: 'Puis-je modifier mon site moi-même après la livraison ?',
          answer: 'Oui, nous utilisons des CMS intuitifs (WordPress, etc.) et vous formons à leur utilisation. Vous pourrez modifier textes, images et ajouter du contenu facilement. Pour les modifications complexes, notre abonnement maintenance (79€/mois) inclut des modifications illimitées.'
        },
        {
          question: 'Mon site sera-t-il bien référencé sur Google ?',
          answer: 'Oui, tous nos sites sont optimisés SEO dès la création : structure, balises, vitesse, mobile-first. Nous proposons également un accompagnement SEO avancé (audit, stratégie de contenu, netlinking) pour améliorer votre positionnement. Résultats visibles sous 3-6 mois.'
        }
      ]
    },
    {
      category: 'Sécurité & RGPD',
      icon: ShieldCheck,
      questions: [
        { 
          question: t('faq.q9', 'Êtes-vous conformes RGPD ?'), 
          answer: t('faq.a9', 'Oui, nous sommes en conformité totale avec le RGPD. Nous pouvons également vous accompagner dans votre mise en conformité (audit, documentation, formation, DPO externalisé). Indispensable pour éviter les sanctions (jusqu\'à 4% du CA).')
        },
        {
          question: 'Comment protéger mon entreprise des cyberattaques ?',
          answer: 'Nous proposons un audit de sécurité complet, puis mettons en place : firewall, antivirus professionnel, sauvegardes automatiques, formation des employés, politique de mots de passe, authentification à deux facteurs. Surveillance 24/7 en option.'
        },
        {
          question: 'Que faire en cas de ransomware ?',
          answer: 'NE PAYEZ PAS la rançon ! Déconnectez immédiatement le poste du réseau et contactez-nous en urgence. Nous analysons l\'infection, restaurons vos données depuis les sauvegardes et sécurisons votre infrastructure. Prévention : sauvegardes régulières + formation.'
        },
        {
          question: 'Mes données sont-elles en sécurité chez vous ?',
          answer: 'Oui, nous appliquons des protocoles stricts : chiffrement des données, accès restreints, serveurs sécurisés, destruction sécurisée après intervention. Nous signons des accords de confidentialité (NDA) sur demande. Aucune donnée n\'est conservée sans votre accord.'
        }
      ]
    },
    {
      category: 'Matériel & Boutique',
      icon: ShoppingCart,
      questions: [
        {
          question: 'Vendez-vous du matériel informatique ?',
          answer: 'Oui, nous proposons une large gamme de matériel sur notre boutique en ligne informatique-haguenau.fr : PC, portables, composants, périphériques, imprimantes, cartouches. Prix compétitifs, garantie constructeur, livraison ou retrait en magasin.'
        },
        {
          question: 'Puis-je commander un PC sur mesure ?',
          answer: 'Oui, nous assemblons des PC sur mesure selon vos besoins : bureautique, gaming, CAO/DAO, montage vidéo. Nous sélectionnons les meilleurs composants pour optimiser le rapport qualité/prix. Garantie 2 ans, support technique inclus.'
        },
        {
          question: 'Où trouver des cartouches d\'encre pas chères ?',
          answer: 'Sur notre boutique informatique-haguenau.fr ! Nous proposons des cartouches originales et compatibles de toutes marques (HP, Canon, Epson, Brother) à prix compétitifs. Économisez jusqu\'à 30% par rapport aux grandes surfaces. Livraison gratuite dès 50€.'
        }
      ]
    },
    {
      category: 'Divers',
      icon: HelpCircle,
      questions: [
        { 
          question: t('faq.q10', 'Travaillez-vous avec les associations ?'), 
          answer: t('faq.a10', 'Oui, nous proposons des tarifs préférentiels pour les associations (jusqu\'à -20%). Nous comprenons vos contraintes budgétaires et privilégions les solutions open-source et économiques. Nous soutenons également des associations locales via du mécénat de compétences.')
        },
        {
          question: 'Acceptez-vous les paiements en plusieurs fois ?',
          answer: 'Oui, pour les prestations supérieures à 500€, nous proposons un paiement en 2 ou 3 fois sans frais. Pour les entreprises, nous acceptons les paiements à 30 jours sur facture.'
        },
        {
          question: 'Puis-je obtenir une facture ?',
          answer: 'Oui, toutes nos prestations donnent lieu à une facture détaillée conforme à la législation française. Pour les entreprises, la facture est envoyée par email dès la fin de l\'intervention.'
        },
        {
          question: 'Comment prendre rendez-vous ?',
          answer: 'Vous pouvez prendre rendez-vous par téléphone (03 67 31 02 01), email (contact@netzinformatique.fr), via notre formulaire de contact ou directement sur notre site avec Calendly. Réponse sous 2h en moyenne.'
        }
      ]
    }
  ];

  // Flatten all categories into a single list for FAQPage structured data
  const allFaqs = faqCategories.flatMap((category) => category.questions);

  return (
    <>
      <SEO
        title="FAQ - Questions Fréquentes | NETZ Informatique"
        description="Toutes les réponses à vos questions sur nos services : dépannage, formation, IA, développement web, sécurité, matériel. Plus de 40 questions répondues."
        url="/faq"
      />
      <StructuredData
        type="faq"
        data={{
          faqs: allFaqs,
          breadcrumbs: [
            { name: 'Accueil', url: '/' },
            { name: 'FAQ', url: '/faq' },
          ],
        }}
      />

      <div className="bg-gradient-to-b from-primary/5 to-card">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-accent/10 rounded-full px-6 py-2 mb-4">
              <span className="text-accent font-semibold flex items-center gap-2">
                <HelpCircle size={20} />
                Foire Aux Questions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Toutes les Réponses à Vos <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Plus de 40 questions fréquentes sur nos services informatiques, formations et solutions
            </p>
            <p className="text-sm text-muted-foreground">
              💡 Vous ne trouvez pas votre réponse ? <Link to="/contact" className="text-primary font-semibold hover:underline">Contactez-nous</Link>
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-16 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                    <category.icon size={24} />
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem value={`item-${catIndex}-${index}`} key={index} className="bg-card rounded-lg mb-3 px-6 border shadow-sm">
                      <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <MessageCircle size={64} className="mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous Avez D'Autres Questions ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Notre équipe est là pour vous répondre et vous conseiller gratuitement
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Nous Contacter
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

        {/* Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Découvrez Nos Services</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/services" className="bg-card rounded-xl p-6 shadow-lg hover-lift text-center">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-bold mb-2">Nos Services</h4>
                <p className="text-sm text-muted-foreground">Dépannage, maintenance, solutions IT</p>
              </Link>
              <Link to="/formation" className="bg-card rounded-xl p-6 shadow-lg hover-lift text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="font-bold mb-2">Formations</h4>
                <p className="text-sm text-muted-foreground">Certifications QUALIOPI, CPF, OPCO</p>
              </Link>
              <Link to="/materiel" className="bg-card rounded-xl p-6 shadow-lg hover-lift text-center">
                <div className="text-3xl mb-3">🛒</div>
                <h4 className="font-bold mb-2">Boutique</h4>
                <p className="text-sm text-muted-foreground">Matériel, PC sur mesure, cartouches</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
