import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import type { ModelDetail } from "@/lib/model-detail";
import { cn } from "@/lib/utils";

export function ModelPitch({ model }: { model: ModelDetail }) {
  if (!model.pitch) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
          Le modèle
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
          {model.tagline}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {model.pitch}
        </p>
      </Reveal>
    </section>
  );
}

export function ModelStory({ model }: { model: ModelDetail }) {
  const chapters = model.chapters ?? [];
  if (chapters.length === 0) return null;

  return (
    <>
      {chapters.map((chapter, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={chapter.title}
            className={cn(reverse ? "bg-[#f6f6f6]" : "bg-white")}
          >
            <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
              <Reveal
                variant="image"
                className={cn(
                  "relative min-h-[280px] md:min-h-[440px]",
                  reverse && "md:order-2",
                )}
              >
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </Reveal>
              <Reveal
                variant={reverse ? "left" : "right"}
                delay={80}
                className="px-5 py-12 md:px-12 md:py-16 lg:px-16"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  {chapter.kicker}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[0.08em] text-black md:text-4xl">
                  {chapter.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {chapter.text}
                </p>
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
