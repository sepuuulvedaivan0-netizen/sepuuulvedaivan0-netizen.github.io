/**
 * Datos institucionales de la fundación.
 * Si un dato aún no está confirmado, déjalo en `null`: el sitio mostrará
 * "pendiente de confirmación" en lugar de inventarlo.
 */
export const organization = {
  name: "Fundación Fe en la Causa",
  subtitle: "Veteranos de Guerra",
  fullName: "Fundación Fe en la Causa — Veteranos de Guerra",
  slogan: "Unidos por Colombia, ayúdanos a ayudar",
  motto: "El honor de servir también construye futuro.",
  country: "Colombia",
  whatsapp: {
    /** Número en formato internacional, solo dígitos. */
    number: "573237023808",
    display: "+57 323 702 3808",
    defaultMessage: "Hola, quiero contactar a la Fundación Fe en la Causa.",
  },
  email: null as string | null,
  breBKey: null as string | null,
} as const;
