import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { organization } from "@/content/organization";
import { invitation } from "@/content/shared";
import { whatsappUrl } from "@/lib/whatsapp";

import { PartnershipForm } from "./PartnershipForm";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

/** Invitación a conversar + formulario de alianza. Ancla: #formulario */
export function InvitationSection({ intro }: { intro?: string }) {
  return (
    <Section id="formulario" tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={invitation.eyebrow} title={invitation.title} />
          {invitation.paragraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {intro && <p className="font-display text-xl italic text-foreground">{intro}</p>}
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp {organization.whatsapp.display}
            </a>
          </Button>
        </div>
        <PartnershipForm />
      </div>
    </Section>
  );
}
