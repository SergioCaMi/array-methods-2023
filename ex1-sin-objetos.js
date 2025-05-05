/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obtener la información requerida
 *
 *  Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log("Ejercicio 1");
/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach((element, index) => console.log(`El elemento número ${index+1} es el ${element}`));

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
console.log("Ejercicio 2");

const mayorDiez = console.log("El primer número mayor de 10 en el array es el "+numbers.find(n=>n>10));

/**
 * Utliza el método some para saber si existe un número mayor de 20
 */

console.log("Ejercicio 3");
console.log(`Hay en el array algún número mayor que 20? ${numbers.some(e=> e>20)}`);

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
console.log("Ejercicio 4");
console.log(`Todos los números de este array son impares? ${numbers.every(e=> e%2!==0)}`);
/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */

console.log("Ejercicio 5");
const mayorQueTres = numbers.filter(e => e>3 && e<9);
console.log(mayorQueTres);

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */
console.log("Ejercicio 5");
const positivoNegativo = numbers.map(e => {
    if(e<0){
        return -1;
    } else {
        return 1;
    }
});
console.log(positivoNegativo);
