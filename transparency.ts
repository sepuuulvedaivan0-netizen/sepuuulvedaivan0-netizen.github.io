import type { AppPath } from "@/lib/routes";

export const transparency = {
  hero: {
    eyebrow: "Transparencia",
    title: "Una fundación que explica lo que hace y por qué lo hace.",
    description:
      "La confianza no se pide: se demuestra con información clara, con límites reconocidos y con la disposición de responder cada pregunta.",
  },
  highlights: [
    { title: "Propósitos publicados", text: "Misión, visión y líneas de trabajo" },
    { title: "Registro fotográfico", text: "Encuentros con veteranos y comunidades" },
    { title: "Datos protegidos", text: "Política de tratamiento disponible" },
  ],
  trust: {
    eyebrow: "Transparencia",
    title: "La confianza se construye con hechos.",
    paragraphs: [
      "Queremos que las personas y organizaciones que se acercan a nuestra causa encuentren información clara, comunicación responsable y respeto por los compromisos que asumimos.",
      "Por eso presentamos nuestros propósitos con precisión, distinguimos lo que ya existe de lo que estamos construyendo y mantenemos abierto un canal directo para cualquier consulta sobre nuestro trabajo.",
    ],
    posterAlt: "Honor, lealtad y servicio: apoyo social, educación, empleo, proyectos productivos y solidaridad",
  },
  items: [
    { title: "Información institucional", text: "El nombre, el lema y los propósitos de la fundación están publicados. La misión y la visión orientan cada decisión y cada conversación con posibles aliados.", to: "/quienes-somos" },
    { title: "Misión y visión", text: "La fundación se define por su compromiso con la dignidad, la inclusión y las oportunidades de los veteranos de guerra y de sus familias.", to: "/quienes-somos" },
    { title: "Registro fotográfico", text: "Las fotografías reúnen encuentros con veteranos, familias y comunidades. Es un registro visual, distinto de la documentación administrativa y de los informes de gestión.", to: "/veteranos-comunidad" },
    { title: "Protección de datos", text: "La política de tratamiento explica qué información recibe la fundación a través del formulario, para qué se usa y cómo se puede solicitar su actualización.", to: "/privacidad" },
    { title: "Canal de contacto", text: "El formulario de alianzas es el canal habilitado para propuestas, consultas y solicitudes de información institucional.", to: "/contacto" },
  ] satisfies { title: string; text: string; to: AppPath }[],
  recognition: {
    alt: "Reconocimiento de la Escuela de Misiones Internacionales y Acción Integral del Ejército Nacional a la Fundación Fe en la Causa",
    caption: "Reconocimiento de la Escuela de Misiones Internacionales y Acción Integral del Ejército Nacional, 6 de mayo de 2023. Forma parte del archivo de la fundación.",
  },
  closing: {
    eyebrow: "Seguimos conversando",
    title: "¿Necesitas información sobre nuestro trabajo?",
    text: "Si representas una organización, una empresa o una red de cooperación y necesitas ampliar algún punto de esta página, escríbenos. Preferimos responder una pregunta a tiempo antes que dejar una duda abierta.",
    primaryCta: "Escribir a la fundación",
    secondaryCta: "Conocer misión y visión",
  },
};
