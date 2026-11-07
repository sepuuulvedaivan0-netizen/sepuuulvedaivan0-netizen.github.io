import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Building2, Lightbulb, User, type LucideIcon } from "lucide-react";

import { collaborateOptions } from "@/content/shared";

import { Section, type SectionTone } from "./Section";
import { SectionHeading } from "./SectionHeading";

const icons: Record<(typeof collaborateOptions.items)[number]["icon"], LucideIcon> = {
  user: User,
  building: Building2,
  briefcase: Briefcase,
  lightbulb: Lightbulb,
};

export function CollaborateSection({ id, tone = "paper" }: { id?: string; tone?: SectionTone }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading
        eyebrow={collaborateOptions.eyebrow}
        title={collaborateOptions.title}
        description={collaborateOptions.description}
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {collaborateOptions.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <Link
              key={item.title}
              to="/contacto"
              hash="formulario"
              className="group flex gap-5 rounded-2xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lift md:p-8"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gold">
                <Icon className="size-5" />
              </span>
              <span className="space-y-2">
                <span className="block font-display text-2xl font-medium">{item.title}</span>
                <span className="block text-sm leading-relaxed text-muted-foreground">{item.text}</span>
                <span className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
                  {item.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
