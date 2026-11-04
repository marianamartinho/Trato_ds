import { ArrowRight } from "lucide-react";
import tokens from "@/tokens/tokens.json";
import { DocHeader, Guidelines, Section } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";
import { Alert, Button } from "@/components/ui";
import { DocLink as Link } from "@/lib/nav";

/** Equivalencias reales: variable de Figma (archivo Platform Designs) → token en código. */
const figmaMap: [string, string, string][] = [
  ["indigo/500", "--color-indigo-500", "bg-indigo-500"],
  ["Colors/Background/bg-primary", "--bg-primary", "bg-(--bg-primary)"],
  ["Colors/Text/text-primary (900)", "--text-primary", "text-(--text-primary)"],
  ["Colors/Text/text-tertiary (600)", "--text-tertiary", "text-(--text-tertiary)"],
  ["Colors/Border/border-primary", "--border-primary", "border-(--border-primary)"],
  ["Colors/Foreground/fg-success-primary", "--fg-success", "text-(--fg-success)"],
  ["spacing-md", "--spacing-md", "p-md · gap-md"],
  ["radius-sm", "--radius-sm", "rounded-sm"],
  ["Font size/text-sm + Line height/text-sm", "--text-sm", "text-sm"],
];

function Layer({ n, title, desc, example, children }: { n: string; title: string; desc: string; example: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-md rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.06em] text-(--text-brand)">Capa {n}</p>
      <p className="text-md font-semibold text-(--text-primary)">{title}</p>
      <p className="text-sm text-(--text-tertiary)">{desc}</p>
      <div className="mt-auto flex min-h-16 items-center gap-md rounded-lg bg-(--bg-secondary) p-md">{children}</div>
      <code className="font-mono text-xs text-(--text-secondary)">{example}</code>
    </div>
  );
}

export default function TokensPage() {
  return (
    <>
      <DocHeader
        eyebrow="Empezar"
        title="Tokens"
        description="Los tokens son las decisiones de diseño con nombre: colores, espaciados, radios, tipografía y sombras. Se definen una sola vez y los usan Figma y el código con los mismos nombres."
        status="ready"
        figma={null}
      />

      <Section title="Cómo funcionan" description="Tres capas. Cada una se apoya en la anterior, así un cambio se hace en un solo lugar.">
        <div className="mb-xl flex flex-col items-stretch gap-md lg:flex-row">
          <Layer n="1" title="Primitivos" desc="La paleta y las escalas. No tienen significado, solo valor." example="--color-indigo-500: #6875F5">
            <span className="size-8 rounded-md bg-indigo-500" />
            <span className="font-mono text-xs text-(--text-tertiary)">indigo-500</span>
          </Layer>
          <ArrowRight className="mx-auto size-5 shrink-0 rotate-90 self-center text-(--fg-quaternary) lg:rotate-0" />
          <Layer n="2" title="Semánticos" desc="Dicen para qué se usa el valor. Cambian entre modo claro y oscuro." example="--bg-brand-solid: var(--color-indigo-500)">
            <span className="size-8 rounded-md bg-(--bg-brand-solid)" />
            <span className="font-mono text-xs text-(--text-tertiary)">bg-brand-solid</span>
          </Layer>
          <ArrowRight className="mx-auto size-5 shrink-0 rotate-90 self-center text-(--fg-quaternary) lg:rotate-0" />
          <Layer n="3" title="Componentes" desc="Los componentes solo usan semánticos. Nunca un hex ni un primitivo suelto." example="<Button variant=&quot;primary&quot;>">
            <Button size="sm">Crear nuevo</Button>
          </Layer>
        </div>
        <Guidelines
          items={[
            "En producto se usan los semánticos (--bg-primary, --text-secondary…). Los primitivos son para construir semánticos.",
            "Si cambia el color de marca, se cambia un primitivo o un semántico, y todos los componentes se actualizan solos.",
            "El modo oscuro no necesita componentes distintos: solo redefine los semánticos.",
          ]}
        />
      </Section>

      <Section
        title="Mismos nombres que en Figma"
        description="Los nombres salen de las variables del archivo de Figma de Trato, que siguen la convención de Untitled UI. Así, lo que Diseño ve en Figma se busca igual en el código."
      >
        <div className="overflow-x-auto rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
          <table className="w-full text-left text-sm">
            <thead className="bg-(--bg-secondary) text-xs text-(--text-tertiary)">
              <tr>
                <th className="px-xl py-md font-semibold">Variable en Figma</th>
                <th className="px-xl py-md font-semibold">Token CSS</th>
                <th className="px-xl py-md font-semibold">Clase en código</th>
              </tr>
            </thead>
            <tbody>
              {figmaMap.map(([f, c, t]) => (
                <tr key={f} className="border-t border-(--border-secondary)">
                  <td className="px-xl py-md text-(--text-secondary)">{f}</td>
                  <td className="px-xl py-md font-mono text-xs text-(--text-brand)">{c}</td>
                  <td className="px-xl py-md font-mono text-xs text-(--text-primary)">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Modos claro y oscuro" description="Los primitivos son iguales en los dos modos. Los semánticos apuntan a primitivos distintos según el modo.">
        <div className="grid gap-md sm:grid-cols-2">
          {(["light", "dark"] as const).map((m) => (
            <div key={m} className={`${m} rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl`}>
              <p className="mb-md text-xs font-semibold uppercase tracking-[0.06em] text-(--text-quaternary)">{m === "light" ? "Claro" : "Oscuro"}</p>
              <p className="text-md font-semibold text-(--text-primary)">Mis documentos</p>
              <p className="text-sm text-(--text-tertiary)">Mismo código, otros valores</p>
              <div className="mt-lg flex gap-md">
                <Button size="sm">Crear nuevo</Button>
                <Button size="sm" variant="secondary">Mostrar</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Cómo se usan en código" description="Los tokens se generan como variables CSS, así funcionan con cualquier framework. En este repo además se exponen como clases de Tailwind.">
        <div className="grid gap-md">
          <CodeBlock title="CSS (cualquier stack)" code={`.card {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}`} />
          <CodeBlock title="Tailwind" code={`<div className="rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-xl text-(--text-primary)" />`} />
          <CodeBlock title="JavaScript / TypeScript (gráficos, emails)" code={`import tokens from "@/tokens/tokens.json";

tokens.primitive.color.indigo["500"]; // "#6875F5"`} />
        </div>
      </Section>

      <Section title="Cómo se cambia un token" description="Un cambio de diseño llega al código en un solo paso y queda registrado.">
        <ol className="grid gap-md sm:grid-cols-4">
          {[
            ["Figma", "Diseño ajusta la variable en el archivo de Trato."],
            ["tokens.json", "Se actualiza el mismo valor en src/tokens/tokens.json."],
            ["Build", "npm run tokens regenera las variables CSS."],
            ["Revisión", "Pull request con revisión técnica antes de publicar."],
          ].map(([t, d], i) => (
            <li key={t} className="flex flex-col gap-sm rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-lg">
              <span className="grid size-7 place-items-center rounded-full bg-(--bg-brand-subtle) text-xs font-bold text-(--text-brand)">{i + 1}</span>
              <span className="text-sm font-semibold text-(--text-primary)">{t}</span>
              <span className="text-sm text-(--text-tertiary)">{d}</span>
            </li>
          ))}
        </ol>
        <Alert className="mt-xl" tone="info" title="Nunca se edita el CSS generado">
          src/styles/tokens.css se arma a partir de tokens.json. Cualquier cambio a mano se pierde en el próximo build.
        </Alert>
      </Section>

      <Section title="tokens.json" description="Contenido completo, listo para copiar.">
        <CodeBlock title="src/tokens/tokens.json" code={JSON.stringify(tokens, null, 2)} className="max-h-[560px] overflow-y-auto" />
      </Section>

      <p className="text-sm text-(--text-tertiary)">
        Siguiente: <Link href="/implementation/" className="font-semibold text-(--text-brand) underline">propuesta de implementación en la plataforma</Link>.
      </p>
    </>
  );
}
