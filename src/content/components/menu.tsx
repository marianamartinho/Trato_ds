"use client";
import { Copy03, DotsVertical, Download02, Edit05, FolderDownload, Share07, Trash01 } from "@untitledui/icons";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function MenuDoc() {
  return (
    <>
      <Section title="Menú de documento" description="Figma 11.2 / 11.3: acciones del ⋮ en cada fila.">
        <Preview code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="tertiary" size="sm" iconOnly aria-label="Acciones"><DotsVertical /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem icon={<Edit05 />}>Renombrar</DropdownMenuItem>
    <DropdownMenuItem icon={<FolderDownload />}>Mover a carpeta</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem icon={<Trash01 />} destructive>Eliminar</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="secondary" iconOnly aria-label="Acciones"><DotsVertical /></Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem icon={<Edit05 />} shortcut="R">Renombrar</DropdownMenuItem>
              <DropdownMenuItem icon={<FolderDownload />}>Mover a carpeta</DropdownMenuItem>
              <DropdownMenuItem icon={<Copy03 />}>Duplicar</DropdownMenuItem>
              <DropdownMenuItem icon={<Share07 />}>Compartir</DropdownMenuItem>
              <DropdownMenuItem icon={<Download02 />}>Descargar PDF</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem icon={<Trash01 />} destructive>Eliminar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Orden: editar → organizar → compartir → exportar → destructivas al final, separadas.", "Máximo ~8 ítems. Agrupá con separadores.", "Destructivas en rojo y con confirmación (Modal)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "DropdownMenuItem.icon", type: "ReactNode", description: "Ícono 16px." },
          { name: "DropdownMenuItem.shortcut", type: "string", description: "Atajo de teclado." },
          { name: "DropdownMenuItem.destructive", type: "boolean", description: "Estilo rojo." },
        ]} />
      </Section>
    </>
  );
}
