import { DocLink as Link } from "@/lib/nav";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { NavEntry } from "@/content/registry";

export function Pager({ list, slug, base }: { list: NavEntry[]; slug: string; base: string }) {
  const i = list.findIndex((e) => e.slug === slug);
  const prev = list[i - 1];
  const next = list[i + 1];
  return (
    <nav className="mt-6xl grid gap-xl sm:grid-cols-2">
      {prev ? (
        <Link href={`${base}/${prev.slug}/`} className="group flex flex-col gap-xs rounded-xl border border-(--border-secondary) p-xl hover:border-(--border-brand)">
          <span className="inline-flex items-center gap-xs text-xs text-(--text-quaternary)"><ArrowLeft className="size-3" /> Anterior</span>
          <span className="font-semibold text-(--text-primary) group-hover:text-(--text-brand)">{prev.title}</span>
        </Link>
      ) : <span />}
      {next && (
        <Link href={`${base}/${next.slug}/`} className="group flex flex-col items-end gap-xs rounded-xl border border-(--border-secondary) p-xl text-right hover:border-(--border-brand)">
          <span className="inline-flex items-center gap-xs text-xs text-(--text-quaternary)">Siguiente <ArrowRight className="size-3" /></span>
          <span className="font-semibold text-(--text-primary) group-hover:text-(--text-brand)">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
