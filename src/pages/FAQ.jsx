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
      answer: t('faq.a1', 'Nous intervenons généralement sous 24 à 48h pour les urgences à Haguenau et ses environs.') 
    },
    // ... autres questions
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
