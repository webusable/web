// =====================================================
// V4: MOVER A MARIO EN EL ESCENARIO
// Conceptos: estado en variables, una función que pinta,
// eventos click y keydown, límites con clientWidth
// (Sustituye al script anterior: usa solo este <script>)
// =====================================================

// ---------- 1. Elementos del DOM (se buscan UNA vez) ----------
const mario = document.querySelector("#mario");
const escenario = document.querySelector("#escenario");
const info = document.querySelector("#info");

// ---------- 2. Estado de Mario ----------
const INICIO_X = 20;
let x = INICIO_X; // posición horizontal en px
let escala = 1; // tamaño
let giro = 0; // grados

// ---------- 3. Una sola función que "pinta" el estado ----------
function actualizar() {
    mario.style.left = x + "px";
    mario.style.transform = `scale(${escala}) rotate(${giro}deg)`;
}

function mensaje(texto) {
    info.textContent = texto;
}

// ---------- 4. Acciones (cada una cambia el estado y actualiza) ----------
function avanzar() {
    // Límite derecho: ancho del escenario menos ancho de Mario
    const maxX = escenario.clientWidth - mario.offsetWidth;
    x = Math.min(x + 100, maxX);
    actualizar();
    mensaje(`Mario avanza (x = ${x})`);
}

function retroceder() {
    x = Math.max(x - 100, 0); // límite izquierdo
    actualizar();
    mensaje(`Mario retrocede (x = ${x})`);
}

function saltar() {
    // Reiniciamos la animación por si se pulsa varias veces seguidas
    mario.classList.remove("saltando");
    void mario.offsetWidth; // fuerza al navegador a "olvidar" la clase
    mario.classList.add("saltando");

    // Cuando termina la animación CSS, quitamos la clase
    mario.addEventListener(
        "animationend",
        () => mario.classList.remove("saltando"),
        { once: true }, // el aviso se borra tras ejecutarse
    );

    mensaje("Mario salta");
}

function aumentar() {
    escala = Math.min(escala + 0.2, 2.5);
    actualizar();
    mensaje(`Mario aumenta (escala ${escala.toFixed(1)})`);
}

function encoger() {
    escala = Math.max(escala - 0.2, 0.4);
    actualizar();
    mensaje(`Mario se encoge (escala ${escala.toFixed(1)})`);
}

function rotar() {
    giro += 90;
    actualizar();
    mensaje(`Mario rota (${giro % 360}°)`);
}

function reiniciar() {
    x = INICIO_X;
    escala = 1;
    giro = 0;
    actualizar();
    mensaje("Mario vuelve a su posición inicial");
}

// ---------- 5. Eventos de los botones ----------
// Pasamos la función SIN paréntesis: el navegador la ejecutará al hacer click
document.querySelector("#btnAvanzar").addEventListener("click", avanzar);
document.querySelector("#btnRetroceder").addEventListener("click", retroceder);
document.querySelector("#btnSaltar").addEventListener("click", saltar);
document.querySelector("#btnAumentar").addEventListener("click", aumentar);
document.querySelector("#btnEncoger").addEventListener("click", encoger);
document.querySelector("#btnRotar").addEventListener("click", rotar);
document.querySelector("#btnReset").addEventListener("click", reiniciar);

// ---------- 6. Eventos del teclado (reutilizan las MISMAS funciones) ----------
document.addEventListener("keydown", (evento) => {
    switch (evento.key) {
        case "ArrowRight":
            evento.preventDefault(); // evita que la página se desplace
            avanzar();
            break;
        case "ArrowLeft":
            evento.preventDefault();
            retroceder();
            break;
        case "ArrowUp":
            evento.preventDefault();
            saltar();
            break;
    }
});

// ---------- 7. Posición inicial ----------
actualizar();

// EJERCICIOS
// a) Haz que Mario avance 150 px en vez de 100. ¿Cuántos sitios cambias?
//    (Mejor: crea una constante PASO = 100 y úsala en avanzar y retroceder.)
// b) Añade la tecla "r" para reiniciar y "+" / "-" para aumentar y encoger.
// c) Haz que el botón Retroceder se desactive (disabled) cuando x vale 0
//    y se active de nuevo al avanzar.
// d) Al llegar al límite derecho, muestra "¡Mario ha llegado al final!".
// e) Convierte las variables x, escala y giro en la clase Mario (ejercicio 6.4).
