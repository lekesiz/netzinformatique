import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, X } from 'lucide-react';

const AppointmentWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Calendly username from environment or default
  const calendlyUsername = import.meta.env.VITE_CALENDLY_USERNAME || "mikail-netzinformatique";
  const calendlyUrl = `https://calendly.com/${calendlyUsername}`;

  // Load Calendly widget script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      const existingLink = document.querySelector('link[href*="calendly.com/assets/external/widget.css"]');
      if (existingLink && existingLink.parentNode) {
        existingLink.parentNode.removeChild(existingLink);
      }
    };
  }, []);

  const openCalendly = () => {
    if (isScriptLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback: open in new tab
      window.open(calendlyUrl, '_blank');
    }
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={openCalendly}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label={t('appointment.bookNow', 'Prendre rendez-vous')}
        title={t('appointment.bookNow', 'Prendre rendez-vous')}
      >
        <Calendar size={24} className="group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </>
  );
};

export default AppointmentWidget;
