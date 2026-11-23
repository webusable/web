"use strict";

/*
    Ejercicio 1a
    Asignar una imagen a cada figure
*/

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
