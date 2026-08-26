import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BrandVideo } from "@/components/brand-video";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getModel, models } from "@/lib/models";

type Props = {
  params: Promise<{ slug: string }>;
};

const dedicatedSlugs = new Set(["g700", "t1", "t2", "dashing", "x50", "x70-plus"]);

export function generateStaticParams() {
  return models
    .filter((model) => !dedicatedSlugs.has(model.slug))
    .map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return { title: "Modèle" };
  return {
    title: model.name,
    description: model.summary,
  };
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  return (
    <div>
      {model.video ? (
        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <BrandVideo src={model.video} poster={model.image} />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8">
            <Badge variant="inverse">{model.series}</Badge>
            <h1 className="mt-5 font-display text-5xl tracking-[0.1em] text-white md:text-7xl">
              {model.name}
            </h1>
            <p className="mt-4 text-lg text-white/80">{model.tagline}</p>
          </div>
        </section>
      ) : (
        <section className="border-b border-border pt-24">
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
            <div>
              <Badge variant="outline">{model.series}</Badge>
              <h1 className="mt-5 font-display text-5xl tracking-[0.1em] text-black md:text-7xl">
                {model.name}
              </h1>
              <p className="mt-4 text-lg text-black/70">{model.tagline}</p>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {model.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <Link href="/contact">Demander un essai</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/modeles">Retour aux modèles</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-card">
              <Image
                src={model.image}
                alt={model.name}
                fill
                priority
                className="object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        {model.video ? (
          <>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {model.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link href="/contact">Demander un essai</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/modeles">Retour aux modèles</Link>
              </Button>
            </div>
          </>
        ) : null}

        <p className="mt-16 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
          Fiche technique
        </p>
        <div className="mt-8 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {model.specs.map((spec) => (
            <div
              key={spec.label}
              className="border-b border-r border-border p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-black/40">
                {spec.label}
              </p>
              <p className="mt-3 font-display text-2xl tracking-[0.08em] text-black">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-[0.1em] text-black">
              Points forts
            </h2>
            <ul className="mt-6 space-y-3">
              {model.highlights.map((item) => (
                <li
                  key={item}
                  className="border-l border-accent pl-4 text-sm text-black/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-[0.1em] text-black">
              Motorisations
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              {model.powertrains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
              Teintes
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {model.colors.map((color) => (
                <div key={color.name} className="flex items-center gap-2">
                  <span
                    className="size-5 border border-border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
