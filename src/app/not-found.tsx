import Link from "next/link";

import { Button } from "@/components/ui/button";
import { JetourLogo } from "@/components/jetour-logo";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <JetourLogo className="text-[28px] text-black" />
      <h1 className="mt-10 font-display text-5xl tracking-[0.12em] text-black">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        Ce trajet n’existe pas. Revenez à l’accueil JETOUR RDC.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Accueil</Link>
      </Button>
    </div>
  );
}
