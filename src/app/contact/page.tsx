import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter le réseau officiel JETOUR en RDC — AMT Motors. Essai, devis, service après-vente.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-16 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-[0.08em] text-black md:text-6xl">
            Parlez au réseau officiel
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Essai, disponibilité, pièces et SAV : uniquement via{" "}
            {site.distributor.name}.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-black/40">
                Téléphone
              </dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="text-black hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-black/40">
                E-mail
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-black hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-black/40">
                Villes
              </dt>
              <dd className="mt-2 text-black/75">
                {site.cities.map((city) => city.name).join(" · ")}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
