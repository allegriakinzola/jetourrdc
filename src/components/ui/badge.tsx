import { cn } from "@/lib/utils";

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "default" | "outline" | "accent" | "inverse";
}) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-none px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
        variant === "default" && "bg-foreground text-background",
        variant === "outline" && "border border-foreground/20 text-foreground",
        variant === "accent" && "bg-accent text-white",
        variant === "inverse" && "border border-white/40 text-white",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
