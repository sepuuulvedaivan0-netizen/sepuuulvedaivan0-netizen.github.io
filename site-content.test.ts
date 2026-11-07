import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { legalLinks, navigation } from "@/content/navigation";
import { organization } from "@/content/organization";
import { displayPrice, productCategories, products } from "@/content/products";
import { partnershipSchema } from "@/lib/partnership-schema";
import { proposalMessage, whatsappUrl } from "@/lib/whatsapp";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("navegación", () => {
  it.each([...navigation, ...legalLinks].map((l) => l.to))("la página %s existe", (path) => {
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("WhatsApp", () => {
  it("usa el número oficial de la fundación", () => {
    expect(whatsappUrl("Hola")).toBe(`https://wa.me/573237023808?text=Hola`);
    expect(organization.whatsapp.number).toBe("573237023808");
  });

  it("omite el sitio web cuando no se escribe", () => {
    const msg = proposalMessage({
      organization: "ONG Prueba",
      country: "Colombia",
      website: "",
      contactName: "Ana",
      email: "ana@ejemplo.org",
      category: "ONG",
      description: "Una propuesta de prueba suficientemente larga.",
    });
    expect(msg).toContain("• Organización: ONG Prueba");
    expect(msg).not.toContain("Sitio web");
  });
});

describe("formulario de alianzas", () => {
  const valid = {
    organization: "ONG Prueba",
    country: "Colombia",
    website: "",
    contactName: "Ana",
    email: "ana@ejemplo.org",
    category: "ONG",
    description: "Una propuesta de prueba suficientemente larga.",
    consent: true,
  };

  it("acepta una propuesta completa", () => {
    expect(partnershipSchema.safeParse(valid).success).toBe(true);
  });

  it("exige aceptar la política de datos", () => {
    expect(partnershipSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });

  it("rechaza un correo inválido", () => {
    expect(partnershipSchema.safeParse({ ...valid, email: "no-es-correo" }).success).toBe(false);
  });
});

describe("tienda", () => {
  it("muestra 'Por definir' cuando no hay precio", () => {
    expect(displayPrice({ ...products[0]!, price: null })).toBe("Por definir");
    expect(displayPrice({ ...products[0]!, price: "$25.000" })).toBe("$25.000");
  });

  it("cada producto pertenece a una categoría válida y tiene nombre único", () => {
    const names = new Set(products.map((p) => p.name));
    expect(names.size).toBe(products.length);
    for (const p of products) expect(productCategories).toContain(p.category);
  });
});
