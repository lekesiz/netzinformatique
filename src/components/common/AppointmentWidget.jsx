import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, X } from 'lucide-react';

const AppointmentWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/netz-informatique/consultation";

  const openCalendly = () => {
    setIsOpen(true);
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
      >
        <Calendar size={24} className="group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[80vh]">
            <button
              onClick={closeCalendly}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label={t('common.close', 'Fermer')}
            >
              <X size={20} />
            </button>
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg"
              title={t('appointment.title', 'Prendre rendez-vous')}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentWidget;
