import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Eyebrow } from "./SectionHeading";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  actions?: ReactNode;
  children?: ReactNode;
}

/** Portada oscura reutilizable para las páginas internas. */
export function PageHero({ eyebrow, title, description, image, actions, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
      <div aria-hidden className="grain absolute inset-0 opacity-60" />
      <div
        className={cn(
          "container-page relative grid items-center gap-12 py-20 md:py-28",
          image && "lg:grid-cols-[1.1fr_1fr]",
        )}
      >
        <div className="animate-rise space-y-6">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="font-display text-5xl font-medium leading-[1.02] md:text-6xl lg:text-7xl">{title}</h1>
          {description && <p className="max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">{description}</p>}
          {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
          {children}
        </div>
        {image && (
          <div className="animate-rise relative [animation-delay:150ms]">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
            <img
              src={image.src}
              alt={image.alt}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        )}
      </div>
    </section>
  );
}
