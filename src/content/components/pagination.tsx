"use client";
import * as React from "react";
import { Pagination } from "@/components/ui/pagination";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function PaginationDoc() {
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(10);
  return (
    <>
      <Section title="Debajo de una tabla" description="Como en Workflows: página actual, botones y cantidad de resultados.">
        <Preview align="stretch" code={`<Pagination page={page} pageCount={16} onPageChange={setPage} pageSize={size} onPageSizeChange={setSize} />`}>
          <div className="rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
            <Pagination page={page} pageCount={16} onPageChange={setPage} pageSize={size} onPageSizeChange={setSize} />
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Contenedor", "padding 16 · gap 16"], ["Botón de página", "40 × 40 · radio xl (12) · borde gray-300"], ["Página actual", "bg gray-200 · bold"], ["Texto", "“Página 1 de 16” · 14 regular"], ["Resultados", "selector sm · “10 resultados”"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Con más de 7 páginas se muestran la primera, la última y las vecinas, con “…”.", "En mobile se ocultan los números y quedan anterior y siguiente."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "page / pageCount / onPageChange", type: "number / number / (p) => void", description: "Paginado controlado." },
          { name: "pageSize / pageSizes / onPageSizeChange", type: "number / number[] / (n) => void", default: "[10, 25, 50]", description: "Selector de resultados por página." },
        ]} />
      </Section>
    </>
  );
}
