import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * EmptyState — Figma: Auditoría Ayudas · Sección 3 "Empty States" (551:5060) y "Carpeta vacía" (11.10).
 *
 * variant="panel" (Figma de Trato, paneles laterales como "Asignación de elementos"):
 *   ilustración en círculo 86 px gray-blue-100, título 14 semibold text-tertiary,
 *   texto 12 regular text-quaternary (puede incluir íconos en línea), todo centrado, gap 24.
 * variant="page" (Untitled UI, páginas y tablas): featured icon sobre círculos concéntricos,
 *   título 16 semibold, texto 14, hasta dos acciones.
 */
export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: "page" | "panel";
  className?: string;
}

export function EmptyState({ icon, title, description, actions, variant = "page", className }: EmptyStateProps) {
  if (variant === "panel") {
    return (
      <div className={cn("flex flex-col items-center gap-3xl px-xl py-4xl text-center", className)}>
        <div className="grid size-[86px] place-items-center rounded-full bg-gray-blue-100 text-gray-blue-500 dark:bg-gray-blue-900 dark:text-gray-blue-300 [&_svg]:size-9">
          {icon}
        </div>
        <div className="flex max-w-[328px] flex-col gap-xs">
          <h4 className="text-sm font-semibold text-(--text-tertiary)">{title}</h4>
          {description && <div className="text-xs text-(--text-quaternary) [&_svg]:inline [&_svg]:size-4 [&_svg]:align-text-bottom">{description}</div>}
        </div>
        {actions && <div className="flex gap-lg">{actions}</div>}
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col items-center px-xl py-5xl text-center", className)}>
      <div className="relative mb-xl grid place-items-center">
        <div aria-hidden className="absolute size-40 rounded-full border border-(--border-secondary) opacity-60" />
        <div aria-hidden className="absolute size-28 rounded-full border border-(--border-secondary)" />
        <div className="relative grid size-12 place-items-center rounded-xl border border-(--border-secondary) bg-(--bg-primary) text-(--fg-secondary) shadow-xs [&_svg]:size-6">
          {icon}
        </div>
      </div>
      <h4 className="relative text-md font-semibold text-(--text-primary)">{title}</h4>
      {description && <div className="relative mt-xs max-w-[384px] text-sm text-(--text-tertiary)">{description}</div>}
      {actions && <div className="relative mt-3xl flex gap-lg">{actions}</div>}
    </div>
  );
}
