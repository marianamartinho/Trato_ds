import { File02 } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * DocIcon — avatar circular de documento en la tabla de "Mis documentos".
 * Fondo gray-blue-600 (#3E4784), ícono blanco; variante PDF con etiqueta.
 */
export function DocIcon({ type = "doc", size = 32, className }: { type?: "doc" | "pdf"; size?: number; className?: string }) {
  return (
    <span
      className={cn("inline-grid shrink-0 place-items-center rounded-full bg-gray-blue-600 text-white", className)}
      style={{ width: size, height: size }}
    >
      {type === "pdf" ? <span className="text-[9px] font-bold tracking-wide">PDF</span> : <File02 className="size-4" />}
    </span>
  );
}
