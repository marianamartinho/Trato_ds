import * as React from "react";
import { ArrowDown, ArrowUp, InfoCircle } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * Stat — KPI del Dashboard ("Avg. time to sign", "Signed this month").
 * Se agrupan en StatGroup con divisores verticales.
 */
export interface StatProps {
  label: string;
  value: React.ReactNode;
  /** Variación porcentual vs. período anterior. */
  delta?: { value: string; trend: "up" | "down"; positive?: boolean; caption?: string };
  info?: boolean;
  className?: string;
}

export function Stat({ label, value, delta, info, className }: StatProps) {
  const positive = delta?.positive ?? delta?.trend === "up";
  const Arrow = delta?.trend === "down" ? ArrowDown : ArrowUp;
  return (
    <div className={cn("flex min-w-0 flex-col gap-md", className)}>
      <div className="flex items-center gap-sm text-sm text-(--text-tertiary)">
        <span className="truncate">{label}</span>
        {info && <InfoCircle className="size-3.5 text-(--fg-quaternary)" />}
      </div>
      <div className="flex flex-wrap items-baseline gap-x-md gap-y-xxs">
        <span className="whitespace-nowrap text-lg font-medium text-(--text-primary)">{value}</span>
        {delta && (
          <span className="inline-flex items-center gap-xxs whitespace-nowrap text-xxs">
            <span className={cn("inline-flex items-center gap-xxs font-semibold", positive ? "text-(--text-success)" : "text-(--text-error)")}>
              <Arrow className="size-3" />
              {delta.value}
            </span>
            {delta.caption && <span className="text-(--text-quaternary)">{delta.caption}</span>}
          </span>
        )}
      </div>
    </div>
  );
}

export function StatGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-xl rounded-2xl border border-(--border-secondary) bg-(--bg-primary) px-xl py-xl md:flex md:divide-x md:divide-(--border-secondary) [&>*]:md:flex-1 [&>*]:md:px-3xl [&>*:first-child]:md:pl-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
