// =====================================================
// 1c: PRIMER EVENTO (click) Y classList.toggle
// Conceptos: addEventListener, toggle, contains, textContent
// =====================================================

const figuras = document.querySelectorAll("#galeria-mario figure");
const info = document.querySelector("#info");
const colores = ["tomato", "orange", "gold", "mediumseagreen", "dodgerblue", "orchid"];

figuras.forEach((figura, indice) => {
    figura.style.backgroundColor = colores[indice];
    figura.querySelector("figcaption").textContent = colores[indice];

    // Cada figura reacciona a su propio click
    figura.addEventListener("click", () => {
        figura.classList.toggle("foto-mario"); // la pone si no está, la quita si está
        info.textContent = `Has pulsado la figura ${indice + 1} (${colores[indice]})`;
    });
});

// EJERCICIOS
// a) Haz que info diga si Mario ha aparecido o desaparecido.
//    (Pista: classList.contains("foto-mario"))
// b) Haz que solo pueda haber UN Mario a la vez:
//    antes de poner el nuevo, quita la clase a todas las figuras.
