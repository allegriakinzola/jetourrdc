"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { t2Colors, type T2Color } from "@/lib/t2";
import { cn } from "@/lib/utils";

export function T2ColorPicker({ colors = t2Colors }: { colors?: T2Color[] }) {
  const palette = colors;
  const [activeId, setActiveId] = useState("khaki-white");

  const active = useMemo(
    () => palette.find((color) => color.id === activeId) ?? palette[0],
    [activeId, palette],
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <h2 className="font-display text-5xl tracking-[0.08em] text-black md:text-6xl">
          T2
        </h2>
        <p className="mt-3 text-lg text-neutral-500">Choisissez votre teinte</p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-5">
          {palette.map((color) => {
            const selected = activeId === color.id;
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => setActiveId(color.id)}
                className={cn(
                  "flex flex-col items-center gap-2 px-3 py-3 transition-colors",
                  selected
                    ? "outline outline-1 outline-[#3d9b8f] outline-offset-0"
                    : "outline outline-1 outline-transparent",
                )}
                aria-label={color.name}
                aria-pressed={selected}
              >
                <span
                  className={cn(
                    "size-10 rounded-full",
                    color.hex.toLowerCase() === "#e6e1d4" ||
                      color.hex.toLowerCase() === "#cfcfd1"
                      ? "border border-neutral-300"
                      : "border border-black/10",
                  )}
                  style={{ backgroundColor: color.hex }}
                />
                <span className="max-w-[5.5rem] text-center text-[13px] leading-tight text-neutral-700">
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-8 h-[240px] w-full overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[480px]">
        <Image
          key={active.image}
          src={active.image}
          alt={`JETOUR T2 ${active.name}`}
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
