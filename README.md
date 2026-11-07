# Contenido editable del sitio

Todos los textos, enlaces, precios e imágenes del sitio viven en esta carpeta.
Para cambiar lo que se ve en una página, edita el archivo correspondiente:

| Archivo             | Qué controla                                             |
| ------------------- | -------------------------------------------------------- |
| `organization.ts`   | Nombre, lema, WhatsApp, correo, llave Bre-B              |
| `images.ts`         | Direcciones de todas las imágenes                        |
| `navigation.ts`     | Menú superior y enlaces del pie de página                |
| `shared.ts`         | Bloques que se repiten (convicciones, causa, invitación) |
| `home.ts` … `privacy.ts` | Textos de cada página                               |
| `products.ts`       | Productos de la tienda solidaria                         |

Reglas para no romper nada:

1. Cambia solo el texto que está entre comillas.
2. Si un texto lleva comillas dobles dentro, usa comillas tipográficas (“ ”).
3. Para agregar un elemento a una lista, copia uno existente completo (desde `{` hasta `},`).
4. Los campos `to` solo aceptan páginas que existen; si escribes una ruta inexistente, el
   editor lo marcará antes de publicar.
