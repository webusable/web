/**
 * @file Clase Goomba.
 *
 * Enemigo que patrulla de un lado a otro del escenario. Si un personaje
 * lo toca, pierde una vida (esa regla la aplica la clase Juego).
 *
 * @module Goomba
 * @requires module:utils
 */

import { aleatorio } from "./utils.js";

/**
 * Enemigo Goomba.
 *
 * JavaScript solo decide DÓNDE aparece y CUÁNTO recorre; el movimiento y el
 * dibujo (cuerpo, ojos, pies) los hace el CSS con la clase `.goomba`.
 */
export class Goomba {
    /**
     * Ancho en píxeles. Debe coincidir con el `width` de `.goomba` en el CSS.
     * @type {number}
     * @static
     */
    static ANCHO = 44;

    /**
     * Crea un Goomba en una posición aleatoria y lo añade al escenario.
     *
     * @param {HTMLElement} escenario - Contenedor en el que se inserta.
     */
    constructor(escenario) {
        // Cuántos píxeles camina hacia la derecha antes de volver
        const recorrido = aleatorio(120, 300);

        // Posición inicial: lejos de Mario (sale en x = 20) y sin salirse
        // del escenario al recorrer todo su camino
        const x = aleatorio(250, Math.max(250, escenario.clientWidth - Goomba.ANCHO - recorrido));

        // Duración de cada trayecto y desfase, para que no vayan sincronizados
        const duracion = aleatorio(30, 60) / 10; // de 3,0 a 6,0 s
        const desfase = aleatorio(0, 30) / 10; // de 0,0 a 3,0 s

        /**
         * Elemento HTML que representa al Goomba.
         * @type {HTMLSpanElement}
         */
        this.elemento = document.createElement("span");
        this.elemento.className = "goomba";
        this.elemento.setAttribute("aria-hidden", "true");

        this.elemento.style.left = x + "px";

        // Variables CSS que lee la animación `patrulla`
        this.elemento.style.setProperty("--recorrido", recorrido + "px");
        this.elemento.style.setProperty("--duracion", duracion + "s");
        this.elemento.style.animationDelay = `-${desfase}s`;

        escenario.appendChild(this.elemento);
    }

    /**
     * Quita el Goomba de la página (al reiniciar la partida).
     * @returns {void}
     */
    eliminar() {
        this.elemento.remove();
    }
}
