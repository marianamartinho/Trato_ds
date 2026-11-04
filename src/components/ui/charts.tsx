"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Charts — Figma: gráficos de la librería ("Line and bar chart" con "_Y-axis",
 * "_X-axis", "_Chart data" y "Chart marker"; Data 12 months, Type Line) usados en
 * New Dashboard → "Signatures over time" (2213:33096, dentro de 2213:30245) y
 * "Contracts by type" (2213:30536).
 *
 * Valores del Figma:
 * - Línea y marcador: utility-brand-400 → gray-blue-400 (#717BBC). Área con degradé suave.
 * - Líneas del eje Y: punteadas, border-secondary. Eje X: text-xs, text-tertiary, px-3xl.
 * - Tooltip: fondo gray-600, radio md, px-xl py-md, text-xs semibold + medium en blanco.
 * - Barras: alto 22, radio md, fondo gray-blue-100 (utility-brand-100), etiqueta 10 px
 *   gray-blue-500, valor 10 px gray-500.
 *
 * SVG propio, sin librerías. La escala Y arranca en 0 y redondea el máximo a un
 * número "lindo" para que los valores sean comparables.
 */

export interface ChartDatum {
  /** Etiqueta corta del eje X (ej. "Ene"). */
  label: string;
  /** Valor numérico del punto. */
  value: number;
  /** Texto largo para el tooltip (ej. "Abril, 2026"). Si falta, se usa `label`. */
  detail?: string;
}

/* ---------- utilidades de escala ---------- */

function niceMax(max: number, ticks: number) {
  if (max <= 0) return ticks;
  const raw = max / ticks;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  const step = (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * pow;
  return step * ticks;
}

/** Curva monótona (Fritsch–Carlson): suave y sin sobrepasar los datos. */
function monotonePath(pts: [number, number][]) {
  const n = pts.length;
  if (n === 0) return "";
  if (n === 1) return `M${pts[0][0]},${pts[0][1]}`;
  const dx: number[] = [];
  const m: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx.push(pts[i + 1][0] - pts[i][0]);
    m.push((pts[i + 1][1] - pts[i][1]) / dx[i]);
  }
  const t: number[] = [m[0]];
  for (let i = 1; i < n - 1; i++) t.push(m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2);
  t.push(m[n - 2]);
  for (let i = 0; i < n - 1; i++) {
    if (m[i] === 0) {
      t[i] = 0;
      t[i + 1] = 0;
      continue;
    }
    const a = t[i] / m[i];
    const b = t[i + 1] / m[i];
    const s = a * a + b * b;
    if (s > 9) {
      const k = 3 / Math.sqrt(s);
      t[i] = k * a * m[i];
      t[i + 1] = k * b * m[i];
    }
  }
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const h = dx[i] / 3;
    d += `C${pts[i][0] + h},${pts[i][1] + t[i] * h} ${pts[i + 1][0] - h},${pts[i + 1][1] - t[i + 1] * h} ${pts[i + 1][0]},${pts[i + 1][1]}`;
  }
  return d;
}

/* ---------- LineChart ---------- */

export interface LineChartProps {
  data: ChartDatum[];
  /** Alto del área de trazado en px (Figma: 134). */
  height?: number;
  /** Cantidad de líneas guía horizontales (Figma: 5 → 4 intervalos). */
  gridLines?: number;
  /** Arma la primera línea del tooltip. Default: `${value}`. */
  formatValue?: (value: number) => string;
  /** Punto activo inicial (para mostrar el tooltip fijo, como en el Figma). */
  defaultActiveIndex?: number;
  /** Descripción accesible del gráfico. */
  "aria-label": string;
  className?: string;
}

const VB_W = 1000; // ancho lógico del viewBox; se estira al contenedor

export function LineChart({
  data,
  height = 134,
  gridLines = 5,
  formatValue = (v) => String(v),
  defaultActiveIndex,
  "aria-label": ariaLabel,
  className,
}: LineChartProps) {
  const id = React.useId();
  const [active, setActive] = React.useState<number | undefined>(defaultActiveIndex);
  const plotRef = React.useRef<HTMLDivElement>(null);

  const intervals = Math.max(1, gridLines - 1);
  const max = niceMax(Math.max(0, ...data.map((d) => d.value)), intervals);
  const n = data.length;
  const xPct = (i: number) => (n <= 1 ? 50 : (i / (n - 1)) * 100);
  const yPct = (v: number) => 100 - (v / max) * 100;

  const pts = data.map((d, i) => [(xPct(i) / 100) * VB_W, (yPct(d.value) / 100) * height] as [number, number]);
  const line = monotonePath(pts);
  const area = n > 1 ? `${line}L${pts[n - 1][0]},${height}L${pts[0][0]},${height}Z` : "";

  const pick = (clientX: number) => {
    const el = plotRef.current;
    if (!el || n === 0) return;
    const r = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    setActive(Math.round(ratio * (n - 1)));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (n === 0) return;
    const cur = active ?? -1;
    let next: number | undefined;
    if (e.key === "ArrowRight") next = Math.min(n - 1, cur + 1);
    else if (e.key === "ArrowLeft") next = Math.max(0, cur < 0 ? 0 : cur - 1);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else if (e.key === "Escape") return setActive(undefined);
    if (next !== undefined) {
      e.preventDefault();
      setActive(next);
    }
  };

  const a = active !== undefined ? data[active] : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-lg", className)}>
      <div className="px-3xl">
        <div
          ref={plotRef}
          role="group"
          aria-roledescription="gráfico de línea"
          aria-label={`${ariaLabel}. Usá las flechas para recorrer los valores.`}
          tabIndex={0}
          onPointerMove={(e) => pick(e.clientX)}
          onPointerLeave={() => setActive(defaultActiveIndex)}
          onFocus={() => active === undefined && n > 0 && setActive(n - 1)}
          onBlur={() => setActive(defaultActiveIndex)}
          onKeyDown={onKeyDown}
          className="relative rounded-xs outline-none focus-visible:ring-2 focus-visible:ring-(--border-brand) focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg-primary)"
          style={{ height }}
        >
          {/* _Y-axis: líneas guía punteadas */}
          {Array.from({ length: gridLines }, (_, i) => (
            <div
              key={i}
              aria-hidden
              className="absolute inset-x-0 border-t border-dashed border-(--border-secondary)"
              style={{ top: `${(i / intervals) * 100}%` }}
            />
          ))}

          <svg
            aria-hidden
            className="absolute inset-0 size-full overflow-visible text-gray-blue-400"
            viewBox={`0 0 ${VB_W} ${height}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            {area && <path d={area} fill={`url(#${id}-fill)`} />}
            <path d={line} fill="none" stroke="currentColor" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
          </svg>

          {/* Chart marker + tooltip */}
          {a && active !== undefined && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 w-px -translate-x-1/2 bg-gray-blue-400"
                style={{ left: `${xPct(active)}%`, top: `${yPct(a.value)}%` }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-blue-400 bg-gray-blue-400 ring-2 ring-(--bg-primary)"
                style={{ left: `${xPct(active)}%`, top: `${yPct(a.value)}%` }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center gap-xxs whitespace-nowrap rounded-md bg-gray-600 px-xl py-md text-center text-xs text-white shadow-lg backdrop-blur-[30px]"
                style={{
                  left: `clamp(0px, ${xPct(active)}%, 100%)`,
                  top: `calc(${yPct(a.value)}% - 12px)`,
                }}
              >
                <span className="font-semibold">{formatValue(a.value)}</span>
                <span className="font-medium">{a.detail ?? a.label}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* _X-axis */}
      <div aria-hidden className="relative h-[18px] px-3xl">
        <div className="relative h-full">
          {data.map((d, i) => (
            <span
              key={i}
              className="absolute top-0 -translate-x-1/2 whitespace-nowrap text-xs text-(--text-tertiary)"
              style={{ left: `${xPct(i)}%` }}
            >
              {d.label}
            </span>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {a ? `${a.detail ?? a.label}: ${formatValue(a.value)}` : ""}
      </p>
    </div>
  );
}

/* ---------- BarList ---------- */

export interface BarListItem {
  label: string;
  value: number;
}

export interface BarListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: BarListItem[];
  /** Formato del valor de la derecha. */
  formatValue?: (value: number) => string;
}

/** BarList — barras horizontales con valor (Figma: "Contracts by type", 2213:30536). */
export function BarList({ items, formatValue = (v) => String(v), className, ...props }: BarListProps) {
  const max = Math.max(0, ...items.map((i) => i.value)) || 1;
  return (
    <ul className={cn("flex w-full flex-col gap-xs", className)} {...props}>
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-4xl" aria-label={`${it.label}: ${formatValue(it.value)}`}>
          <div className="relative flex h-[22px] min-w-0 flex-1 items-center" aria-hidden>
            <div
              className="absolute inset-y-0 left-0 rounded-md bg-gray-blue-100 dark:bg-gray-blue-800"
              style={{ width: `${(it.value / max) * 100}%` }}
            />
            <span className="relative truncate px-md text-xxs leading-[18px] text-gray-blue-500 dark:text-gray-blue-200">{it.label}</span>
          </div>
          <span aria-hidden className="w-6 shrink-0 text-right text-xxs leading-[18px] tabular-nums text-gray-500 dark:text-gray-400">
            {formatValue(it.value)}
          </span>
        </li>
      ))}
    </ul>
  );
}
