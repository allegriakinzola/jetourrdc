import type { ModelDetail } from "@/lib/model-detail";

const DASHING_SPIN_FRAMES = 36;

export const dashingPage: ModelDetail = {
  slug: "dashing",
  name: "DASHING",
  series: "Série urbaine",
  tagline: "La technologie en mouvement.",
  summary:
    "Crossover urbain à la ligne fastback : 1.5 et 1.6 essence, cockpit digital, audio Sony et aides à la conduite pour Kinshasa comme pour les grands axes.",
  description:
    "JETOUR Dashing en RDC : SUV compact, 156 et 197 ch, écran 15,8\", HUD, Sony Surround. Fiche technique, 360° et galerie.",
  pitch:
    "Fastback, cockpit paysage, Sony Surround. Le Dashing est le crossover urbain JETOUR : 1.5 ou 1.6 turbo, HUD, charge inductive. La technologie n’est pas un pack — elle est le caractère du modèle, exclusivement chez AMT Motors.",
  chapters: [
    {
      kicker: "Style",
      title: "Ligne fastback, calandre sans cadre",
      text: "Silhouette tendue, jantes sculptées, signature LED. Le Dashing n’est pas un SUV familial massif : c’est le crossover qui coupe la ville, de Gombe aux grands axes.",
      image: "/models/dashing/gallery/galerie-1.webp",
    },
    {
      kicker: "Technologie",
      title: "Écran 15,8\", HUD, cockpit digital",
      text: "Combiné numérique, écran paysage, affichage tête haute. Navigation, aides et commandes du véhicule au centre — la conduite urbaine, connectée.",
      image: "/models/dashing/gallery/ecran.jpg",
    },
    {
      kicker: "Audio",
      title: "Sony Surround, appuie-têtes",
      text: "Chaîne Sony et haut-parleurs d’appuie-tête : l’habitacle devient une scène. Le trajet Kinshasa n’est plus un temps mort.",
      image: "/models/dashing/gallery/sony.webp",
    },
    {
      kicker: "Sécurité",
      title: "Radars, voie, stationnement",
      text: "Aides à manœuvrer, maintien dans la voie, radars. Le Dashing lit la circulation dense et les parkings — pensé pour la ville réelle.",
      image: "/models/dashing/gallery/radars.jpg",
    },
  ],
  hero: {
    video: "/models/dashing/hero.mp4",
    poster: "/models/dashing/hero.png",
  },
  heroStats: [
    { value: "1.5L et 1.6L", label: "Essence" },
    { value: "156 et 197", unit: "ch", label: "Puissance" },
    { value: "5", unit: "places", label: "Habitacle" },
  ],
  viewer: {
    frameCount: DASHING_SPIN_FRAMES,
    spinFolder: "/models/dashing/spin",
    spinColors: [
      { id: "black", name: "Noir", hex: "#000000" },
      { id: "gray", name: "Gris", hex: "#8694ad" },
      { id: "green", name: "Vert", hex: "#3a6a52" },
      { id: "light-gray", name: "Gris clair", hex: "#bcc3c8" },
    ],
    panos: [
      {
        id: "grey-white",
        name: "Gris & blanc",
        hex: "#808080",
        gradient: "linear-gradient(270deg, #808080 50%, #ffffff 50%)",
        image: "/models/dashing/pano/grey-white.jpg",
      },
      {
        id: "black-red",
        name: "Noir & rouge",
        hex: "#111111",
        gradient: "linear-gradient(270deg, #000000 50%, #ff0000 50%)",
        image: "/models/dashing/pano/black-red.jpg",
      },
    ],
  },
  gallery: [
    {
      src: "/models/dashing/gallery/phares.webp",
      title: "Phares LED",
      text: "Signature lumineuse LED, présence nette de jour comme de nuit.",
    },
    {
      src: "/models/dashing/gallery/cle.webp",
      title: "Clé intelligente",
      text: "Accès et démarrage sans clé, pensés pour le quotidien urbain.",
    },
    {
      src: "/models/dashing/gallery/radars.jpg",
      title: "Radars de stationnement",
      text: "Aides à manœuvrer dans les rues et parkings de Kinshasa.",
    },
    {
      src: "/models/dashing/gallery/voie.jpg",
      title: "Maintien dans la voie",
      text: "Assistance de trajectoire pour les longs axes et la voie rapide.",
    },
    {
      src: "/models/dashing/gallery/induction.png",
      title: "Chargeur à induction 40 W",
      text: "Recharge du téléphone sans fil, au centre de la console.",
    },
    {
      src: "/models/dashing/gallery/sony.webp",
      title: "Sony Surround",
      text: "Chaîne Sony et haut-parleurs d’appuie-tête pour un habitacle concert.",
    },
    {
      src: "/models/dashing/gallery/hud.jpg",
      title: "Affichage tête haute",
      text: "Vitesse et aides projetées dans le champ de vision.",
    },
    {
      src: "/models/dashing/gallery/appuie-tete.jpg",
      title: "Audio dans les appuie-têtes",
      text: "Haut-parleurs intégrés pour une scène sonore plus proche.",
    },
    {
      src: "/models/dashing/gallery/ecran.jpg",
      title: "Écran digital 15,8\"",
      text: "Cockpit paysage, navigation et commandes du véhicule au centre.",
    },
    {
      src: "/models/dashing/gallery/aventure.jpg",
      title: "Lignes audacieuses",
      text: "Silhouette fastback, calandre sans cadre, allure urbaine.",
    },
    {
      src: "/models/dashing/gallery/galerie-1.webp",
      title: "Posture Dashing",
      text: "Crossover compact, jantes sculptées et protections contrastées.",
    },
    {
      src: "/models/dashing/gallery/galerie-2.webp",
      title: "Détail de carrosserie",
      text: "Teintes studio : noir, gris, vert et gris clair.",
    },
    {
      src: "/models/dashing/gallery/galerie-3.webp",
      title: "Éclairage",
      text: "Blocs optiques LED et signature arrière.",
    },
    {
      src: "/models/dashing/gallery/galerie-4.jpg",
      title: "Cockpit connecté",
      text: "Écran central, HUD et charge inductive 40 W.",
    },
    {
      src: "/models/dashing/gallery/galerie-5.jpg",
      title: "Habitacle",
      text: "Ambiances gris & blanc ou noir & rouge.",
    },
    {
      src: "/models/dashing/gallery/galerie-6.jpg",
      title: "Conduite urbaine",
      text: "Cinq places, toit ouvrant et confort du quotidien.",
    },
    {
      src: "/models/dashing/gallery/galerie-7.jpg",
      title: "Technologie embarquée",
      text: "ADAS, Sony Surround et cockpit digital.",
    },
  ],
  specGroups: [
    {
      title: "Carrosserie",
      items: [
        { label: "Catégorie", value: "Crossover compact 5 places" },
        { label: "Places", value: "5 (2+3)" },
        { label: "Longueur", value: "4 590 mm" },
        { label: "Largeur", value: "1 900 mm" },
        { label: "Hauteur", value: "1 685 mm" },
        { label: "Empattement", value: "2 720 mm" },
        { label: "Garde au sol", value: "160 mm" },
        { label: "Coffre", value: "977 L (sièges rabattus)" },
        { label: "Réservoir", value: "57 L" },
        { label: "Masse à vide", value: "1 530–1 580 kg" },
        { label: "PTAC", value: "1 888 kg" },
        { label: "Pneus", value: "235/55 R19" },
      ],
    },
    {
      title: "Motorisations",
      items: [
        { label: "1.5 TCI", value: "1 498 cm³ · 115 kW (156 ch) · 230 N·m" },
        { label: "1.6 TGDI", value: "1 598 cm³ · 145 kW (197 ch) · 290 N·m" },
        { label: "Boîte 1.5", value: "DCT 6 rapports" },
        { label: "Boîte 1.6", value: "DCT 7 rapports" },
        { label: "Traction", value: "Avant" },
        { label: "Vitesse max.", value: "180 km/h" },
        { label: "Conso. mixte 1.5", value: "7,8 L/100 km" },
        { label: "CO₂ 1.5", value: "185 g/km" },
        { label: "Norme", value: "Euro VI" },
      ],
    },
    {
      title: "Châssis",
      items: [
        { label: "Avant", value: "McPherson indépendant" },
        { label: "Arrière", value: "Multilink indépendant" },
        { label: "Direction", value: "Assistée électrique" },
        { label: "Freins", value: "Disques ventilés AV / disques AR + EPB" },
        { label: "Modes", value: "Eco / Sport" },
      ],
    },
    {
      title: "Technologie & confort",
      items: [
        { label: "Écran central", value: "15,8\"" },
        { label: "Combiné", value: "Numérique" },
        { label: "HUD", value: "Affichage tête haute" },
        { label: "Audio", value: "Sony Surround + HP d’appuie-tête" },
        { label: "Charge inductive", value: "40 W" },
        { label: "Connectivité", value: "CarPlay / Android Auto" },
        { label: "Toit", value: "Panoramique" },
        { label: "Climatisation", value: "Automatique, filtre CN95" },
      ],
    },
    {
      title: "Sécurité",
      items: [
        { label: "Phares", value: "LED" },
        { label: "Radars", value: "Stationnement" },
        { label: "LKA", value: "Maintien dans la voie" },
        { label: "Clé", value: "Accès intelligent" },
        { label: "ADAS", value: "Aides à la conduite niveau 2" },
      ],
    },
  ],
  features: [
    "Motorisations 1.5 TCI 156 ch et 1.6 TGDI 197 ch",
    "Boîtes DCT 6 ou 7 rapports",
    "Écran digital 15,8\"",
    "Affichage tête haute",
    "Chargeur à induction 40 W",
    "Sonorisation Sony Surround",
    "Haut-parleurs d’appuie-tête",
    "Phares LED",
    "Clé intelligente",
    "Radars de stationnement",
    "Assistance au maintien dans la voie",
    "Toit panoramique",
    "Apple CarPlay & Android Auto",
  ],
};
