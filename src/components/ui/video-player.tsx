"use client";
import * as React from "react";
import { Maximize01, Minimize01, PauseCircle, Play, VolumeMax, VolumeX } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * VideoPlayer — Figma: "Video player 16:9" + "_Video actions bar" (Size sm) +
 * "_Video action button" + "_Video action tooltip" + "_Video overlay action"
 *. Ejemplo: página Lefebvre, 1121:6828.
 *
 * Valores del Figma:
 * - Contenedor: 16:9, radio md, borde 0,5 px negro 10 %.
 * - Overlay en pausa: negro 10 % + botón circular 64 px, blanco 5 %, blur 8, ícono play 20 px.
 * - Barra: degradé transparente → negro 30 %, pt-3xl px-xs pb-xs, gap-xxs.
 * - Botón de acción: p-md, radio sm, ícono 16 px blanco; hover blanco 20 % + blur 4.
 * - Tooltip: blanco 20 %, borde blanco 10 %, radio md, pl-md pr-xs py-xs, text-sm semibold
 *   + badge de atajo (blanco 30 %, radio xs, text-xs): Space / M / F.
 *
 * La barra de progreso y el tiempo no aparecen en la variante sm del Figma
 * (ver "Pendiente de definir" en el doc).
 */

const fmt = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
};

function ActionButton({
  label,
  shortcut,
  align = "center",
  onClick,
  children,
  pressed,
}: {
  label: string;
  shortcut: string;
  align?: "start" | "center" | "end";
  onClick: () => void;
  children: React.ReactNode;
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      aria-keyshortcuts={shortcut === "Space" ? "Space" : shortcut}
      onClick={onClick}
      className="group/action relative flex shrink-0 items-center justify-center rounded-sm p-md text-white outline-none transition-colors hover:bg-white/20 hover:backdrop-blur-[4px] focus-visible:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 [&_svg]:size-4"
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-9 hidden items-center gap-sm whitespace-nowrap rounded-md border border-white/10 bg-white/20 py-xs pr-xs pl-md text-sm font-semibold text-white shadow-lg backdrop-blur-[4px] group-hover/action:flex group-focus-visible/action:flex",
          align === "start" && "-left-4",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "end" && "-right-4",
        )}
      >
        {label}
        <span className="rounded-xs border border-white/10 bg-white/30 px-[3px] py-px text-xs font-semibold shadow-xs">{shortcut}</span>
      </span>
    </button>
  );
}

export interface VideoPlayerProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "controls"> {
  /** URL del video. Sin `src` se muestra sólo el póster / fondo. */
  src?: string;
  /** Imagen de portada antes de reproducir. */
  poster?: string;
  /** Nombre accesible del reproductor (ej. el título del video). */
  label: string;
  /** Muestra barra de progreso y tiempo. */
  showProgress?: boolean;
  /** Clases del contenedor 16:9. */
  className?: string;
}

export function VideoPlayer({ src, poster, label, showProgress = true, className, ...videoProps }: VideoPlayerProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(!!videoProps.muted);
  const [fullscreen, setFullscreen] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  React.useEffect(() => {
    const onFs = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v || !src) return;
    if (v.paused) void v.play().catch(() => {});
    else v.pause();
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (v) v.muted = !v.muted;
    setMuted((x) => !x);
  };
  const toggleFullscreen = () => {
    const el = rootRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };
  const seek = (t: number) => {
    const v = videoRef.current;
    if (v) v.currentTime = t;
    setTime(t);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement).tagName === "INPUT" && e.key !== " ") return;
    if (e.key === " " || e.key === "k") {
      if ((e.target as HTMLElement).tagName === "BUTTON" && e.key === " ") return; // el botón ya lo maneja
      e.preventDefault();
      toggle();
    } else if (e.key === "m" || e.key === "M") toggleMute();
    else if (e.key === "f" || e.key === "F") toggleFullscreen();
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label={label}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      className={cn(
        "group/player relative aspect-video w-full overflow-hidden rounded-md border-[0.5px] border-black/10 bg-gray-blue-900 outline-none",
        className,
      )}
    >
      <video
        {...videoProps}
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        className="absolute inset-0 size-full object-cover"
      />

      {/* _Video overlay action */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <button
            type="button"
            onClick={toggle}
            aria-label="Reproducir"
            disabled={!src}
            className="flex size-16 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-[8px] outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60 disabled:cursor-default"
          >
            <Play className="size-5" />
          </button>
        </div>
      )}

      {/* _Video actions bar (sm) */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-xxs bg-gradient-to-b from-transparent to-black/30 px-xs pt-3xl pb-xs">
        {showProgress && (
          <div className="flex items-center gap-md px-md">
            <input
              type="range"
              aria-label="Progreso"
              aria-valuetext={`${fmt(time)} de ${fmt(duration)}`}
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(time, duration || 0)}
              onChange={(e) => seek(Number(e.target.value))}
              disabled={!src || !duration}
              className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-white/30 accent-white disabled:cursor-default [&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              style={{
                background: duration
                  ? `linear-gradient(to right, var(--color-white) ${(time / duration) * 100}%, color-mix(in srgb, var(--color-white) 30%, transparent) ${(time / duration) * 100}%)`
                  : undefined,
              }}
            />
            <span className="shrink-0 text-xs font-medium tabular-nums text-white">
              {fmt(time)} / {fmt(duration)}
            </span>
          </div>
        )}
        <div className="flex items-center gap-xxs">
          <div className="flex flex-1 items-center gap-xxs">
            <ActionButton label={playing ? "Pausar" : "Reproducir"} shortcut="Space" align="start" onClick={toggle}>
              {playing ? <PauseCircle /> : <Play />}
            </ActionButton>
            <ActionButton label={muted ? "Activar sonido" : "Silenciar"} shortcut="M" onClick={toggleMute} pressed={muted}>
              {muted ? <VolumeX /> : <VolumeMax />}
            </ActionButton>
          </div>
          <ActionButton
            label={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            shortcut="F"
            align="end"
            onClick={toggleFullscreen}
          >
            {fullscreen ? <Minimize01 /> : <Maximize01 />}
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
