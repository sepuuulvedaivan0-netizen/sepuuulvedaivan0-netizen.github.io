import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/content/navigation";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

import { BrandMark } from "./BrandMark";
import { FlagStripe } from "./FlagStripe";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 text-ink-foreground transition-all duration-300",
        scrolled ? "bg-ink/90 shadow-lift backdrop-blur-xl" : "bg-ink",
      )}
    >
      <FlagStripe />
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <BrandMark />

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-full px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  activeProps={{ className: "!text-gold" }}
                >
                  {item.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline-light" size="icon" className="hidden rounded-full sm:inline-flex">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
              <MessageCircle />
            </a>
          </Button>
          <Button asChild variant="gold" size="pill" className="hidden md:inline-flex">
            <Link to="/alianzas" hash="formulario">
              Hablemos de una alianza
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline-light" size="icon" className="rounded-full xl:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto border-ink-border bg-ink text-ink-foreground">
              <SheetHeader>
                <SheetTitle className="font-display text-ink-foreground">Menú</SheetTitle>
              </SheetHeader>
              <nav aria-label="Móvil" className="mt-6">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="block border-b border-ink-border py-3 font-display text-lg"
                      activeOptions={{ exact: true }}
                      activeProps={{ className: "text-gold" }}
                    >
                      Inicio
                    </Link>
                  </li>
                  {navigation.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block border-b border-ink-border py-3"
                        activeProps={{ className: "text-gold" }}
                      >
                        <span className="block font-display text-lg">{item.label}</span>
                        <span className="text-sm text-ink-muted">{item.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="gold" size="xl" className="mt-6 w-full">
                  <Link to="/alianzas" hash="formulario" onClick={() => setOpen(false)}>
                    Hablemos de una alianza
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
