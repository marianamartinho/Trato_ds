"use client";
import * as React from "react";
import { ArrowUp, ChevronRight, ClockRewind, File02, HelpCircle, Lock01, PlusCircle, Stars01, XClose, Zap } from "@/components/icons";
import { Badge, Button, Chip, Progress, Tooltip } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, Section } from "@/components/docs/doc";

export default function AiChatPattern() {
  const [msg, setMsg] = React.useState("");
  const [thread, setThread] = React.useState<{ q: string; a: string }[]>([
    { q: "What are the payment terms?", a: "Invoices are issued monthly in arrears and payable within 30 days of receipt. Late payments accrue interest at the statutory rate, and fees are reviewed annually capped at CPI + 2%." },
  ]);
  const send = () => {
    if (!msg.trim()) return;
    setThread((t) => [...t, { q: msg, a: "Esta es una respuesta de ejemplo. En producto, la respuesta cita las cláusulas del contrato en contexto." }]);
    setMsg("");
  };
  return (
    <>
      <Section title="Panel de chat sobre un contrato" description="NEW AI Chat · 3.2. Escribí algo para probar el composer.">
        <Preview canvas="canvas">
          <div className="flex h-[620px] w-full max-w-[448px] flex-col overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary) shadow-xl">
            <div className="flex items-center gap-md border-b border-(--border-secondary) px-xl py-lg">
              <p className="mr-auto text-md font-semibold text-(--text-primary)">AI chat</p>
              {[[PlusCircle, "Nueva conversación"], [ClockRewind, "Historial"], [XClose, "Cerrar"]].map(([I, l]) => {
                const Icon = I as typeof XClose;
                return <Tooltip key={l as string} content={l as string}><Button variant="tertiary" size="sm" iconOnly aria-label={l as string}><Icon /></Button></Tooltip>;
              })}
            </div>
            <div className="flex items-center gap-md border-b border-(--border-secondary) px-xl py-md">
              <Badge color="gray" shape="tag" size="md" className="bg-(--bg-primary)"><File02 /> Native template</Badge>
              <HelpCircle className="size-3.5 text-(--fg-quaternary)" />
              <span className="ml-auto inline-flex items-center gap-xs text-xs text-(--text-tertiary)"><Lock01 className="size-3.5" /> Privacy mode on</span>
            </div>
            <div className="scrollbar-thin flex flex-1 flex-col gap-xl overflow-y-auto p-xl">
              {thread.map((t, i) => (
                <div key={i} className="flex animate-fade-up flex-col gap-lg">
                  <p className="ml-auto max-w-[85%] rounded-xl bg-(--bg-tertiary) px-lg py-md text-sm text-(--text-primary)">{t.q}</p>
                  <div>
                    <p className="mb-xs inline-flex items-center gap-xs text-xs font-semibold uppercase tracking-wide text-(--text-quaternary)"><Stars01 className="size-3 text-(--fg-ai)" /> AI chat</p>
                    <p className="text-sm leading-6 text-(--text-secondary)">{t.a}</p>
                    <p className="mt-sm flex flex-wrap items-center gap-md text-xs text-(--text-quaternary)">
                      Contract structure <span className="inline-flex items-center gap-xs"><Lock01 className="size-3" /> Privacy mode</span>
                      <button className="inline-flex items-center font-semibold text-(--text-secondary)">View details <ChevronRight className="size-3" /></button>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-(--border-secondary) p-xl">
              <div className="rounded-xl border border-(--border-primary) p-md focus-within:border-(--border-brand) focus-within:ring-4 focus-within:ring-gray-blue-100 dark:focus-within:ring-gray-blue-900/50">
                <Chip icon={<File02 />} onRemove={() => {}}>Master services agreement · Grupo Invex · TR-2024-0387</Chip>
                <div className="flex items-center gap-md pt-md">
                  <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask about this contract" className="flex-1 bg-transparent px-xs text-sm text-(--text-primary) outline-none placeholder:text-(--text-placeholder)" />
                  <Button variant="tertiary" size="sm" iconOnly aria-label="Adjuntar"><PlusCircle /></Button>
                  <Button size="sm" iconOnly aria-label="Enviar" disabled={!msg.trim()} onClick={send} className="rounded-full"><ArrowUp /></Button>
                </div>
              </div>
              <div className="mt-md flex items-center gap-md text-xs text-(--text-quaternary)">
                <Zap className="size-3.5" /> AI usage: 19% of this month’s allowance <Progress value={19} className="ml-auto w-24" />
              </div>
            </div>
          </div>
        </Preview>
      </Section>
      <Section title="Reglas">
        <Guidelines items={["El chat vive en un drawer derecho de ~470px; la página de fondo queda visible con overlay suave.", "El contexto (documento o biblioteca) siempre visible como chip en el composer.", "Privacy mode visible en el header y en cada respuesta.", "El uso de créditos aparece debajo del composer; al 100% el composer se deshabilita con un Alert."]} />
      </Section>
    </>
  );
}
