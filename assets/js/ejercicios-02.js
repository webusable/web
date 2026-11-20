function crearListaColores() {
    let colores = [];

    colores = ["rojo", "verde", "azul"];

    console.log("colores: " + colores + "\n" + "colores[0]: " + colores[0] + "\n" + "colores[1]: " + colores[1] + "\n" + "colores[2]: " + colores[2] + "\n");

    console.log("colores.length = " + colores.length);

    console.log("Último valore de colores = colores[colores.length - 1]: " + colores[colores.length - 1]);

    // Cambia verde por amarillo

    colores[1] = "amarillo";

    console.log("Cambiar 'verde' por 'amarillo': " + colores);

    console.log("✔ Fin de crearListaColores()");
}
// crearListaColores();

function hacerListaCompra() {
    let lista = [];

    lista = ["Leche", "Pan", "Huevos"];

    console.log("La lista de la compra es: " + lista);

    return lista;
}
// hacerListaCompra();

function accederAUnElemento() {
    let comidas = ["Pizza", "Hamburguesa", "Paella"];

    // Que muestre solamente Hamburguesa

    console.log("Quiero comer " + comidas[1]);
    console.log("✔ Fin de accederAUnElemento()");
}
// accederAUnElemento();

function contarMisMascotas() {
    let mascotas = ["Marisa", "Calcetines", "Tatoo", "Botas", "Kiti", "Mixo", "Rocky", "Mateo", "Dreyfus"];

    // Cuántas mascotas tengo?

    console.log("Tengo " + mascotas.length + " mascotas");
    console.log("✔ Fin de contarMisMascotas()");
}
// contarMisMascotas();

function agregarProductoListaCompra() {
    let lista = hacerListaCompra();

    console.log(lista);

    lista.push("Manzanas");
    console.log(lista);
    console.log("✔ Fin de agregarProductoListaCompra()");
}
// agregarProductoListaCompra();

function eliminarTareaUltima() {
    let tareas = ["Estudiar", "Comprar pan", "Hacer testamento"];

    console.log("Antes de pop()");
    console.log(tareas);

    tareas.pop();

    console.log("Después de pop()");
    console.log(tareas);
}
// eliminarTareaUltima();

function mostrarSeriesTV() {
    let series = ["Dark", "Breaking Bad", "Stranger Things", "Los Soprano", "Juego de Tronos"];
    let message = "Mis series favoritas son: ";

    for (let i = 0; i < series.length; i++) {
        if (i === series.length - 2) {
            message += series[i] + " y ";
        } else if (i === series.length - 1) {
            message += series[i];
        } else {
            message += series[i] + ", ";
        }
    }

    console.log(message);
}
// mostrarSeriesTV();

function buscarNombre() {
    let amigos = ["Carlos", "Lucía", "María"];
    let nombreABuscar = "María";
    let resultado = false;

    resultado = amigos.includes(nombreABuscar);

    console.log(nombreABuscar + " está en la lista de amigos? " + resultado);

    nombreABuscar = "Pepe";
    resultado = amigos.includes(nombreABuscar);
    console.log(nombreABuscar + " está en la lista de amigos? " + resultado);
}
// buscarNombre();

function mostrarMenuDeUnDia() {
    let menus = ["Hamburguesa", "Pizza", "Raxo", "Pimientos rellenos", "Hallaca"];

    let menuDiaX = menus[2];

    console.log("Los miércoles hay " + menuDiaX);
}
// mostrarMenuDeUnDia();

function sumarGastos() {
    let gastos = [25, 40, 15, 20];
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i];
        console.log("Parcial gastos:");
        console.log(total);
    }

    console.log("Total Gastos:");
    console.log(total);
}
sumarGastos();
