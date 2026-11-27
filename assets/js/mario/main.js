import { Juego } from "./Juego.js";
import { iniciarControles } from "./controles.js";

// ===================================
// PUNTO DE ENTRADA
// Crea el juego, conecta los controles y arranca.
// Es el único archivo que carga el HTML: él importa el resto.
// ===================================

const juego = new Juego(document.querySelector("#escenario"));

iniciarControles(juego);
juego.iniciar();
