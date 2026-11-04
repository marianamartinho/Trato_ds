"use client";
import { UploadField } from "@/components/ui/upload-field";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function UploadFieldDoc() {
  return (
    <>
      <Section title="Subir un anexo" description="Probá elegir un archivo: aparece en la lista con opción de quitarlo.">
        <Preview align="stretch" code={`<UploadField hint="PDF o Word, hasta 20 MB" accept=".pdf,.doc,.docx" multiple onFiles={(files) => …} />`}>
          <UploadField hint="PDF o Word, hasta 20 MB" accept=".pdf,.doc,.docx" multiple className="mx-auto w-full max-w-[532px]" />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ancho en Figma", "532 px"], ["Alto", "224 px"], ["Fondo · borde", "gray-100 · gray-300"], ["Radio", "sm (6)"], ["Ícono", "upload en círculo 40 px blanco"], ["Texto", "14 medium · text-primary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Funciona con clic, teclado y arrastrar y soltar.", "Indicá formatos y tamaño máximo en hint.", "Pendiente de definir: estados de carga con progreso y de error."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "label / hint", type: "string", description: "Texto principal y ayuda." },
          { name: "accept / multiple", type: "string / boolean", description: "Tipos aceptados y selección múltiple." },
          { name: "onFiles", type: "(files: File[]) => void", description: "Se llama con los archivos elegidos." },
        ]} />
      </Section>
    </>
  );
}
