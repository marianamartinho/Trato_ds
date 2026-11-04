"use client";
import { Button } from "@/components/ui/button";
import { Toast, ToastProvider, useToast } from "@/components/ui/toast";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

function Demo() {
  const { show } = useToast();
  return (
    <Button onClick={() => show({ title: "Documento enviado a firmar", description: "Los 3 participantes recibieron el enlace por email." })}>
      Enviar a firmar
    </Button>
  );
}

export default function ToastDoc() {
  return (
    <>
      <Section title="Notificación" description="Confirmación flotante después de una acción (Figma: Notification · Success icon).">
        <Preview code={`<Toast
  title="Cambios guardados"
  description="El documento se actualizó correctamente."
  actions={<><button>Deshacer</button><button>Ver documento</button></>}
  onClose={() => {}}
/>`}>
          <Toast
            title="Cambios guardados"
            description="El documento se actualizó correctamente."
            actions={<><button className="text-(--text-tertiary) hover:text-(--text-secondary)">Deshacer</button><button className="text-(--text-brand) hover:underline">Ver documento</button></>}
            onClose={() => {}}
          />
        </Preview>
      </Section>
      <Section title="Mostrar desde una acción">
        <Preview code={`const { show } = useToast();
show({ title: "Documento enviado a firmar", description: "…" });`}>
          <ToastProvider><Demo /></ToastProvider>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ancho", "400 px"], ["Radio", "xl · 12 px"], ["Padding · gap", "16 · 16"], ["Sombra", "lg"], ["Ícono", "Featured icon success md"], ["Cerrar", "botón sm 36 px · x-close"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Para confirmar acciones que ya ocurrieron. Los errores que bloquean van en un Alert.", "Se cierra solo a los 5 segundos; las acciones importantes no van en un toast.", "Pendiente de definir: variantes de error y advertencia (el Figma solo usa success)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title / description", type: "ReactNode", description: "Texto principal y de apoyo." },
          { name: "actions", type: "ReactNode", description: "Acciones de texto." },
          { name: "onClose", type: "() => void", description: "Muestra el botón de cerrar." },
          { name: "useToast().show", type: "(toast & { duration? }) => void", description: "Muestra un toast. duration 0 lo deja fijo." },
        ]} />
      </Section>
    </>
  );
}
