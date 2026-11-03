"use client";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Select — Figma: "Select" (~70) y "Dropdown / filter" (~90, p. ej. "Filtrar: Activos").
 * Pasa `prefix` para el patrón "Filtrar: <valor>".
 */
export function Select({
  value,
  defaultValue,
  onValueChange,
  options,
  placeholder,
  prefix,
  size = "md",
  className,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  prefix?: string;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <SelectPrimitive.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          "inline-flex items-center justify-between gap-md rounded-md border border-(--border-primary) bg-(--bg-primary) px-lg text-sm font-semibold text-(--text-primary) shadow-xs outline-none data-[placeholder]:font-normal data-[placeholder]:text-(--text-placeholder) focus-visible:ring-4 focus-visible:ring-indigo-100",
          size === "sm" ? "h-8 text-13" : "h-10",
          className,
        )}
      >
        <span className="flex items-center gap-xs truncate">
          {prefix && <span className="font-normal text-(--text-quaternary)">{prefix}</span>}
          <SelectPrimitive.Value placeholder={placeholder} />
        </span>
        <SelectPrimitive.Icon>
          <ChevronDown className="size-4 text-(--fg-quaternary)" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={6}
          className="z-50 min-w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-(--border-secondary) bg-(--bg-primary) p-xs shadow-lg animate-overlay-in"
        >
          <SelectPrimitive.Viewport>
            {options.map((o) => (
              <SelectPrimitive.Item
                key={o.value}
                value={o.value}
                className="relative flex h-9 cursor-pointer select-none items-center rounded-sm pl-2.5 pr-8 text-sm text-(--text-primary) outline-none data-[highlighted]:bg-(--bg-secondary)"
              >
                <SelectPrimitive.ItemText>{o.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-2.5">
                  <Check className="size-4 text-(--fg-brand)" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
