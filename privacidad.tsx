import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { organization } from "@/content/organization";
import { privacy } from "@/content/privacy";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: pageMeta({
      title: "Política de tratamiento de datos",
      description: "Cómo la Fundación Fe en la Causa recibe, usa y protege los datos que compartes al escribirnos.",
    }),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero {...privacy.hero} />
      <Section tone="paper">
        <div className="mx-auto max-w-3xl divide-y">
          {privacy.sections.map((s) => (
            <section key={s.title} className="py-8 first:pt-0">
              <h2 className="font-display text-2xl font-medium">{s.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{s.text}</p>
            </section>
          ))}
          <p className="pt-8 text-sm text-muted-foreground">
            Responsable: {organization.fullName}. Contacto: WhatsApp {organization.whatsapp.display}.
          </p>
        </div>
      </Section>
    </>
  );
}
