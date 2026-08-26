export const T2_SPIN_FRAMES = 36;

export const t2SpinColors = [
  { id: "night-black", name: "Noir nuit", hex: "#22262d" },
  { id: "silver-snow", name: "Blanc neige", hex: "#b7bec7" },
  { id: "white", name: "Blanc", hex: "#ffffff" },
  { id: "misty-cyan", name: "Cyan brume", hex: "#5c6574" },
  { id: "sand", name: "Sable", hex: "#e0d0b2" },
  { id: "green", name: "Vert", hex: "#7b8b86" },
] as const;

export const t2Panos = [
  {
    id: "noir",
    name: "Noir",
    hex: "#111111",
    image: "/models/t2/pano/noir.jpg",
  },
  {
    id: "brun",
    name: "Brun",
    hex: "#8b4513",
    image: "/models/t2/pano/brun.jpg",
  },
] as const;

export function t2SpinFrame(colorId: string, index: number) {
  return `/models/t2/spin/${colorId}/${index}.png`;
}
