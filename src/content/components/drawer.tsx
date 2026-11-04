"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, SidePanel } from "@/components/ui/drawer";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function DrawerDoc() {
  return (
    <>
      <Section title="Panel fijo" description="Como “Análisis con IA” en el Document Editor.">
        <Preview canvas="canvas" code={`<SidePanel title="Análisis con IA" footer={…}>…</SidePanel>`}>
          <div className="h-[420px] w-full max-w-[360px] overflow-hidden rounded-xl border border-(--border-secondary)">
            <SidePanel title="Análisis con IA" onClose={() => {}}>
              <p className="mb-xl text-sm text-(--text-tertiary)">Extrae información y sugerencias relevantes del documento con inteligencia artificial.</p>
              <Button variant="dark" className="w-full">Analizar documento con IA</Button>
            </SidePanel>
          </div>
        </Preview>
      </Section>
      <Section title="Drawer modal" description="Entra desde la derecha sobre la página.">
        <Preview code={`<Drawer>
  <DrawerTrigger asChild><Button>Configuración</Button></DrawerTrigger>
  <DrawerContent title="Configuración" footer={…}>…</DrawerContent>
</Drawer>`}>
          <Drawer>
            <DrawerTrigger asChild><Button variant="secondary">Abrir configuración</Button></DrawerTrigger>
            <DrawerContent title="Configuración" description="Participantes y expiraciones" footer={<><Button variant="secondary">Cancelar</Button><Button>Guardar</Button></>}>
              <p className="text-sm text-(--text-tertiary)">Contenido del panel.</p>
            </DrawerContent>
          </Drawer>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ancho", "360 px (editor) · hasta 470 (chat IA)"], ["Header", "56 px · título 18 medium"], ["Cuerpo", "padding 16 · scroll propio"], ["Borde", "izquierdo · border-secondary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["SidePanel cuando el usuario trabaja con la página y el panel a la vez (editor).", "Drawer modal para tareas que interrumpen (configuración)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title / description", type: "ReactNode", description: "Encabezado." },
          { name: "actions / footer", type: "ReactNode", description: "Acciones del header y del pie." },
          { name: "width", type: "number", default: "360", description: "Ancho máximo en px." },
          { name: "SidePanel.onClose", type: "() => void", description: "Muestra el botón de cerrar." },
        ]} />
      </Section>
    </>
  );
}
