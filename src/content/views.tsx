import { components, foundations, patterns } from "@/content/registry";
import { componentPages, foundationPages, patternPages } from "@/content/maps";
import { DocHeader } from "@/components/docs/doc";
import { Pager } from "@/components/docs/pager";
import Planned from "@/content/components/planned";

export function FoundationView({ slug }: { slug: string }) {
  const entry = foundations.find((f) => f.slug === slug);
  const Content = foundationPages[slug];
  if (!entry || !Content) return null;
  return (
    <>
      <DocHeader eyebrow="Fundamentos" title={entry.title} description={entry.description} status={entry.status} figma={null} />
      <Content />
      <Pager list={foundations} slug={slug} base="/foundations" />
    </>
  );
}

export function ComponentView({ slug }: { slug: string }) {
  const entry = components.find((c) => c.slug === slug);
  if (!entry) return null;
  const Content = componentPages[slug];
  return (
    <>
      <DocHeader
        eyebrow="Componentes"
        title={entry.title}
        description={entry.description}
        status={entry.status}
        figma={entry.figma}
        meta={
          <>
            {entry.usage && <span className="text-xs text-(--text-quaternary)">~{entry.usage.toLocaleString("es")} instancias en Figma</span>}
            {Content && <code className="rounded-sm bg-(--bg-tertiary) px-md py-xs font-mono text-xs text-(--text-secondary)">@/components/ui</code>}
          </>
        }
      />
      {Content ? <Content /> : <Planned entry={entry} />}
      <Pager list={components} slug={slug} base="/components" />
    </>
  );
}

export function PatternView({ slug }: { slug: string }) {
  const entry = patterns.find((p) => p.slug === slug);
  const Content = patternPages[slug];
  if (!entry || !Content) return null;
  return (
    <>
      <DocHeader eyebrow="Ejemplos" title={entry.title} description={entry.description} status={entry.status} figma={entry.figma} />
      <Content />
      <Pager list={patterns} slug={slug} base="/patterns" />
    </>
  );
}
