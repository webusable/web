import { CONFIG } from "./config.js";

// ===================================
// CONTROLES
// Traduce teclas y botones en llamadas al juego.
// Depende de: CONFIG
// ===================================

const esTactil = window.matchMedia("(pointer: coarse)").matches;

// Qué hace cada acción. Las usan por igual el teclado y los botones.
function crearAcciones(juego) {
    const activo = () => juego.marioActivo;

    return {
        crear: () => juego.crearMario(),
        cambiar: () => juego.cambiarMarioActivo(),
        avanzar: () => activo()?.avanzar(CONFIG.VELOCIDAD),
        retroceder: () => activo()?.retroceder(CONFIG.VELOCIDAD),
        saltar: () => activo()?.saltar(),
        aumentar: () => activo()?.aumentar(),
        encoger: () => activo()?.encoger(),
        rotar: () => activo()?.rotar(90),
        duplicar: () => juego.duplicarActivo(),
        reiniciar: () => activo()?.reiniciar(),
    };
}

// id del botón -> acción
const BOTONES = {
    btnCrearMario: "crear",
    btnCambiarMario: "cambiar",
    btnAvanzar: "avanzar",
    btnRetroceder: "retroceder",
    btnSaltar: "saltar",
    btnAumentar: "aumentar",
    btnEncoger: "encoger",
    btnRotar: "rotar",
    btnDuplicar: "duplicar",
    btnReset: "reiniciar",
};

// tecla (evento.code) -> acción
const TECLAS = {
    Enter: "crear",
    Tab: "cambiar",
    ArrowRight: "avanzar",
    ArrowLeft: "retroceder",
    Space: "saltar",
    KeyA: "aumentar",
    KeyE: "encoger",
    KeyR: "rotar",
    KeyD: "duplicar",
    Backspace: "reiniciar",
};

// Teclas cuyo comportamiento normal del navegador hay que anular
const TECLAS_SIN_DEFECTO = ["Tab", "Space", "Backspace"];

export function iniciarControles(juego) {
    const acciones = crearAcciones(juego);

    if (esTactil) {
        iniciarControlesTactiles(acciones);
    } else {
        iniciarControlesTeclado(acciones);
    }
}

function iniciarControlesTactiles(acciones) {
    for (const [id, accion] of Object.entries(BOTONES)) {
        document.querySelector("#" + id).addEventListener("click", acciones[accion]);
    }
}

function iniciarControlesTeclado(acciones) {
    document.addEventListener("keydown", (evento) => {
        const accion = TECLAS[evento.code];

        if (!accion) return;

        if (TECLAS_SIN_DEFECTO.includes(evento.code)) {
            evento.preventDefault();
        }

        acciones[accion]();
    });
}
