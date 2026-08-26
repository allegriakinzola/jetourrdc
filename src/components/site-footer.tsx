import Link from "next/link";

import { NavLogos } from "@/components/nav-logos";
import { Separator } from "@/components/ui/separator";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <NavLogos />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.distributor.legal} Vente, garantie constructeur et service
            après-vente sur le réseau officiel.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
            Navigation
          </p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-black/70 transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
            Réseau officiel
          </p>
          <p className="mt-5 text-sm text-black">{site.distributor.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.cities.map((city) => city.name).join(" · ")}
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 block text-sm text-black/80 hover:text-black"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 block text-sm text-black/80 hover:text-black"
          >
            {site.email}
          </a>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.16em] text-black/40 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} JETOUR · {site.distributor.name}</p>
        <p>République Démocratique du Congo</p>
      </div>
    </footer>
  );
}
