/**
 * Blog Posts Database
 * Centralized blog content storage
 *
 * Each post includes:
 * - id: Unique identifier
 * - slug: URL-friendly identifier
 * - title: Post title (multilingual)
 * - excerpt: Short description (multilingual)
 * - content: Full HTML content (multilingual)
 * - author: Author information
 * - category: Primary category
 * - tags: Array of tags
 * - coverImage: Featured image URL
 * - publishedAt: ISO date string
 * - readingTime: Estimated reading time in minutes
 * - featured: Boolean for homepage featuring
 */

export const blogPosts = [
  {
    id: 1,
    slug: 'intelligence-artificielle-transforme-entreprises-2025',
    title: {
      fr: "Comment l'Intelligence Artificielle Transforme les Entreprises en 2025",
      en: "How Artificial Intelligence is Transforming Businesses in 2025",
      de: "Wie Künstliche Intelligenz Unternehmen im Jahr 2025 Verändert",
      tr: "Yapay Zeka 2025'te İşletmeleri Nasıl Dönüştürüyor"
    },
    excerpt: {
      fr: "Découvrez les dernières tendances de l'IA et comment elles révolutionnent le monde professionnel. De l'automatisation à l'analyse prédictive, l'IA est partout.",
      en: "Discover the latest AI trends and how they're revolutionizing the professional world. From automation to predictive analytics, AI is everywhere.",
      de: "Entdecken Sie die neuesten KI-Trends und wie sie die Geschäftswelt revolutionieren. Von Automatisierung bis zu prädiktiver Analytik ist KI überall.",
      tr: "En son yapay zeka trendlerini ve profesyonel dünyayı nasıl devrim yaptığını keşfedin. Otomasyondan tahmine dayalı analize kadar yapay zeka her yerde."
    },
    content: {
      fr: `
        <h2>L'IA au Cœur de la Transformation Digitale</h2>
        <p>L'intelligence artificielle n'est plus une technologie futuriste réservée aux géants de la tech. En 2025, elle devient accessible aux PME et transforme profondément nos méthodes de travail.</p>

        <h3>Les Principaux Domaines d'Application</h3>
        <ul>
          <li><strong>Service Client Automatisé</strong> : Les chatbots IA offrent un support 24/7 avec une compréhension contextuelle avancée.</li>
          <li><strong>Analyse Prédictive</strong> : Anticipez les tendances du marché et optimisez vos décisions business.</li>
          <li><strong>Automatisation des Tâches</strong> : Gagnez jusqu'à 40% de productivité sur les tâches répétitives.</li>
          <li><strong>Personnalisation Client</strong> : Offrez une expérience unique à chaque client grâce à l'IA.</li>
        </ul>

        <h3>NETZ Informatique et l'IA Offline</h3>
        <p>Chez NETZ Informatique, nous proposons des solutions d'IA offline qui garantissent la confidentialité de vos données. Contrairement aux services cloud, vos informations restent sur vos serveurs.</p>

        <blockquote>
          <p>"L'IA offline nous a permis d'automatiser nos processus tout en gardant le contrôle total de nos données sensibles."</p>
          <footer>— Client NETZ Informatique, Industrie Pharmaceutique</footer>
        </blockquote>

        <h3>Comment Démarrer avec l'IA ?</h3>
        <ol>
          <li><strong>Audit de vos besoins</strong> : Identifiez les processus automatisables.</li>
          <li><strong>Choix de la solution</strong> : IA cloud vs offline selon vos contraintes.</li>
          <li><strong>Formation de vos équipes</strong> : L'humain reste au centre de l'IA.</li>
          <li><strong>Déploiement progressif</strong> : Commencez petit, scalez ensuite.</li>
        </ol>

        <h3>Les Défis de l'IA en Entreprise</h3>
        <p>Malgré ses avantages, l'IA présente des défis :</p>
        <ul>
          <li>Coût initial d'investissement</li>
          <li>Besoin de données de qualité</li>
          <li>Questions éthiques et de confidentialité</li>
          <li>Résistance au changement des équipes</li>
        </ul>

        <h3>Conclusion</h3>
        <p>L'IA est un outil puissant qui, bien utilisé, peut donner à votre entreprise un avantage compétitif majeur. Contactez NETZ Informatique pour un audit gratuit de vos besoins en IA.</p>
      `,
      en: `
        <h2>AI at the Heart of Digital Transformation</h2>
        <p>Artificial intelligence is no longer a futuristic technology reserved for tech giants. In 2025, it becomes accessible to SMEs and profoundly transforms our working methods.</p>

        <h3>Main Application Areas</h3>
        <ul>
          <li><strong>Automated Customer Service</strong>: AI chatbots offer 24/7 support with advanced contextual understanding.</li>
          <li><strong>Predictive Analytics</strong>: Anticipate market trends and optimize your business decisions.</li>
          <li><strong>Task Automation</strong>: Gain up to 40% productivity on repetitive tasks.</li>
          <li><strong>Customer Personalization</strong>: Offer a unique experience to each customer thanks to AI.</li>
        </ul>

        <h3>NETZ Informatique and Offline AI</h3>
        <p>At NETZ Informatique, we offer offline AI solutions that guarantee the confidentiality of your data. Unlike cloud services, your information remains on your servers.</p>

        <blockquote>
          <p>"Offline AI allowed us to automate our processes while keeping total control of our sensitive data."</p>
          <footer>— NETZ Informatique Client, Pharmaceutical Industry</footer>
        </blockquote>

        <h3>How to Get Started with AI?</h3>
        <ol>
          <li><strong>Audit your needs</strong>: Identify automatable processes.</li>
          <li><strong>Choose the solution</strong>: Cloud vs offline AI according to your constraints.</li>
          <li><strong>Train your teams</strong>: Humans remain at the center of AI.</li>
          <li><strong>Progressive deployment</strong>: Start small, scale later.</li>
        </ol>

        <h3>Challenges of AI in Business</h3>
        <p>Despite its advantages, AI presents challenges:</p>
        <ul>
          <li>Initial investment cost</li>
          <li>Need for quality data</li>
          <li>Ethical and privacy questions</li>
          <li>Team resistance to change</li>
        </ul>

        <h3>Conclusion</h3>
        <p>AI is a powerful tool that, when used well, can give your business a major competitive advantage. Contact NETZ Informatique for a free audit of your AI needs.</p>
      `,
      de: `
        <h2>KI im Zentrum der Digitalen Transformation</h2>
        <p>Künstliche Intelligenz ist keine futuristische Technologie mehr, die Tech-Giganten vorbehalten ist. Im Jahr 2025 wird sie für KMU zugänglich und verändert unsere Arbeitsmethoden tiefgreifend.</p>
      `,
      tr: `
        <h2>Dijital Dönüşümün Merkezinde Yapay Zeka</h2>
        <p>Yapay zeka artık teknoloji devlerine özgü fütüristik bir teknoloji değil. 2025'te KOBİ'ler için erişilebilir hale geliyor ve çalışma yöntemlerimizi derinden dönüştürüyor.</p>
      `
    },
    author: {
      name: "Thomas Weber",
      role: "Expert IA & Data Science",
      avatar: "/images/team/thomas-weber.jpg"
    },
    category: "Intelligence Artificielle",
    tags: ["IA", "Transformation Digitale", "Automatisation", "Machine Learning", "PME"],
    coverImage: "/images/blog/ai-transformation-2025.jpg",
    publishedAt: "2025-01-05T10:00:00Z",
    updatedAt: "2025-01-05T10:00:00Z",
    readingTime: 8,
    featured: true,
    views: 1247,
    likes: 89
  },

  {
    id: 2,
    slug: 'cybersecurite-proteger-entreprise-2025',
    title: {
      fr: "Cybersécurité : 10 Mesures Essentielles pour Protéger Votre Entreprise",
      en: "Cybersecurity: 10 Essential Measures to Protect Your Business",
      de: "Cybersicherheit: 10 Wesentliche Maßnahmen zum Schutz Ihres Unternehmens",
      tr: "Siber Güvenlik: İşletmenizi Korumak İçin 10 Temel Önlem"
    },
    excerpt: {
      fr: "Les cyberattaques explosent en 2025. Découvrez comment protéger efficacement votre entreprise avec ces 10 mesures de sécurité indispensables.",
      en: "Cyberattacks are exploding in 2025. Discover how to effectively protect your business with these 10 essential security measures.",
      de: "Cyberangriffe explodieren 2025. Entdecken Sie, wie Sie Ihr Unternehmen mit diesen 10 wesentlichen Sicherheitsmaßnahmen effektiv schützen.",
      tr: "Siber saldırılar 2025'te patlama yaşıyor. Bu 10 temel güvenlik önlemiyle işletmenizi etkili bir şekilde nasıl koruyacağınızı keşfedin."
    },
    content: {
      fr: `
        <h2>La Cybersécurité : Un Enjeu Majeur en 2025</h2>
        <p>Avec l'augmentation des cyberattaques (+67% en 2024), la sécurité informatique est devenue une priorité absolue pour toutes les entreprises, quelle que soit leur taille.</p>

        <h3>Les 10 Mesures Essentielles</h3>

        <h4>1. Authentification Multi-Facteurs (MFA)</h4>
        <p>Activez le MFA sur tous vos comptes professionnels. Cette simple mesure bloque 99,9% des attaques par compromission de compte.</p>

        <h4>2. Mises à Jour Régulières</h4>
        <p>Gardez tous vos systèmes et logiciels à jour. 60% des attaques exploitent des vulnérabilités connues.</p>

        <h4>3. Sauvegardes Automatisées</h4>
        <p>Règle du 3-2-1 : 3 copies, 2 supports différents, 1 hors site. Testez régulièrement vos restaurations.</p>

        <h4>4. Formation des Employés</h4>
        <p>80% des incidents de sécurité impliquent une erreur humaine. Formez vos équipes aux bonnes pratiques.</p>

        <h4>5. Pare-feu de Nouvelle Génération</h4>
        <p>Investissez dans un pare-feu moderne avec détection d'intrusion et filtrage applicatif.</p>

        <h4>6. Chiffrement des Données</h4>
        <p>Chiffrez vos données sensibles au repos et en transit. C'est obligatoire pour la conformité RGPD.</p>

        <h4>7. Gestion des Accès</h4>
        <p>Principe du moindre privilège : chaque utilisateur n'a que les accès nécessaires à son travail.</p>

        <h4>8. Surveillance et Détection</h4>
        <p>Mettez en place un système de monitoring 24/7 pour détecter les comportements anormaux.</p>

        <h4>9. Plan de Réponse aux Incidents</h4>
        <p>Préparez un plan détaillé : qui contacter, quelles actions prendre, comment communiquer.</p>

        <h4>10. Audits de Sécurité Réguliers</h4>
        <p>Faites auditer votre sécurité au moins une fois par an par un expert externe.</p>

        <h3>NETZ Informatique : Votre Partenaire Cybersécurité</h3>
        <p>Nous proposons des audits de sécurité complets et des solutions de protection adaptées à votre budget. Contactez-nous pour un diagnostic gratuit.</p>

        <div class="alert alert-warning">
          <strong>⚠️ Attention :</strong> Une cyberattaque peut coûter en moyenne 50 000€ à une PME. La prévention est toujours moins chère que la réparation.
        </div>
      `,
      en: `
        <h2>Cybersecurity: A Major Challenge in 2025</h2>
        <p>With the increase in cyberattacks (+67% in 2024), IT security has become an absolute priority for all businesses, regardless of their size.</p>
      `,
      de: `
        <h2>Cybersicherheit: Eine Große Herausforderung im Jahr 2025</h2>
        <p>Mit der Zunahme von Cyberangriffen (+67% im Jahr 2024) ist die IT-Sicherheit für alle Unternehmen zur absoluten Priorität geworden.</p>
      `,
      tr: `
        <h2>Siber Güvenlik: 2025'te Büyük Bir Meydan Okuma</h2>
        <p>Siber saldırılardaki artışla (+2024'te %67), BT güvenliği büyüklüklerinden bağımsız olarak tüm işletmeler için mutlak bir öncelik haline geldi.</p>
      `
    },
    author: {
      name: "Marie Dubois",
      role: "Experte en Cybersécurité",
      avatar: "/images/team/marie-dubois.jpg"
    },
    category: "Cybersécurité",
    tags: ["Sécurité", "Cyberattaque", "Protection", "RGPD", "Pare-feu"],
    coverImage: "/images/blog/cybersecurity-2025.jpg",
    publishedAt: "2025-01-03T14:30:00Z",
    updatedAt: "2025-01-03T14:30:00Z",
    readingTime: 10,
    featured: true,
    views: 892,
    likes: 67
  },

  {
    id: 3,
    slug: 'cloud-computing-guide-complet-pme',
    title: {
      fr: "Cloud Computing : Guide Complet pour les PME",
      en: "Cloud Computing: Complete Guide for SMEs",
      de: "Cloud Computing: Vollständiger Leitfaden für KMU",
      tr: "Bulut Bilişim: KOBİ'ler İçin Eksiksiz Kılavuz"
    },
    excerpt: {
      fr: "Du choix du fournisseur à la migration de vos données, découvrez tout ce qu'une PME doit savoir sur le cloud computing en 2025.",
      en: "From choosing a provider to migrating your data, discover everything an SME needs to know about cloud computing in 2025.",
      de: "Von der Auswahl eines Anbieters bis zur Migration Ihrer Daten - entdecken Sie alles, was ein KMU über Cloud Computing im Jahr 2025 wissen muss.",
      tr: "Sağlayıcı seçiminden verilerinizi taşımaya kadar, bir KOBİ'nin 2025'te bulut bilişim hakkında bilmesi gereken her şeyi keşfedin."
    },
    content: {
      fr: `
        <h2>Le Cloud : Une Révolution pour les PME</h2>
        <p>Le cloud computing n'est plus réservé aux grandes entreprises. Découvrez comment il peut transformer votre PME.</p>

        <h3>Les Avantages du Cloud</h3>
        <ul>
          <li>Réduction des coûts IT jusqu'à 40%</li>
          <li>Scalabilité instantanée</li>
          <li>Travail collaboratif facilité</li>
          <li>Sécurité renforcée</li>
          <li>Accès depuis n'importe où</li>
        </ul>

        <h3>IaaS vs PaaS vs SaaS</h3>
        <p><strong>IaaS (Infrastructure as a Service)</strong> : Vous gérez tout sauf le matériel physique.</p>
        <p><strong>PaaS (Platform as a Service)</strong> : Idéal pour les développeurs, infrastructure automatisée.</p>
        <p><strong>SaaS (Software as a Service)</strong> : Applications prêtes à l'emploi (Microsoft 365, Google Workspace).</p>

        <h3>Migration vers le Cloud : 5 Étapes</h3>
        <ol>
          <li><strong>Audit de l'existant</strong> : Quelles applications migrer en priorité ?</li>
          <li><strong>Choix du fournisseur</strong> : AWS, Azure, Google Cloud ou OVH ?</li>
          <li><strong>Plan de migration</strong> : Big bang ou progressif ?</li>
          <li><strong>Formation des équipes</strong> : Accompagnez le changement</li>
          <li><strong>Optimisation continue</strong> : Surveillez les coûts et les performances</li>
        </ol>

        <h3>NETZ Cloud : Notre Solution Hybride</h3>
        <p>Chez NETZ Informatique, nous proposons des solutions cloud hybrides : le meilleur du cloud public et privé, adapté à vos besoins spécifiques.</p>

        <h3>Questions Fréquentes</h3>
        <p><strong>Q: Le cloud est-il sécurisé ?</strong><br>
        R: Oui, souvent plus que vos serveurs on-premise. Les fournisseurs investissent massivement dans la sécurité.</p>

        <p><strong>Q: Combien coûte le cloud ?</strong><br>
        R: Tout dépend de vos besoins. Comptez 50-500€/mois pour une PME de 10-50 employés.</p>

        <p><strong>Q: Puis-je récupérer mes données ?</strong><br>
        R: Oui, vous gardez toujours la propriété de vos données. Évitez le vendor lock-in.</p>
      `,
      en: `
        <h2>The Cloud: A Revolution for SMEs</h2>
        <p>Cloud computing is no longer reserved for large companies. Discover how it can transform your SME.</p>
      `,
      de: `
        <h2>Die Cloud: Eine Revolution für KMU</h2>
        <p>Cloud Computing ist nicht mehr großen Unternehmen vorbehalten. Entdecken Sie, wie es Ihr KMU transformieren kann.</p>
      `,
      tr: `
        <h2>Bulut: KOBİ'ler İçin Bir Devrim</h2>
        <p>Bulut bilişim artık büyük şirketlere özgü değil. KOBİ'nizi nasıl dönüştürebileceğini keşfedin.</p>
      `
    },
    author: {
      name: "Thomas Weber",
      role: "Expert Cloud & Infrastructure",
      avatar: "/images/team/thomas-weber.jpg"
    },
    category: "Cloud",
    tags: ["Cloud", "IaaS", "PaaS", "SaaS", "Migration", "PME"],
    coverImage: "/images/blog/cloud-computing-guide.jpg",
    publishedAt: "2025-01-01T09:00:00Z",
    updatedAt: "2025-01-01T09:00:00Z",
    readingTime: 12,
    featured: false,
    views: 654,
    likes: 45
  },

  {
    id: 4,
    slug: 'formation-professionnelle-certifications-it-2025',
    title: {
      fr: "Formation Professionnelle : Top 10 des Certifications IT en 2025",
      en: "Professional Training: Top 10 IT Certifications in 2025",
      de: "Berufliche Weiterbildung: Top 10 IT-Zertifizierungen im Jahr 2025",
      tr: "Mesleki Eğitim: 2025'te En İyi 10 BT Sertifikası"
    },
    excerpt: {
      fr: "Boostez votre carrière avec ces certifications IT les plus demandées. Éligibles CPF et financement OPCO.",
      en: "Boost your career with these most demanded IT certifications. CPF eligible and OPCO funding.",
      de: "Steigern Sie Ihre Karriere mit diesen gefragtesten IT-Zertifizierungen. CPF-berechtigt und OPCO-Finanzierung.",
      tr: "En çok talep gören bu BT sertifikalarıyla kariyerinizi artırın. CPF uygun ve OPCO finansmanı."
    },
    content: {
      fr: `
        <h2>Les Certifications IT les Plus Recherchées</h2>
        <p>En 2025, certaines certifications IT se démarquent par leur valeur sur le marché du travail.</p>

        <h3>Top 10 des Certifications</h3>

        <h4>1. AWS Certified Solutions Architect</h4>
        <p><strong>Salaire moyen :</strong> 55 000€ - 80 000€<br>
        <strong>Durée :</strong> 40-60h de formation<br>
        <strong>Difficulté :</strong> Intermédiaire</p>

        <h4>2. Certified Information Systems Security Professional (CISSP)</h4>
        <p><strong>Salaire moyen :</strong> 60 000€ - 90 000€<br>
        <strong>Durée :</strong> 80-120h de formation<br>
        <strong>Difficulté :</strong> Avancé</p>

        <h4>3. Microsoft Azure Administrator</h4>
        <p><strong>Salaire moyen :</strong> 50 000€ - 75 000€<br>
        <strong>Durée :</strong> 40-50h de formation<br>
        <strong>Difficulté :</strong> Intermédiaire</p>

        <h4>4. Google Cloud Professional</h4>
        <p><strong>Salaire moyen :</strong> 55 000€ - 80 000€<br>
        <strong>Durée :</strong> 50-70h de formation<br>
        <strong>Difficulté :</strong> Intermédiaire</p>

        <h4>5. Certified Ethical Hacker (CEH)</h4>
        <p><strong>Salaire moyen :</strong> 45 000€ - 70 000€<br>
        <strong>Durée :</strong> 40h de formation<br>
        <strong>Difficulté :</strong> Intermédiaire</p>

        <h3>Financement de Votre Formation</h3>

        <p><strong>CPF (Compte Personnel de Formation)</strong><br>
        Utilisez vos droits CPF accumulés. Montant moyen disponible : 1 500€ - 8 000€</p>

        <p><strong>OPCO (Opérateur de Compétences)</strong><br>
        Votre entreprise peut financer jusqu'à 100% de la formation via son OPCO.</p>

        <p><strong>Pôle Emploi</strong><br>
        AIF (Aide Individuelle à la Formation) pour les demandeurs d'emploi.</p>

        <h3>Formations NETZ Informatique</h3>
        <p>NETZ Informatique est certifié QUALIOPI. Nous proposons toutes ces formations en présentiel ou à distance :</p>
        <ul>
          <li>Cours intensifs ou étalement sur plusieurs mois</li>
          <li>Formateurs experts certifiés</li>
          <li>Ateliers pratiques sur projets réels</li>
          <li>Suivi personnalisé jusqu'à la certification</li>
        </ul>

        <p><a href="/formation" class="btn-primary">Découvrir nos formations</a></p>
      `,
      en: `
        <h2>The Most Sought-After IT Certifications</h2>
        <p>In 2025, certain IT certifications stand out for their value in the job market.</p>
      `,
      de: `
        <h2>Die Gefragtesten IT-Zertifizierungen</h2>
        <p>Im Jahr 2025 zeichnen sich bestimmte IT-Zertifizierungen durch ihren Wert auf dem Arbeitsmarkt aus.</p>
      `,
      tr: `
        <h2>En Çok Aranan BT Sertifikaları</h2>
        <p>2025'te, belirli BT sertifikaları iş piyasasındaki değerleriyle öne çıkıyor.</p>
      `
    },
    author: {
      name: "Sophie Martin",
      role: "Responsable Formation",
      avatar: "/images/team/sophie-martin.jpg"
    },
    category: "Formation",
    tags: ["Formation", "Certification", "CPF", "OPCO", "Carrière", "IT"],
    coverImage: "/images/blog/certifications-it-2025.jpg",
    publishedAt: "2024-12-28T11:00:00Z",
    updatedAt: "2024-12-28T11:00:00Z",
    readingTime: 9,
    featured: false,
    views: 521,
    likes: 38
  },

  {
    id: 5,
    slug: 'web-development-tendances-2025',
    title: {
      fr: "Développement Web : Les 7 Tendances Incontournables de 2025",
      en: "Web Development: The 7 Must-Know Trends of 2025",
      de: "Webentwicklung: Die 7 Unverzichtbaren Trends von 2025",
      tr: "Web Geliştirme: 2025'in 7 Kaçınılmaz Trendi"
    },
    excerpt: {
      fr: "React, Vue, ou Svelte ? SSR ou SSG ? Découvrez les technologies web qui domineront 2025 et comment les intégrer dans vos projets.",
      en: "React, Vue, or Svelte? SSR or SSG? Discover the web technologies that will dominate 2025 and how to integrate them into your projects.",
      de: "React, Vue oder Svelte? SSR oder SSG? Entdecken Sie die Webtechnologien, die 2025 dominieren werden, und wie Sie sie in Ihre Projekte integrieren.",
      tr: "React, Vue veya Svelte? SSR veya SSG? 2025'e hakim olacak web teknolojilerini ve bunları projelerinize nasıl entegre edeceğinizi keşfedin."
    },
    content: {
      fr: `
        <h2>L'Écosystème Web en Constante Évolution</h2>
        <p>Le développement web évolue plus vite que jamais. Voici les 7 tendances majeures de 2025.</p>

        <h3>1. Frameworks JavaScript Modernes</h3>
        <p><strong>React 19</strong> : Server Components révolutionnent l'architecture.<br>
        <strong>Vue 3.5</strong> : Performance optimale avec Composition API.<br>
        <strong>Svelte 5</strong> : Runes = nouvelle ère de réactivité.</p>

        <h3>2. Edge Computing & Serverless</h3>
        <p>Cloudflare Workers, Vercel Edge Functions : déployez au plus près des utilisateurs pour des performances ultra-rapides.</p>

        <h3>3. TypeScript Partout</h3>
        <p>TypeScript n'est plus optionnel. 80% des projets web l'utilisent désormais.</p>

        <h3>4. WebAssembly (Wasm)</h3>
        <p>Performances natives dans le navigateur. Cas d'usage : jeux, traitement d'image, IA offline.</p>

        <h3>5. Progressive Web Apps (PWA)</h3>
        <p>Offline-first, installation sans app store, notifications push. Les PWA deviennent incontournables.</p>

        <h3>6. AI-Assisted Development</h3>
        <p>GitHub Copilot, Cursor, v0.dev : l'IA booste la productivité des développeurs de 40%.</p>

        <h3>7. Headless CMS & Jamstack</h3>
        <p>Sanity, Strapi, Contentful : séparez le contenu de la présentation pour plus de flexibilité.</p>

        <h3>Stack Recommandée NETZ 2025</h3>
        <pre><code>
Frontend: React 19 + TypeScript + TailwindCSS
Backend: Node.js + Express + Prisma
Database: PostgreSQL (Supabase) ou MongoDB
Hosting: Vercel / Netlify / Cloudflare Pages
CMS: Sanity ou Strapi
        </code></pre>

        <h3>Services NETZ Web Development</h3>
        <p>Notre équipe maîtrise toutes ces technologies. Nous créons des applications web modernes, performantes et scalables.</p>
        <p><a href="/solutions/web" class="btn-primary">Découvrir nos services</a></p>
      `,
      en: `
        <h2>The Ever-Evolving Web Ecosystem</h2>
        <p>Web development is evolving faster than ever. Here are the 7 major trends of 2025.</p>
      `,
      de: `
        <h2>Das Sich Ständig Weiterentwickelnde Web-Ökosystem</h2>
        <p>Die Webentwicklung entwickelt sich schneller denn je. Hier sind die 7 wichtigsten Trends von 2025.</p>
      `,
      tr: `
        <h2>Sürekli Gelişen Web Ekosistemi</h2>
        <p>Web geliştirme her zamankinden daha hızlı gelişiyor. İşte 2025'in 7 büyük trendi.</p>
      `
    },
    author: {
      name: "Thomas Weber",
      role: "Lead Developer",
      avatar: "/images/team/thomas-weber.jpg"
    },
    category: "Développement Web",
    tags: ["Web", "React", "JavaScript", "TypeScript", "PWA", "Jamstack"],
    coverImage: "/images/blog/web-dev-trends-2025.jpg",
    publishedAt: "2024-12-25T16:00:00Z",
    updatedAt: "2024-12-25T16:00:00Z",
    readingTime: 11,
    featured: false,
    views: 789,
    likes: 62
  }
]

/**
 * Get all blog categories
 */
export function getAllCategories() {
  const categories = [...new Set(blogPosts.map(post => post.category))]
  return categories.sort()
}

/**
 * Get all blog tags
 */
export function getAllTags() {
  const tags = new Set()
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category)
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag) {
  return blogPosts.filter(post => post.tags.includes(tag))
}

/**
 * Get post by slug
 */
export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug)
}

/**
 * Get post by ID
 */
export function getPostById(id) {
  return blogPosts.find(post => post.id === id)
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(limit = 3) {
  return blogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit)
}

/**
 * Get recent posts
 */
export function getRecentPosts(limit = 5) {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit)
}

/**
 * Get popular posts
 */
export function getPopularPosts(limit = 5) {
  return blogPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

/**
 * Search posts
 */
export function searchPosts(query, locale = 'fr') {
  const lowerQuery = query.toLowerCase()
  return blogPosts.filter(post => {
    const title = post.title[locale] || post.title.fr
    const excerpt = post.excerpt[locale] || post.excerpt.fr
    const content = post.content[locale] || post.content.fr

    return (
      title.toLowerCase().includes(lowerQuery) ||
      excerpt.toLowerCase().includes(lowerQuery) ||
      content.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      post.category.toLowerCase().includes(lowerQuery)
    )
  })
}

export default blogPosts
