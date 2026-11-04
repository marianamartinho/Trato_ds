import tokens from "@/tokens/tokens.json";
import { Section, Guidelines, Specs } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";

const sizes = tokens.primitive.font.size as unknown as Record<string, [number, number]>;
const usage: Record<string, string> = {
  xxs: "Iniciales de avatar, metadatos mínimos",
  xs: "Badges, headers de tabla, captions, “Mostrar”",
  "13": "Celdas de tabla, filtros, buscador (denso)",
  sm: "Texto de UI por defecto, botones, inputs",
  md: "Títulos de tarjeta, texto destacado",
  lg: "Valores de KPI, subtítulos",
  xl: "Títulos de sección, modales",
  "display-xs": "Título de página (“Documentos”, “Dashboard”)",
  "display-sm": "Títulos de marketing / onboarding",
  "display-md": "Hero, emails",
};

export default function Typography() {
  return (
    <>
      <Section title="Familia" description="Inter es la única familia de producto. Su altura de x generosa funciona bien en interfaces densas como tablas de documentos.">
        <div className="mb-xl grid gap-xl md:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl">
            <p className="text-[120px] font-semibold leading-none tracking-[-0.04em] text-(--text-primary)">Aa</p>
            <p className="mt-xl text-lg font-medium text-(--text-primary)">Inter</p>
            <p className="font-mono text-xs text-(--text-quaternary)">font-family-body · font-family-display</p>
            <p className="absolute bottom-3xl right-3xl hidden text-right text-sm leading-6 text-(--text-quaternary) sm:block">
              ABCDEFGHIJKLM<br />NOPQRSTUVWXYZ<br />abcdefghijklm<br />nopqrstuvwxyz<br />0123456789 €$%
            </p>
          </div>
          <div className="flex flex-col gap-md">
            {Object.entries(tokens.primitive.font.weight).map(([n, w]) => (
              <div key={n} className="flex flex-1 items-center justify-between rounded-xl border border-(--border-secondary) bg-(--bg-primary) px-xl">
                <span className="text-xl text-(--text-primary)" style={{ fontWeight: w }}>Contrato de prestación</span>
                <span className="font-mono text-xs text-(--text-quaternary)">{n} · {w}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Escala" description="Cada tamaño trae su interlineado. En Tailwind, la clase text-* aplica ambos.">
        <div className="overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary)">
          {Object.entries(sizes).reverse().map(([k, [s, lh]]) => (
            <div key={k} className="grid items-center gap-md border-b border-(--border-secondary) px-xl py-lg last:border-0 md:grid-cols-[140px_1fr_240px]">
              <div>
                <code className="font-mono text-13 font-medium text-(--text-brand)">text-{k}</code>
                <p className="font-mono text-xs text-(--text-quaternary)">{s}/{lh}</p>
              </div>
              <p className="truncate font-medium text-(--text-primary)" style={{ fontSize: s, lineHeight: `${lh}px` }}>
                Prestación de Servicios
              </p>
              <p className="text-xs text-(--text-tertiary)">{usage[k]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Estilos de texto de Figma" description="Equivalencias con los estilos que usa el archivo (Untitled UI).">
        <Specs
          rows={[
            ["Text xs/Regular", "text-xs font-normal"],
            ["Text xs/Medium", "text-xs font-medium"],
            ["Text xs/Semibold", "text-xs font-semibold"],
            ["Text sm/Medium", "text-sm font-medium"],
            ["Text sm/Semibold", "text-sm font-semibold"],
            ["Text md/Medium", "text-md font-medium"],
            ["Text xl/Semibold", "text-xl font-semibold"],
            ["Button/Extra Small", "text-xs font-semibold"],
          ]}
        />
      </Section>

      <Section title="Reglas">
        <Guidelines
          items={[
            "Usá máximo 3 tamaños por vista. La jerarquía se logra con peso y color antes que con tamaño.",
            "Títulos de página: text-display-xs semibold. Títulos de tarjeta: text-md medium.",
            "Números en KPIs y contadores: medium o semibold, nunca bold.",
            "Nunca uses texto menor a 12px salvo iniciales de avatar.",
          ]}
        />
        <CodeBlock className="mt-xl" code={`<h1 className="text-display-xs font-semibold text-(--text-primary)">Documentos</h1>
<p className="text-sm text-(--text-tertiary)">2 carpetas · 34 documentos</p>`} />
      </Section>
    </>
  );
}
