import { cn } from "@/lib/cn";
import { Avatar } from "./avatar";

/**
 * Contact — Figma: "_Contact" (Untitled UI, People 1 / 2) en Vista participante · Compartir (247:18592).
 * Avatar 62px, nombre 11 regular centrado debajo (2 líneas máx.) y, opcional, un ícono 20px de la app
 * por la que se comparte, abajo a la derecha del avatar.
 */
export interface ContactPerson {
  name: string;
  initials?: string;
  src?: string;
}

export function Contact({ people, badge, className }: { people: [ContactPerson] | [ContactPerson, ContactPerson]; badge?: React.ReactNode; className?: string }) {
  const label = people.map((p) => p.name).join(" y ");
  return (
    <figure className={cn("flex w-20 flex-col items-center gap-sm text-center", className)}>
      <div className="relative">
        {people.length === 1 ? (
          <Avatar size="lg" src={people[0].src} initials={people[0].initials} alt={people[0].name} className="size-[62px] text-lg" />
        ) : (
          <div className="relative size-[62px]">
            <Avatar size="md" src={people[0].src} initials={people[0].initials} alt={people[0].name} className="absolute left-0 top-0" />
            <Avatar size="md" src={people[1].src} initials={people[1].initials} alt={people[1].name} className="absolute bottom-0 right-0" />
          </div>
        )}
        {badge && <span className="absolute -bottom-0.5 -right-0.5 grid size-5 place-items-center rounded-xs bg-white shadow-xs [&>svg]:size-4">{badge}</span>}
      </div>
      <figcaption className="line-clamp-2 text-[11px] leading-[13px] text-(--text-primary)">{label}</figcaption>
    </figure>
  );
}
