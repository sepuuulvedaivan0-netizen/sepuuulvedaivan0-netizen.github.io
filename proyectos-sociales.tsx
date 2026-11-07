import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { InvitationSection } from "@/components/sections/InvitationSection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { images } from "@/content/images";
import { projects } from "@/content/projects";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/proyectos-sociales")({
  head: () => ({
    meta: pageMeta({
      title: "Proyectos sociales",
      description: "Líneas de trabajo abiertas a propuestas: iniciativas sociales, emprendimiento, inclusión y cooperación comunitaria.",
      image: images.volunteers,
    }),
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero {...projects.hero} image={{ src: images.volunteers, alt: "Voluntarios organizando alimentos en una mesa comunitaria" }} />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.intro.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          {projects.lines.map((line, i) => (
            <article
              key={line.title}
              className="group grid overflow-hidden rounded-3xl border bg-card shadow-soft md:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "aspect-[16/10] overflow-hidden md:order-2 md:aspect-auto" : "aspect-[16/10] overflow-hidden md:aspect-auto"}>
                <img
                  src={line.image}
                  alt={line.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                <span className="font-display text-sm text-muted-foreground">
                  Línea de trabajo · {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl font-medium md:text-4xl">{line.title}</h2>
                <p className="text-lg text-muted-foreground">
                  <strong className="font-semibold text-foreground">Objetivo.</strong> {line.goal}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    <span className="size-1.5 rounded-full bg-whatsapp" /> {projects.status}
                  </span>
                  <Link
                    to="/proyectos-sociales"
                    hash="formulario"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    {projects.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <InvitationSection />
    </>
  );
}
