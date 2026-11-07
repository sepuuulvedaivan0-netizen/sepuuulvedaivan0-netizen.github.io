import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CausePillarsSection } from "@/components/sections/CausePillarsSection";
import { ConvictionsSection } from "@/components/sections/ConvictionsSection";
import { DonationSection } from "@/components/sections/DonationSection";
import { InvitationSection } from "@/components/sections/InvitationSection";
import { LinkCard } from "@/components/sections/LinkCard";
import { QuoteRotator } from "@/components/sections/QuoteRotator";
import { Section } from "@/components/sections/Section";
import { Eyebrow, SectionHeading } from "@/components/sections/SectionHeading";
import { HighlightedText } from "@/components/sections/HighlightedText";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { navigation } from "@/content/navigation";
import { organization } from "@/content/organization";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Veteranos de Guerra",
      description:
        "Acompañamos a veteranos de guerra en Colombia y a sus familias para convertir la experiencia del servicio en oportunidades.",
      image: images.hero,
    }),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <ExploreSection />
      <StorySection />
      <CausePillarsSection tone="muted" />
      <ConvictionsSection cta={home.convictionsCta} />
      <DonationSection />
      <InvitationSection />
    </>
  );
}

function HomeHero() {
  const { hero, messages } = home;
  return (
    <section className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
      <div aria-hidden className="grain absolute inset-0 opacity-60" />
      <div className="container-page relative grid items-center gap-14 pb-16 pt-16 md:pt-24 lg:grid-cols-[1fr_1.15fr] lg:pb-24">
        <div className="animate-rise space-y-7">
          <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          <h1 className="font-display text-5xl font-medium leading-[0.98] md:text-7xl">
            <HighlightedText text={hero.title} highlight={hero.highlight} />
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-muted">{hero.description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="gold" size="xl">
              <Link to="/quienes-somos">
                {hero.primaryCta} <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link to="/tienda">{hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>

        <div className="animate-rise relative [animation-delay:150ms]">
          <div aria-hidden className="bg-gold-gradient absolute -inset-6 rounded-[2.5rem] opacity-20 blur-3xl" />
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
          <img
            src={images.hero}
            alt={hero.imageAlt}
            width={1280}
            height={720}
            fetchPriority="high"
            className="relative aspect-video w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-2xl border border-ink-border bg-ink/90 px-4 py-3 shadow-lift backdrop-blur md:flex">
            <img src={images.logo} alt="" className="size-10 rounded-full object-cover ring-2 ring-gold/60" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">{organization.slogan}</p>
              <p className="text-xs text-ink-muted">{organization.subtitle} · {organization.country}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-ink-border">
        <div className="container-page py-8">
          <QuoteRotator messages={messages} />
        </div>
      </div>
    </section>
  );
}

function ExploreSection() {
  const { explore } = home;
  return (
    <Section tone="paper">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={explore.eyebrow} title={explore.title} description={explore.description} />
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {navigation.map((item, i) => (
          <LinkCard key={item.to} to={item.to} title={item.label} text={item.description} index={i} />
        ))}
      </div>
    </Section>
  );
}

function StorySection() {
  const { story } = home;
  return (
    <Section tone="paper" className="pt-0 md:pt-0">
      <div className="grid items-center gap-14 rounded-[2rem] border bg-card p-8 shadow-soft md:p-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="bg-flag absolute -inset-1 rounded-full opacity-80 blur-xl" />
          <img
            src={images.logo}
            alt="Logo oficial de la Fundación Fe en la Causa — Veteranos de Guerra"
            loading="lazy"
            className="relative aspect-square w-full rounded-full object-cover ring-4 ring-card"
          />
        </div>
        <div className="space-y-6">
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          {story.paragraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <Button asChild variant="ink" size="xl">
            <Link to="/quienes-somos" hash="mision">
              {story.cta} <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
