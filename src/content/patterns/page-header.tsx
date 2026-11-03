"use client";
import { Archive, FolderPlus, Plus } from "lucide-react";
import { Button, SearchInput, Tooltip } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, Section } from "@/components/docs/doc";

export default function PageHeaderPattern() {
  return (
    <>
      <Section title="Anatomía" description="Título a la izquierda; búsqueda, acciones secundarias de ícono y acción primaria a la derecha.">
        <Preview align="stretch" canvas="canvas" code={`<header className="flex flex-wrap items-center gap-md">
  <h1 className="mr-auto text-display-xs font-semibold">Documentos</h1>
  <SearchInput scopes={["Nombre", "ID"]} placeholder="Buscar documentos" className="w-80" />
  <Button variant="secondary" iconOnly aria-label="Archivados"><Archive /></Button>
  <Button variant="secondary" iconOnly aria-label="Nueva carpeta"><FolderPlus /></Button>
  <Button><Plus /> Crear nuevo</Button>
</header>`}>
          <div className="rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl">
            <header className="flex flex-wrap items-center gap-md">
              <h1 className="mr-auto text-display-xs font-semibold text-(--text-primary)">Documentos</h1>
              <SearchInput scopes={["Nombre", "ID"]} placeholder="Buscar documentos" className="w-full sm:w-80" />
              <Tooltip content="Archivados"><Button variant="secondary" iconOnly aria-label="Archivados"><Archive /></Button></Tooltip>
              <Tooltip content="Nueva carpeta"><Button variant="secondary" iconOnly aria-label="Nueva carpeta"><FolderPlus /></Button></Tooltip>
              <Button><Plus /> Crear nuevo</Button>
            </header>
          </div>
        </Preview>
      </Section>
      <Section title="Reglas">
        <Guidelines items={["Una sola acción primary por header.", "Acciones de ícono siempre con tooltip.", "En mobile la búsqueda baja a una fila propia."]} />
      </Section>
    </>
  );
}
