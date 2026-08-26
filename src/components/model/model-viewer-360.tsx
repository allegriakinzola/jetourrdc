"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ColorSwatch, Viewer360Config } from "@/lib/model-detail";
import { cn } from "@/lib/utils";

function wrapFrame(index: number, total: number) {
  return ((((index - 1) % total) + total) % total) + 1;
}

function ColorDots({
  items,
  activeId,
  onSelect,
  tone = "light",
}: {
  items: readonly ColorSwatch[];
  activeId: string;
  onSelect: (id: string) => void;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3.5 rounded-full px-4 py-2.5 backdrop-blur-md",
        tone === "dark" ? "bg-black/35" : "bg-white/75",
      )}
    >
      {items.map((item) => {
        const selected = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            aria-label={item.name}
            aria-pressed={selected}
          >
            <span
              className={cn(
                "block size-7 rounded-full transition-transform md:size-8",
                selected
                  ? tone === "dark"
                    ? "scale-110 ring-2 ring-white ring-offset-2 ring-offset-black/40"
                    : "scale-110 ring-2 ring-[#E31C23] ring-offset-2 ring-offset-white"
                  : tone === "dark"
                    ? "ring-1 ring-white/35 hover:scale-105"
                    : "ring-1 ring-black/15 hover:scale-105",
              )}
              style={
                item.gradient
                  ? { background: item.gradient }
                  : { backgroundColor: item.hex }
              }
            />
          </button>
        );
      })}
    </div>
  );
}

function ExteriorSpin({
  colorId,
  frameCount,
  spinFolder,
  spinExt,
  modelName,
}: {
  colorId: string;
  frameCount: number;
  spinFolder: string;
  spinExt: "png" | "webp";
  modelName: string;
}) {
  const [frame, setFrame] = useState(1);
  const [hint, setHint] = useState(true);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const spinFrame = (index: number) =>
    `${spinFolder}/${colorId}/${index}.${spinExt}`;

  useEffect(() => {
    for (let i = 1; i <= frameCount; i += 1) {
      const img = new window.Image();
      img.src = `${spinFolder}/${colorId}/${i}.${spinExt}`;
    }
  }, [colorId, frameCount, spinFolder, spinExt]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    setHint(false);
    lastX.current = event.clientX;
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = event.clientX - lastX.current;
    const step = 10;
    if (Math.abs(dx) < step) return;
    const delta = Math.round(dx / step);
    setFrame((current) => wrapFrame(current - delta, frameCount));
    lastX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      className="relative flex h-full w-full cursor-grab items-center justify-center active:cursor-grabbing"
      aria-label={`Faire tourner le ${modelName}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[18%] z-0 h-[16%] rounded-[50%] border border-black/[0.06]" />
      <ChevronLeft
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-4 z-10 size-8 text-black/25 transition-opacity duration-500 md:left-10 md:size-10",
          hint ? "opacity-100" : "opacity-0",
        )}
      />
      <ChevronRight
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-4 z-10 size-8 text-black/25 transition-opacity duration-500 md:right-10 md:size-10",
          hint ? "opacity-100" : "opacity-0",
        )}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={spinFrame(frame)}
        alt={`JETOUR ${modelName}, vue ${frame} sur ${frameCount}`}
        draggable={false}
        className="relative z-[1] h-full w-auto max-w-[92%] object-contain select-none"
      />
    </div>
  );
}

function ExteriorStill({
  src,
  modelName,
}: {
  src: string;
  modelName: string;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`JETOUR ${modelName}`}
        className="h-full w-auto max-w-[92%] object-contain select-none"
      />
    </div>
  );
}

function InteriorStill({
  src,
  alt,
  light = false,
}: {
  src: string;
  alt: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        light ? "bg-white" : "bg-[#111]",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "select-none",
          light
            ? "h-[min(78%,860px)] w-auto max-w-[92%] object-contain"
            : "h-full w-full object-cover",
        )}
      />
    </div>
  );
}

function InteriorPano({ src }: { src: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let disposed = false;
    const disposers: Array<() => void> = [];

    setStatus("loading");

    void import("three").then((THREE) => {
      if (disposed || !wrapRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1100);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x111111, 1);
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      wrap.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(500, 64, 48);
      geometry.scale(-1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      camera.position.set(0, 0, 0);

      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin("anonymous");
      loader.load(
        src,
        (texture) => {
          if (disposed) {
            texture.dispose();
            return;
          }
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearFilter;
          material.map = texture;
          material.color.set(0xffffff);
          material.needsUpdate = true;
          setStatus("ready");
        },
        undefined,
        () => {
          if (!disposed) setStatus("error");
        },
      );

      let lon = 90;
      let lat = 0;
      let fov = 75;
      let dragging = false;
      let lastX = 0;
      let lastY = 0;

      const onDown = (event: globalThis.PointerEvent) => {
        dragging = true;
        lastX = event.clientX;
        lastY = event.clientY;
        wrap.setPointerCapture(event.pointerId);
      };
      const onMove = (event: globalThis.PointerEvent) => {
        if (!dragging) return;
        lon -= (event.clientX - lastX) * 0.18;
        lat += (event.clientY - lastY) * 0.18;
        lat = Math.max(-85, Math.min(85, lat));
        lastX = event.clientX;
        lastY = event.clientY;
      };
      const onUp = () => {
        dragging = false;
      };
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        fov = Math.max(40, Math.min(95, fov + event.deltaY * 0.05));
        camera.fov = fov;
        camera.updateProjectionMatrix();
      };

      wrap.addEventListener("pointerdown", onDown);
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerup", onUp);
      wrap.addEventListener("pointercancel", onUp);
      wrap.addEventListener("wheel", onWheel, { passive: false });

      const resize = () => {
        const width = wrap.clientWidth;
        const height = wrap.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(wrap);

      let raf = 0;
      const tick = () => {
        if (disposed) return;
        const phi = THREE.MathUtils.degToRad(90 - lat);
        const theta = THREE.MathUtils.degToRad(lon);
        camera.lookAt(
          500 * Math.sin(phi) * Math.cos(theta),
          500 * Math.cos(phi),
          500 * Math.sin(phi) * Math.sin(theta),
        );
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();

      const destroy = () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        wrap.removeEventListener("pointerdown", onDown);
        wrap.removeEventListener("pointermove", onMove);
        wrap.removeEventListener("pointerup", onUp);
        wrap.removeEventListener("pointercancel", onUp);
        wrap.removeEventListener("wheel", onWheel);
        geometry.dispose();
        material.map?.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };

      if (disposed) {
        destroy();
        return;
      }
      disposers.push(destroy);
    });

    return () => {
      disposed = true;
      disposers.forEach((fn) => fn());
    };
  }, [src]);

  return (
    <div className="relative h-full w-full cursor-grab bg-[#111] active:cursor-grabbing">
      <div ref={wrapRef} className="absolute inset-0 touch-none" />
      {status !== "ready" && (
        <p className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[11px] tracking-[0.22em] text-white/50 uppercase">
          {status === "error" ? "Panorama indisponible" : "Chargement…"}
        </p>
      )}
    </div>
  );
}

export function ModelViewer360({
  name,
  viewer,
}: {
  name: string;
  viewer: Viewer360Config;
}) {
  const spinFolder = viewer.spinFolder;
  const frameCount = viewer.frameCount;
  const isSpin = Boolean(spinFolder && frameCount);
  const interiors =
    viewer.panos && viewer.panos.length > 0
      ? viewer.panos
      : (viewer.interiors ?? []);
  const isPano = Boolean(viewer.panos && viewer.panos.length > 0);
  const hasInterior = interiors.length > 0;

  const [view, setView] = useState<"exterior" | "interior">("exterior");
  const [extColor, setExtColor] = useState<string>(viewer.spinColors[0].id);
  const [intColor, setIntColor] = useState<string>(interiors[0]?.id ?? "");

  const ext =
    viewer.spinColors.find((item) => item.id === extColor) ??
    viewer.spinColors[0];
  const interior =
    interiors.find((item) => item.id === intColor) ?? interiors[0];
  const activeLabel =
    view === "exterior" ? ext.name : (interior?.name ?? "");
  const overlayDark = view === "interior" && isPano;

  const selectView = useCallback((next: "exterior" | "interior") => {
    setView(next);
  }, []);

  const tabs = (
    [
      ["exterior", "Extérieur"],
      ...(hasInterior ? ([["interior", "Intérieur"]] as const) : []),
    ] as const
  );

  const colorBlock = (
    <div className="flex flex-col items-center gap-3 text-center">
      <p
        className={cn(
          "text-sm font-medium tracking-[0.04em]",
          overlayDark ? "text-white" : "text-black",
        )}
      >
        JETOUR {name}
        <span
          className={cn("mx-2", overlayDark ? "text-white/35" : "text-black/30")}
        >
          ·
        </span>
        <span
          className={cn(
            "font-normal",
            overlayDark ? "text-white/75" : "text-black/70",
          )}
        >
          {activeLabel}
        </span>
      </p>
      {view === "exterior" ? (
        <ColorDots
          items={viewer.spinColors}
          activeId={extColor}
          onSelect={setExtColor}
          tone="light"
        />
      ) : hasInterior ? (
        <ColorDots
          items={interiors}
          activeId={intColor}
          onSelect={setIntColor}
          tone={overlayDark ? "dark" : "light"}
        />
      ) : null}
    </div>
  );

  const stage =
    view === "exterior" && isSpin && spinFolder && frameCount ? (
      <ExteriorSpin
        colorId={extColor}
        frameCount={frameCount}
        spinFolder={spinFolder}
        spinExt={viewer.spinExt ?? "png"}
        modelName={name}
      />
    ) : view === "exterior" ? (
      <ExteriorStill src={ext.image ?? ""} modelName={name} />
    ) : isPano && interior ? (
      <InteriorPano src={interior.image} />
    ) : interior ? (
      <InteriorStill
        src={interior.image}
        alt={`${name} — ${interior.name}`}
        light
      />
    ) : null;

  return (
    <section
      className={cn(
        "relative flex h-svh w-full flex-col overflow-hidden",
        view === "interior" && isPano ? "bg-[#111]" : "bg-[#ececec]",
      )}
    >
      {overlayDark ? (
        <div className="absolute inset-0">{stage}</div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-5 pt-[4.75rem] pb-4">
          <div className="relative h-[min(58svh,620px)] w-full max-w-6xl">
            {stage}
          </div>
          <div className="relative z-20 mt-3 shrink-0 md:mt-4">{colorBlock}</div>
        </div>
      )}

      {tabs.length > 1 ? (
        <div className="pointer-events-none absolute inset-x-0 top-[5.25rem] z-20 px-5 md:px-10">
          <div
            className="pointer-events-auto flex justify-center gap-8"
            role="tablist"
            aria-label="Vue du véhicule"
          >
            {tabs.map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={view === id}
                onClick={() => selectView(id)}
                className={cn(
                  "border-b-2 pb-1 text-[12px] font-semibold tracking-[0.18em] uppercase transition-colors",
                  view === id
                    ? overlayDark
                      ? "border-white text-white"
                      : "border-[#E31C23] text-black"
                    : overlayDark
                      ? "border-transparent text-white/50 hover:text-white/80"
                      : "border-transparent text-black/40 hover:text-black/70",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {overlayDark ? (
        <div className="pointer-events-auto absolute inset-x-0 bottom-8 z-20 flex justify-center px-5">
          {colorBlock}
        </div>
      ) : null}
    </section>
  );
}
