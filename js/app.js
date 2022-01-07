import gsap from "gsap";

const cargando = document.getElementById("cargando");
window.onload = function () {
  cargando.classList.add("eliminado");
};

// //only phones
// const x = window.matchMedia("(max-width: 479px)");
// esCell(x); // Call listener function at run time
// x.addListener(esCell); // Attach listener function on state changes

// // nav

// function esCell(x) {
//   console.log(x);
// }

// importo gsap
// // llamo gspa
gsap.from(".logo, ul>li", {
  stagger: 0.1,
  x: 400,
  opacity: 0,
  duration: 1, //1 segundo
});
gsap.from(".punto", {
  stagger: {
    // wrap advanced options in an object
    each: 0.3,
    from: "left",
    grid: "auto",
    ease: "power2.inOut",
  },
  x: 50,
  opacity: 0,
  duration: 0.6, //1 segundo
});

const WOW = require("wowjs");

window.wow = new WOW.WOW({
  live: false,
});
window.wow.init();

const divmapa = document.getElementById("mapa");
import { Mapa } from "./leaflet";
if (divmapa) {
  const mapa = new Mapa();
  document.addEventListener("DOMContentLoaded", () => {
    mapa.obtenerDatos();
  });
}


// cerramos ventana
atras.addEventListener("click", (e) => {
  e.preventDefault();
  oscuro.classList.toggle("escondete");
  oscuro.classList.toggle("revelate");
});
