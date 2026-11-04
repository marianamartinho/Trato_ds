"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/cn";

/** Tooltip — Figma: "Tooltip" (~40) y Auditoría Ayudas · Sección 2. Fondo oscuro, radio md. */
export const TooltipProvider = TooltipPrimitive.Provider;

export function Tooltip({
  content,
  children,
  side = "top",
  description,
}: {
  content: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <TooltipPrimitive.Root delayDuration={150}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          sideOffset={6}
          className={cn(
            "z-50 max-w-[320px] rounded-md bg-gray-900 px-lg py-md text-xs font-semibold text-white shadow-lg animate-overlay-in dark:bg-gray-800",
          )}
        >
          {content}
          {description && <p className="mt-xxs font-medium text-gray-300">{description}</p>}
          <TooltipPrimitive.Arrow className="fill-gray-900 dark:fill-gray-800" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
