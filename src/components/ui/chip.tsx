import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Chip — Figma: "context-chip" (NEW AI Chat) y botones de acción rápida.
 * Contexto adjunto al composer del chat IA: "Master services agreement · TR-2024-0387".
 */
export function Chip({
  icon,
  children,
  onRemove,
  className,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 max-w-full items-center gap-sm rounded-sm border border-(--border-secondary) bg-(--bg-secondary) pl-md pr-1.5 text-xs font-semibold text-(--text-secondary) [&>svg]:size-3.5 [&>svg]:shrink-0",
        !onRemove && "pr-md",
        className,
      )}
    >
      {icon}
      <span className="truncate">{children}</span>
      {onRemove && (
        <button onClick={onRemove} aria-label="Quitar" className="grid size-4 shrink-0 place-items-center rounded-xs text-(--fg-quaternary) hover:bg-gray-200 hover:text-(--fg-secondary) dark:hover:bg-gray-700">
          <X className="size-3" />
        </button>
      )}
    </span>
  );
}

/** QuickAction — Figma: "Quick Action Item" (~50). Botón con contador a la derecha. */
export function QuickAction({ label, count, dotColor, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string; count?: number; dotColor?: string }) {
  return (
    <button
      className={cn(
        "flex h-9 items-center gap-md rounded-sm border border-(--border-secondary) bg-(--bg-primary) px-lg text-13 font-medium text-(--text-primary) transition-colors hover:border-(--border-primary) hover:bg-(--bg-secondary)",
        className,
      )}
      {...props}
    >
      {dotColor && <span className="size-2 rounded-xxs" style={{ background: dotColor }} />}
      <span className="flex-1 truncate text-left">{label}</span>
      {count !== undefined && (
        <span className="rounded-xs border border-(--border-secondary) px-1.5 text-xs text-(--text-quaternary)">{count}</span>
      )}
    </button>
  );
}
