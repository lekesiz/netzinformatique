import SEO from '@/components/common/SEO';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const { t } = useTranslation();

  const faqData = [
    { 
      question: t('faq.q1', 'Quels sont vos délais d`intervention ?'), 
      answer: t('faq.a1', 'Nous intervenons généralement sous 24 à 48h pour les urgences à Haguenau et ses environs (rayon de 30 km). Pour les interventions planifiées, nous nous adaptons à votre agenda.') 
    },
    { 
      question: t('faq.q2', 'Quels sont vos tarifs ?'), 
      answer: t('faq.a2', 'Nos tarifs varient selon la nature de l`intervention. Diagnostic gratuit, puis devis détaillé avant toute intervention. Forfaits mensuels disponibles pour les entreprises. Contactez-nous pour un devis personnalisé.') 
    },
    { 
      question: t('faq.q3', 'Intervenez-vous sur Mac et PC ?'), 
      answer: t('faq.a3', 'Oui, nous intervenons sur tous types d`ordinateurs : PC (Windows, Linux) et Mac (macOS). Nous sommes également compétents sur les serveurs, NAS et équipements réseau.') 
    },
    { 
      question: t('faq.q4', 'Proposez-vous des formations ?'), 
      answer: t('faq.a4', 'Oui, nous sommes un organisme de formation certifié QUALIOPI. Nos formations couvrent la bureautique, l`IA, la cybersécurité et le marketing digital. Elles sont éligibles aux financements OPCO, Pôle Emploi et CPF.') 
    },
    { 
      question: t('faq.q5', 'Qu`est-ce que l`IA Offline ?'), 
      answer: t('faq.a5', 'L`IA Offline consiste à installer un serveur d`intelligence artificielle directement dans vos locaux. Vos données restent 100% confidentielles, sans jamais transiter par le cloud. Idéal pour les secteurs sensibles (santé, juridique, R&D).') 
    },
    { 
      question: t('faq.q6', 'Faites-vous de la création de sites web ?'), 
      answer: t('faq.a6', 'Oui, nous créons des sites vitrine, e-commerce et applications web sur mesure. Nous gérons également le référencement (SEO), l`hébergement et la maintenance. Demandez un devis gratuit.') 
    },
    { 
      question: t('faq.q7', 'Proposez-vous un contrat de maintenance ?'), 
      answer: t('faq.a7', 'Oui, nous proposons des contrats de maintenance mensuels incluant : mises à jour, sauvegardes, surveillance, support prioritaire et interventions illimitées. Tarifs dégressifs selon le nombre de postes.') 
    },
    { 
      question: t('faq.q8', 'Comment se passe une intervention à distance ?'), 
      answer: t('faq.a8', 'Nous utilisons des outils sécurisés (TeamViewer, AnyDesk) pour prendre le contrôle de votre ordinateur avec votre autorisation. Idéal pour les dépannages rapides sans déplacement.') 
    },
    { 
      question: t('faq.q9', 'Êtes-vous conformes RGPD ?'), 
      answer: t('faq.a9', 'Oui, nous sommes en conformité totale avec le RGPD. Nous pouvons également vous accompagner dans votre mise en conformité (audit, documentation, formation).') 
    },
    { 
      question: t('faq.q10', 'Travaillez-vous avec les associations ?'), 
      answer: t('faq.a10', 'Oui, nous proposons des tarifs préférentiels pour les associations. Nous comprenons vos contraintes budgétaires et privilégions les solutions open-source et économiques.') 
    },
  ];

  return (
    <>
      <SEO title={t('faq.title', 'Foire Aux Questions (FAQ)')} description={t('faq.description', 'Trouvez les réponses à vos questions les plus fréquentes sur nos services informatiques.')} url="/faq" />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('faq.title', 'Foire Aux Questions')}</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">{t('faq.description', 'Trouvez les réponses à vos questions les plus fréquentes sur nos services informatiques.')}</p>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
