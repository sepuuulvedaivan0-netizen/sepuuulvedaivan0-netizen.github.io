import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { organization } from "@/content/organization";
import { donation } from "@/content/shared";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function DonationSection() {
  const [selected, setSelected] = useState<string>(donation.amounts[1]?.value ?? "");

  const message =
    selected && selected !== "Otro valor"
      ? `${donation.whatsappMessage} Me gustaría aportar ${selected}.`
      : donation.whatsappMessage;

  return (
    <Section tone="paper">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={donation.eyebrow} title={donation.title} description={donation.description} />
          <div role="radiogroup" aria-label="Monto sugerido" className="mt-10 grid grid-cols-2 gap-3">
            {donation.amounts.map((a) => {
              const active = selected === a.value;
              return (
                <button
                  key={a.value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(a.value)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-all",
                    active
                      ? "border-gold bg-accent shadow-gold"
                      : "bg-card hover:border-foreground/30",
                  )}
                >
                  <span className="block font-display text-2xl font-semibold md:text-3xl">{a.value}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{a.label}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappUrl(message)} target="_blank" rel="noreferrer">
                <MessageCircle /> Coordinar por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline-ink" size="xl">
              <Link to="/contacto">Ver canales de contacto</Link>
            </Button>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div aria-hidden className="bg-gold-gradient absolute -inset-4 -rotate-2 rounded-[2rem] opacity-40 blur-2xl" />
          <div className="relative rounded-3xl border bg-card p-6 shadow-lift">
            <img
              src={images.donationQr}
              alt="Código QR de aporte compartido por la fundación"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-5 space-y-2">
              <p className="font-display text-xl font-medium">{donation.qrTitle}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{donation.qrText}</p>
              <p className="text-xs text-muted-foreground">WhatsApp {organization.whatsapp.display}</p>
            </figcaption>
          </div>
        </figure>
      </div>
    </Section>
  );
}
