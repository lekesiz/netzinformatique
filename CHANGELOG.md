# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-06

### ✨ Ajouté
- Versions WebP de toutes les images du blog pour une meilleure performance
- Script d'optimisation automatique des images (`optimize-images.sh`)
- Documentation complète dans `CHANGELOG.md`
- Rapports d'analyse détaillés (RAPPORT_ANALYSE_COMPLET.md, PROBLEMES_IDENTIFIES.md, etc.)

### 🔧 Corrigé
- **Incohérences de contenu** : Clarification entre "20 ans d'expérience" (Mikail Lekesiz) et "Fondé en 2016" (NETZ Informatique)
- **Formulaire de contact** : Migration de SendGrid vers Resend pour une meilleure fiabilité
- Mise à jour de tous les schémas SEO (LocalBusinessSchema, StructuredData)
- Correction du fondateur et de la date de création dans les métadonnées

### ⬆️ Mis à jour
- React 19.1.0 → 19.2.0
- Tous les paquets @radix-ui (30+ paquets mis à jour)
- Framer Motion 12.15.0 → 12.23.24
- React Hook Form 7.56.3 → 7.66.0
- Tailwind CSS 4.1.7 → 4.1.17
- React Router DOM 7.6.1 → 7.9.5
- Fichier `.env.example` pour refléter l'utilisation de Resend

### 🚀 Performance
- **Images optimisées** : Réduction de 20-44% de la taille des JPG
- **WebP créés** : 50-65% plus légers que les JPG originaux
- Gain total : ~200KB économisés sur les images

### 📝 Documentation
- Mise à jour du README.md
- Création de guides de résolution (GUIDE_RESOLUTION.md)
- Documentation des problèmes identifiés (PROBLEMES_IDENTIFIES.md)
- Recommandations de développement (RECOMMANDATIONS_DEVELOPPEMENT.md)
- Liste TODO des améliorations (TODO_AMELIORATIONS.md)

## [1.0.0] - 2025-10-04

### ✨ Lancement Initial
- Site web complet avec React 19 et Vite
- Support multilingue (FR, EN, DE, TR)
- SEO optimisé avec schémas de données structurées
- Formulaire de contact fonctionnel
- Blog avec articles
- Pages de services
- Intégration Calendly pour les rendez-vous
- Design responsive avec Tailwind CSS 4
- Composants accessibles avec Radix UI

---

**Légende** :
- ✨ Ajouté : Nouvelles fonctionnalités
- 🔧 Corrigé : Corrections de bugs
- ⬆️ Mis à jour : Mises à jour de dépendances
- 🚀 Performance : Améliorations de performance
- 📝 Documentation : Mises à jour de documentation
- 🔒 Sécurité : Correctifs de sécurité
- ⚠️ Déprécié : Fonctionnalités obsolètes
- 🗑️ Supprimé : Fonctionnalités retirées
