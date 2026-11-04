import { cn } from "@/lib/cn";
import { TRATO_OWL } from "@/lib/brand";

/**
 * Logomark — Figma: "Logomark" (local, style original), 23×23 en la navegación (New UI).
 * Búho de Trato. El archivo de Figma solo define el estilo "original".
 */
const sizes = { sm: 24, md: 32, lg: 40 } as const;

export function Logomark({ size = "sm", className }: { size?: keyof typeof sizes; className?: string }) {
  const px = sizes[size];
  return <img src={TRATO_OWL} alt="Trato" width={px} height={px} className={cn("shrink-0 object-contain", className)} style={{ width: px, height: px }} />;
}
