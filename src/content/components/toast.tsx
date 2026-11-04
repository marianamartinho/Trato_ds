"use client";
import { Button } from "@/components/ui/button";
import { Snackbar, Toast, ToastProvider, useToast } from "@/components/ui/toast";
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
      <Section title="Snackbar (oscuro)" description="Variante compacta definida en el prototipo Documentos · Carpetas. Confirma acciones rápidas sobre la lista (mover, renombrar, eliminar) y ofrece Deshacer. Va abajo al centro.">
        <Preview code={`<Snackbar actionLabel="Deshacer" onAction={undo}>
  Movido a “Contratos 2025”
</Snackbar>`}>
          <div className="flex flex-col items-center gap-md">
            <Snackbar actionLabel="Deshacer" onAction={() => {}}>Movido a “Contratos 2025”</Snackbar>
            <Snackbar actionLabel="Deshacer" onAction={() => {}}>3 documentos eliminados</Snackbar>
          </div>
        </Preview>
        <Specs rows={[["Fondo", "gray-900 · #181D27"], ["Texto", "13/20 blanco"], ["Ícono", "check-circle 16 · success-500"], ["Acción", "semibold · gray-blue-300"], ["Radio · padding", "10 · 10 14 10 16"], ["Sombra", "0 12 16 -4 rgba(10,13,18,.2)"]]} />
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
          { name: "Snackbar · actionLabel / onAction", type: "ReactNode / () => void", description: "Acción de texto, normalmente Deshacer." },
          { name: "useToast().show", type: "(toast & { duration? }) => void", description: "Muestra un toast. duration 0 lo deja fijo." },
        ]} />
      </Section>
    </>
  );
}
