import { notFound } from "next/navigation";
import { components } from "@/content/registry";
import { ComponentView } from "@/content/views";

export const dynamicParams = false;
export function generateStaticParams() {
  return components.map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: components.find((e) => e.slug === slug)?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!components.some((e) => e.slug === slug)) notFound();
  return <ComponentView slug={slug} />;
}
