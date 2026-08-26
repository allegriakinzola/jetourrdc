import type { ModelDetail } from "@/lib/model-detail";

export const x70PlusPage: ModelDetail = {
  slug: "x70-plus",
  name: "X70 PLUS",
  series: "Série familiale",
  tagline: "L’espace du voyage, tous les jours.",
  summary:
    "SUV 7 places de la lignée X70, premier produit JETOUR. Confort, technologie embarquée et volume utile pour la famille et les longs trajets.",
  description:
    "JETOUR X70 Plus en RDC : SUV familial 7 places, 1.5 et 1.6 turbo jusqu’à 197 ch. Fiche technique, teintes 360° et galerie.",
  pitch:
    "Le premier produit JETOUR, en version Plus : sept places, toit panoramique, 1.6 turbo jusqu’à 197 ch. De Kinshasa à la province, le X70 Plus est le SUV familial du réseau AMT Motors — l’espace du voyage, tous les jours.",
  chapters: [
    {
      kicker: "Famille",
      title: "Sept places, trois rangées",
      text: "Empattement 2 745 mm, habitacle généreux, hayon accessible. Le X70 Plus accueille la famille et les bagages sans choisir entre confort et volume. Le SUV des trajets longs, et des dimanches en ville.",
      image: "/models/x70-plus/gallery/luxe.jpg",
    },
    {
      kicker: "Confort",
      title: "Toit panoramique, lumière partout",
      text: "Trois rangées sous un toit pleine largeur. Clim, sellerie soignée, silence de roulement : le quotidien familial n’est plus un compromis, c’est un standing.",
      image: "/models/x70-plus/gallery/confort.jpg",
    },
    {
      kicker: "Présence",
      title: "Calandre, LED, jantes 20\"",
      text: "Face avant octogonale, signature lumineuse, protections d’ailes. Le X70 Plus a l’allure d’un grand SUV — celle qu’on remarque sur Boulevard du 30 Juin comme sur la nationale.",
      image: "/models/x70-plus/gallery/01.webp",
    },
    {
      kicker: "Technologie",
      title: "Aides à la conduite, écran numérique",
      text: "Planche de bord 10,25\", ACC et aides au quotidien. Le familial n’est pas le modèle « simple » : c’est celui qui protège tout le monde à bord.",
      image: "/models/x70-plus/gallery/acc.jpg",
    },
  ],
  hero: {
    video: "/models/x70-plus/hero.mp4",
    poster: "/models/x70-plus/gallery/luxe.jpg",
  },
  heroStats: [
    { value: "1.6", unit: "turbo", label: "Moteur" },
    { value: "197", unit: "ch", label: "Puissance max." },
    { value: "290", unit: "N·m", label: "Couple" },
    { value: "7", unit: "places", label: "Habitacle" },
  ],
  viewer: {
    frameCount: 36,
    spinFolder: "/models/x70-plus/spin",
    spinColors: [
      { id: "white", name: "Blanc", hex: "#EDEDED" },
      { id: "black", name: "Noir nuit", hex: "#111111" },
      { id: "gray", name: "Gris tech", hex: "#6D737A" },
      { id: "green", name: "Vert auroral", hex: "#3A5F4B" },
    ],
    panos: [
      {
        id: "noir",
        name: "Noir",
        hex: "#111111",
        image: "/models/x70-plus/pano/noir.jpg",
      },
      {
        id: "brun",
        name: "Brun",
        hex: "#8b4513",
        image: "/models/x70-plus/pano/brun.jpg",
      },
    ],
  },
  gallery: [
    {
      src: "/models/x70-plus/gallery/luxe.jpg",
      title: "L’espace du voyage",
      text: "SUV 7 places, empattement 2 745 mm : la lignée X70 pour la famille et les longs trajets.",
    },
    {
      src: "/models/x70-plus/gallery/confort.jpg",
      title: "Confort tous les jours",
      text: "Trois rangées, toit panoramique et habitacle pensé pour Kinshasa comme pour la province.",
    },
    {
      src: "/models/x70-plus/gallery/01.webp",
      title: "Présence familiale",
      text: "Calandre, optiques LED et jantes 20\" : le premier produit JETOUR, en version Plus.",
    },
    {
      src: "/models/x70-plus/gallery/profil.jpg",
      title: "Profil 4 749 mm",
      text: "Gabarit généreux, protections d’ailes et ligne de SUV familial.",
    },
    {
      src: "/models/x70-plus/gallery/arriere.jpg",
      title: "Signature arrière",
      text: "Feux LED et hayon : accès facile à la troisième rangée et au coffre.",
    },
    {
      src: "/models/x70-plus/gallery/toit.jpg",
      title: "Toit panoramique",
      text: "Toit ouvrant pleine largeur pour un habitacle lumineux aux trois rangées.",
    },
    {
      src: "/models/x70-plus/gallery/phare.jpg",
      title: "Calandre et LED",
      text: "Calandre octogonale, lettrage JETOUR et signature lumineuse LED.",
    },
    {
      src: "/models/x70-plus/gallery/jante.jpg",
      title: "Jantes 20\"",
      text: "Pneus 255/45 R20, disques et EPB : châssis calibré pour la route et la ville.",
    },
    {
      src: "/models/x70-plus/gallery/feux.jpg",
      title: "Feux arrière LED",
      text: "Bandeau lumineux et présence nette à l’arrière.",
    },
    {
      src: "/models/x70-plus/gallery/acc.jpg",
      title: "Aides à la conduite",
      text: "Régulateur adaptatif, freinage d’urgence et détection d’angle mort selon finition.",
    },
  ],
  specGroups: [
    {
      title: "Carrosserie",
      items: [
        { label: "Catégorie", value: "SUV familial 7 places" },
        { label: "Portes / places", value: "5 / 7 (3e rangée amovible)" },
        { label: "Longueur", value: "4 749 mm" },
        { label: "Largeur", value: "1 900 mm" },
        { label: "Hauteur", value: "1 720 mm" },
        { label: "Empattement", value: "2 745 mm" },
        { label: "Garde au sol", value: "190 mm" },
        { label: "Coffre", value: "Jusqu’à ~1 680 L (sièges rabattus)" },
        { label: "Réservoir", value: "57 L" },
        { label: "Pneus", value: "255/45 R20" },
      ],
    },
    {
      title: "Moteur",
      items: [
        { label: "1.5 TCI", value: "1 498 cm³ · 156 ch · 230 N·m · DCT 6" },
        { label: "1.6 turbo", value: "1 598 cm³ · 197 ch · 290 N·m · DCT 7" },
        { label: "Traction", value: "Avant (FWD)" },
        { label: "Norme", value: "Euro 5" },
      ],
    },
    {
      title: "Châssis",
      items: [
        { label: "Avant", value: "McPherson indépendante" },
        { label: "Arrière", value: "Multibras indépendante" },
        { label: "Freins", value: "Disques + EPB" },
        { label: "Direction", value: "Assistée électrique" },
        { label: "Modes", value: "Eco / Sport / Normal" },
      ],
    },
    {
      title: "Technologie & confort",
      items: [
        { label: "Combiné", value: "10,25\"" },
        { label: "Écran central", value: "10,25\"" },
        { label: "Connectivité", value: "CarPlay / Android Auto" },
        { label: "Toit", value: "Panoramique pleine largeur" },
        { label: "Climatisation", value: "Auto · aérateurs 2e et 3e rangées" },
        { label: "Charge induction", value: "50 W (selon finition)" },
        { label: "Caméra", value: "360° (selon finition)" },
      ],
    },
    {
      title: "Sécurité",
      items: [
        { label: "Airbags", value: "6" },
        { label: "ADAS", value: "ACC, AEB, BSD, LDW selon finition" },
        { label: "Aides", value: "ABS, EBD, ESP, HHC, HDC" },
      ],
    },
  ],
  features: [
    "Habitacle 7 places, empattement 2 745 mm",
    "1.5 TCI 156 ch ou 1.6 turbo 197 ch",
    "Boîte DCT 6 ou 7 rapports",
    "Double écran 10,25\"",
    "CarPlay et Android Auto",
    "Toit panoramique",
    "Jantes 20\" · 255/45 R20",
    "Caméra 360° (selon finition)",
    "Chargeur à induction 50 W",
    "ADAS : ACC, AEB, angle mort",
    "6 airbags",
    "Clim aux trois rangées",
  ],
};
