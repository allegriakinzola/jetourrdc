import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";

import { BrandVideo } from "@/components/brand-video";
import { ExclusiveBanner } from "@/components/exclusive-banner";
import { GammeShowcase } from "@/components/gamme-showcase";
import { JetourLogo } from "@/components/jetour-logo";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="hero-enter hero-d1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
            République Démocratique du Congo
          </p>
          <h1 className="hero-enter hero-d2 mt-5 max-w-3xl font-display text-5xl leading-[0.92] tracking-[0.06em] text-white sm:text-7xl md:text-8xl">
            Conduisez
            <br />
            votre avenir
          </h1>
          <p className="hero-enter hero-d3 mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            La marque Travel+ du groupe Chery. SUV, aventure et service officiel
            via {site.distributor.name}, distributeur exclusif JETOUR en RDC.
          </p>
          <div className="hero-enter hero-d4 mt-10 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <Link href="/modeles">Explorer les modèles</Link>
            </Button>
            <Button asChild variant="inverseOutline">
              <Link href="/reseau">Réseau officiel</Link>
            </Button>
          </div>
          <div className="hero-enter hero-d5 mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/70">
            <ArrowDown className="scroll-hint size-4" />
            Défiler
          </div>
        </div>
      </section>

      <ExclusiveBanner />

      <GammeShowcase />

      <section className="relative min-h-[70vh] overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />
        <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-7xl items-end gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <Reveal variant="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              02 — Travel+
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-white md:text-6xl">
              Plus qu’un SUV.
              <br />
              Un voyage.
            </h2>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="space-y-6 text-base leading-relaxed text-white/80">
              <p>
                JETOUR vient de « jet » et « tour » : le voyage rendu plus
                simple. La stratégie Travel+ relie le véhicule, les usages et les
                territoires — de la ville aux pistes.
              </p>
              <p>
                En RDC, cette promesse passe par un réseau unique : showrooms,
                pièces d’origine et techniciens formés à la marque.
              </p>
              <Button asChild variant="inverseOutline">
                <Link href="/a-propos">L’esprit Travel+</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            03 — Présence
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
            Le réseau {site.distributor.name}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 90}>
              <div className="border border-border bg-card p-6 transition-colors duration-300 hover:border-black/35 hover:bg-white">
                <MapPin className="size-4 text-accent" />
                <p className="mt-6 font-display text-2xl tracking-[0.12em] text-black">
                  {city.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{city.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-24 md:px-8">
          <JetourLogo className="text-[36px] text-black" align="left" />
          <h2 className="max-w-2xl font-display text-4xl tracking-[0.08em] text-black md:text-6xl">
            Prenez le volant.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <Link href="/contact">Demander un essai</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.phoneHref}>{site.phone}</a>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
