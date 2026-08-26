import type { ModelDetail } from "@/lib/model-detail";

export const x50Page: ModelDetail = {
  slug: "x50",
  name: "X50",
  series: "Série urbaine",
  tagline: "La ville, sans compromis.",
  summary:
    "Le SUV compact JETOUR pour la ville : 1.5 turbo, cinq places et une silhouette facile à vivre à Kinshasa comme sur les grands axes.",
  description:
    "JETOUR X50 en RDC : SUV compact 1.5 TCI 156 ch, DCT 6, cinq places. Fiche technique, teintes 360° et galerie.",
  pitch:
    "Aisance en ville, présence sur l’avenue. Le X50 est le crossover 5 places pour Kinshasa : 1.5 turbo, stationnement simple, cockpit connecté. Le quotidien, élevé — exclusivement AMT Motors.",
  chapters: [
    {
      kicker: "Style",
      title: "Crossover contemporain",
      text: "Calandre verticale, LED, jantes 18\" : le X50 a l’allure d’un SUV, le gabarit d’une voiture de tous les jours. Pensé pour les rues étroites autant que pour le boulevard.",
      image: "/models/x50/gallery/p2-1.jpg",
    },
    {
      kicker: "Usage",
      title: "Cinq places, format agile",
      text: "1.5 TCI 156 ch, DCT 6, coffre modulable. Le X50 enchaîne courses, bureau, week-end — sans le volume d’un grand SUV.",
      image: "/models/x50/gallery/p2-2.jpg",
    },
    {
      kicker: "Technologie",
      title: "Écran 10,25\", caméra 360°",
      text: "Infotainment, connectivité, aides à la conduite. Le compact n’est plus le modèle « en moins » : c’est le plus facile à vivre.",
      image: "/models/x50/gallery/infotainment.jpg",
    },
    {
      kicker: "Confort",
      title: "Toit ouvrant, sellerie soignée",
      text: "Habitacle lumineux, sièges cuir, finitions urbaines. Le X50 rend le trajet quotidien plus net.",
      image: "/models/x50/gallery/01.webp",
    },
  ],
  hero: {
    video: "/models/x50/hero.mp4",
    poster: "/models/x50/hero.jpg",
  },
  heroStats: [
    { value: "1.5", unit: "TCI", label: "Moteur turbo" },
    { value: "156", unit: "ch", label: "Puissance max." },
    { value: "230", unit: "N·m", label: "Couple" },
    { value: "5", unit: "places", label: "Habitacle" },
  ],
  viewer: {
    frameCount: 36,
    spinFolder: "/models/x50/spin",
    spinExt: "webp",
    spinColors: [
      { id: "white", name: "Blanc", hex: "#EDEDED" },
      { id: "black", name: "Noir", hex: "#111111" },
      { id: "blue", name: "Bleu", hex: "#1F4E79" },
      { id: "silver", name: "Argent", hex: "#C5C8CC" },
      { id: "gray", name: "Gris phantom", hex: "#6D737A" },
    ],
    panos: [
      {
        id: "cockpit",
        name: "Habitacle",
        hex: "#1a1a1a",
        image: "/models/x50/pano/cockpit.jpg",
      },
    ],
  },
  gallery: [
    {
      src: "/models/x50/gallery/p2-1.jpg",
      title: "Esprit urbain",
      text: "Silhouette compacte, calandre verticale et signature LED : le X50 est pensé pour Kinshasa comme pour les grands axes.",
    },
    {
      src: "/models/x50/gallery/p2-2.jpg",
      title: "Au quotidien",
      text: "Format agile, cinq places et une conduite facile en ville.",
    },
    {
      src: "/models/x50/gallery/p2-3.jpg",
      title: "Compact, vif",
      text: "Crossover urbain : présence nette sans encombrement, coffre modulable 398–1 262 L.",
    },
    {
      src: "/models/x50/gallery/01.webp",
      title: "Sièges cuir, surpiqûres rouges",
      text: "Habitacle noir & rouge, sellerie matelassée et toit ouvrant panoramique.",
    },
    {
      src: "/models/x50/gallery/calandre.jpg",
      title: "Calandre JETOUR",
      text: "Face avant sculptée, calandre pleine largeur et optiques LED.",
    },
    {
      src: "/models/x50/gallery/phare.jpg",
      title: "Optiques LED",
      text: "Phares LED et signature lumineuse, de jour comme de nuit.",
    },
    {
      src: "/models/x50/gallery/jante.jpg",
      title: "Jantes 18\"",
      text: "Pneus 215/55 R18, disques et EPB : châssis calibré pour la ville et la route.",
    },
    {
      src: "/models/x50/gallery/dimensions.jpg",
      title: "4 397 mm",
      text: "Empattement 2 601 mm dans un gabarit compact : habitabilité et manœuvrabilité.",
    },
    {
      src: "/models/x50/gallery/infotainment.jpg",
      title: "Double écran 10,25\"",
      text: "Combiné numérique et écran central, CarPlay et Android Auto.",
    },
    {
      src: "/models/x50/interior/p3-3.jpg",
      title: "McPherson + multilink",
      text: "Train avant McPherson, arrière multilink indépendant, disques et EPB.",
    },
  ],
  specGroups: [
    {
      title: "Carrosserie",
      items: [
        { label: "Catégorie", value: "SUV compact 5 places" },
        { label: "Portes / places", value: "5 / 5" },
        { label: "Longueur", value: "4 397 mm" },
        { label: "Largeur", value: "1 841 mm" },
        { label: "Hauteur", value: "1 654 mm" },
        { label: "Empattement", value: "2 601 mm" },
        { label: "Coffre", value: "398–1 262 L" },
        { label: "Réservoir", value: "45 L" },
        { label: "Pneus", value: "215/55 R18" },
      ],
    },
    {
      title: "Moteur",
      items: [
        { label: "Architecture", value: "1.5 TCI essence · traction" },
        { label: "Cylindrée", value: "1 498 cm³" },
        { label: "Puissance", value: "115 kW / 156 ch" },
        { label: "Couple", value: "230 N·m" },
        { label: "Transmission", value: "DCT 6 rapports" },
        { label: "Traction", value: "Avant (FWD)" },
      ],
    },
    {
      title: "Châssis",
      items: [
        { label: "Avant", value: "McPherson indépendante" },
        { label: "Arrière", value: "Multibras indépendante" },
        { label: "Freins", value: "Disques + EPB" },
        { label: "Direction", value: "Assistée électrique" },
      ],
    },
    {
      title: "Technologie & confort",
      items: [
        { label: "Combiné", value: "10,25\"" },
        { label: "Écran central", value: "10,25\"" },
        { label: "Connectivité", value: "CarPlay / Android Auto" },
        { label: "Audio", value: "6 haut-parleurs" },
        { label: "Toit", value: "Ouvrant (finition Premium)" },
        { label: "Caméra", value: "360° (finition Premium)" },
      ],
    },
    {
      title: "Sécurité",
      items: [
        { label: "Airbags", value: "6" },
        { label: "Aides", value: "ABS, EBD, ESP, HHC" },
        { label: "Caméras", value: "Recul · 360° selon finition" },
      ],
    },
  ],
  features: [
    "1.5 TCI 156 ch et 230 N·m",
    "Boîte DCT 6 rapports",
    "Cinq places, coffre 398–1 262 L",
    "Double écran 10,25\"",
    "CarPlay et Android Auto",
    "Jantes 18\" · 215/55 R18",
    "Toit ouvrant (Premium)",
    "Caméra 360° (Premium)",
    "6 airbags",
    "Format compact pensé pour la ville",
  ],
};
