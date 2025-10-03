import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const { t, i18n } = useTranslation();

  const cookieTexts = {
    fr: {
      message: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.",
      accept: "J'accepte",
      decline: "Je refuse",
      learnMore: "En savoir plus"
    },
    en: {
      message: "We use cookies to improve your experience on our website. By continuing to browse, you accept our use of cookies.",
      accept: "I Accept",
      decline: "I Decline",
      learnMore: "Learn More"
    },
    de: {
      message: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die weitere Nutzung akzeptieren Sie unsere Verwendung von Cookies.",
      accept: "Ich akzeptiere",
      decline: "Ich lehne ab",
      learnMore: "Mehr erfahren"
    },
    tr: {
      message: "Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Gezinmeye devam ederek çerez kullanımımızı kabul edersiniz.",
      accept: "Kabul Ediyorum",
      decline: "Reddediyorum",
      learnMore: "Daha Fazla Bilgi"
    }
  };

  const currentLang = i18n.language || 'fr';
  const texts = cookieTexts[currentLang] || cookieTexts.fr;

  const handleAcceptCookie = () => {
    // Google Analytics'i aktif et
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDeclineCookie = () => {
    // Google Analytics'i devre dışı bırak
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText={texts.accept}
      declineButtonText={texts.decline}
      cookieName="netz-informatique-cookie-consent"
      style={{
        background: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(10px)",
        alignItems: "center",
        padding: "20px",
        fontSize: "14px"
      }}
      buttonStyle={{
        background: "#8b5cf6",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        borderRadius: "8px",
        marginLeft: "10px",
        border: "none",
        cursor: "pointer"
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        marginLeft: "10px",
        cursor: "pointer"
      }}
      expires={365}
      enableDeclineButton
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
    >
      <div className="flex items-center gap-4">
        <span style={{ color: "white", marginRight: "20px" }}>
          {texts.message}{" "}
          <Link 
            to="/politique-confidentialite" 
            style={{
              color: "#8b5cf6",
              textDecoration: "underline",
              fontWeight: "500"
            }}
          >
            {texts.learnMore}
          </Link>
        </span>
      </div>
    </CookieConsent>
  );
}