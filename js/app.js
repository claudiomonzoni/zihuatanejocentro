import gsap from "gsap";
import moment from "moment";
import 'moment/locale/es';

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




//logica de reservaciones
const btn = document.querySelectorAll(".habitacion a");
const oscuro = document.getElementById("oscuro");
const atras = document.getElementById("atras");
//sistema
const h2sistema = document.querySelector("#encabezadoSistema h2");
const imgsistema = document.querySelector("#sistema figure img");
//inputs
const nombre = document.getElementById("nombre");
const adultos = document.getElementById("adultos");
const ninos = document.getElementById("ninos");
const llegada = document.getElementById("llegada");
const salida = document.getElementById("salida");
const btncotizar = document.getElementById("cotizar");
const revisar = document.getElementById("revisar");

//user agent
const ua = navigator.userAgent;

//asigno Listener a cada botón
btn.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    datosTraver(e);
    //muestro ventana
    oscuro.classList.toggle("escondete");
    oscuro.classList.toggle("revelate");
  });
});

//obtengo datos con traversing
const datosTraver = (elemento) => {
  const padre = elemento.target.parentElement;
  const h2 = padre.querySelector("h2").textContent;
  const src = padre.querySelector("img").getAttribute("src");
  const imagen = padre.querySelector("img");
  //cambio en sistema la imagen y el h2
  h2sistema.innerText = h2;
  imgsistema.src = src;
};

//obtengo los datos de los inputs

//si es cel app si es pc web.app
const actualizar = (e) => {
  e.preventDefault();

  if (
    adultos.value === "" ||
    ninos.value === "" ||
    llegada.value === "" ||
    salida.value === "" ||
    nombre.value === ""
  ) {
    console.log("vacio")
  }else{
    btncotizar.classList.remove('desactivado')

  }

  const h2 = h2sistema.textContent;
  //comprobar si es cel o pc
  let whats =""
  if(/Mobile/i.test(ua)){
    whats = "https://api.whatsapp.com/send/?phone=5217551019549&text=";
  } else{
     whats = "https://web.whatsapp.com/send/?phone=5217551019549&text=";
  }
  //obtener las noches

  moment.locale('es');   
  const llega = moment(llegada.value).format('dddd D MMMM YYYY')
  const sale = moment(salida.value).format('dddd D MMMM YYYY')
  const llegaObj = moment(llegada.value)
  const saleObj = moment(salida.value)
  const noches = llegaObj.diff(saleObj, 'days')
  //obtener datos de inputs y formar el mensaje
  const mensaje = `
  <hr>
  <b>Por favor revise sus datos</b>
  <hr>
Nombre: <b> ${nombre.value} </b> <br>
Numero de adultos: <b> ${adultos.value} </b> <br>
Numero de niños: <b> ${ninos.value} </b> <br>
Fecha de llegada: <b> ${llega} </b> <br>
Fecha de salida: <b> ${sale} </b>
Numero de noches: <b> ${noches}</b>
`;
revisar.innerHTML=mensaje
envio(h2, whats, llega, sale)
};

const envio = (h2, whats, llega, sale) => {

  // https://web.whatsapp.com/send/?phone=5217551019549&text=Hola%2C+me+contacto+desde+zihuacentro.com%2C+deseo+cotizar%3A%0ANombre%3A+claudio%0AHabitacion%3A+Habitaci%C3%B3n+Premium%2C%0ANo.+de+adultos%3A+2%2C%0ANo.+de+ni%C3%B1os%3A+2%0AFecha+de+Llagada%3A+2021-12-16%0AFecha+de+Salida%3A+2021-12-17

  const url = `
  ${whats}Hola,%20me%20contacto%20desde%20zihuacentro.com,%20deseo%20cotizar:%0aNombre:%20${nombre.value}%0aHabitacion:%20${h2},%0aNo.%20de%20adultos:%20${adultos.value},%0aNo.%20de%20niños:%20${ninos.value}%0aFecha%20de%20Llagada:%20${llega}%0aFecha%20de%20Salida:%20${sale}
  `;
  btncotizar.href = url;

};


nombre.addEventListener("focusout", actualizar);
adultos.addEventListener("focusout", actualizar);
ninos.addEventListener("focusout", actualizar);
llegada.addEventListener("focusout", actualizar);
salida.addEventListener("focusin", actualizar);

// cerramos ventana
atras.addEventListener("click", (e) => {
  e.preventDefault();
  oscuro.classList.toggle("escondete");
  oscuro.classList.toggle("revelate");
});
