import { notFound } from "next/navigation";
import { patterns } from "@/content/registry";
import { patternPages } from "@/content/maps";
import { DocHeader } from "@/components/docs/doc";
import { Pager } from "@/components/docs/pager";

export const dynamicParams = false;
export function generateStaticParams() {
  return patterns.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: patterns.find((p) => p.slug === slug)?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = patterns.find((p) => p.slug === slug);
  const Content = patternPages[slug];
  if (!entry || !Content) notFound();
  return (
    <>
      <DocHeader eyebrow="Patrones" title={entry.title} description={entry.description} status={entry.status} figma={entry.figma} />
      <Content />
      <Pager list={patterns} slug={slug} base="/patterns" />
    </>
  );
}
