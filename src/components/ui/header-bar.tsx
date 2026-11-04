import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * HeaderBar — Figma: "Header" armado de la app (Document Editor, 267:15157).
 * Alto 64, borde inferior. Título del documento 16 medium a la izquierda (padding 16);
 * a la derecha, botones de ícono (40 px, gap 12), acción primaria "Guardar" y cerrar.
 */
export function HeaderBar({
  title,
  leading,
  actions,
  className,
}: {
  title: React.ReactNode;
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("flex h-16 items-center gap-lg border-b border-(--border-secondary) bg-(--bg-primary) px-xl", className)}>
      {leading}
      <h1 className="min-w-0 flex-1 truncate text-md font-medium text-(--text-primary)">{title}</h1>
      {actions && <div className="flex shrink-0 items-center gap-lg">{actions}</div>}
    </header>
  );
}
