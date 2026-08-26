import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { VehicleModel } from "@/lib/models";

export function ModelCard({ model }: { model: VehicleModel }) {
  const image = model.showcaseImage ?? model.image;

  return (
    <Link
      href={`/modeles/${model.slug}`}
      className="group flex flex-col overflow-hidden border border-border bg-white transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-black/30"
    >
      <div className="relative h-56 overflow-hidden bg-[#f6f6f6] md:h-64">
        <Image
          src={image}
          alt={model.name}
          fill
          className="object-contain object-center p-6 transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">{model.series}</Badge>
          <span className="text-[10px] uppercase tracking-[0.18em] text-black/45">
            {model.status === "disponible" ? "Disponible en RDC" : "Sur demande"}
          </span>
        </div>
        <h3 className="mt-4 font-display text-3xl tracking-[0.12em] text-black md:text-4xl">
          {model.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-black/70">{model.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {model.summary}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
          {model.homeStats.slice(0, 3).map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-lg tracking-[0.06em] text-black md:text-xl">
                {stat.value}
                {stat.unit ? (
                  <span className="ml-0.5 text-[11px] text-black/40">{stat.unit}</span>
                ) : null}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-black/80 transition-colors duration-300 group-hover:text-accent">
          Découvrir le modèle
        </p>
      </div>
    </Link>
  );
}
