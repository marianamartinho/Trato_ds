import { notFound } from "next/navigation";
import { foundations } from "@/content/registry";
import { foundationPages } from "@/content/maps";
import { DocHeader } from "@/components/docs/doc";
import { Pager } from "@/components/docs/pager";

export const dynamicParams = false;
export function generateStaticParams() {
  return foundations.map((f) => ({ slug: f.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: foundations.find((f) => f.slug === slug)?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = foundations.find((f) => f.slug === slug);
  const Content = foundationPages[slug];
  if (!entry || !Content) notFound();
  return (
    <>
      <DocHeader eyebrow="Fundamentos" title={entry.title} description={entry.description} status={entry.status} figma={null} />
      <Content />
      <Pager list={foundations} slug={slug} base="/foundations" />
    </>
  );
}
