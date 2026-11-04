"use client";
import * as React from "react";
import { ClockRewind, File02, Lock01, XClose } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { ChatComposer, ChatHeader, ChatMessages, ChatPanel } from "@/components/ui/chat-panel";
import { Chip } from "@/components/ui/chip";
import { Message } from "@/components/ui/message";
import { Progress } from "@/components/ui/progress";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function ChatPanelDoc() {
  const [msgs, setMsgs] = React.useState([{ sent: false, text: "Hola, ¿qué querés saber de este contrato?" }]);
  return (
    <>
      <Section title="Chat sobre un contrato" description="Escribí un mensaje y presioná Enter.">
        <Preview canvas="canvas" code={`<ChatPanel>
  <ChatHeader title="AI chat" actions={…}>Privacy mode on</ChatHeader>
  <ChatMessages>{mensajes}</ChatMessages>
  <ChatComposer context={<Chip …/>} footer="AI usage: 19%" onSend={enviar} />
</ChatPanel>`}>
          <ChatPanel className="h-[560px] w-full max-w-[440px]">
            <ChatHeader title="AI chat" actions={<><Button variant="tertiary" size="sm" iconOnly aria-label="Historial"><ClockRewind /></Button><Button variant="tertiary" size="sm" iconOnly aria-label="Cerrar"><XClose /></Button></>}>
              <span className="ml-auto inline-flex items-center gap-xs text-xs text-(--text-tertiary)"><Lock01 className="size-3.5" /> Privacy mode on</span>
            </ChatHeader>
            <ChatMessages>
              {msgs.map((m, i) => <Message key={i} sent={m.sent} name={m.sent ? "Tú" : "Trato IA"} avatar={{ initials: "IA" }}>{m.text}</Message>)}
            </ChatMessages>
            <ChatComposer
              placeholder="Preguntá sobre este contrato"
              context={<Chip icon={<File02 />} onRemove={() => {}}>Master services agreement · TR-2024-0387</Chip>}
              footer={<span className="flex items-center gap-md">AI usage: 19% <Progress value={19} className="w-24" /></span>}
              onSend={(t) => setMsgs((xs) => [...xs, { sent: true, text: t }, { sent: false, text: "Respuesta de ejemplo: en producto la IA cita las cláusulas del contrato." }])}
            />
          </ChatPanel>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Vive dentro de un Drawer o SidePanel a la derecha.", "El contexto (documento o biblioteca) se muestra como Chip en el composer.", "Enter envía, Shift+Enter hace salto de línea.", "Para la pantalla completa ver Ejemplos › Chat IA."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "ChatHeader.title / actions / children", type: "ReactNode", description: "Título, acciones y fila secundaria (privacidad, contexto)." },
          { name: "ChatComposer.onSend", type: "(text) => void", description: "Se llama al enviar." },
          { name: "ChatComposer.context / footer", type: "ReactNode", description: "Chips de contexto y línea inferior." },
          { name: "ChatComposer.onAttach / disabled", type: "() => void / boolean", description: "Adjuntar y bloqueo (sin créditos)." },
        ]} />
      </Section>
    </>
  );
}
