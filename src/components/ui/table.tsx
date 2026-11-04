import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Table — Figma: "Table cell" (~4.900) y "Table header cell" (~650).
 * Header 13px/600 sobre bg-secondary, filas 58px con divisor border-secondary.
 */
export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
      <table className={cn("w-full border-collapse text-left text-13", className)} {...props} />
    </div>
  );
}
export function THead(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="bg-(--bg-secondary)" {...props} />;
}
export function TBody(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="[&>tr:last-child]:border-0" {...props} />;
}
export function TR({ className, selected, ...props }: React.HTMLAttributes<HTMLTableRowElement> & { selected?: boolean }) {
  return (
    <tr
      data-selected={selected || undefined}
      className={cn(
        "border-b border-(--border-secondary) transition-colors hover:bg-(--bg-secondary)/60 data-[selected]:bg-gray-blue-50 dark:data-[selected]:bg-gray-blue-900/40",
        className,
      )}
      {...props}
    />
  );
}
export function TH({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn("h-11 whitespace-nowrap border-b border-(--border-secondary) px-xl text-xs font-semibold text-(--text-tertiary)", className)}
      {...props}
    />
  );
}
export function TD({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("h-[58px] px-xl align-middle text-(--text-secondary)", className)} {...props} />;
}

/** Celda de dos líneas: dato principal + meta (p. ej. "Creado" / "11/08/2025"). */
export function CellStack({ top, bottom, invert }: { top: React.ReactNode; bottom: React.ReactNode; invert?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className={cn(invert ? "text-xs text-(--text-quaternary)" : "font-semibold text-(--text-primary)")}>{top}</span>
      <span className={cn(invert ? "text-13 text-(--text-secondary)" : "text-xs text-(--text-quaternary)")}>{bottom}</span>
    </div>
  );
}
