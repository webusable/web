// ============================================================
// 1b: AÑADIR UNA CLASE CSS CON classList
// Conceptos: classList.add, separar estilo (CSS) y lógica (JS)
// ============================================================

// Ponemos a Mario en la PRIMERA figura de la galería.
// El dibujo no está en JS: está en la clase .foto-mario del CSS.
figuras[3].classList.add("foto-mario");

let mario = document.querySelector("#mario > img");
console.log("---------------------------------");
console.log(mario);
console.log("---------------------------------");

// EJERCICIOS
// a) Pon a Mario en la figura 4 (¿qué índice le corresponde?).
// b) Pon a Mario en TODAS las figuras con un bucle.
// c) Abre F12 > Elementos y mira cómo cambia el atributo class.
// d) PREGUNTA: el color sigue viéndose detrás de Mario. ¿Por qué?
//    (background-color y background-image son propiedades distintas.)
// e) PREGUNTA: ¿por qué no usamos la clase "mario" en la galería?
