import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, QrCode, Wallet } from "lucide-react";

import { InvitationSection } from "@/components/sections/InvitationSection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/contact";
import { images } from "@/content/images";
import { organization } from "@/content/organization";
import { pageMeta } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: pageMeta({
      title: "Contacto",
      description: "Escribe a la Fundación Fe en la Causa por WhatsApp o propón una alianza desde el formulario.",
      image: images.handshake,
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    { icon: Mail, label: contact.labels.email, value: organization.email },
    { icon: Wallet, label: contact.labels.breB, value: organization.breBKey },
  ];

  return (
    <>
      <PageHero {...contact.hero} image={{ src: images.handshake, alt: contact.handshakeAlt }} />

      <Section id="contacto" tone="paper">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="flex flex-col justify-between gap-8 rounded-3xl bg-ink-gradient p-8 text-ink-foreground shadow-lift lg:col-span-2 md:p-10">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="size-6" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{contact.labels.whatsapp}</p>
              <p className="mt-2 font-display text-4xl font-medium md:text-5xl">{organization.whatsapp.display}</p>
              <p className="mt-3 max-w-md text-ink-muted">{contact.formIntro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                  <MessageCircle /> Abrir WhatsApp
                </a>
              </Button>
            </div>
            <ul className="grid gap-4 border-t border-ink-border pt-6 sm:grid-cols-2">
              {channels.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <c.icon className="size-5 text-gold" />
                  <span className="text-sm">
                    <span className="block text-ink-muted">{c.label}</span>
                    <span className="font-medium">{c.value ?? contact.pending}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <figure className="rounded-3xl border bg-card p-6 shadow-soft">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-flag-blue">
              <QrCode className="size-4" /> {contact.labels.qr}
            </p>
            <img
              src={images.donationQr}
              alt="Código QR de pago compartido por la fundación"
              loading="lazy"
              className="mt-4 aspect-square w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-xs leading-relaxed text-muted-foreground">{contact.qrCaption}</figcaption>
          </figure>
        </div>
      </Section>

      <InvitationSection intro={contact.handshakeCaption} />
    </>
  );
}
