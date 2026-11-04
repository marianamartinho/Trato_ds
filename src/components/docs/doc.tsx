import * as React from "react";
import { ArrowUpRight, Check, XClose } from "@untitledui/icons";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { figmaUrl, statusLabel, type Status } from "@/content/registry";
import { FigmaIcon } from "./figma-icon";
import { HASH } from "@/lib/env";

export function StatusBadge({ status }: { status: Status }) {
  const color = status === "ready" ? "success" : status === "beta" ? "warning" : "gray";
  return (
    <Badge color={color} dot>
      {statusLabel[status]}
    </Badge>
  );
}

export function FigmaLink({ node, label = "Ver en Figma", className }: { node?: string; label?: string; className?: string }) {
  return (
    <a
      href={figmaUrl(node)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-8 items-center gap-sm rounded-md border border-(--border-secondary) bg-(--bg-primary) px-2.5 text-xs font-semibold text-(--text-secondary) shadow-xs transition-colors hover:border-(--border-primary) hover:text-(--text-primary)",
        className,
      )}
    >
      <FigmaIcon className="size-3.5" />
      {label}
      <ArrowUpRight className="size-3 text-(--fg-quaternary)" />
    </a>
  );
}

export function DocHeader({
  eyebrow,
  title,
  description,
  status,
  figma,
  meta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  status?: Status;
  figma?: string | null;
  meta?: React.ReactNode;
}) {
  return (
    <header className="animate-fade-up mb-5xl flex flex-col gap-lg border-b border-(--border-secondary) pb-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-(--text-brand)">{eyebrow}</p>
      <div className="flex flex-wrap items-center gap-lg">
        <h1 className="text-display-sm font-semibold tracking-[-0.02em] text-(--text-primary)">{title}</h1>
        {status && <StatusBadge status={status} />}
      </div>
      <p className="max-w-[672px] text-lg text-(--text-tertiary)">{description}</p>
      {(figma !== null || meta) && (
        <div className="mt-xs flex flex-wrap items-center gap-md">
          {figma !== null && <FigmaLink node={figma} />}
          {meta}
        </div>
      )}
    </header>
  );
}

export function Section({ title, description, children, id }: { title: string; description?: React.ReactNode; children: React.ReactNode; id?: string }) {
  const anchor = id ?? title.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-");
  return (
    <section id={HASH ? undefined : anchor} className="mb-6xl scroll-mt-24">
      <h2 className="group mb-xs text-xl font-semibold text-(--text-primary)">
        {HASH ? (
          title
        ) : (
          <a href={`#${anchor}`} className="hover:underline hover:decoration-(--border-primary) hover:underline-offset-4">
            {title}
          </a>
        )}
      </h2>
      {description && <div className="mb-2xl max-w-[672px] text-md text-(--text-tertiary)">{description}</div>}
      {!description && <div className="mb-xl" />}
      {children}
    </section>
  );
}

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-(--border-secondary)">
      <table className="w-full text-left text-sm">
        <thead className="bg-(--bg-secondary) text-xs text-(--text-tertiary)">
          <tr>
            <th className="px-xl py-lg font-semibold">Prop</th>
            <th className="px-xl py-lg font-semibold">Tipo</th>
            <th className="px-xl py-lg font-semibold">Default</th>
            <th className="px-xl py-lg font-semibold">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-t border-(--border-secondary) align-top">
              <td className="px-xl py-lg font-mono text-13 font-medium text-(--text-brand)">{p.name}</td>
              <td className="max-w-64 px-xl py-lg font-mono text-xs text-(--text-secondary)">{p.type}</td>
              <td className="px-xl py-lg font-mono text-xs text-(--text-quaternary)">{p.default ?? "—"}</td>
              <td className="px-xl py-lg text-(--text-tertiary)">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DoDont({ items }: { items: { do?: React.ReactNode; dont?: React.ReactNode; caption: string }[] }) {
  return (
    <div className="grid gap-xl md:grid-cols-2">
      {items.map((it, i) => {
        const ok = it.do !== undefined;
        return (
          <figure key={i} className="overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary)">
            <div className="flex min-h-36 flex-wrap items-center justify-center gap-lg bg-dots p-3xl">{ok ? it.do : it.dont}</div>
            <figcaption className={cn("flex gap-md border-t-2 px-xl py-lg text-sm", ok ? "border-success-500" : "border-error-500")}>
              {ok ? <Check className="mt-0.5 size-4 shrink-0 text-success-600" /> : <XClose className="mt-0.5 size-4 shrink-0 text-error-600" />}
              <span className="text-(--text-secondary)">
                <strong className={ok ? "text-success-700 dark:text-success-400" : "text-error-700 dark:text-error-400"}>{ok ? "Sí. " : "No. "}</strong>
                {it.caption}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export function Guidelines({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-md md:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex gap-md rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-xl text-sm text-(--text-secondary)">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-(--fg-brand)" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Specs({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="grid overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary) sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className="flex items-center justify-between gap-xl border-b border-(--border-secondary) px-xl py-lg text-sm sm:odd:border-r">
          <dt className="text-(--text-tertiary)">{k}</dt>
          <dd className="text-right font-mono text-xs text-(--text-primary)">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
