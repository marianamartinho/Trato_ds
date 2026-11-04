import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Card — Figma: "Card" (Dashboard / Document Editor). Superficie blanca, borde
 * border-secondary, radio 2xl (16) en dashboard.
 */
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl", className)}
      {...props}
    />
  );
}

export function CardHeader({
  title,
  action,
  className,
}: {
  title: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-xl flex items-center justify-between gap-lg", className)}>
      <h3 className="text-md font-medium text-(--text-primary)">{title}</h3>
      {action}
    </div>
  );
}
