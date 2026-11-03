import { notFound } from "next/navigation";
import { components } from "@/content/registry";
import { componentPages } from "@/content/maps";
import { DocHeader } from "@/components/docs/doc";
import { Pager } from "@/components/docs/pager";
import Planned from "@/content/components/planned";

export const dynamicParams = false;
export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: components.find((c) => c.slug === slug)?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = components.find((c) => c.slug === slug);
  if (!entry) notFound();
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
