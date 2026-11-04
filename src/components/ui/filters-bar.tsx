import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * FiltersBar — Figma: "Filters bar" armado arriba de las tablas (Workflows, Vista de solicitante, AI Contract).
 * Búsqueda a la izquierda, filtros en el medio y acciones a la derecha, separados por gap 12.
 * La instancia de Figma está oculta: la composición sigue el layout de las tablas visibles.
 */
export function FiltersBar({
  search,
  filters,
  actions,
  className,
}: {
  search?: React.ReactNode;
  filters?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div role="toolbar" aria-label="Filtros" className={cn("flex flex-wrap items-center gap-lg", className)}>
      {search && <div className="min-w-0 flex-1 sm:max-w-[384px]">{search}</div>}
      {filters && <div className="flex flex-wrap items-center gap-md">{filters}</div>}
      {actions && <div className="ml-auto flex items-center gap-md">{actions}</div>}
    </div>
  );
}
