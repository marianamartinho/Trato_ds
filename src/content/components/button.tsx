"use client";
import { ArrowUpRight, Download02, FolderPlus, Plus, Stars01, Trash01 } from "@untitledui/icons";
import { Button } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { DoDont, Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function ButtonDoc() {
  return (
    <>
      <Section title="Variantes" description="Una acción primary por zona. El resto, secondary o tertiary.">
        <Preview
          code={`<Button><Plus /> Crear nuevo</Button>
<Button variant="secondary">Mostrar</Button>
<Button variant="tertiary">Cancelar</Button>
<Button variant="soft">Trato agent</Button>
<Button variant="dark"><Stars01 /> Analizar documento con IA</Button>
<Button variant="destructive">Eliminar</Button>
<Button variant="link">View more</Button>`}
        >
          <Button><Plus /> Crear nuevo</Button>
          <Button variant="secondary">Mostrar</Button>
          <Button variant="tertiary">Cancelar</Button>
          <Button variant="soft">Trato agent</Button>
          <Button variant="dark"><Stars01 className="text-orange-400" /> Analizar documento con IA</Button>
          <Button variant="destructive"><Trash01 /> Eliminar</Button>
          <Button variant="link">View more</Button>
        </Preview>
      </Section>

      <Section title="Tamaños" description="xs para acciones dentro de tarjetas y tablas (“Mostrar”); md por defecto; lg para hero y onboarding.">
        <Preview code={`<Button size="xs" variant="secondary">Mostrar</Button>
<Button size="sm">Guardar</Button>
<Button size="md">Crear nuevo</Button>
<Button size="lg">Empezar</Button>`}>
          <Button size="xs" variant="secondary">Mostrar</Button>
          <Button size="sm">Guardar</Button>
          <Button size="md">Crear nuevo</Button>
          <Button size="lg">Empezar</Button>
        </Preview>
      </Section>

      <Section title="Solo ícono" description="Acciones de toolbar del header de Documentos (archivar, nueva carpeta, descargar). Siempre con aria-label.">
        <Preview code={`<Button variant="secondary" iconOnly aria-label="Nueva carpeta"><FolderPlus /></Button>`}>
          <Button variant="secondary" iconOnly aria-label="Nueva carpeta"><FolderPlus /></Button>
          <Button variant="soft" iconOnly aria-label="Descargar"><Download02 /></Button>
          <Button variant="tertiary" iconOnly size="sm" aria-label="Abrir"><ArrowUpRight /></Button>
        </Preview>
      </Section>

      <Section title="Estados">
        <Preview code={`<Button disabled>Guardar</Button>`}>
          <Button>Default</Button>
          <Button disabled>Deshabilitado</Button>
          <Button variant="secondary" disabled>Deshabilitado</Button>
        </Preview>
      </Section>

      <Section title="Especificaciones">
        <Specs rows={[["Alto md", "40px"], ["Padding md", "0 16px"], ["Radio", "md · 8px (xs: sm · 6px)"], ["Tipografía", "Inter 14/20 semibold"], ["Gap ícono", "6px"], ["Primary", "--bg-brand-solid · #6875F5"]]} />
      </Section>

      <Section title="Uso">
        <DoDont
          items={[
            { do: <><Button variant="secondary">Cancelar</Button><Button>Enviar a aprobación</Button></>, caption: "La acción principal a la derecha, la secundaria antes." },
            { dont: <><Button>Cancelar</Button><Button>Enviar</Button></>, caption: "Dos botones primary compitiendo por atención." },
          ]}
        />
        <div className="mt-xl"><Guidelines items={["Variante dark solo para la acción de IA dentro de paneles (“Analizar documento con IA”).", "Variante soft para accesos al agente (“Trato agent”) y acciones activas de toolbar."]} /></div>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: `"primary" | "secondary" | "tertiary" | "soft" | "dark" | "destructive" | "link"`, default: `"primary"`, description: "Estilo visual." },
            { name: "size", type: `"xs" | "sm" | "md" | "lg"`, default: `"md"`, description: "Alto: 28 / 36 / 40 / 44 px." },
            { name: "iconOnly", type: "boolean", default: "false", description: "Botón cuadrado para un solo ícono." },
            { name: "asChild", type: "boolean", default: "false", description: "Aplica los estilos al hijo (p. ej. <Link>)." },
          ]}
        />
      </Section>
    </>
  );
}
