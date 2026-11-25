"use strict";

/*
    --- ELEMENTOS HTML ---
*/

const outputSalida = document.querySelector("#resultado-clases");

//prettier-ignore
let botonesControlesIds = [
    "#btn-seleccionar-mario", 
    "#btn-estrella-luigi",
    "#btn-girar-yoshi",
    "#btn-enemigo-bowser",
    "#btn-gigante-wario",
    "#btn-transparente-kingboo",
    "#btn-pixelado-seta",
    "#btn-espejo-lakitu",
    "#btn-quitar-enemigo",
    "#btn-comprobar-estrella"
];

let botonesControles = document.querySelectorAll("#personajes-css ul.lista-controles li button");
console.log(botonesControles);

let classesToggle = ["seleccionado", "estrella", "girando", "enemigo", "gigante", "transparente", "pixelado", "espejo"];

let figurasGaleria = document.querySelectorAll("#personajes-css ul.lista-personajes li figure");

console.log(figurasGaleria);

//Mario
const botonControlMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");

// Luigi
const botonControlLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");

// Yoshi
const botonControlYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");

// Bowser

/*
    --- FUNCIONES ---
*/

/**
 *  Funcion seleccionarPersonaje()
 *
 *  Agrega la clase al elemento html y muestra un
 *  texto en el elemento outputSalida
 *
 *  Recibe un elemento Html, el nombre de una clase y un texto
 *
 *  @param {HTMLElement} personaje - nombre de un querySelector
 *  @param {string} class - Nombre de una clase CSS
 *  @param {string} slogan - Texto para mostrar en un <output>
 *  @param {HTMLElement} output - Elemento <output>
 *      para mostrar el slogan
 *
 *  @returns {void}
 */

// prettier-ignore
function seleccionarPersonaje(
    personaje, 
    clase, 
    slogan, 
    output = outputSalida
) {
    const nombre = personaje.textContent;
    let message = "";
    // personaje.classList.add(clase);
    personaje.classList.toggle(clase);

    if (personaje.classList.contains(clase) ) {
        message = `${nombre} ${slogan} ${clase}`;
    }
    else {
        message = `${nombre} ya no ${slogan} ${clase}`;
    }

    output.textContent = message; 
}

/*
    --- EVENTOS ---
*/

// botonControlMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "ha sido seleccionado"));

// botonControlLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "se ilumina como el sol"));

// botonControlYoshi.addEventListener("click", () => seleccionarPersonaje(yoshiGaleria, "girando", "no para de girar"));

//prettier-ignore
figurasGaleria.forEach(function (figura, indice) {
    botonesControles[indice].addEventListener(
        "click", 
        () => seleccionarPersonaje(
            figura, 
            classesToggle[indice],
            "agrega la clase"
        )
    );
});
