"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Radio — Figma: "Checkbox" con Type Radio (Untitled UI, Size sm/md; States Default/Disabled/Selected).
 * Círculo 16 (sm) o 20 (md), borde border-primary; seleccionado: borde y punto brand.
 * Implementado con <input type="radio"> nativo para mantener teclado y formularios.
 */
const RadioCtx = React.createContext<{ name: string; value?: string; onChange: (v: string) => void; size: "sm" | "md" } | null>(null);

export function RadioGroup({
  name,
  value,
  defaultValue,
  onValueChange,
  size = "sm",
  label,
  className,
  children,
}: {
  name: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  size?: "sm" | "md";
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value ?? inner;
  return (
    <RadioCtx.Provider value={{ name, value: current, size, onChange: (v) => { setInner(v); onValueChange?.(v); } }}>
      <div role="radiogroup" aria-label={label} className={cn("flex flex-col gap-lg", className)}>{children}</div>
    </RadioCtx.Provider>
  );
}

export function Radio({ value, label, hint, disabled }: { value: string; label: React.ReactNode; hint?: React.ReactNode; disabled?: boolean }) {
  const ctx = React.useContext(RadioCtx);
  if (!ctx) throw new Error("<Radio> va dentro de <RadioGroup>");
  const checked = ctx.value === value;
  const md = ctx.size === "md";
  return (
    <label className={cn("flex cursor-pointer gap-md", disabled && "cursor-not-allowed opacity-50")}>
      <input
        type="radio"
        name={ctx.name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => ctx.onChange(value)}
        className={cn(
          "peer mt-0.5 grid shrink-0 appearance-none place-items-center rounded-full border border-(--border-primary) bg-(--bg-primary) transition-colors",
          "checked:border-(--bg-brand-solid) checked:bg-(--bg-brand-solid) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--focus-ring)",
          "before:size-1.5 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:before:opacity-100",
          md ? "size-5 before:size-2" : "size-4",
        )}
      />
      <span className="flex flex-col">
        <span className={cn("font-medium text-(--text-secondary)", md ? "text-md" : "text-sm")}>{label}</span>
        {hint && <span className={cn("text-(--text-tertiary)", md ? "text-md" : "text-sm")}>{hint}</span>}
      </span>
    </label>
  );
}
