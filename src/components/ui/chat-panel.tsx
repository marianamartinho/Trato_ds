"use client";
import * as React from "react";
import { ArrowUp, PlusCircle } from "@untitledui/icons";
import { cn } from "@/lib/cn";
import { Button } from "./button";

/**
 * ChatPanel — Figma: "Chat Bubble" armado (Document Editor 267:17611, radio xl, padding 12) y paneles de chat
 * de LetsLaw y NEW AI Chat. Piezas componibles: ChatPanel (contenedor), ChatHeader, ChatMessages (scroll)
 * y ChatComposer (contexto + campo + enviar).
 */
export function ChatPanel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary)", className)} {...props} />;
}

export function ChatHeader({ title, actions, children }: { title: React.ReactNode; actions?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="border-b border-(--border-secondary)">
      <div className="flex items-center gap-md px-xl py-lg">
        <h2 className="mr-auto text-md font-semibold text-(--text-primary)">{title}</h2>
        {actions}
      </div>
      {children && <div className="flex items-center gap-md border-t border-(--border-secondary) px-xl py-md">{children}</div>}
    </div>
  );
}

export function ChatMessages({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [children]);
  return (
    <div ref={ref} role="log" aria-live="polite" className={cn("flex min-h-0 flex-1 flex-col gap-2xl overflow-y-auto p-xl", className)}>
      {children}
    </div>
  );
}

export function ChatComposer({
  placeholder = "Escribí un mensaje",
  context,
  footer,
  onSend,
  onAttach,
  disabled,
}: {
  placeholder?: string;
  /** Chips de contexto (documento, biblioteca). */
  context?: React.ReactNode;
  /** Línea debajo del campo (uso de IA, privacidad). */
  footer?: React.ReactNode;
  onSend: (text: string) => void;
  onAttach?: () => void;
  disabled?: boolean;
}) {
  const [text, setText] = React.useState("");
  const send = () => {
    const t = text.trim();
    if (!t || disabled) return;
    onSend(t);
    setText("");
  };
  return (
    <div className="border-t border-(--border-secondary) p-xl">
      <div className="rounded-xl border border-(--border-primary) p-md focus-within:border-(--border-brand) focus-within:ring-4 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-900/50">
        {context && <div className="mb-md flex flex-wrap gap-sm">{context}</div>}
        <div className="flex items-end gap-md">
          <textarea
            rows={1}
            value={text}
            disabled={disabled}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder={placeholder}
            aria-label={placeholder}
            className="max-h-32 min-h-8 flex-1 resize-none bg-transparent px-xs py-1.5 text-sm text-(--text-primary) outline-none placeholder:text-(--text-placeholder) disabled:cursor-not-allowed"
          />
          {onAttach && <Button variant="tertiary" size="sm" iconOnly aria-label="Adjuntar" onClick={onAttach}><PlusCircle /></Button>}
          <Button size="sm" iconOnly aria-label="Enviar" onClick={send} disabled={!text.trim() || disabled} className="rounded-full"><ArrowUp /></Button>
        </div>
      </div>
      {footer && <div className="mt-md text-xs text-(--text-quaternary)">{footer}</div>}
    </div>
  );
}
