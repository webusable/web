"use strict";

// ============================================================
// 1. ARRAYS DE DATOS
// ============================================================

// Nombres de los personajes.
// Su orden debe coincidir con el orden de los background-image
// establecidos en el CSS mediante los selectores nth-child().

const personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo", "Seta Azul", "Lakitu"];

// Colores iniciales de fondo de cada personaje.
// Cada posición corresponde al personaje de la misma posición
// en el array personajesGaleriaMario.

const bgColorsGaleriaMario = ["lightpink", "salmon", "hotpink", "coral", "gold", "palegreen", "khaki", "turquoise"];

// ============================================================
// 2. VARIABLES DE CONTROL
// ============================================================

// Guarda el color seleccionado en la paleta.
// Inicialmente es null porque todavía no se ha elegido ninguno.

let colorSeleccionadoMario = null;

// Indica cuál es el siguiente personaje que se añadirá.
// Los seis primeros ya están escritos en el HTML.

let siguientePersonajeMario = 0;

// ============================================================
// 3. REFERENCIAS A LOS ELEMENTOS HTML
// ============================================================

// Contenedor de la galería.

const ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

// Contenedor de la paleta de colores.

const ulPaletaMario = document.querySelector("#paleta-colores ul.paleta");

// Botón que añade personajes.

const botonAgregarPersonaje = document.querySelector("#agregar-personaje");

// Elemento donde se muestran los mensajes informativos.

const outputInfoMario = document.querySelector("#info");

// ============================================================
// 4. CREACIÓN DE PERSONAJES
// ============================================================

/**
 * Crea la estructura HTML:
 *
 * <li>
 *   <figure class="img-before">
 *     <figcaption>Nombre</figcaption>
 *   </figure>
 * </li>
 *
 * Devuelve el elemento li creado.
 */

function crearElementoPersonajeMario(nombre, color) {
    const li = document.createElement("li");

    const figure = document.createElement("figure");

    const figcaption = document.createElement("figcaption");

    // Clase utilizada por el CSS para mostrar las imágenes.
    figure.classList.add("img-before");

    // Introduce el nombre del personaje.
    figcaption.textContent = nombre;

    // Asigna el color inicial del fondo.
    figure.style.backgroundColor = color;

    // Construye la estructura de elementos.
    figure.appendChild(figcaption);

    li.appendChild(figure);

    return li;
}

// ============================================================
// 5. INICIALIZACIÓN DE LA GALERÍA
// ============================================================

/**
 * Rellena los seis elementos li que ya existen en el HTML.
 *
 * No crea nuevos elementos en esta fase.
 * Respeta el orden de los arrays y los selectores CSS.
 */

function inicializarGaleriaMario() {
    const personajesHTML = ulGaleriaMario.querySelectorAll("li");

    // El siguiente personaje será el primero que no esté en el HTML.
    siguientePersonajeMario = personajesHTML.length;

    personajesHTML.forEach((li, indice) => {
        // Evita superar el número de personajes de los arrays.
        if (indice >= personajesGaleriaMario.length) return;

        const figure = li.querySelector("figure");
        const figcaption = li.querySelector("figcaption");

        if (!figure || !figcaption) return;

        // Asigna el nombre correspondiente.
        figcaption.textContent = personajesGaleriaMario[indice];

        // Asigna el color inicial.
        figure.style.backgroundColor = bgColorsGaleriaMario[indice];

        // Conserva la clase necesaria para el CSS.
        figure.classList.add("img-before");
    });
}

// ============================================================
// 6. AÑADIR PERSONAJES
// ============================================================

/**
 * Añade el siguiente personaje disponible del array.
 *
 * El botón no solicita ningún nombre al usuario:
 * utiliza automáticamente el siguiente nombre y color.
 */

function agregarPersonajeMario() {
    // Comprueba si el botón está en modo reiniciar.
    if (botonAgregarPersonaje.textContent.trim() === "Reiniciar") {
        // Recarga la página para volver al estado inicial.
        window.location.reload();

        return;
    }

    // Obtiene el nombre y el color de la posición actual.
    const nombre = personajesGaleriaMario[siguientePersonajeMario];

    const color = bgColorsGaleriaMario[siguientePersonajeMario];

    // Crea el nuevo elemento li > figure > figcaption.
    const nuevoPersonaje = crearElementoPersonajeMario(nombre, color);

    // Añade el personaje al final de la galería.
    ulGaleriaMario.appendChild(nuevoPersonaje);

    // Avanza a la siguiente posición del array.
    siguientePersonajeMario++;

    // Muestra un mensaje informativo.
    outputInfoMario.textContent = `Se ha añadido ${nombre}.`;

    // Comprueba si ya se han añadido todos los personajes.
    if (siguientePersonajeMario >= personajesGaleriaMario.length) {
        // Cambia el texto del botón.
        botonAgregarPersonaje.textContent = "Reiniciar";

        // Añade una clase CSS al botón.
        botonAgregarPersonaje.classList.add("reiniciar");

        // Informa al usuario.
        outputInfoMario.textContent = "Ya se han añadido todos los personajes. Puedes reiniciar la galería.";
    }
}

// ============================================================
// 7. INICIALIZACIÓN DE LA PALETA DE COLORES
// ============================================================

/**
 * Aplica a cada li de la paleta el color indicado en su texto.
 *
 * Por ejemplo:
 * <li>crimson</li> tendrá background-color: crimson.
 */

function inicializarPaletaMario() {
    const coloresHTML = ulPaletaMario.querySelectorAll("li");

    coloresHTML.forEach((li) => {
        const color = li.textContent.trim();

        li.style.backgroundColor = color;
    });
}

// ============================================================
// 8. SELECCIONAR UN COLOR DE LA PALETA
// ============================================================

/**
 * Guarda el color elegido por el usuario.
 *
 * Este color permanece activo hasta que se seleccione
 * otro elemento de la paleta.
 */

function seleccionarColorMario(color) {
    colorSeleccionadoMario = color;

    outputInfoMario.textContent = `Color seleccionado: ${color}. Haz clic en un personaje.`;
}

// ============================================================
// 9. APLICAR EL COLOR A UN PERSONAJE
// ============================================================

/**
 * Aplica el color activo al figure que recibe el clic.
 *
 * Si colorSeleccionadoMario es null, no modifica el fondo.
 *
 * El color activo no se pierde después de aplicarlo:
 * puede utilizarse sobre tantos personajes como se quiera.
 */

function aplicarColorMario(figure) {
    // Comprueba si el usuario ha seleccionado previamente un color.
    if (colorSeleccionadoMario === null) {
        outputInfoMario.textContent = "Selecciona primero un color de la paleta.";

        return;
    }

    // Aplica el color activo al figure pulsado.
    figure.style.backgroundColor = colorSeleccionadoMario;

    // Obtiene el nombre del personaje para mostrar información.
    const nombre = figure.querySelector("figcaption")?.textContent;

    outputInfoMario.textContent = `${colorSeleccionadoMario} aplicado a ${nombre}.`;
}

// ============================================================
// 10. CONFIGURACIÓN DE LOS EVENTOS
// ============================================================

function configurarEventosMario() {
    // --------------------------------------------------------
    // EVENTO 1: AÑADIR PERSONAJES
    // --------------------------------------------------------

    botonAgregarPersonaje.addEventListener("click", agregarPersonajeMario);

    // --------------------------------------------------------
    // EVENTO 2: SELECCIONAR UN COLOR
    // --------------------------------------------------------

    ulPaletaMario.addEventListener("click", (evento) => {
        // Busca el li de la paleta sobre el que se ha hecho clic.
        const liColor = evento.target.closest("li");

        // Comprueba que el clic pertenece a la paleta.
        if (!liColor || !ulPaletaMario.contains(liColor)) return;

        // Obtiene el color escrito en el li.
        const color = liColor.textContent.trim();

        // Guarda el color como color activo.
        seleccionarColorMario(color);
    });

    // --------------------------------------------------------
    // EVENTO 3: APLICAR EL COLOR A LOS PERSONAJES
    // --------------------------------------------------------

    ulGaleriaMario.addEventListener("click", (evento) => {
        // Busca el figure sobre el que se ha hecho clic.
        const figure = evento.target.closest("figure");

        // Comprueba que el figure pertenece a la galería.
        if (!figure || !ulGaleriaMario.contains(figure)) return;

        // Aplica el último color seleccionado en la paleta.
        aplicarColorMario(figure);
    });
}

// ============================================================
// 11. INICIALIZACIÓN GENERAL
// ============================================================

// Comprueba que existen todos los elementos necesarios
// antes de ejecutar las funciones.

if (ulGaleriaMario && ulPaletaMario && botonAgregarPersonaje && outputInfoMario) {
    // Inicializa los seis personajes del HTML.
    inicializarGaleriaMario();

    // Pinta los li de la paleta.
    inicializarPaletaMario();

    // Activa los eventos de clic.
    configurarEventosMario();
} else {
    console.error("Error: no se han encontrado todos los elementos HTML necesarios.");
}
