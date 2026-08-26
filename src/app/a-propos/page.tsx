import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, Wrench } from "lucide-react";

import { BrandVideo } from "@/components/brand-video";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { models } from "@/lib/models";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "JETOUR en RDC : marque Travel+ du groupe Chery, distribuée exclusivement par AMT Motors. Modèles SUV, garantie constructeur et service après-vente.",
};

const generations = [
  {
    n: "01",
    title: "La ville et la famille",
    text: "X50, Dashing et X70 Plus couvrent le quotidien : trajets urbains à Kinshasa, routes nationales, sept places pour les déplacements familiaux.",
    models: "X50 · Dashing · X70 Plus",
  },
  {
    n: "02",
    title: "L’aventure",
    text: "La série T est pensée pour quitter le bitume sans renoncer au confort. T1 hybride rechargeable, T2 4×4 : ville, pistes et longs parcours.",
    models: "T1 · T2",
  },
  {
    n: "03",
    title: "L’exploration premium",
    text: "Le G700 porte la génération tout-terrain haut de gamme : six places, chaîne hybride, posture d’exploration pour ceux qui veulent aller plus loin.",
    models: "G700",
  },
];

const promises = [
  {
    icon: ShieldCheck,
    title: "Garantie constructeur",
    text: "Un JETOUR acheté chez AMT Motors reste dans le circuit officiel : garantie, rappels et mises à jour prévues par le constructeur.",
  },
  {
    icon: Wrench,
    title: "Pièces et techniciens",
    text: "L’après-vente s’appuie sur des pièces d’origine et des équipes formées à la marque, à Kinshasa comme au Katanga.",
  },
  {
    icon: MapPin,
    title: "Un réseau, trois villes",
    text: "Showrooms et points de service à Kinshasa, Lubumbashi et Kolwezi — un seul concessionnaire pour tout le pays.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="hero-enter text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            À propos
          </p>
          <h1 className="hero-enter hero-d2 mt-4 max-w-3xl font-display text-5xl tracking-[0.08em] text-white md:text-7xl">
            Travel+.
            <br />
            Le voyage, en RDC.
          </h1>
          <p className="hero-enter hero-d3 mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            JETOUR est la marque Travel+ du groupe Chery. Ici, elle n’est vendue
            que par {site.distributor.name}, distributeur officiel et exclusif.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
        <Reveal className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            La marque
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
            Jet, et tour.
          </h2>
        </Reveal>
        <Reveal
          delay={100}
          className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7"
        >
          <p>
            JETOUR est née en 2018 au sein du groupe Chery. Le nom assemble
            « jet » et « tour » : aller plus loin, plus simplement. La
            promesse Travel+ relie le véhicule aux usages réels — la ville, la
            famille, la piste.
          </p>
          <p>
            En République démocratique du Congo, cela veut dire des SUV
            dimensionnés pour Kinshasa comme pour le Katanga : compact pour le
            quotidien, sept places pour les longs trajets, série T quand la
            route s’arrête.
          </p>
          <p>
            Les modèles officiels sont vendus exclusivement par le réseau{" "}
            {site.distributor.name} : SUV urbains, familiaux et d’aventure.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Travel+
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Trois manières de voyager
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {generations.map((item, index) => (
              <Reveal key={item.n} as="article" delay={index * 90} className="bg-white p-8 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {item.n}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-[0.1em] text-black md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  {item.models}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="image" className="relative aspect-[16/10] bg-card">
            <Image
              src="/models/showcase/t2.png"
              alt="JETOUR T2"
              fill
              className="object-contain p-8"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              En RDC
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Un SUV ne se raconte pas.
              <br />
              Il se conduit.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {site.distributor.legal} Acheter hors réseau, c’est perdre la
              garantie constructeur et l’accès au service après-vente JETOUR.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link href="/contact">Réserver un essai</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/reseau">Le réseau officiel</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {promises.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              delay={index * 80}
              className="border-border p-8 md:border-r md:p-10 md:last:border-r-0"
            >
              <item.icon className="size-5 text-accent" />
              <h3 className="mt-6 font-display text-2xl tracking-[0.1em] text-black">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              {site.distributor.name}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Où nous trouver
            </h2>
          </div>
          <a
            href={site.phoneHref}
            className="text-sm tracking-wide text-black/70 transition-colors hover:text-black"
          >
            {site.phone}
          </a>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 80}>
              <div className="border border-border bg-card p-6 transition-colors duration-300 hover:border-black/35 hover:bg-white">
                <MapPin className="size-4 text-accent" />
                <p className="mt-6 font-display text-2xl tracking-[0.12em] text-black">
                  {city.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{city.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Les modèles
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Des modèles, un réseau.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {models.map((model, index) => (
              <Reveal key={model.slug} delay={index * 50}>
                <Link href={`/modeles/${model.slug}`} className="group text-center">
                  <span className="flex h-16 items-end justify-center md:h-20">
                    <Image
                      src={model.showcaseImage ?? model.image}
                      alt={model.name}
                      width={280}
                      height={110}
                      className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-3 block text-[11px] font-semibold tracking-[0.16em] text-black/55 uppercase transition-colors group-hover:text-black">
                    {model.label}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <Button asChild variant="outline" className="mt-12">
              <Link href="/modeles">Tous les modèles</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
