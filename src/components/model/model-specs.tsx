import { Reveal } from "@/components/motion/reveal";
import type { SpecGroup } from "@/lib/model-detail";

export function ModelSpecs({ groups }: { groups: SpecGroup[] }) {
  return (
    <section id="specs" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Fiche technique
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-black">
            Spécifications
          </h2>
        </Reveal>
        <div className="mt-12 space-y-10">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <h3 className="font-display text-xl tracking-[0.14em] text-black">
                {group.title}
              </h3>
              <div className="mt-4 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-r border-b border-border bg-white p-5 transition-colors duration-300 hover:bg-[#fafafa]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-black/40">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-sm text-black">{spec.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
