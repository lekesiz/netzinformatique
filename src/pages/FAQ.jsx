import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { useTranslation } from 'react-i18next';
import { ArrowRight, HelpCircle, MessageCircle, Phone, Briefcase, Wrench, GraduationCap, Bot, Globe, ShieldCheck, ShoppingCart, Lightbulb } from 'lucide-react';
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
          answer: 'Nous intervenons principalement depuis Haguenau dans un rayon d’environ 30 km, selon les horaires et disponibilités publiés. Pour les besoins plus éloignés, une intervention à distance ou un déplacement sur devis peut être étudié.'
        },
        {
          question: 'Proposez-vous un contrat de maintenance ?',
          answer: 'Oui. Le contrat peut couvrir maintenance planifiée, suivi automatisé, contrôle des sauvegardes et support priorisé. Le périmètre, les horaires, les licences, les déplacements et les objectifs de prise en charge sont précisés dans le devis.'
        },
        {
          question: 'Quels sont vos horaires d\'ouverture ?',
          answer: 'Nous sommes ouverts du lundi au vendredi de 9h à 12h et de 14h à 18h. Une astreinte ou un niveau de service étendu n’est applicable que s’il est prévu dans un contrat écrit.'
        }
      ]
    },
    {
      category: 'Dépannage & Réparation',
      icon: Wrench,
      questions: [
        {
          question: t('faq.q3', 'Intervenez-vous sur Mac et PC ?'),
          answer: t('faq.a3', 'Oui, nous intervenons sur tous types d\'ordinateurs : PC (Windows, Linux) et Mac (macOS). Nous sommes également compétents sur les serveurs, NAS, équipements réseau, imprimantes et périphériques. Support technique multi-plateforme disponible.')
        },
        {
          question: 'Mon ordinateur est très lent, que faire ?',
          answer: 'La lenteur peut avoir plusieurs causes : virus, disque dur saturé, RAM insuffisante, programmes au démarrage, etc. Nous effectuons un diagnostic complet gratuit pour identifier la cause et proposer la solution optimale (nettoyage, upgrade RAM/SSD, réinstallation).'
        },
        {
          question: 'Récupérez-vous les données perdues ?',
          answer: 'Oui, nous proposons un service de récupération de données sur disques durs, SSD, clés USB et cartes mémoire. Le résultat dépend de l’état du support et ne peut pas être garanti. Diagnostic gratuit. Tarifs selon la complexité (à partir de 150€). Aucun frais si récupération impossible.'
        },
        {
          question: 'Comment se passe une intervention à distance ?',
          answer: 'Avec votre autorisation, nous pouvons utiliser un outil d’assistance à distance adapté. Le périmètre d’accès, les conditions de la session et les éventuelles traces techniques dépendent de l’outil et sont expliqués avant intervention.'
        },
        {
          question: 'Garantissez-vous vos réparations ?',
          answer: 'Les conditions de garantie dépendent de la prestation et des pièces utilisées. La garantie constructeur applicable et les conditions de main-d’œuvre figurent sur le devis ou la facture.'
        }
      ]
    },
    {
      category: 'Formation Professionnelle',
      icon: GraduationCap,
      questions: [
        {
          question: t('faq.q4', 'Proposez-vous des formations ?'),
          answer: t('faq.a4', 'Oui. NETZ Informatique est certifiée QUALIOPI pour les actions de formation et les bilans de compétences. L’éligibilité et le niveau de prise en charge dépendent du parcours, des droits disponibles et de la décision du financeur.')
        },
        {
          question: 'Mes formations sont-elles finançables par le CPF ?',
          answer: 'Un financement CPF n’est possible que pour un parcours éligible et publié sur Mon Compte Formation. Vérifiez le parcours, vos droits et l’éventuel reste à charge sur la plateforme officielle avant toute inscription.'
        },
        {
          question: 'Proposez-vous des formations en entreprise ?',
          answer: 'Oui, nous proposons des formations intra-entreprise adaptées après analyse du besoin. Le lieu, le programme, le tarif et toute demande de financement OPCO sont confirmés dans la proposition et restent soumis à l’accord du financeur.'
        },
        {
          question: 'Qu\'est-ce qu\'un bilan de compétences ?',
          answer: 'Le bilan de compétences analyse les compétences, aptitudes et motivations afin de construire un projet professionnel ou de formation. Le programme, la durée et les possibilités de financement sont précisés après vérification de la situation.'
        },
        {
          question: 'Délivrez-vous des certificats ?',
          answer: 'Une attestation de fin de formation peut être remise selon le parcours. Lorsqu’une certification externe est proposée, son organisme, ses conditions, son enregistrement en vigueur et son coût sont indiqués avant l’inscription.'
        }
      ]
    },
    {
      category: 'Intelligence Artificielle',
      icon: Bot,
      questions: [
        {
          question: t('faq.q5', 'Qu\'est-ce que l\'IA Offline ?'),
          answer: t('faq.a5', 'L\'IA Offline exécute le traitement dans vos locaux afin de réduire les transferts vers des services cloud. La confidentialité et la conformité RGPD dépendent aussi de la configuration, des accès, des journaux et des procédures mises en place.')
        },
        {
          question: 'Quels sont les avantages de l\'IA Offline ?',
          answer: 'Le traitement local peut réduire les transferts vers des tiers, la dépendance au cloud et certaines latences. Les bénéfices, coûts et obligations RGPD dépendent toutefois de l’architecture, des usages et des mesures de sécurité retenues.'
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
          answer: t('faq.a6', 'Oui, nous créons des sites vitrine (à partir de 990€), sites business (1990€) et e-commerce (sur devis). Nous gérons également le référencement (SEO), l\'hébergement et la maintenance (79€/mois). De nombreuses réalisations sont disponibles sur demande. Demandez un devis gratuit.')
        },
        {
          question: 'Combien de temps faut-il pour créer un site web ?',
          answer: 'Site vitrine : 2-4 semaines. Site business : 4-8 semaines. E-commerce : 8-12 semaines. Les délais dépendent de la complexité et de la rapidité de vos retours. Nous vous tenons informé à chaque étape.'
        },
        {
          question: 'Puis-je modifier mon site moi-même après la livraison ?',
          answer: 'Nous pouvons livrer un CMS administrable et proposer une prise en main. La maintenance, le nombre de modifications, les délais et les exclusions sont définis dans l’offre retenue.'
        },
        {
          question: 'Mon site sera-t-il bien référencé sur Google ?',
          answer: 'Nous intégrons un socle SEO technique et pouvons proposer audit, stratégie de contenu et suivi. Le positionnement dépend du marché, de la concurrence, des contenus et des moteurs de recherche ; aucun délai ou rang ne peut être garanti.'
        }
      ]
    },
    {
      category: 'Sécurité & RGPD',
      icon: ShieldCheck,
      questions: [
        {
          question: t('faq.q9', 'Êtes-vous conformes RGPD ?'),
          answer: t('faq.a9', 'NETZ Informatique applique des mesures de protection des données à ses propres traitements et peut accompagner des travaux de conformité. La conformité d’une organisation reste liée à son contexte, ses responsabilités, ses contrats et les contrôles effectivement mis en œuvre.')
        },
        {
          question: 'Comment protéger mon entreprise des cyberattaques ?',
          answer: 'Nous proposons un audit de sécurité complet, puis mettons en place : firewall, antivirus professionnel, sauvegardes automatiques, formation des employés, politique de mots de passe, authentification à deux facteurs. Surveillance 24/7 en option.'
        },
        {
          question: 'Que faire en cas de ransomware ?',
          answer: 'Isolez le système concerné sans détruire les preuves, activez votre procédure d’incident et contactez les personnes compétentes. La possibilité de restauration dépend de sauvegardes intactes et testées ; les obligations de notification doivent être évaluées selon le contexte.'
        },
        {
          question: 'Mes données sont-elles en sécurité chez vous ?',
          answer: 'Nous appliquons des mesures techniques et organisationnelles adaptées au service. Les accès, la conservation, les sous-traitants éventuels et la suppression sont définis selon le contrat, les outils utilisés et les obligations applicables.'
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
          answer: 'Oui, nous pouvons proposer une configuration sur mesure selon l’usage et le budget. Les composants, la garantie constructeur et le niveau de support sont précisés dans le devis.'
        },
        {
          question: 'Où trouver des cartouches d\'encre pas chères ?',
          answer: 'Notre boutique peut proposer des cartouches originales ou compatibles selon les références disponibles. Le prix, les frais et les conditions de livraison sont affichés au moment de la commande.'
        }
      ]
    },
    {
      category: 'Divers',
      icon: HelpCircle,
      questions: [
        {
          question: t('faq.q10', 'Travaillez-vous avec les associations ?'),
          answer: t('faq.a10', 'Oui. Nous pouvons étudier les besoins des associations et proposer une solution proportionnée au budget, au périmètre et aux outils disponibles. Toute remise ou contribution éventuelle est précisée dans le devis.')
        },
        {
          question: 'Acceptez-vous les paiements en plusieurs fois ?',
          answer: 'Les modalités de paiement, l’échelonnement éventuel et les délais applicables sont précisés dans le devis et la facture.'
        },
        {
          question: 'Puis-je obtenir une facture ?',
          answer: 'Oui, toutes nos prestations donnent lieu à une facture détaillée conforme à la législation française. Pour les entreprises, la facture est envoyée par email dès la fin de l\'intervention.'
        },
        {
          question: 'Comment prendre rendez-vous ?',
          answer: 'Vous pouvez nous joindre par téléphone, par e-mail ou via le formulaire de contact. Le délai de réponse dépend de la demande et des horaires d’ouverture.'
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
        description="Réponses claires sur les services NETZ Informatique : dépannage, formation, IA, développement web, sécurité, matériel, financement et conditions d’intervention."
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
            <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
              <Lightbulb size={16} className="text-accent flex-shrink-0" /> Vous ne trouvez pas votre réponse ? <Link to="/contact?source=faq" className="text-primary font-semibold hover:underline">Contactez-nous</Link>
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
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
<Link to="/contact?source=faq">
                  Nous Contacter
                  <ArrowRight className="ml-2" />
                </Link>
</Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
<a href="tel:+33367310201">
                  <Phone className="mr-2" />
                  03 67 31 02 01
                </a>
</Button>
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
                <Briefcase size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Nos Services</h4>
                <p className="text-sm text-muted-foreground">Dépannage, maintenance, solutions IT</p>
              </Link>
              <Link to="/formation" className="bg-card rounded-xl p-6 shadow-lg hover-lift text-center">
                <GraduationCap size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Formations</h4>
                <p className="text-sm text-muted-foreground">Certifications QUALIOPI, CPF, OPCO</p>
              </Link>
              <Link to="/materiel" className="bg-card rounded-xl p-6 shadow-lg hover-lift text-center">
                <ShoppingCart size={32} className="text-primary mx-auto mb-3" />
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
