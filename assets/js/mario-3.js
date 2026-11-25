"use strict";
/*
let figuras = document.querySelectorAll("#galeria-mario figure");

console.log("--------------------------");
console.log("Array de figures de la galeria Mario");
console.log(figuras);
console.log("--------------------------");

let imaxesMarioBros = ["../assets/img/marioBros/mario.webp", "../assets/img/marioBros/bowser.webp", "../assets/img/marioBros/king-boo.webp", "../assets/img/marioBros/lakitu.webp", "../assets/img/marioBros/setaAzul.webp", "../assets/img/marioBros/wario.webp"];


figuras.forEach(function (figura, indice) {
    figura.style.backgroundImage = `url("${imaxesMarioBros[indice]}")`;
});

*/

// Ejercicio 1b

let ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

ulGaleriaMario.classList.add("personajes");

// Ejercicio 1c

let personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo"];

let bgColorsGaleriaMario = ["lightpink", "salmon", "hotpink", "coral", "gold", "palegreen"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

console.log(captions);

/*
figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});
*/

// Ejercicio 2a

const info = document.querySelector("#info");

let itemsPaletaColores = document.querySelectorAll("#paleta-colores ul.paleta  li");

let colorSeleccionado = null;

// Array de lis de ul.paleta con los nombres de los colres
itemsPaletaColores.forEach(function (li, indice) {
    li.style.backgroundColor = li.textContent;
});

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seccionado: ${colorSeleccionado}`;
}

function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero debes seleccionar un color!!";
        return;
    }

    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}

itemsPaletaColores.forEach(function (li, indice) {
    li.onclick = seleccionarColor;
});

figuras.forEach(function (figura, indice) {
    figura.onclick = pintarFigura;
});

// Ejercicio 2b

// Agregar 2item de la lista.galeria

// let ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

let itemGaleria = document.createElement("li");
let figureGaleria = document.createElement("figure");
let captionGaleria = document.createElement("figcaption");

ulGaleriaMario.appendChild(itemGaleria);
itemGaleria.appendChild(figureGaleria);
figureGaleria.appendChild(captionGaleria);

figureGaleria.classList.add("img-before");

personajesGaleriaMario.push("Seta Azul");
console.log("--------------------------");
console.log("Array personajesGaleriaMario");
console.log(personajesGaleriaMario);
console.log(personajesGaleriaMario.length);
console.log("--------------------------");

captionGaleria.textContent = personajesGaleriaMario[personajesGaleriaMario.length - 1];

figuras[figuras.length - 1].querySelector("figcaption").textContent = personajesGaleriaMario[figuras.length - 1];

captions = document.querySelectorAll("#galeria-mario figcaption");

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});

bgColorsGaleriaMario.push("steelblue");

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});
