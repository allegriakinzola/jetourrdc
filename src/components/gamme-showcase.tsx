"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type TransitionEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { models } from "@/lib/models";
import { cn } from "@/lib/utils";

const COUNT = models.length;
const MID = COUNT;
const COPIES = 3;
const AUTO_MS = 4500;
const HINT_MS = 700;

function wrap(index: number) {
  return ((index % COUNT) + COUNT) % COUNT;
}

function travelMs(steps: number) {
  return Math.min(1800, 420 + Math.abs(steps) * 300);
}

export function GammeShowcase() {
  const [active, setActive] = useState(0);
  const [slot, setSlot] = useState(MID);
  const [busy, setBusy] = useState(false);
  const [instant, setInstant] = useState(false);
  const [duration, setDuration] = useState(700);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);

  const slotRef = useRef(slot);
  const pendingRef = useRef(0);
  const settlingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const firstShotRef = useRef(true);

  slotRef.current = slot;
  const model = models[active];
  const highlight = busy ? pendingRef.current : active;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const settle = useCallback(() => {
    if (settlingRef.current) return;
    settlingRef.current = true;
    const next = pendingRef.current;
    setActive(next);
    setInstant(true);
    setSlot(MID + next);
    slotRef.current = MID + next;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setInstant(false);
        setBusy(false);
        settlingRef.current = false;
      });
    });
  }, []);

  const move = useCallback(
    (index: number, direction?: 1 | -1) => {
      if (busy) return;
      const next = wrap(index);
      if (next === active && direction == null) return;

      let steps: number;
      if (direction === 1) {
        steps = (next - active + COUNT) % COUNT || COUNT;
      } else if (direction === -1) {
        steps = -((active - next + COUNT) % COUNT || COUNT);
      } else {
        steps = next - active;
      }

      if (reduceMotion || steps === 0) {
        pendingRef.current = next;
        setActive(next);
        setSlot(MID + next);
        slotRef.current = MID + next;
        return;
      }

      pendingRef.current = next;
      settlingRef.current = false;
      firstShotRef.current = false;
      setDuration(travelMs(steps));
      setBusy(true);
      const dest = slotRef.current + steps;
      slotRef.current = dest;
      setSlot(dest);
    },
    [active, busy, reduceMotion],
  );

  useEffect(() => {
    if (!busy || instant) return;
    const id = window.setTimeout(settle, duration + 120);
    return () => window.clearTimeout(id);
  }, [busy, duration, instant, settle]);

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
    const onVisibility = () => setPageHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!inView) {
      firstShotRef.current = true;
      return;
    }
    if (reduceMotion || busy || pageHidden) return;
    if (!firstShotRef.current && paused) return;
    const delay = firstShotRef.current ? HINT_MS : AUTO_MS;
    const id = window.setTimeout(() => {
      firstShotRef.current = false;
      move(active + 1, 1);
    }, delay);
    return () => window.clearTimeout(id);
  }, [active, busy, reduceMotion, paused, inView, pageHidden, move]);

  const onTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current) return;
    if (event.propertyName !== "transform") return;
    settle();
  };

  const slides = Array.from({ length: COPIES }, (_, copy) =>
    models.map((item) => ({
      key: `${copy}-${item.slug}`,
      item,
    })),
  ).flat();

  return (
    <section
      ref={rootRef}
      className="overflow-hidden border-y border-border bg-[#f6f6f6] text-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            01 — Modèles
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.12em] text-black md:text-4xl">
            SUV JETOUR
          </h2>
        </Reveal>

        <div
          className="relative mt-10 md:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div
              className={cn(
                "lg:col-span-3",
                "transition-opacity duration-300",
                busy ? "opacity-0" : "opacity-100",
              )}
            >
              <h3 className="font-display text-5xl tracking-[0.08em] text-black md:text-6xl lg:text-[4.1rem] lg:leading-[0.9]">
                {model.name}
              </h3>
              <p className="mt-5 max-w-xs text-lg font-light leading-relaxed text-black/60 md:text-xl">
                {model.tagline}
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Button asChild variant="accent" className="w-[220px] justify-between">
                  <Link href="/contact">
                    Réserver un essai
                    <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-[220px] border-black/25 hover:border-black"
                >
                  <Link href={`/modeles/${model.slug}`}>Voir le modèle</Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:col-span-9">
              <p
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-2 z-0 text-center font-display text-[clamp(2.2rem,7vw,5rem)] leading-none tracking-[0.06em] text-transparent uppercase [-webkit-text-stroke:1px_rgba(17,17,17,0.12)]",
                  "transition-opacity duration-300",
                  busy ? "opacity-0" : "opacity-100",
                )}
              >
                {model.motif}
              </p>

              <div className="relative z-10 mx-auto mt-8 w-full md:mt-12">
                <div className="overflow-hidden">
                  <div
                    ref={trackRef}
                    className="flex items-center"
                    style={{
                      transform: `translate3d(-${slot * 100}%, 0, 0)`,
                      transition: instant
                        ? "none"
                        : `transform ${duration}ms cubic-bezier(0.45, 0.02, 0.12, 1)`,
                    }}
                    onTransitionEnd={onTrackTransitionEnd}
                  >
                    {slides.map(({ key, item }) => (
                      <Link
                        key={key}
                        href={`/modeles/${item.slug}`}
                        aria-label={`Voir le ${item.name}`}
                        className={cn(
                          "flex h-[200px] w-full min-w-full shrink-0 basis-full items-center justify-center md:h-[280px] lg:h-[320px]",
                          busy && "pointer-events-none",
                        )}
                      >
                        <Image
                          src={item.showcaseImage ?? item.image}
                          alt={item.name}
                          width={1600}
                          height={620}
                          priority={item.slug === model.slug}
                          draggable={false}
                          className="h-full w-full max-w-4xl object-contain select-none"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "relative z-10 mt-8 grid grid-cols-3 divide-x divide-black/10 border-t border-black/10 pt-6 text-center",
                  "transition-opacity duration-300",
                  busy ? "opacity-0" : "opacity-100",
                )}
              >
                {model.homeStats.map((stat) => (
                  <div key={stat.label} className="px-2">
                    <p className="text-[1.2rem] font-light leading-tight text-black md:text-[1.85rem]">
                      {stat.value}
                      {stat.unit ? (
                        <span className="ml-1 text-sm text-black/50 md:text-base">
                          {stat.unit}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-2 text-[10px] font-medium tracking-[0.16em] text-black/40 uppercase md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => move(active - 1, -1)}
            disabled={busy}
            className="absolute top-[38%] left-0 z-20 hidden size-11 items-center justify-center text-black/30 transition-colors hover:text-black disabled:opacity-30 lg:flex xl:-translate-x-8"
            aria-label="Modèle précédent"
          >
            <ChevronLeft className="size-9" />
          </button>
          <button
            type="button"
            onClick={() => move(active + 1, 1)}
            disabled={busy}
            className="absolute top-[38%] right-0 z-20 hidden size-11 items-center justify-center text-black/30 transition-colors hover:text-black disabled:opacity-30 lg:flex xl:translate-x-8"
            aria-label="Modèle suivant"
          >
            <ChevronRight className="size-9" />
          </button>
        </div>

        <div
          className="mt-16 flex flex-wrap items-end justify-center gap-x-6 gap-y-8 border-t border-black/10 pt-10 md:gap-x-10"
          role="tablist"
          aria-label="Choisir un modèle"
        >
          {models.map((item, index) => {
            const selected = index === highlight;
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                disabled={busy}
                onClick={() => move(index)}
                className={cn(
                  "w-[110px] text-center transition-all duration-300 md:w-[140px]",
                  selected ? "opacity-100" : "opacity-40 hover:opacity-80",
                  busy && !selected ? "pointer-events-none" : "",
                )}
              >
                <span className="mx-auto flex h-14 w-full items-end justify-center md:h-16">
                  <Image
                    src={item.showcaseImage ?? item.image}
                    alt=""
                    width={280}
                    height={110}
                    className="h-full w-full object-contain object-bottom"
                  />
                </span>
                <span
                  className={cn(
                    "mt-3 block text-[11px] font-semibold tracking-[0.16em] uppercase",
                    selected ? "text-accent" : "text-black/50",
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
