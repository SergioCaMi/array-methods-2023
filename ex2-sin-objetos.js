const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
console.log("Ejercicio 1");
students.forEach((element, index) => console.log(`Alumno num ${index}: ${element}`));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"

console.log("Ejercicio 2");
console.log(`El ínice de la alumna María es el ${students.findIndex(e=> e=="Maria")}`);


// Utiliza el método some para saber si en este array existe la alumna "Katerina"
console.log("Ejercicio 3");
console.log(`Hay alguna alumna llamada Katerina en clase? ${students.some(e=>e == "Katerina")}`);

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
console.log("Ejercicio 4");
console.log(`El primer nombre con 5 o más carácteres es ${students.find(e=>e.length>=5)}`);


// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres

console.log("Ejercicio 5");
console.log(`Todos los nombres de los alumnos tienen 4 o más carácteres? ${students.every(e=>e.length>=4)}`);


// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

console.log("Ejercicio 6");
const studentsI = students.filter(e=>e.includes("i"))
console.log(`Qué alumnos contienen en su nombre la letra "i"? ${studentsI}.`);


// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

console.log("Ejercicio 7");
const initials = students.map(e=>e[0])
console.log(`Iniciales de los alumno:? ${initials}.`);
