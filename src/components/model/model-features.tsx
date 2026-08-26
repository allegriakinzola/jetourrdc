import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function ModelFeatures({
  name,
  features,
}: {
  name: string;
  features: string[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <Reveal>
        <h2 className="font-display text-4xl tracking-[0.1em] text-black">
          Équipements
        </h2>
      </Reveal>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal
            key={feature}
            as="li"
            delay={Math.min(index * 40, 280)}
            className="border-l border-accent pl-4 text-sm text-black/75"
          >
            {feature}
          </Reveal>
        ))}
      </ul>
      <Reveal delay={120} className="mt-12 flex flex-wrap gap-3">
        <Button asChild variant="accent">
          <Link href="/contact">Essayer le {name}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/modeles">Retour aux modèles</Link>
        </Button>
      </Reveal>
    </section>
  );
}
