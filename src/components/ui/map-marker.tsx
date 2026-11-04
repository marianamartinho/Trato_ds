import { cn } from "@/lib/cn";

/**
 * MapMarker — Figma: "_Map location marker" (State Default).
 * Tres círculos concéntricos: exterior 24px al 10%, medio 14px al 20%, centro 5px sólido.
 * En los diseños se usa en naranja (jurisdicción destacada) y en gris.
 */
const tones = {
  ai: { halo: "bg-orange-400", core: "bg-orange-500" },
  gray: { halo: "bg-gray-400", core: "bg-gray-900", mid: "bg-gray-600" },
} as const;

export function MapMarker({ tone = "ai", label, className }: { tone?: keyof typeof tones; label?: string; className?: string }) {
  const t = tones[tone];
  return (
    <span role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} className={cn("relative inline-grid size-6 place-items-center", className)}>
      <span className={cn("absolute size-6 rounded-full opacity-10", t.halo)} />
      <span className={cn("absolute size-3.5 rounded-full opacity-20", "mid" in t ? t.mid : t.halo)} />
      <span className={cn("relative size-[5px] rounded-full", t.core)} />
    </span>
  );
}
