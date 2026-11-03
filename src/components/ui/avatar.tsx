import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Avatar — Figma: "Avatar" (~400). Iniciales en círculo (participantes: "P1", "FL", "AR")
 * o foto de usuario.
 */
const sizes = { xs: "size-6 text-xxs", sm: "size-7 text-xxs", md: "size-10 text-sm", lg: "size-12 text-md" } as const;

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  initials?: string;
  src?: string;
  alt?: string;
  size?: keyof typeof sizes;
}

export function Avatar({ initials, src, alt = "", size = "sm", className, ...props }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full border border-(--bg-primary) bg-gray-100 font-bold text-gray-700 ring-1 ring-black/5 dark:bg-gray-800 dark:text-gray-200",
        sizes[size],
        className,
      )}
      {...props}
    >
      {src ? <img src={src} alt={alt} className="size-full object-cover" /> : initials}
    </span>
  );
}

/** AvatarGroup — participantes apilados con desbordamiento "+N". */
export function AvatarGroup({ children, max = 3, size = "sm" }: { children: React.ReactNode; max?: number; size?: AvatarProps["size"] }) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const rest = items.length - shown.length;
  return (
    <div className="flex items-center -space-x-1.5">
      {shown}
      {rest > 0 && <Avatar size={size} initials={`+${rest}`} className="bg-gray-blue-50 text-gray-blue-600" />}
    </div>
  );
}
