//numbers//
//1- resolver o hayar el valor mayor de dos numeros

let valor1 = prompt("Ingresa el primer numero para la comparacion: ");
let valor2 = prompt("Ingresa el segundo numero para la comparacion: ");


if (valor1 > valor2) {
    alert(valor1 + " Es el mayor.")
} else {
    alert(valor2 + " Es el mayor.")
}

//2- sumar, restar, multiplicar y dividir  los numeros

//suma//

let valor3 = prompt("escribe el primer valor para la suma");
let valor4 = prompt("escribe el segundo valor para la suma");
let resultado_resta = (parseInt(valor3) - parseInt(valor4));
alert("el resultado es " + resultado_resta);



function sumar(a, b) {
    console.log(a + b);

}

sumar(valor3, valor4)

//resta (verificar me da NaN)
let valor5 = prompt("escribe el primer valor para la resta");
let valor6 = prompt("escribe el segundo valor para la resta");
let resultado = (parseInt(valor5) + parseInt(valor6));
alert("el resultado es " - resultado);

function restar(a, b) {
    console.log(a - b);

}

restar(valor5, valor6)
alert("el resultado es " - resultado);





//3- calcular la raiz cuadrada de los numeros agregados

let valorCuadrado = prompt("escribe el valor para calcular la raiz");


    Math.sqrt(valorCuadrado);

alert("la raiz cuadrada es " + Math.sqrt(valorCuadrado));

// Ejercicio de strings

// 1. Identificar la longitud de la cadena de texto
const texto = prompt("Ingresa una cadena de texto diferente:");
alert(La longitud de la cadena es ${texto.length});

// 2. Invertir la cadena de texto
const textoInvertido = texto.split("").reverse().join("");
alert(El texto invertido es: ${textoInvertido});

// 3. Validar si una cadena de texto contiene una subcadena
const texto2 = prompt("Ingresa otra cadena de texto diferente:");
const subcadena = prompt("Ingresa una subcadena diferente que quieras buscar:");
const contieneSubcadena = texto2.includes(subcadena);
if (contieneSubcadena) {
alert(La cadena "${texto2}" contiene la subcadena "${subcadena}");
} else {
alert(La cadena "${texto2}" no contiene la subcadena "${subcadena}");
}

// Ejercicio de arrays

// 1. Agregar valores al arreglo al principio
const arreglo = [7, 8, 9];
arreglo.unshift(6);
arreglo.unshift(5);
alert(El arreglo resultante es: ${arreglo});

// 2. Ordenar un arreglo de números de menor a mayor
const arreglo2 = [9, 7, 8, 5, 6];
arreglo2.sort((a, b) => a - b);
alert(El arreglo ordenado es: ${arreglo2});

// 3. Sumar todos los números del arreglo
const arreglo3 = [4, 5, 6];
const suma = arreglo3.reduce((total, num) => total + num, 0);
alert(La suma de los números del arreglo es: ${suma});

// Ejercicio de iteradores

// 1. Mostrar los números del iterador
let numeros = "";
for (let i = 0; i < 6; i++) {
numeros += i + ", ";
}
alert(Los números del iterador son: ${numeros});

// 2. Iterar un arreglo de números y devolver el valor * 2
const arreglo4 = [4, 5, 6];
const arregloDoble = arreglo4.map((num) => num * 3);
alert(El arreglo original es: ${arreglo4}\nEl arreglo con valores triples es: ${arregloDoble});

// 3. Mostrar los índices del arreglo que vas a iterar
const arreglo5 = ["d", "e", "f"];
let indices = "";
for (let i = 0; i < arreglo5.length; i++) {
indices += El índice ${i} contiene el valor ${arreglo5[i]}\n;
}
alert(Los índices del arreglo son:\n${indices});