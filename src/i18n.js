import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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
        searchPlaceholder: 'Rechercher un article...',
        categories: 'Catégories',
        allCategories: 'Tous',
        relatedPosts: 'Articles Connexes',
        minRead: 'min de lecture',
        'pagination.showing': 'Affichage de {{start}}-{{end}} sur {{total}} articles'
      },
      contact: {
        title: 'Contactez NETZ Informatique',
        formTitle: 'Envoyez-nous un Message'
      },
      faq: {
        title: 'Questions Fréquentes'
      },
      services: {
        individual: 'Services Particuliers',
        enterprise: 'Services Entreprises'
      },
      solutions: {
        ai: 'Intelligence Artificielle',
        web: 'Développement Web',
        cloud: 'Cloud'
      },
      training: {
        skillsAssessment: 'Bilan de Compétences'
      },
      footer: {
        tagline: 'Votre partenaire technologique de confiance depuis plus de 20 ans à Haguenau.',
        quickLinks: 'Liens Rapides',
        ourServices: 'Nos Services',
        contact: 'Contact',
        partnerSites: 'Nos Sites Partenaires',
        onlineShop: 'Boutique en Ligne',
        trainingPlatform: 'Plateforme Formation',
        techBlog: 'Blog Technique',
        businessHours: 'Lun-Ven: 09:00-12:00 / 14:00-18:00',
        rcs: 'RCS Strasbourg 818 347 346',
        qualiopi: 'Certification QUALIOPI',
        backToTop: 'Retour en haut',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Mentions Légales',
        privacy: 'Confidentialité'
      },
      cookies: {
        banner: {
          title: 'Nous utilisons des cookies',
          description: 'Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser le contenu. Vous pouvez accepter tous les cookies, les refuser ou personnaliser vos préférences.',
          acceptAll: 'Tout Accepter',
          rejectAll: 'Tout Refuser',
          customize: 'Personnaliser',
          privacyPolicy: 'Politique de Confidentialité',
          cookiePolicy: 'Politique des Cookies'
        },
        preferences: {
          title: 'Préférences de Cookies',
          description: 'Gérez vos préférences de cookies. Les cookies nécessaires sont toujours activés car ils sont essentiels au fonctionnement du site.',
          save: 'Enregistrer les Préférences',
          acceptAll: 'Tout Accepter'
        },
        necessary: {
          title: 'Cookies Nécessaires',
          description: 'Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés.',
          examples: 'Session, authentification, préférences de langue'
        },
        analytics: {
          title: 'Cookies Analytiques',
          description: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web.',
          examples: 'Google Analytics, mesures de performance, statistiques de visite'
        },
        functional: {
          title: 'Cookies Fonctionnels',
          description: 'Ces cookies permettent au site de fournir des fonctionnalités améliorées et une personnalisation.',
          examples: 'Préférences utilisateur, paramètres de thème, contenu sauvegardé'
        },
        marketing: {
          title: 'Cookies Marketing',
          description: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web afin d\'afficher des publicités pertinentes.',
          examples: 'Publicités ciblées, remarketing, médias sociaux'
        },
        required: 'Requis',
        examples: 'Exemples'
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
        searchPlaceholder: 'Search for an article...',
        categories: 'Categories',
        allCategories: 'All',
        relatedPosts: 'Related Posts',
        minRead: 'min read',
        'pagination.showing': 'Showing {{start}}-{{end}} of {{total}} posts'
      },
      contact: {
        title: 'Contact NETZ Informatique',
        formTitle: 'Send us a Message'
      },
      faq: {
        title: 'Frequently Asked Questions'
      },
      services: {
        individual: 'Individual Services',
        enterprise: 'Business Services'
      },
      solutions: {
        ai: 'Artificial Intelligence',
        web: 'Web Development',
        cloud: 'Cloud'
      },
      training: {
        skillsAssessment: 'Skills Assessment'
      },
      footer: {
        tagline: 'Your trusted technology partner for over 20 years in Haguenau.',
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        contact: 'Contact',
        partnerSites: 'Our Partner Sites',
        onlineShop: 'Online Shop',
        trainingPlatform: 'Training Platform',
        techBlog: 'Tech Blog',
        businessHours: 'Mon-Fri: 09:00-12:00 / 14:00-18:00',
        rcs: 'RCS Strasbourg 818 347 346',
        qualiopi: 'QUALIOPI Certification',
        backToTop: 'Back to top',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy'
      },
      cookies: {
        banner: {
          title: 'We use cookies',
          description: 'We use cookies to enhance your experience, analyze our traffic, and personalize content. You can accept all cookies, reject them, or customize your preferences.',
          acceptAll: 'Accept All',
          rejectAll: 'Reject All',
          customize: 'Customize',
          privacyPolicy: 'Privacy Policy',
          cookiePolicy: 'Cookie Policy'
        },
        preferences: {
          title: 'Cookie Preferences',
          description: 'Manage your cookie preferences. Necessary cookies are always enabled as they are essential for the website to function.',
          save: 'Save Preferences',
          acceptAll: 'Accept All'
        },
        necessary: {
          title: 'Necessary Cookies',
          description: 'These cookies are essential for the website to function and cannot be disabled.',
          examples: 'Session, authentication, language preferences'
        },
        analytics: {
          title: 'Analytics Cookies',
          description: 'These cookies help us understand how visitors interact with our website.',
          examples: 'Google Analytics, performance metrics, visit statistics'
        },
        functional: {
          title: 'Functional Cookies',
          description: 'These cookies enable the website to provide enhanced functionality and personalization.',
          examples: 'User preferences, theme settings, saved content'
        },
        marketing: {
          title: 'Marketing Cookies',
          description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
          examples: 'Targeted ads, remarketing, social media'
        },
        required: 'Required',
        examples: 'Examples'
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
        searchPlaceholder: 'Nach einem Artikel suchen...',
        categories: 'Kategorien',
        allCategories: 'Alle',
        relatedPosts: 'Ähnliche Beiträge',
        minRead: 'Min. Lesezeit',
        'pagination.showing': 'Zeige {{start}}-{{end}} von {{total}} Beiträgen'
      },
      contact: {
        title: 'Kontaktieren Sie NETZ Informatique',
        formTitle: 'Senden Sie uns eine Nachricht'
      },
      faq: {
        title: 'Häufig Gestellte Fragen'
      },
      services: {
        individual: 'Privatdienste',
        enterprise: 'Unternehmensdienste'
      },
      solutions: {
        ai: 'Künstliche Intelligenz',
        web: 'Webentwicklung',
        cloud: 'Cloud'
      },
      training: {
        skillsAssessment: 'Kompetenzbilanz'
      },
      footer: {
        tagline: 'Ihr vertrauenswürdiger Technologiepartner seit über 20 Jahren in Haguenau.',
        quickLinks: 'Schnelllinks',
        ourServices: 'Unsere Dienstleistungen',
        contact: 'Kontakt',
        partnerSites: 'Unsere Partner-Websites',
        onlineShop: 'Online-Shop',
        trainingPlatform: 'Schulungsplattform',
        techBlog: 'Tech-Blog',
        businessHours: 'Mo-Fr: 09:00-12:00 / 14:00-18:00',
        rcs: 'RCS Straßburg 818 347 346',
        qualiopi: 'QUALIOPI-Zertifizierung',
        backToTop: 'Nach oben',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Impressum',
        privacy: 'Datenschutz'
      },
      cookies: {
        banner: {
          title: 'Wir verwenden Cookies',
          description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, unseren Traffic zu analysieren und Inhalte zu personalisieren. Sie können alle Cookies akzeptieren, ablehnen oder Ihre Einstellungen anpassen.',
          acceptAll: 'Alle Akzeptieren',
          rejectAll: 'Alle Ablehnen',
          customize: 'Anpassen',
          privacyPolicy: 'Datenschutzrichtlinie',
          cookiePolicy: 'Cookie-Richtlinie'
        },
        preferences: {
          title: 'Cookie-Einstellungen',
          description: 'Verwalten Sie Ihre Cookie-Einstellungen. Notwendige Cookies sind immer aktiviert, da sie für die Funktion der Website unerlässlich sind.',
          save: 'Einstellungen Speichern',
          acceptAll: 'Alle Akzeptieren'
        },
        necessary: {
          title: 'Notwendige Cookies',
          description: 'Diese Cookies sind für die Funktion der Website unerlässlich und können nicht deaktiviert werden.',
          examples: 'Sitzung, Authentifizierung, Spracheinstellungen'
        },
        analytics: {
          title: 'Analyse-Cookies',
          description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
          examples: 'Google Analytics, Leistungsmetriken, Besuchsstatistiken'
        },
        functional: {
          title: 'Funktionale Cookies',
          description: 'Diese Cookies ermöglichen es der Website, erweiterte Funktionen und Personalisierung bereitzustellen.',
          examples: 'Benutzereinstellungen, Theme-Einstellungen, gespeicherte Inhalte'
        },
        marketing: {
          title: 'Marketing-Cookies',
          description: 'Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen, um relevante Werbung anzuzeigen.',
          examples: 'Gezielte Werbung, Remarketing, soziale Medien'
        },
        required: 'Erforderlich',
        examples: 'Beispiele'
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
        searchPlaceholder: 'Makale ara...',
        categories: 'Kategoriler',
        allCategories: 'Tümü',
        relatedPosts: 'İlgili Yazılar',
        minRead: 'dk okuma',
        'pagination.showing': '{{total}} yazıdan {{start}}-{{end}} arası gösteriliyor'
      },
      contact: {
        title: 'NETZ Informatique ile İletişime Geçin',
        formTitle: 'Bize Mesaj Gönderin'
      },
      faq: {
        title: 'Sık Sorulan Sorular'
      },
      services: {
        individual: 'Bireysel Hizmetler',
        enterprise: 'Kurumsal Hizmetler'
      },
      solutions: {
        ai: 'Yapay Zeka',
        web: 'Web Geliştirme',
        cloud: 'Bulut'
      },
      training: {
        skillsAssessment: 'Yetkinlik Değerlendirmesi'
      },
      footer: {
        tagline: 'Haguenau\'da 20 yılı aşkın süredir güvenilir teknoloji ortağınız.',
        quickLinks: 'Hızlı Bağlantılar',
        ourServices: 'Hizmetlerimiz',
        contact: 'İletişim',
        partnerSites: 'Partner Sitelerimiz',
        onlineShop: 'Online Mağaza',
        trainingPlatform: 'Eğitim Platformu',
        techBlog: 'Teknoloji Blogu',
        businessHours: 'Pzt-Cum: 09:00-12:00 / 14:00-18:00',
        rcs: 'RCS Strasbourg 818 347 346',
        qualiopi: 'QUALIOPI Sertifikası',
        backToTop: 'Yukarı çık',
        copyright: '© 2025 NETZ Informatique',
        legalNotice: 'Yasal Bildirim',
        privacy: 'Gizlilik'
      },
      cookies: {
        banner: {
          title: 'Çerez Kullanıyoruz',
          description: 'Deneyiminizi geliştirmek, trafiğimizi analiz etmek ve içeriği kişiselleştirmek için çerezler kullanıyoruz. Tüm çerezleri kabul edebilir, reddedebilir veya tercihlerinizi özelleştirebilirsiniz.',
          acceptAll: 'Tümünü Kabul Et',
          rejectAll: 'Tümünü Reddet',
          customize: 'Özelleştir',
          privacyPolicy: 'Gizlilik Politikası',
          cookiePolicy: 'Çerez Politikası'
        },
        preferences: {
          title: 'Çerez Tercihleri',
          description: 'Çerez tercihlerinizi yönetin. Gerekli çerezler, web sitesinin çalışması için gerekli olduğundan her zaman etkindir.',
          save: 'Tercihleri Kaydet',
          acceptAll: 'Tümünü Kabul Et'
        },
        necessary: {
          title: 'Gerekli Çerezler',
          description: 'Bu çerezler web sitesinin çalışması için gereklidir ve devre dışı bırakılamazlar.',
          examples: 'Oturum, kimlik doğrulama, dil tercihleri'
        },
        analytics: {
          title: 'Analitik Çerezler',
          description: 'Bu çerezler, ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anlamamıza yardımcı olur.',
          examples: 'Google Analytics, performans metrikleri, ziyaret istatistikleri'
        },
        functional: {
          title: 'İşlevsel Çerezler',
          description: 'Bu çerezler, web sitesinin gelişmiş işlevsellik ve kişiselleştirme sağlamasına olanak tanır.',
          examples: 'Kullanıcı tercihleri, tema ayarları, kaydedilmiş içerik'
        },
        marketing: {
          title: 'Pazarlama Çerezleri',
          description: 'Bu çerezler, ilgili reklamları görüntülemek için ziyaretçileri web siteleri arasında takip etmek için kullanılır.',
          examples: 'Hedefli reklamlar, yeniden pazarlama, sosyal medya'
        },
        required: 'Gerekli',
        examples: 'Örnekler'
      }
    }
  }
}

// Get language from localStorage or default to French
const getInitialLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem('i18nextLng')
    if (savedLanguage && ['fr', 'en', 'de', 'tr'].includes(savedLanguage)) {
      return savedLanguage
    }
  } catch (error) {
    console.warn('Could not access localStorage:', error)
  }
  return 'fr'
}

// Initialize i18n synchronously
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // Disable suspense to avoid loading delays
    }
  })

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('i18nextLng', lng)
  } catch (error) {
    console.warn('Could not save language to localStorage:', error)
  }
})

export default i18n
