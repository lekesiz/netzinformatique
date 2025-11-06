/**
 * Chatbot FAQ Database
 *
 * Comprehensive FAQ system for AI-powered chatbot with multi-language support
 * Includes intent recognition, keywords, and structured responses
 */

export const chatbotFAQ = [
  // Greetings & General
  {
    id: 'greeting',
    intent: 'greeting',
    keywords: ['bonjour', 'salut', 'hello', 'hi', 'bonsoir', 'coucou', 'hey'],
    question: {
      fr: 'Bonjour',
      en: 'Hello',
      de: 'Hallo',
      tr: 'Merhaba',
    },
    answer: {
      fr: "Bonjour ! 👋 Je suis l'assistant virtuel de NETZ Informatique. Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur nos services, tarifs, ou prendre rendez-vous.",
      en: "Hello! 👋 I'm the NETZ Informatique virtual assistant. How can I help you today? You can ask me about our services, pricing, or book an appointment.",
      de: "Hallo! 👋 Ich bin der virtuelle Assistent von NETZ Informatique. Wie kann ich Ihnen heute helfen? Sie können mich nach unseren Dienstleistungen, Preisen fragen oder einen Termin vereinbaren.",
      tr: "Merhaba! 👋 Ben NETZ Informatique'in sanal asistanıyım. Bugün size nasıl yardımcı olabilirim? Hizmetlerimiz, fiyatlarımız hakkında soru sorabilir veya randevu alabilirsiniz.",
    },
    category: 'general',
    suggestedActions: ['services', 'pricing', 'contact'],
  },

  // Services - General
  {
    id: 'services_general',
    intent: 'services_inquiry',
    keywords: ['service', 'services', 'que faites', 'what do you do', 'proposez', 'offer'],
    question: {
      fr: 'Quels services proposez-vous ?',
      en: 'What services do you offer?',
      de: 'Welche Dienstleistungen bieten Sie an?',
      tr: 'Hangi hizmetleri sunuyorsunuz?',
    },
    answer: {
      fr: "Nous proposons une gamme complète de services IT :\n\n🔧 **Dépannage & Maintenance** - Réparation PC/Mac, installation systèmes\n🎓 **Formation Professionnelle** - Bureautique, outils numériques\n🤖 **Intelligence Artificielle** - IA générative, automatisation\n🛡️ **Cybersécurité** - Protection données, audits sécurité\n☁️ **Cloud & Réseau** - Infrastructure cloud, réseau d'entreprise\n🌐 **Développement Web** - Sites web, applications\n\nQuel domaine vous intéresse ?",
      en: "We offer a complete range of IT services:\n\n🔧 **Repair & Maintenance** - PC/Mac repair, system installation\n🎓 **Professional Training** - Office tools, digital tools\n🤖 **Artificial Intelligence** - Generative AI, automation\n🛡️ **Cybersecurity** - Data protection, security audits\n☁️ **Cloud & Network** - Cloud infrastructure, enterprise network\n🌐 **Web Development** - Websites, applications\n\nWhich area interests you?",
      de: "Wir bieten eine komplette Palette von IT-Dienstleistungen:\n\n🔧 **Reparatur & Wartung** - PC/Mac-Reparatur, Systeminstallation\n🎓 **Berufliche Schulung** - Büro-Tools, digitale Werkzeuge\n🤖 **Künstliche Intelligenz** - Generative KI, Automatisierung\n🛡️ **Cybersicherheit** - Datenschutz, Sicherheitsaudits\n☁️ **Cloud & Netzwerk** - Cloud-Infrastruktur, Unternehmensnetzwerk\n🌐 **Webentwicklung** - Websites, Anwendungen\n\nWelcher Bereich interessiert Sie?",
      tr: "Eksiksiz bir BT hizmet yelpazesi sunuyoruz:\n\n🔧 **Tamir & Bakım** - PC/Mac tamiri, sistem kurulumu\n🎓 **Profesyonel Eğitim** - Ofis araçları, dijital araçlar\n🤖 **Yapay Zeka** - Üretken AI, otomasyon\n🛡️ **Siber Güvenlik** - Veri koruma, güvenlik denetimleri\n☁️ **Bulut & Ağ** - Bulut altyapısı, kurumsal ağ\n🌐 **Web Geliştirme** - Web siteleri, uygulamalar\n\nHangi alan ilginizi çekiyor?",
    },
    category: 'services',
    suggestedActions: ['depannage', 'formation', 'ia', 'cybersecurite'],
  },

  // Dépannage & Maintenance
  {
    id: 'service_depannage',
    intent: 'service_repair',
    keywords: ['dépannage', 'réparation', 'repair', 'panne', 'broken', 'cassé', 'fix', 'maintenance', 'lent', 'slow', 'virus'],
    question: {
      fr: 'Proposez-vous du dépannage informatique ?',
      en: 'Do you offer computer repair?',
      de: 'Bieten Sie Computer-Reparatur an?',
      tr: 'Bilgisayar tamiri sunuyor musunuz?',
    },
    answer: {
      fr: "Oui ! Nous proposons un service complet de dépannage :\n\n✅ Réparation PC/Mac (matériel et logiciel)\n✅ Nettoyage et optimisation système\n✅ Suppression virus et malwares\n✅ Installation Windows/macOS/Linux\n✅ Récupération de données\n✅ Upgrade RAM, disque dur, SSD\n\n⚡ **Intervention rapide** : 24-48h\n🏠 **Sur place ou à distance** selon vos besoins\n\n**Tarif horaire** : 50€ HT/heure\n**Forfait diagnostic** : 30€ HT\n\nSouhaitez-vous prendre rendez-vous ?",
      en: "Yes! We offer complete repair services:\n\n✅ PC/Mac repair (hardware and software)\n✅ System cleaning and optimization\n✅ Virus and malware removal\n✅ Windows/macOS/Linux installation\n✅ Data recovery\n✅ RAM, hard drive, SSD upgrades\n\n⚡ **Fast intervention**: 24-48h\n🏠 **On-site or remote** based on your needs\n\n**Hourly rate**: €50 excl. tax/hour\n**Diagnostic fee**: €30 excl. tax\n\nWould you like to book an appointment?",
      de: "Ja! Wir bieten komplette Reparaturdienstleistungen:\n\n✅ PC/Mac-Reparatur (Hardware und Software)\n✅ Systemreinigung und -optimierung\n✅ Viren- und Malware-Entfernung\n✅ Windows/macOS/Linux-Installation\n✅ Datenwiederherstellung\n✅ RAM-, Festplatten-, SSD-Upgrades\n\n⚡ **Schnelle Intervention**: 24-48h\n🏠 **Vor Ort oder Remote** je nach Bedarf\n\n**Stundensatz**: 50€ zzgl. MwSt./Stunde\n**Diagnosegebühr**: 30€ zzgl. MwSt.\n\nMöchten Sie einen Termin vereinbaren?",
      tr: "Evet! Eksiksiz tamir hizmetleri sunuyoruz:\n\n✅ PC/Mac tamiri (donanım ve yazılım)\n✅ Sistem temizleme ve optimizasyonu\n✅ Virüs ve kötü amaçlı yazılım temizleme\n✅ Windows/macOS/Linux kurulumu\n✅ Veri kurtarma\n✅ RAM, sabit disk, SSD yükseltmeleri\n\n⚡ **Hızlı müdahale**: 24-48 saat\n🏠 **Yerinde veya uzaktan** ihtiyacınıza göre\n\n**Saatlik ücret**: Vergisiz 50€/saat\n**Teşhis ücreti**: Vergisiz 30€\n\nRandevu almak ister misiniz?",
    },
    category: 'services',
    suggestedActions: ['contact', 'pricing'],
  },

  // Formation
  {
    id: 'service_formation',
    intent: 'service_training',
    keywords: ['formation', 'training', 'cours', 'apprendre', 'learn', 'teach', 'cpf', 'certification'],
    question: {
      fr: 'Proposez-vous des formations ?',
      en: 'Do you offer training?',
      de: 'Bieten Sie Schulungen an?',
      tr: 'Eğitim veriyor musunuz?',
    },
    answer: {
      fr: "Oui ! Nous sommes **certifiés Qualiopi** pour la formation professionnelle :\n\n📚 **Formations disponibles** :\n• Bureautique (Word, Excel, PowerPoint)\n• Outils collaboratifs (Teams, Zoom, Slack)\n• IA pour les professionnels (ChatGPT, Midjourney)\n• Cybersécurité & Protection données\n• Réseaux sociaux pour entreprises\n• Création de sites web\n\n💰 **Finançable CPF** - Utilisez vos droits à la formation\n🎓 **Certification** - Attestation en fin de formation\n👥 **Individuel ou groupe** - Adapté à vos besoins\n📍 **En présentiel ou distanciel**\n\n**Tarifs** : À partir de 600€ HT/jour\n\nIntéressé(e) par une formation spécifique ?",
      en: "Yes! We are **Qualiopi certified** for professional training:\n\n📚 **Available training**:\n• Office tools (Word, Excel, PowerPoint)\n• Collaborative tools (Teams, Zoom, Slack)\n• AI for professionals (ChatGPT, Midjourney)\n• Cybersecurity & Data protection\n• Social media for businesses\n• Website creation\n\n💰 **CPF fundable** - Use your training rights\n🎓 **Certification** - Certificate upon completion\n👥 **Individual or group** - Adapted to your needs\n📍 **In-person or remote**\n\n**Rates**: From €600 excl. tax/day\n\nInterested in a specific training?",
      de: "Ja! Wir sind **Qualiopi-zertifiziert** für berufliche Schulungen:\n\n📚 **Verfügbare Schulungen**:\n• Büro-Tools (Word, Excel, PowerPoint)\n• Kollaborative Tools (Teams, Zoom, Slack)\n• KI für Profis (ChatGPT, Midjourney)\n• Cybersicherheit & Datenschutz\n• Soziale Medien für Unternehmen\n• Website-Erstellung\n\n💰 **CPF-finanzierbar** - Nutzen Sie Ihre Schulungsrechte\n🎓 **Zertifizierung** - Zertifikat nach Abschluss\n👥 **Einzeln oder Gruppe** - An Ihre Bedürfnisse angepasst\n📍 **Präsenz oder Fernunterricht**\n\n**Preise**: Ab 600€ zzgl. MwSt./Tag\n\nInteressiert an einer bestimmten Schulung?",
      tr: "Evet! Profesyonel eğitim için **Qualiopi sertifikalıyız**:\n\n📚 **Mevcut eğitimler**:\n• Ofis araçları (Word, Excel, PowerPoint)\n• İşbirliği araçları (Teams, Zoom, Slack)\n• Profesyoneller için AI (ChatGPT, Midjourney)\n• Siber güvenlik & Veri koruma\n• İşletmeler için sosyal medya\n• Web sitesi oluşturma\n\n💰 **CPF fonlanabilir** - Eğitim haklarınızı kullanın\n🎓 **Sertifika** - Tamamlandığında sertifika\n👥 **Bireysel veya grup** - İhtiyaçlarınıza uyarlanmış\n📍 **Yüz yüze veya uzaktan**\n\n**Fiyatlar**: Vergisiz 600€/gün'den başlar\n\nBelirli bir eğitimle ilgileniyor musunuz?",
    },
    category: 'services',
    suggestedActions: ['contact', 'cpf'],
  },

  // Intelligence Artificielle
  {
    id: 'service_ia',
    intent: 'service_ai',
    keywords: ['ia', 'ai', 'intelligence artificielle', 'artificial intelligence', 'chatgpt', 'automation', 'automatisation'],
    question: {
      fr: 'Proposez-vous des services en IA ?',
      en: 'Do you offer AI services?',
      de: 'Bieten Sie KI-Dienstleistungen an?',
      tr: 'Yapay zeka hizmetleri sunuyor musunuz?',
    },
    answer: {
      fr: "Oui ! Nous sommes spécialisés en IA générative et automatisation :\n\n🤖 **Services IA** :\n• Intégration ChatGPT / GPT-4 dans vos outils\n• Création de chatbots intelligents\n• Automatisation de tâches répétitives\n• Génération de contenu (texte, images)\n• Analyse de données avec IA\n• Formation IA pour vos équipes\n\n💡 **Exemples d'usage** :\n• Service client automatisé\n• Rédaction emails et documents\n• Analyse sentiment clients\n• Traduction automatique\n• Génération visuels marketing\n\n**Solution IA hors-ligne** également disponible (confidentialité totale)\n\n**Tarifs** : Sur devis selon projet\n\nUn projet IA en tête ?",
      en: "Yes! We specialize in generative AI and automation:\n\n🤖 **AI Services**:\n• ChatGPT / GPT-4 integration in your tools\n• Creation of intelligent chatbots\n• Automation of repetitive tasks\n• Content generation (text, images)\n• Data analysis with AI\n• AI training for your teams\n\n💡 **Use case examples**:\n• Automated customer service\n• Email and document writing\n• Customer sentiment analysis\n• Automatic translation\n• Marketing visual generation\n\n**Offline AI solution** also available (total confidentiality)\n\n**Rates**: Quote based on project\n\nHave an AI project in mind?",
      de: "Ja! Wir sind auf generative KI und Automatisierung spezialisiert:\n\n🤖 **KI-Dienstleistungen**:\n• ChatGPT / GPT-4 Integration in Ihre Tools\n• Erstellung intelligenter Chatbots\n• Automatisierung sich wiederholender Aufgaben\n• Inhaltsgenerierung (Text, Bilder)\n• Datenanalyse mit KI\n• KI-Schulung für Ihre Teams\n\n💡 **Anwendungsbeispiele**:\n• Automatisierter Kundenservice\n• E-Mail- und Dokumenterstellung\n• Kundenstimmungsanalyse\n• Automatische Übersetzung\n• Marketing-Visual-Generierung\n\n**Offline-KI-Lösung** auch verfügbar (totale Vertraulichkeit)\n\n**Preise**: Angebot basierend auf Projekt\n\nHaben Sie ein KI-Projekt im Kopf?",
      tr: "Evet! Üretken AI ve otomasyon konusunda uzmanız:\n\n🤖 **AI Hizmetleri**:\n• Araçlarınıza ChatGPT / GPT-4 entegrasyonu\n• Akıllı chatbot'lar oluşturma\n• Tekrarlayan görevlerin otomasyonu\n• İçerik üretimi (metin, görüntüler)\n• AI ile veri analizi\n• Ekipleriniz için AI eğitimi\n\n💡 **Kullanım örnekleri**:\n• Otomatik müşteri hizmeti\n• E-posta ve belge yazımı\n• Müşteri duygu analizi\n• Otomatik çeviri\n• Pazarlama görseli üretimi\n\n**Çevrimdışı AI çözümü** de mevcut (tam gizlilik)\n\n**Fiyatlar**: Projeye göre teklif\n\nAklınızda bir AI projesi var mı?",
    },
    category: 'services',
    suggestedActions: ['contact', 'ia_offline'],
  },

  // Cybersécurité
  {
    id: 'service_cybersecurite',
    intent: 'service_security',
    keywords: ['cybersécurité', 'cybersecurity', 'sécurité', 'security', 'protection', 'hack', 'pirate', 'rgpd', 'gdpr'],
    question: {
      fr: 'Comment protégez-vous les entreprises ?',
      en: 'How do you protect businesses?',
      de: 'Wie schützen Sie Unternehmen?',
      tr: 'İşletmeleri nasıl korursunuz?',
    },
    answer: {
      fr: "Nous proposons des solutions complètes de cybersécurité :\n\n🛡️ **Protection & Prévention** :\n• Audit de sécurité complet\n• Installation antivirus professionnel\n• Firewall et filtrage réseau\n• VPN sécurisé pour télétravail\n• Sauvegarde automatique cloud\n• Formation sensibilisation équipes\n\n📋 **Conformité RGPD** :\n• Mise en conformité données\n• Registre traitements\n• Politique confidentialité\n• DPO externe\n\n🚨 **Intervention incident** :\n• Détection intrusion\n• Récupération après attaque\n• Analyse forensique\n\n**Tarifs** : Audit à partir de 800€ HT\n\nBesoin d'un audit de sécurité ?",
      en: "We offer complete cybersecurity solutions:\n\n🛡️ **Protection & Prevention**:\n• Complete security audit\n• Professional antivirus installation\n• Firewall and network filtering\n• Secure VPN for remote work\n• Automatic cloud backup\n• Team awareness training\n\n📋 **GDPR Compliance**:\n• Data compliance\n• Processing register\n• Privacy policy\n• External DPO\n\n🚨 **Incident Response**:\n• Intrusion detection\n• Post-attack recovery\n• Forensic analysis\n\n**Rates**: Audit from €800 excl. tax\n\nNeed a security audit?",
      de: "Wir bieten komplette Cybersicherheitslösungen:\n\n🛡️ **Schutz & Prävention**:\n• Vollständiges Sicherheitsaudit\n• Installation professioneller Antivirensoftware\n• Firewall und Netzwerkfilterung\n• Sicheres VPN für Remote-Arbeit\n• Automatisches Cloud-Backup\n• Schulung zur Sensibilisierung des Teams\n\n📋 **DSGVO-Konformität**:\n• Datenkonformität\n• Verarbeitungsregister\n• Datenschutzrichtlinie\n• Externer DSB\n\n🚨 **Vorfallreaktion**:\n• Einbruchserkennung\n• Wiederherstellung nach Angriff\n• Forensische Analyse\n\n**Preise**: Audit ab 800€ zzgl. MwSt.\n\nBenötigen Sie ein Sicherheitsaudit?",
      tr: "Eksiksiz siber güvenlik çözümleri sunuyoruz:\n\n🛡️ **Koruma & Önleme**:\n• Tam güvenlik denetimi\n• Profesyonel antivirüs kurulumu\n• Güvenlik duvarı ve ağ filtreleme\n• Uzaktan çalışma için güvenli VPN\n• Otomatik bulut yedekleme\n• Ekip farkındalık eğitimi\n\n📋 **GDPR Uyumluluğu**:\n• Veri uyumluluğu\n• İşleme kaydı\n• Gizlilik politikası\n• Harici DPO\n\n🚨 **Olay Müdahalesi**:\n• İzinsiz giriş tespiti\n• Saldırı sonrası kurtarma\n• Adli analiz\n\n**Fiyatlar**: Vergisiz 800€'dan başlayan denetim\n\nBir güvenlik denetimine mi ihtiyacınız var?",
    },
    category: 'services',
    suggestedActions: ['contact', 'audit'],
  },

  // Pricing General
  {
    id: 'pricing_general',
    intent: 'pricing_inquiry',
    keywords: ['prix', 'tarif', 'price', 'pricing', 'cost', 'coût', 'combien', 'how much', 'budget'],
    question: {
      fr: 'Quels sont vos tarifs ?',
      en: 'What are your rates?',
      de: 'Was sind Ihre Preise?',
      tr: 'Fiyatlarınız nedir?',
    },
    answer: {
      fr: "Nos tarifs varient selon le service :\n\n💰 **Dépannage** :\n• Diagnostic : 30€ HT\n• Intervention : 50€ HT/heure\n• Forfait maintenance : 150€ HT/mois\n\n🎓 **Formation** :\n• Individuel : 600€ HT/jour\n• Groupe : 800€ HT/jour\n• CPF accepté\n\n🤖 **IA & Développement** :\n• Sur devis selon projet\n• À partir de 1500€ HT\n\n🛡️ **Cybersécurité** :\n• Audit : à partir de 800€ HT\n• Abonnement surveillance : 200€ HT/mois\n\n☁️ **Cloud & Réseau** :\n• Installation : à partir de 500€ HT\n• Maintenance : 100-300€ HT/mois\n\n📞 **Devis gratuit** - Contactez-nous pour un tarif personnalisé !\n\nSouhaitez-vous un devis pour un service spécifique ?",
      en: "Our rates vary by service:\n\n💰 **Repair**:\n• Diagnostic: €30 excl. tax\n• Intervention: €50 excl. tax/hour\n• Maintenance package: €150 excl. tax/month\n\n🎓 **Training**:\n• Individual: €600 excl. tax/day\n• Group: €800 excl. tax/day\n• CPF accepted\n\n🤖 **AI & Development**:\n• Quote based on project\n• From €1500 excl. tax\n\n🛡️ **Cybersecurity**:\n• Audit: from €800 excl. tax\n• Monitoring subscription: €200 excl. tax/month\n\n☁️ **Cloud & Network**:\n• Installation: from €500 excl. tax\n• Maintenance: €100-300 excl. tax/month\n\n📞 **Free quote** - Contact us for personalized pricing!\n\nWould you like a quote for a specific service?",
      de: "Unsere Preise variieren je nach Service:\n\n💰 **Reparatur**:\n• Diagnose: 30€ zzgl. MwSt.\n• Intervention: 50€ zzgl. MwSt./Stunde\n• Wartungspaket: 150€ zzgl. MwSt./Monat\n\n🎓 **Schulung**:\n• Einzeln: 600€ zzgl. MwSt./Tag\n• Gruppe: 800€ zzgl. MwSt./Tag\n• CPF akzeptiert\n\n🤖 **KI & Entwicklung**:\n• Angebot basierend auf Projekt\n• Ab 1500€ zzgl. MwSt.\n\n🛡️ **Cybersicherheit**:\n• Audit: ab 800€ zzgl. MwSt.\n• Überwachungsabonnement: 200€ zzgl. MwSt./Monat\n\n☁️ **Cloud & Netzwerk**:\n• Installation: ab 500€ zzgl. MwSt.\n• Wartung: 100-300€ zzgl. MwSt./Monat\n\n📞 **Kostenloser Kostenvoranschlag** - Kontaktieren Sie uns für personalisierte Preise!\n\nMöchten Sie einen Kostenvoranschlag für einen bestimmten Service?",
      tr: "Fiyatlarımız hizmete göre değişir:\n\n💰 **Tamir**:\n• Teşhis: Vergisiz 30€\n• Müdahale: Vergisiz 50€/saat\n• Bakım paketi: Vergisiz 150€/ay\n\n🎓 **Eğitim**:\n• Bireysel: Vergisiz 600€/gün\n• Grup: Vergisiz 800€/gün\n• CPF kabul edilir\n\n🤖 **AI & Geliştirme**:\n• Projeye göre teklif\n• Vergisiz 1500€'dan başlar\n\n🛡️ **Siber güvenlik**:\n• Denetim: Vergisiz 800€'dan başlar\n• İzleme aboneliği: Vergisiz 200€/ay\n\n☁️ **Bulut & Ağ**:\n• Kurulum: Vergisiz 500€'dan başlar\n• Bakım: Vergisiz 100-300€/ay\n\n📞 **Ücretsiz teklif** - Kişiselleştirilmiş fiyatlandırma için bize ulaşın!\n\nBelirli bir hizmet için teklif ister misiniz?",
    },
    category: 'pricing',
    suggestedActions: ['contact', 'devis'],
  },

  // Contact & Appointment
  {
    id: 'contact_appointment',
    intent: 'contact_inquiry',
    keywords: ['rendez-vous', 'appointment', 'contact', 'téléphone', 'email', 'adresse', 'horaires', 'hours', 'appeler', 'call'],
    question: {
      fr: 'Comment vous contacter ?',
      en: 'How to contact you?',
      de: 'Wie kann ich Sie kontaktieren?',
      tr: 'Size nasıl ulaşabilirim?',
    },
    answer: {
      fr: "Plusieurs moyens de nous contacter :\n\n📞 **Téléphone** : 03 67 31 02 01\n📧 **Email** : contact@netzinformatique.fr\n📍 **Adresse** : 1a Route de Schweighouse, 67500 Haguenau\n\n🕐 **Horaires** :\nLun-Sam : 09:00-12:00 / 14:00-18:00\nDimanche : Fermé\n\n⚡ **Intervention rapide** : 24-48h\n\n💬 Vous pouvez aussi :\n• Remplir le formulaire de contact sur le site\n• Continuer avec un agent (cliquez sur le bouton ci-dessous)\n• Nous rendre visite directement à Haguenau\n\nQue préférez-vous ?",
      en: "Several ways to contact us:\n\n📞 **Phone**: 03 67 31 02 01\n📧 **Email**: contact@netzinformatique.fr\n📍 **Address**: 1a Route de Schweighouse, 67500 Haguenau\n\n🕐 **Hours**:\nMon-Sat: 09:00-12:00 / 14:00-18:00\nSunday: Closed\n\n⚡ **Fast intervention**: 24-48h\n\n💬 You can also:\n• Fill out the contact form on the site\n• Continue with an agent (click the button below)\n• Visit us directly in Haguenau\n\nWhat do you prefer?",
      de: "Mehrere Möglichkeiten, uns zu kontaktieren:\n\n📞 **Telefon**: 03 67 31 02 01\n📧 **E-Mail**: contact@netzinformatique.fr\n📍 **Adresse**: 1a Route de Schweighouse, 67500 Haguenau\n\n🕐 **Öffnungszeiten**:\nMo-Sa: 09:00-12:00 / 14:00-18:00\nSonntag: Geschlossen\n\n⚡ **Schnelle Intervention**: 24-48h\n\n💬 Sie können auch:\n• Das Kontaktformular auf der Website ausfüllen\n• Mit einem Agenten fortfahren (klicken Sie auf die Schaltfläche unten)\n• Uns direkt in Haguenau besuchen\n\nWas bevorzugen Sie?",
      tr: "Bize ulaşmanın birkaç yolu:\n\n📞 **Telefon**: 03 67 31 02 01\n📧 **E-posta**: contact@netzinformatique.fr\n📍 **Adres**: 1a Route de Schweighouse, 67500 Haguenau\n\n🕐 **Çalışma saatleri**:\nPzt-Cmt: 09:00-12:00 / 14:00-18:00\nPazar: Kapalı\n\n⚡ **Hızlı müdahale**: 24-48 saat\n\n💬 Ayrıca şunları yapabilirsiniz:\n• Sitedeki iletişim formunu doldurun\n• Bir temsilciyle devam edin (aşağıdaki düğmeye tıklayın)\n• Haguenau'da bizi doğrudan ziyaret edin\n\nHangisini tercih edersiniz?",
    },
    category: 'contact',
    suggestedActions: ['call', 'form', 'live_agent'],
  },

  // Location & Hours
  {
    id: 'location_hours',
    intent: 'location_inquiry',
    keywords: ['où', 'where', 'adresse', 'address', 'location', 'haguenau', 'horaires', 'hours', 'ouvert', 'open'],
    question: {
      fr: 'Où êtes-vous situés ?',
      en: 'Where are you located?',
      de: 'Wo befinden Sie sich?',
      tr: 'Neredesiniz?',
    },
    answer: {
      fr: "Nous sommes basés à Haguenau (Alsace) :\n\n📍 **Adresse** :\nNETZ Informatique\n1a Route de Schweighouse\n67500 Haguenau, France\n\n🕐 **Horaires d'ouverture** :\n• Lundi - Samedi : 09:00 - 12:00 / 14:00 - 18:00\n• Dimanche : Fermé\n\n🚗 **Accès** :\n• Parking gratuit sur place\n• À 5 min du centre-ville de Haguenau\n• Proche de Strasbourg (30 min)\n\n🌍 **Zone d'intervention** :\nHaguenau, Strasbourg, Bas-Rhin et toute l'Alsace\n\n**Intervention à distance** également possible partout en France !\n\nSouhaitez-vous prendre rendez-vous ?",
      en: "We are based in Haguenau (Alsace):\n\n📍 **Address**:\nNETZ Informatique\n1a Route de Schweighouse\n67500 Haguenau, France\n\n🕐 **Opening hours**:\n• Monday - Saturday: 09:00 - 12:00 / 14:00 - 18:00\n• Sunday: Closed\n\n🚗 **Access**:\n• Free parking on site\n• 5 min from Haguenau city center\n• Close to Strasbourg (30 min)\n\n🌍 **Service area**:\nHaguenau, Strasbourg, Bas-Rhin and all of Alsace\n\n**Remote intervention** also possible throughout France!\n\nWould you like to make an appointment?",
      de: "Wir haben unseren Sitz in Haguenau (Elsass):\n\n📍 **Adresse**:\nNETZ Informatique\n1a Route de Schweighouse\n67500 Haguenau, Frankreich\n\n🕐 **Öffnungszeiten**:\n• Montag - Samstag: 09:00 - 12:00 / 14:00 - 18:00\n• Sonntag: Geschlossen\n\n🚗 **Zugang**:\n• Kostenlose Parkplätze vor Ort\n• 5 Min. vom Stadtzentrum Haguenau\n• Nahe Straßburg (30 Min.)\n\n🌍 **Servicebereich**:\nHaguenau, Straßburg, Bas-Rhin und ganz Elsass\n\n**Remote-Intervention** auch in ganz Frankreich möglich!\n\nMöchten Sie einen Termin vereinbaren?",
      tr: "Haguenau'da (Alsace) bulunuyoruz:\n\n📍 **Adres**:\nNETZ Informatique\n1a Route de Schweighouse\n67500 Haguenau, Fransa\n\n🕐 **Açılış saatleri**:\n• Pazartesi - Cumartesi: 09:00 - 12:00 / 14:00 - 18:00\n• Pazar: Kapalı\n\n🚗 **Erişim**:\n• Yerinde ücretsiz otopark\n• Haguenau şehir merkezine 5 dakika\n• Strasbourg'a yakın (30 dakika)\n\n🌍 **Hizmet alanı**:\nHaguenau, Strasbourg, Bas-Rhin ve tüm Alsace\n\n**Uzaktan müdahale** Fransa'nın her yerinde de mümkün!\n\nRandevu almak ister misiniz?",
    },
    category: 'contact',
    suggestedActions: ['contact', 'map'],
  },

  // Thanks & Goodbye
  {
    id: 'thanks',
    intent: 'thanks',
    keywords: ['merci', 'thank', 'thanks', 'danke', 'teşekkür'],
    question: {
      fr: 'Merci',
      en: 'Thank you',
      de: 'Danke',
      tr: 'Teşekkürler',
    },
    answer: {
      fr: "Je vous en prie ! 😊\n\nN'hésitez pas si vous avez d'autres questions.\n\nPour un accompagnement personnalisé, vous pouvez :\n• Nous appeler au 03 67 31 02 01\n• Parler avec un conseiller (bouton ci-dessous)\n• Remplir le formulaire de contact\n\nÀ bientôt chez NETZ Informatique ! 🚀",
      en: "You're welcome! 😊\n\nFeel free to reach out if you have other questions.\n\nFor personalized support, you can:\n• Call us at 03 67 31 02 01\n• Talk to an advisor (button below)\n• Fill out the contact form\n\nSee you soon at NETZ Informatique! 🚀",
      de: "Gern geschehen! 😊\n\nZögern Sie nicht, wenn Sie weitere Fragen haben.\n\nFür personalisierte Unterstützung können Sie:\n• Uns anrufen unter 03 67 31 02 01\n• Mit einem Berater sprechen (Schaltfläche unten)\n• Das Kontaktformular ausfüllen\n\nBis bald bei NETZ Informatique! 🚀",
      tr: "Rica ederim! 😊\n\nBaşka sorularınız olursa çekinmeyin.\n\nKişiselleştirilmiş destek için:\n• Bizi 03 67 31 02 01'den arayın\n• Bir danışmanla konuşun (aşağıdaki düğme)\n• İletişim formunu doldurun\n\nNETZ Informatique'te görüşmek üzere! 🚀",
    },
    category: 'general',
    suggestedActions: ['live_agent', 'contact'],
  },
]

/**
 * Intent categories for classification
 */
export const intentCategories = {
  greeting: ['greeting', 'thanks'],
  services: ['services_inquiry', 'service_repair', 'service_training', 'service_ai', 'service_security'],
  pricing: ['pricing_inquiry'],
  contact: ['contact_inquiry', 'location_inquiry'],
  general: ['general_inquiry'],
}

/**
 * Suggested actions that can be triggered
 */
export const suggestedActions = {
  services: { label: 'Voir tous les services', action: 'navigate', target: '/services' },
  pricing: { label: 'Voir les tarifs', action: 'navigate', target: '/services' },
  contact: { label: 'Nous contacter', action: 'navigate', target: '/contact' },
  call: { label: 'Appeler maintenant', action: 'external', target: 'tel:+33367310201' },
  form: { label: 'Formulaire de contact', action: 'navigate', target: '/contact' },
  live_agent: { label: 'Parler à un conseiller', action: 'tawk', target: 'open_chat' },
  depannage: { label: 'Dépannage', action: 'faq', target: 'service_depannage' },
  formation: { label: 'Formation', action: 'faq', target: 'service_formation' },
  ia: { label: 'IA', action: 'faq', target: 'service_ia' },
  cybersecurite: { label: 'Cybersécurité', action: 'faq', target: 'service_cybersecurite' },
  cpf: { label: 'En savoir plus sur CPF', action: 'navigate', target: '/formation' },
  ia_offline: { label: 'IA hors-ligne', action: 'navigate', target: '/solutions/ia-offline' },
  audit: { label: 'Audit sécurité', action: 'faq', target: 'service_cybersecurite' },
  devis: { label: 'Demander un devis', action: 'navigate', target: '/contact' },
  map: { label: 'Voir sur la carte', action: 'navigate', target: '/contact#map' },
}
