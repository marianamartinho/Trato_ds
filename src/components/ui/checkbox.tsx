"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/** Checkbox — Figma: "Checkbox" (~380 instancias, selección en tablas). 16px, radio xs (4). */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer grid size-4 shrink-0 place-items-center rounded-xs border border-(--border-primary) bg-(--bg-primary) transition-colors",
      "data-[state=checked]:border-(--bg-brand-solid) data-[state=checked]:bg-(--bg-brand-solid) data-[state=indeterminate]:border-(--bg-brand-solid) data-[state=indeterminate]:bg-(--bg-brand-solid)",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="text-white">
      {props.checked === "indeterminate" ? <Minus className="size-3" strokeWidth={3} /> : <Check className="size-3" strokeWidth={3} />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";
