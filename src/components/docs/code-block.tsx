"use client";
import * as React from "react";
import { Check, Copy03 } from "@/components/icons";
import { cn } from "@/lib/cn";

/** Resaltado mínimo para TSX/CSS/bash, sin dependencias. */
function highlight(code: string) {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const re =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(&lt;\/?[A-Z][\w.]*)|(&lt;\/?[a-z][\w-]*)|\b(import|from|export|const|let|return|function|type|interface|extends|default|if|else|new|await|async)\b|\b([a-zA-Z-]+)(?==)/g;
  return esc(code).replace(re, (m, c, s, comp, tag, kw, attr) => {
    if (c) return `<span class="tok-c">${m}</span>`;
    if (s) return `<span class="tok-s">${m}</span>`;
    if (comp) return `<span class="tok-t">${m}</span>`;
    if (tag) return `<span class="tok-p">${m}</span>`;
    if (kw) return `<span class="tok-k">${m}</span>`;
    if (attr) return `<span class="tok-a">${m}</span>`;
    return m;
  });
}

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [done, setDone] = React.useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        } catch {}
      }}
      aria-label="Copiar"
      className={cn("grid size-8 place-items-center rounded-md text-gray-400 transition-colors hover:bg-white/10 hover:text-white", className)}
    >
      {done ? <Check className="size-4 text-success-400" /> : <Copy03 className="size-4" />}
    </button>
  );
}

export function CodeBlock({ code, title, className }: { code: string; title?: string; className?: string }) {
  const trimmed = code.replace(/^\n+|\s+$/g, "");
  return (
    <div className={cn("group relative overflow-hidden rounded-xl border border-gray-800 bg-[#14161D]", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-white/5 px-xl py-md text-xs font-medium text-gray-400">
          {title}
        </div>
      )}
      <CopyButton text={trimmed} className="absolute right-md top-md opacity-0 group-hover:opacity-100 focus:opacity-100" />
      <pre className="code-block scrollbar-thin overflow-x-auto p-xl text-gray-200">
        <code dangerouslySetInnerHTML={{ __html: highlight(trimmed) }} />
      </pre>
    </div>
  );
}
