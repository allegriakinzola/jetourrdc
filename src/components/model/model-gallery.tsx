"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import type { GalleryItem } from "@/lib/model-detail";
import { cn } from "@/lib/utils";

const AUTO_MS = 4500;
const HINT_MS = 700;

export function ModelGallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const firstShotRef = useRef(true);
  const total = items.length;

  const prevIndex = total ? (index - 1 + total) % total : 0;
  const nextIndex = total ? (index + 1) % total : 0;
  const current = items[index];

  const go = useCallback(
    (step: number, fromAuto = false) => {
      if (!fromAuto) firstShotRef.current = false;
      setIndex((currentIndex) => (currentIndex + step + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      firstShotRef.current = true;
      return;
    }
    if (total < 2 || pageHidden) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!firstShotRef.current && paused) return;

    const delay = firstShotRef.current ? HINT_MS : AUTO_MS;
    const id = window.setTimeout(() => {
      firstShotRef.current = false;
      go(1, true);
    }, delay);
    return () => window.clearTimeout(id);
  }, [index, paused, inView, pageHidden, total, go]);

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (!total) return null;

  return (
    <section ref={rootRef} className="py-20">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
          Galerie
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black">
          Design & technologies
        </h2>
      </Reveal>
      <div
        className="mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        <div className="relative bg-white">
          <div className="flex items-stretch gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="relative hidden min-h-[220px] w-[22%] overflow-hidden md:block md:min-h-[320px] lg:min-h-[420px]"
              aria-label={`Photo précédente : ${items[prevIndex].title}`}
            >
              <Image
                src={items[prevIndex].src}
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
                className="object-cover duration-700 animate-in fade-in"
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
              aria-label={`Photo suivante : ${items[nextIndex].title}`}
            >
              <Image
                src={items[nextIndex].src}
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
          <h3
            key={`${current.src}-title`}
            className="mt-2 font-display text-2xl tracking-[0.1em] text-black duration-500 animate-in fade-in md:text-3xl"
          >
            {current.title}
          </h3>
          <p
            key={`${current.src}-text`}
            className="mt-2 text-sm leading-relaxed text-muted-foreground duration-500 animate-in fade-in"
          >
            {current.text}
          </p>
          <div className="mt-5 flex justify-center gap-1.5">
            {items.map((item, i) => (
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
    </section>
  );
}
