"use client";

import { useMemo, useState } from "react";

import { ModelCard } from "@/components/model-card";
import { Reveal } from "@/components/motion/reveal";
import { models, type VehicleModel } from "@/lib/models";
import { cn } from "@/lib/utils";

type LineId = "tous" | "urbain" | "aventure" | "familial" | "flagship";

const FILTERS: { id: LineId; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "urbain", label: "Urbain" },
  { id: "aventure", label: "Aventure" },
  { id: "familial", label: "Familial" },
  { id: "flagship", label: "Flagship" },
];

function lineOf(model: VehicleModel): Exclude<LineId, "tous"> {
  if (model.slug === "g700") return "flagship";
  if (model.series.includes("familiale")) return "familial";
  if (model.series.includes("Série T")) return "aventure";
  return "urbain";
}

export function ModelesCatalog() {
  const [line, setLine] = useState<LineId>("tous");

  const visible = useMemo(
    () =>
      line === "tous" ? models : models.filter((model) => lineOf(model) === line),
    [line],
  );

  return (
    <section id="catalogue" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Catalogue
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
            Choisir un modèle
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {visible.length} modèle{visible.length > 1 ? "s" : ""} · disponibles
          exclusivement chez AMT Motors.
        </p>
      </Reveal>

      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrer les modèles"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={line === filter.id}
            onClick={() => setLine(filter.id)}
            className={cn(
              "h-10 px-5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
              line === filter.id
                ? "bg-black text-white"
                : "border border-border bg-white text-black/55 hover:border-black/40 hover:text-black",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {visible.map((model, index) => (
          <Reveal key={model.slug} delay={index * 60}>
            <ModelCard model={model} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
