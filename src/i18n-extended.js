import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Extended Translation resources with comprehensive content
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
        materiel: 'Matériel',
        boutique: 'Boutique',
        blog: 'Blog',
        contact: 'Contact',
        faq: 'FAQ',
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
        readMore: 'Lire la suite',
        discover: 'Découvrir',
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
        hours: 'Horaires',
        monday: 'Lundi',
        saturday: 'Samedi',
        openingHours: 'Lun-Sam: 09:00-12:00 / 14:00-18:00',
        getFreeQuote: 'Demander un Devis Gratuit',
        discoverServices: 'Découvrir Nos Services',
        years: 'ans',
        clients: 'clients',
        projects: 'projets'
      },
      
      // Home Page
      home: {
        heroTitle: 'Votre Partenaire',
        heroTitleHighlight: 'Technologique',
        heroLocation: 'à Haguenau',
        heroDescription: 'Fort de 20 ans d\'expérience dans le secteur IT, Mikail Lekesiz a fondé NETZ Informatique en 2016 pour accompagner particuliers et entreprises dans leur transformation digitale avec expertise et innovation.',
        quickIntervention: 'Intervention sous 24-48h',
        statsRepairs: 'Réparations Réussies',
        statsExperience: 'Années d\'Expérience',
        statsClients: 'Clients Satisfaits',
        statsSupport: 'Support Disponible',
        servicesTitle: 'Nos Services',
        servicesSubtitle: 'Des solutions informatiques complètes pour particuliers et entreprises',
        whyChooseTitle: 'Pourquoi Choisir NETZ ?',
        whyChooseSubtitle: 'Votre partenaire IT de confiance, fondé en 2016 avec 20 ans d\'expérience',
        testimonialsTitle: 'Ils Nous Font Confiance',
        testimonialsSubtitle: 'Découvrez les témoignages de nos clients satisfaits',
        partnersTitle: 'Nos Partenaires Technologiques',
        partnersSubtitle: 'Nous travaillons avec les leaders de l\'industrie',
        ctaTitle: 'Prêt à Transformer Votre Expérience Numérique ?',
        ctaDescription: 'Contactez-nous dès aujourd\'hui pour un diagnostic gratuit et découvrez comment nous pouvons vous aider à atteindre vos objectifs technologiques.'
      },
      
      // About Page
      about: {
        title: 'À Propos de NETZ Informatique',
        subtitle: 'Votre partenaire technologique de confiance depuis 2003',
        historyTitle: 'Notre Histoire',
        historyDescription: 'Fondée en 2003 à Haguenau, NETZ Informatique est née de la passion de Mikail Lekesiz pour l\'informatique et de sa volonté d\'accompagner les particuliers et entreprises dans leur transformation digitale.',
        missionTitle: 'Notre Mission',
        missionDescription: 'Rendre la technologie accessible à tous en proposant des solutions sur mesure, un service de proximité et un accompagnement personnalisé.',
        visionTitle: 'Notre Vision',
        visionDescription: 'Être le partenaire IT de référence dans la région d\'Alsace en combinant expertise technique, innovation et engagement environnemental.',
        valuesTitle: 'Nos Valeurs',
        value1: 'Excellence',
        value1Description: 'Qualité et professionnalisme dans chaque intervention',
        value2: 'Proximité',
        value2Description: 'Service local et réactivité garantie',
        value3: 'Innovation',
        value3Description: 'Solutions technologiques de pointe',
        value4: 'Confiance',
        value4Description: 'Transparence et honnêteté',
        teamTitle: 'Notre Équipe',
        certificationTitle: 'Certifications & Partenariats'
      },
      
      // Formation Page
      formation: {
        title: 'Formation QUALIOPI',
        subtitle: 'Formations certifiées et bilan de compétences financés par CPF, OPCO et Pôle Emploi',
        cpfTitle: 'Formation CPF',
        cpfSubtitle: 'Pour Particuliers',
        cpfDescription: 'Financez votre formation avec votre Compte Personnel de Formation. Accessible à tous les salariés et demandeurs d\'emploi.',
        opcoTitle: 'Formation OPCO',
        opcoSubtitle: 'Pour Entreprises',
        opcoDescription: 'Développez les compétences de vos équipes avec un financement OPCO. Solutions sur-mesure pour les professionnels.',
        bilanTitle: 'Bilan de Compétences',
        bilanSubtitle: 'Pour Tous',
        bilanDescription: 'Évaluez et valorisez vos compétences professionnelles. Construisez un projet professionnel solide et réaliste.',
        statsParticipants: 'Participants formés',
        statsSuccess: 'Taux de réalisation',
        statsSatisfaction: 'Satisfaction'
      },
      
      // Materiel Page
      materiel: {
        title: 'Matériel Informatique',
        subtitle: 'Du matériel choisi uniquement auprès de marques réputées pour garantir qualité et performance',
        pcSurMesureTitle: 'Votre PC Sur Mesure',
        pcSurMesureDescription: 'Spécialisée dans le montage de PC et serveurs, l\'équipe de NETZ Informatique vous propose de monter votre ordinateur à la carte.',
        serveursTitle: 'Serveurs',
        serveursDescription: 'Configuration, installation et paramétrage de serveurs professionnels.',
        portablesTitle: 'PC Portables',
        portablesDescription: 'Marques professionnelles, ultrabooks et workstations.',
        peripheriquesTitle: 'Périphériques',
        peripheriquesDescription: 'Écrans, claviers, souris, disques durs et accessoires de qualité.',
        gamingTitle: 'PC Gaming',
        gamingDescription: 'Configurations haute performance pour les joueurs exigeants.',
        imprimantesTitle: 'Imprimantes & Consommables',
        imprimantesDescription: 'Imprimantes et cartouches à prix compétitifs.'
      },
      
      // Blog
      blog: {
        title: 'Blog & Actualités Tech',
        subtitle: 'Suivez nos analyses, tutoriels et actualités sur l\'informatique, l\'IA, la cybersécurité et le développement web.',
        searchPlaceholder: 'Rechercher un article...',
        readMore: 'Lire la suite',
        categories: 'Catégories',
        recentPosts: 'Articles Récents',
        tags: 'Étiquettes'
      },
      
      // Contact Page
      contact: {
        title: 'Contactez NETZ Informatique',
        subtitle: 'Notre équipe est à votre écoute pour répondre à toutes vos questions',
        formTitle: 'Envoyez-nous un Message',
        nameLabel: 'Nom Complet',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email',
        emailPlaceholder: 'votre@email.com',
        phoneLabel: 'Téléphone',
        phonePlaceholder: '+33 6 XX XX XX XX',
        subjectLabel: 'Sujet',
        subjectPlaceholder: 'Objet de votre message',
        messageLabel: 'Message',
        messagePlaceholder: 'Votre message...',
        sendButton: 'Envoyer',
        infoTitle: 'Informations',
        addressLabel: 'Adresse',
        addressValue: '1a Route de Schweighouse, 67500 Haguenau, France',
        hoursLabel: 'Horaires',
        hoursValue: 'Lun-Ven: 09:00-12:00 / 14:00-18:00'
      },
      
      // FAQ Page
      faq: {
        title: 'Questions Fréquentes',
        subtitle: 'Trouvez rapidement des réponses à vos questions',
        searchPlaceholder: 'Rechercher une question...',
        categories: {
          general: 'Questions Générales',
          services: 'Services & Tarifs',
          support: 'Support Technique',
          formation: 'Formations',
          security: 'Sécurité & Confidentialité',
          billing: 'Facturation & Paiement'
        }
      },
      
      // Footer
      footer: {
        tagline: 'Votre partenaire technologique de confiance à Haguenau. Fondé en 2016 par Mikail Lekesiz, fort de 20 ans d\'expérience IT.',
        quickLinks: 'Liens Rapides',
        ourServices: 'Nos Services',
        contact: 'Contact',
        partnerSites: 'Nos Sites Partenaires',
        boutiqueTitle: 'Boutique en Ligne',
        boutiqueUrl: 'informatique-haguenau.fr',
        formationTitle: 'Plateforme Formation',
        formationUrl: 'formation-haguenau.fr',
        blogTitle: 'Blog Technique',
        blogUrl: 'netz-blog.fr',
        copyright: '© 2025 NETZ Informatique',
        rcs: 'RCS Strasbourg 818 347 346',
        certification: 'Certification QUALIOPI',
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
        materiel: 'Hardware',
        boutique: 'Shop',
        blog: 'Blog',
        contact: 'Contact',
        faq: 'FAQ',
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
        readMore: 'Read more',
        discover: 'Discover',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Hours',
        monday: 'Monday',
        saturday: 'Saturday',
        openingHours: 'Mon-Sat: 09:00-12:00 / 14:00-18:00',
        getFreeQuote: 'Get a Free Quote',
        discoverServices: 'Discover Our Services',
        years: 'years',
        clients: 'clients',
        projects: 'projects'
      },
      
      // Home Page
      home: {
        heroTitle: 'Your Technology',
        heroTitleHighlight: 'Partner',
        heroLocation: 'in Haguenau',
        heroDescription: 'With 20 years of experience in the IT sector, Mikail Lekesiz founded NETZ Informatique in 2016 to support individuals and businesses in their digital transformation with expertise and innovation.',
        quickIntervention: 'Intervention within 24-48h',
        statsRepairs: 'Successful Repairs',
        statsExperience: 'Years of Experience',
        statsClients: 'Satisfied Clients',
        statsSupport: 'Support Available',
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Complete IT solutions for individuals and businesses',
        whyChooseTitle: 'Why Choose NETZ?',
        whyChooseSubtitle: 'Your trusted IT partner, founded in 2016 with 20 years of experience',
        testimonialsTitle: 'They Trust Us',
        testimonialsSubtitle: 'Discover testimonials from our satisfied clients',
        partnersTitle: 'Our Technology Partners',
        partnersSubtitle: 'We work with industry leaders',
        ctaTitle: 'Ready to Transform Your Digital Experience?',
        ctaDescription: 'Contact us today for a free assessment and discover how we can help you achieve your technology goals.'
      },
      
      // About Page
      about: {
        title: 'About NETZ Informatique',
        subtitle: 'Your trusted technology partner since 2003',
        historyTitle: 'Our History',
        historyDescription: 'Founded in 2003 in Haguenau, NETZ Informatique was born from Mikail Lekesiz\'s passion for IT and his desire to support individuals and businesses in their digital transformation.',
        missionTitle: 'Our Mission',
        missionDescription: 'Making technology accessible to everyone by offering tailored solutions, local service, and personalized support.',
        visionTitle: 'Our Vision',
        visionDescription: 'To be the leading IT partner in the Alsace region by combining technical expertise, innovation, and environmental commitment.',
        valuesTitle: 'Our Values',
        value1: 'Excellence',
        value1Description: 'Quality and professionalism in every intervention',
        value2: 'Proximity',
        value2Description: 'Local service and guaranteed responsiveness',
        value3: 'Innovation',
        value3Description: 'Cutting-edge technology solutions',
        value4: 'Trust',
        value4Description: 'Transparency and honesty',
        teamTitle: 'Our Team',
        certificationTitle: 'Certifications & Partnerships'
      },
      
      // Formation Page
      formation: {
        title: 'QUALIOPI Training',
        subtitle: 'Certified training and skills assessment funded by CPF, OPCO, and Employment Center',
        cpfTitle: 'CPF Training',
        cpfSubtitle: 'For Individuals',
        cpfDescription: 'Fund your training with your Personal Training Account. Accessible to all employees and job seekers.',
        opcoTitle: 'OPCO Training',
        opcoSubtitle: 'For Businesses',
        opcoDescription: 'Develop your team\'s skills with OPCO funding. Tailored solutions for professionals.',
        bilanTitle: 'Skills Assessment',
        bilanSubtitle: 'For Everyone',
        bilanDescription: 'Evaluate and enhance your professional skills. Build a solid and realistic career project.',
        statsParticipants: 'Trained participants',
        statsSuccess: 'Completion rate',
        statsSatisfaction: 'Satisfaction'
      },
      
      // Materiel Page
      materiel: {
        title: 'Computer Hardware',
        subtitle: 'Hardware selected only from reputable brands to guarantee quality and performance',
        pcSurMesureTitle: 'Your Custom PC',
        pcSurMesureDescription: 'Specialized in PC and server assembly, the NETZ Informatique team offers to build your custom computer.',
        serveursTitle: 'Servers',
        serveursDescription: 'Configuration, installation, and setup of professional servers.',
        portablesTitle: 'Laptops',
        portablesDescription: 'Professional brands, ultrabooks, and workstations.',
        peripheriquesTitle: 'Peripherals',
        peripheriquesDescription: 'Quality monitors, keyboards, mice, hard drives, and accessories.',
        gamingTitle: 'Gaming PCs',
        gamingDescription: 'High-performance configurations for demanding gamers.',
        imprimantesTitle: 'Printers & Consumables',
        imprimantesDescription: 'Printers and cartridges at competitive prices.'
      },
      
      // Blog
      blog: {
        title: 'Tech Blog & News',
        subtitle: 'Follow our analyses, tutorials, and news on IT, AI, cybersecurity, and web development.',
        searchPlaceholder: 'Search for an article...',
        readMore: 'Read more',
        categories: 'Categories',
        recentPosts: 'Recent Posts',
        tags: 'Tags'
      },
      
      // Contact Page
      contact: {
        title: 'Contact NETZ Informatique',
        subtitle: 'Our team is here to answer all your questions',
        formTitle: 'Send us a Message',
        nameLabel: 'Full Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '+33 6 XX XX XX XX',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Subject of your message',
        messageLabel: 'Message',
        messagePlaceholder: 'Your message...',
        sendButton: 'Send',
        infoTitle: 'Information',
        addressLabel: 'Address',
        addressValue: '1a Route de Schweighouse, 67500 Haguenau, France',
        hoursLabel: 'Hours',
        hoursValue: 'Mon-Fri: 09:00-12:00 / 14:00-18:00'
      },
      
      // FAQ Page
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find quick answers to your questions',
        searchPlaceholder: 'Search for a question...',
        categories: {
          general: 'General Questions',
          services: 'Services & Pricing',
          support: 'Technical Support',
          formation: 'Training',
          security: 'Security & Privacy',
          billing: 'Billing & Payment'
        }
      },
      
      // Footer
      footer: {
        tagline: 'Your trusted technology partner in Haguenau. Founded in 2016 by Mikail Lekesiz, with 20 years of IT experience.',
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        contact: 'Contact',
        partnerSites: 'Our Partner Sites',
        boutiqueTitle: 'Online Shop',
        boutiqueUrl: 'informatique-haguenau.fr',
        formationTitle: 'Training Platform',
        formationUrl: 'formation-haguenau.fr',
        blogTitle: 'Technical Blog',
        blogUrl: 'netz-blog.fr',
        copyright: '© 2025 NETZ Informatique',
        rcs: 'RCS Strasbourg 818 347 346',
        certification: 'QUALIOPI Certification',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy'
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
