import type { AppPath } from "@/lib/routes";

/** Bloques de contenido que aparecen en varias páginas. */

export const causePillars: { title: string; text: string; to: AppPath }[] = [
  {
    title: "Dignidad y reconocimiento",
    text: "Reconocer la experiencia, los conocimientos y las capacidades de los veteranos, promoviendo una mirada respetuosa sobre su participación en la sociedad.",
    to: "/quienes-somos",
  },
  {
    title: "Inclusión y oportunidades",
    text: "Impulsar espacios en los que las personas puedan desarrollar sus capacidades, participar activamente y encontrar nuevas posibilidades de crecimiento.",
    to: "/quienes-somos",
  },
  {
    title: "Emprendimiento y autonomía",
    text: "Promover iniciativas que permitan explorar oportunidades productivas, compartir conocimientos y fortalecer capacidades empresariales.",
    to: "/tienda",
  },
  {
    title: "Cooperación y solidaridad",
    text: "Conectar personas, instituciones y organizaciones que quieran sumar conocimientos, recursos y esfuerzos a iniciativas de interés social.",
    to: "/alianzas",
  },
];

export const causeIntro = {
  eyebrow: "Nuestra causa",
  title: "Una causa que nos invita a avanzar juntos.",
  description:
    "Estos ejes son compromisos y líneas de trabajo. No se presentan como programas ejecutados ni como resultados demostrados.",
};

export const convictions = {
  eyebrow: "Nuestras convicciones",
  title: "Tres ideas que sostienen todo lo demás.",
  description:
    "No cambian con cada proyecto ni dependen del tamaño de una alianza. Son el criterio con el que decidimos qué hacer y qué no.",
  items: [
    {
      title: "La dignidad no se negocia",
      text: "Hablamos de personas, no de casos. Cada veterano y cada familia tiene una historia que merece respeto, y ninguna iniciativa se construye sobre la exposición de su dolor.",
    },
    {
      title: "Las oportunidades se construyen con otros",
      text: "Ninguna fundación transforma sola una realidad. Nuestro papel es conectar capacidades, escuchar necesidades y sostener acuerdos que otros también quieran cuidar.",
    },
    {
      title: "La confianza se gana explicando",
      text: "Decimos lo que hacemos, lo que aún estamos construyendo y lo que no podemos prometer. Esa claridad es la base de cualquier relación de largo plazo.",
    },
  ],
};

export const collaborateOptions = {
  eyebrow: "Cómo colaborar",
  title: "Cada persona y cada organización puede aportar algo valioso.",
  description:
    "Elige el camino que mejor describe tu interés. Cada uno abre una conversación distinta, y todos llegan al mismo equipo de la fundación.",
  items: [
    {
      icon: "user",
      title: "Quiero colaborar como persona",
      text: "Para quienes desean conocer las iniciativas o explorar formas de aportar tiempo, conocimientos o experiencia.",
      cta: "Escribir como persona",
    },
    {
      icon: "building",
      title: "Somos una organización",
      text: "Para ONG, fundaciones e instituciones interesadas en establecer contacto y explorar posibilidades de cooperación.",
      cta: "Contactar como organización",
    },
    {
      icon: "briefcase",
      title: "Somos una empresa",
      text: "Para empresas interesadas en responsabilidad social, voluntariado corporativo, capacitación o apoyo a iniciativas.",
      cta: "Contactar como empresa",
    },
    {
      icon: "lightbulb",
      title: "Quiero presentar una propuesta",
      text: "Para quienes tienen una idea, un proyecto o una posibilidad concreta de colaboración.",
      cta: "Presentar una propuesta",
    },
  ],
} as const;

export const invitation = {
  eyebrow: "Una invitación",
  title: "Las grandes causas comienzan cuando decidimos escucharnos.",
  paragraphs: [
    "Si compartes nuestra visión de una sociedad que reconozca las capacidades, la dignidad y las oportunidades de los veteranos, nos gustaría conocerte.",
    "Podemos comenzar con una conversación, intercambiar ideas y explorar qué podemos construir juntos.",
  ],
};

export const partnershipForm = {
  eyebrow: "Alianzas",
  title: "Proponer una alianza",
  intro:
    "Al enviar, se abrirá WhatsApp con tu propuesta ya escrita para que la recibamos directamente.",
  submit: "Enviar propuesta por WhatsApp",
  success: "Abrimos WhatsApp con tu propuesta. Solo falta tocar “Enviar”.",
  categories: [
    "ONG",
    "Fundación",
    "Empresa",
    "Organización de veteranos",
    "Entidad educativa",
    "Cooperación internacional",
    "Persona",
    "Otra categoría",
  ],
};

export const donation = {
  eyebrow: "Aportes",
  title: "Tu aporte construye oportunidades.",
  description:
    "Cada contribución es una forma concreta de acompañar a los veteranos y sus familias. Estos son montos sugeridos; el canal de aporte se habilitará cuando la fundación confirme su método oficial.",
  amounts: [
    { value: "$20.000", label: "Aporta un gesto de solidaridad" },
    { value: "$50.000", label: "Apoya iniciativas de inclusión" },
    { value: "$100.000", label: "Impulsa oportunidades productivas" },
    { value: "Otro valor", label: "Define tu propio aporte" },
  ],
  qrTitle: "Aporta con el código QR que compartió la fundación.",
  qrText:
    "Puedes usar esta imagen para hacer tu aporte. La llave Bre-B aún no está confirmada, así que no la publicamos. Los pagos con tarjeta en línea siguen pendientes de configuración.",
  whatsappMessage: "Hola, quiero coordinar un aporte a la Fundación Fe en la Causa.",
};
