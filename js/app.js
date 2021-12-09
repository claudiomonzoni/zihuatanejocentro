
import gsap from "gsap";

const cargando = document.getElementById("cargando");
window.onload = function () {
  cargando.classList.add("eliminado");
};


//only phones
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
console.log("Soy celular")
}

// agregar el shift al scroll

// const habitacion= document.querySelector('#habitaciones')
// habitacion.addEventListener('mouseover', (e) => {
//   console.log("que")
//   // new KeyboardEvent('keydown', {'key':'Shift'} )
// } )
// let scrollVertical = new Event('click')
// habitacion.dispatchEvent(scrollVertical)


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
