import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

/** Galería en mosaico con visor ampliado y navegación por teclado. */
export function ImageGallery({ items }: { items: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? items[active] : undefined;

  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((img, i) => (
          <li key={img.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-soft focus-visible:outline-2 focus-visible:outline-gold"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="bg-fade-ink absolute inset-x-0 bottom-0 p-4 pt-12 text-left text-sm text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-ink-border bg-ink p-3 text-ink-foreground sm:p-4">
          {current && (
            <>
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Imagen {(active ?? 0) + 1} de {items.length}
              </DialogDescription>
              <img src={current.src} alt={current.alt} className="max-h-[78vh] w-full rounded-xl object-contain" />
              <div className="flex items-center justify-between gap-4 px-1 pt-2">
                <p className="text-sm text-ink-muted">{current.alt}</p>
                <div className="flex gap-2">
                  {([-1, 1] as const).map((dir) => (
                    <button
                      key={dir}
                      type="button"
                      onClick={() => step(dir)}
                      aria-label={dir === -1 ? "Imagen anterior" : "Imagen siguiente"}
                      className={cn(
                        "grid size-10 place-items-center rounded-full border border-ink-border transition-colors hover:bg-ink-soft",
                      )}
                    >
                      {dir === -1 ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
