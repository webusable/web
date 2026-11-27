import { CONFIG } from "./config.js";
import { Mario } from "./Mario.js";
import { Moneda } from "./Moneda.js";

// ===================================
// CLASE JUEGO
// Es el "director": guarda el estado (qué personajes y monedas hay)
// y coordina a Mario y Moneda. Antes eran variables globales sueltas.
// Depende de: CONFIG, Mario, Moneda
// ===================================

export class Juego {
    constructor(escenario) {
        this.escenario = escenario;

        this.marios = []; // todos los personajes
        this.marioActivo = null; // el que recibe las órdenes
        this.contadorMario = 0; // para elegir el siguiente nombre y sprite

        this.monedas = []; // monedas que hay ahora en el escenario
        this.totalMonedas = 0; // monedas recogidas entre todos

        this.marcador = document.querySelector("#contadorMonedas");
    }

    // ===================================
    // ARRANQUE
    // ===================================

    iniciar() {
        this.generarMonedas();
        this.bucle();
    }

    // ===================================
    // PERSONAJES
    // ===================================

    crearMario() {
        // Siguiente personaje de la lista (vuelve al principio al acabar)
        const indice = this.contadorMario % CONFIG.NOMBRES.length;
        const nombre = CONFIG.NOMBRES[indice];
        const sprite = CONFIG.SPRITES[indice];

        const nuevoMario = new Mario(nombre, sprite, this.escenario);

        this.registrar(nuevoMario);
        this.contadorMario++;

        nuevoMario.mostrarMensaje(`${nombre} ha sido creado.`);

        return nuevoMario;
    }

    /**
     * Guarda el personaje en la lista y lo convierte en el activo
     */
    registrar(mario) {
        this.marios.push(mario);
        this.marioActivo = mario;
    }

    cambiarMarioActivo() {
        if (this.marios.length === 0) return;

        const indice = (this.marios.indexOf(this.marioActivo) + 1) % this.marios.length;

        this.marioActivo = this.marios[indice];
        this.marioActivo.mostrarMensaje(`${this.marioActivo.nombre} es ahora el personaje activo.`);
    }

    duplicarActivo() {
        if (!this.marioActivo) return;

        this.registrar(this.marioActivo.duplicar());
    }

    // ===================================
    // MONEDAS
    // ===================================

    generarMonedas(cantidad = CONFIG.CANTIDAD_MONEDAS) {
        for (let i = 0; i < cantidad; i++) {
            this.monedas.push(new Moneda(this.escenario));
        }
    }

    recogerMoneda(mario, moneda) {
        mario.cogerMoneda(moneda);

        this.monedas = this.monedas.filter((m) => m !== moneda);

        this.totalMonedas++;
        this.marcador.textContent = this.totalMonedas;

        let mensaje = `${mario.nombre} coge una moneda (lleva ${mario.monedas}).`;

        // Si era la última, programamos una tanda nueva
        if (this.monedas.length === 0) {
            mensaje += " ¡Era la última! Aparecen monedas nuevas.";
            setTimeout(() => this.generarMonedas(), 800);
        }

        mario.mostrarMensaje(mensaje);
    }

    // ===================================
    // COLISIONES
    // ===================================

    comprobarColisiones() {
        // [...] copia el array: recogerMoneda() lo modifica mientras lo recorremos
        for (const moneda of [...this.monedas]) {
            if (moneda.recogida) continue;

            const rectMoneda = moneda.elemento.getBoundingClientRect();
            const mario = this.marios.find((m) => m.toca(rectMoneda));

            if (mario) {
                this.recogerMoneda(mario, moneda);
            }
        }
    }

    /**
     * Bucle del juego: se repite en cada fotograma.
     * Hace falta porque Mario se mueve con una transición CSS y salta
     * con una animación: su posición real cambia sin que el código lo note.
     */
    bucle() {
        this.comprobarColisiones();
        requestAnimationFrame(() => this.bucle());
    }
}
