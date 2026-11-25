// ===================================
// CLASE MARIO
// ===================================

class Mario {
    constructor(nombre = "Mario") {
        this.nombre = nombre;
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;
        this.velocidad = 300;

        this.escenario = document.querySelector("#escenario");

        // Crear el elemento HTML de Mario
        this.elemento = document.createElement("figure");
        this.elemento.className = "mario";

        this.elemento.innerHTML = `
      <img src="img/mario.png" alt="${this.nombre}" draggable="false">
      <figcaption>${this.nombre}</figcaption>
    `;

        this.escenario.appendChild(this.elemento);

        // Aplicar posición inicial
        this.actualizar();
    }

    // ===================================
    // MÉTODO PARA ACTUALIZAR EL PERSONAJE
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
    // velocidad = duración de la transición en ms
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

        // Reiniciar la animación
        void this.elemento.offsetWidth;

        this.elemento.classList.add("saltando");

        setTimeout(() => {
            this.elemento.classList.remove("saltando");
        }, 700);

        this.mostrarMensaje(`${this.nombre} salta!`);
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

    // =========================================
    // MOSTRAR mensajes a la persona usuaria
    // =========================================

    mostrarMensaje(texto) {
        document.querySelector("#info").textContent = texto;
    }
}

// ===================================
// CREAR EL MARIO PRINCIPAL
// ===================================

// Mario principal: reutiliza el figure ya escrito en HTML
const mario = Object.create(Mario.prototype);

mario.nombre = "Mario";
mario.x = 20;
mario.scale = 1;
mario.rotation = 0;
mario.velocidad = 300;
mario.escenario = document.querySelector("#escenario");
mario.elemento = document.querySelector("#mario");

mario.actualizar();

// ===================================
// ASOCIAR EVENTOS A LOS BOTONES
// ===================================

document.querySelector("#btnAvanzar").addEventListener("click", () => {
    mario.avanzar(800);
});

document.querySelector("#btnRetroceder").addEventListener("click", () => {
    mario.retroceder(800);
});

document.querySelector("#btnSaltar").addEventListener("click", () => {
    mario.saltar();
});

document.querySelector("#btnAumentar").addEventListener("click", () => {
    mario.aumentar();
});

document.querySelector("#btnEncoger").addEventListener("click", () => {
    mario.encoger();
});

document.querySelector("#btnRotar").addEventListener("click", () => {
    mario.rotar(90);
});

document.querySelector("#btnDuplicar").addEventListener("click", () => {
    mario.duplicar();
});

document.querySelector("#btnReset").addEventListener("click", () => {
    mario.reiniciar();
});
