# Cercle Arvor — landing page

Landing page Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion et Lucide React, prête pour Vercel.

## Relancer en local

```powershell
cd "C:\Users\arnod\Documents\Codex\2026-08-01\referenced-chatgpt-conversation-this-is-an"
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

## Vérifier avant publication

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

## Modifier l'événement

Tout le contenu métier est centralisé dans `config/event.ts` :

- `name`, `dates`, `dateISO`, `location` : identité, dates et lieu ;
- `capacity`, `remainingPlaces`, `beds`, `bookingDeadline` : rareté réelle ;
- `links` : réservation, candidature, WhatsApp, Instagram, email et pages légales ;
- `tickets` : prix, badges, avantages et liens de chaque pass ;
- `speakers` : noms, portraits, expertises, biographies et statuts ;
- `schedule` : programme des deux journées ;
- `faq`, `organizer`, `contact` : textes et coordonnées ;
- `images` : chemins de toutes les images utilisées.

Pour remplacer une photo, copiez-la dans `public/images/`, puis remplacez son chemin dans `event.images` ou dans l'intervenant concerné. Utilisez idéalement WebP ou AVIF, avec un visuel hero d'au moins 1600 px de large.

Le bloc témoignages reste automatiquement masqué tant que `testimonials` est vide. Ne l'alimentez qu'avec des témoignages réels.

## Formulaire

Sans configuration, le formulaire valide les champs côté navigateur et affiche une confirmation de démonstration. Renseignez `links.externalForm` pour rediriger après validation vers Tally, Typeform ou Airtable. Pour enregistrer directement les données, remplacez le traitement dans `components/ApplicationForm.tsx` par votre appel API.

## Déployer sur Vercel

1. Importez le dossier dans un dépôt GitHub.
2. Dans Vercel, choisissez **Add New → Project** puis le dépôt.
3. Le preset Next.js et les commandes sont détectés automatiquement.
4. Remplacez `siteUrl` dans `config/event.ts` par l'URL finale avant le déploiement de production.
5. Configurez les liens définitifs de paiement, les pages légales et les coordonnées.

Aucune variable d'environnement n'est requise dans cette première version.
