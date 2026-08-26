"use client";

import Image from "next/image";
import { useState } from "react";

import { t2Interiors } from "@/lib/t2";
import { cn } from "@/lib/utils";

export function T2InteriorPicker() {
  const [interiorId, setInteriorId] = useState(t2Interiors[0].id);
  const interior =
    t2Interiors.find((item) => item.id === interiorId) ?? t2Interiors[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
      <div className="relative aspect-[16/8] overflow-hidden bg-secondary">
        <Image
          key={interior.image}
          src={interior.image}
          alt={`Intérieur T2 ${interior.name}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 65vw, 100vw"
        />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
          Finitions
        </p>
        <h3 className="mt-3 font-display text-3xl tracking-[0.12em] text-black">
          {interior.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Choisissez une ambiance intérieure.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {t2Interiors.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setInteriorId(item.id)}
              className={cn(
                "border px-4 py-2 text-[11px] uppercase tracking-[0.16em]",
                interiorId === item.id
                  ? "border-black bg-black text-white"
                  : "border-border text-black hover:border-black",
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
