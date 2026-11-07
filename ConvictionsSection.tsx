import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { convictions } from "@/content/shared";

import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function ConvictionsSection({ cta }: { cta?: string }) {
  return (
    <Section tone="ink" className="overflow-hidden">
      <div aria-hidden className="grain absolute inset-0 opacity-50" />
      <div className="relative">
        <SectionHeading
          tone="dark"
          eyebrow={convictions.eyebrow}
          title={convictions.title}
          description={convictions.description}
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink-border md:grid-cols-3">
          {convictions.items.map((item, i) => (
            <li key={item.title} className="bg-ink p-8 transition-colors hover:bg-ink-soft md:p-10">
              <span className="text-gold-gradient font-display text-6xl font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium leading-tight">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-muted">{item.text}</p>
            </li>
          ))}
        </ol>
        {cta && (
          <Button asChild variant="outline-light" size="xl" className="mt-10">
            <Link to="/nuestra-causa">
              {cta} <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
    </Section>
  );
}
