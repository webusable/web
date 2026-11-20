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

function sumarDosNumeros(n1, n2) {
    let suma = n1 + n2;
    return suma;
}

/**
 *   Funcion restarDosNumeros()
 *
 *   Pide 2 números al usuario y devuelve un texto con la resta del primero menos el segundo
 *
 *   @returns {string}
 */
function restarDosNumeros(a, b) {
    let resultado = a - b;
    return resultado;
}

/**
 *   Funcion multiplicarDosNumeros()
 *
 *   Pide 2 números al usuario y devuelve un texto con el producto de ambos
 *
 *   @returns {string}
 */

// FUNCIÓN PARA REALIZAR UNA MULTIPLICACIÓN
function multiplicarDosNumeros(x, y) {
    // Realizamos la multiplicación
    let resultado = x * y;
    return resultado;
}

function dividirDosNumeros(n1, n2) {
    let resultado = n1 / n2;
    return resultado;
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
        numero = parseInt(prompt("Elige el número de tu castigo: \n" + "[1] - Limpiar la pizarra \n" + "[2] - Recoger el patio \n" + "[3] - Ordenar la biblioteca \n" + "[4] - Escribir 100 frase de castigo \n"));
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
    let num,
        suma,
        resultado = 0;

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

    resultado = parseFloat(suma / parseFloat(divisor));
    message += " es " + resultado;

    alert(message);
}

function mostrarParImpar() {
    let num = parseInt(prompt("Escribe un número entero"));
    let message = "";

    if (num % 2 === 0) {
        message = "El número " + num + " es par";
    } else {
        message = "El número " + num + " es impar";
    }

    alert(message);
}

function adivinarQueNumeroEstoyPensando() {
    // Pedimos el límite superior para la función random()
    const LIMITE = parseInt(prompt("Dame un número como límite superior del juego"));
    console.log("LIMITE = " + LIMITE);

    // Se crea un número aleatorio del 1 a LIMITE
    const MI_NUMERO = Math.floor(Math.random() * LIMITE) + 1;
    console.log("NUMERO_A_ADIVINAR = " + MI_NUMERO);

    // Inicializamos la variable del usuario
    let tuNumero = 0;

    // Inicializamos la variable de mensaje al usuario
    let message = "";

    // Repetimos mientras no acierte
    while (MI_NUMERO !== tuNumero) {
        tuNumero = parseInt(prompt("Adivina qué numero estoy pensado entre el 1 y el " + LIMITE + "?"));

        if (MI_NUMERO > tuNumero) {
            message = "Mi número es mayor que " + tuNumero;
        } else if (MI_NUMERO < tuNumero) {
            message = "Mi número es menor que " + tuNumero;
        } else {
            message = "Enhorabuena, has dicho " + tuNumero + " y yo había pensado " + MI_NUMERO;
        }
        alert(message);
    }
}

function calcularSumaGauss() {
    let n = parseInt(prompt("¿Cuántos días tendrá este desafío"));
    let resultado1 = 0;
    let resultado2 = 0;
    let message = "";

    resultado1 = (n * (n + 1)) / 2;

    message = "La suma de Gauss mediante fórmula del número " + n + " es " + resultado1 + "\n";

    for (let i = 0; i <= n; i++) {
        // resultado2 = resultado2 + i;
        resultado2 += i;
    }

    message += "La suma de Gauss mediante bucle del número " + n + " es ... " + resultado2;

    alert(message);
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
let suma = sumarDosNumeros();
// alert("La suma es " + suma);
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
// calcularMediaAritmetica();
// mostrarParImpar();
// calcularSumaGauss();
// adivinarQueNumeroEstoyPensando();

function probarFunciones() {
    let n1 = parseFloat(prompt("Escribe el primer numero"));
    let n2 = parseFloat(prompt("Escribe el segundo numero"));

    let suma = sumarDosNumeros(n1, n2);
    let resta = restarDosNumeros(n1, n2);
    let producto = multiplicarDosNumeros(n1, n2);

    console.log("La suma de " + n0 + " + " + n2 + " es " + suma);
    console.log("La resta de " + n0 + " - " + n2 + " es " + resta);
    console.log("El producto de " + n0 + " * " + n2 + " es " + producto);

    while (n2 === 0) {
        alert("El divisor no puede ser cero!!");
        n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));
    }
    let division = dividirDosNumeros(n1, n2);

    // alert("La suma de " + n1 + " + " + n2 + " es " + suma);

    console.log("La división de " + n1 + " / " + n2 + " es " + division);
}

// probarFunciones();

function mostrarMenuCalculadora() {
    let operacion = 99;
    let message = "";
    let n1 = 0;
    let n2 = 0;
    let resultado = 0;

    while (operacion < 0 || operacion > 4) {
        operacion = parseInt(prompt("Elige la operación a realizar: \n" + "[0] - Salir \n" + "[1] - Sumar \n" + "[2] - Restar \n" + "[3] - Multiplicar \n" + "[4] - Dividir \n"));

        if (operacion < 0 || operacion > 4) {
            alert("Apanpao!");
        }
    }

    if (operacion > 0) {
        n1 = parseFloat(prompt("Introduzca el primer número"));
        n2 = parseFloat(prompt("Introduzca el segundo número"));
    }

    switch (operacion) {
        case 1:
            resultado = sumarDosNumeros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es " + resultado;
            break;

        case 2:
            resultado = restarDosNumeros(n1, n2);
            message = "La resta de " + n1 + " - " + n2 + " es " + resultado;
            break;
        case 3:
            resultado = multiplicarDosNumeros(n1, n2);
            message = "El producto de " + n1 + " x " + n2 + " es " + resultado;
            break;
        case 4:
            while (n2 === 0) {
                alert("El divisor no puede ser cero");
                n2 = parseFloat(prompt("Introduzca el segundo número"));
            }

            resultado = dividirDosNumeros(n1, n2);
            message = "La división de " + n1 + " / " + n2 + " es " + resultado;
            break;
        default:
            message = "Gracias por jugar con nosotros! Adiós";
    }

    alert(message);
}

function mostrarMenuCalculadora2() {
    let continuar = 0;
    let operacion = 99;
    let message = "";
    let n1 = 0;
    let n2 = 0;
    let resultado = 0;

    while (operacion < 0 || operacion > 4) {
        operacion = parseInt(prompt("Elige la operación a realizar: \n" + "[0] - Salir \n" + "[1] - Sumar \n" + "[2] - Restar \n" + "[3] - Multiplicar \n" + "[4] - Dividir \n"));

        if (operacion < 0 || operacion > 4) {
            alert("Apanpao!");
        }
    }

    if (operacion > 0) {
        n1 = parseFloat(prompt("Introduzca el primer número"));
        n2 = parseFloat(prompt("Introduzca el segundo número"));
    }

    switch (operacion) {
        case 1:
            resultado = sumarDosNumeros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es " + resultado;
            break;

        case 2:
            resultado = restarDosNumeros(n1, n2);
            message = "La resta de " + n1 + " - " + n2 + " es " + resultado;
            break;
        case 3:
            resultado = multiplicarDosNumeros(n1, n2);
            message = "El producto de " + n1 + " x " + n2 + " es " + resultado;
            break;
        case 4:
            while (n2 === 0) {
                alert("El divisor no puede ser cero");
                n2 = parseFloat(prompt("Introduzca el segundo número"));
            }

            resultado = dividirDosNumeros(n1, n2);
            message = "La división de " + n1 + " / " + n2 + " es " + resultado;
            break;
        default:
            message = "Gracias por jugar con nosotros! Adiós";
    }

    alert(message);

    console.log("continuar antes de pedir = " + continuar);

    continuar = parseInt(prompt("Quieres realizar otra operación ? [Pulse 1 para continuar]"));
    console.log("continuar después de pedir = " + continuar);

    if (continuar === 1) {
        mostrarMenuCalculadora2();
        console.log("continuar en el if = " + continuar);
    }
    console.log("continuar después del if = " + continuar);
}

mostrarMenuCalculadora2();

function mostrarMenuCalculadora3() {
    let operacion = 99;
    let message = "";
    let n1 = 0;
    let n2 = 0;
    let resultado = 0;

    while (operacion < 0 || operacion > 4) {
        operacion = parseInt(prompt("Elige la operación a realizar: \n" + "[0] - Salir \n" + "[1] - Sumar \n" + "[2] - Restar \n" + "[3] - Multiplicar \n" + "[4] - Dividir \n"));

        if (operacion < 0 || operacion > 4) {
            alert("Apanpao!");
        }
    }

    if (operacion > 0) {
        n1 = parseFloat(prompt("Introduzca el primer número"));
        n2 = parseFloat(prompt("Introduzca el segundo número"));
    }

    switch (operacion) {
        case 1:
            resultado = sumarDosNumeros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es " + resultado;
            break;

        case 2:
            resultado = restarDosNumeros(n1, n2);
            message = "La resta de " + n1 + " - " + n2 + " es " + resultado;
            break;
        case 3:
            resultado = multiplicarDosNumeros(n1, n2);
            message = "El producto de " + n1 + " x " + n2 + " es " + resultado;
            break;
        case 4:
            while (n2 === 0) {
                alert("El divisor no puede ser cero");
                n2 = parseFloat(prompt("Introduzca el segundo número"));
            }

            resultado = dividirDosNumeros(n1, n2);
            message = "La división de " + n1 + " / " + n2 + " es " + resultado;
            break;
        default:
            message = "Gracias por jugar con nosotros! Adiós";
    }

    alert(message);
}

// mostrarMenuCalculadora();
