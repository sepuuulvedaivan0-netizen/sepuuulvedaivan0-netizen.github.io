import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/sections/PageHero";
import { ProductCard } from "@/components/sections/ProductCard";
import { Section } from "@/components/sections/Section";
import { images } from "@/content/images";
import { productCategories, products, store, type ProductCategory } from "@/content/products";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: pageMeta({
      title: "Tienda solidaria",
      description: "Productos artesanales, plantas, miel y más. Cada compra apoya iniciativas productivas de veteranos de guerra.",
      image: images.storeBanner,
    }),
  }),
  component: StorePage,
});

type Filter = ProductCategory | "all";

function StorePage() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );
  const filters: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: store.allLabel, count: products.length },
    ...productCategories.map((c) => ({ value: c, label: c, count: products.filter((p) => p.category === c).length })),
  ];

  return (
    <>
      <PageHero {...store.hero} image={{ src: images.storeBanner, alt: "Tienda virtual solidaria de la Fundación Fe en la Causa" }} />

      <Section tone="paper">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div role="tablist" aria-label="Categorías" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  filter === f.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-card hover:border-foreground/40",
                )}
              >
                {f.label} <span className="ml-1 opacity-60">{f.count}</span>
              </button>
            ))}
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">{store.note}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
}
