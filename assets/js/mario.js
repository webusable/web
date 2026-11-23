// ===============================================================
// 1a: SELECCIONAR VARIAS FIGURAS, COLOREARLAS Y ROTULARLASa
// Conceptos: querySelectorAll, array, forEach, style, textContent
// ===============================================================

// 1. Seleccionamos TODAS las figuras de la galería (devuelve una lista)
const figuras = document.querySelectorAll("#galeria-mario figure");
console.log(figuras.length); // debe salir 6

// 2. Un array con 6 colores (uno por figura)
const colores = ["tomato", "orange", "gold", "mediumseagreen", "dodgerblue", "orchid"];
console.log(colores);

// 4. Recorremos las figuras: "indice" vale 0, 1, 2...
figuras.forEach((figura, indice) => {
    figura.style.backgroundColor = colores[indice];

    // querySelector también se puede usar sobre UN elemento:
    // busca solo dentro de esa figura
    figura.querySelector("figcaption").textContent = colores[indice];
});

// EJERCICIOS
// a) Cambia un color del array y recarga la página.
// b) ¿Qué pasa si el array tiene solo 4 colores? (mira la consola y la pantalla)
// c) Haz que #info diga cuántas figuras hay en la galería.
// d) ¿Por qué no hemos usado document.querySelector("figure")?
//    (Pista: ¿cuántas figuras hay en toda la página?)
