"use client";
import * as React from "react";
import { Code02, Eye } from "@/components/icons";
import { cn } from "@/lib/cn";
import { CodeBlock } from "./code-block";

/** Preview — lienzo con el componente vivo y pestaña de código. */
export function Preview({
  children,
  code,
  className,
  canvas = "dots",
  align = "center",
}: {
  children: React.ReactNode;
  code?: string;
  className?: string;
  canvas?: "dots" | "plain" | "canvas";
  align?: "center" | "start" | "stretch";
}) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview");
  return (
    <div className="overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary)">
      {code && (
        <div className="flex items-center gap-xxs border-b border-(--border-secondary) px-md py-1.5">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "inline-flex h-7 items-center gap-sm rounded-sm px-2.5 text-xs font-semibold transition-colors",
                tab === t ? "bg-(--bg-tertiary) text-(--text-primary)" : "text-(--text-quaternary) hover:text-(--text-secondary)",
              )}
            >
              {t === "preview" ? <Eye className="size-3.5" /> : <Code02 className="size-3.5" />}
              {t === "preview" ? "Vista previa" : "Código"}
            </button>
          ))}
        </div>
      )}
      {tab === "preview" ? (
        <div
          className={cn(
            "flex min-h-40 min-w-0 flex-wrap gap-xl p-3xl md:p-4xl",
            align === "center" && "items-center justify-center",
            align === "start" && "items-start justify-start",
            align === "stretch" && "flex-col items-stretch [&>*]:min-w-0",
            canvas === "dots" && "bg-dots",
            canvas === "canvas" && "bg-(--bg-canvas)",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        <CodeBlock code={code!} className="rounded-none border-0" />
      )}
    </div>
  );
}
