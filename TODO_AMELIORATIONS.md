# TODO - Améliorations du Projet NETZ Informatique

## 🔴 Priorité HAUTE (À faire immédiatement)

### 1. Corriger les Incohérences de Contenu

**Problème** : Le site affiche des informations contradictoires qui nuisent à la crédibilité.

- [ ] **Clarifier l'expérience** : Choisir entre "Depuis 2016" ou "20+ ans d'expérience" et mettre à jour tous les textes en conséquence
  - Fichiers à vérifier : `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/components/home/WhyChooseUsSection.jsx`
  - Si l'entreprise existe depuis 2016, remplacer "20+ ans" par "8+ ans"
  - Si l'entreprise existe depuis plus de 20 ans, remplacer "Depuis 2016" par l'année réelle de création

- [ ] **Varier les dates de publication des articles de blog**
  - Actuellement, plusieurs articles ont la même date (4 oct. 2025)
  - Fichiers à modifier : `src/data/blogPosts.js` ou équivalent
  - Répartir les dates de publication sur plusieurs semaines/mois

### 2. Mettre à Jour les Dépendances

**Problème** : De nombreuses dépendances sont obsolètes, ce qui peut créer des failles de sécurité.

- [ ] **Mettre à jour tous les paquets Radix UI**
  ```bash
  pnpm update @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle
  ```

- [ ] **Tester après la mise à jour**
  - Lancer les tests : `pnpm test`
  - Tester manuellement toutes les pages principales
  - Vérifier que les composants UI fonctionnent correctement

- [ ] **Vérifier les vulnérabilités de sécurité**
  ```bash
  pnpm audit
  ```

### 3. Optimiser les Images

**Problème** : Les images de blog sont trop lourdes (150-200KB chacune), ce qui ralentit le chargement.

- [ ] **Compresser toutes les images du dossier `public/images/blog/`**
  - Utiliser TinyPNG, ImageOptim ou un script d'optimisation
  - Objectif : réduire la taille de chaque image de 50-70%

- [ ] **Convertir les images en WebP**
  - Format moderne, meilleur taux de compression
  - Garder les JPG comme fallback pour les anciens navigateurs

- [ ] **Implémenter le lazy loading**
  - Utiliser le composant `LazyImage` déjà présent dans `src/components/common/LazyImage.jsx`
  - Vérifier que toutes les images utilisent ce composant

---

## 🟡 Priorité MOYENNE (Améliorations recommandées)

### 4. Augmenter la Couverture de Test

**Problème** : Seulement 7 fichiers de test pour 119 fichiers JSX.

- [ ] **Ajouter des tests pour les composants critiques**
  - Formulaire de contact (`src/pages/Contact.jsx`)
  - Formulaire de newsletter
  - Navigation (`src/components/Header.jsx`)
  - Composants de services

- [ ] **Atteindre une couverture de 80%**
  ```bash
  pnpm test:coverage
  ```

### 5. Mettre à Jour la Documentation

**Problème** : Le `.env.example` mentionne SendGrid alors que le projet utilise Resend.

- [ ] **Mettre à jour `.env.example`**
  ```env
  # Resend Configuration (Email Service)
  RESEND_API_KEY=your_resend_api_key_here
  RESEND_FROM_EMAIL=onboarding@resend.dev
  RESEND_TO_EMAIL=contact@netzinformatique.fr
  
  # Calendly Configuration
  VITE_CALENDLY_USERNAME=mikail-netzinformatique
  
  # Google Analytics & Tag Manager
  VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
  VITE_GTM_ID=GTM-XXXXXXX
  
  # Sentry Error Tracking
  VITE_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
  VITE_APP_VERSION=1.0.0
  
  # Tawk.to Live Chat (optional)
  VITE_TAWK_PROPERTY_ID=your_tawk_property_id
  VITE_TAWK_WIDGET_ID=your_tawk_widget_id
  ```

- [ ] **Mettre à jour le README.md**
  - Corriger la section "Démo en Direct" (le site est déjà sur netzinformatique.fr)
  - Ajouter une section sur Resend
  - Mettre à jour les badges de version

### 6. Implémenter le Mode Sombre

**Problème** : Le mode sombre est annoncé dans le README mais non implémenté.

- [ ] **Activer le mode sombre**
  - Le composant `ThemeToggle` existe déjà dans `src/components/common/ThemeToggle.jsx`
  - Vérifier que tous les composants supportent le mode sombre
  - Tester la persistance du choix de l'utilisateur

### 7. Vérifier le Domaine Resend

**Problème** : Le site utilise `onboarding@resend.dev` au lieu d'une adresse professionnelle.

- [ ] **Vérifier le domaine netzinformatique.fr dans Resend**
  1. Se connecter sur https://resend.com
  2. Aller dans **Domains** > **Add Domain**
  3. Ajouter `netzinformatique.fr`
  4. Configurer les enregistrements DNS (SPF, DKIM, DMARC)
  5. Vérifier le domaine

- [ ] **Mettre à jour les variables d'environnement Vercel**
  ```bash
  RESEND_FROM_EMAIL=contact@netzinformatique.fr
  ```

---

## 🟢 Priorité BASSE (Bonnes pratiques)

### 8. Activer les Source Maps en Production

- [ ] **Modifier `vite.config.js`**
  ```javascript
  sourcemap: 'hidden' // Au lieu de false
  ```
  - Permet le débogage sans exposer le code source publiquement

### 9. Audit d'Accessibilité Complet

- [ ] **Installer Axe DevTools**
  - Extension Chrome/Firefox pour tester l'accessibilité

- [ ] **Tester la navigation au clavier**
  - Vérifier que toutes les fonctionnalités sont accessibles sans souris
  - Vérifier l'ordre de tabulation

- [ ] **Tester avec un lecteur d'écran**
  - NVDA (Windows) ou VoiceOver (Mac)

### 10. Optimisations Avancées

- [ ] **Implémenter un Service Worker**
  - Le fichier `public/sw.js` existe déjà
  - Vérifier qu'il est correctement enregistré
  - Tester le mode offline

- [ ] **Ajouter un système de cache**
  - Cache des images
  - Cache des réponses API

- [ ] **Réduire le nombre de dépendances**
  - Analyser les dépendances non utilisées
  - Utiliser `pnpm prune` pour nettoyer

---

## 📊 Métriques de Succès

| Métrique | Actuel | Objectif |
| :--- | :--- | :--- |
| Couverture de test | ~60% | 80%+ |
| Taille des images | 150-200KB | 50-80KB |
| Dépendances obsolètes | ~30 | 0 |
| Score Lighthouse Performance | Non mesuré | 95+ |
| Score Lighthouse Accessibilité | Non mesuré | 100 |
| Score Lighthouse SEO | Non mesuré | 100 |

---

## 🎯 Prochaines Étapes Recommandées

1. **Semaine 1** : Corriger les incohérences de contenu + Mettre à jour les dépendances
2. **Semaine 2** : Optimiser les images + Augmenter la couverture de test
3. **Semaine 3** : Implémenter le mode sombre + Vérifier le domaine Resend
4. **Semaine 4** : Audit d'accessibilité + Optimisations avancées

---

**Date de création** : 6 novembre 2025  
**Dernière mise à jour** : 6 novembre 2025  
**Créé par** : Manus AI
