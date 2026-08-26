import type { ModelDetail } from "@/lib/model-detail";

const T1_SPIN_FRAMES = 36;

export const t1Page: ModelDetail = {
  slug: "t1",
  name: "T1",
  series: "Série T · Travel+",
  tagline: "L’allure urbaine, l’esprit aventurier.",
  summary:
    "SUV Travel+ compact i-DM : hybride rechargeable, silhouette angulaire et une présence qui passe de la ville aux pistes.",
  description:
    "JETOUR T1 en RDC : SUV aventure compact i-DM, 342 ch, batterie 26,7 kWh, recharge rapide. Fiche technique, 360° et galerie.",
  pitch:
    "L’heure de s’éveiller. Le T1 relie le style urbain au vrai hors-piste : hybride rechargeable i-DM, 342 ch, recharge 30 à 80 % en 30 min. Compact pour Kinshasa, capable dès que la route s’arrête.",
  chapters: [
    {
      kicker: "Design",
      title: "Ville et piste, une seule silhouette",
      text: "Pionnier du crossover angulaire JETOUR : robuste dehors, élégant dedans. Le T1 n’est pas un 4x4 massif ni une citadine — c’est le format Travel+ pour ceux qui veulent les deux.",
      image: "/models/t1/gallery/aventure.jpg",
    },
    {
      kicker: "Hybride",
      title: "i-DM : 342 ch, batterie 26,7 kWh",
      text: "Recharge rapide, couple immédiat, silence en électrique. Le T1 pense l’énergie comme un voyage : assez pour la ville, assez pour partir plus loin.",
      image: "/models/t1/gallery/recharge.jpg",
    },
    {
      kicker: "Habitacle",
      title: "Intérieur élégant, commandes claires",
      text: "Matériaux soignés, écran large, sièges pensés pour la journée. Le T1 accueille autant qu’il impressionne.",
      image: "/models/t1/gallery/habitacle.jpg",
    },
    {
      kicker: "Conduite",
      title: "Contrôle total, tous les jours",
      text: "Modes de conduite, aides et une direction qui reste précise en ville. L’aventure commence au feu rouge.",
      image: "/models/t1/gallery/confort.jpg",
    },
  ],
  hero: {
    video: "/models/t1/hero.mp4",
    poster: "/models/t1/hero.png",
  },
  heroStats: [
    { value: "26,7", unit: "kWh", label: "Batterie" },
    { value: "30 à 80 %", unit: "/ 30 min", label: "Recharge rapide" },
    { value: "342", unit: "ch", label: "Puissance" },
  ],
  viewer: {
    frameCount: T1_SPIN_FRAMES,
    spinFolder: "/models/t1/spin",
    spinColors: [
      { id: "green", name: "Vert", hex: "#86aeb5" },
      { id: "white", name: "Blanc", hex: "#cecece" },
      { id: "silver-snow", name: "Blanc neige", hex: "#98a2aa" },
      { id: "black", name: "Noir", hex: "#111111" },
      { id: "gold", name: "Or", hex: "#b5b1a6" },
    ],
    panos: [
      {
        id: "black-grey",
        name: "Noir & gris",
        hex: "#101112",
        gradient: "linear-gradient(270deg, #eaeaea 50%, #101112 50%)",
        image: "/models/t1/pano/black-grey.webp",
      },
      {
        id: "black-orange",
        name: "Noir & orange",
        hex: "#b54727",
        gradient: "linear-gradient(270deg, #b54727 50%, #101112 50%)",
        image: "/models/t1/pano/black-orange.webp",
      },
    ],
  },
  gallery: [
    {
      src: "/models/t1/gallery/habitacle.jpg",
      title: "Habitacle spacieux",
      text: "Cinq places, volume généreux et une planche de bord pensée pour les longs trajets urbains.",
    },
    {
      src: "/models/t1/gallery/vitrage.webp",
      title: "Double vitrage insonorisant",
      text: "Le silence de marche hybride, renforcé par un vitrage qui isole de la ville.",
    },
    {
      src: "/models/t1/gallery/sieges.jpg",
      title: "Sièges avant ventilés",
      text: "Confort climatisé à l’avant, pour Kinshasa comme pour la piste.",
    },
    {
      src: "/models/t1/gallery/recharge.jpg",
      title: "Recharge rapide",
      text: "De 30 à 80 % en 30 minutes : l’i-DM reprend la route sans attendre.",
    },
    {
      src: "/models/t1/gallery/ecran.jpg",
      title: "Écran tactile 15,6\"",
      text: "Navigation, audio et commandes du véhicule sur un écran central paysage.",
    },
    {
      src: "/models/t1/gallery/confort.jpg",
      title: "Confort du quotidien",
      text: "Modes EV, HEV et conduite intelligente pour enchaîner ville et périphérie.",
    },
    {
      src: "/models/t1/gallery/aventure.jpg",
      title: "L’aventure à chaque instant",
      text: "Le T1 transforme chaque trajet en nouvelle expérience Travel+.",
    },
    {
      src: "/models/t1/gallery/galerie-1.jpg",
      title: "Posture Travel+",
      text: "Lignes angulaires, protections d’ailes et signature lumineuse de la série T.",
    },
    {
      src: "/models/t1/gallery/galerie-2.webp",
      title: "Détail de carrosserie",
      text: "Teintes studio et finitions contrastées, de l’or au vert brume.",
    },
    {
      src: "/models/t1/gallery/galerie-3.jpg",
      title: "Éclairage et signature",
      text: "Optiques LED et présence nocturne de la T1.",
    },
    {
      src: "/models/t1/gallery/galerie-4.jpg",
      title: "Cockpit connecté",
      text: "Écran 15,6\", combiné numérique et assistant Hello Jetour.",
    },
    {
      src: "/models/t1/gallery/galerie-5.jpg",
      title: "Habitacle i-DM",
      text: "Ambiances noir & gris ou noir & orange, toit panoramique.",
    },
  ],
  specGroups: [
    {
      title: "Carrosserie",
      items: [
        { label: "Catégorie", value: "SUV aventure compact" },
        { label: "Places", value: "5 (2+3)" },
        { label: "Longueur", value: "4 705 mm" },
        { label: "Largeur", value: "1 967 mm" },
        { label: "Hauteur", value: "1 843 mm" },
        { label: "Empattement", value: "2 800 mm" },
        { label: "Garde au sol", value: "190 mm" },
        { label: "Angle d’attaque / fuite", value: "28° / 28°" },
        { label: "Gué", value: "600 mm" },
        { label: "Coffre", value: "574 L" },
        { label: "Masse à vide", value: "2 000 kg" },
        { label: "Pneus", value: "235/60 R19" },
      ],
    },
    {
      title: "Chaîne i-DM",
      items: [
        { label: "Architecture", value: "Hybride rechargeable i-DM" },
        { label: "Moteur thermique", value: "1.5 turbo · 1 499 cm³ · 4 cyl." },
        { label: "Puissance combinée", value: "342 ch" },
        { label: "Batterie", value: "26,7 kWh LFP (LiFePO₄)" },
        { label: "Moteur électrique", value: "Synchrone à aimants permanents · P3" },
        { label: "Recharge DC", value: "30 à 80 % en 30 min" },
        { label: "Recharge AC", value: "< 4 h (30–100 %, 7 kW)" },
        { label: "Autonomie électrique", value: "Jusqu’à 117 km (WLTC)" },
        { label: "Autonomie mixte", value: "Jusqu’à 1 000 km" },
        { label: "Modes", value: "EV, HEV, Eco, Sport, Standard, Neige" },
      ],
    },
    {
      title: "Châssis",
      items: [
        { label: "Structure", value: "Monocoque, > 85 % aciers haute résistance" },
        { label: "Avant", value: "McPherson indépendant" },
        { label: "Arrière", value: "Multilink indépendant" },
        { label: "Direction", value: "Assistée électrique" },
        { label: "Freins", value: "Disques ventilés + EPB" },
        { label: "Protections", value: "Carter moteur, flancs et fond de batterie" },
      ],
    },
    {
      title: "Technologie & confort",
      items: [
        { label: "Écran central", value: "15,6\"" },
        { label: "Toit", value: "Panoramique" },
        { label: "Sièges avant", value: "Ventilés" },
        { label: "Vitrage", value: "Double vitrage insonorisant" },
        { label: "Connectivité", value: "CarPlay / Android Auto" },
        { label: "Assistant", value: "Hello Jetour" },
      ],
    },
    {
      title: "Sécurité",
      items: [
        { label: "ADAS", value: "Régulateur adaptatif, aides à la conduite" },
        { label: "TPMS", value: "Oui" },
        { label: "Airbags", value: "Conducteur et passager (selon version)" },
        { label: "Caméras", value: "Vision autour du véhicule" },
      ],
    },
  ],
  features: [
    "Chaîne i-DM hybride rechargeable",
    "Batterie LFP 26,7 kWh",
    "Recharge rapide 30–80 % en 30 min",
    "Jusqu’à 342 ch combinés",
    "Modes EV, HEV, Eco, Sport, Neige",
    "Écran tactile multimédia 15,6\"",
    "Sièges avant ventilés",
    "Double vitrage insonorisant",
    "Toit panoramique",
    "Jantes 19\"",
    "Protections sous caisse et batterie",
    "Assistant vocal Hello Jetour",
  ],
};
