// js/cargar-testimonios.js

import { addTestimonial } from './firebase.js';

const testimonios = [
  {
    nombre: "Carlos Méndez",
    mensaje: "Me encantó poder armar mi propio setup desde la web de Artronics. Todo fue claro, rápido y el pago muy sencillo.",
    profesion: "Gamer entusiasta"
  },
  {
    nombre: "Angélica Navarro",
    mensaje: "Antes era difícil encontrar componentes confiables. Ahora con Artronics tengo variedad, buenos precios y atención inmediata.",
    profesion: "Diseñadora gráfica freelance"
  },
  {
    nombre: "Samuel Jurado",
    mensaje: "Hice una compra de una laptop para mi hijo en menos de 10 minutos. Todo llegó puntual y bien empacado.",
    profesion: "Padre de familia"
  },
  {
    nombre: "Sara Cedeño",
    mensaje: "Me sorprendió lo fácil que es navegar por la tienda. Incluso encontré promociones que no veía en la tienda física.",
    profesion: "Emprendedora tecnológica"
  }
];

(async () => {
  for (const testimonio of testimonios) {
    await addTestimonial(testimonio);
  }
})();
