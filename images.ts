/**
 * Todas las imágenes del sitio en un solo lugar.
 * Para cambiar una foto, reemplaza la dirección (URL) entre comillas.
 */
const CDN = "https://horizons-cdn.hostinger.com/0b5e8736-5015-4c8d-bb9e-461a9bf00128";
const STOCK = "https://images.hostinger.com/0b5e8736-5015-4c8d-bb9e-461a9bf00128";

export const images = {
  hero: `${CDN}/aa21231f05edd4608c68bede6f73338e.jpg`,
  logo: `${CDN}/18cf5d87fa6f555cb07f9ddcc9b651d4.jpg`,
  donationQr: `${CDN}/3e3f9d3b97b9b8e8c4e864e018a9cd58.jpg`,
  alliancesHero: `${CDN}/a567b1f2538389885a7db857a0cdd085.jpg`,
  alliancesPoster: `${CDN}/a70d26f36bc8db5d3ed61a3880031478.png`,
  storeBanner: `${CDN}/a2d3c1cea746d29cfd91f4a3d60bedb7.png`,
  transparencyHero: `${CDN}/6a7ccbff9397f9eb6f540ef35ba298de.jpg`,
  transparencyPoster: `${CDN}/d41f35ec8ca795104dd7d4f2ecc826e3.png`,
  recognition: `${CDN}/e0fbbe5b7d82b57c09f4c28a6f1ebb57.jpg`,
  training: `${STOCK}/523b20d9-7d0b-46e4-b881-cc6f2966005d.png`,
  nursery: `${STOCK}/60c77283-3c1a-4c0b-ba09-bd3b4fbd5c69.png`,
  workshop: `${STOCK}/2462462f-b25f-4e1e-b568-0047405efb41.png`,
  community: `${STOCK}/176cd5b0-bf04-4034-b65b-5c6a34bf5989.png`,
  volunteers: `${STOCK}/a38bb9a2-527e-4ae1-b706-a70044881f42.png`,
  handshake: `${STOCK}/8cf1d105-39ce-4e5e-a96a-8899f3087892.png`,
  conversation: `${STOCK}/3eb41571-5f4a-47a0-8ec2-53fad612530b.png`,
} as const;

/** Archivo fotográfico de actividades (página Veteranos y comunidad). */
export const communityArchive = [
  { src: `${CDN}/7fb79db9cfff2f0dda25f16afda52fb4.jpg`, alt: "Encuentro con niñas y niños" },
  { src: `${CDN}/51a316585ed8239c20bf960a8edb16e5.jpg`, alt: "Entrega de mercados en un espacio de espera" },
  { src: `${CDN}/2dfe64a8190e8a1f36604a14eec199b2.jpg`, alt: "Visita a una vivienda" },
  { src: `${CDN}/11b43537a9472650a4a805c396663704.jpg`, alt: "Entrega de un mercado en la calle" },
  { src: `${CDN}/f849e0dc194ae368d9541f7f4be60888.jpg`, alt: "Acompañamiento a una persona con muletas" },
  { src: `${CDN}/6a7ccbff9397f9eb6f540ef35ba298de.jpg`, alt: "Actividad al aire libre junto al pendón de la fundación" },
  { src: `${CDN}/becda7d31f0a246e0103ad3dc5834e65.jpg`, alt: "Mesa con alimentos y pendón Unidos por Colombia" },
  { src: `${CDN}/98c617bf86745ae7291576c5aae0680b.jpg`, alt: "Entrega de un mercado en una vivienda" },
];
