import { createFileRoute } from "@tanstack/react-router";

import { ConvictionsSection } from "@/components/sections/ConvictionsSection";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { community } from "@/content/community";
import { communityArchive } from "@/content/images";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/veteranos-comunidad")({
  head: () => ({
    meta: pageMeta({
      title: "Veteranos y comunidad",
      description: "Archivo fotográfico de actividades compartidas con veteranos, familias y comunidades en Colombia.",
      image: communityArchive[0]?.src,
    }),
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <PageHero {...community.hero} />
      <Section tone="paper">
        <p className="mb-8 text-sm text-muted-foreground">{community.galleryHint}</p>
        <ImageGallery items={communityArchive} />
      </Section>
      <ConvictionsSection />
    </>
  );
}
