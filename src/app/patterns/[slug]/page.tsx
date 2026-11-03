import { notFound } from "next/navigation";
import { patterns } from "@/content/registry";
import { PatternView } from "@/content/views";

export const dynamicParams = false;
export function generateStaticParams() {
  return patterns.map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: patterns.find((e) => e.slug === slug)?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!patterns.some((e) => e.slug === slug)) notFound();
  return <PatternView slug={slug} />;
}
