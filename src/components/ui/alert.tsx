import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertOctagon, AlertTriangle, CheckCircle, InfoCircle, Stars01, XClose } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * Banner / Alert — Auditoría Ayudas · Sección 5 ("Banner - badge").
 * layout="banner": barra a todo el ancho (p. ej. aviso amarillo sobre el documento).
 * layout="inline": tarjeta de aviso dentro de un panel.
 */
const alertVariants = cva("flex gap-lg text-sm", {
  variants: {
    tone: {
      info: "border-gray-blue-200 bg-gray-blue-25 text-gray-blue-700 [--icon:var(--color-gray-blue-500)] dark:border-gray-blue-700 dark:bg-gray-blue-900/50 dark:text-gray-blue-200",
      warning: "border-warning-300 bg-warning-50 text-warning-800 [--icon:var(--color-warning-600)] dark:border-warning-800 dark:bg-warning-900/30 dark:text-warning-200",
      error: "border-error-300 bg-error-25 text-error-700 [--icon:var(--color-error-600)] dark:border-error-800 dark:bg-error-900/30 dark:text-error-200",
      success: "border-success-300 bg-success-25 text-success-700 [--icon:var(--color-success-600)] dark:border-success-800 dark:bg-success-900/30 dark:text-success-200",
      ai: "border-orange-200 bg-orange-25 text-orange-800 [--icon:var(--color-orange-500)] dark:border-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
    },
    layout: {
      inline: "rounded-xl border p-xl",
      banner: "items-center border-b px-xl py-md",
    },
  },
  defaultVariants: { tone: "info", layout: "inline" },
});

const icons = { info: InfoCircle, warning: AlertTriangle, error: AlertOctagon, success: CheckCircle, ai: Stars01 };

export interface AlertProps extends VariantProps<typeof alertVariants> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

export function Alert({ tone = "info", layout, title, children, action, onDismiss, className }: AlertProps) {
  const Icon = icons[tone ?? "info"];
  return (
    <div role={tone === "error" ? "alert" : "status"} className={cn(alertVariants({ tone, layout }), className)}>
      <Icon className="mt-px size-5 shrink-0 text-(--icon)" />
      <div className={cn("flex min-w-0 flex-1 gap-xs", layout === "banner" ? "flex-row flex-wrap items-center gap-x-md" : "flex-col")}>
        {title && <p className="font-semibold">{title}</p>}
        {children && <div className="opacity-90">{children}</div>}
        {action && layout !== "banner" && <div className="mt-md flex gap-lg">{action}</div>}
      </div>
      {action && layout === "banner" && <div className="shrink-0">{action}</div>}
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Cerrar" className="grid size-6 shrink-0 place-items-center rounded-sm opacity-70 hover:opacity-100">
          <XClose className="size-4" />
        </button>
      )}
    </div>
  );
}
