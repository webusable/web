"use strict";

/*
    --- ELEMENTOS HTML ---
*/

const outputSalida = document.querySelector("#resultado-clases");
const botonControlMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");

const botonControlLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");

/*
    --- FUNCIONES ---
*/

/*
function seleccionarMario() {
    marioGaleria.classList.add("seleccionado");

    outputSalida.textContent = "Mario ha sido seleccionado!";
}

function seleccionarLuigi() {
    luigiGaleria.classList.add("estrella");

    outputSalida.textContent = "Luigi ha sido seleccionado!";
}
*/

function seleccionarPersonaje(personaje, clase, slogan) {
    const nombre = personaje.textContent;
    personaje.classList.add(clase);

    outputSalida.textContent = `${nombre} ${slogan}`;
}

/*
    --- EVENTOS ---
*/

// botonControlMario.addEventListener("click", seleccionarMario);

// botonControlLuigi.addEventListener("click", seleccionarLuigi);

// botonControlLuigi.addEventListener("click", seleccionarPersonaje(luigiGaleria, "estrella"));

botonControlMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "ha sido seleccionado"));

botonControlLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "se ilumina como el sol"));
