import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { about } from "@/content/about";
import { images } from "@/content/images";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: pageMeta({
      title: "Quiénes somos",
      description: "Misión, visión y principios de la Fundación Fe en la Causa, al lado de los veteranos de guerra y sus familias.",
      image: images.logo,
    }),
  }),
  component: AboutPage,
});

function AboutPage() {
  const { hero, story, missionVision: mv, capabilities } = about;
  return (
    <>
      <PageHero {...hero} image={{ src: images.logo, alt: "Logo oficial de la Fundación Fe en la Causa — Veteranos de Guerra" }} />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl space-y-6">
          {story.map((p, i) => (
            <p
              key={p}
              className={
                i === 0
                  ? "font-display text-2xl leading-snug text-foreground md:text-3xl"
                  : "text-lg leading-relaxed text-muted-foreground"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section id="mision" tone="muted">
        <SectionHeading eyebrow={mv.eyebrow} title={mv.title} description={mv.description} />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {[mv.mission, mv.vision].map((block, i) => (
            <article
              key={block.label}
              className={
                i === 0
                  ? "rounded-3xl bg-ink-gradient p-8 text-ink-foreground shadow-lift md:p-12"
                  : "rounded-3xl border bg-card p-8 shadow-soft md:p-12"
              }
            >
              <p className={i === 0 ? "text-xs font-semibold uppercase tracking-[0.22em] text-gold" : "text-xs font-semibold uppercase tracking-[0.22em] text-flag-blue"}>
                {block.label}
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">{block.title}</h3>
              <p className={i === 0 ? "mt-5 leading-relaxed text-ink-muted" : "mt-5 leading-relaxed text-muted-foreground"}>
                {block.text}
              </p>
            </article>
          ))}
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {mv.principles.map((pr) => (
            <li key={pr.title} className="border-t-2 border-gold pt-5">
              <h3 className="font-display text-xl font-medium">{pr.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pr.text}</p>
            </li>
          ))}
        </ul>
        <Button asChild variant="ink" size="xl" className="mt-12">
          <Link to="/nuestra-causa">
            {mv.cta} <ArrowRight />
          </Link>
        </Button>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} description={capabilities.description} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {capabilities.items.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-3xl border bg-card shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
