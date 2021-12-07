const simpleIcon = require('simple-icons');
export const face = simpleIcon.get('facebook')
export const insta = simpleIcon.get('instagram')

export default class Icono{
    constructor(url, nodo, objetoIco){
        this.url=url;
       this.nodo= nodo;
       this.objetoIco= objetoIco;
    }

    construirIcono(){
        const ele = document.querySelector(this.nodo)
        ele.innerHTML +=`<li><a href="${this.url}" target="_blank"> ${this.objetoIco.svg}</a></li>` // face es un objeto
       
    }
   
}