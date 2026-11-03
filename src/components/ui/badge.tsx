import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Badge — Figma: "Badge" (~1.880 instancias, presente en todas las páginas).
 * Pill con borde: días de vencimiento (error), estados, contadores.
 */
export const badgeVariants = cva(
  "inline-flex items-center gap-xs whitespace-nowrap border font-semibold [&_svg]:size-3",
  {
    variants: {
      color: {
        gray: "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300",
        brand: "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
        accent: "border-gray-blue-200 bg-gray-blue-50 text-gray-blue-700 dark:border-gray-blue-700 dark:bg-gray-blue-900 dark:text-gray-blue-200",
        error: "border-error-200 bg-error-50 text-error-700 dark:border-error-800 dark:bg-error-900/40 dark:text-error-300",
        warning: "border-warning-200 bg-warning-50 text-warning-700 dark:border-warning-800 dark:bg-warning-900/40 dark:text-warning-300",
        success: "border-success-200 bg-success-50 text-success-700 dark:border-success-800 dark:bg-success-900/40 dark:text-success-300",
        ai: "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
        blue: "border-blue-light-200 bg-blue-light-50 text-blue-light-700 dark:border-blue-light-800 dark:bg-blue-light-900/40 dark:text-blue-light-300",
      },
      size: {
        sm: "h-[22px] px-md text-xs",
        md: "h-6 px-2.5 text-sm",
      },
      shape: {
        pill: "rounded-full",
        tag: "rounded-xs",
      },
    },
    defaultVariants: { color: "gray", size: "sm", shape: "pill" },
  },
);

const dotColor: Record<string, string> = {
  gray: "bg-gray-500", brand: "bg-indigo-500", accent: "bg-gray-blue-500", error: "bg-error-500",
  warning: "bg-warning-500", success: "bg-success-500", ai: "bg-orange-500", blue: "bg-blue-light-500",
};

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {
  /** Muestra un punto de estado a la izquierda (Figma: "Dot"). */
  dot?: boolean;
}

export function Badge({ className, color, size, shape, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color, size, shape }), className)} {...props}>
      {dot && <span className={cn("size-1.5 rounded-full", dotColor[color ?? "gray"])} />}
      {children}
    </span>
  );
}
