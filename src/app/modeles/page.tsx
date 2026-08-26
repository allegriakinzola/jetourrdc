import type { Metadata } from "next";
import Link from "next/link";

import { BrandVideo } from "@/components/brand-video";
import { ModelesCatalog } from "@/components/modeles-catalog";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Modèles",
  description:
    "Les modèles JETOUR en RDC : G700, X50, T1, T2, X70 Plus et Dashing. SUV officiels AMT Motors — urbain, aventure, familial et flagship.",
};

const vocations = [
  {
    n: "01",
    title: "Urbain",
    text: "Compact et crossover pour Kinshasa : stationnement, boulevards, cockpit connecté. Le quotidien, sans le volume d’un grand SUV.",
    models: "X50 · Dashing",
  },
  {
    n: "02",
    title: "Aventure Travel+",
    text: "La série T relie la ville à la piste. T1 hybride rechargeable, T2 4×4 XWD : l’allure urbaine, l’esprit aventurier.",
    models: "T1 · T2",
  },
  {
    n: "03",
    title: "Familial",
    text: "Sept places, toit panoramique, longs trajets. Le X70 Plus est le SUV de la famille et de la province.",
    models: "X70 Plus",
  },
  {
    n: "04",
    title: "Flagship",
    text: "Le G700 : hybride rechargeable premium, 4WD, habitacle 5 ou 6 places. Tout-terrain haut de gamme, exclusivement AMT Motors.",
    models: "G700",
  },
];

export default function ModelesPage() {
  return (
    <div>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="hero-enter text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Modèles officiels
          </p>
          <h1 className="hero-enter hero-d2 mt-4 max-w-3xl font-display text-5xl tracking-[0.08em] text-white md:text-7xl">
            Six SUV.
            <br />
            Six vocations.
          </h1>
          <p className="hero-enter hero-d3 mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Flagship tout-terrain, aventure Travel+, familial 7 places ou compact
            urbain : chaque JETOUR a son usage en RDC, présenté par{" "}
            {site.distributor.name}, distributeur exclusif.
          </p>
          <div className="hero-enter hero-d4 mt-8 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <a href="#catalogue">Voir le catalogue</a>
            </Button>
            <Button asChild variant="inverseOutline">
              <Link href="/contact">Demander un essai</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Comment choisir
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Un modèle, un usage.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {vocations.map((item, index) => (
              <Reveal
                key={item.n}
                as="article"
                delay={index * 80}
                className="bg-white p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {item.n}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-[0.1em] text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  {item.models}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ModelesCatalog />

      <section className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Réseau officiel
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
              Essayer. Comparer. Conduire.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Les six modèles se découvrent en showroom à Kinshasa et Lubumbashi.
              Un essai, un conseil, une garantie constructeur — uniquement via{" "}
              {site.distributor.name}.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <Link href="/contact">Réserver un essai</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/reseau">Le réseau officiel</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
