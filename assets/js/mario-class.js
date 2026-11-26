"use strict";

// ===================================O
// 1. CLASE MARIO
// ===================================

class Mario {
    constructor(nombre = "Mario") {
        this.nombre = nombre;
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.escenario = document.querySelector("#escenario");

        // Crear elemento HTML
        this.elemento = document.createElement("figure");

        this.elemento.className = "mario";

        this.elemento.innerHTML = `
            <img
                src="../assets/img/super-mario-bross.webp"
                alt="${this.nombre}"
                draggable="false"
            >
            <figcaption>${this.nombre}</figcaption>
        `;

        // Insertar Mario en el escenario
        this.escenario.appendChild(this.elemento);

        // Actualizar posición
        this.actualizar();
    }

    // ===================================
    // ACTUALIZAR
    // ===================================

    actualizar() {
        this.elemento.style.left = this.x + "px";

        this.elemento.style.transform = `
            scale(${this.scale})
            rotate(${this.rotation}deg)
        `;
    }

    // ===================================
    // AVANZAR
    // ===================================

    avanzar(velocidad = 500) {
        const maxX = this.escenario.clientWidth - this.elemento.offsetWidth;

        this.x = Math.min(this.x + 100, maxX);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} avanza.`);
    }

    // ===================================
    // RETROCEDER
    // ===================================

    retroceder(velocidad = 500) {
        this.x = Math.max(this.x - 100, 0);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} retrocede.`);
    }

    // ===================================
    // SALTAR
    // ===================================

    saltar() {
        this.elemento.classList.remove("saltando");

        // Reiniciar animación
        void this.elemento.offsetWidth;

        this.elemento.classList.add("saltando");

        setTimeout(() => {
            this.elemento.classList.remove("saltando");
        }, 700);

        this.mostrarMensaje(`${this.nombre} salta.`);
    }

    // ===================================
    // DUPLICAR
    // ===================================

    duplicar() {
        const nuevoMario = new Mario(this.nombre + " clon");

        nuevoMario.x = this.x + 100;
        nuevoMario.scale = this.scale;
        nuevoMario.rotation = this.rotation;

        nuevoMario.actualizar();

        // Registrar el nuevo objeto
        marios.push(nuevoMario);

        // Convertirlo en personaje activo
        marioActivo = nuevoMario;

        this.mostrarMensaje(`${this.nombre} se ha duplicado.`);

        return nuevoMario;
    }

    // ===================================
    // AUMENTAR
    // ===================================

    aumentar() {
        this.scale += 0.2;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} aumenta de tamaño.`);
    }

    // ===================================
    // ENCOGER
    // ===================================

    encoger() {
        this.scale = Math.max(0.4, this.scale - 0.2);

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} se encoge.`);
    }

    // ===================================
    // ROTAR
    // ===================================

    rotar(grados = 45) {
        this.rotation += grados;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} rota ${grados} grados.`);
    }

    // ===================================
    // REINICIAR
    // ===================================

    reiniciar() {
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} vuelve a su posición inicial.`);
    }

    // ===================================
    // MOSTRAR MENSAJES
    // ===================================

    mostrarMensaje(texto) {
        document.querySelector("#info").textContent = texto;
    }
}

// ===================================
// 2. VARIABLES DE CONTROL
// ===================================

// Array que almacena todos los objetos Mario
let marios = [];

// Personaje que recibirá las órdenes
let marioActivo = null;

// Contador de personajes
let contadorMario = 0;

// ===================================
// 3. CREAR UN NUEVO MARIO
// ===================================

function crearMario() {
    contadorMario++;

    const nuevoMario = new Mario(`Mario ${contadorMario}`);

    marios.push(nuevoMario);

    marioActivo = nuevoMario;

    nuevoMario.mostrarMensaje(`${nuevoMario.nombre} ha sido creado.`);

    return nuevoMario;
}

// ===================================
// 4. EVENTO: CREAR MARIO
// ===================================

// document.querySelector("#btnCrearMario").addEventListener("click", crearMario);

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Enter") {
        crearMario();
    }
});

// ===================================
// 5. EVENTOS DE MOVIMIENTO
// ===================================
/*
document.querySelector("#btnAvanzar").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.avanzar(800);
    }
});
*/

document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowRight") {
        if (marioActivo) {
            marioActivo.avanzar(800);
        }
    }
});

/*
document.querySelector("#btnRetroceder").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.retroceder(800);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowLeft") {
        if (marioActivo) {
            marioActivo.retroceder(800);
        }
    }
});

*/

document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowLeft") {
        if (marioActivo) {
            marioActivo.retroceder(800);
        }
    }
});

/*
document.querySelector("#btnSaltar").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.saltar();
    }
});
*/

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Space") {
        if (marioActivo) {
            evento.preventDefault();
            marioActivo.saltar();
        }
    }
});

// ===================================
// 6. EVENTOS DE TRANSFORMACIÓN
// ===================================

document.querySelector("#btnAumentar").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.aumentar();
    }
});

document.querySelector("#btnEncoger").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.encoger();
    }
});

document.querySelector("#btnRotar").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.rotar(90);
    }
});

document.querySelector("#btnDuplicar").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.duplicar();
    }
});

document.querySelector("#btnReset").addEventListener("click", () => {
    if (marioActivo) {
        marioActivo.reiniciar();
    }
});
