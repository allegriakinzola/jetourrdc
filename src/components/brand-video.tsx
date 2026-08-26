"use client";

import { cn } from "@/lib/utils";

type BrandVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  overlay?: "dark" | "none";
};

export function BrandVideo({
  src,
  poster,
  className,
  overlay = "dark",
}: BrandVideoProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-black", className)}>
      <video
        className="h-full w-full object-cover duration-1000 animate-in fade-in"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay === "dark" ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />
      ) : null}
    </div>
  );
}
