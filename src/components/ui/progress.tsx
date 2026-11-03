import { cn } from "@/lib/cn";

/** Progress — uso de IA ("AI usage: 19% of this month's allowance"), pasos. */
export function Progress({ value, tone = "accent", className }: { value: number; tone?: "accent" | "brand" | "ai" | "error"; className?: string }) {
  const bar = { accent: "bg-gray-blue-600", brand: "bg-(--bg-brand-solid)", ai: "bg-orange-500", error: "bg-error-500" }[tone];
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800", className)}
    >
      <div className={cn("h-full rounded-full transition-[width] duration-500", bar)} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

/** SegmentedBar — barra de ciclo de vida (Draft / Negotiation / Approval / Signing). */
export function SegmentedBar({ segments, className }: { segments: { label: string; value: number; color: string }[]; className?: string }) {
  const total = segments.reduce((a, s) => a + s.value, 0) || 1;
  return (
    <div className={cn("flex flex-col gap-lg", className)}>
      <div className="flex h-4 gap-0.5 overflow-hidden rounded-sm">
        {segments.map((s) => (
          <div key={s.label} className="h-full" style={{ width: `${(s.value / total) * 100}%`, background: s.color }} title={`${s.label}: ${s.value}`} />
        ))}
      </div>
      <div className="flex justify-between gap-md">
        {segments.map((s) => (
          <div key={s.label} className="border-l-2 pl-sm" style={{ borderColor: s.color }}>
            <p className="text-13 text-(--text-tertiary)">{s.label}</p>
            <p className="text-md font-semibold text-(--text-primary)">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
