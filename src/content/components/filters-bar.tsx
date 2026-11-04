"use client";
import { Plus } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { FiltersBar } from "@/components/ui/filters-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function FiltersBarDoc() {
  return (
    <>
      <Section title="Sobre una tabla de workflows">
        <Preview align="stretch" canvas="canvas" code={`<FiltersBar
  search={<SearchInput placeholder="Buscar workflows" />}
  filters={<Select prefix="Estado:" defaultValue="activos" options={…} size="sm" />}
  actions={<Button><Plus /> Crear workflow</Button>}
/>`}>
          <FiltersBar
            search={<SearchInput placeholder="Buscar workflows" />}
            filters={<>
              <Select prefix="Estado:" defaultValue="activos" options={[{ value: "activos", label: "Activos" }, { value: "inactivos", label: "Inactivos" }]} />
              <Select prefix="Grupo:" defaultValue="todos" options={[{ value: "todos", label: "Todos" }, { value: "legal", label: "Legal" }]} />
            </>}
            actions={<Button><Plus /> Crear workflow</Button>}
          />
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Búsqueda a la izquierda, filtros en el medio y la acción principal a la derecha.", "En pantallas angostas los grupos bajan de línea.", "La instancia “Filters bar” del Figma está oculta: la composición sigue las tablas visibles de Workflows y Vista de solicitante."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "search", type: "ReactNode", description: "Búsqueda (SearchInput)." },
          { name: "filters", type: "ReactNode", description: "Selects o filtros." },
          { name: "actions", type: "ReactNode", description: "Botones a la derecha." },
        ]} />
      </Section>
    </>
  );
}
