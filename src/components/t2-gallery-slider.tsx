"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { t2Gallery } from "@/lib/t2";
import { cn } from "@/lib/utils";

export function T2GallerySlider() {
  const [index, setIndex] = useState(0);
  const total = t2Gallery.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;
  const current = t2Gallery[index];

  function go(step: number) {
    setIndex((currentIndex) => (currentIndex + step + total) % total);
  }

  return (
    <div>
      <div className="relative bg-white">
        <div className="flex items-stretch gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="relative hidden min-h-[220px] w-[22%] overflow-hidden md:block md:min-h-[320px] lg:min-h-[420px]"
            aria-label={`Photo précédente : ${t2Gallery[prevIndex].title}`}
          >
            <Image
              src={t2Gallery[prevIndex].src}
              alt=""
              fill
              className="object-cover"
              sizes="22vw"
            />
            <span className="absolute inset-0 bg-white/70" />
          </button>

          <div className="relative min-h-[240px] flex-1 overflow-hidden md:min-h-[320px] lg:min-h-[420px]">
            <Image
              key={current.src}
              src={current.src}
              alt={current.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 56vw, 100vw"
            />

            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white backdrop-blur-sm transition hover:bg-white/45 md:left-4 md:size-12"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white backdrop-blur-sm transition hover:bg-white/45 md:right-4 md:size-12"
              aria-label="Photo suivante"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            className="relative hidden min-h-[220px] w-[22%] overflow-hidden md:block md:min-h-[320px] lg:min-h-[420px]"
            aria-label={`Photo suivante : ${t2Gallery[nextIndex].title}`}
          >
            <Image
              src={t2Gallery[nextIndex].src}
              alt=""
              fill
              className="object-cover"
              sizes="22vw"
            />
            <span className="absolute inset-0 bg-white/70" />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-3xl px-5 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-black/40">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-2xl tracking-[0.1em] text-black md:text-3xl">
          {current.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {current.text}
        </p>
        <div className="mt-5 flex justify-center gap-1.5">
          {t2Gallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 transition-all",
                i === index ? "w-8 bg-black" : "w-3 bg-black/20 hover:bg-black/40",
              )}
              aria-label={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
