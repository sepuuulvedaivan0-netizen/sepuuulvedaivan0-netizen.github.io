import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { legalLinks, navigation } from "@/content/navigation";
import { organization } from "@/content/organization";
import { whatsappUrl } from "@/lib/whatsapp";

import { BrandMark } from "./BrandMark";
import { FlagStripe } from "./FlagStripe";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <FlagStripe />
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-5">
          <BrandMark />
          <p className="font-display text-2xl leading-snug text-ink-foreground">“{organization.motto}”</p>
          <p className="text-sm text-ink-muted">{organization.slogan}.</p>
          <Button asChild variant="whatsapp" size="pill">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp {organization.whatsapp.display}
            </a>
          </Button>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explora</h2>
          <ul className="space-y-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Información</h2>
          <ul className="space-y-2.5 text-sm">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {organization.fullName}. {organization.country}.
          </p>
          <p>Hecho con respeto por quienes sirvieron.</p>
        </div>
      </div>
    </footer>
  );
}
