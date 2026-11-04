"use client";
import { AlertTriangle, CheckCircle, InfoCircle, Send01, Trash01 } from "@/components/icons";
import { FeaturedIcon } from "@/components/ui/featured-icon";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function FeaturedIconDoc() {
  return (
    <>
      <Section title="Colores" description="En los diseños de Trato aparece en success. El resto sigue la paleta del sistema.">
        <Preview code={`<FeaturedIcon color="success" icon={<CheckCircle />} />`}>
          <FeaturedIcon color="success" icon={<CheckCircle />} />
          <FeaturedIcon color="brand" icon={<Send01 />} />
          <FeaturedIcon color="gray" icon={<InfoCircle />} />
          <FeaturedIcon color="warning" icon={<AlertTriangle />} />
          <FeaturedIcon color="error" icon={<Trash01 />} />
        </Preview>
      </Section>
      <Section title="Tamaños">
        <Preview code={`<FeaturedIcon size="lg" icon={<CheckCircle />} />`}>
          <FeaturedIcon size="md" icon={<CheckCircle />} />
          <FeaturedIcon size="lg" icon={<CheckCircle />} />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ícono md", "20 px"], ["Anillo interior md", "28 px · borde 2 px · 30%"], ["Anillo exterior md", "38 px · borde 2 px · 10%"], ["Ícono lg", "24 px"], ["Color en Figma", "success-600"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Encabeza notificaciones, modales y estados vacíos.", "Es decorativo: el mensaje lo da el texto que lo acompaña."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "icon", type: "ReactNode", description: "Ícono del set del sistema." },
          { name: "color", type: `"success" | "brand" | "gray" | "warning" | "error"`, default: `"success"`, description: "Color del ícono y los anillos." },
          { name: "size", type: `"md" | "lg"`, default: `"md"`, description: "Tamaño." },
        ]} />
      </Section>
    </>
  );
}
