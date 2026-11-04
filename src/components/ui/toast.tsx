"use client";
import * as React from "react";
import { CheckCircle, XClose } from "@untitledui/icons";
import { cn } from "@/lib/cn";
import { FeaturedIcon } from "./featured-icon";

/**
 * Toast — Figma: "Notification" (Untitled UI, Type Success icon, Floating).
 * Tarjeta 400px, radio xl (12), padding 16, gap 16, sombra lg, featured icon success md
 * y botón de cerrar sm. Título y texto de apoyo + acciones de texto.
 */
export interface ToastProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Toast({ title, description, actions, icon, onClose, className }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        "relative flex w-full max-w-[400px] gap-xl rounded-xl border border-(--border-primary) bg-(--bg-primary) p-xl pr-5xl shadow-lg",
        className,
      )}
    >
      <span className="-m-[9px] shrink-0">{icon ?? <FeaturedIcon color="success" icon={<CheckCircle />} />}</span>
      <div className="flex min-w-0 flex-col gap-lg pt-xxs">
        <div className="flex flex-col gap-xs">
          <p className="text-sm font-semibold text-(--text-primary)">{title}</p>
          {description && <p className="text-sm text-(--text-tertiary)">{description}</p>}
        </div>
        {actions && <div className="flex gap-lg text-sm font-semibold">{actions}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Cerrar" className="absolute right-md top-md grid size-9 place-items-center rounded-md text-(--fg-quaternary) hover:bg-(--bg-secondary) hover:text-(--fg-secondary)">
          <XClose className="size-5" />
        </button>
      )}
    </div>
  );
}

type Item = ToastProps & { id: number };
const Ctx = React.createContext<{ show: (t: ToastProps & { duration?: number }) => void } | null>(null);

/** ToastProvider — apila toasts abajo a la derecha. useToast().show({ title, description }). */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<Item[]>([]);
  const remove = React.useCallback((id: number) => setItems((xs) => xs.filter((x) => x.id !== id)), []);
  const show = React.useCallback(
    ({ duration = 5000, ...t }: ToastProps & { duration?: number }) => {
      const id = Date.now() + Math.random();
      setItems((xs) => [...xs, { ...t, id }]);
      if (duration > 0) setTimeout(() => remove(id), duration);
    },
    [remove],
  );
  return (
    <Ctx.Provider value={{ show }}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed bottom-3xl right-3xl z-50 flex w-[calc(100vw-48px)] max-w-[400px] flex-col gap-md">
        {items.map((t) => (
          <div key={t.id} className="pointer-events-auto animate-fade-up">
            <Toast {...t} onClose={() => { t.onClose?.(); remove(t.id); }} />
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useToast debe usarse dentro de <ToastProvider>");
  return ctx;
}
