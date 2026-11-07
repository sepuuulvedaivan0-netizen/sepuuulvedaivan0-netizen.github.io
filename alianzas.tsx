import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2 } from "lucide-react";

import { CollaborateSection } from "@/components/sections/CollaborateSection";
import { InvitationSection } from "@/components/sections/InvitationSection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { alliances } from "@/content/alliances";
import { images } from "@/content/images";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/alianzas")({
  head: () => ({
    meta: pageMeta({
      title: "Alianzas",
      description: "Cooperación nacional e internacional con organizaciones, empresas y redes que comparten la causa de los veteranos.",
      image: images.alliancesHero,
    }),
  }),
  component: AlliancesPage,
});

function AlliancesPage() {
  const { hero, approach, principles, ways, steps, world, faq } = alliances;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={{ src: images.alliancesHero, alt: hero.title }}
        actions={
          <>
            <Button asChild variant="gold" size="xl">
              <Link to="/alianzas" hash="formulario">
                {hero.primaryCta} <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link to="/contacto">{hero.secondaryCta}</Link>
            </Button>
          </>
        }
      >
        <ul className="grid gap-4 pt-6 sm:grid-cols-3">
          {approach.map((a) => (
            <li key={a.title} className="border-l-2 border-gold pl-4">
              <p className="font-semibold">{a.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </PageHero>

      <CollaborateSection id="colaborar" />

      <Section tone="muted">
        <SectionHeading eyebrow={principles.eyebrow} title={principles.title} description={principles.description} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.items.map((p) => (
            <article key={p.title} className="rounded-3xl border bg-card p-8 shadow-soft">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-gold-foreground">
                <Check className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium leading-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <SectionHeading as="h3" eyebrow={ways.eyebrow} title={ways.title} description={ways.description} />
          <ul className="divide-y rounded-3xl border bg-card shadow-soft">
            {ways.items.map((w) => (
              <li key={w.title} className="p-6">
                <p className="font-display text-xl font-medium">{w.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ink" className="overflow-hidden">
        <div aria-hidden className="grain absolute inset-0 opacity-50" />
        <div className="relative">
          <SectionHeading tone="dark" eyebrow={steps.eyebrow} title={steps.title} description={steps.description} />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.items.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl border border-ink-border bg-ink-soft/60 p-8">
                <span className="text-gold-gradient font-display text-5xl font-semibold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading eyebrow={world.eyebrow} title={world.title} />
            {world.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <ul className="grid gap-4 pt-4 sm:grid-cols-2">
              {world.audiences.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <Globe2 className="mt-0.5 size-5 shrink-0 text-flag-blue" />
                  <span>
                    <span className="block font-semibold">{a.title}</span>
                    <span className="text-sm text-muted-foreground">{a.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={images.alliancesPoster}
            alt={world.posterAlt}
            loading="lazy"
            className="w-full rounded-3xl shadow-lift"
          />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} description={faq.description} />
          <Accordion type="single" collapsible className="rounded-3xl border bg-card px-6 shadow-soft">
            {faq.items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-5 text-left font-display text-lg font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <InvitationSection />
    </>
  );
}
