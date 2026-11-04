"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger, Badge } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function TabsDoc() {
  return (
    <>
      <Section title="Segmented" description="Cambio de vista dentro de una tarjeta o página (Dashboard: Overview / Reports; Lifecycle: Contracts / Requests).">
        <Preview code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
</Tabs>`}>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="contracts">
            <TabsList>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="requests">Requests</TabsTrigger>
            </TabsList>
          </Tabs>
        </Preview>
      </Section>
      <Section title="Underline" description="Navegación entre secciones de un panel (Configuración: General / Participantes / Expiraciones).">
        <Preview align="stretch" code={`<TabsList variant="underline">…</TabsList>`}>
          <Tabs defaultValue="participantes" className="w-full">
            <TabsList variant="underline">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="participantes">Participantes <Badge color="warning" className="h-5 px-1.5">2</Badge></TabsTrigger>
              <TabsTrigger value="expiraciones">Expiraciones</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="pt-xl text-sm text-(--text-tertiary)">Configuración general del documento.</TabsContent>
            <TabsContent value="participantes" className="pt-xl text-sm text-(--text-tertiary)">Agregá firmantes y aprobadores.</TabsContent>
            <TabsContent value="expiraciones" className="pt-xl text-sm text-(--text-tertiary)">Recordatorios y vencimientos.</TabsContent>
          </Tabs>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Segmented: 2–4 opciones cortas, cambia la vista del mismo contenido.", "Underline: secciones distintas de un mismo objeto.", "Nunca uses tabs para pasos secuenciales: usá un stepper."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "TabsList.variant", type: `"segmented" | "underline"`, default: `"segmented"`, description: "Estilo visual." },
          { name: "Tabs.value / defaultValue", type: "string", description: "Pestaña activa (Radix Tabs)." },
        ]} />
      </Section>
    </>
  );
}
