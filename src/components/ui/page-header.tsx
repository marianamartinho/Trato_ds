import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * PageHeader — Figma: "Page header" (Untitled UI, Style Avatar, Desktop) en New Dashboard.
 * Título 20/30 semibold (text-gray-800) a la izquierda y acciones a la derecha (búsqueda Select sm 320px), gap 16.
 */
export function PageHeader({
  title,
  description,
  leading,
  actions,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Avatar o logo a la izquierda del título (Style Avatar). */
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-wrap items-center gap-xl", className)}>
      <div className="flex min-w-0 flex-1 items-center gap-xl">
        {leading}
        <div className="flex min-w-0 flex-col">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
          {description && <p className="text-sm text-(--text-tertiary)">{description}</p>}
        </div>
      </div>
      {actions && <div className="flex flex-wrap items-center gap-md">{actions}</div>}
    </header>
  );
}
