import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, FileText, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { transparency } from "@/content/transparency";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: pageMeta({
      title: "Transparencia",
      description: "Propósitos publicados, registro fotográfico y protección de datos: cómo la fundación explica lo que hace.",
      image: images.transparencyHero,
    }),
  }),
  component: TransparencyPage,
});

const highlightIcons = [FileText, Camera, ShieldCheck];

function TransparencyPage() {
  const { hero, highlights, trust, items, recognition, closing } = transparency;
  return (
    <>
      <PageHero {...hero} image={{ src: images.transparencyHero, alt: "Actividad al aire libre junto al pendón de la fundación" }}>
        <ul className="grid gap-4 pt-6 sm:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[i] ?? FileText;
            return (
              <li key={h.title} className="flex gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" />
                <span>
                  <span className="block font-semibold">{h.title}</span>
                  <span className="text-sm text-ink-muted">{h.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading eyebrow={trust.eyebrow} title={trust.title} />
            {trust.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <img src={images.transparencyPoster} alt={trust.posterAlt} loading="lazy" className="w-full rounded-3xl shadow-lift" />
          </div>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.to}
                  className="group flex gap-4 rounded-2xl border bg-card p-6 shadow-soft transition-all hover:border-gold hover:shadow-lift"
                >
                  <span className="flex-1">
                    <span className="block font-display text-xl font-medium">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{item.text}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="muted">
        <figure className="mx-auto max-w-4xl">
          <a href={images.recognition} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-3xl border bg-card p-3 shadow-lift">
            <img src={images.recognition} alt={recognition.alt} loading="lazy" className="w-full rounded-2xl" />
          </a>
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">{recognition.caption}</figcaption>
        </figure>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading tone="dark" align="center" eyebrow={closing.eyebrow} title={closing.title} description={closing.text} />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto" hash="formulario">{closing.primaryCta}</Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link to="/quienes-somos" hash="mision">{closing.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
