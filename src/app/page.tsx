import Link from "next/link";
import Image from "next/image";
import { ArrowDown, MapPin, ShieldCheck, Wrench } from "lucide-react";

import { BrandVideo } from "@/components/brand-video";
import { ExclusiveBanner } from "@/components/exclusive-banner";
import { GammeShowcase } from "@/components/gamme-showcase";
import { JetourLogo } from "@/components/jetour-logo";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { models } from "@/lib/models";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const vocations = [
  {
    n: "01",
    title: "Urbain",
    text: "Aisance en ville, présence sur l’avenue. Le quotidien Kinshasa, élevé.",
    models: "X50 · Dashing",
    href: "/modeles/x50",
    image: "/models/x50/gallery/p2-1.jpg",
  },
  {
    n: "02",
    title: "Aventure",
    text: "L’allure urbaine, l’esprit aventurier. La piste sans quitter le confort.",
    models: "T1 · T2",
    href: "/modeles/t2",
    image: "/models/t2/steel.png",
  },
  {
    n: "03",
    title: "Familial",
    text: "Sept places, toit panoramique. L’espace du voyage, tous les jours.",
    models: "X70 Plus",
    href: "/modeles/x70-plus",
    image: "/models/x70-plus/gallery/luxe.jpg",
  },
  {
    n: "04",
    title: "Flagship",
    text: "Hybride premium, 4WD. Au-delà de l’horizon.",
    models: "G700",
    href: "/modeles/g700",
    image: "/models/g700/gallery/posture.jpg",
  },
];

const promises = [
  {
    icon: ShieldCheck,
    title: "Garantie constructeur",
    text: "Un JETOUR acheté chez AMT Motors reste dans le circuit officiel : garantie, rappels et mises à jour.",
  },
  {
    icon: Wrench,
    title: "Pièces et techniciens",
    text: "Après-vente avec pièces d’origine et équipes formées à la marque, à Kinshasa comme au Katanga.",
  },
  {
    icon: MapPin,
    title: "Un réseau, trois villes",
    text: "Showrooms et service à Kinshasa, Lubumbashi et Kolwezi — un seul concessionnaire pour le pays.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="hero-enter hero-d1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
            JETOUR · République Démocratique du Congo
          </p>
          <h1 className="hero-enter hero-d2 mt-5 max-w-3xl font-display text-5xl leading-[0.92] tracking-[0.06em] text-white sm:text-7xl md:text-8xl">
            Conduisez
            <br />
            votre avenir
          </h1>
          <p className="hero-enter hero-d3 mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            La marque Travel+ du groupe Chery. Six SUV pensés pour Kinshasa
            comme pour les pistes — exclusivement chez {site.distributor.name}.
          </p>
          <div className="hero-enter hero-d4 mt-10 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <Link href="/modeles">Explorer les modèles</Link>
            </Button>
            <Button asChild variant="inverseOutline">
              <Link href="/contact">Demander un essai</Link>
            </Button>
          </div>
          <div className="hero-enter hero-d5 mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/70">
            <ArrowDown className="scroll-hint size-4" />
            Défiler
          </div>
        </div>
      </section>

      <ExclusiveBanner />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          <Reveal variant="image" className="relative min-h-[320px] md:min-h-[520px]">
            <Image
              src="/models/g700/gallery/ville.jpg"
              alt="JETOUR G700 — Travel+ en ville"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="px-5 py-14 md:px-12 md:py-20 lg:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              La marque
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
              Jet, et tour.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                JETOUR est née en 2018 au sein du groupe Chery. Le nom assemble
                « jet » et « tour » : aller plus loin, plus simplement. Pas un
                SUV de plus — une marque de voyage.
              </p>
              <p>
                Travel+ relie le véhicule aux usages réels : la ville, la
                famille, la piste. En RDC, cela veut dire des SUV dimensionnés
                pour Boulevard du 30 Juin comme pour la latérite du Katanga.
              </p>
              <p>
                Ici, JETOUR n’est vendue que par {site.distributor.name},
                distributeur officiel et exclusif. Garantie constructeur, pièces
                d’origine, techniciens formés à la marque.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/a-propos">L’histoire JETOUR</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <GammeShowcase />

      <section className="border-y border-border bg-[#111]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
              La gamme
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[0.1em] text-white md:text-5xl">
              Quatre façons de voyager.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Urbain, aventure, familial, flagship. Chaque JETOUR a une
              accroche, un usage, un caractère — à découvrir en showroom.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {vocations.map((item, index) => (
              <Reveal key={item.n} delay={index * 80}>
                <Link
                  href={item.href}
                  className="group relative block min-h-[280px] overflow-hidden md:min-h-[340px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                      {item.n} — {item.models}
                    </p>
                    <h3 className="mt-2 font-display text-3xl tracking-[0.1em] text-white md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                      {item.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-8">
            <Button asChild variant="inverseOutline">
              <Link href="/modeles">Toute la gamme</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          <Reveal
            variant="image"
            className="relative min-h-[300px] md:order-2 md:min-h-[480px]"
          >
            <Image
              src="/models/g700/gallery/aventure.jpg"
              alt="JETOUR G700 — tout-terrain premium"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal className="px-5 py-14 md:px-12 md:py-16 lg:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Flagship · G700
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
              Au-delà de l’horizon.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Le G700 est le tout-terrain hybride premium de JETOUR : 904 ch,
              4WD, habitacle 5 ou 6 places. Force, luxe et technologie — de
              Kinshasa aux pistes du Katanga. Le compagnon de haute performance,
              exclusivement AMT Motors.
            </p>
            <Button asChild variant="accent" className="mt-8">
              <Link href="/modeles/g700">Découvrir le G700</Link>
            </Button>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          <Reveal variant="image" className="relative min-h-[300px] md:min-h-[480px]">
            <Image
              src="/models/t2/headlight.png"
              alt="JETOUR T2 — SUV d’aventure"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="px-5 py-14 md:px-12 md:py-16 lg:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Travel+ · T2
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
              Osez dominer.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Carrosserie hardcore, XWD intelligent, modes de conduite. Le T2
              commande le terrain — latérite ou asphalte — sans choisir entre
              ville et aventure. Le SUV Travel+ pour ceux qui veulent les deux.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/modeles/t2">Découvrir le T2</Link>
            </Button>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          <Reveal
            variant="image"
            className="relative min-h-[300px] md:order-2 md:min-h-[480px]"
          >
            <Image
              src="/models/x70-plus/gallery/confort.jpg"
              alt="JETOUR X70 Plus — SUV familial"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal className="px-5 py-14 md:px-12 md:py-16 lg:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Familial · X70 Plus
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
              L’espace du voyage, tous les jours.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Sept places, toit panoramique, 1.6 turbo. Le premier produit
              JETOUR, en version Plus : la famille, les bagages, la province.
              Le SUV qui accueille sans compromis.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/modeles/x70-plus">Découvrir le X70 Plus</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />
        <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-7xl items-end gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <Reveal variant="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Travel+
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-white md:text-6xl">
              Plus qu’un SUV.
              <br />
              Un voyage.
            </h2>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="space-y-6 text-base leading-relaxed text-white/80">
              <p>
                Travel+ n’est pas un pack d’options. C’est la stratégie JETOUR :
                le véhicule, les usages et les territoires — de la ville aux
                pistes, du showroom au service.
              </p>
              <p>
                En RDC, cette promesse tient par un réseau unique. Acheter
                JETOUR hors {site.distributor.name}, c’est sortir du circuit
                constructeur.
              </p>
              <Button asChild variant="inverseOutline">
                <Link href="/a-propos">L’esprit Travel+</Link>
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

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Réseau officiel
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              JETOUR, chez {site.distributor.name}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Un concessionnaire, trois points de présence. Essai, vente et
              après-vente dans le circuit officiel — Kinshasa, Lubumbashi,
              Kolwezi.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/reseau">Le réseau officiel</Link>
          </Button>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {site.cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 90}>
              <Link
                href="/reseau"
                className="flex h-full flex-col border border-border bg-card p-8 transition-colors duration-300 hover:border-black/35 hover:bg-white"
              >
                <MapPin className="size-4 text-accent" />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  {city.region}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-[0.12em] text-black">
                  {city.name}
                </h3>
                <p className="mt-1 text-sm text-black/55">{city.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {city.text}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Six SUV
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Choisissez votre JETOUR.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
            {models.map((model, index) => (
              <Reveal key={model.slug} delay={index * 50}>
                <Link
                  href={`/modeles/${model.slug}`}
                  className={cn(
                    "group flex flex-col border border-border bg-white p-5 transition-colors duration-300 hover:border-black/30",
                  )}
                >
                  <span className="relative block h-24 md:h-32">
                    <Image
                      src={model.showcaseImage ?? model.image}
                      alt={model.name}
                      fill
                      className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 50vw"
                    />
                  </span>
                  <span className="mt-4 font-display text-2xl tracking-[0.12em] text-black">
                    {model.label}
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">
                    {model.tagline}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-24 md:px-8">
          <JetourLogo className="text-[36px] text-black" align="left" />
          <h2 className="max-w-2xl font-display text-4xl tracking-[0.08em] text-black md:text-6xl">
            Prenez le volant.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Un JETOUR ne se raconte pas : il se conduit. Essai en showroom,
            conseil, garantie constructeur — uniquement via{" "}
            {site.distributor.name}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <Link href="/contact">Demander un essai</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.phoneHref}>{site.phone}</a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/modeles">Voir les modèles</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
