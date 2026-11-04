import * as React from "react";
import { ChevronRight, HomeLine } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * Breadcrumbs — Figma: "Breadcrumbs" (Untitled UI, Divider Chevron, Type Button).
 * En el archivo de Trato la instancia está oculta; la anatomía sigue Untitled UI:
 * ítems tipo botón (14/20 semibold, padding 4 8, radio sm) separados por chevron-right 16px.
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export function Breadcrumbs({ items, home, className }: { items: BreadcrumbItem[]; home?: BreadcrumbItem; className?: string }) {
  const all = home ? [{ ...home, isHome: true }, ...items] : items;
  return (
    <nav aria-label="Ruta" className={className}>
      <ol className="flex flex-wrap items-center gap-xs">
        {all.map((it, i) => {
          const last = i === all.length - 1;
          const isHome = "isHome" in it;
          const content = isHome ? <HomeLine className="size-5" aria-label={it.label} /> : it.label;
          const cls = cn(
            "inline-flex h-7 items-center rounded-sm px-md text-sm font-semibold transition-colors",
            last ? "bg-(--bg-secondary) text-(--text-secondary)" : "text-(--text-quaternary) hover:bg-(--bg-secondary) hover:text-(--text-secondary)",
            isHome && "px-xs",
          );
          return (
            <li key={i} className="flex items-center gap-xs">
              {last ? (
                <span aria-current="page" className={cls}>{content}</span>
              ) : it.href ? (
                <a href={it.href} className={cls}>{content}</a>
              ) : (
                <button type="button" onClick={it.onClick} className={cls}>{content}</button>
              )}
              {!last && <ChevronRight aria-hidden className="size-4 text-(--fg-quaternary)" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
