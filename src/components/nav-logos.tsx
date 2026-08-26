import Image from "next/image";

import { cn } from "@/lib/utils";

export function NavLogos({
  className,
  compact = false,
  onDark = false,
}: {
  className?: string;
  compact?: boolean;
  onDark?: boolean;
}) {
  const height = compact ? "h-6" : "h-7 md:h-8";

  return (
    <span className={cn("flex items-center gap-2.5 md:gap-3", className)}>
      <Image
        src="/logos/jetour.png"
        alt="JETOUR"
        width={484}
        height={104}
        priority
        className={cn(
          height,
          "w-auto object-contain",
          onDark && "brightness-0 invert",
        )}
      />
      <span
        className={cn(
          "h-5 w-px shrink-0 md:h-6",
          onDark ? "bg-white/45" : "bg-black/20",
        )}
      />
      <Image
        src={onDark ? "/logos/amt-light.png" : "/logos/amt.png"}
        alt="AMT Motors"
        width={989}
        height={206}
        priority
        className={cn(height, "w-auto object-contain")}
      />
    </span>
  );
}
