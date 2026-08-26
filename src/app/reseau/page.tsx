import type { Metadata } from "next";
import Link from "next/link";
import {
  CarFront,
  ClipboardCheck,
  KeyRound,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { BrandVideo } from "@/components/brand-video";
import { ExclusiveBanner } from "@/components/exclusive-banner";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réseau officiel",
  description:
    "AMT Motors est le distributeur officiel et exclusif de JETOUR en RDC. Showrooms à Kinshasa et Lubumbashi, service à Kolwezi. Garantie constructeur et SAV.",
};

const services = [
  {
    icon: CarFront,
    title: "Vente officielle",
    text: "Les six SUV JETOUR du marché RDC : importés, configurés et vendus uniquement par AMT Motors.",
  },
  {
    icon: KeyRound,
    title: "Essais",
    text: "Prendre le volant en showroom avant d’acheter. Un essai se réserve par téléphone ou via le formulaire de contact.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie constructeur",
    text: "Un JETOUR du réseau reste dans le circuit officiel : garantie, rappels et mises à jour prévues par le constructeur.",
  },
  {
    icon: Wrench,
    title: "Après-vente",
    text: "Techniciens formés à la marque, pièces d’origine, entretien à Kinshasa, Lubumbashi et Kolwezi.",
  },
];

const steps = [
  {
    n: "01",
    title: "Découvrir",
    text: "Choisir un modèle, lire la fiche, comparer les usages : ville, famille, piste ou flagship.",
  },
  {
    n: "02",
    title: "Essayer",
    text: "Réserver un essai dans un showroom AMT Motors. Le véhicule se juge sur la route, pas sur une photo.",
  },
  {
    n: "03",
    title: "Acheter",
    text: "Commande et livraison via le réseau exclusif. Configuration prévue pour le marché RDC.",
  },
  {
    n: "04",
    title: "Entretenir",
    text: "SAV, pièces d’origine et suivi constructeur — le réseau continue après la vente.",
  },
];

const contrasts = [
  {
    label: "Garantie constructeur",
    official: "Incluse",
    other: "Absente",
  },
  {
    label: "Pièces d’origine",
    official: "Réseau AMT Motors",
    other: "Hors circuit",
  },
  {
    label: "Techniciens formés",
    official: "Oui",
    other: "Non garantis",
  },
  {
    label: "Rappels et mises à jour",
    official: "Suivis",
    other: "Sans suivi",
  },
  {
    label: "SAV JETOUR",
    official: "Kinshasa · Lubumbashi · Kolwezi",
    other: "Aucun",
  },
];

export default function ReseauPage() {
  return (
    <div>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <BrandVideo src="/models/g700.mp4" poster="/models/g700.png" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="hero-enter text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Réseau officiel
          </p>
          <h1 className="hero-enter hero-d2 mt-4 max-w-4xl font-display text-5xl tracking-[0.08em] text-white md:text-7xl">
            Un seul concessionnaire.
            <br />
            Toute la RDC.
          </h1>
          <p className="hero-enter hero-d3 mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            JETOUR a confié l’importation, la vente et l’après-vente à{" "}
            {site.distributor.name}. Showrooms, essais, garantie constructeur —
            un seul réseau autorisé.
          </p>
          <div className="hero-enter hero-d4 mt-8 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <a href={site.phoneHref}>Appeler le showroom</a>
            </Button>
            <Button asChild variant="inverseOutline">
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>

      <ExclusiveBanner />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
        <Reveal className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Exclusivité
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
            Officiel, ou rien.
          </h2>
        </Reveal>
        <Reveal
          delay={80}
          className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7"
        >
          <p>
            {site.distributor.legal} Pas de second importateur, pas de canal
            parallèle reconnu par la marque : un JETOUR en RDC s’achète et se
            fait entretenir ici.
          </p>
          <p>
            Cela protège l’acheteur autant que le constructeur. Hors réseau, pas
            de garantie, pas de pièces d’origine suivies, pas de techniciens
            formés JETOUR.
          </p>
          <p>
            Le réseau couvre la capitale et le Katanga : Kinshasa, Lubumbashi,
            Kolwezi. Un concessionnaire, trois points de présence.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-[#f6f6f6]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Services
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Ce que le réseau fait.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {services.map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                delay={index * 70}
                className="bg-white p-8 md:p-10"
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Présence
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              Trois villes, un réseau.
            </h2>
          </div>
          <a
            href={site.phoneHref}
            className="text-sm tracking-wide text-black/70 transition-colors hover:text-black"
          >
            {site.phone}
          </a>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {site.cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 80}>
              <article className="flex h-full flex-col border border-border bg-card p-8 transition-colors duration-300 hover:border-black/35 hover:bg-white">
                <MapPin className="size-4 text-accent" />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  {city.region}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-[0.12em] text-black">
                  {city.name}
                </h3>
                <p className="mt-1 text-sm text-black/55">{city.role}</p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {city.text}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {city.services.map((service) => (
                    <li
                      key={service}
                      className="border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/55"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
              Parcours
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
              De l’essai à l’entretien.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal
                key={step.n}
                as="article"
                delay={index * 70}
                className="bg-white p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-[0.1em] text-black">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            À savoir
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black md:text-5xl">
            Réseau officiel, ou hors garantie.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Un JETOUR importé ou acheté hors AMT Motors n’entre pas dans le
            circuit constructeur. Le tableau ci-dessous résume ce qui change.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[520px] border-t border-border text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 font-semibold uppercase tracking-[0.16em] text-black/40">
                  <span className="flex items-center gap-2">
                    <ClipboardCheck className="size-4 text-accent" />
                    Critère
                  </span>
                </th>
                <th className="py-4 pr-4 font-semibold uppercase tracking-[0.16em] text-black">
                  AMT Motors
                </th>
                <th className="py-4 font-semibold uppercase tracking-[0.16em] text-black/40">
                  Hors réseau
                </th>
              </tr>
            </thead>
            <tbody>
              {contrasts.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="py-4 pr-4 text-black/70">{row.label}</td>
                  <td className="py-4 pr-4 text-black">{row.official}</td>
                  <td className="py-4 text-black/45">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal delay={100} className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-accent" />
          <p>
            En cas de doute sur l’origine d’un véhicule, appelez le showroom
            avant d’acheter. Le réseau confirme les châssis officiels.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border bg-[#f6f6f6]">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl tracking-[0.08em] text-black md:text-5xl">
              Parlez au réseau.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Essai, disponibilité, pièces, SAV : uniquement via{" "}
              {site.distributor.name}. Kinshasa, Lubumbashi, Kolwezi.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <Link href="/contact">Demander un essai</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.phoneHref}>{site.phone}</a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/modeles">Voir les modèles</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
