import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Translation resources
const resources = {
  fr: {
    translation: {
      // Navigation
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        services: 'Services',
        solutions: 'Solutions',
        formation: 'Formation',
        blog: 'Blog',
        contact: 'Contact',
        allServices: 'Tous les Services',
        forIndividuals: 'Pour Particuliers',
        forEnterprises: 'Pour Entreprises',
        allSolutions: 'Toutes les Solutions',
        ai: 'Intelligence Artificielle',
        webDev: 'Web & SEO',
        cloud: 'Cloud Computing',
        formations: 'Formations',
        bilanCompetences: 'Bilan de Compétences'
      },
      // Common
      common: {
        getQuote: 'Demander un Devis',
        learnMore: 'En Savoir Plus',
        contactUs: 'Contactez-Nous',
        callNow: 'Appelez-Nous',
        readMore: 'Lire Plus',
        discover: 'Découvrir',
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
        hours: 'Horaires',
        monday: 'Lundi',
        saturday: 'Samedi'
      },
      // Home Page
      home: {
        heroTitle: 'Votre Partenaire',
        heroTitleHighlight: 'Technologique',
        heroLocation: 'à Haguenau',
        heroDescription: 'Depuis plus de 20 ans, NETZ Informatique accompagne particuliers et entreprises dans leur transformation digitale avec expertise et innovation.',
        getFreeQuote: 'Demander un Devis Gratuit',
        discoverServices: 'Découvrir Nos Services',
        quickIntervention: 'Intervention sous 24-48h',
        statsRepairs: 'Réparations Réussies',
        statsExperience: 'Années d\'Expérience',
        statsClients: 'Clients Satisfaits',
        statsSupport: 'Support Disponible',
        servicesTitle: 'Nos',
        servicesTitleHighlight: 'Services',
        servicesSubtitle: 'Des solutions technologiques sur mesure pour répondre à tous vos besoins informatiques',
        whyChooseTitle: 'Pourquoi Choisir',
        whyChooseTitleHighlight: 'NETZ Informatique',
        testimonialsTitle: 'Ils Nous Font',
        testimonialsTitleHighlight: 'Confiance',
        partnersTitle: 'Nos Partenaires Technologiques',
        ctaTitle: 'Prêt à Transformer Votre Expérience Numérique ?',
        ctaDescription: 'Contactez-nous dès aujourd\'hui pour un diagnostic gratuit et découvrez comment nous pouvons vous aider à atteindre vos objectifs technologiques.'
      },
      // Footer
      footer: {
        tagline: 'Votre partenaire technologique de confiance depuis plus de 20 ans à Haguenau.',
        quickLinks: 'Liens Rapides',
        ourServices: 'Nos Services',
        contact: 'Contact',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Mentions Légales',
        privacy: 'Confidentialité'
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        solutions: 'Solutions',
        formation: 'Training',
        blog: 'Blog',
        contact: 'Contact',
        allServices: 'All Services',
        forIndividuals: 'For Individuals',
        forEnterprises: 'For Businesses',
        allSolutions: 'All Solutions',
        ai: 'Artificial Intelligence',
        webDev: 'Web & SEO',
        cloud: 'Cloud Computing',
        formations: 'Training Programs',
        bilanCompetences: 'Skills Assessment'
      },
      // Common
      common: {
        getQuote: 'Get a Quote',
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
        callNow: 'Call Now',
        readMore: 'Read More',
        discover: 'Discover',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Hours',
        monday: 'Monday',
        saturday: 'Saturday'
      },
      // Home Page
      home: {
        heroTitle: 'Your',
        heroTitleHighlight: 'Technology',
        heroLocation: 'Partner in Haguenau',
        heroDescription: 'For over 20 years, NETZ Informatique has been supporting individuals and businesses in their digital transformation with expertise and innovation.',
        getFreeQuote: 'Get a Free Quote',
        discoverServices: 'Discover Our Services',
        quickIntervention: 'Intervention within 24-48h',
        statsRepairs: 'Successful Repairs',
        statsExperience: 'Years of Experience',
        statsClients: 'Satisfied Clients',
        statsSupport: 'Support Available',
        servicesTitle: 'Our',
        servicesTitleHighlight: 'Services',
        servicesSubtitle: 'Tailored technology solutions to meet all your IT needs',
        whyChooseTitle: 'Why Choose',
        whyChooseTitleHighlight: 'NETZ Informatique',
        testimonialsTitle: 'They',
        testimonialsTitleHighlight: 'Trust Us',
        partnersTitle: 'Our Technology Partners',
        ctaTitle: 'Ready to Transform Your Digital Experience?',
        ctaDescription: 'Contact us today for a free assessment and discover how we can help you achieve your technology goals.'
      },
      // Footer
      footer: {
        tagline: 'Your trusted technology partner for over 20 years in Haguenau.',
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        contact: 'Contact',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy'
      }
    }
  },
  de: {
    translation: {
      // Navigation
      nav: {
        home: 'Startseite',
        about: 'Über Uns',
        services: 'Dienstleistungen',
        solutions: 'Lösungen',
        formation: 'Schulung',
        blog: 'Blog',
        contact: 'Kontakt',
        allServices: 'Alle Dienstleistungen',
        forIndividuals: 'Für Privatpersonen',
        forEnterprises: 'Für Unternehmen',
        allSolutions: 'Alle Lösungen',
        ai: 'Künstliche Intelligenz',
        webDev: 'Web & SEO',
        cloud: 'Cloud Computing',
        formations: 'Schulungsprogramme',
        bilanCompetences: 'Kompetenzbilanz'
      },
      // Common
      common: {
        getQuote: 'Angebot Anfordern',
        learnMore: 'Mehr Erfahren',
        contactUs: 'Kontaktieren Sie Uns',
        callNow: 'Jetzt Anrufen',
        readMore: 'Weiterlesen',
        discover: 'Entdecken',
        phone: 'Telefon',
        email: 'E-Mail',
        address: 'Adresse',
        hours: 'Öffnungszeiten',
        monday: 'Montag',
        saturday: 'Samstag'
      },
      // Home Page
      home: {
        heroTitle: 'Ihr',
        heroTitleHighlight: 'Technologie',
        heroLocation: 'Partner in Haguenau',
        heroDescription: 'Seit über 20 Jahren unterstützt NETZ Informatique Privatpersonen und Unternehmen bei ihrer digitalen Transformation mit Expertise und Innovation.',
        getFreeQuote: 'Kostenloses Angebot Erhalten',
        discoverServices: 'Unsere Dienstleistungen Entdecken',
        quickIntervention: 'Einsatz innerhalb von 24-48h',
        statsRepairs: 'Erfolgreiche Reparaturen',
        statsExperience: 'Jahre Erfahrung',
        statsClients: 'Zufriedene Kunden',
        statsSupport: 'Support Verfügbar',
        servicesTitle: 'Unsere',
        servicesTitleHighlight: 'Dienstleistungen',
        servicesSubtitle: 'Maßgeschneiderte Technologielösungen für alle Ihre IT-Bedürfnisse',
        whyChooseTitle: 'Warum',
        whyChooseTitleHighlight: 'NETZ Informatique',
        testimonialsTitle: 'Sie',
        testimonialsTitleHighlight: 'Vertrauen Uns',
        partnersTitle: 'Unsere Technologiepartner',
        ctaTitle: 'Bereit, Ihre Digitale Erfahrung zu Transformieren?',
        ctaDescription: 'Kontaktieren Sie uns noch heute für eine kostenlose Bewertung und erfahren Sie, wie wir Ihnen helfen können, Ihre Technologieziele zu erreichen.'
      },
      // Footer
      footer: {
        tagline: 'Ihr vertrauenswürdiger Technologiepartner seit über 20 Jahren in Haguenau.',
        quickLinks: 'Schnelllinks',
        ourServices: 'Unsere Dienstleistungen',
        contact: 'Kontakt',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Impressum',
        privacy: 'Datenschutz'
      }
    }
  },
  tr: {
    translation: {
      // Navigation
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        services: 'Hizmetler',
        solutions: 'Çözümler',
        formation: 'Eğitim',
        blog: 'Blog',
        contact: 'İletişim',
        allServices: 'Tüm Hizmetler',
        forIndividuals: 'Bireyler İçin',
        forEnterprises: 'Kurumlar İçin',
        allSolutions: 'Tüm Çözümler',
        ai: 'Yapay Zeka',
        webDev: 'Web & SEO',
        cloud: 'Bulut Bilişim',
        formations: 'Eğitim Programları',
        bilanCompetences: 'Yetkinlik Değerlendirmesi'
      },
      // Common
      common: {
        getQuote: 'Teklif Al',
        learnMore: 'Daha Fazla Bilgi',
        contactUs: 'Bize Ulaşın',
        callNow: 'Hemen Arayın',
        readMore: 'Devamını Oku',
        discover: 'Keşfet',
        phone: 'Telefon',
        email: 'E-posta',
        address: 'Adres',
        hours: 'Çalışma Saatleri',
        monday: 'Pazartesi',
        saturday: 'Cumartesi'
      },
      // Home Page
      home: {
        heroTitle: 'Haguenau\'daki',
        heroTitleHighlight: 'Teknoloji',
        heroLocation: 'Ortağınız',
        heroDescription: '20 yılı aşkın süredir NETZ Informatique, uzmanlık ve yenilikle bireylerin ve işletmelerin dijital dönüşümünde yanlarında.',
        getFreeQuote: 'Ücretsiz Teklif Alın',
        discoverServices: 'Hizmetlerimizi Keşfedin',
        quickIntervention: '24-48 saat içinde müdahale',
        statsRepairs: 'Başarılı Onarım',
        statsExperience: 'Yıllık Deneyim',
        statsClients: 'Memnun Müşteri',
        statsSupport: 'Destek Mevcut',
        servicesTitle: '',
        servicesTitleHighlight: 'Hizmetlerimiz',
        servicesSubtitle: 'Tüm BT ihtiyaçlarınıza özel teknoloji çözümleri',
        whyChooseTitle: 'Neden',
        whyChooseTitleHighlight: 'NETZ Informatique',
        testimonialsTitle: 'Bize',
        testimonialsTitleHighlight: 'Güveniyorlar',
        partnersTitle: 'Teknoloji Ortaklarımız',
        ctaTitle: 'Dijital Deneyiminizi Dönüştürmeye Hazır mısınız?',
        ctaDescription: 'Ücretsiz değerlendirme için bugün bize ulaşın ve teknoloji hedeflerinize ulaşmanızda size nasıl yardımcı olabileceğimizi keşfedin.'
      },
      // Footer
      footer: {
        tagline: 'Haguenau\'da 20 yılı aşkın süredir güvenilir teknoloji ortağınız.',
        quickLinks: 'Hızlı Bağlantılar',
        ourServices: 'Hizmetlerimiz',
        contact: 'İletişim',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Yasal Bildirim',
        privacy: 'Gizlilik'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
