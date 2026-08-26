export type HeroStat = {
  value: string;
  unit?: string;
  label: string;
};

export type GalleryItem = {
  src: string;
  title: string;
  text: string;
};

export type SpecItem = {
  label: string;
  value: string;
};

export type SpecGroup = {
  title: string;
  items: SpecItem[];
};

export type ColorSwatch = {
  id: string;
  name: string;
  hex: string;
  gradient?: string;
  image?: string;
};

export type PanoSwatch = ColorSwatch & {
  image: string;
};

export type Viewer360Config = {
  frameCount?: number;
  spinFolder?: string;
  spinExt?: "png" | "webp";
  spinColors: readonly ColorSwatch[];
  panos?: readonly PanoSwatch[];
  interiors?: readonly PanoSwatch[];
};

export type ModelChapter = {
  kicker: string;
  title: string;
  text: string;
  image: string;
};

export type ModelDetail = {
  slug: string;
  name: string;
  series: string;
  tagline: string;
  summary: string;
  description: string;
  /** Accroche marketing longue, sous le hero — un modèle, un récit. */
  pitch?: string;
  chapters?: readonly ModelChapter[];
  hero: {
    video?: string;
    poster: string;
  };
  heroStats: HeroStat[];
  viewer?: Viewer360Config;
  gallery: GalleryItem[];
  specGroups: SpecGroup[];
  features: string[];
};
