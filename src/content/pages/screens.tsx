"use client";
import * as React from "react";
import { ArrowUpRight, LayersThree01 } from "@untitledui/icons";
import { Alert, Badge, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { DocHeader } from "@/components/docs/doc";
import { FigmaIcon } from "@/components/docs/figma-icon";
import { figmaPages, figmaUrl, type FigmaPage } from "@/content/registry";

const st: Record<FigmaPage["status"], { label: string; color: "success" | "warning" | "blue" }> = {
  done: { label: "Diseño en producción", color: "success" },
  wip: { label: "Diseño en progreso", color: "warning" },
  explore: { label: "Diseño en exploración", color: "blue" },
};

export default function Screens() {
  const [filter, setFilter] = React.useState<"all" | FigmaPage["status"]>("all");
  const list = figmaPages.filter((p) => filter === "all" || p.status === filter);
  return (
    <>
      <DocHeader
        eyebrow="Producto"
        title="Inventario de pantallas"
        description="Todas las áreas de producto del archivo de Figma, con su estado y acceso directo a cada pantalla. Sirve para saber qué existe, qué está aprobado y dónde mirar."
        figma={undefined}
        meta={<span className="text-xs text-(--text-quaternary)">{figmaPages.length} áreas · {figmaPages.reduce((n, p) => n + p.screens.length + 1, 0)} pantallas clave · wireframes y Graveyard excluidos</span>}
      />
      <Alert tone="warning" title="UI pendiente de aplicar en todos los flujos" className="mb-3xl">
        El estado de cada área es el estado del diseño en Figma. En la plataforma, ningún flujo tiene todavía la UI aplicada con el sistema, ni siquiera los que están en producción.
      </Alert>
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="mb-3xl">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="done">Diseño en producción</TabsTrigger>
          <TabsTrigger value="wip">En progreso</TabsTrigger>
          <TabsTrigger value="explore">Exploración</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid gap-xl md:grid-cols-2">
        {list.map((p) => (
          <article key={p.id} className="animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary) transition-shadow hover:shadow-lg">
            <a href={figmaUrl(p.hero.node)} target="_blank" rel="noreferrer" className="group relative block h-36 overflow-hidden border-b border-(--border-secondary) bg-(--bg-canvas)">
              <div className="absolute inset-0 bg-grid opacity-70" />
              <div className="absolute inset-x-6 bottom-0 top-6 flex overflow-hidden rounded-t-lg border border-b-0 border-(--border-secondary) bg-(--bg-primary) shadow-md transition-transform group-hover:-translate-y-1">
                <div className="flex w-8 flex-col items-center gap-1.5 border-r border-(--border-secondary) py-2">
                  <span className="size-3 rounded-full bg-gray-blue-600" />
                  {[0, 1, 2, 3, 4].map((i) => <span key={i} className={`size-3 rounded-[3px] ${i === 1 ? "bg-indigo-200" : "bg-(--bg-tertiary)"}`} />)}
                </div>
                <div className="flex-1 p-3">
                  <p className="text-xs font-semibold text-(--text-primary)">{p.hero.name}</p>
                  <div className="mt-2 grid grid-cols-3 gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-8 rounded-md border border-(--border-secondary)" />)}</div>
                </div>
              </div>
              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-(--bg-primary) px-2 py-0.5 text-[11px] font-semibold text-(--text-secondary) opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                <FigmaIcon className="size-3" /> Abrir pantalla principal
              </span>
            </a>
            <div className="flex flex-1 flex-col gap-md p-xl">
              <div className="flex flex-wrap items-center gap-md">
                <h2 className="mr-auto text-lg font-semibold text-(--text-primary)">{p.name}</h2>
                <Badge color="gray" shape="tag">{p.area}</Badge>
                <Badge color={st[p.status].color} dot>{st[p.status].label}</Badge>
                <Badge color="warning" shape="tag">UI pendiente</Badge>
              </div>
              <p className="text-sm text-(--text-tertiary)">{p.summary}</p>
              <ul className="mt-xs flex flex-wrap gap-sm">
                {p.screens.map((s) => (
                  <li key={s.node}>
                    <a href={figmaUrl(s.node)} target="_blank" rel="noreferrer" className="inline-flex h-7 items-center gap-xs rounded-sm border border-(--border-secondary) px-md text-xs font-medium text-(--text-secondary) transition-colors hover:border-(--border-brand) hover:text-(--text-brand)">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={figmaUrl(p.id)} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-xs pt-md text-sm font-semibold text-(--text-brand)">
                <LayersThree01 className="size-4" /> Ver página completa <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
