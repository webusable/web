import { aleatorio } from "./utils.js";

// ===================================
// CLASE MONEDA
// Se coloca sola en una posición aleatoria al crearse.
// Depende de: aleatorio() (utils.js)
// ===================================

export class Moneda {
    static ANCHO = 32;

    constructor(escenario) {
        this.recogida = false;

        // Posición aleatoria. Empieza en x = 150 para no aparecer sobre Mario.
        const x = aleatorio(150, Math.max(150, escenario.clientWidth - Moneda.ANCHO));

        // Altura sobre el suelo: las más altas solo se alcanzan saltando
        const y = aleatorio(0, 150);

        this.elemento = document.createElement("span");
        this.elemento.className = "moneda";
        this.elemento.setAttribute("aria-hidden", "true");

        this.elemento.style.left = x + "px";
        this.elemento.style.bottom = `calc(var(--alto-suelo) + ${y}px)`;

        escenario.appendChild(this.elemento);
    }

    recoger() {
        this.recogida = true;

        // La animación de desvanecimiento la hace el CSS (.cogida)
        this.elemento.classList.add("cogida");

        setTimeout(() => this.elemento.remove(), 400);
    }
}
