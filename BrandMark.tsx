import { Link } from "@tanstack/react-router";

import { images } from "@/content/images";
import { organization } from "@/content/organization";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label={`${organization.name} — inicio`}>
      <img
        src={images.logo}
        alt=""
        width={48}
        height={48}
        className="size-11 rounded-full object-cover ring-2 ring-gold/70 transition-transform duration-500 group-hover:rotate-6 md:size-12"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">{organization.name}</span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
          {organization.subtitle} · {organization.country}
        </span>
      </span>
    </Link>
  );
}
