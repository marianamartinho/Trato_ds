import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Button — Figma: "Buttons/Button" (~1.200 instancias) y "Button".
 * Referencias: "Crear nuevo" (primary), "Mostrar" (secondary xs),
 * "Trato agent" (soft), "Analizar documento con IA" (dark: Primary con fondo gray-800, texto e ícono blancos).
 */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-sm whitespace-nowrap font-semibold transition-[background,box-shadow,color,border-color] duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-(--bg-brand-solid) text-(--text-on-solid) shadow-xs hover:bg-(--bg-brand-solid-hover) active:shadow-none",
        secondary:
          "border border-(--border-primary) bg-(--bg-primary) text-(--text-secondary) shadow-xs hover:bg-(--bg-secondary) hover:text-(--text-primary)",
        tertiary: "text-(--text-tertiary) hover:bg-(--bg-secondary) hover:text-(--text-secondary)",
        soft: "bg-(--bg-brand-subtle) text-(--text-brand) hover:bg-gray-blue-200 dark:hover:bg-gray-blue-900",
        dark: "bg-gray-800 text-white shadow-xs hover:bg-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white",
        destructive: "bg-error-600 text-white shadow-xs hover:bg-error-700",
        link: "h-auto! px-0! text-(--text-brand) underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 rounded-sm px-2.5 text-xs [&_svg]:size-3.5",
        sm: "h-9 rounded-md px-3 text-sm [&_svg]:size-4",
        md: "h-10 rounded-md px-4 text-sm has-[>svg:first-child]:pl-3.5 [&_svg]:size-[18px]",
        lg: "h-11 rounded-md px-[18px] text-md [&_svg]:size-5",
      },
      iconOnly: { true: "px-0", false: "" },
    },
    compoundVariants: [
      { iconOnly: true, size: "xs", className: "w-7" },
      { iconOnly: true, size: "sm", className: "w-9" },
      { iconOnly: true, size: "md", className: "w-10" },
      { iconOnly: true, size: "lg", className: "w-11" },
    ],
    defaultVariants: { variant: "primary", size: "md", iconOnly: false },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renderiza el hijo (p. ej. <a>) con los estilos del botón. */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconOnly, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, iconOnly }), className)} {...props} />;
  },
);
Button.displayName = "Button";
