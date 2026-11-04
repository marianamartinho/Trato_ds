"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Button } from "./button";

/**
 * Calendar — Figma: "_Calendar column header", "_Calendar cell/Month view",
 * "_Calendar cell date" y "_Calendar event/Month view" (Untitled UI) en
 * New Dashboard → vista mensual 1839:42459 (celda 1839:42463).
 *
 * Medidas reales (el frame del Figma está escalado ×1,341):
 * - Encabezado de columna: p-md, text-xs medium, text-quaternary.
 * - Celda: min-h 54, p-sm, gap-sm, borde border-secondary. Fuera de mes: bg gray-25,
 *   número text-disabled y eventos al 60 %.
 * - Fecha: círculo 24, text-xs semibold text-secondary. Hoy: bg warning-600 + blanco.
 *   Seleccionado: bg gray-50 (bg-active).
 * - Evento en celda: punto 8 px, gap-xs, pl-xs.
 * - Evento en lista ("Upcoming Deadlines"): borde, radio sm, p-lg, título text-sm semibold,
 *   hora text-xs medium, detalle text-sm.
 *
 * La navegación de mes (encabezado con flechas) no aparece en el Figma: sigue el
 * "Calendar header" de Untitled UI.
 */

export type CalendarEventColor = "gray" | "brand" | "accent" | "orange" | "success";

const dotColor: Record<CalendarEventColor, string> = {
  gray: "bg-gray-500",
  brand: "bg-gray-blue-500",
  accent: "bg-gray-blue-600",
  orange: "bg-orange-500",
  success: "bg-success-500",
};

export interface CalendarEventItem {
  id: string;
  /** Fecha del evento (Date o "AAAA-MM-DD"). */
  date: Date | string;
  title: string;
  color?: CalendarEventColor;
}

const toDate = (d: Date | string) => {
  if (d instanceof Date) return d;
  const [y, m, day] = d.split("-").map(Number);
  return new Date(y, m - 1, day);
};
const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

export interface CalendarProps {
  /** Mes visible (controlado). Cualquier día del mes sirve. */
  month?: Date;
  /** Mes visible inicial (no controlado). Default: hoy. */
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  /** Día que se marca como "hoy". Default: fecha actual. */
  today?: Date;
  selected?: Date;
  onSelect?: (date: Date) => void;
  events?: CalendarEventItem[];
  /** Máximo de puntos por celda; el resto se resume como "+N". */
  maxDots?: number;
  /** Iniciales de los días, empezando por lunes. */
  weekdays?: string[];
  locale?: string;
  className?: string;
}

export function Calendar({
  month: monthProp,
  defaultMonth,
  onMonthChange,
  today: todayProp,
  selected,
  onSelect,
  events = [],
  maxDots = 3,
  weekdays = ["L", "M", "X", "J", "V", "S", "D"],
  locale = "es",
  className,
}: CalendarProps) {
  const today = React.useMemo(() => todayProp ?? new Date(), [todayProp]);
  const [inner, setInner] = React.useState(() => defaultMonth ?? today);
  const month = monthProp ?? inner;
  const y = month.getFullYear();
  const m = month.getMonth();

  const go = (delta: number) => {
    const next = new Date(y, m + delta, 1);
    if (!monthProp) setInner(next);
    onMonthChange?.(next);
  };

  const byDay = React.useMemo(() => {
    const map = new Map<string, CalendarEventItem[]>();
    for (const e of events) {
      const k = key(toDate(e.date));
      map.set(k, [...(map.get(k) ?? []), e]);
    }
    return map;
  }, [events]);

  // Semanas que cubren el mes, empezando en lunes.
  const first = new Date(y, m, 1);
  const offset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const weeks = Math.ceil((offset + daysInMonth) / 7);
  const days = Array.from({ length: weeks * 7 }, (_, i) => new Date(y, m, 1 - offset + i));

  const title = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(month).replace(/^./, (c) => c.toUpperCase());
  const longDate = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className={cn("flex w-full flex-col gap-md", className)}>
      <div className="flex items-center justify-between gap-md">
        <h3 className="text-md font-semibold text-(--text-primary)" aria-live="polite">
          {title}
        </h3>
        <div className="flex items-center gap-xs">
          <Button variant="secondary" size="sm" iconOnly aria-label="Mes anterior" onClick={() => go(-1)}>
            <ChevronLeft />
          </Button>
          <Button variant="secondary" size="sm" iconOnly aria-label="Mes siguiente" onClick={() => go(1)}>
            <ChevronRight />
          </Button>
        </div>
      </div>

      <table className="w-full table-fixed border-separate border-spacing-0" aria-label={title}>
        <thead>
          <tr>
            {weekdays.map((d, i) => (
              <th
                key={i}
                scope="col"
                className={cn(
                  "border-y border-r border-(--border-secondary) bg-(--bg-primary) p-md text-xs font-medium text-(--text-quaternary)",
                  i === 0 && "rounded-tl-md border-l",
                  i === 6 && "rounded-tr-md",
                )}
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: weeks }, (_, w) => (
            <tr key={w}>
              {days.slice(w * 7, w * 7 + 7).map((d, i) => {
                const outside = d.getMonth() !== m;
                const isToday = sameDay(d, today);
                const isSelected = selected ? sameDay(d, selected) : false;
                const evs = byDay.get(key(d)) ?? [];
                const last = w === weeks - 1;
                return (
                  <td
                    key={i}
                    className={cn(
                      "h-[54px] border-b border-r border-(--border-secondary) p-0 align-top",
                      i === 0 && "border-l",
                      last && i === 0 && "rounded-bl-md",
                      last && i === 6 && "rounded-br-md",
                      outside ? "bg-gray-25 dark:bg-gray-900" : "bg-(--bg-primary)",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => onSelect?.(d)}
                      aria-current={isToday ? "date" : undefined}
                      aria-pressed={onSelect ? isSelected : undefined}
                      aria-label={`${longDate.format(d)}${evs.length ? `, ${evs.length} ${evs.length === 1 ? "evento" : "eventos"}: ${evs.map((e) => e.title).join(", ")}` : ""}`}
                      className="group flex size-full min-h-[54px] flex-col items-start gap-sm p-sm text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--border-brand)"
                    >
                      <span
                        className={cn(
                          "flex size-6 shrink-0 items-center rounded-full text-xs font-semibold",
                          isToday
                            ? "justify-center bg-warning-600 text-white"
                            : isSelected
                              ? "justify-center bg-gray-50 text-(--text-secondary) dark:bg-gray-800"
                              : "pl-xs group-hover:justify-center group-hover:bg-gray-50 group-hover:pl-0 dark:group-hover:bg-gray-800",
                          !isToday && !isSelected && (outside ? "text-(--text-disabled)" : "text-(--text-secondary)"),
                        )}
                      >
                        {d.getDate()}
                      </span>
                      {evs.length > 0 && (
                        <span className={cn("flex items-center gap-xs pl-xs", outside && "opacity-60")} aria-hidden>
                          {evs.slice(0, maxDots).map((e) => (
                            <span key={e.id} className={cn("size-2 rounded-full", dotColor[e.color ?? "gray"])} />
                          ))}
                          {evs.length > maxDots && (
                            <span className="text-xxs font-semibold text-(--text-quaternary)">+{evs.length - maxDots}</span>
                          )}
                        </span>
                      )}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Evento (tarjeta de "Upcoming Deadlines") ---------- */

export const calendarEventVariants = cva("flex w-full flex-col justify-center gap-xs rounded-sm border p-lg", {
  variants: {
    color: {
      brand: "border-gray-blue-200 bg-gray-blue-50 dark:border-gray-blue-800 dark:bg-gray-blue-900/40",
      gray: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
    },
  },
  defaultVariants: { color: "gray" },
});

const eventText = {
  brand: {
    title: "text-gray-blue-600 dark:text-gray-blue-300",
    time: "text-gray-blue-400",
    desc: "text-gray-blue-500 dark:text-gray-blue-300",
  },
  gray: {
    title: "text-gray-700 dark:text-gray-200",
    time: "text-gray-400",
    desc: "text-gray-600 dark:text-gray-400",
  },
};

export interface CalendarEventProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "title">,
    VariantProps<typeof calendarEventVariants> {
  title: React.ReactNode;
  /** Texto corto a la derecha (ej. "Hoy", "15 jul"). */
  time?: React.ReactNode;
  description?: React.ReactNode;
}

export function CalendarEvent({ title, time, description, color, className, ...props }: CalendarEventProps) {
  const t = eventText[color ?? "gray"];
  return (
    <div className={cn(calendarEventVariants({ color }), className)} {...props}>
      <div className="flex items-center gap-xxs">
        <p className={cn("min-w-0 flex-1 text-sm font-semibold", t.title)}>{title}</p>
        {time && <p className={cn("shrink-0 truncate text-xs font-medium", t.time)}>{time}</p>}
      </div>
      {description && <p className={cn("truncate text-sm", t.desc)}>{description}</p>}
    </div>
  );
}
