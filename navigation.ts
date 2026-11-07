import type { AppPath } from "@/lib/routes";

/**
 * Menú del sitio. El campo `to` solo acepta páginas que existen.
 * `short` es la etiqueta corta del menú superior; `label` la versión completa.
 */
export interface NavItem {
  to: AppPath;
  label: string;
  short: string;
  description: string;
}

export const navigation: NavItem[] = [
  { to: "/tienda", short: "Tienda", label: "Tienda solidaria", description: "Productos de la fundación." },
  { to: "/quienes-somos", short: "Quiénes somos", label: "Quiénes somos", description: "Historia, capacidades y oportunidades." },
  { to: "/nuestra-causa", short: "Causa", label: "Nuestra causa", description: "Compromisos y formas de colaborar." },
  { to: "/proyectos-sociales", short: "Proyectos", label: "Proyectos sociales", description: "Líneas de trabajo en construcción." },
  { to: "/veteranos-comunidad", short: "Veteranos", label: "Veteranos y comunidad", description: "Archivo de actividades compartidas." },
  { to: "/alianzas", short: "Alianzas", label: "Alianzas", description: "Cooperación nacional e internacional." },
  { to: "/transparencia", short: "Transparencia", label: "Transparencia", description: "Información institucional y datos." },
  { to: "/contacto", short: "Contacto", label: "Contacto", description: "Hablemos de una alianza." },
];

export const legalLinks: { to: AppPath; label: string }[] = [
  { to: "/privacidad", label: "Política de tratamiento de datos" },
  { to: "/transparencia", label: "Transparencia" },
];
