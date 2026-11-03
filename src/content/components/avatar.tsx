"use client";
import { Users } from "lucide-react";
import { Avatar, AvatarGroup } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function AvatarDoc() {
  return (
    <>
      <Section title="Tamaños" description="Iniciales de participantes (P1, FL, AR) o foto del usuario.">
        <Preview code={`<Avatar initials="FL" size="sm" />`}>
          <Avatar initials="AR" size="xs" />
          <Avatar initials="FL" size="sm" />
          <Avatar initials="AT" size="md" />
          <Avatar initials="MM" size="lg" />
        </Preview>
      </Section>
      <Section title="Grupo de participantes">
        <Preview code={`<AvatarGroup max={3}>
  <Avatar initials="P1" /><Avatar initials="P2" /><Avatar initials="FL" /><Avatar initials="AR" />
</AvatarGroup>`}>
          <AvatarGroup max={3}>
            <Avatar initials="P1" /><Avatar initials="P2" /><Avatar initials="FL" /><Avatar initials="AR" />
          </AvatarGroup>
          <div className="flex items-center -space-x-1.5">
            <span className="grid size-7 place-items-center rounded-full border border-(--bg-primary) bg-gray-blue-50 text-gray-blue-600"><Users className="size-3.5" /></span>
            <Avatar initials="AR" />
          </div>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Participantes sin nombre cargado: P1, P2… según orden de firma.", "Grupos: ícono de usuarios en gray-blue antes de los avatares individuales.", "Mostrar máximo 3 y resumir con +N."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "initials", type: "string", description: "1–2 letras." },
          { name: "src / alt", type: "string", description: "Foto del usuario." },
          { name: "size", type: `"xs" | "sm" | "md" | "lg"`, default: `"sm"`, description: "24 / 28 / 40 / 48 px." },
          { name: "AvatarGroup.max", type: "number", default: "3", description: "Avatares visibles antes del +N." },
        ]} />
      </Section>
    </>
  );
}
