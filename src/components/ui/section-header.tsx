import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * SectionHeader — Figma: "Section header" (Type Button group / Buttons, Tabs False).
 * Título 18/28 semibold text-primary, texto de apoyo opcional, acciones a la derecha, gap 16.
 */
export function SectionHeader({
  title,
  description,
  actions,
  divider,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  divider?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2xl", className)}>
      <div className="flex flex-wrap items-start gap-xl">
        <div className="flex min-w-0 flex-1 flex-col gap-xxs">
          <h2 className="text-lg font-semibold text-(--text-primary)">{title}</h2>
          {description && <p className="text-sm text-(--text-tertiary)">{description}</p>}
        </div>
        {actions && <div className="flex shrink-0 items-center gap-md">{actions}</div>}
      </div>
      {divider && <hr className="border-(--border-secondary)" />}
    </div>
  );
}
