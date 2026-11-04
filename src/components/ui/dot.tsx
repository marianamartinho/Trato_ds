import { cn } from "@/lib/cn";

/**
 * Dot — Figma: "_Dot" (Size sm, Outline False).
 * Contenedor 8×8 con círculo de 6px. Se usa dentro de badges y listas de estado.
 */
const dotColor = {
  gray: "bg-gray-500",
  brand: "bg-gray-blue-500",
  accent: "bg-gray-blue-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  ai: "bg-orange-500",
  blue: "bg-blue-light-500",
} as const;

export type DotColor = keyof typeof dotColor;

export function Dot({ color = "gray", label, className }: { color?: DotColor; label?: string; className?: string }) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("inline-grid size-2 shrink-0 place-items-center", className)}
    >
      <span className={cn("size-1.5 rounded-full", dotColor[color])} />
    </span>
  );
}
