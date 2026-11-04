import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * FeaturedIcon — Figma: "Featured icon outline" (Untitled UI).
 * Ícono de 20px con dos anillos de contorno de 2px: interior 28px al 30% y exterior 38px al 10%.
 * En los diseños de Trato aparece en Color Success, tamaños md y lg (Notification, modales).
 * Los demás colores siguen la paleta de Untitled UI.
 */
const featuredIcon = cva("relative inline-grid shrink-0 place-items-center", {
  variants: {
    color: {
      success: "text-success-600",
      brand: "text-indigo-600",
      gray: "text-gray-600",
      warning: "text-warning-600",
      error: "text-error-600",
    },
    size: {
      md: "size-5 [&>svg]:size-5 [--inner:28px] [--outer:38px]",
      lg: "size-6 [&>svg]:size-6 [--inner:34px] [--outer:46px]",
    },
  },
  defaultVariants: { color: "success", size: "md" },
});

export interface FeaturedIconProps extends VariantProps<typeof featuredIcon> {
  icon: React.ReactNode;
  className?: string;
}

export function FeaturedIcon({ icon, color, size, className }: FeaturedIconProps) {
  return (
    <span aria-hidden className={cn(featuredIcon({ color, size }), className)}>
      <span className="absolute size-(--outer) rounded-full border-2 border-current opacity-10" />
      <span className="absolute size-(--inner) rounded-full border-2 border-current opacity-30" />
      {icon}
    </span>
  );
}
