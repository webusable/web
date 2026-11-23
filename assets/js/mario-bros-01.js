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

/*
    Ejercicio 2a
    1) Clic en un color de la paleta -> se guarda y se muestra en #info
    2) Clic en una figura -> se le aplica el color guardado
*/

// elemento html output#info
const info = document.querySelector("#info");

// Aquí se guardan todos los lis de la paleta con el texto con el nombre del color
const itemsPaletaColores = document.querySelectorAll("#paleta-colores li");

// aún no hay ningún color elegido
let colorSeleccionado = null;

// Pintar cada casilla de la paleta con el color que indica su texto
itemsPaletaColores.forEach(function (li) {
    li.style.backgroundColor = li.textContent;
});

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}

function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero elige un color de la paleta";
        return;
    }

    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}

// Conectar cada función con sus elementos
/*
itemsPaletaColores.forEach(function (li, indice) {
    li.onclick = seleccionarColor;
});
*/

itemsPaletaColores.forEach(function (li) {
    li.onclick = seleccionarColor;
});

/*
itemsPaletaColores.forEach(function (li, indice) {
    li.onclick = function () {
        colorSeleccionado = li.textContent;
        info.textContent = `Color ${indice + 1} de ${itemsPaletaColores.length}: ${colorSeleccionado}`;
    };
});
*/

/*
figuras.forEach(function (figura, indice) {
    figura.onclick = pintarFigura;
});
*/
figuras.forEach(function (figura) {
    figura.onclick = pintarFigura;
});
