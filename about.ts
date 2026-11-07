import { images } from "./images";

export const about = {
  hero: {
    eyebrow: "Quiénes somos",
    title: "Mucho más que una historia de servicio.",
    description:
      "Cada veterano tiene una historia propia: conocimientos, experiencias, familias que acompañan y capacidades que merecen nuevas oportunidades.",
  },
  story: [
    "Cada veterano tiene una historia propia. Hay conocimientos adquiridos durante años, experiencias que dejan enseñanzas, familias que acompañan y capacidades que merecen nuevas oportunidades.",
    "Creemos que el servicio prestado no debe ser el final de un camino. También puede ser el comienzo de nuevas formas de aportar, emprender, enseñar, crear y participar en la sociedad.",
    "Queremos contribuir a que esas capacidades encuentren espacios donde puedan ser reconocidas y convertirse en oportunidades.",
  ],
  missionVision: {
    eyebrow: "Misión y visión",
    title: "Lo que nos convoca y hacia dónde queremos caminar.",
    description:
      "Dos enunciados sencillos que ordenan nuestro trabajo cotidiano y la manera en que nos relacionamos con quienes se acercan a la fundación.",
    mission: {
      label: "Misión",
      title: "Acompañar para que la experiencia se convierta en oportunidad.",
      text: "Reconocemos la experiencia de los veteranos de guerra y de sus familias, y trabajamos para que encuentre un cauce concreto en la formación, el emprendimiento, el trabajo y la participación en la vida comunitaria del país. Lo hacemos cerca de las personas: con respeto por su historia, con objetivos realistas y con la disposición de aprender de cada encuentro.",
    },
    vision: {
      label: "Visión",
      title: "Una Colombia donde el servicio se reconozca con hechos.",
      text: "Queremos una sociedad en la que quienes sirvieron encuentren espacios para seguir aportando con dignidad, y en la que las organizaciones que los acompañan lo hagan con transparencia y continuidad. Aspiramos a ser un puente reconocido entre esa experiencia y las oportunidades que el país puede ofrecer.",
    },
    principles: [
      { title: "Escuchar antes de proponer", text: "Cada proceso comienza por conocer a la persona, su familia y lo que necesita. No llegamos con una respuesta única: llegamos con disposición a entender." },
      { title: "Construir con otros", text: "Las oportunidades duraderas nacen del trabajo conjunto entre veteranos, comunidades, empresas y organizaciones que comparten el propósito." },
      { title: "Explicar lo que hacemos", text: "Comunicamos con claridad el alcance de nuestras iniciativas, sin prometer más de lo que podemos sostener y sin presentar como logros lo que aún estamos construyendo." },
    ],
    cta: "Conocer nuestras líneas de trabajo",
  },
  capabilities: {
    eyebrow: "Personas y futuro",
    title: "Las capacidades merecen oportunidades.",
    description:
      "Queremos que las nuevas oportunidades no se queden en las palabras. Buscamos espacios de colaboración que permitan visibilizar capacidades, compartir conocimientos, fortalecer iniciativas y conectar a los veteranos con organizaciones que valoren su experiencia.",
    items: [
      { image: images.training, alt: "Sesión de formación con adultos de distintas edades", title: "Experiencia y conocimientos", text: "Los saberes adquiridos durante años de servicio merecen espacios donde puedan enseñarse, compartirse y ponerse al servicio de otros." },
      { image: images.nursery, alt: "Trabajo con abono orgánico y plántulas en un vivero", title: "Emprendimiento", text: "Acompañamos iniciativas productivas para que una idea pueda convertirse en un ingreso digno y sostenido en el tiempo." },
      { image: images.workshop, alt: "Taller comunitario con herramientas y cuaderno de notas", title: "Formación y desarrollo de capacidades", text: "La formación abre caminos nuevos: talleres, mentorías y procesos de aprendizaje pensados para la vida después del servicio." },
      { image: images.community, alt: "Encuentro comunitario alrededor de una mesa de trabajo", title: "Inclusión y participación social", text: "Buscamos que los veteranos y sus familias participen en la vida comunitaria con voz propia y en condiciones de igualdad." },
    ],
  },
};
