"use client";
import * as React from "react";
import { File02, Trash01, Upload01 } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * UploadField — Figma: "Upload Field" armado (Vista participante · Negociación, 232:11958).
 * Zona 224px de alto, bg gray-100, borde gray-300, radio sm (6). Ícono upload en círculo blanco 40px
 * con borde, texto 14 medium. Acepta clic, teclado y arrastrar y soltar.
 */
export function UploadField({
  label = "Arrastrá y soltá o hacé clic acá para subir un archivo",
  hint,
  accept,
  multiple,
  onFiles,
  className,
}: {
  label?: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  onFiles?: (files: File[]) => void;
  className?: string;
}) {
  const ref = React.useRef<HTMLInputElement>(null);
  const [over, setOver] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const take = (list: FileList | null) => {
    if (!list) return;
    const arr = Array.from(list);
    setFiles(multiple ? [...files, ...arr] : arr.slice(0, 1));
    onFiles?.(arr);
  };
  return (
    <div className={cn("flex flex-col gap-md", className)}>
      <label
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); take(e.dataTransfer.files); }}
        className={cn(
          "flex min-h-56 cursor-pointer flex-col items-center justify-center gap-md rounded-sm border border-(--border-primary) bg-gray-100 p-md text-center transition-colors focus-within:ring-4 focus-within:ring-gray-blue-100 dark:bg-gray-900",
          over && "border-(--border-brand) bg-gray-blue-50 dark:bg-gray-blue-900/30",
        )}
      >
        <span className="grid size-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <Upload01 className="size-5" />
        </span>
        <span className="max-w-[240px] text-sm font-medium text-(--text-primary)">{label}</span>
        {hint && <span className="text-xs text-(--text-tertiary)">{hint}</span>}
        <input ref={ref} type="file" accept={accept} multiple={multiple} className="sr-only" onChange={(e) => take(e.target.files)} />
      </label>
      {files.length > 0 && (
        <ul className="flex flex-col gap-sm">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-md rounded-md border border-(--border-secondary) bg-(--bg-primary) px-lg py-md text-sm">
              <File02 className="size-5 text-(--fg-quaternary)" />
              <span className="min-w-0 flex-1 truncate text-(--text-primary)">{f.name}</span>
              <span className="text-xs text-(--text-quaternary)">{Math.max(1, Math.round(f.size / 1024))} KB</span>
              <button type="button" aria-label={`Quitar ${f.name}`} onClick={() => setFiles(files.filter((_, j) => j !== i))} className="grid size-7 place-items-center rounded-sm text-(--fg-quaternary) hover:bg-(--bg-secondary)">
                <Trash01 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
