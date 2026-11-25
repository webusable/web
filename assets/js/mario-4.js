"use strict";

/* =========================================================
   1. SELECCIÓN DE ELEMENTOS DEL DOM
========================================================= */

const ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

const info = document.querySelector("#info");

const inputNombre = document.querySelector("#nombre-personaje");

const botonAgregar = document.querySelector("#agregar-personaje");

const ulPaleta = document.querySelector("#paleta-colores ul.paleta");

/* =========================================================
   2. DECLARACIÓN E INICIALIZACIÓN DE ARRAYS
========================================================= */

// Personajes iniciales
const personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo"];

// Colores iniciales de las figuras
const bgColorsGaleriaMario = ["lightpink", "salmon", "hotpink", "coral", "gold", "palegreen"];

// Color seleccionado por el usuario
let colorSeleccionado = null;

/* =========================================================
   3. CREAR UN PERSONAJE
========================================================= */

/**
 * Construye:
 *
 * <li>
 *     <figure class="img-before">
 *         <figcaption>Nombre</figcaption>
 *     </figure>
 * </li>
 */

function crearElementoPersonaje(nombre) {
    const li = document.createElement("li");

    const figure = document.createElement("figure");

    const figcaption = document.createElement("figcaption");

    figure.classList.add("img-before");

    figcaption.textContent = nombre;

    figure.appendChild(figcaption);

    li.appendChild(figure);

    return li;
}

/* =========================================================
   4. INICIALIZAR LOS PERSONAJES EXISTENTES
========================================================= */

function inicializarPersonajes() {
    // Activamos los estilos CSS de la galería
    ulGaleriaMario.classList.add("personajes");

    personajesGaleriaMario.forEach(function (nombre, indice) {
        // Recuperamos el li correspondiente
        let li = ulGaleriaMario.children[indice];

        // Si no existe, lo creamos
        if (!li) {
            li = crearElementoPersonaje(nombre);

            ulGaleriaMario.appendChild(li);
        }

        // Recuperamos figure
        let figure = li.querySelector("figure");

        // Si no existe, lo creamos
        if (!figure) {
            figure = document.createElement("figure");

            figure.classList.add("img-before");

            li.appendChild(figure);
        }

        // Recuperamos figcaption
        let caption = figure.querySelector("figcaption");

        if (!caption) {
            caption = document.createElement("figcaption");

            figure.appendChild(caption);
        }

        // Introducimos el nombre
        caption.textContent = nombre;

        // Aplicamos el color de fondo
        figure.style.backgroundColor = bgColorsGaleriaMario[indice];
    });
}

/* =========================================================
   5. AÑADIR NUEVOS PERSONAJES
========================================================= */

/**
 * Recibe un nombre y añade un nuevo li a la galería.
 */

function agregarPersonaje(nombre) {
    nombre = nombre.trim();

    // Validación
    if (nombre === "") {
        info.textContent = "Introduce el nombre del personaje.";

        return;
    }

    // Construimos el nuevo personaje
    const nuevoLi = crearElementoPersonaje(nombre);

    const nuevaFigura = nuevoLi.querySelector("figure");

    // Determinamos su color
    const indiceColor = personajesGaleriaMario.length % bgColorsGaleriaMario.length;

    const nuevoColor = colorSeleccionado !== null ? colorSeleccionado : bgColorsGaleriaMario[indiceColor];

    // Aplicamos el color
    nuevaFigura.style.backgroundColor = nuevoColor;

    // Insertamos el li en la galería
    ulGaleriaMario.appendChild(nuevoLi);

    // Actualizamos los arrays
    personajesGaleriaMario.push(nombre);

    bgColorsGaleriaMario.push(nuevoColor);

    // Información
    info.textContent = `Personaje añadido: ${nombre}`;

    console.log("Personaje añadido:", nombre);

    console.log("Total de personajes:", personajesGaleriaMario.length);
}

/* =========================================================
   6. INICIALIZAR LA PALETA DE COLORES
========================================================= */

function inicializarPaleta() {
    const itemsPaletaColores = ulPaleta.querySelectorAll("li");

    itemsPaletaColores.forEach(function (li) {
        // Recuperamos el nombre del color
        const color = li.textContent.trim();

        // Aplicamos el color al fondo del li
        li.style.backgroundColor = color;
    });
}

/* =========================================================
   7. SELECCIONAR UN COLOR
========================================================= */

function seleccionarColor(color) {
    colorSeleccionado = color;

    info.textContent = `Color seleccionado: ${color}`;
}

/* =========================================================
   8. PINTAR UNA FIGURA
========================================================= */

function pintarFigura(figure) {
    if (colorSeleccionado === null) {
        info.textContent = "Primero selecciona un color.";

        return;
    }

    // Pintamos la figura
    figure.style.backgroundColor = colorSeleccionado;

    // Recuperamos el nombre del personaje
    const caption = figure.querySelector("figcaption");

    // Actualizamos el mensaje
    info.textContent = `${caption.textContent} ahora es ${colorSeleccionado}`;

    // Averiguamos su posición en la galería
    const figuras = Array.from(ulGaleriaMario.querySelectorAll("figure"));

    const indice = figuras.indexOf(figure);

    // Actualizamos también el array de colores
    if (indice !== -1) {
        bgColorsGaleriaMario[indice] = colorSeleccionado;
    }
}

/* =========================================================
   9. CONFIGURACIÓN DE EVENTOS
========================================================= */

function configurarEventos() {
    // -----------------------------------------------------
    // A. BOTÓN AÑADIR PERSONAJE
    // -----------------------------------------------------

    botonAgregar.addEventListener("click", function () {
        agregarPersonaje(inputNombre.value);

        if (inputNombre.value.trim() !== "") {
            inputNombre.value = "";

            inputNombre.focus();
        }
    });

    // -----------------------------------------------------
    // B. TECLA ENTER
    // -----------------------------------------------------

    inputNombre.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter") {
            botonAgregar.click();
        }
    });

    // -----------------------------------------------------
    // C. SELECCIONAR COLOR DE LA PALETA
    // -----------------------------------------------------

    ulPaleta.addEventListener("click", function (evento) {
        const li = evento.target.closest("li");

        if (!li || !ulPaleta.contains(li)) {
            return;
        }

        seleccionarColor(li.textContent.trim());
    });

    // -----------------------------------------------------
    // D. PINTAR FIGURAS DE LA GALERÍA
    // -----------------------------------------------------

    ulGaleriaMario.addEventListener("click", function (evento) {
        const figure = evento.target.closest("figure");

        if (!figure || !ulGaleriaMario.contains(figure)) {
            return;
        }

        pintarFigura(figure);
    });
}

/* =========================================================
   10. INICIALIZACIÓN DE LA APLICACIÓN
========================================================= */

// Comprobamos que existen todos los elementos HTML
if (ulGaleriaMario && info && inputNombre && botonAgregar && ulPaleta) {
    // 1. Inicializamos los personajes
    inicializarPersonajes();

    // 2. Pintamos los li de la paleta
    inicializarPaleta();

    // 3. Registramos los eventos
    configurarEventos();

    console.log("Galería de Mario inicializada correctamente.");

    console.log("Personajes:", personajesGaleriaMario);
} else {
    console.error("No se han encontrado todos los elementos necesarios del HTML.");
}
