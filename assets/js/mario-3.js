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

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});

/*
figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});
*/
