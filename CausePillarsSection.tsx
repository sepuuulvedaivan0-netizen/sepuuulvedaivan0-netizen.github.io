import { causeIntro, causePillars } from "@/content/shared";

import { LinkCard } from "./LinkCard";
import { Section, type SectionTone } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function CausePillarsSection({ tone = "paper", showHeading = true }: { tone?: SectionTone; showHeading?: boolean }) {
  return (
    <Section tone={tone}>
      {showHeading && (
        <SectionHeading eyebrow={causeIntro.eyebrow} title={causeIntro.title} description={causeIntro.description} />
      )}
      <div className={showHeading ? "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"}>
        {causePillars.map((pillar, i) => (
          <LinkCard key={pillar.title} to={pillar.to} title={pillar.title} text={pillar.text} index={i} cta="Ver sección" />
        ))}
      </div>
    </Section>
  );
}
