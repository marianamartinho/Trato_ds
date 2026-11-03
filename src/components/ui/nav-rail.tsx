import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * NavRail — Figma: "Sidebar Navigation" + "_Nav item button" (~1.840).
 * Barra lateral de íconos de la plataforma (72px). Ítem activo: fondo brand-subtle + ícono brand.
 */
export function NavRail({ children, footer, logo, className }: { children: React.ReactNode; footer?: React.ReactNode; logo?: React.ReactNode; className?: string }) {
  return (
    <nav className={cn("flex h-full w-[72px] flex-col items-center gap-xs py-xl", className)}>
      {logo && <div className="mb-2xl">{logo}</div>}
      <div className="flex flex-1 flex-col items-center gap-xs">{children}</div>
      {footer && <div className="flex flex-col items-center gap-lg">{footer}</div>}
    </nav>
  );
}

export function NavItem({
  icon,
  label,
  active,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      aria-label={label}
      title={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "grid size-10 place-items-center rounded-md text-(--fg-secondary) transition-colors hover:bg-(--bg-secondary) [&_svg]:size-5 [&_svg]:stroke-[1.75]",
        active && "bg-(--bg-brand-subtle) text-(--fg-brand) hover:bg-(--bg-brand-subtle)",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
