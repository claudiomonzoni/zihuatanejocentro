
import gsap from "gsap";
const cargando = document.getElementById("cargando");
window.onload = function () {
  cargando.classList.add("eliminado");
};

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



//only phones
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#nav");
    // const anchor = document.querySelector(".anchor");
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    }

    menuIco.addEventListener("click", abrirMenuFull);
    //anchor.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}



//menu efecto al hacer scroll
const body = document.getElementById("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
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
