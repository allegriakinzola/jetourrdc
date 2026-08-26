import type { ModelDetail } from "@/lib/model-detail";
import { t2Features, t2Gallery, t2SpecGroups } from "@/lib/t2";
import { T2_SPIN_FRAMES, t2Panos, t2SpinColors } from "@/lib/t2-360";

export const t2Page: ModelDetail = {
  slug: "t2",
  name: "T2",
  series: "Série T · Travel+",
  tagline: "Osez dominer.",
  summary:
    "Le SUV d’aventure JETOUR : lignes angulaires, XWD intelligent et modes de conduite pour la ville comme pour les pistes.",
  description:
    "JETOUR T2 en RDC : SUV aventure Travel+, XWD, 2.0 turbo, ADAS niveau 2. Fiche technique, teintes et galerie officielle.",
  pitch:
    "De Kinshasa aux pistes du Kivu : le T2 est taillé pour commander le terrain. Carrosserie hardcore, XWD intelligent, habitacle de cockpit. L’allure urbaine, l’esprit aventurier — sans choisir l’un ou l’autre.",
  chapters: [
    {
      kicker: "Style",
      title: "Carrosserie hardcore, présence maximale",
      text: "4 785 × 2 006 mm, empattement 2 800 mm, calandre matricielle. Le T2 ne se fond pas dans la circulation : il la traverse. Protections, jantes, signature LED — chaque ligne dit l’aventure.",
      image: "/models/t2/headlight.png",
    },
    {
      kicker: "Tout-terrain",
      title: "XWD. Modes. Rampe intelligente.",
      text: "Transmission 4×4 BorgWarner, modes de conduite, châssis prêt pour la latérite comme pour l’asphalte. Le T2 n’est pas un SUV de showroom : c’est un outil de terrain, vendu et servi par AMT Motors.",
      image: "/models/t2/steel.png",
    },
    {
      kicker: "À bord",
      title: "Confort, commandes, contrôle",
      text: "Écran 15,6\", audio Sony, sièges pensés pour les longs trajets. Le T2 relie la ville au voyage : même cabine, deux mondes.",
      image: "/models/t2/seats.png",
    },
    {
      kicker: "Sécurité",
      title: "ADAS niveau 2, vision 360°",
      text: "Aides à la conduite, caméras, châssis transparent. Sur boulevard comme en piste, le T2 garde l’œil autour du véhicule.",
      image: "/models/t2/adas.png",
    },
  ],
  hero: {
    video: "/models/t2/hero.mp4",
    poster: "/models/t2/hero.png",
  },
  heroStats: [
    { value: "1,998", unit: "cm³", label: "Moteur 2.0 TD" },
    { value: "240", unit: "ch", label: "Puissance max." },
    { value: "375", unit: "N·m", label: "Couple" },
    { value: "7", unit: "DCT", label: "Transmission" },
  ],
  viewer: {
    frameCount: T2_SPIN_FRAMES,
    spinFolder: "/models/t2/spin",
    spinColors: t2SpinColors,
    panos: t2Panos,
  },
  gallery: t2Gallery,
  specGroups: t2SpecGroups,
  features: t2Features,
};
