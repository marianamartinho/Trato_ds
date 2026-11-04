import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * EmptyState — Auditoría Ayudas · Sección 3, "Carpeta vacía" (11.10), "Dashboard — empty state".
 * Ícono destacado sobre patrón de círculos concéntricos + título + texto + acciones.
 */
export function EmptyState({
  icon,
  title,
  description,
  actions,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
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
      {description && <p className="relative mt-xs max-w-[384px] text-sm text-(--text-tertiary)">{description}</p>}
      {actions && <div className="relative mt-3xl flex gap-lg">{actions}</div>}
    </div>
  );
}
