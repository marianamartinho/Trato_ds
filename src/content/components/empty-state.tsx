"use client";
import { File02, FolderPlus, Plus, SearchRefraction, Upload01, User03 } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function EmptyStateDoc() {
  return (
    <>
      <Section title="Panel" description="Variante del Figma de Trato para paneles laterales (Auditoría Ayudas · Empty states).">
        <Preview code={`<EmptyState
  variant="panel"
  icon={<File02 />}
  title="Sin elementos asignados aún"
  description={<>Puedes asignar revisiones desde el menú de elementos, presionando el ícono <User03 /> dentro del documento.</>}
/>`}>
          <div className="w-full max-w-[360px] rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
            <EmptyState
              variant="panel"
              icon={<File02 />}
              title="Sin elementos asignados aún"
              description={<>Puedes asignar revisiones desde el menú de elementos, presionando el ícono <User03 /> dentro del documento.</>}
            />
          </div>
        </Preview>
      </Section>
      <Section title="Página" description="Para tablas y páginas sin contenido, con acciones (Untitled UI).">
        <Preview align="stretch" code={`<EmptyState icon={<FolderPlus />} title="Esta carpeta está vacía" description="…" actions={…} />`}>
          <div className="grid gap-xl md:grid-cols-2">
            <div className="rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <EmptyState icon={<FolderPlus />} title="Esta carpeta está vacía" description="Arrastrá documentos acá o agregalos desde tu lista." actions={<><Button variant="secondary"><Upload01 /> Subir</Button><Button><Plus /> Añadir</Button></>} />
            </div>
            <div className="rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <EmptyState icon={<SearchRefraction />} title="Sin resultados" description="No encontramos documentos para “pagaré 2019”. Probá con otro nombre o ID." actions={<Button variant="secondary">Limpiar búsqueda</Button>} />
            </div>
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Panel · ilustración", "círculo 86 px · gray-blue-100"], ["Panel · título", "14 semibold · text-tertiary"], ["Panel · texto", "12 regular · text-quaternary"], ["Panel · separación", "24 entre ilustración y texto · 4 entre título y texto"], ["Página · ícono", "featured icon 48 px sobre círculos"], ["Página · título", "16 semibold · text-primary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Panel: dentro de paneles laterales y tarjetas; explica cómo llegar al contenido, sin botones si la acción está en otro lugar.", "Página: en tablas y vistas completas; ofrece la acción para empezar.", "Sin resultados: decí qué se buscó y cómo salir.", "Pendiente de definir: ilustraciones propias de Trato como asset (hoy se usa un ícono de Untitled UI dentro del círculo)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "variant", type: `"page" | "panel"`, default: `"page"`, description: "Página (Untitled UI) o panel (Figma de Trato)." },
          { name: "icon", type: "ReactNode", description: "Ícono o ilustración." },
          { name: "title / description", type: "string / ReactNode", description: "Mensaje. description admite íconos en línea." },
          { name: "actions", type: "ReactNode", description: "Hasta dos botones." },
        ]} />
      </Section>
    </>
  );
}
