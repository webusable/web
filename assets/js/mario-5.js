"use strict";

/*
==================================================
REFERENCIAS
==================================================
*/

const salida = document.querySelector("#resultado-clases");

/*
==================================================
EJERCICIO 1
classList.add()
==================================================
*/

document.querySelector("#btn-seleccionar-mario")?.addEventListener("click", () => {
    document.querySelector("#mario-galeria").classList.add("seleccionado");

    salida.textContent = "Mario ha sido seleccionado.";
});

/*
==================================================
EJERCICIO 2
classList.add() múltiple
==================================================
*/

document.querySelector("#btn-estrella-luigi")?.addEventListener("click", () => {
    document.querySelector("#luigi-galeria").classList.add("seleccionado", "estrella");

    salida.textContent = "Luigi ha obtenido una estrella.";
});

/*
==================================================
EJERCICIO 3
classList.toggle()
==================================================
*/

document.querySelector("#btn-girar-yoshi")?.addEventListener("click", () => {
    document.querySelector("#yoshi-galeria").classList.toggle("girando");

    salida.textContent = "Yoshi ha cambiado su estado de giro.";
});

/*

document.querySelector("#btn-seleccionar-mario")?.addEventListener("click", () => {
    const mario = document.querySelector("#mario-galeria");

    mario.classList.toggle("seleccionado");

    if (mario.classList.contains("seleccionado")) {
        salida.textContent = "Mario ha sido seleccionado.";
    } else {
        salida.textContent = "Mario ya no está seleccionado.";
    }
});

*/

/*
==================================================
EJERCICIO 4
classList.add()
==================================================
*/

document.querySelector("#btn-enemigo-bowser")?.addEventListener("click", () => {
    document.querySelector("#bowser-galeria").classList.add("enemigo");

    salida.textContent = "Bowser ahora es un enemigo.";
});

/*
==================================================
EJERCICIO 5
classList.add()
==================================================
*/

document.querySelector("#btn-gigante-wario")?.addEventListener("click", () => {
    document.querySelector("#wario-galeria").classList.add("gigante");

    salida.textContent = "Wario se ha vuelto gigante.";
});

/*
==================================================
EJERCICIO 6
classList.add()
==================================================
*/

document.querySelector("#btn-transparente-kingboo")?.addEventListener("click", () => {
    document.querySelector("#kingboo-galeria").classList.add("transparente");

    salida.textContent = "King Boo se ha vuelto transparente.";
});

/*
==================================================
EJERCICIO 7
classList.add()
==================================================
*/

document.querySelector("#btn-pixelado-seta")?.addEventListener("click", () => {
    document.querySelector("#seta-galeria").classList.add("pixelado");

    salida.textContent = "La seta azul ahora aparece pixelada.";
});

/*
==================================================
EJERCICIO 8
classList.add()
==================================================
*/

document.querySelector("#btn-espejo-lakitu")?.addEventListener("click", () => {
    document.querySelector("#lakitu-galeria").classList.add("espejo");

    salida.textContent = "Lakitu ha sido reflejado.";
});

/*
==================================================
EJERCICIO 9
classList.remove()
==================================================
*/

document.querySelector("#btn-quitar-enemigo")?.addEventListener("click", () => {
    document.querySelector("#bowser-galeria").classList.remove("enemigo");

    salida.textContent = "Bowser ya no es enemigo.";
});

/*
==================================================
EJERCICIO 10
classList.contains()
==================================================
*/

document.querySelector("#btn-comprobar-estrella")?.addEventListener("click", () => {
    const mario = document.querySelector("#mario-galeria");

    if (mario.classList.contains("estrella")) {
        salida.textContent = "Mario tiene la clase estrella.";
    } else {
        salida.textContent = "Mario NO tiene la clase estrella.";
    }
});

/*
==================================================
EJERCICIO EXTRA
classList.replace()
==================================================
*/

document.querySelector("#btn-cambiar-lakitu")?.addEventListener("click", () => {
    document.querySelector("#lakitu-galeria").classList.replace("espejo", "enemigo");

    salida.textContent = "Lakitu ha cambiado de estado.";
});

/*
==================================================
EJERCICIO EXTRA
querySelectorAll()
==================================================
*/

document.querySelector("#btn-seleccionar-todos")?.addEventListener("click", () => {
    const personajes = document.querySelectorAll(".personaje");

    personajes.forEach((personaje) => {
        personaje.classList.add("seleccionado");
    });

    salida.textContent = "Todos los personajes han sido seleccionados.";
});
