export type T2Color = {
  id: string;
  name: string;
  hex: string;
  image: string;
};

export const t2Colors: T2Color[] = [
  {
    id: "night-black",
    name: "Noir nuit",
    hex: "#1a1a1a",
    image: "/models/t2/carbon-black.png",
  },
  {
    id: "silver-snow",
    name: "Blanc neige",
    hex: "#cfcfd1",
    image: "/models/t2/silver-snow.png",
  },
  {
    id: "khaki-white",
    name: "Blanc kaki",
    hex: "#e6e1d4",
    image: "/models/t2/khaki-white.png",
  },
  {
    id: "aviation-silver",
    name: "Argent aviation",
    hex: "#8b9198",
    image: "/models/t2/aviation-silver.png",
  },
  {
    id: "lime-green",
    name: "Vert citron",
    hex: "#9caf6a",
    image: "/models/t2/lime-green.png",
  },
  {
    id: "sun-orange",
    name: "Orange soleil",
    hex: "#d85a1a",
    image: "/models/t2/sun-orange.png",
  },
  {
    id: "misty-cyan",
    name: "Cyan brume",
    hex: "#7fa8b0",
    image: "/models/t2/misty-cyan.png",
  },
  {
    id: "sand",
    name: "Sable",
    hex: "#c4b49a",
    image: "/models/t2/sand.png",
  },
];

export const t2Interiors = [
  {
    id: "cabin",
    name: "Habitacle",
    image: "/models/t2/interior-cabin.png",
  },
  {
    id: "black-red",
    name: "Cockpit",
    image: "/models/t2/interior-black-red.png",
  },
  {
    id: "brown",
    name: "i-DM",
    image: "/models/t2/interior-brown.png",
  },
];

export const t2Gallery = [
  {
    src: "/models/t2/headlight.png",
    title: "Maîtrisez la nuit",
    text: "Projecteurs matrix LED et signature JETOUR pour garder le commandement, ville ou piste.",
  },
  {
    src: "/models/t2/tailgate.png",
    title: "Hayon à aspiration",
    text: "Fermeture électrique fluide, précise et silencieuse.",
  },
  {
    src: "/models/t2/rim.png",
    title: "Jantes aluminium",
    text: "Jantes 19\" / 20\" selon version, dessin sculpté et tenue de route plantée.",
  },
  {
    src: "/models/t2/sunroof.png",
    title: "Toit panoramique",
    text: "64 pouces de lumière naturelle pour agrandir l’habitacle.",
  },
  {
    src: "/models/t2/infotainment.png",
    title: "Écran 15,6\"",
    text: "Navigation, audio et commande vocale Hello Jetour sur écran tactile.",
  },
  {
    src: "/models/t2/steering.png",
    title: "Poste de conduite",
    text: "Volant cuir multifonction, palettes et combiné LCD 10,25\".",
  },
  {
    src: "/models/t2/gear.png",
    title: "7 modes de conduite",
    text: "Eco, Sport, Standard, Neige, Sable, Rocher et X-Smart Drive.",
  },
  {
    src: "/models/t2/seats.png",
    title: "Sièges ventilés",
    text: "Sièges avant ventilés, mémoire et fonction d’accueil.",
  },
  {
    src: "/models/t2/sony.png",
    title: "SONY 12 haut-parleurs",
    text: "Chaîne premium 12 canaux pour un habitacle concert.",
  },
  {
    src: "/models/t2/view-360.png",
    title: "Vision 360°",
    text: "Imagerie panoramique autour et sous le véhicule, châssis transparent.",
  },
  {
    src: "/models/t2/steel.png",
    title: "Cage acier",
    text: "Structure monocoque haute rigidité pour absorber les chocs.",
  },
  {
    src: "/models/t2/adas.png",
    title: "ADAS niveau 2",
    text: "ACC, maintien de voie, AEB, détection d’angle mort et aides intelligentes.",
  },
];

export const t2SpecGroups = [
  {
    title: "Carrosserie",
    items: [
      { label: "Catégorie", value: "SUV mid-size" },
      { label: "Structure", value: "Monocoque (Kunlun)" },
      { label: "Places", value: "5 (2+3)" },
      { label: "Longueur", value: "4 785 mm (avec roue de secours) / 4 612 mm" },
      { label: "Largeur", value: "2 006 mm" },
      { label: "Hauteur", value: "1 880 mm" },
      { label: "Empattement", value: "2 800 mm" },
      { label: "Garde au sol", value: "220 mm" },
      { label: "Angle d’attaque / fuite", value: "28° / 30°" },
      { label: "Gué", value: "700 mm" },
      { label: "Coffre", value: "580 L" },
      { label: "Réservoir", value: "70 L" },
      { label: "Masse à vide", value: "1 955 kg" },
      { label: "PTAC", value: "2 255 kg" },
    ],
  },
  {
    title: "Motorisations",
    items: [
      { label: "1.5 TD", value: "1 498 cm³ · 135 kW (184 ch) · 290 N·m" },
      { label: "2.0 TD", value: "1 998 cm³ · 180–187 kW (240–254 ch) · 375–390 N·m" },
      { label: "Régime puissance", value: "5 500 tr/min" },
      { label: "Régime couple 2.0", value: "1 750–4 000 tr/min" },
      { label: "Boîte", value: "DCT 7 rapports (8AT selon marché)" },
      { label: "Traction", value: "2WD ou XWD 4×4 temps réel" },
      { label: "Vitesse max.", value: "180 km/h" },
      { label: "Conso. mixte 2.0", value: "9,3 L/100 km" },
      { label: "CO₂", value: "210 g/km" },
      { label: "Norme", value: "Euro VI B" },
    ],
  },
  {
    title: "Châssis",
    items: [
      { label: "4×4", value: "XWD intelligent BorgWarner" },
      { label: "Différentiel", value: "Glissement limité électronique" },
      { label: "Avant", value: "McPherson" },
      { label: "Arrière", value: "Multilink" },
      { label: "Direction", value: "Assistée électrique" },
      { label: "Freins", value: "Disques ventilés AV / disques AR" },
      { label: "Frein de parking", value: "EPB + Auto Hold" },
      { label: "Pneus", value: "255/55 R20" },
      { label: "Contrôle de rampe", value: "Mode rampe intelligent" },
    ],
  },
  {
    title: "Technologie & confort",
    items: [
      { label: "Puce", value: "Qualcomm Snapdragon 8155" },
      { label: "Écran central", value: "15,6\"" },
      { label: "Combiné", value: "LCD 10,25\"" },
      { label: "Toit", value: "Panoramique" },
      { label: "Audio", value: "SONY 12 haut-parleurs" },
      { label: "Connectivité", value: "CarPlay / Android Auto sans fil" },
      { label: "Charge inductive", value: "50 W" },
      { label: "Climatisation", value: "Bizone automatique" },
      { label: "Ambiance", value: "128 couleurs" },
      { label: "Hayon", value: "Aspiration électrique" },
    ],
  },
  {
    title: "Sécurité",
    items: [
      { label: "Airbags", value: "6 SRS" },
      { label: "ADAS", value: "Niveau 2" },
      { label: "Crash-test", value: "5★ ASEAN NCAP" },
      { label: "Caméras", value: "360° + châssis transparent" },
      { label: "ACC / TJA / ICA", value: "Oui" },
      { label: "AEB / FCW / RCW", value: "Oui" },
      { label: "LDW / LKA / BSD", value: "Oui" },
      { label: "TPMS", value: "Oui" },
      { label: "HHC / HDC", value: "Oui" },
    ],
  },
];

export const t2Features = [
  "Phares LED matrix + feux diurnes",
  "Signature lumineuse « JETOUR »",
  "Feux arrière Light Ray LED",
  "Roue de secours arrière",
  "Hayon à aspiration électrique",
  "Sièges avant à mémoire et accueil",
  "Sièges avant ventilés",
  "Toit panoramique",
  "Palettes au volant",
  "Éclairage d’ambiance multicolore",
  "Écran multimédia 15,6\"",
  "Apple CarPlay & Android Auto sans fil",
  "SONY 12 haut-parleurs",
  "Assistant vocal Hello Jetour",
  "Chargeur induction 50 W",
  "6 airbags SRS",
  "ADAS niveau 2",
  "TPMS",
  "Vision panoramique 360°",
];
