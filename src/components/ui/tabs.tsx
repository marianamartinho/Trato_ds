"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/cn";

/**
 * Tabs — Figma: "Horizontal tabs" (~70) y segmented control del Dashboard ("Overview / Reports").
 * variant="segmented": píldora sobre fondo gris. variant="underline": pestañas con subrayado.
 */
type Variant = "segmented" | "underline";
const VariantCtx = React.createContext<Variant>("segmented");

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  variant = "segmented",
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { variant?: Variant }) {
  return (
    <VariantCtx.Provider value={variant}>
      <TabsPrimitive.List
        className={cn(
          variant === "segmented"
            ? "inline-flex items-center gap-xxs rounded-md bg-gray-100 p-1 dark:bg-gray-900"
            : "flex items-center gap-xl border-b border-(--border-secondary)",
          className,
        )}
        {...props}
      />
    </VariantCtx.Provider>
  );
}

export function TabsTrigger({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  const variant = React.useContext(VariantCtx);
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center gap-md whitespace-nowrap text-sm font-semibold transition-all disabled:opacity-50",
        variant === "segmented"
          ? "h-8 rounded-sm px-lg text-(--text-quaternary) hover:text-(--text-secondary) data-[state=active]:bg-(--bg-primary) data-[state=active]:text-(--text-primary) data-[state=active]:shadow-sm"
          : "-mb-px h-10 border-b-2 border-transparent px-xs text-(--text-quaternary) hover:text-(--text-secondary) data-[state=active]:border-(--fg-brand) data-[state=active]:text-(--text-brand)",
        className,
      )}
      {...props}
    />
  );
}

export const TabsContent = TabsPrimitive.Content;
