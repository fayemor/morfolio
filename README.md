# Morfolio — portfolio de Mor Faye (Next.js)

Migration du portfolio HTML/CSS/JS vers **Next.js (App Router) + TypeScript + Tailwind CSS**.
Design repris du modèle fourni (fond blanc, accent orange, personnages au trait, cartes arrondies, police Plus Jakarta Sans), thème sombre en option.
Le contenu (expérience, formation, compétences, langues) vient du CV ; projets, galerie, articles et page article viennent du site d'origine.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Images à ajouter

Copiez les images d'origine dans **`public/images/`** (mêmes noms de fichiers qu'avant, sans sous-dossier) :

- `morfaye.jpg`, `raffetart.png`, `jangbiochimie.png`, `apercu_xc.jpeg`, `article-1.png`
- 37 visuels de galerie, de `dsg1.jpg` à `dsg41.jpg` (liste exacte dans `lib/data.ts`)

Tant qu'elles manquent, le site se construit normalement mais les images s'affichent cassées.

## Structure

```text
app/
  layout.tsx, page.tsx        layout global (polices, thème, JSON-LD) et page d'accueil
  articles/ia/                page de l'article (ex-article-1.html) + son CSS
  globals.css                 CSS d'origine + Tailwind
  robots.ts, sitemap.ts, icon.svg
components/                   sections (Hero, Projects, About, Gallery, Articles, Contact, Footer…)
  PortfolioProvider.tsx       état partagé : langue FR/EN, modales, lightbox
  Tr.tsx                      texte traduit (dictionnaire de lib/i18n.ts)
  article/                    composants de la page article
lib/
  data.ts                     projets, galerie, articles
  i18n.ts                     traductions FR / EN
  site.ts                     URL du site et réseaux sociaux
```

Pour ajouter un projet : `lib/data.ts` et les textes `proj_N_*` de `lib/i18n.ts`. Pour une affiche : `lib/data.ts` uniquement.

## Points à vérifier (signalés, non modifiés)

- **`test.html`** n'a pas été migré : c'est une variante d'`index.html` (police Playfair, SEO retouché).
- **Dates** : « Affiche Gamou 2026 » est datée 2025 dans la galerie.
- **Numéros manquants** : dsg22, dsg24, dsg25 et dsg36 n'existent pas dans les données.
- **Articles en modale** (`lib/data.ts`) : aucun bouton ne les ouvre, ils ne sont accessibles que par `/#article-0` et `/#article-1`.
  Leurs images sont des placeholders `placehold.co`.
- **Vues et likes** de l'article (1245 vues, 342 likes) : valeurs de départ fixes, stockées dans le navigateur,
  sans serveur. Ce ne sont pas de vrais compteurs. Le compteur de likes est corrigé (342, +1 avec votre like).
- **URL du site** : `https://morfolio.vercel.app` (reprise de l'ancien `og:url`), surchargeable via `NEXT_PUBLIC_SITE_URL`.
- **Open Graph** : l'ancien `og:image` pointait vers `images/hero-profile.jpg` (inexistant) ; remplacé par `morfaye.jpg`.
- **E-mail et ville** : le CV indique `fayemor762@gmail.com` et Mboro ; l'ancien site utilisait `morfaye506@gmail.com` et Dakar. Le CV a été retenu.
- **Titre du site** : « Mor Faye — Support IT, Développeur Web & Graphiste Designer » (l'ancien `<title>` était « Mor Faye »).
- **Page article** : suit désormais le thème clair/sombre du site (elle était toujours sombre).

## Choix techniques

- Tailwind v3 conservé, car le balisage d'origine l'utilise partout ; FontAwesome installé via npm (plus de CDN).
- Polices via `next/font` : Plus Jakarta Sans partout, Playfair Display uniquement sur la page article.
- Seuls les composants interactifs sont des Client Components ; Hero, About, Contact, Footer… restent côté serveur.
- Thème clair par défaut ; le choix sombre est mémorisé (`localStorage`).
- Les filtres et le sélecteur de style des projets ont été retirés pour coller au modèle.
- Les deux illustrations (hero et à propos) sont des SVG dessinés dans `components/illustrations/` ; remplaçables par vos propres fichiers.
- `prefers-reduced-motion` respecté ; modales fermées retirées de la navigation clavier (`inert`).

## Mises à jour récentes

- Portrait : `public/images/morfaye-sketch.png` (croquis au crayon, fond transparent) affiché par `components/HeroPortrait.tsx`. En mode sombre le trait est inversé via `--photo-filter` dans `globals.css`. `morfaye.jpg` (photo d'origine) reste utilisé pour la page article et l'image Open Graph.
- CV : lien de téléchargement direct, sans nouvel onglet. Pour un lien 100 % local, déposez le PDF dans `public/` et changez `CV_URL` dans `components/Hero.tsx`.
- Visionneuse de projets, modale et page article : mêmes polices, couleurs et coins arrondis que le reste du site.
- Sections séparées : Expérience / Formation (`Timeline.tsx`), Langues / Centres d'intérêt.
