import { ArrowUpRight, Tool01 } from "@untitledui/icons";
import { Alert, Badge } from "@/components/ui";
import { Section } from "@/components/docs/doc";
import { figmaUrl, levelLabel, type NavEntry } from "@/content/registry";

/** Ficha de un componente mapeado desde Figma que todavía no está construido. */
export default function Planned({ entry }: { entry: NavEntry }) {
  const rows: [string, React.ReactNode][] = [];
  if (entry.figmaName) rows.push(["Nombre en Figma", <code key="n" className="font-mono text-xs">{entry.figmaName}</code>]);
  if (entry.origin) rows.push(["Origen", entry.origin === "Untitled UI" ? "Librería Untitled UI" : "Armado en el archivo de Trato"]);
  if (entry.level) rows.push(["Nivel", levelLabel[entry.level].replace(/s$/, "")]);
  if (entry.usage) rows.push(["Uso en los diseños", `~${entry.usage.toLocaleString("es")} instancias`]);
  if (entry.pages?.length) rows.push(["Aparece en", entry.pages.join(" · ")]);
  return (
    <>
      <Alert tone="warning" title="Mapeado, todavía no construido" className="mb-5xl">
        Este componente se usa en los diseños de Trato y ya está relevado. Se construye en un próximo paso, a partir del Figma y de Untitled UI.
      </Alert>

      <Section title="Ficha de Figma">
        <dl className="overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-xs border-b border-(--border-secondary) px-xl py-lg text-sm last:border-0 sm:grid-cols-[200px_1fr]">
              <dt className="text-(--text-tertiary)">{k}</dt>
              <dd className="text-(--text-primary)">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {entry.variants && Object.keys(entry.variants).length > 0 && (
        <Section title="Variantes que se usan" description="Solo las que aparecen en los diseños. Son las que se van a construir.">
          <div className="flex flex-col gap-lg">
            {Object.entries(entry.variants).map(([prop, vals]) => (
              <div key={prop} className="flex flex-wrap items-center gap-sm">
                <span className="w-32 text-sm font-semibold text-(--text-secondary)">{prop}</span>
                {vals.map((v) => <Badge key={v} color="gray" shape="tag" size="md">{v}</Badge>)}
              </div>
            ))}
          </div>
        </Section>
      )}

      {entry.examples && entry.examples.length > 0 && (
        <Section title="Dónde verlo en Figma">
          <div className="flex flex-wrap gap-sm">
            {entry.examples.map((e) => (
              <a key={e.node} href={figmaUrl(e.node)} target="_blank" rel="noreferrer" className="inline-flex h-8 items-center gap-xs rounded-md border border-(--border-secondary) bg-(--bg-primary) px-md text-xs font-semibold text-(--text-secondary) hover:border-(--border-brand) hover:text-(--text-brand)">
                {e.name} <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </Section>
      )}

      <div className="flex items-center gap-md rounded-xl border border-dashed border-(--border-primary) bg-(--bg-secondary) p-xl text-sm text-(--text-tertiary)">
        <Tool01 className="size-5 shrink-0 text-(--fg-quaternary)" />
        Próximo paso: construirlo con las variantes de arriba y documentarlo con vista previa, código y props.
      </div>
    </>
  );
}
