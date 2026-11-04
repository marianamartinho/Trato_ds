"use client";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/cn";

/** Toggle — Figma: "Toggle" (~70 instancias, p. ej. "Realizar firma en orden"). */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { size?: "sm" | "md" }
>(({ className, size = "md", ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex shrink-0 cursor-pointer items-center rounded-full bg-gray-200 p-0.5 transition-colors data-[state=checked]:bg-(--bg-brand-solid) disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700",
      size === "sm" ? "h-4 w-7" : "h-5 w-9",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "block rounded-full bg-white shadow-sm transition-transform",
        size === "sm" ? "size-3 data-[state=checked]:translate-x-3" : "size-4 data-[state=checked]:translate-x-4",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
