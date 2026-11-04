"use client";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Select } from "./select";

/**
 * Pagination — Figma: "Pagination" armado (Workflows "Crear nuevo workflow", 471:49073).
 * Izquierda: "Página 1 de 16" (14 regular). Centro: botones 40×40 radio xl (12), borde gray-300,
 * página actual bg gray-200 + bold. Derecha: selector "10 resultados" (botón xs).
 */
function range(page: number, count: number): (number | "…")[] {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const out: (number | "…")[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(count - 1, page + 1);
  if (start > 2) out.push("…");
  for (let i = start; i <= end; i++) out.push(i);
  if (end < count - 1) out.push("…");
  out.push(count);
  return out;
}

const btn = "grid size-10 place-items-center rounded-xl border border-(--border-primary) bg-(--bg-primary) text-sm text-(--text-secondary) transition-colors hover:bg-(--bg-secondary) disabled:pointer-events-none disabled:opacity-50";

export function Pagination({
  page,
  pageCount,
  onPageChange,
  pageSize,
  pageSizes = [10, 25, 50],
  onPageSizeChange,
  className,
}: {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  pageSizes?: number[];
  onPageSizeChange?: (size: number) => void;
  className?: string;
}) {
  return (
    <nav aria-label="Paginación" className={cn("flex flex-wrap items-center justify-between gap-xl p-xl", className)}>
      <p className="w-48 text-sm text-(--text-secondary)">Página {page} de {pageCount}</p>
      <div className="flex items-center gap-lg">
        <button className={btn} onClick={() => onPageChange(page - 1)} disabled={page <= 1} aria-label="Página anterior"><ArrowLeft className="size-5" /></button>
        <div className="hidden items-center gap-lg sm:flex">
          {range(page, pageCount).map((p, i) =>
            p === "…" ? (
              <span key={`e${i}`} className="grid size-10 place-items-center text-sm text-(--text-quaternary)">…</span>
            ) : (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                aria-current={p === page ? "page" : undefined}
                className={cn(btn, p === page && "bg-gray-200 font-bold text-(--text-primary) hover:bg-gray-200 dark:bg-gray-800")}
              >
                {p}
              </button>
            ),
          )}
        </div>
        <button className={btn} onClick={() => onPageChange(page + 1)} disabled={page >= pageCount} aria-label="Página siguiente"><ArrowRight className="size-5" /></button>
      </div>
      <div className="flex w-48 justify-end">
        {pageSize && onPageSizeChange && (
          <Select
            size="sm"
            value={String(pageSize)}
            onValueChange={(v) => onPageSizeChange(Number(v))}
            options={pageSizes.map((s) => ({ value: String(s), label: `${s} resultados` }))}
          />
        )}
      </div>
    </nav>
  );
}
