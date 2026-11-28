# Boutique en ligne ABDUL Mohammed

Site de réservation pour le stand de vêtements femme du père de Mohammed, au marché du Val Fourré (Mantes-la-Jolie). Les clientes réservent en ligne, envoient la réservation sur WhatsApp, puis paient et récupèrent au stand (pas de paiement en ligne, rien de payant).

Site en ligne : https://abdul-mohammed-mode.github.io (GitHub Pages, branche main, publié automatiquement après chaque push).

## Fichiers
- `index.html` : toute l'appli (HTML, CSS, JS sans framework). Écrans catalogue, article, panier, confirmation, zoom photo, plan du marché, carte.
- `produits.js` : réglages (`BOUTIQUE`) et articles (`PRODUITS`) : prix, couleurs → photo, tailles, modèles, options, épuisé.
- `images/` : photos produits en .jpg (900 px), noms sans espace ni accent.
- `LISEZ-MOI.txt` : mode d'emploi simple pour modifier les articles.

## Stock et commandes
- Le stock vient d'un tableau Google Sheets « Stock et commandes – ABDUL Mohammed », lu et écrit par un script Google Apps Script (adresse dans `BOUTIQUE.urlStock`).
- Clé de stock : `Article|Modèle|Couleur|Taille` (Modèle seulement si l'article a plusieurs modèles).
- Un nouvel article ou une nouvelle couleur ajouté dans `produits.js` doit aussi être ajouté au tableau, sinon il est considéré en stock illimité.
- Ne jamais copier les données des clientes (onglet Commandes : noms, téléphones) dans le code, les commits ou une IA externe.

## Règles de travail
- Toujours répondre et écrire le site en français.
- Avant chaque modification : `git pull --rebase origin main` (le dépôt est aussi modifié depuis GitHub et depuis d'autres sessions).
- Tester en local (`python3 -m http.server`) sur un écran de téléphone (390 px de large) avant de pousser.
- Ne pas refaire ce qui marche : changements ciblés, pas de réécriture complète.
- Photos des leggings et t-shirts : garder les photos d'origine (Mohammed a refusé les versions à plat et sur mannequin).
- Tâches simples (descriptions, textes) : peuvent être déléguées à un modèle léger, mais relire avant de publier.
