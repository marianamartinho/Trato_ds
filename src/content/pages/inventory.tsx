"use client";
import * as React from "react";
import { Badge, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { DocHeader } from "@/components/docs/doc";
import { StatusBadge } from "@/components/docs/doc";
import { DocLink as Link } from "@/lib/nav";
import { components, levelLabel, type NavEntry } from "@/content/registry";

type Filter = "all" | "ready" | "planned";
const levels = ["atom", "molecule", "organism"] as const;

export default function Inventory() {
  const [filter, setFilter] = React.useState<Filter>("all");
  const list = components.filter((c) => filter === "all" || (filter === "ready" ? c.status !== "planned" : c.status === "planned"));
  const ready = components.filter((c) => c.status !== "planned").length;
  const groups: [string, NavEntry[]][] = [
    ...levels.map((l) => [levelLabel[l], list.filter((c) => c.level === l)] as [string, NavEntry[]]),
    ["Sin clasificar", list.filter((c) => !c.level)],
  ];
  return (
    <>
      <DocHeader
        eyebrow="Componentes"
        title="Inventario de componentes"
        description="Todos los componentes que usan los diseños de Trato, relevados del Figma. Los construidos tienen su página completa; los mapeados quedan como próximos pasos."
        figma={null}
        meta={<span className="text-xs text-(--text-quaternary)">{ready} construidos · {components.length - ready} mapeados · {components.length} en total</span>}
      />
      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mb-3xl">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="ready">Construidos</TabsTrigger>
          <TabsTrigger value="planned">Mapeados</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-col gap-4xl">
        {groups.filter(([, items]) => items.length > 0).map(([title, items]) => (
          <section key={title}>
            <h2 className="mb-lg text-lg font-semibold text-(--text-primary)">{title} <span className="text-sm font-normal text-(--text-quaternary)">· {items.length}</span></h2>
            <div className="overflow-x-auto rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <table className="w-full text-left text-sm">
                <thead className="bg-(--bg-secondary) text-xs text-(--text-tertiary)">
                  <tr>
                    <th className="px-xl py-md font-semibold">Componente</th>
                    <th className="px-xl py-md font-semibold">En Figma</th>
                    <th className="px-xl py-md font-semibold">Origen</th>
                    <th className="px-xl py-md text-right font-semibold">Uso</th>
                    <th className="px-xl py-md font-semibold">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((c) => (
                    <tr key={c.slug} className="border-t border-(--border-secondary)">
                      <td className="px-xl py-md">
                        <Link href={`/components/${c.slug}/`} className="font-semibold text-(--text-primary) hover:text-(--text-brand) hover:underline">{c.title}</Link>
                        <p className="text-xs text-(--text-quaternary)">{c.description}</p>
                      </td>
                      <td className="px-xl py-md font-mono text-xs text-(--text-secondary)">{c.figmaName ?? "—"}</td>
                      <td className="px-xl py-md">{c.origin ? <Badge color={c.origin === "Local" ? "accent" : "gray"} shape="tag">{c.origin}</Badge> : "—"}</td>
                      <td className="px-xl py-md text-right tabular-nums text-(--text-secondary)">{c.usage ? c.usage.toLocaleString("es") : "—"}</td>
                      <td className="px-xl py-md"><StatusBadge status={c.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
