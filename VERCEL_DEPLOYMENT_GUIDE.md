# 📚 Guide de Déploiement Vercel

## 🌐 Méthode 1: Interface Web Vercel (Recommandée)

### Étapes de déploiement:

1. **Accéder à Vercel**
   - Visitez [vercel.com](https://vercel.com)
   - Cliquez sur "Log in"
   - Choisissez "Continue with GitHub"

2. **Créer un nouveau projet**
   - Dans le dashboard, cliquez sur "Add New..." → "Project"
   - Trouvez `lekesiz/netzinformatique` dans la liste
   - Cliquez sur "Import"

3. **Configuration du projet**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: pnpm build
   Output Directory: dist
   Install Command: pnpm install
   ```

4. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez 1-2 minutes
   - Votre site sera disponible sur `[nom-du-projet].vercel.app`

## 🖥️ Méthode 2: Vercel CLI

### Installation et déploiement:

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer le projet
vercel --prod

# Suivre les instructions:
# - Set up and deploy: Y
# - Which scope: Votre compte
# - Link to existing project: N
# - Project name: netzinformatique
# - Directory: ./
# - Override settings: N
```

## 🔗 Configuration du Domaine Personnalisé

Une fois déployé:

1. Allez dans les paramètres du projet sur Vercel
2. Section "Domains"
3. Ajoutez `netzinformatique.fr`
4. Configurez les DNS selon les instructions Vercel

### Configuration DNS typique:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🚨 Dépannage

### Problèmes courants:

1. **Build échoue**
   - Vérifiez que `pnpm install` fonctionne localement
   - Assurez-vous que tous les fichiers sont committés

2. **404 après déploiement**
   - Vérifiez que le build génère bien le dossier `dist`
   - Contrôlez les routes dans `vercel.json`

3. **API ne fonctionne pas**
   - Les fonctions doivent être dans le dossier `api/`
   - Vérifiez les logs dans le dashboard Vercel

## 📊 Monitoring

Après déploiement, surveillez:

- Analytics dans le dashboard Vercel
- Web Vitals scores
- Logs des fonctions serverless
- Utilisation de la bande passante

## 🔄 Déploiements Automatiques

Par défaut, Vercel déploie automatiquement:
- Chaque push sur la branche `main` → Production
- Chaque PR → Preview deployment

## 📝 Variables d'Environnement

Si nécessaire, ajoutez dans Settings → Environment Variables:

```
# Exemple pour l'envoi d'emails
SENDGRID_API_KEY=your_key_here
EMAIL_TO=contact@netzinformatique.fr
```

---

**Support**: Si vous rencontrez des problèmes, contactez-moi ou consultez la [documentation Vercel](https://vercel.com/docs).