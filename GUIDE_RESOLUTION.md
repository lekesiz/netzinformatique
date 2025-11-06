# Guide de Résolution - Formulaire de Contact

## Problème actuel

Le formulaire de contact sur https://www.netzinformatique.fr/contact retourne une **erreur 500 (FUNCTION_INVOCATION_FAILED)** lors de la soumission.

## Cause identifiée

Après analyse approfondie, le problème vient de **l'incompatibilité entre les modules ES (import/export) et les fonctions serverless Vercel**. Le fichier `/api/contact.js` utilise la syntaxe CommonJS (`require`/`module.exports`), mais les dépendances `resend`, `isomorphic-dompurify` et `validator` ne sont peut-être pas installées correctement pour les fonctions serverless.

## Solution recommandée : Vérifier le domaine dans Resend

La solution la plus simple et la plus fiable est de **vérifier le domaine netzinformatique.fr dans Resend** :

### Étape 1 : Connexion à Resend
1. Aller sur https://resend.com/login
2. Se connecter avec le compte associé à la clé API `re_j299ogpf_EEAKZAoLJArch69r5tXmjVPs`

### Étape 2 : Ajouter et vérifier le domaine
1. Aller dans **Domains** > **Add Domain**
2. Ajouter le domaine `netzinformatique.fr`
3. Resend va fournir des enregistrements DNS à configurer :
   - **SPF** (TXT record)
   - **DKIM** (TXT record)  
   - **DMARC** (TXT record)

### Étape 3 : Configurer les enregistrements DNS
1. Se connecter au panneau de gestion DNS du domaine (probablement chez l'hébergeur ou le registrar)
2. Ajouter les enregistrements DNS fournis par Resend
3. Attendre la propagation DNS (peut prendre jusqu'à 48h, généralement 1-2h)

### Étape 4 : Vérifier le domaine dans Resend
1. Retourner sur Resend > Domains
2. Cliquer sur **Verify** à côté du domaine
3. Une fois vérifié, le statut passera à "Verified" ✅

### Étape 5 : Mettre à jour les variables d'environnement Vercel
Une fois le domaine vérifié, mettre à jour les variables d'environnement :

```bash
# Mettre à jour RESEND_FROM_EMAIL
curl -X PATCH -H "Authorization: Bearer xJcybEz24vP6Xw6ICB54sN0c" \
  -H "Content-Type: application/json" \
  -d '{"value":"contact@netzinformatique.fr","type":"encrypted"}' \
  "https://api.vercel.com/v9/projects/prj_zwalUMa3E9V6fixKTz85qdRXDNaa/env/wOgxxw9UWFDN8fSJ"
```

### Étape 6 : Réactiver l'email de confirmation client
Une fois le domaine vérifié, décommenter les lignes 264-269 dans `/api/contact.js` :

```javascript
// Actuellement commenté :
// await resend.emails.send({
//   from: fromEmail,
//   to: sanitizedEmail,
//   subject: 'Confirmation - Votre message a bien été reçu',
//   html: customerEmailHTML,
// });

// Décommenter pour réactiver :
await resend.emails.send({
  from: fromEmail,
  to: sanitizedEmail,
  subject: 'Confirmation - Votre message a bien été reçu',
  html: customerEmailHTML,
});
```

## Solution alternative : Utiliser un autre service d'email

Si la vérification du domaine dans Resend est trop compliquée, voici d'autres options :

### Option 1 : SendGrid (ancien service)
- Retourner à SendGrid
- Vérifier le domaine dans SendGrid
- Restaurer l'ancien code

### Option 2 : Mailgun
- Créer un compte sur https://www.mailgun.com
- Vérifier le domaine
- Installer le package : `pnpm add mailgun.js form-data`
- Adapter le code API

### Option 3 : Postmark
- Créer un compte sur https://postmarkapp.com
- Vérifier le domaine
- Installer le package : `pnpm add postmark`
- Adapter le code API

### Option 4 : AWS SES
- Créer un compte AWS
- Configurer SES et vérifier le domaine
- Installer le package : `pnpm add @aws-sdk/client-ses`
- Adapter le code API

## Fichiers modifiés

Les fichiers suivants ont été modifiés et sont prêts à être utilisés :

1. `/api/contact.js` - API de contact avec Resend (CommonJS)
2. `/package.json` - Dépendances mises à jour (resend au lieu de @sendgrid/mail)
3. `/pnpm-lock.yaml` - Lockfile mis à jour

## Variables d'environnement Vercel actuelles

```
RESEND_API_KEY=re_j299ogpf_EEAKZAoLJArch69r5tXmjVPs
RESEND_FROM_EMAIL=onboarding@resend.dev (temporaire)
RESEND_TO_EMAIL=mikaillekesiz@gmail.com
```

## Test de l'API Resend

Pour tester si la clé API fonctionne :

```bash
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer re_j299ogpf_EEAKZAoLJArch69r5tXmjVPs' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "mikaillekesiz@gmail.com",
    "subject": "Test Resend",
    "html": "<p>Test de la clé API Resend</p>"
  }'
```

Résultat attendu : Email envoyé avec succès à mikaillekesiz@gmail.com

## Prochaines étapes

1. ✅ **Vérifier le domaine netzinformatique.fr dans Resend** (RECOMMANDÉ)
2. Mettre à jour `RESEND_FROM_EMAIL` vers `contact@netzinformatique.fr`
3. Réactiver l'email de confirmation client
4. Tester le formulaire de contact

## Support

Si vous avez besoin d'aide :
- Documentation Resend : https://resend.com/docs
- Support Resend : https://resend.com/support
- Documentation Vercel : https://vercel.com/docs

## Remarques importantes

- Le code actuel envoie uniquement un email à l'administrateur (mikaillekesiz@gmail.com)
- L'email de confirmation au client est désactivé temporairement
- Avec l'adresse `onboarding@resend.dev`, on ne peut envoyer qu'à l'adresse du propriétaire du compte Resend
- Une fois le domaine vérifié, le formulaire fonctionnera pour tous les visiteurs
