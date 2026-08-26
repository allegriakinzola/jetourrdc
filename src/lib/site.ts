export const site = {
  name: "JETOUR RDC",
  tagline: "Conduisez votre avenir",
  description:
    "JETOUR en République Démocratique du Congo. Distributeur officiel et exclusif : AMT Motors. Modèles SUV, service après-vente et garantie constructeur.",
  url: "https://jetourrdc.cd",
  phone: "+243 998 890 980",
  phoneHref: "tel:+243998890980",
  email: "marketing@amt-motors.com",
  distributor: {
    name: "AMT Motors",
    legal:
      "AMT Motors est le distributeur officiel et exclusif de JETOUR en République Démocratique du Congo.",
  },
  cities: [
    {
      name: "Kinshasa",
      role: "Showroom & service",
      region: "Capitale",
      text: "Le showroom de la capitale : découvrir les six modèles, réserver un essai, acheter et faire entretenir un JETOUR officiel. Point d’entrée pour Kinshasa et les grands axes.",
      services: ["Showroom", "Essais", "Vente", "Après-vente"],
    },
    {
      name: "Lubumbashi",
      role: "Showroom & service",
      region: "Haut-Katanga",
      text: "Showroom et service au Katanga. Les mêmes modèles, la même garantie constructeur, des techniciens formés à la marque — pour la ville comme pour la province.",
      services: ["Showroom", "Essais", "Vente", "Après-vente"],
    },
    {
      name: "Kolwezi",
      role: "Point de service",
      region: "Lualaba",
      text: "Point de service du réseau AMT Motors : entretien, pièces d’origine et suivi des véhicules achetés dans le circuit officiel.",
      services: ["Service", "Pièces d’origine"],
    },
  ],
} as const;

export const nav = [
  { href: "/modeles", label: "Modèles" },
  { href: "/reseau", label: "Réseau officiel" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
