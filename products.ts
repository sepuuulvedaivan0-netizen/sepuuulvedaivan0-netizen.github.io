/**
 * Productos de la tienda solidaria.
 * - `price`: escribe el precio (ej. "$25.000") o deja `null` para mostrar "Por definir".
 * - `category`: debe ser una de las categorías de la lista `productCategories`.
 * - Para agregar un producto, copia un bloque completo y cambia sus datos.
 */
const CDN = "https://horizons-cdn.hostinger.com/0b5e8736-5015-4c8d-bb9e-461a9bf00128";

export const productCategories = [
  "Identidad",
  "Bonsái",
  "Planta",
  "Miel",
  "NutriPlantas",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export interface Product {
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  price: string | null;
  featured?: boolean;
}

export const products: Product[] = [
  { name: "Esfero con propósito", category: "Identidad", featured: true, price: null, image: `${CDN}/59a2ce44f4e506870a0191cb30a2422f.png`, description: "Esfero blanco con los colores de la bandera y motivos de Colombia, presentado junto a su empaque de la fundación." },
  { name: "Nuestro símbolo", category: "Identidad", featured: true, price: null, image: `${CDN}/41b1d43f71254678c3499c04e4e8b97d.jpg`, description: "Una figura pequeña, con las manos abiertas y el corazón en los colores de Colombia. Recuerda que quien vistió el uniforme sigue siendo hijo, padre, compañero y vecino cuando el servicio termina. Artesanía en porcelanicrón, hecha a mano." },
  { name: "Manillas patrióticas", category: "Identidad", featured: true, price: null, image: `${CDN}/396c03cc142566701db3366c3a368577.png`, description: "Manillas tejidas a mano en amarillo, azul y rojo, presentadas con la tarjeta de la Fundación Fe en la Causa — Veteranos de Guerra." },
  { name: "Bonsái Pino Nana", category: "Bonsái", price: null, image: `${CDN}/2475fcb3f466a69d0d72b2922b0b75d3.jpg`, description: "Pino nana de follaje compacto, presentado en maceta de cerámica azul." },
  { name: "Bonsái Pino Rastrero", category: "Bonsái", price: null, image: `${CDN}/1412484e1573021fe9fd5a31fe68b9e7.jpg`, description: "Pino de follaje verde y forma extendida, presentado en maceta de barro." },
  { name: "Bonsái Guayacán", category: "Bonsái", price: null, image: `${CDN}/97aaf7661ba40488b139a2ee238f40cd.jpg`, description: "Árbol de copa definida y follaje verde, presentado en matera de barro." },
  { name: "Mini Sábila", category: "Planta", price: null, image: `${CDN}/33427f9580ccc7639fc6eba2c81ec54b.jpg`, description: "Sábila pequeña en matera verde, pensada para espacios reducidos." },
  { name: "Mini Sábila Cebra", category: "Planta", price: null, image: `${CDN}/a722136ab24427ad333c4d6aa82b9d6f.jpg`, description: "Suculenta de hojas rayadas, presentada en matera verde." },
  { name: "Mini cactus", category: "Planta", price: null, image: `${CDN}/e3803e6ad1246c2e3067714f3c404685.jpg`, description: "Varias especies de mini cactus en macetas de distintos colores." },
  { name: "Miel ApiMielTec", category: "Miel", price: null, image: `${CDN}/4773cda64d04d988a2c5d2676cf7a97f.jpg`, description: "Frasco de vidrio con tapa dorada y etiqueta amarilla de ApiMielTec, con miel de tono ámbar." },
  { name: "Polen ApiMielTec", category: "Miel", price: null, image: `${CDN}/2c95fc2b94bf40153cb6ef7fea3db8f4.jpg`, description: "Tres frascos hexagonales de vidrio con tapa dorada y sello de seguridad alimentaria, con polen en granos." },
  { name: "Propóleo ApiMielTec", category: "Miel", price: null, image: `${CDN}/50c8448eab1bffc36d8d04873c01dfb6.jpg`, description: "Botellas con etiqueta amarilla de ApiMielTec Propóleo, presentadas junto a un gotero de vidrio ámbar." },
  { name: "Miel Angelita en gotero", category: "Miel", price: null, image: `${CDN}/011bb0a0535565a71aa62ccce39e5834.jpg`, description: "Frascos gotero con etiqueta de Casa Apícola Diaz Granados." },
  { name: "Jabón artesanal de miel", category: "Miel", price: null, image: `${CDN}/108fb2ab3ec66e6451fe3c5076f93d25.jpg`, description: "Pastillas ovaladas translúcidas con relieve de abeja y flores, presentadas en caja blanca con ventana." },
  { name: "Velas de cera de abeja", category: "Miel", price: null, image: `${CDN}/7556f530cec374bc9126d61adec3463e.jpg`, description: "Velas enrolladas en lámina de cera con textura de panal, en distintos diámetros y alturas." },
  { name: "Línea capilar con miel y propóleo", category: "Miel", price: null, image: `${CDN}/8a87fab1cfa3e18a799671da602ec7af.jpg`, description: "Champú y acondicionador en botellas con tapa amarilla, con miel y propóleo." },
  { name: "Brilla Hojas", category: "NutriPlantas", price: null, image: `${CDN}/46ed99f5885e4d00848f84cefae19fc5.jpg`, description: "Protector de follaje en atomizador. La etiqueta indica las instrucciones de uso." },
  { name: "Jabón potásico", category: "NutriPlantas", price: null, image: `${CDN}/dde9752e1557287e24e2377936284405.jpg`, description: "Jabón potásico NutriPlantas para el cuidado de plantas y jardín." },
  { name: "Sustrato mix para orquídeas", category: "NutriPlantas", price: null, image: `${CDN}/d95f05d720c79781042459db88b1aa8d.jpg`, description: "Mezcla de 1 kg con piedra pómez, corteza de pino, carbón vegetal y chips de coco." },
  { name: "Sustrato pino", category: "NutriPlantas", price: null, image: `${CDN}/4d3a7e1d159fe907cb038c244aa848c0.jpg`, description: "Sustrato de corteza de pino para plantas y jardín." },
  { name: "Hormonas", category: "NutriPlantas", price: null, image: `${CDN}/b9345d11cbc49f2fd996330328ac25cd.jpg`, description: "Hormonas NutriPlantas en presentación pequeña y grande, para el cuidado de las plantas." },
  { name: "Cactus y suculentas", category: "NutriPlantas", price: null, image: `${CDN}/e20eafcd3454e7fb6cb060ca647f43ee.jpg`, description: "Fertilizante NutriPlantas indicado para cactus, suculentas y jardinería." },
];

export const store = {
  hero: {
    eyebrow: "Tienda solidaria",
    title: "Compra con propósito.",
    description:
      "Cada producto ayuda a sostener iniciativas productivas de veteranos y sus familias. Consulta disponibilidad y precio directamente por WhatsApp.",
  },
  pricePending: "Por definir",
  allLabel: "Todos",
  ctaLabel: "Consultar por WhatsApp",
  whatsappMessage: (productName: string) =>
    `Hola, quiero consultar el producto: ${productName}.`,
  note: "Los precios se confirman por WhatsApp mientras la fundación habilita los pagos en línea.",
};

/** Precio que se muestra en pantalla. */
export function displayPrice(product: Product): string {
  return product.price?.trim() ? product.price : store.pricePending;
}
