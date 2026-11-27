import { CONFIG } from "./config.js";
import { Mario } from "./Mario.js";
import { Moneda } from "./Moneda.js";
import { Goomba } from "./Goomba.js";

// ===================================
// CLASE JUEGO
// Es el "director": guarda el estado (qué personajes, monedas y enemigos hay)
// y coordina a Mario, Moneda y Goomba.
// Depende de: CONFIG, Mario, Moneda, Goomba
// ===================================

export class Juego {
    constructor(escenario) {
        this.escenario = escenario;

        this.marios = []; // personajes que siguen vivos
        this.marioActivo = null; // el que recibe las órdenes
        this.contadorMario = 0; // para elegir el siguiente nombre y sprite

        this.monedas = []; // monedas que hay ahora en el escenario
        this.totalMonedas = 0; // monedas recogidas entre todos
        this.temporizadorMonedas = null; // para cancelar la próxima tanda al reiniciar

        this.goombas = []; // enemigos
        this.terminado = false; // true cuando aparece el Game Over

        this.info = document.querySelector("#info");
        this.marcador = document.querySelector("#contadorMonedas");
        this.cartelGameOver = document.querySelector("#gameOver");
    }

    // ===================================
    // ARRANQUE
    // ===================================

    iniciar() {
        this.generarMonedas();
        this.generarGoombas();
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

    /**
     * Retira del juego a un personaje que se ha quedado sin vidas.
     * Si era el último que quedaba, termina la partida.
     */
    eliminarMario(mario) {
        mario.morir();

        this.marios = this.marios.filter((m) => m !== mario);

        // Si era el activo, las órdenes pasan a otro (o a nadie)
        if (this.marioActivo === mario) {
            this.marioActivo = this.marios[0] ?? null;
        }

        if (this.marios.length === 0) {
            this.gameOver();
        }
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
            this.temporizadorMonedas = setTimeout(() => this.generarMonedas(), 800);
        }

        mario.mostrarMensaje(mensaje);
    }

    // ===================================
    // ENEMIGOS
    // ===================================

    generarGoombas(cantidad = CONFIG.CANTIDAD_GOOMBAS) {
        for (let i = 0; i < cantidad; i++) {
            this.goombas.push(new Goomba(this.escenario));
        }
    }

    // ===================================
    // COLISIONES
    // ===================================

    comprobarColisiones() {
        if (this.terminado) return;

        this.comprobarMonedas();
        this.comprobarGoombas();
    }

    comprobarMonedas() {
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

    comprobarGoombas() {
        for (const goomba of this.goombas) {
            const rectGoomba = goomba.elemento.getBoundingClientRect();

            // Copia del array: eliminarMario() lo modifica mientras lo recorremos
            for (const mario of [...this.marios]) {
                // recibirGolpe() devuelve true solo si de verdad pierde una vida
                if (mario.toca(rectGoomba) && mario.recibirGolpe()) {
                    if (mario.vidas === 0) {
                        this.eliminarMario(mario);
                    }
                }
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

    // ===================================
    // FIN DE LA PARTIDA
    // ===================================

    gameOver() {
        this.terminado = true;

        // La clase "fin" detiene a los Goombas (lo hace el CSS)
        this.escenario.classList.add("fin");
        this.cartelGameOver.hidden = false;

        this.info.textContent = "¡Game Over!";
    }

    /**
     * Vuelve a empezar tras un Game Over: limpia el escenario,
     * pone los contadores a cero y genera monedas y Goombas nuevos.
     */
    reiniciarPartida() {
        if (!this.terminado) return;

        clearTimeout(this.temporizadorMonedas);

        this.monedas.forEach((moneda) => moneda.elemento.remove());
        this.goombas.forEach((goomba) => goomba.eliminar());
        this.monedas = [];
        this.goombas = [];

        this.marios = [];
        this.marioActivo = null;
        this.contadorMario = 0;

        this.totalMonedas = 0;
        this.marcador.textContent = this.totalMonedas;

        this.terminado = false;
        this.escenario.classList.remove("fin");
        this.cartelGameOver.hidden = true;

        this.info.textContent = "¡Pulsa Crear nuevo Mario para comenzar!";

        this.generarMonedas();
        this.generarGoombas();
    }
}
