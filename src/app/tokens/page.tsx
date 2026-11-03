import tokens from "@/tokens/tokens.json";
import { DocHeader, Guidelines, Section } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata = { title: "Tokens" };

export default function TokensPage() {
  return (
    <>
      <DocHeader eyebrow="Empezar" title="Tokens" description="Un único archivo JSON genera las variables CSS y las utilidades de Tailwind. Diseño y Frontend editan el mismo origen." status="ready" figma={null} />
      <Section title="Flujo" description="tokens.json → scripts/build-tokens.mjs → tokens.css (@theme de Tailwind + variables semánticas en :root y .dark).">
        <div className="mb-xl grid gap-md md:grid-cols-3">
          {[
            ["1. Fuente", "src/tokens/tokens.json", "Primitivos (color, spacing, radius, font, shadow) y semánticos por modo."],
            ["2. Build", "npm run tokens", "Se ejecuta solo antes de dev y build."],
            ["3. Consumo", "src/styles/tokens.css", "bg-indigo-500, p-md, rounded-xl, bg-(--bg-primary)…"],
          ].map(([t, c, d]) => (
            <div key={t} className="rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
              <p className="text-xs font-semibold text-(--text-brand)">{t}</p>
              <code className="mt-xs block font-mono text-13 text-(--text-primary)">{c}</code>
              <p className="mt-md text-sm text-(--text-tertiary)">{d}</p>
            </div>
          ))}
        </div>
        <Guidelines items={["Nombres alineados con las variables de Figma: spacing-md, radius-sm, text-primary…", "Para cambiar un color: editá tokens.json, corré npm run tokens y abrí un PR. Nunca edites tokens.css a mano.", "Los semánticos referencian primitivos con la sintaxis {grupo.paso}.", "Si Figma cambia una variable, se actualiza primero acá (fuente de verdad) y luego en la librería.", "Ojo: los nombres de espaciado (xs…7xl) pisan los anchos de contenedor de Tailwind. Para anchos máximos usá valores explícitos: max-w-[672px], no max-w-2xl."]} />
      </Section>
      <Section title="Uso en código">
        <CodeBlock title="Primitivos como utilidades" code={`<div className="rounded-xl p-xl gap-md shadow-xs bg-indigo-500 text-sm" />`} />
        <CodeBlock className="mt-md" title="Semánticos (cambian con el tema)" code={`<div className="bg-(--bg-primary) text-(--text-secondary) border border-(--border-secondary)" />

/* CSS plano */
.card { background: var(--bg-primary); color: var(--text-primary); }`} />
      </Section>
      <Section title="tokens.json" description="Contenido completo, listo para copiar.">
        <CodeBlock title="src/tokens/tokens.json" code={JSON.stringify(tokens, null, 2)} className="max-h-[560px] overflow-y-auto" />
      </Section>
    </>
  );
}
