"use strict";

/*
    Ejercicio 1a
    Asignar una imagen a cada figure

const figuras = document.querySelectorAll("#galeria-mario figure");

const imaxesMarioBros = [
    "../assets/img/marioBros/mario.webp",
    "../assets/img/marioBros/luigi.webp",
    "../assets/img/marioBros/yoshi.webp",
    "../assets/img/marioBros/bowser.webp",
    "../assets/img/marioBros/wario.webp",
    "../assets/img/marioBros/king-boo.webp",
];

figuras.forEach(function (figura, indice) {
    figura.style.backgroundImage = `url("${imaxesMarioBros[indice]}")`;
});

*/

/*
    Ejercicio 1b
    Asignar imágenes mediante CSS y nth-child()
*/

const ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

ulGaleriaMario.classList.add("personajes");

/*
    Ejercicio 1c
    Crear el array y asignar los colores de fondo de los figures
    Agregar el nombre de los personajes a sus figcaptions
*/

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

let personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo"];
let bgColorsGaleriaMario = ["steelblue", "orange", "gold", "orchid", "lightyellow", "lightblue"];

// Recorremos los figure y aplicamos el background-color a cada uno

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

// Recorremos los figcaption y asignamos el texto
captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});
