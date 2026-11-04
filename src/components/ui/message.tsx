import * as React from "react";
import { cn } from "@/lib/cn";
import { Avatar } from "./avatar";

/**
 * Message — Figma: "Message" local (Type Message, Sent True/False) en LetsLaw, AI Contract y New Dashboard.
 * Ancho 320. Nombre 14 medium text-secondary + hora 12 text-tertiary. Burbuja padding 8 12, texto 16:
 * - enviado: bg gray-blue-25, borde gray-blue-200, texto gray-blue-500, sin radio arriba a la derecha.
 * - recibido: avatar md 40, bg gray-50, borde gray-200, texto text-primary, sin radio arriba a la izquierda.
 */
export interface MessageProps {
  sent?: boolean;
  name: string;
  time?: string;
  avatar?: { src?: string; initials?: string };
  children: React.ReactNode;
  className?: string;
}

export function Message({ sent, name, time, avatar, children, className }: MessageProps) {
  return (
    <div className={cn("flex w-full max-w-[320px] gap-lg", sent && "ml-auto", className)}>
      {!sent && <Avatar size="md" src={avatar?.src} initials={avatar?.initials ?? name.slice(0, 2).toUpperCase()} alt={name} />}
      <div className="flex min-w-0 flex-1 flex-col gap-sm">
        <div className="flex items-baseline justify-between gap-md">
          <span className="truncate text-sm font-medium text-(--text-secondary)">{name}</span>
          {time && <time className="shrink-0 text-xs text-(--text-tertiary)">{time}</time>}
        </div>
        <div
          className={cn(
            "border px-lg py-md text-md",
            sent
              ? "rounded-md rounded-tr-none border-gray-blue-200 bg-gray-blue-25 text-gray-blue-500 dark:border-gray-blue-700 dark:bg-gray-blue-900/40 dark:text-gray-blue-200"
              : "rounded-md rounded-tl-none border-(--border-secondary) bg-gray-50 text-(--text-primary) dark:bg-gray-900",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
