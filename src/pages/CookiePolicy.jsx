import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Cookie, Shield, Eye, Settings, Clock } from 'lucide-react'

const CookiePolicy = () => {
  const { t, i18n } = useTranslation()

  const cookieTypes = [
    {
      icon: Shield,
      title: t('cookies.necessary.title'),
      description: t('cookies.necessary.description'),
      examples: t('cookies.necessary.examples'),
      duration: '1 year',
      canDisable: false
    },
    {
      icon: Eye,
      title: t('cookies.analytics.title'),
      description: t('cookies.analytics.description'),
      examples: t('cookies.analytics.examples'),
      duration: '2 years',
      canDisable: true
    },
    {
      icon: Settings,
      title: t('cookies.functional.title'),
      description: t('cookies.functional.description'),
      examples: t('cookies.functional.examples'),
      duration: '1 year',
      canDisable: true
    },
    {
      icon: Cookie,
      title: t('cookies.marketing.title'),
      description: t('cookies.marketing.description'),
      examples: t('cookies.marketing.examples'),
      duration: '90 days',
      canDisable: true
    }
  ]

  const content = {
    fr: {
      lastUpdated: 'Dernière mise à jour : 6 Janvier 2025',
      intro: 'Cette politique des cookies explique comment NETZ Informatique utilise les cookies et technologies similaires sur notre site web.',
      whatAreCookies: {
        title: 'Qu\'est-ce qu\'un cookie ?',
        text: 'Un cookie est un petit fichier texte qu\'un site web place sur votre ordinateur, tablette ou smartphone lorsque vous visitez le site. Les cookies permettent au site de reconnaître votre appareil lors de visites ultérieures.'
      },
      howWeUse: {
        title: 'Comment nous utilisons les cookies',
        text: 'Nous utilisons les cookies pour différentes raisons détaillées ci-dessous. Malheureusement, dans la plupart des cas, il n\'existe pas d\'option standard pour désactiver les cookies sans désactiver complètement les fonctionnalités et les fonctions qu\'ils ajoutent à ce site.'
      },
      disabling: {
        title: 'Désactivation des cookies',
        text: 'Vous pouvez empêcher l\'installation de cookies en ajustant les paramètres de votre navigateur (consultez l\'aide de votre navigateur pour savoir comment procéder). Sachez que la désactivation des cookies affectera la fonctionnalité de ce site et de nombreux autres sites web que vous visitez.'
      },
      cookieList: {
        title: 'Les cookies que nous utilisons',
        description: 'Voici la liste détaillée des différents types de cookies que nous utilisons :'
      },
      thirdParty: {
        title: 'Cookies tiers',
        text: 'Dans certains cas spéciaux, nous utilisons également des cookies fournis par des tiers de confiance. La section suivante détaille les cookies tiers que vous pourriez rencontrer sur ce site.',
        list: [
          'Google Analytics : l\'un des outils d\'analyse les plus répandus et les plus fiables nous aide à comprendre comment vous utilisez le site et comment nous pouvons améliorer votre expérience.',
          'Google Tag Manager : nous aide à gérer les balises de suivi sur notre site web de manière efficace.',
          'Calendly : pour la prise de rendez-vous en ligne avec notre équipe.'
        ]
      },
      moreInfo: {
        title: 'Plus d\'informations',
        text: 'Si vous avez des questions concernant notre utilisation des cookies, vous pouvez nous contacter :'
      },
      contact: {
        email: 'Email : contact@netzinformatique.fr',
        phone: 'Téléphone : 08 99 25 01 51',
        address: 'Adresse : 1a Route de Schweighouse, 67500 Haguenau'
      }
    },
    en: {
      lastUpdated: 'Last Updated: January 6, 2025',
      intro: 'This Cookie Policy explains how NETZ Informatique uses cookies and similar technologies on our website.',
      whatAreCookies: {
        title: 'What is a cookie?',
        text: 'A cookie is a small text file that a website stores on your computer, tablet, or smartphone when you visit the site. Cookies allow the site to recognize your device on subsequent visits.'
      },
      howWeUse: {
        title: 'How we use cookies',
        text: 'We use cookies for various reasons detailed below. Unfortunately, in most cases, there are no industry-standard options for disabling cookies without completely disabling the functionality and features they add to this site.'
      },
      disabling: {
        title: 'Disabling cookies',
        text: 'You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.'
      },
      cookieList: {
        title: 'The cookies we use',
        description: 'Here is a detailed list of the different types of cookies we use:'
      },
      thirdParty: {
        title: 'Third-party cookies',
        text: 'In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.',
        list: [
          'Google Analytics: one of the most widespread and trusted analytics solutions helps us understand how you use the site and how we can improve your experience.',
          'Google Tag Manager: helps us manage tracking tags on our website efficiently.',
          'Calendly: for online appointment scheduling with our team.'
        ]
      },
      moreInfo: {
        title: 'More information',
        text: 'If you have any questions about our use of cookies, you can contact us:'
      },
      contact: {
        email: 'Email: contact@netzinformatique.fr',
        phone: 'Phone: 08 99 25 01 51',
        address: 'Address: 1a Route de Schweighouse, 67500 Haguenau'
      }
    },
    de: {
      lastUpdated: 'Letzte Aktualisierung: 6. Januar 2025',
      intro: 'Diese Cookie-Richtlinie erklärt, wie NETZ Informatique Cookies und ähnliche Technologien auf unserer Website verwendet.',
      whatAreCookies: {
        title: 'Was ist ein Cookie?',
        text: 'Ein Cookie ist eine kleine Textdatei, die eine Website auf Ihrem Computer, Tablet oder Smartphone speichert, wenn Sie die Website besuchen. Cookies ermöglichen es der Website, Ihr Gerät bei späteren Besuchen wiederzuerkennen.'
      },
      howWeUse: {
        title: 'Wie wir Cookies verwenden',
        text: 'Wir verwenden Cookies aus verschiedenen Gründen, die unten detailliert beschrieben werden. Leider gibt es in den meisten Fällen keine Branchenstandard-Optionen zum Deaktivieren von Cookies, ohne die Funktionalität und Funktionen, die sie zu dieser Website hinzufügen, vollständig zu deaktivieren.'
      },
      disabling: {
        title: 'Cookies deaktivieren',
        text: 'Sie können das Setzen von Cookies verhindern, indem Sie die Einstellungen in Ihrem Browser anpassen (siehe Browser-Hilfe). Beachten Sie, dass das Deaktivieren von Cookies die Funktionalität dieser und vieler anderer Websites beeinträchtigt, die Sie besuchen.'
      },
      cookieList: {
        title: 'Die von uns verwendeten Cookies',
        description: 'Hier ist eine detaillierte Liste der verschiedenen Arten von Cookies, die wir verwenden:'
      },
      thirdParty: {
        title: 'Drittanbieter-Cookies',
        text: 'In einigen Sonderfällen verwenden wir auch Cookies, die von vertrauenswürdigen Dritten bereitgestellt werden. Der folgende Abschnitt beschreibt, welche Drittanbieter-Cookies Ihnen auf dieser Website begegnen könnten.',
        list: [
          'Google Analytics: Eine der am weitesten verbreiteten und vertrauenswürdigsten Analyselösungen hilft uns zu verstehen, wie Sie die Website nutzen und wie wir Ihre Erfahrung verbessern können.',
          'Google Tag Manager: Hilft uns, Tracking-Tags auf unserer Website effizient zu verwalten.',
          'Calendly: Für die Online-Terminvereinbarung mit unserem Team.'
        ]
      },
      moreInfo: {
        title: 'Weitere Informationen',
        text: 'Wenn Sie Fragen zur Verwendung von Cookies haben, können Sie uns kontaktieren:'
      },
      contact: {
        email: 'E-Mail: contact@netzinformatique.fr',
        phone: 'Telefon: 08 99 25 01 51',
        address: 'Adresse: 1a Route de Schweighouse, 67500 Haguenau'
      }
    },
    tr: {
      lastUpdated: 'Son Güncelleme: 6 Ocak 2025',
      intro: 'Bu Çerez Politikası, NETZ Informatique\'in web sitemizde çerezleri ve benzer teknolojileri nasıl kullandığını açıklar.',
      whatAreCookies: {
        title: 'Çerez nedir?',
        text: 'Çerez, bir web sitesini ziyaret ettiğinizde sitenin bilgisayarınıza, tabletinize veya akıllı telefonunuza yerleştirdiği küçük bir metin dosyasıdır. Çerezler, sitenin sonraki ziyaretlerde cihazınızı tanımasını sağlar.'
      },
      howWeUse: {
        title: 'Çerezleri nasıl kullanıyoruz',
        text: 'Aşağıda ayrıntılı olarak açıklanan çeşitli nedenlerle çerezler kullanıyoruz. Ne yazık ki, çoğu durumda, bu siteye ekledikleri işlevselliği ve özellikleri tamamen devre dışı bırakmadan çerezleri devre dışı bırakmak için sektör standardı seçenekler yoktur.'
      },
      disabling: {
        title: 'Çerezleri devre dışı bırakma',
        text: 'Tarayıcınızın ayarlarını düzenleyerek çerezlerin ayarlanmasını engelleyebilirsiniz (bunun nasıl yapılacağını öğrenmek için tarayıcı Yardımı\'na bakın). Çerezleri devre dışı bırakmanın bu sitenin ve ziyaret ettiğiniz diğer birçok web sitesinin işlevselliğini etkileyeceğini unutmayın.'
      },
      cookieList: {
        title: 'Kullandığımız çerezler',
        description: 'İşte kullandığımız farklı çerez türlerinin ayrıntılı listesi:'
      },
      thirdParty: {
        title: 'Üçüncü taraf çerezleri',
        text: 'Bazı özel durumlarda, güvenilir üçüncü taraflar tarafından sağlanan çerezleri de kullanıyoruz. Aşağıdaki bölüm, bu site aracılığıyla karşılaşabileceğiniz üçüncü taraf çerezlerini detaylandırır.',
        list: [
          'Google Analytics: En yaygın ve güvenilir analiz çözümlerinden biri, siteyi nasıl kullandığınızı ve deneyiminizi nasıl geliştirebileceğimizi anlamamıza yardımcı olur.',
          'Google Tag Manager: Web sitemizdeki izleme etiketlerini verimli bir şekilde yönetmemize yardımcı olur.',
          'Calendly: Ekibimizle çevrimiçi randevu planlaması için.'
        ]
      },
      moreInfo: {
        title: 'Daha fazla bilgi',
        text: 'Çerez kullanımımızla ilgili sorularınız varsa, bize ulaşabilirsiniz:'
      },
      contact: {
        email: 'E-posta: contact@netzinformatique.fr',
        phone: 'Telefon: 08 99 25 01 51',
        address: 'Adres: 1a Route de Schweighouse, 67500 Haguenau'
      }
    }
  }

  const currentContent = content[i18n.language] || content.fr

  return (
    <>
      <Helmet>
        <title>{t('cookies.banner.cookiePolicy')} - NETZ Informatique</title>
        <meta name="description" content="Cookie Policy - Learn how NETZ Informatique uses cookies on our website" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-purple-600 text-white py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Cookie className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {t('cookies.banner.cookiePolicy')}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {currentContent.intro}
            </p>
            <p className="mt-4 text-sm text-white/70">
              {currentContent.lastUpdated}
            </p>
          </div>
        </motion.section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* What are cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.whatAreCookies.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {currentContent.whatAreCookies.text}
            </p>
          </motion.section>

          {/* How we use cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.howWeUse.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {currentContent.howWeUse.text}
            </p>
          </motion.section>

          {/* Cookie types */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {currentContent.cookieList.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {currentContent.cookieList.description}
            </p>

            <div className="grid gap-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                          {cookie.title}
                          {!cookie.canDisable && (
                            <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-normal">
                              {t('cookies.required')}
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {cookie.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Cookie className="w-4 h-4" />
                            <span><strong>{t('cookies.examples')}:</strong> {cookie.examples}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span><strong>Duration:</strong> {cookie.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Third-party cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.thirdParty.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {currentContent.thirdParty.text}
            </p>
            <ul className="space-y-3">
              {currentContent.thirdParty.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Disabling cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.disabling.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {currentContent.disabling.text}
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.moreInfo.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {currentContent.moreInfo.text}
            </p>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p>{currentContent.contact.email}</p>
              <p>{currentContent.contact.phone}</p>
              <p>{currentContent.contact.address}</p>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}

export default CookiePolicy
