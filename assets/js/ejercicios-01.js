/*
    Primeros pasos con JavaScript

    Ejercicios nivel 0 continuación de las dinámicas de 
    Diagramas de flujo y pseudocódigos
*/

/**
 *   Funcion sumarDosNumeros()
 *
 *   Pide 2 números al usuario y devuelve un texto con la suma de ambos
 *
 *   @returns {string}
 */

function sumarDosNumeros() {
    let n1 = parseFloat(prompt("Escribe el primer sumando"));
    alert("Has escrito " + n1 + " para el primer sumando");

    let n2 = parseFloat(prompt("Escribe el segundo sumando"));
    alert("Has escrito " + n2 + " para el segundo sumando");

    let suma = n1 + n2;
    alert("La suma de " + n1 + " + " + n2 + " es " + suma);
}

/**
 *   Funcion restarDosNumeros()
 *
 *   Pide 2 números al usuario y devuelve un texto con la resta del primero menos el segundo
 *
 *   @returns {string}
 */

function restarDosNumeros() {
    // Pedimos el minuendo al usuario
    let n1 = parseFloat(prompt("Escribe el minuendo"));

    // Mostramos el número introducido
    alert("Has escrito " + n1 + " para el minuendo");

    // Pedimos el sustraendo al usuario
    let n2 = parseFloat(prompt("Escribe el sustraendo"));

    // Mostramos el número introducido
    alert("Has escrito " + n2 + " para el sustraendo");

    // Realizamos la resta
    let resultado = n1 - n2;

    // Mostramos el resultado de la resta
    alert("La resta de " + n1 + " - " + n2 + " es " + resultado);
}

/**
 *   Funcion multiplicarDosNumeros()
 *
 *   Pide 2 números al usuario y devuelve un texto con el producto de ambos
 *
 *   @returns {string}
 */

// FUNCIÓN PARA REALIZAR UNA MULTIPLICACIÓN
function multiplicarDosNumeros() {
    // Pedimos el primer número al usuario
    let n1 = parseFloat(prompt("Introduce el primer número:"));

    // Pedimos el segundo número al usuario
    let n2 = parseFloat(prompt("Introduce el segundo número:"));

    // Realizamos la multiplicación
    let resultado = n1 * n2;

    // Mostramos el resultado por la consola
    // console.log("La multiplicación es: " + resultado);
    alert("El producto de " + n1 + " * " + n2 + " es " + resultado);
}

function dividirDosNumeros() {
    // Pedimos el primer número al usuario
    let n1 = parseFloat(prompt("Introduce el dividendo:"));

    // Pedimos el segundo número al usuario
    let n2 = parseFloat(prompt("Introduce el divisor:"));

    while (n2 === 0) {
        alert("El divisor no puede ser cero!!");
        n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));
    }

    let resultado = n1 / n2;

    alert("La división entre " + n1 + " / " + n2 + " es " + resultado);
}

function dividirDosNumeros3() {
    // Pedimos el segundo número al usuario
    let n2 = parseFloat(prompt("Introduce el divisor:"));

    if (n2 !== 0) {
        // Pedimos el primer número al usuario
        let n1 = parseFloat(prompt("Introduce el dividendo:"));
        let resultado = n1 / n2;

        alert("La división entre " + n1 + " / " + n2 + " es " + resultado);
    } else {
        alert("El divisor no puede ser cero!!");
        // n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));
        dividirDosNumeros();
    }
}

function dividirDosNumeros2() {
    // Pedimos el primer número al usuario
    let n1 = parseFloat(prompt("Introduce el dividendo:"));

    // Pedimos el segundo número al usuario
    // let n2 = parseFloat(prompt("Introduce el divisor:"));
    let n2 = 0;

    while (n2 === 0) {
        n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));

        if (n2 === 0) {
            alert("El divisor no puede ser cero!!");
        }
    }

    let resultado = n1 / n2;

    alert("La división entre " + n1 + " / " + n2 + " es " + resultado);
}

function escribirFraseCastigo() {
    let vueltas = parseInt(prompt("Cuántas veces se deber escribir la frase de castigo?"));
    let frase = prompt("Cuál es la frase de castigo?");
    let message = "";

    for (let i = 1; i <= vueltas; i++) {
        // Guardamos el texto a mostrar por Consola en una variable String
        message = i + ". ";
        // message = message + frase;
        message += frase;

        console.log(message);
    }
}

function escribirFraseCastigoConWhile() {
    let vueltas = parseInt(prompt("Cuántas veces se deber escribir la frase de castigo?"));
    let frase = prompt("Cuál es la frase de castigo?");
    let message = "";

    let i = 1;
    while (i <= vueltas) {
        message = i + ".- ";
        message += frase;

        console.log(message);

        // i = i + 1;
        // i += 1;
        i++;
    }
}

function escribirFraseCastigoConDoWhile() {
    let vueltas = parseInt(prompt("Cuántas veces se deber escribir la frase de castigo?"));
    let frase = prompt("Cuál es la frase de castigo?");
    let message = "";

    let i = 1;
    do {
        message = i + ": ";
        message += frase;

        console.log(message);
        i++;
    } while (i <= vueltas);
}

function mostrarTablaDeMultiplicarDeUnNumero() {
    let numero = parseInt(prompt("De qué numero te muestro la tabla de multiplicar?"));
    let message = "";

    console.log("Tabla del " + numero);
    console.log("-------------");

    for (let i = 1; i <= 10; i++) {
        message = numero + " x " + i + " = " + numero * i;

        console.log(message);
    }
}

function mostrarNumerosParesHastaValorDeUsuario() {
    let numero = parseInt(prompt("Hasta qué numero te muestro los pares?"));
    let message = "";

    console.log("Números pares del cero al " + numero);
    console.log("------------------------------");

    for (let i = 0; i <= numero; i += 2) {
        // message = message + i + ", ";
        message += i + ", ";
    }
    console.log(message);
}

function mostrarAprobado() {
    let corte = parseFloat(prompt("Escriba la nota de corte para aprobar"));
    let nota = parseFloat(prompt("Escriba la nota obtenida"));

    if (nota >= corte) {
        console.log("Aprobado");
    }
}

function pedirEdadRequerida() {
    let edadMinima = parseInt(prompt("Escriba la edad mínima"));
    let edadAlumnado = parseInt(prompt("Esriba la edad de la persona"));

    if (edadAlumnado >= edadMinima) {
        console.log("Puede pasar");
    } else {
        console.log("Permiso denegado");
    }
}

function clasificarNotas() {
    let nota = parseFloat(prompt("Introduce la nota"));

    if (nota >= 0 && nota < 5) {
        console.log("Supenso");
    } else if (nota >= 5 && nota < 7) {
        console.log("Aprobado");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");
    } else if (nota >= 9 && nota < 10) {
        console.log("Sobresaliente");
    } else if (nota === 10) {
        console.log("Matrícula de honor!");
    } else {
        console.log("La nota debe estar comprendida entre 0 y 10");
        clasificarNotas();
    }
}

/*
    Llamadas a las funciones
*/

function seleccionarOperacion() {
    let operacion = parseInt(prompt("Seleccione la operación que desea ejecutar [01: suma | 02: resta | 03: multiplicación | 04: división]"));

    if (operacion === 1) {
        alert("Has seleccionado sumar");
        sumarDosNumeros();
    } else if (operacion === 2) {
        alert("Has seleccionado RESTAR");
        restarDosNumeros();
    } else if (operacion === 3) {
        alert("Has seleccionado MULTIPLICAR");
        multiplicarDosNumeros();
    } else if (operacion === 4) {
        alert("Has seleccionado DIVIDIR");
        dividirDosNumeros();
    } else {
        alert("Por favor, seleccione una opción válida [1, 2, 3, 4]");
        seleccionarOperacion();
    }
}

// console.log("El resultado de la mulplicación es " + multiplicarDosNumeros());
// sumarDosNumeros();
// restarDosNumeros();
// multiplicarDosNumeros();
// dividirDosNumeros();

// seleccionarOperacion();
// mostrarTablaDeMultiplicarDeUnNumero();
// mostrarNumerosParesHastaValorDeUsuario();
// mostrarAprobado();
// pedirEdadRequerida();
clasificarNotas();
