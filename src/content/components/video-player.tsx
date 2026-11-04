"use client";
import { VideoPlayer } from "@/components/ui/video-player";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function VideoPlayerDoc() {
  return (
    <>
      <Section
        title="Reproductor 16:9"
        description={
          <>
            Envoltorio sobre el <code>&lt;video&gt;</code> nativo con la barra de acciones de Untitled UI (Size sm), como en el ejemplo
            1121:6828. Recibe <code>src</code> y opcionalmente <code>poster</code>. En esta documentación no se carga ningún video externo:
            se ve el estado en pausa sobre el fondo de token (gray-blue-900).
          </>
        }
      >
        <Preview
          align="stretch"
          code={`<VideoPlayer
  label="Cómo enviar un contrato a firma"
  src="/videos/enviar-a-firma.mp4"
  poster="/videos/enviar-a-firma.jpg"
/>`}
        >
          <div className="mx-auto w-full max-w-[576px]">
            <VideoPlayer label="Cómo enviar un contrato a firma (vista previa sin video)" />
          </div>
        </Preview>
      </Section>

      <Section title="Sólo acciones (Size sm del Figma)" description="Con showProgress={false} queda igual que la variante sm: reproducir, volumen y pantalla completa.">
        <Preview align="stretch" code={`<VideoPlayer label="Tutorial" src={url} showProgress={false} />`}>
          <div className="mx-auto w-full max-w-[576px]">
            <VideoPlayer label="Tutorial (vista previa sin video)" showProgress={false} />
          </div>
        </Preview>
      </Section>

      <Section title="Especificaciones">
        <Specs
          rows={[
            ["Proporción", "16:9 · radio md"],
            ["Borde", "0,5 px · negro 10 %"],
            ["Overlay en pausa", "negro 10 %"],
            ["Botón central", "64 px · blanco 5 % · blur 8 · ícono 20"],
            ["Barra de acciones", "negro 0 → 30 % · pt-3xl px-xs pb-xs"],
            ["Botón de acción", "p-md · radio sm · ícono 16"],
            ["Hover de acción", "blanco 20 % · blur 4"],
            ["Tooltip", "blanco 20 % · radio md · text-sm semibold"],
            ["Atajo (badge)", "blanco 30 % · radio xs · text-xs"],
            ["Atajos", "Space / K · M · F"],
          ]}
        />
      </Section>

      <Section title="Uso">
        <Guidelines
          items={[
            "Siempre pasá `label` con el título del video: es el nombre accesible del reproductor.",
            "Usá `poster` con una imagen propia del video; sin póster se ve el fondo gray-blue-900.",
            "Atajos con el foco dentro del reproductor: Space o K reproduce/pausa, M silencia, F pantalla completa.",
            "No reproduzcas automáticamente con sonido. Si necesitás autoplay, pasá también `muted`.",
          ]}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "label", type: "string", description: "Nombre accesible (título del video)." },
            { name: "src", type: "string", description: "URL del video. Sin src el botón de reproducir queda deshabilitado." },
            { name: "poster", type: "string", description: "Imagen de portada." },
            { name: "showProgress", type: "boolean", default: "true", description: "Muestra barra de progreso y tiempo." },
            { name: "className", type: "string", description: "Clases del contenedor 16:9." },
            { name: "...video", type: "VideoHTMLAttributes", description: "Resto de atributos de <video> (muted, loop, autoPlay…)." },
          ]}
        />
      </Section>
    </>
  );
}
