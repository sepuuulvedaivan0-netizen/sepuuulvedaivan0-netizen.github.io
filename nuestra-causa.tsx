import { createFileRoute } from "@tanstack/react-router";

import { CausePillarsSection } from "@/components/sections/CausePillarsSection";
import { CollaborateSection } from "@/components/sections/CollaborateSection";
import { ConvictionsSection } from "@/components/sections/ConvictionsSection";
import { PageHero } from "@/components/sections/PageHero";
import { cause } from "@/content/cause";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/nuestra-causa")({
  head: () => ({
    meta: pageMeta({
      title: "Nuestra causa",
      description: "Dignidad, inclusión, emprendimiento y cooperación: los cuatro ejes que orientan el trabajo de la fundación.",
    }),
  }),
  component: CausePage,
});

function CausePage() {
  return (
    <>
      <PageHero {...cause.hero} />
      <CausePillarsSection showHeading={false} />
      <CollaborateSection tone="muted" />
      <ConvictionsSection />
    </>
  );
}
