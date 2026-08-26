import { ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function ExclusiveBanner() {
  return (
    <section className="border-y border-border bg-secondary">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
              Réseau officiel
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-black/75 md:text-base">
              {site.distributor.legal} Les véhicules hors réseau n’ont ni
              garantie constructeur ni service après-vente JETOUR.
            </p>
          </div>
        </div>
        <p className="shrink-0 font-display text-lg tracking-[0.18em] text-black md:text-xl">
          {site.distributor.name}
        </p>
      </Reveal>
    </section>
  );
}
