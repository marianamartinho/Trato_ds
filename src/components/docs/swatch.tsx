"use client";
import * as React from "react";
import { Check } from "@untitledui/icons";
import { cn } from "@/lib/cn";

function luminance(hex: string) {
  const m = hex.replace("#", "");
  if (m.length !== 6) return 1;
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(m.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Escala de un color primitivo: clic copia la variable CSS. */
export function Scale({ name, cssName, scale, verified = [] }: { name: string; cssName: string; scale: Record<string, string>; verified?: string[] }) {
  const [copied, setCopied] = React.useState<string | null>(null);
  return (
    <div className="mb-3xl">
      <div className="mb-md flex items-baseline gap-md">
        <h3 className="text-md font-semibold text-(--text-primary)">{name}</h3>
        <code className="font-mono text-xs text-(--text-quaternary)">--color-{cssName}-*</code>
      </div>
      <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-(--border-secondary) sm:grid-cols-6 lg:grid-cols-11">
        {Object.entries(scale).map(([step, hex]) => {
          const dark = luminance(hex) < 0.4;
          const v = `var(--color-${cssName}-${step})`;
          return (
            <button
              key={step}
              onClick={() => {
                navigator.clipboard?.writeText(v).catch(() => {});
                setCopied(step);
                setTimeout(() => setCopied(null), 1200);
              }}
              title={`Copiar ${v}`}
              className={cn("group relative flex h-24 flex-col justify-end p-md text-left transition-transform hover:z-10 hover:scale-[1.04] hover:shadow-lg", dark ? "text-white" : "text-gray-900")}
              style={{ background: hex }}
            >
              {verified.includes(step) && <span className="absolute right-md top-md size-1.5 rounded-full bg-current opacity-60" title="Verificado en Figma" />}
              <span className="text-xs font-semibold">{copied === step ? <Check className="size-3.5" /> : step}</span>
              <span className="font-mono text-[10px] uppercase opacity-75">{hex.replace("#", "")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Token semántico con vista en claro y oscuro. */
export function SemanticRow({ name, light, dark, kind }: { name: string; light: string; dark: string; kind: "bg" | "text" | "border" | "fg" | "other" }) {
  const sample = (mode: "light" | "dark") => (
    <div className={cn(mode, "grid h-10 w-full place-items-center rounded-md border border-(--border-secondary)", mode === "dark" ? "bg-gray-950" : "bg-white")}>
      {kind === "bg" && <span className="size-full rounded-md" style={{ background: `var(--${name})` }} />}
      {(kind === "text" || kind === "fg") && <span className="text-md font-semibold" style={{ color: `var(--${name})` }}>Aa</span>}
      {kind === "border" && <span className="h-6 w-16 rounded-sm border-2" style={{ borderColor: `var(--${name})` }} />}
      {kind === "other" && <span className="h-6 w-16 rounded-sm" style={{ background: `var(--${name})` }} />}
    </div>
  );
  return (
    <tr className="border-t border-(--border-secondary)">
      <td className="px-xl py-md"><code className="font-mono text-13 text-(--text-primary)">--{name}</code></td>
      <td className="w-32 px-md py-md">{sample("light")}<p className="mt-1 font-mono text-[10px] text-(--text-quaternary)">{light}</p></td>
      <td className="w-32 px-md py-md">{sample("dark")}<p className="mt-1 font-mono text-[10px] text-(--text-quaternary)">{dark}</p></td>
    </tr>
  );
}
