//Declaración e iniciación de variables 
var num1 = 0;
var num2 = 0;
//Pide al usuario 2 numeros
num1 = prompt("Introduzca un número");
num2 = prompt("Introduzca un número");
//Transforma el tipo de dato a entero
num1 = parseInt(num1);
num2= parseInt(num2);
//Muestra resultado de suma en consola
console.log("La suma de ambos numeros es =" , num1 + num2); 
console.log("La resta de ambos numeros es =" , num1 - num2); 
console.log("La multiplicacion de ambos numeros es =" , num1 * num2); 
console.log("La division de ambos numeros es =" , num1 / num2); 
console.log("El modulo de ambos numeros es =" , num1 % num2); 

//Pide al usuario temperatura, se inicializan dos variables de Kelvin y Farenheit
var temperatura = 0;
temperatura = prompt("Introduzca Temperatura en C°");
var Farenheit = 273.15;
var Kelvin = 32;
//tranforma el tipo de dato
Farenheit = parseFloat (Farenheit);
temperatura = parseFloat (temperatura);
Kelvin = parseFloat (Kelvin);
//muestra los datos en pantalla
console.log("La temperatura en Farenheit es de = ", temperatura + Farenheit);
console.log("La temperatura en Kelvin es de = ", temperatura + Kelvin);
//Se incicia Variable para calcular dias 

var dias = 0; 
var semanas = 7; 
var anios = 365; 
dias = prompt("Introduzca un número de días");
dias = parseInt(dias);
anios = parseInt(anios);
semanas = parseInt(semanas);
var restoDeDias = dias % anios;

anios = (Math.floor(dias/anios))

semanas = (Math.floor(restoDeDias/semanas));

restoDeDias = ((restoDeDias % 7));

console.log(`Es equivalente a ${anios} años, ${semanas} semanas y ${restoDeDias} dias`)

