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

// Elemento <output id="info"> donde se muestran los mensajes
const info = document.querySelector("#info");

// Los 12 <li> de la paleta (su texto es el nombre del color)
const itemsPaletaColores = document.querySelectorAll("#paleta-colores li");

// Aquí se guarda el color elegido. null = todavía no se ha elegido ninguno
let colorSeleccionado = null;

// ---------- 1. Pintar cada casilla de la paleta ----------

itemsPaletaColores.forEach(function (li) {
    // El texto del li ("crimson", "tomato"...) se usa como color de fondo
    li.style.backgroundColor = li.textContent;
});

// ---------- 2. Definir qué ocurre al hacer clic (las "recetas") ----------

// Se ejecutará cuando se haga clic en un color de la paleta
function seleccionarColor() {
    // this = el <li> sobre el que se ha hecho clic
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}

// Se ejecutará cuando se haga clic en una figura de la galería
function pintarFigura() {
    // Si todavía no hay color elegido, avisamos y salimos de la función
    if (colorSeleccionado === null) {
        info.textContent = "Primero elige un color de la paleta";
        return;
    }

    // this = la <figure> sobre la que se ha hecho clic
    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}

// ---------- 3. Conectar cada receta con sus elementos ----------
// Ojo: sin paréntesis. Le damos la función al elemento, no la ejecutamos.

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
