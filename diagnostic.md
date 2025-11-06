# Diagnostic du Problème du Formulaire de Contact

## Problème Identifié

Le formulaire de contact sur https://www.netzinformatique.fr/contact retourne une erreur 500 lors de la soumission.

### Message d'erreur affiché
"Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par téléphone."

### Erreur dans la console
```
error: Failed to load resource: the server responded with a status of 500 ()
```

## Analyse du Code

### Backend (api/contact.js)
Le code utilise **SendGrid** pour l'envoi d'emails :
- Ligne 2 : `import sgMail from '@sendgrid/mail'`
- Ligne 115 : Vérifie `process.env.SENDGRID_API_KEY`
- Ligne 137 : `sgMail.setApiKey(sendgridApiKey)`

### Variables d'environnement Vercel
Les variables suivantes sont configurées :
- `SENDGRID_API_KEY` ✓
- `SENDGRID_API_KEY_NEW` ✓
- `SENDGRID_FROM_EMAIL` ✓
- `SENDGRID_TO_EMAIL` ✓

## Causes Possibles

1. **Clé API SendGrid invalide ou expirée**
   - La clé API pourrait ne plus être valide
   - SendGrid pourrait avoir suspendu le compte

2. **Problème de configuration SendGrid**
   - L'adresse email d'expéditeur n'est pas vérifiée dans SendGrid
   - Le domaine n'est pas authentifié

3. **Limite de quota SendGrid atteinte**
   - Le plan gratuit de SendGrid a des limites

4. **Erreur dans le code backend**
   - Exception non gérée lors de l'envoi d'email
   - Problème avec les dépendances

## Solution Recommandée

Passer de **SendGrid** à **Resend** car :
- Resend API Key disponible : `re_j299ogpf_EEAKZAoLJArch69r5tXmjVPs`
- Plus simple à configurer
- Meilleure fiabilité
- Déjà utilisé dans d'autres projets du client

## Actions à Effectuer

1. Modifier `api/contact.js` pour utiliser Resend au lieu de SendGrid
2. Mettre à jour les variables d'environnement Vercel
3. Tester le formulaire
4. Déployer sur Vercel
