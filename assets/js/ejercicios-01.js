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

function clasificarNotasConSwitch() {
    let nota = parseFloat(prompt("Introduce la nota"));
    let calificacion = "pepe";

    switch (true) {
        case nota >= 0 && nota < 5:
            calificacion = "Suspenso";
            console.log(calificacion);
            break;
        case nota >= 5 && nota < 7:
            calificacion = "Aprobado";
            console.log(calificacion);
            break;
        case nota >= 7 && nota < 9:
            calificacion = "Notable";
            console.log(calificacion);
            break;
        case nota >= 9 && nota < 10:
            calificacion = "Sobresaliente";
            console.log(calificacion);
            break;
        case nota === 10:
            calificacion = "Matrícula de honor !!";
            console.log(calificacion);
            break;
        default:
            "La nota debe estar comprendida entre 0 y 10";
            clasificarNotasConSwitch();
    }
}

function elegirCastigo() {
    let numero = 0;
    let castigo = "";
    let error = "";

    let contador = 0;
    while (numero < 1 || numero > 4) {
        if (contador > 0) {
            alert("Por favor, apanpao!! Escribe un castigo del 1 al 4");
        }
        numero = parseInt(
            prompt(
                "Elige el número de tu castigo: \n" +
                    "[1] - Limpiar la pizarra \n" +
                    "[2] - Recoger el patio \n" +
                    "[3] - Ordenar la biblioteca \n" +
                    "[4] - Escribir 100 frase de castigo \n",
            ),
        );
        contador++;
    }

    switch (numero) {
        case 1:
            castigo = "Limpiar la pizarra";
            break;
        case 2:
            castigo = "Recoger el patio";
            break;
        case 3:
            castigo = "Ordenar la biblioteca";
            break;
        case 4:
            castigo = "Escribir 100 frases de castigo";
            break;
        default:
            error = "No deberías haber llegado aquí !!!!";
            console.log(error);
    }
    console.log(castigo);
}

function calcularCuadradoYCubo() {
    let n1 = parseFloat(prompt("Introduce un número"));
    let cuadrado,
        cubo = 0;
    let message = "";

    cuadrado = n1 ** 2;
    cubo = n1 ** 3;

    message = "El cuadrado de " + n1 + " es " + cuadrado;
    message += "\n";
    message += "El cubo de " + n1 + " es " + cubo;

    alert(message);
}

function calcularPotenciaDeUnNumero() {
    let base = parseFloat(prompt("Introduce la base del cálculo"));
    let exponente = parseFloat(prompt("Introduce el exponente"));
    let resultado = 0;
    let message = "";

    resultado = base ** exponente;

    message = base + " elevado a potencia de " + exponente + " es " + resultado;
    alert(message);
}

function calcularMediaAritmetica3Numeros() {
    let n1 = parseFloat(prompt("Introduce el número 1"));
    let n2 = parseFloat(prompt("Introduce el número 2"));
    let n3 = parseFloat(prompt("Introduce el número 3"));
    let resultado = 0;
    let message = "";

    resultado = (n1 + n2 + n3) / 3;

    message = "La media aritmética de " + n1 + ", " + n2 + " y " + n3 + " es: " + resultado;

    alert(message);
}

function calcularMediaAritmetica() {
    let divisor = parseInt(prompt("Introduzca el divisor de la media aritmética"));
    let num = 0;
    let suma = 0;
    let resultado = 0;

    let message = "La media aritmética de ";
    let contador = 1;

    while (contador <= divisor) {
        num = parseFloat(prompt("Introduzca el número " + contador + " de la serie para hallar la media aritmética"));

        if (contador < divisor) {
            message += num + " y ";
        } else {
            message += num;
        }

        suma += parseFloat(num);

        contador++;
    }

    resultado = suma / divisor;
    message += " es " + resultado;

    alert(message);
}

function pepe() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

/*
    Llamadas a las funciones
*/

function seleccionarOperacion() {
    let operacion = parseInt(
        prompt("Seleccione la operación que desea ejecutar [01: suma | 02: resta | 03: multiplicación | 04: división]"),
    );

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
// clasificarNotasConSwitch();
// elegirCastigo();
// calcularCuadradoYCubo();
// calcularPotenciaDeUnNumero();
// calcularMediaAritmetica3Numeros();
calcularMediaAritmetica();
