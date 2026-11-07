import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { displayPrice, store, type Product } from "@/content/products";
import { whatsappUrl } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-medium leading-tight">{product.name}</h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-sm">
            <span className="block text-xs text-muted-foreground">Precio</span>
            <span className="font-semibold">{displayPrice(product)}</span>
          </span>
          <Button asChild variant="whatsapp" size="sm" className="rounded-full">
            <a href={whatsappUrl(store.whatsappMessage(product.name))} target="_blank" rel="noreferrer">
              <MessageCircle /> Consultar
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
