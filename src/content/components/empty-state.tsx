"use client";
import { FolderOpen, Plus, SearchX, Upload } from "lucide-react";
import { Button, EmptyState } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function EmptyStateDoc() {
  return (
    <>
      <Section title="Ejemplos" description="Carpeta vacía (11.10) y búsqueda sin resultados.">
        <Preview align="stretch" code={`<EmptyState
  icon={<FolderOpen />}
  title="Esta carpeta está vacía"
  description="Arrastrá documentos acá o agregalos desde tu lista."
  actions={<><Button variant="secondary"><Upload /> Subir</Button><Button><Plus /> Añadir documentos</Button></>}
/>`}>
          <div className="grid gap-xl md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <EmptyState icon={<FolderOpen />} title="Esta carpeta está vacía" description="Arrastrá documentos acá o agregalos desde tu lista." actions={<><Button variant="secondary"><Upload /> Subir</Button><Button><Plus /> Añadir</Button></>} />
            </div>
            <div className="overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <EmptyState icon={<SearchX />} title="Sin resultados" description="No encontramos documentos para “pagaré 2019”. Probá con otro nombre o ID." actions={<Button variant="secondary">Limpiar búsqueda</Button>} />
            </div>
          </div>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Primera vez: explicá el valor y ofrecé la acción para empezar.", "Sin resultados: decí qué se buscó y cómo salir.", "Máximo dos acciones."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "icon", type: "ReactNode", description: "Ícono de 24px." },
          { name: "title / description", type: "string", description: "Mensaje." },
          { name: "actions", type: "ReactNode", description: "Botones." },
        ]} />
      </Section>
    </>
  );
}
