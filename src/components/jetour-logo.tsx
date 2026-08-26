import { cn } from "@/lib/utils";

type JetourLogoProps = {
  className?: string;
  withTagline?: boolean;
  align?: "left" | "center";
};

export function JetourLogo({
  className,
  withTagline = true,
  align = "center",
}: JetourLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex flex-col text-current",
        align === "center" ? "items-center" : "items-start",
        className,
      )}
    >
      <span className="font-display text-[1.15em] font-semibold leading-none tracking-[0.22em]">
        JETOUR
      </span>
      {withTagline ? (
        <span
          className={cn(
            "mt-[0.35em] flex items-center gap-[0.45em] text-[0.32em] font-medium uppercase tracking-[0.28em] opacity-80",
            align === "left" && "w-full",
          )}
        >
          <span className="h-px flex-1 bg-current/70" />
          Conduisez votre avenir
          <span className="h-px flex-1 bg-current/70" />
        </span>
      ) : null}
    </span>
  );
}
