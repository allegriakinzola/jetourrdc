export type ModelStatus = "disponible" | "sur-demande";

export type HomeStat = {
  value: string;
  unit?: string;
  label: string;
};

export type VehicleModel = {
  slug: string;
  name: string;
  label: string;
  series: string;
  tagline: string;
  summary: string;
  category: string;
  status: ModelStatus;
  seats: string;
  image: string;
  showcaseImage?: string;
  icon: string;
  video?: string;
  accent: string;
  motif: string;
  homeStats: HomeStat[];
  specs: { label: string; value: string }[];
  highlights: string[];
  colors: { name: string; hex: string }[];
  powertrains: string[];
};

export const models: VehicleModel[] = [
  {
    slug: "g700",
    name: "G700",
    label: "G700",
    series: "Série G · Travel+",
    tagline: "Au-delà de l’horizon.",
    summary:
      "SUV hybride rechargeable premium : 2.0 TD, 904 ch, 4WD et un habitacle 5 ou 6 places pensé pour la piste comme pour la ville.",
    category: "SUV tout-terrain premium",
    status: "disponible",
    seats: "6",
    image: "/models/g700.png",
    showcaseImage: "/models/showcase/g700.png",
    icon: "/models/icons/g700.png",
    video: "/models/g700.mp4",
    accent: "#4A5560",
    motif: "L’esprit exploration",
    homeStats: [
      { value: "904", unit: "ch", label: "Puissance" },
      { value: "6", unit: "places", label: "Habitacle" },
      { value: "Air + magnétique", label: "Suspension" },
    ],
    specs: [
      { label: "Chaîne", value: "PHEV 2.0 TD 4WD" },
      { label: "Puissance", value: "904 ch" },
      { label: "Couple", value: "1 135 N·m" },
      { label: "Places", value: "5 ou 6" },
      { label: "Batterie", value: "34,13 kWh LFP" },
      { label: "0–100 km/h", value: "4,6 s" },
    ],
    highlights: [
      "Hybride rechargeable 904 ch / 1 135 N·m",
      "Suspension pneumatique + magnétique",
      "Tank turn, crawl et gué 900 mm",
      "Audio Lexicon et cockpit multi-écrans",
    ],
    colors: [
      { name: "Blanc", hex: "#EDEDED" },
      { name: "Noir", hex: "#111111" },
      { name: "Argent", hex: "#C5C8CC" },
      { name: "Bleu", hex: "#1E3A5F" },
      { name: "Marron", hex: "#6B4A32" },
      { name: "Orange", hex: "#D85A1A" },
    ],
    powertrains: ["PHEV 2.0 TD · 904 ch · 4WD"],
  },
  {
    slug: "x50",
    name: "X50",
    label: "X50",
    series: "Série urbaine",
    tagline: "La ville, sans compromis.",
    summary:
      "Le SUV compact JETOUR pour la ville : 1.5 turbo, cinq places et une silhouette facile à vivre à Kinshasa comme sur les grands axes.",
    category: "SUV compact 5 places",
    status: "disponible",
    seats: "5",
    image: "/models/x50.png",
    showcaseImage: "/models/showcase/x50.png",
    icon: "/models/icons/x50.png",
    video: "/models/x50/hero.mp4",
    accent: "#5B8A96",
    motif: "L’esprit urbain",
    homeStats: [
      { value: "1.5L Turbo", label: "Motorisation" },
      { value: "156", unit: "CH", label: "Puissance" },
      { value: "5", unit: "places", label: "Habitacle" },
    ],
    specs: [
      { label: "Cylindrée", value: "1 498 cm³" },
      { label: "Puissance", value: "156 ch" },
      { label: "Couple", value: "230 N·m" },
      { label: "Places", value: "5" },
      { label: "Transmission", value: "DCT 6 rapports" },
      { label: "Garantie", value: "6 ans" },
    ],
    highlights: [
      "Format compact pensé pour la ville",
      "1.5 turbo essence, conduite agile",
      "Cockpit numérique et connectivité",
      "Cinq places et coffre modulable",
    ],
    colors: [
      { name: "Blanc", hex: "#EDEDED" },
      { name: "Noir", hex: "#111111" },
      { name: "Bleu", hex: "#1F4E79" },
      { name: "Argent", hex: "#C5C8CC" },
      { name: "Gris phantom", hex: "#6D737A" },
    ],
    powertrains: ["1.5 turbo essence"],
  },
  {
    slug: "t1",
    name: "T1",
    label: "T1",
    series: "Série T · Travel+",
    tagline: "L’allure urbaine, l’esprit aventurier.",
    summary:
      "Le SUV Travel+ compact : lignes angulaires, i-DM hybride rechargeable et une présence qui passe de la ville aux pistes.",
    category: "SUV aventure compact",
    status: "disponible",
    seats: "5",
    image: "/models/t1-image.webp",
    showcaseImage: "/models/showcase/t1.png",
    icon: "/models/icons/t1.png",
    video: "/models/t1/hero.mp4",
    accent: "#3D9B8F",
    motif: "L’esprit aventurier",
    homeStats: [
      { value: "26,7", unit: "kWh", label: "Batterie" },
      { value: "342", unit: "CH", label: "Puissance" },
      { value: "30 à 80 % / 30 min", label: "Recharge rapide" },
    ],
    specs: [
      { label: "Chaîne", value: "i-DM hybride rechargeable" },
      { label: "Batterie", value: "26,7 kWh" },
      { label: "Puissance", value: "342 ch" },
      { label: "Places", value: "5" },
      { label: "Recharge", value: "30 à 80 % en 30 min" },
      { label: "Garantie", value: "6 ans" },
    ],
    highlights: [
      "Hybride rechargeable i-DM",
      "Silhouette Travel+ compacte",
      "Recharge rapide 30–80 %",
      "Modes de conduite ville et aventure",
    ],
    colors: [
      { name: "Blanc", hex: "#EDEDED" },
      { name: "Noir", hex: "#111111" },
      { name: "Gris", hex: "#6D737A" },
      { name: "Vert", hex: "#2F4F3E" },
    ],
    powertrains: ["i-DM 1.5T PHEV · 342 ch"],
  },
  {
    slug: "t2",
    name: "T2",
    label: "T2",
    series: "Série T · Travel+",
    tagline: "Osez dominer.",
    summary:
      "Le SUV d’aventure JETOUR : lignes angulaires, XWD intelligent et modes de conduite pour la ville comme pour les pistes du Katanga ou du Kivu.",
    category: "SUV aventure",
    status: "disponible",
    seats: "5",
    image: "/models/t2/khaki-white.png",
    showcaseImage: "/models/showcase/t2.png",
    icon: "/models/icons/t2.png",
    video: "/models/t2/hero.mp4",
    accent: "#C45A12",
    motif: "L’esprit aventure",
    homeStats: [
      { value: "2.0L Essence", label: "Motorisation" },
      { value: "254", unit: "CH", label: "Puissance" },
      { value: "4x4", label: "Motricité" },
    ],
    specs: [
      { label: "Dimensions", value: "4 785 × 2 006 × 1 880 mm" },
      { label: "Empattement", value: "2 800 mm" },
      { label: "Puissance", value: "135 à 254 ch" },
      { label: "Couple", value: "290 à 390 N·m" },
      { label: "Transmission", value: "XWD · DCT 7" },
      { label: "Garantie", value: "6 ans" },
    ],
    highlights: [
      "Système 4×4 intelligent XWD BorgWarner",
      "Modes de conduite et mode rampe intelligent",
      "Motorisations 1.5 turbo et 2.0 turbo",
      "Habitacle haute technologie, éclairage d’ambiance",
    ],
    colors: [
      { name: "Noir nuit", hex: "#1a1a1a" },
      { name: "Blanc neige", hex: "#cfcfd1" },
      { name: "Blanc kaki", hex: "#e6e1d4" },
      { name: "Argent aviation", hex: "#8b9198" },
      { name: "Vert citron", hex: "#9caf6a" },
      { name: "Orange soleil", hex: "#d85a1a" },
      { name: "Cyan brume", hex: "#7fa8b0" },
      { name: "Sable", hex: "#c4b49a" },
    ],
    powertrains: ["1.5 turbo 135 ch", "2.0 turbo 254 ch · XWD"],
  },
  {
    slug: "x70-plus",
    name: "X70 PLUS",
    label: "X70 Plus",
    series: "Série familiale",
    tagline: "L’espace du voyage, tous les jours.",
    summary:
      "SUV 7 places de la lignée X70, premier produit JETOUR. Confort, technologie embarquée et volume utile pour la famille et les longs trajets.",
    category: "SUV 7 places",
    status: "disponible",
    seats: "7",
    image: "/models/x70-plus.png",
    showcaseImage: "/models/showcase/x70-plus.png",
    icon: "/models/icons/x70-plus.png",
    video: "/models/x70-plus/hero.mp4",
    accent: "#8A1C1C",
    motif: "L’esprit famille",
    homeStats: [
      { value: "1.6L Turbo", label: "Motorisation" },
      { value: "197", unit: "CH", label: "Puissance" },
      { value: "7", unit: "places", label: "Habitacle" },
    ],
    specs: [
      { label: "Cylindrée", value: "1 598 cm³" },
      { label: "Puissance", value: "197 ch" },
      { label: "Couple", value: "290 N·m" },
      { label: "Places", value: "7" },
      { label: "Transmission", value: "DCT 6/7 rapports" },
      { label: "Toit", value: "Panoramique" },
    ],
    highlights: [
      "Motorisations 1.5 et 1.6 turbo",
      "Planche de bord numérique 10,25\"",
      "Toit panoramique pleine largeur",
      "Sièges sport et matériaux premium",
    ],
    colors: [
      { name: "Blanc", hex: "#EDEDED" },
      { name: "Noir nuit", hex: "#111111" },
      { name: "Gris tech", hex: "#6D737A" },
      { name: "Vert auroral", hex: "#3A5F4B" },
    ],
    powertrains: ["1.5 turbo", "1.6 turbo 197 ch"],
  },
  {
    slug: "dashing",
    name: "DASHING",
    label: "Dashing",
    series: "Série urbaine",
    tagline: "La technologie en mouvement.",
    summary:
      "Le crossover urbain pensé pour Kinshasa et les grands axes : silhouette fastback, cockpit triple écran et conduite agile au quotidien.",
    category: "Crossover 5 places",
    status: "disponible",
    seats: "5",
    image: "/models/dashing.png",
    showcaseImage: "/models/showcase/dashing.png",
    icon: "/models/icons/dashing.png",
    video: "/models/dashing/hero.mp4",
    accent: "#6B7C8A",
    motif: "L’esprit technologie",
    homeStats: [
      { value: "1.5L et 1.6L Essence", label: "Motorisation" },
      { value: "156 et 197", unit: "CH", label: "Puissance" },
      { value: "5", unit: "places", label: "Habitacle" },
    ],
    specs: [
      { label: "Cylindrée", value: "1 498 cm³" },
      { label: "Puissance", value: "135 ch" },
      { label: "Couple", value: "290 N·m" },
      { label: "Places", value: "5" },
      { label: "Transmission", value: "DCT 6/7 rapports" },
      { label: "Garantie", value: "6 ans" },
    ],
    highlights: [
      "Calandre sans cadre et ligne fastback",
      "Écran central 15,6\" et combiné numérique",
      "Aide à la conduite ADAS",
      "Toit ouvrant et habitacle lumineux",
    ],
    colors: [
      { name: "Noir", hex: "#111111" },
      { name: "Bleu", hex: "#1F4E79" },
      { name: "Gris clair", hex: "#A7ADB4" },
      { name: "Blanc", hex: "#EDEDED" },
    ],
    powertrains: ["1.5 turbo essence", "1.6 turbo essence"],
  },
];

export function getModel(slug: string) {
  return models.find((model) => model.slug === slug);
}

export const availableModels = models.filter((model) => model.status === "disponible");
