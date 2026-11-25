"use strict";

/* =========================================================
   1. REFERENCIAS A LOS ELEMENTOS DEL DOCUMENTO
========================================================= */

// Galería
const ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

// Información
const info = document.querySelector("#info");

// Formulario
const inputNombre = document.querySelector("#nombre-personaje");
const botonAgregar = document.querySelector("#agregar-personaje");

// Paleta
const ulPaleta = document.querySelector("#paleta-colores ul.paleta");

console.log("Inicio mario-4");

/* =========================================================
   2. COMPROBACIÓN DEL DOM
========================================================= */

if (!ulGaleriaMario || !info || !inputNombre || !botonAgregar || !ulPaleta) {
    console.error("Error: no se han encontrado todos los elementos HTML necesarios.");
} else {
    iniciarGaleria();

    /* =====================================================
       3. DATOS DE LA GALERÍA
    ===================================================== */

    const personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo"];

    const bgColorsGaleriaMario = ["lightpink", "salmon", "hotpink", "coral", "gold", "palegreen"];

    // Color seleccionado por el usuario
    let colorSeleccionado = null;

    /* =====================================================
       4. FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
    ===================================================== */

    function iniciarGaleria() {
        // Activamos la clase CSS de la galería
        ulGaleriaMario.classList.add("personajes");

        // Inicializamos los seis personajes
        inicializarPersonajes();

        // Inicializamos la paleta
        inicializarPaleta();

        // Activamos los eventos
        configurarEventos();

        console.log("Galería inicializada correctamente.");
    }

    /* =====================================================
       5. INICIALIZACIÓN DE LOS PERSONAJES
    ===================================================== */

    function inicializarPersonajes() {
        personajesGaleriaMario.forEach(function (nombre, indice) {
            let li = ulGaleriaMario.children[indice];

            // Si no existe el li, lo creamos
            if (!li) {
                li = crearElementoPersonaje(nombre);
                ulGaleriaMario.appendChild(li);
            }

            let figure = li.querySelector("figure");

            // Si no existe figure, lo creamos
            if (!figure) {
                figure = document.createElement("figure");
                figure.classList.add("img-before");
                li.appendChild(figure);
            }

            // Comprobamos que exista figcaption
            let caption = figure.querySelector("figcaption");

            if (!caption) {
                caption = document.createElement("figcaption");
                figure.appendChild(caption);
            }

            // Asignamos nombre y color
            caption.textContent = nombre;

            figure.style.backgroundColor = bgColorsGaleriaMario[indice];
        });
    }

    /* =====================================================
       6. CREAR LA ESTRUCTURA HTML DE UN PERSONAJE
    ===================================================== */

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

    /* =====================================================
       7. AÑADIR PERSONAJES A LA GALERÍA
    ===================================================== */

    function agregarPersonaje(nombre) {
        // Limpiamos espacios
        nombre = nombre.trim();

        // Validamos el nombre
        if (nombre === "") {
            info.textContent = "Introduce el nombre del personaje.";

            return;
        }

        // Construimos el nuevo li
        const nuevoLi = crearElementoPersonaje(nombre);

        const nuevaFigura = nuevoLi.querySelector("figure");

        // Si hay color seleccionado, lo utilizamos.
        // En caso contrario, asignamos un color de la colección.
        const nuevoColor =
            colorSeleccionado !== null
                ? colorSeleccionado
                : bgColorsGaleriaMario[personajesGaleriaMario.length % bgColorsGaleriaMario.length];

        nuevaFigura.style.backgroundColor = nuevoColor;

        // Insertamos el personaje en la galería
        ulGaleriaMario.appendChild(nuevoLi);

        // Actualizamos los arrays
        personajesGaleriaMario.push(nombre);

        bgColorsGaleriaMario.push(nuevoColor);

        // Información
        info.textContent = `Personaje añadido: ${nombre}`;

        console.log("Personaje añadido:", nombre);
        console.log("Total:", personajesGaleriaMario.length);
    }

    /* =====================================================
       8. INICIALIZAR LA PALETA DE COLORES
    ===================================================== */

    function inicializarPaleta() {
        const colores = ulPaleta.querySelectorAll("li");

        colores.forEach(function (li) {
            const color = li.textContent.trim();

            // El color del fondo coincide con su nombre
            li.style.backgroundColor = color;
        });
    }

    /* =====================================================
       9. SELECCIONAR UN COLOR
    ===================================================== */

    function seleccionarColor(color) {
        colorSeleccionado = color;

        info.textContent = `Color seleccionado: ${color}`;
    }

    /* =====================================================
       10. PINTAR UNA FIGURA
    ===================================================== */

    function pintarFigura(figure) {
        if (colorSeleccionado === null) {
            info.textContent = "Primero selecciona un color.";

            return;
        }

        // Cambiamos el color de fondo
        figure.style.backgroundColor = colorSeleccionado;

        // Obtenemos el nombre
        const nombre = figure.querySelector("figcaption").textContent;

        info.textContent = `${nombre} ahora es ${colorSeleccionado}`;

        // Actualizamos el color correspondiente en el array
        const indice = Array.from(ulGaleriaMario.querySelectorAll("figure")).indexOf(figure);

        if (indice !== -1) {
            bgColorsGaleriaMario[indice] = colorSeleccionado;
        }
    }

    /* =====================================================
       11. CONFIGURAR LOS EVENTOS
    ===================================================== */

    function configurarEventos() {
        // BOTÓN: añadir personaje
        botonAgregar.addEventListener("click", function () {
            agregarPersonaje(inputNombre.value);

            if (inputNombre.value.trim() !== "") {
                inputNombre.value = "";
                inputNombre.focus();
            }
        });

        // TECLA ENTER: añadir personaje
        inputNombre.addEventListener("keydown", function (evento) {
            if (evento.key === "Enter") {
                botonAgregar.click();
            }
        });

        // PALETA: seleccionar color
        ulPaleta.addEventListener("click", function (evento) {
            const li = evento.target.closest("li");

            if (!li || !ulPaleta.contains(li)) {
                return;
            }

            seleccionarColor(li.textContent.trim());
        });

        // GALERÍA: pintar figura
        ulGaleriaMario.addEventListener("click", function (evento) {
            const figure = evento.target.closest("figure");

            if (!figure || !ulGaleriaMario.contains(figure)) {
                return;
            }

            pintarFigura(figure);
        });
    }
}
