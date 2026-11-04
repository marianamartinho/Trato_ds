"use client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { SearchInput } from "@/components/ui/search-input";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function PageHeaderDoc() {
  return (
    <>
      <Section title="Dashboard" description="Como en New Dashboard: título a la izquierda y búsqueda a la derecha.">
        <Preview align="stretch" canvas="canvas" code={`<PageHeader title="Dashboard" actions={<SearchInput placeholder="Buscar" className="w-80" />} />`}>
          <PageHeader title="Dashboard" actions={<SearchInput placeholder="Buscar" className="w-full sm:w-80" />} />
        </Preview>
      </Section>
      <Section title="Con avatar" description="Style Avatar: identifica a la persona o la entidad de la página.">
        <Preview align="stretch" canvas="canvas" code={`<PageHeader leading={<Avatar initials="AT" size="lg" />} title="Abogado Trato" description="Mis documentos" />`}>
          <PageHeader leading={<Avatar initials="AT" size="lg" />} title="Abogado Trato" description="34 documentos activos" actions={<Button variant="secondary">Editar perfil</Button>} />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Título", "20/30 semibold · gray-800"], ["Gap", "16"], ["Búsqueda", "Select sm · 320 px"], ["Breakpoint", "Desktop (único definido)"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Uno por página, arriba de todo.", "Para el patrón completo de Documentos (búsqueda + acciones + crear) ver Patrones › Header de página.", "Pendiente de definir: versión mobile."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title / description", type: "ReactNode", description: "Título y texto de apoyo." },
          { name: "leading", type: "ReactNode", description: "Avatar o logo antes del título." },
          { name: "actions", type: "ReactNode", description: "Búsqueda y botones a la derecha." },
        ]} />
      </Section>
    </>
  );
}
