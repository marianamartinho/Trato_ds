import { notFound } from "next/navigation";
import { foundations } from "@/content/registry";
import { FoundationView } from "@/content/views";

export const dynamicParams = false;
export function generateStaticParams() {
  return foundations.map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: foundations.find((e) => e.slug === slug)?.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!foundations.some((e) => e.slug === slug)) notFound();
  return <FoundationView slug={slug} />;
}
