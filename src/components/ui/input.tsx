import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Input — Figma: "Input field" / "Text Input".
 * 40px de alto, radio md (8), borde border-primary, sombra xs.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Ícono a la izquierda (Untitled UI, 16px). */
  leadingIcon?: React.ReactNode;
  /** Elemento a la derecha (ícono de ayuda, atajo, etc.). */
  trailing?: React.ReactNode;
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leadingIcon, trailing, invalid, ...props }, ref) => (
    <div
      className={cn(
        "flex h-10 w-full items-center gap-md rounded-md border border-(--border-primary) bg-(--bg-primary) px-lg shadow-xs transition-[box-shadow,border-color]",
        "focus-within:border-(--border-brand) focus-within:ring-4 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-900/50",
        invalid && "border-(--border-error) focus-within:border-(--border-error) focus-within:ring-error-100",
        props.disabled && "bg-(--bg-secondary) opacity-70",
        className,
      )}
    >
      {leadingIcon && <span className="text-(--fg-quaternary) [&_svg]:size-4">{leadingIcon}</span>}
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className="h-full min-w-0 flex-1 bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-placeholder) disabled:cursor-not-allowed"
        {...props}
      />
      {trailing && <span className="text-(--fg-quaternary) [&_svg]:size-4">{trailing}</span>}
    </div>
  ),
);
Input.displayName = "Input";

export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

/** Field — label + control + helper text (Auditoría Ayudas · Sección 2). */
export function Field({ label, hint, error, required, htmlFor, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-sm", className)}>
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-medium text-(--text-secondary)">
          {label}
          {required && <span className="ml-0.5 text-(--text-brand)">*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <p className={cn("text-sm", error ? "text-(--text-error)" : "text-(--text-tertiary)")}>{error ?? hint}</p>
      )}
    </div>
  );
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-24 w-full rounded-md border border-(--border-primary) bg-(--bg-primary) px-3.5 py-2.5 text-sm text-(--text-primary) shadow-xs outline-none placeholder:text-(--text-placeholder) focus:border-(--border-brand) focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
