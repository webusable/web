import { CONFIG } from "./config.js";

// ===================================
// CLASE MARIO
// Solo sabe cosas sobre SÍ MISMO: su posición, su tamaño, sus vidas...
// No conoce la lista de personajes ni la de monedas: de eso se encarga Juego.
// Depende de: CONFIG (config.js)
// ===================================

export class Mario {
    constructor(nombre, sprite, escenario) {
        this.nombre = nombre;
        this.sprite = sprite;
        this.escenario = escenario;

        this.vidas = 3;
        this.monedas = 0;
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        // Crear elemento HTML
        this.elemento = document.createElement("figure");
        this.elemento.className = "mario";
        this.elemento.innerHTML = `
            <img
                src="${CONFIG.RUTA_IMG}${this.sprite}"
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
    // VIDAS (getter y setter)
    // ===================================

    get vidas() {
        return this._vidas;
    }

    set vidas(valor) {
        if (typeof valor !== "number") {
            return;
        }
        this._vidas = Math.max(0, valor);
    }

    // ===================================
    // ACTUALIZAR: lleva los datos al HTML
    // ===================================

    actualizar() {
        this.elemento.style.left = this.x + "px";

        this.elemento.style.transform = `
            scale(${this.scale})
            rotate(${this.rotation}deg)
        `;
    }

    // ===================================
    // MOVIMIENTO
    // ===================================

    avanzar(velocidad = 500) {
        const maxX = this.escenario.clientWidth - this.elemento.offsetWidth;

        /*
        if (this.x >= maxX) {
            this.perderVida();
            return;
        }
        */

        // Cuando llega al límite, se detiene
        this.x = Math.min(this.x + 100, maxX);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} avanza.`);
    }

    retroceder(velocidad = 500) {
        this.x = Math.max(this.x - 100, 0);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} retrocede.`);
    }

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
    // TRANSFORMACIONES
    // ===================================

    aumentar() {
        this.scale += 0.2;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} aumenta de tamaño.`);
    }

    encoger() {
        this.scale = Math.max(0.4, this.scale - 0.2);

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} se encoge.`);
    }

    rotar(grados = 45) {
        this.rotation += grados;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} rota ${grados} grados.`);
    }

    reiniciar() {
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} vuelve a su posición inicial.`);
    }

    /**
     * Crea una copia de este personaje y la DEVUELVE.
     * Quien la reciba (Juego) decide qué hacer con ella:
     * Mario no toca ninguna lista global.
     */
    duplicar() {
        const clon = new Mario(this.nombre + " clon", this.sprite, this.escenario);

        clon.x = this.x + 100;
        clon.scale = this.scale;
        clon.rotation = this.rotation;
        clon.actualizar();

        this.mostrarMensaje(`${this.nombre} se ha duplicado.`);

        return clon;
    }

    // ===================================
    // MENSAJES Y VIDAS
    // ===================================

    mostrarMensaje(texto) {
        document.querySelector("#info").textContent = texto;
    }

    perderVida() {
        this.vidas--;

        if (this.vidas === 0) {
            this.mostrarMensaje(`${this.nombre} ha perdido todas sus vidas!`);
        } else {
            this.mostrarMensaje(`${this.nombre} pierde una vida. Le quedan ${this.vidas}`);
        }
    }

    // ===================================
    // COLISIONES
    // ===================================

    /**
     * Rectángulo (en coordenadas de pantalla) que ocupa Mario.
     * getBoundingClientRect() tiene en cuenta la posición actual, el salto,
     * la escala y la rotación, aunque estén en plena animación.
     * Se reduce un 15 % por cada lado para que el choque sea más justo.
     */
    obtenerZonaColision() {
        const r = this.elemento.getBoundingClientRect();
        const margenX = r.width * 0.15;
        const margenY = r.height * 0.15;

        return {
            left: r.left + margenX,
            right: r.right - margenX,
            top: r.top + margenY,
            bottom: r.bottom - margenY,
        };
    }

    /**
     * ¿Está Mario tocando este rectángulo?
     */
    toca(rectangulo) {
        const m = this.obtenerZonaColision();

        return (
            m.left < rectangulo.right &&
            m.right > rectangulo.left &&
            m.top < rectangulo.bottom &&
            m.bottom > rectangulo.top
        );
    }

    /**
     * Mario se queda con la moneda: suma una y le dice a la moneda que desaparezca.
     */
    cogerMoneda(moneda) {
        this.monedas++;
        moneda.recoger();
    }
}
