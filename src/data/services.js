// Services data for Netz Informatique
export const services = [
  {
    id: 'depannage-maintenance',
    icon: 'Wrench',
    title: {
      fr: 'Dépannage & Maintenance',
      en: 'Repair & Maintenance',
      de: 'Reparatur & Wartung',
      tr: 'Onarım & Bakım'
    },
    description: {
      fr: 'Intervention rapide sous 24-48h pour tous vos problèmes informatiques. Dépannage sur site ou en atelier.',
      en: 'Fast intervention within 24-48h for all your IT problems. On-site or in-workshop repair.',
      de: 'Schneller Eingriff innerhalb von 24-48 Stunden für alle Ihre IT-Probleme. Vor-Ort- oder Werkstattreparatur.',
      tr: 'Tüm bilgisayar sorunlarınız için 24-48 saat içinde hızlı müdahale. Yerinde veya atölyede onarım.'
    },
    link: '/services/particuliers',
    color: 'gradient-blue'
  },
  {
    id: 'materiel-assemblage',
    icon: 'Cpu',
    title: {
      fr: 'Matériel & Assemblage',
      en: 'Hardware & Assembly',
      de: 'Hardware & Montage',
      tr: 'Donanım & Montaj'
    },
    description: {
      fr: 'PC sur mesure, gaming, professionnel. Vente de matériel informatique et périphériques de qualité.',
      en: 'Custom PC, gaming, professional. Sale of quality computer hardware and peripherals.',
      de: 'Maßgeschneiderter PC, Gaming, professionell. Verkauf von hochwertiger Computerhardware und Peripheriegeräten.',
      tr: 'Özel PC, oyun, profesyonel. Kaliteli bilgisayar donanımı ve çevre birimleri satışı.'
    },
    link: '/services/particuliers',
    color: 'gradient-purple'
  },
  {
    id: 'reseaux-infrastructure',
    icon: 'Network',
    title: {
      fr: 'Réseaux & Infrastructure',
      en: 'Networks & Infrastructure',
      de: 'Netzwerke & Infrastruktur',
      tr: 'Ağlar & Altyapı'
    },
    description: {
      fr: 'Installation et configuration de réseaux d\'entreprise. Solutions Cisco, WiFi professionnel, audit IT.',
      en: 'Installation and configuration of corporate networks. Cisco solutions, professional WiFi, IT audit.',
      de: 'Installation und Konfiguration von Unternehmensnetzwerken. Cisco-Lösungen, professionelles WLAN, IT-Audit.',
      tr: 'Kurumsal ağ kurulumu ve yapılandırması. Cisco çözümleri, profesyonel WiFi, BT denetimi.'
    },
    link: '/services/entreprises',
    color: 'gradient-green'
  },
  {
    id: 'intelligence-artificielle',
    icon: 'Brain',
    title: {
      fr: 'Intelligence Artificielle',
      en: 'Artificial Intelligence',
      de: 'Künstliche Intelligenz',
      tr: 'Yapay Zeka'
    },
    description: {
      fr: 'IA Offline exclusive, DeepSeek Enterprise. Solutions IA pour santé, automatisation et conseil stratégique.',
      en: 'Exclusive Offline AI, DeepSeek Enterprise. AI solutions for healthcare, automation and strategic consulting.',
      de: 'Exklusive Offline-KI, DeepSeek Enterprise. KI-Lösungen für Gesundheitswesen, Automatisierung und strategische Beratung.',
      tr: 'Özel Çevrimdışı AI, DeepSeek Enterprise. Sağlık, otomasyon ve stratejik danışmanlık için AI çözümleri.'
    },
    link: '/solutions/intelligence-artificielle',
    color: 'gradient-purple',
    featured: true
  },
  {
    id: 'cybersecurite',
    icon: 'Shield',
    title: {
      fr: 'Cybersécurité',
      en: 'Cybersecurity',
      de: 'Cybersicherheit',
      tr: 'Siber Güvenlik'
    },
    description: {
      fr: 'Protection antivirus, pare-feu, conformité RGPD. Audit de sécurité et formation de vos équipes.',
      en: 'Antivirus protection, firewall, GDPR compliance. Security audit and team training.',
      de: 'Antivirenschutz, Firewall, DSGVO-Konformität. Sicherheitsaudit und Teamschulung.',
      tr: 'Antivirüs koruması, güvenlik duvarı, GDPR uyumluluğu. Güvenlik denetimi ve ekip eğitimi.'
    },
    link: '/services/entreprises',
    color: 'gradient-blue'
  },
  {
    id: 'cloud-transformation',
    icon: 'Cloud',
    title: {
      fr: 'Cloud & Transformation Digitale',
      en: 'Cloud & Digital Transformation',
      de: 'Cloud & Digitale Transformation',
      tr: 'Bulut & Dijital Dönüşüm'
    },
    description: {
      fr: 'Migration cloud, Microsoft 365, hébergement. Accompagnement dans votre transformation digitale.',
      en: 'Cloud migration, Microsoft 365, hosting. Support in your digital transformation.',
      de: 'Cloud-Migration, Microsoft 365, Hosting. Unterstützung bei Ihrer digitalen Transformation.',
      tr: 'Bulut geçişi, Microsoft 365, barındırma. Dijital dönüşümünüzde destek.'
    },
    link: '/solutions/cloud',
    color: 'gradient-green'
  },
  {
    id: 'developpement-web',
    icon: 'Code',
    title: {
      fr: 'Développement Web & SEO',
      en: 'Web Development & SEO',
      de: 'Webentwicklung & SEO',
      tr: 'Web Geliştirme & SEO'
    },
    description: {
      fr: 'Création de sites web, e-commerce, applications. Référencement naturel et maintenance de sites.',
      en: 'Website creation, e-commerce, applications. Natural referencing and site maintenance.',
      de: 'Website-Erstellung, E-Commerce, Anwendungen. Natürliche Referenzierung und Website-Wartung.',
      tr: 'Web sitesi oluşturma, e-ticaret, uygulamalar. Doğal referanslama ve site bakımı.'
    },
    link: '/solutions/web-developpement',
    color: 'gradient-purple'
  },
  {
    id: 'formation-accompagnement',
    icon: 'GraduationCap',
    title: {
      fr: 'Formation & Accompagnement',
      en: 'Training & Support',
      de: 'Schulung & Unterstützung',
      tr: 'Eğitim & Destek'
    },
    description: {
      fr: 'Formations professionnelles certifiées QUALIOPI. Bilan de compétences, IA, Cloud, outils numériques.',
      en: 'QUALIOPI certified professional training. Skills assessment, AI, Cloud, digital tools.',
      de: 'QUALIOPI-zertifizierte Berufsausbildung. Kompetenzbewertung, KI, Cloud, digitale Werkzeuge.',
      tr: 'QUALIOPI sertifikalı profesyonel eğitim. Yetenek değerlendirmesi, AI, Bulut, dijital araçlar.'
    },
    link: '/formation',
    color: 'gradient-green'
  }
]

export const whyChooseUs = [
  {
    icon: 'Award',
    title: {
      fr: '20+ Ans d\'Expérience',
      en: '20+ Years of Experience',
      de: '20+ Jahre Erfahrung',
      tr: '20+ Yıllık Deneyim'
    },
    description: {
      fr: 'Depuis 2016, nous accompagnons particuliers et entreprises dans leur transformation digitale.',
      en: 'Since 2016, we have been supporting individuals and businesses in their digital transformation.',
      de: 'Seit 2016 unterstützen wir Privatpersonen und Unternehmen bei ihrer digitalen Transformation.',
      tr: '2016\'dan beri bireyleri ve işletmeleri dijital dönüşümlerinde destekliyoruz.'
    }
  },
  {
    icon: 'MapPin',
    title: {
      fr: 'Service Local & Proximité',
      en: 'Local Service & Proximity',
      de: 'Lokaler Service & Nähe',
      tr: 'Yerel Hizmet & Yakınlık'
    },
    description: {
      fr: 'Basés à Haguenau, nous intervenons dans un rayon de 30 km. Proximité et réactivité garanties.',
      en: 'Based in Haguenau, we operate within a 30 km radius. Proximity and responsiveness guaranteed.',
      de: 'Mit Sitz in Haguenau sind wir in einem Umkreis von 30 km tätig. Nähe und Reaktionsfähigkeit garantiert.',
      tr: 'Haguenau merkezli olarak 30 km yarıçapında hizmet veriyoruz. Yakınlık ve hızlı yanıt garanti.'
    }
  },
  {
    icon: 'Shield',
    title: {
      fr: 'Expertise IA Offline Unique',
      en: 'Unique Offline AI Expertise',
      de: 'Einzigartige Offline-KI-Expertise',
      tr: 'Benzersiz Çevrimdışı AI Uzmanlığı'
    },
    description: {
      fr: 'Solution exclusive d\'IA Offline avec confidentialité totale. Idéal pour secteurs sensibles (santé, juridique).',
      en: 'Exclusive Offline AI solution with total confidentiality. Ideal for sensitive sectors (health, legal).',
      de: 'Exklusive Offline-KI-Lösung mit vollständiger Vertraulichkeit. Ideal für sensible Sektoren (Gesundheit, Recht).',
      tr: 'Tam gizlilik ile özel Çevrimdışı AI çözümü. Hassas sektörler için ideal (sağlık, hukuk).'
    }
  },
  {
    icon: 'Users',
    title: {
      fr: 'Support 24/7',
      en: '24/7 Support',
      de: '24/7-Support',
      tr: '24/7 Destek'
    },
    description: {
      fr: 'Assistance disponible 24h/24, 7j/7. Intervention rapide sous 24-48h pour les urgences.',
      en: 'Assistance available 24/7. Fast intervention within 24-48h for emergencies.',
      de: 'Unterstützung rund um die Uhr verfügbar. Schneller Eingriff innerhalb von 24-48 Stunden bei Notfällen.',
      tr: '7/24 destek mevcut. Acil durumlar için 24-48 saat içinde hızlı müdahale.'
    }
  },
  {
    icon: 'Certificate',
    title: {
      fr: 'Certifications & Partenariats',
      en: 'Certifications & Partnerships',
      de: 'Zertifizierungen & Partnerschaften',
      tr: 'Sertifikalar & Ortaklıklar'
    },
    description: {
      fr: 'Partenaire Microsoft et Cisco. Certification QUALIOPI pour nos formations professionnelles.',
      en: 'Microsoft and Cisco partner. QUALIOPI certification for our professional training.',
      de: 'Microsoft- und Cisco-Partner. QUALIOPI-Zertifizierung für unsere Berufsausbildung.',
      tr: 'Microsoft ve Cisco ortağı. Profesyonel eğitimlerimiz için QUALIOPI sertifikası.'
    }
  },
  {
    icon: 'Leaf',
    title: {
      fr: 'Green IT & Informatique Durable',
      en: 'Green IT & Sustainable Computing',
      de: 'Green IT & Nachhaltige Informatik',
      tr: 'Yeşil BT & Sürdürülebilir Bilişim'
    },
    description: {
      fr: 'Engagement pour l\'environnement. Reconditionnement, recyclage et solutions éco-responsables.',
      en: 'Commitment to the environment. Refurbishment, recycling and eco-responsible solutions.',
      de: 'Engagement für die Umwelt. Aufbereitung, Recycling und umweltfreundliche Lösungen.',
      tr: 'Çevre taahhüdü. Yenileme, geri dönüşüm ve çevre dostu çözümler.'
    }
  }
]

export const partners = [
  {
    name: 'Microsoft',
    logo: '/images/partners/microsoft.png',
    description: 'Microsoft Partner'
  },
  {
    name: 'Cisco',
    logo: '/images/partners/cisco.png',
    description: 'Cisco Partner'
  },
  {
    name: 'QUALIOPI',
    logo: '/images/partners/qualiopi.png',
    description: 'Certification QUALIOPI'
  },
  {
    name: 'DeepSeek',
    logo: '/images/partners/deepseek.png',
    description: 'DeepSeek Enterprise Partner'
  }
]
