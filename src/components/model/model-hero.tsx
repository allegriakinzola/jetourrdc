import Link from "next/link";

import { BrandVideo } from "@/components/brand-video";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ModelDetail } from "@/lib/model-detail";
import { cn } from "@/lib/utils";

export function ModelHero({ model }: { model: ModelDetail }) {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {model.hero.video ? (
        <BrandVideo src={model.hero.video} poster={model.hero.poster} />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${model.hero.poster})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-32 md:px-8">
        <div className="hero-enter">
          <Badge variant="inverse">{model.series}</Badge>
        </div>
        <h1 className="hero-enter hero-d2 mt-5 font-display text-6xl tracking-[0.1em] text-white md:text-8xl">
          {model.name}
        </h1>
        <p className="hero-enter hero-d3 mt-4 max-w-xl text-lg text-white/80">
          {model.tagline}
        </p>
        <div className="hero-enter hero-d4 mt-8 flex flex-wrap gap-3">
          <Button asChild variant="inverse">
            <Link href="/contact">Demander un essai</Link>
          </Button>
          <Button asChild variant="inverseOutline">
            <a href="#specs">Fiche technique</a>
          </Button>
        </div>
      </div>
      <div className="hero-enter hero-d5 relative z-10 border-t border-white/20 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
            Performances
          </p>
          <div
            className={cn(
              "mt-6 grid gap-8 sm:grid-cols-2",
              model.heroStats.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
            )}
          >
            {model.heroStats.map((item) => (
              <div key={item.label}>
                <p className="font-display text-3xl tracking-[0.06em] text-white md:text-4xl">
                  {item.value}
                  {item.unit ? (
                    <span className="ml-1 text-lg text-white/50">{item.unit}</span>
                  ) : null}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
