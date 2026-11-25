"use strict";
/*
function seleccionarMario() {
    marioGaleria.classList.add("seleccionado");

    outputSalida.textContent = "Mario ha sido seleccionado!";
}
botonControlMario.addEventListener("click", seleccionarMario);

function seleccionarLuigi() {
    luigiGaleria.classList.add("estrella");

    outputSalida.textContent = "Luigi ha sido seleccionado!";
}
botonControlLuigi.addEventListener("click", seleccionarLuigi);

*/

/*
    --- ELEMENTOS HTML ---
*/

const outputSalida = document.querySelector("#resultado-clases");

//Mario
const botonControlMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");

// Luigi
const botonControlLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");

// Yoshi
const botonControlYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");

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
    personaje.classList.add(clase);

    output.textContent = `${nombre} ${slogan}`;
}

/*
    --- EVENTOS ---
*/

botonControlMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "ha sido seleccionado"));

botonControlLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "se ilumina como el sol"));

botonControlYoshi.addEventListener("click", () => seleccionarPersonaje(yoshiGaleria, "girando", "no para de girar"));
