// =====================================================================
//  PRODUITS DU SITE — c'est le seul fichier à modifier au quotidien.
//
//  • Changer un prix      : modifier le nombre après  prix:
//  • Retirer un article   : supprimer tout son bloc { ... },
//  • Masquer un article   : ajouter  cache: true,
//  • Article épuisé       : ajouter  epuise: 'tout',
//  • Couleur/taille épuisée: ajouter  epuise: ['Bordeaux', 'XXXL'],
//                           (les noms exacts des couleurs ou tailles épuisées)
//  • Ajouter une couleur  : ajouter une ligne  'Nom': 'photo.jpg',
//                           (ou  'Nom': null,  s'il n'y a pas de photo)
//  • Nouvelle photo       : la mettre dans le dossier images/ et écrire
//                           son nom exact ici.
//
//  Garder les virgules et les guillemets ' ' comme dans les exemples.
// =====================================================================

const BOUTIQUE = {
  nom: 'ABDUL Mohammed',
  whatsapp: '33750579824',            // numéro au format international, sans + ni espaces
  lieu: 'Marché de Mantes-la-Jolie',
  joursDeMarche: ['mardi', 'vendredi', 'dimanche'],
  horaires: '14h–17h',
  heureDebut: 14, heureFin: 17,
  // Adresse utilisée pour le bouton « Itinéraire »
  adresse: 'Rue Denis Diderot, 78200 Mantes-la-Jolie',
  // Position du stand sur le plan [latitude, longitude]
  // (pour la changer : appui long sur Google Maps à l'endroit du stand, puis copier les 2 nombres)
  positionStand: [48.99835, 1.68418],
  // Plan du marché vu du dessus : 2 parties, 3 allées chacune (celle du milieu = principale)
  // Mesures prises sur la carte (OpenStreetMap) :
  //   partie nord ≈ 136 m × 40 m  → 136 ÷ 4 m = 34 emplacements par rangée
  //   partie sud  ≈ 103 m × 41 m  → 103 ÷ 4 m = 25 emplacements par rangée
  //   largeur : 6 rangées × 3 m = 18 m de stands + allées (≈ 6 m, 10 m pour la principale, 6 m)
  planMarche: {
    parties: [
      { nom: 'Partie nord', cases: 34 },
      { nom: 'Partie sud', cases: 25 }
    ],
    largeurAllee: 6,
    largeurAlleePrincipale: 10,
    entreLesParties: 'Rue Boileau',
    coteGauche: 'Rue Denis Diderot',
    coteDroit: 'Rue Jean Racine',
    enHaut: 'Rue La Fontaine',
    enBas: 'Avenue du Général de Gaulle',
    // Repères autour du marché. cote : 'gauche' ou 'droite' ;
    // detail : petite ligne en dessous (\n = retour à la ligne)
    // de / a : position verticale de 0 (tout en haut) à 1 (tout en bas)
    reperes: [
      { nom: 'Mairie de quartier', detail: '(ancienne\nCAF)', cote: 'droite', de: 0.03, a: 0.20, type: 'mairie' },
      { nom: 'École maternelle', detail: 'Les Gentianes', cote: 'droite', de: 0.25, a: 0.45, type: 'ecole' },
      { nom: 'Aire de jeux', detail: '', cote: 'droite', de: 0.63, a: 0.76, type: 'jeux' },
      { nom: 'Terrains de basket', detail: '', cote: 'gauche', de: 0.50, a: 0.62, type: 'sport' },
      { nom: 'Gymnase Louis Lécuyer', detail: 'Toilettes\n0,50 € / pers.', cote: 'gauche', de: 0.66, a: 0.90, type: 'gymnase' }
    ],
    // Feux tricolores : coin 'bas-gauche', 'bas-droite', 'haut-gauche' ou 'haut-droite'
    // (ajouter ' x2' pour un double feu, ex. 'haut-gauche x2')
    feux: ['haut-gauche x2', 'bas-gauche', 'bas-droite']
  },
  // Emplacement(s) du stand sur ce plan (cliquer sur le plan en mode modification
  // — adresse du site suivie de ?modifier — puis recopier le code affiché ici)
  standCases: ['1-1-9', '1-1-10', '1-1-11'],
  // Repère pour trouver le stand (laisser '' si rien à dire)
  repereStand: 'Partie nord, 1re rangée côté rue Denis Diderot, 9e emplacement en venant de la rue La Fontaine (le double feu derrière vous).',
  // Créneaux proposés pour l'heure de passage
  creneaux: ['14h – 15h', '15h – 16h', '16h – 17h'],
  // Nombre de jours de marché proposés
  nbJoursProposes: 6,
  // Règle affichée sur chaque fiche et à la confirmation
  regleReservation: 'Article gardé jusqu’à 17h le jour choisi. S’il n’est pas récupéré, il est remis en vente.',
  // Avertissement sous les photos
  mentionPhoto: 'Photo d’illustration : la couleur et les détails peuvent légèrement varier.'
};

// Guide des tailles (correspondance indicative, à ajuster)
const GUIDE_TAILLES = {
  'M': '38 – 40',
  'L': '40 – 42',
  'XL': '42 – 44',
  'XXL': '44 – 46',
  'XXXL': '46 – 48',
  'M/L': '38 – 42',
  'L/XL': '42 – 46',
  'XL/XXL': '44 – 48',
  'Taille unique': '38 à 46 environ'
};

// Tailles qui reviennent souvent
const M_A_XXXL = ['M', 'L', 'XL', 'XXL', 'XXXL'];
const TU = ['Taille unique'];

const PRODUITS = [

  // ---------------- ROBES & ABAYAS ----------------
  {
    categorie: 'Robes & abayas', code: 'RO-01', nom: 'Robe en velours brodée', prix: 10,
    description: 'Robe longue en velours doux, ornée d’une broderie au col. Élégante et chaude, parfaite pour les fêtes et les occasions. Le motif de la broderie varie selon le coloris.',
    tailles: M_A_XXXL,
    modeles: {
      'Broderie dorée': {
        'Noir': 'vel-noir.jpg', 'Bordeaux': 'vel-bordeaux.jpg', 'Fuchsia': 'vel-fuchsia.jpg',
        'Vert sapin': 'vel-vertsapin.jpg', 'Bleu roi': 'vel-bleuroi.jpg', 'Bleu marine': 'vel-marine.jpg',
        'Moutarde': 'vel-moutarde.jpg', 'Vert d’eau': 'vel-vertsauge.jpg', 'Mauve': 'vel-prune.jpg',
        'Turquoise': null, 'Bleu canard': null, 'Prune': null, 'Taupe': null, 'Kaki': null
      },
      'Strass au col V': {
        'Beige': 'str-beige.jpg', 'Vieux rose': 'str-vieuxrose.jpg',
        'Vert de gris': 'str-vertdegris.jpg', 'Noir': 'str-noir.jpg'
      }
    },
    photoPrincipale: 'vel-marine.jpg'
  },
  {
    categorie: 'Robes & abayas', code: 'RO-02', nom: 'Robe sweat cocooning', prix: 10,
    description: 'Robe longue oversize en molleton tout doux, col rond et poignets resserrés.',
    tailles: M_A_XXXL,
    couleurs: {
      'Marron': 'rs-marron.jpg', 'Kaki': 'rs-kaki.jpg', 'Bleu ciel': 'rs-bleuciel.jpg',
      'Bleu marine': 'rs-marine.jpg', 'Rose clair': 'rs-roseclair.jpg', 'Beige chiné': 'rs-beige.jpg',
      'Bordeaux': 'rs-bordeaux.jpg'
    }
  },
  {
    categorie: 'Robes & abayas', code: 'RO-03', nom: 'Robe côtelée zippée', prix: 10,
    description: 'Robe longue et ample en velours côtelé, col chemise et zip doré.',
    tailles: M_A_XXXL,
    couleurs: {
      'Beige': 'rz-beige.jpg', 'Kaki': 'rz-kaki.jpg', 'Noir': 'rz-noir.jpg',
      'Moutarde': 'rz-moutarde.jpg', 'Prune': 'rz-prune.jpg'
    }
  },
  {
    categorie: 'Robes & abayas', code: 'RO-04', nom: 'Robe en maille à boutons', prix: 10,
    description: 'Robe longue en maille côtelée chinée, patte boutonnée et manches longues.',
    tailles: M_A_XXXL,
    couleurs: { 'Gris clair': null, 'Anthracite': null, 'Vert': null, 'Camel': null, 'Bleu marine': null },
    photoPrincipale: 'robe-maille.jpg'
  },
  {
    categorie: 'Robes & abayas', code: 'RO-05', nom: 'Robe imprimée bleue', prix: 5,
    description: 'Robe longue fluide à imprimé baroque bleu et blanc, manches longues.',
    tailles: M_A_XXXL,
    couleurs: { 'Imprimé bleu et blanc': 'ro05.jpg' }
  },
  {
    categorie: 'Robes & abayas', code: 'AB-01', nom: 'Abaya zippée strass', prix: 10,
    description: 'Abaya longue à fermeture éclair, broderies et strass discrets sur le devant.',
    tailles: M_A_XXXL,
    couleurs: { 'Lavande': 'az-lavande.jpg', 'Corail': 'az-corail.jpg', 'Bordeaux': 'az-bordeaux.jpg' }
  },
  {
    categorie: 'Robes & abayas', code: 'AB-02', nom: 'Abaya satinée col contrasté', prix: 10,
    description: 'Abaya longue en satin effet froissé, col V contrasté et bouton doré. Fabriquée en France.',
    tailles: ['M/L', 'L/XL'],
    couleurs: {
      'Bleu marine': 'as-marine.jpg', 'Prune': 'as-prune.jpg', 'Crème': 'as-creme.jpg',
      'Bleu ciel': 'as-bleuciel.jpg', 'Kaki': 'as-kaki.jpg'
    },
    photoPrincipale: 'as-kaki.jpg'
  },

  // ---------------- MANTEAUX & MAILLES ----------------
  {
    categorie: 'Manteaux & mailles', nom: 'Manteau long ouvert', prix: 10,
    description: 'Manteau long et fluide, col châle et manches retroussées.',
    tailles: TU,
    couleurs: {
      'Bordeaux': 'ma-bordeaux.jpg', 'Bleu marine': 'ma-marine.jpg', 'Marron': 'ma-marron.jpg',
      'Beige': 'ma-beige.jpg', 'Noir': 'ma-noir.jpg', 'Kaki': 'ma-kaki.jpg',
      'Prune': 'ma-prune.jpg', 'Gris': 'ma-gris.jpg'
    }
  },
  {
    categorie: 'Manteaux & mailles', code: 'CA-01', nom: 'Cape courte ceinturée', prix: 10,
    description: 'Cape courte en lainage, col montant avec broche dorée et ceinture fine.',
    tailles: TU,
    couleurs: {
      'Chocolat': 'ca-chocolat.jpg', 'Rose pâle': 'ca-rosepale.jpg', 'Rose poudré': 'ca-rosepoudre.jpg',
      'Kaki': 'ca-kaki.jpg', 'Taupe rosé': 'ca-tauperose.jpg', 'Prune': 'ca-prune.jpg'
    }
  },
  {
    categorie: 'Manteaux & mailles', nom: 'Gilet long en maille', prix: 10,
    description: 'Gilet long et ouvert en maille douce, avec poches.',
    tailles: TU, couleurLibre: 'Plusieurs couleurs'
  },
  {
    categorie: 'Manteaux & mailles', nom: 'Gilet rayé boutonné', prix: 10,
    description: 'Gilet en maille douce à rayures, col V boutonné et poches.',
    tailles: TU, couleurLibre: 'Plusieurs couleurs'
  },
  {
    categorie: 'Manteaux & mailles', code: 'PU-01', nom: 'Pull torsadé col roulé', prix: 5,
    description: 'Pull col roulé en maille torsadée, doux et bien chaud.',
    tailles: ['M/L', 'L/XL', 'XL/XXL'],
    couleurs: {
      'Orange': 'pu-orange.jpg', 'Crème': 'pu-creme.jpg', 'Rose clair': 'pu-roseclair.jpg',
      'Rouge': 'pu-rouge.jpg', 'Vert sapin': 'pu-vertsapin.jpg', 'Camel': 'pu-camel.jpg',
      'Bleu ciel': 'pu-bleuciel.jpg', 'Fuchsia': 'pu-fuchsia.jpg', 'Blanc': 'pu-blanc.jpg',
      'Noir': 'pu-noir.jpg', 'Bleu marine': 'pu-marine.jpg', 'Bordeaux': 'pu-bordeaux.jpg'
    }
  },

  // ---------------- PANTALONS & JUPES ----------------
  {
    categorie: 'Pantalons & jupes', code: 'PA-01', nom: 'Pantalon à boucle strass', prix: 5,
    description: 'Pantalon droit fluide et habillé, boucle en strass à la taille et poches.',
    tailles: ['M/L', 'L/XL', 'XL/XXL'],
    couleurs: { 'Bleu marine': 'pb-marine.jpg', 'Kaki': 'pb-kaki.jpg', 'Beige': 'pb-beige.jpg', 'Noir': 'pb-noir.jpg' }
  },
  {
    categorie: 'Pantalons & jupes', code: 'JL-01', nom: 'Jupe longue côtelée', prix: 5,
    description: 'Jupe longue et ample en velours côtelé, taille élastique.',
    tailles: TU,
    couleurs: { 'Beige': null, 'Noir': null, 'Violet': null, 'Orange': null, 'Rouge': null, 'Marron': null },
    photoPrincipale: 'jupe-cotelee.jpg'
  },

  // ---------------- CONFORT ----------------
  {
    categorie: 'Confort', code: 'ES-01', nom: 'Ensemble sweat uni 2 pièces', prix: 10,
    description: 'Sweat ample + pantalon large assortis, tissu doux et chaud.',
    tailles: TU,
    couleurs: {
      'Rose': 'es-rose.jpg', 'Gris chiné': 'es-grischine.jpg', 'Bordeaux': 'es-bordeaux.jpg',
      'Bleu roi': 'es-bleuroi.jpg', 'Écru': 'es-ecru.jpg', 'Noir': 'es-noir.jpg',
      'Bleu marine': 'es-marine.jpg', 'Marron': 'es-marron.jpg', 'Vert sapin': 'es-vertsapin.jpg',
      'Vert sauge': 'es-vertsauge.jpg', 'Lilas': 'es-lilas.jpg', 'Beige': 'es-beige.jpg'
    }
  },
  {
    categorie: 'Confort', code: 'JO-01', nom: 'Jogging large à bandes', prix: 5,
    description: 'Jogging coupe large avec bandes latérales, cordon et taille élastique.',
    tailles: M_A_XXXL,
    couleurs: { 'Gris': 'jl-gris.jpg', 'Vert kaki': 'jl-kaki.jpg', 'Noir': 'jl-noir.jpg' }
  },
  {
    categorie: 'Confort', code: 'JO-02', nom: 'Jogging molleton à bandes', prix: 5,
    description: 'Jogging molletonné bien chaud, double bande et chevilles resserrées.',
    tailles: M_A_XXXL,
    couleurs: { 'Bleu marine': 'jm-marine.jpg', 'Noir': 'jm-noir.jpg', 'Gris': 'jm-gris.jpg' }
  },

  // ---------------- BASIQUES (3 pour 10 €) ----------------
  {
    categorie: 'Basiques', code: 'TS-01', nom: 'T-shirt moulant manches longues', prix: 4, offre3pour10: true,
    description: 'Col rond, matière légère et fluide. Idéal sous une robe, un gilet ou une abaya.',
    tailles: TU,
    couleurs: { 'Blanc': 'ts-blanc.jpg', 'Noir': 'ts-noir.jpg', 'Gris': 'ts-gris.jpg', 'Taupe': 'ts-taupe.jpg' }
  },
  {
    categorie: 'Basiques', code: 'LE-01', nom: 'Legging', prix: 4, offre3pour10: true,
    description: 'Legging long ajusté en jersey fin et extensible, comme une seconde peau, taille élastique. Parfait sous une robe ou une abaya.',
    tailles: TU,
    couleurs: { 'Noir': 'le-noir.jpg', 'Blanc': 'le-blanc.jpg', 'Gris': 'le-gris.jpg', 'Beige': 'le-beige.jpg' }
  },
  {
    categorie: 'Basiques', code: 'LE-02', nom: 'Legging court', prix: 4, offre3pour10: true,
    description: 'Legging court qui s’arrête à mi-mollet, en jersey fin et extensible, taille élastique. Léger et pratique sous une robe ou une abaya.',
    tailles: TU,
    couleurs: { 'Noir': 'lp-noir.jpg', 'Blanc': 'lp-blanc.jpg', 'Gris': 'lp-gris.jpg', 'Beige': 'lp-beige.jpg' }
  },
  {
    categorie: 'Basiques', code: 'LE-03', nom: 'Legging pantacourt', prix: 4, offre3pour10: true,
    description: 'Legging pantacourt qui s’arrête juste sous le genou, en jersey fin et extensible, taille élastique. Idéal en sous-couche.',
    tailles: TU,
    couleurs: { 'Noir': 'lc-noir.jpg', 'Blanc': 'lc-blanc.jpg', 'Gris': 'lc-gris.jpg', 'Beige': 'lc-beige.jpg' }
  },
  {
    categorie: 'Basiques', code: 'JU-01', nom: 'Jupon dentelle', prix: 4, offre3pour10: true,
    description: 'Jupon fluide à porter sous les robes et abayas, finition dentelle.',
    tailles: TU,
    couleurs: { 'Turquoise': 'ju-turquoise.jpg', 'Lilas': 'ju-lilas.jpg', 'Bleu': 'ju-bleu.jpg', 'Rose': 'ju-rose.jpg' }
  },

  // ---------------- NUIT ----------------
  {
    categorie: 'Nuit', code: 'NU-01', nom: 'Nuisette unie', prix: 4, offre3pour10: true,
    description: 'Nuisette sans manches, coupe ample et fronces sous la poitrine.',
    tailles: M_A_XXXL,
    couleurs: { 'Turquoise': 'nu-turquoise.jpg', 'Rose': 'nu-rose.jpg', 'Blanc': 'nu-blanc.jpg' }
  },
  {
    categorie: 'Nuit', code: 'NU-02', nom: 'Nuisette à pois', prix: 4, offre3pour10: true,
    description: 'Nuisette à fines bretelles, imprimé petits pois et nœud au décolleté.',
    tailles: M_A_XXXL,
    couleurs: { 'Gris': 'np-gris.jpg', 'Blanc': null }
  },
  {
    categorie: 'Nuit', code: 'CN-01', nom: 'Chemise de nuit fleurie', prix: 5,
    description: 'Chemise de nuit en coton, boutons à l’encolure et finitions colorées.',
    tailles: M_A_XXXL,
    choix: { 'Tissu': ['Fin', 'Épais (hiver)'], 'Manches': ['Courtes', 'Longues'] },
    couleurs: { 'Petites fleurs': 'cn-petites.jpg', 'Fleurs roses': 'cn-roses.jpg', 'Fleurs bleues': 'cn-bleues.jpg' }
  },
  {
    categorie: 'Nuit', code: 'EN-01', nom: 'Ensemble de nuit 2 pièces', prix: 5,
    description: 'Haut manches courtes boutonné + pantalon assorti, en coton fleuri.',
    tailles: ['M', 'L', 'XL', 'XXL'],
    couleurs: { 'Fleurs roses': 'en-roses.jpg', 'Fleurs bleues': 'en-bleues.jpg' }
  },
  {
    categorie: 'Nuit', code: 'PY-01', nom: 'Pantalon pyjama fleuri', prix: 4, offre3pour10: true,
    description: 'Pantalon d’intérieur en coton imprimé fleuri, taille élastique.',
    tailles: M_A_XXXL,
    couleurs: {
      'Fleurs bleues': 'py-fleursbleues.jpg', 'Roses bleues': 'py-rosesbleues.jpg',
      'Fleurs violettes': 'py-violettes.jpg', 'Fleurs roses': 'py-roses.jpg'
    }
  }

];
