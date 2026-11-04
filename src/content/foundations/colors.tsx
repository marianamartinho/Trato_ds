import tokens from "@/tokens/tokens.json";
import { Scale, SemanticRow } from "@/components/docs/swatch";
import { Section, Guidelines } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";
import { Alert } from "@/components/ui";

const c = tokens.primitive.color;
const light = tokens.semantic.light as Record<string, string>;
const dark = tokens.semantic.dark as Record<string, string>;
const strip = (s: string) => s.replace(/[{}]/g, "");

const kindOf = (k: string) => (k.startsWith("bg") ? "bg" : k.startsWith("text") ? "text" : k.startsWith("border") ? "border" : k.startsWith("fg") ? "fg" : "other");

const groups: { title: string; prefix: string; note: string }[] = [
  { title: "Fondos", prefix: "bg-", note: "Superficies: página, tarjetas, rellenos de botón." },
  { title: "Texto", prefix: "text-", note: "Jerarquía de texto de primary (900) a quaternary (500)." },
  { title: "Bordes", prefix: "border-", note: "Divisores y contornos de controles." },
  { title: "Íconos (foreground)", prefix: "fg-", note: "Color de íconos y elementos gráficos." },
];

export default function Colors() {
  return (
    <>
      <Section
        title="Principios"
        description="Trato usa una base neutra (gris) con un único acento de marca, el gris azulado, y un acento funcional para la IA (naranja)."
      >
        <div className="mb-3xl grid gap-xl sm:grid-cols-3">
          {[
            { n: "Brand · Gray blue 600", hex: "#3E4784", d: "Acción primaria, links, foco, selección y navegación activa.", cls: "bg-gray-blue-600" },
            { n: "Brand suave · Gray blue 100", hex: "#EAECF5", d: "Fondo del ítem activo en la navegación y botones soft.", cls: "bg-gray-blue-100" },
            { n: "IA · Orange 500", hex: "#EF6820", d: "Todo lo que es inteligencia artificial: análisis, Clause Pulse.", cls: "bg-orange-500" },
          ].map((b) => (
            <div key={b.n} className="overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary)">
              <div className={`${b.cls} h-28`} />
              <div className="p-xl">
                <p className="text-sm font-semibold text-(--text-primary)">{b.n}</p>
                <p className="font-mono text-xs text-(--text-quaternary)">{b.hex}</p>
                <p className="mt-md text-sm text-(--text-tertiary)">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
        <Guidelines
          items={[
            "Usá tokens semánticos (--bg-primary, --text-secondary…) en producto. Los primitivos son para construir tokens, no para pantallas.",
            "El gris azulado de marca se reserva para la acción principal de cada vista: no más de un botón primary por zona.",
            "Naranja = IA. No lo uses para advertencias (eso es warning) ni para decorar.",
            "Los estados (error, warning, success) siempre van acompañados de texto o ícono: nunca solo color.",
          ]}
        />
      </Section>

      <Section title="Tokens semánticos" description="Cambian entre modo claro y oscuro. Son los únicos que el frontend debería referenciar directamente.">
        {groups.map((g) => (
          <div key={g.prefix} className="mb-3xl">
            <h3 className="mb-xs text-md font-semibold text-(--text-primary)">{g.title}</h3>
            <p className="mb-md text-sm text-(--text-tertiary)">{g.note}</p>
            <div className="overflow-x-auto rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <table className="w-full text-left">
                <thead className="bg-(--bg-secondary) text-xs text-(--text-tertiary)">
                  <tr><th className="px-xl py-md font-semibold">Token</th><th className="px-md py-md font-semibold">Claro</th><th className="px-md py-md font-semibold">Oscuro</th></tr>
                </thead>
                <tbody>
                  {Object.keys(light).filter((k) => k.startsWith(g.prefix)).map((k) => (
                    <SemanticRow key={k} name={k} light={strip(light[k])} dark={strip(dark[k])} kind={kindOf(k)} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        <CodeBlock
          title="Uso en Tailwind v4"
          code={`<div className="bg-(--bg-primary) border border-(--border-secondary) text-(--text-secondary)">
  <h3 className="text-(--text-primary)">Mis documentos</h3>
</div>`}
        />
      </Section>

      <Section
        title="Paletas primitivas"
        description="Escalas base. Clic en un color para copiar su variable."
      >
        <Scale name="Gray" cssName="gray" scale={c.gray} />
        <Scale name="Gray blue (brand)" cssName="gray-blue" scale={c.grayBlue} />
        <Scale name="Orange (IA)" cssName="orange" scale={c.orange} />
        <Scale name="Error" cssName="error" scale={c.error} />
        <Scale name="Warning" cssName="warning" scale={c.warning} />
        <Scale name="Success" cssName="success" scale={c.success} />
        <Scale name="Blue light" cssName="blue-light" scale={c.blueLight} />
      </Section>
    </>
  );
}
