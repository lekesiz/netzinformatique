import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Comprehensive Translation resources for all languages
const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        services: 'Services',
        solutions: 'Solutions',
        formation: 'Formation',
        materiel: 'Matériel',
        boutique: 'Boutique',
        blog: 'Blog',
        contact: 'Contact',
        faq: 'FAQ'
      },
      common: {
        getQuote: 'Demander un Devis',
        learnMore: 'En Savoir Plus',
        contactUs: 'Contactez-Nous',
        callNow: 'Appelez-Nous',
        readMore: 'Lire la suite',
        discover: 'Découvrir',
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
        hours: 'Horaires',
        openingHours: 'Lun-Sam: 09:00-12:00 / 14:00-18:00',
        years: 'ans',
        clients: 'clients'
      },
      home: {
        heroTitle: 'Votre Partenaire',
        heroTitleHighlight: 'Technologique',
        heroLocation: 'à Haguenau',
        heroDescription: 'Depuis plus de 20 ans, NETZ Informatique accompagne particuliers et entreprises dans leur transformation digitale avec expertise et innovation.',
        getFreeQuote: 'Demander un Devis Gratuit',
        discoverServices: 'Découvrir nos Services',
        quickIntervention: 'Intervention rapide 24-48h',
        statsRepairs: 'Réparations Réussies',
        statsExperience: 'Ans d\'Expérience',
        statsClients: 'Clients Satisfaits',
        statsSupport: 'Délai d\'Intervention',
        servicesTitle: 'Nos Services',
        partnersTitle: 'Nos Partenaires Technologiques'
      },
      about: {
        title: 'À Propos de NETZ Informatique',
        subtitle: 'Votre partenaire technologique de confiance depuis 2003'
      },
      formation: {
        title: 'Formation QUALIOPI',
        cpfTitle: 'Formation CPF',
        opcoTitle: 'Formation OPCO',
        bilanTitle: 'Bilan de Compétences'
      },
      materiel: {
        title: 'Matériel Informatique',
        pcSurMesureTitle: 'Votre PC Sur Mesure'
      },
      blog: {
        title: 'Blog & Actualités Tech',
        searchPlaceholder: 'Rechercher un article...'
      },
      contact: {
        title: 'Contactez NETZ Informatique',
        formTitle: 'Envoyez-nous un Message'
      },
      faq: {
        title: 'Questions Fréquentes'
      },
      footer: {
        tagline: 'Votre partenaire technologique de confiance depuis plus de 20 ans à Haguenau.',
        quickLinks: 'Liens Rapides',
        ourServices: 'Nos Services',
        contact: 'Contact',
        partnerSites: 'Nos Sites Partenaires',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Mentions Légales',
        privacy: 'Confidentialité'
      }
    }
  },
  
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        solutions: 'Solutions',
        formation: 'Training',
        materiel: 'Hardware',
        boutique: 'Shop',
        blog: 'Blog',
        contact: 'Contact',
        faq: 'FAQ'
      },
      common: {
        getQuote: 'Get a Quote',
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
        callNow: 'Call Now',
        readMore: 'Read more',
        discover: 'Discover',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Hours',
        openingHours: 'Mon-Sat: 09:00-12:00 / 14:00-18:00',
        years: 'years',
        clients: 'clients'
      },
      home: {
        heroTitle: 'Your Technology',
        heroTitleHighlight: 'Partner',
        heroLocation: 'in Haguenau',
        heroDescription: 'For over 20 years, NETZ Informatique has been supporting individuals and businesses in their digital transformation with expertise and innovation.',
        getFreeQuote: 'Get a Free Quote',
        discoverServices: 'Discover Our Services',
        quickIntervention: 'Intervention within 24-48h',
        statsRepairs: 'Successful Repairs',
        statsExperience: 'Years of Experience',
        statsClients: 'Satisfied Clients',
        statsSupport: 'Support Available',
        servicesTitle: 'Our Services',
        partnersTitle: 'Our Technology Partners'
      },
      about: {
        title: 'About NETZ Informatique',
        subtitle: 'Your trusted technology partner since 2003'
      },
      formation: {
        title: 'QUALIOPI Training',
        cpfTitle: 'CPF Training',
        opcoTitle: 'OPCO Training',
        bilanTitle: 'Skills Assessment'
      },
      materiel: {
        title: 'Computer Hardware',
        pcSurMesureTitle: 'Your Custom PC'
      },
      blog: {
        title: 'Tech Blog & News',
        searchPlaceholder: 'Search for an article...'
      },
      contact: {
        title: 'Contact NETZ Informatique',
        formTitle: 'Send us a Message'
      },
      faq: {
        title: 'Frequently Asked Questions'
      },
      footer: {
        tagline: 'Your trusted technology partner for over 20 years in Haguenau.',
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        contact: 'Contact',
        partnerSites: 'Our Partner Sites',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy'
      }
    }
  },
  
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über Uns',
        services: 'Dienstleistungen',
        solutions: 'Lösungen',
        formation: 'Schulung',
        materiel: 'Hardware',
        boutique: 'Shop',
        blog: 'Blog',
        contact: 'Kontakt',
        faq: 'FAQ'
      },
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
        openingHours: 'Mo-Sa: 09:00-12:00 / 14:00-18:00',
        years: 'Jahre',
        clients: 'Kunden'
      },
      home: {
        heroTitle: 'Ihr Technologie',
        heroTitleHighlight: 'Partner',
        heroLocation: 'in Haguenau',
        heroDescription: 'Seit über 20 Jahren unterstützt NETZ Informatique Privatpersonen und Unternehmen bei ihrer digitalen Transformation mit Expertise und Innovation.',
        servicesTitle: 'Unsere Dienstleistungen',
        partnersTitle: 'Unsere Technologiepartner'
      },
      about: {
        title: 'Über NETZ Informatique',
        subtitle: 'Ihr vertrauenswürdiger Technologiepartner seit 2003'
      },
      formation: {
        title: 'QUALIOPI Schulung',
        cpfTitle: 'CPF Schulung',
        opcoTitle: 'OPCO Schulung',
        bilanTitle: 'Kompetenzbilanz'
      },
      materiel: {
        title: 'Computer-Hardware',
        pcSurMesureTitle: 'Ihr Maßgeschneiderter PC'
      },
      blog: {
        title: 'Tech Blog & Neuigkeiten',
        searchPlaceholder: 'Nach einem Artikel suchen...'
      },
      contact: {
        title: 'Kontaktieren Sie NETZ Informatique',
        formTitle: 'Senden Sie uns eine Nachricht'
      },
      faq: {
        title: 'Häufig Gestellte Fragen'
      },
      footer: {
        tagline: 'Ihr vertrauenswürdiger Technologiepartner seit über 20 Jahren in Haguenau.',
        quickLinks: 'Schnelllinks',
        ourServices: 'Unsere Dienstleistungen',
        contact: 'Kontakt',
        partnerSites: 'Unsere Partner-Websites',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Impressum',
        privacy: 'Datenschutz'
      }
    }
  },
  
  tr: {
    translation: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        services: 'Hizmetler',
        solutions: 'Çözümler',
        formation: 'Eğitim',
        materiel: 'Donanım',
        boutique: 'Mağaza',
        blog: 'Blog',
        contact: 'İletişim',
        faq: 'SSS'
      },
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
        openingHours: 'Pzt-Cmt: 09:00-12:00 / 14:00-18:00',
        years: 'yıl',
        clients: 'müşteri'
      },
      home: {
        heroTitle: 'Haguenau\'daki',
        heroTitleHighlight: 'Teknoloji',
        heroLocation: 'Ortağınız',
        heroDescription: '20 yılı aşkın süredir NETZ Informatique, uzmanlık ve yenilikle bireylerin ve işletmelerin dijital dönüşümünde yanlarında.',
        servicesTitle: 'Hizmetlerimiz',
        partnersTitle: 'Teknoloji Ortaklarımız'
      },
      about: {
        title: 'NETZ Informatique Hakkında',
        subtitle: '2003\'ten beri güvenilir teknoloji ortağınız'
      },
      formation: {
        title: 'QUALIOPI Eğitim',
        cpfTitle: 'CPF Eğitimi',
        opcoTitle: 'OPCO Eğitimi',
        bilanTitle: 'Yetkinlik Değerlendirmesi'
      },
      materiel: {
        title: 'Bilgisayar Donanımı',
        pcSurMesureTitle: 'Özel Bilgisayarınız'
      },
      blog: {
        title: 'Teknoloji Blogu ve Haberler',
        searchPlaceholder: 'Makale ara...'
      },
      contact: {
        title: 'NETZ Informatique ile İletişime Geçin',
        formTitle: 'Bize Mesaj Gönderin'
      },
      faq: {
        title: 'Sık Sorulan Sorular'
      },
      footer: {
        tagline: 'Haguenau\'da 20 yılı aşkın süredir güvenilir teknoloji ortağınız.',
        quickLinks: 'Hızlı Bağlantılar',
        ourServices: 'Hizmetlerimiz',
        contact: 'İletişim',
        partnerSites: 'Partner Sitelerimiz',
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
    lng: 'fr', // Force French as default language
    fallbackLng: 'fr',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
