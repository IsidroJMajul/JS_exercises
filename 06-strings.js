// STRINGS

// Concatenación de cadenas
let myName = "Isidro"
let myAge = "32"
let greeting = "Hola, " + myName + " tu edad es: " + myAge

console.log(greeting)

// Longitud
console.log(myAge.length)

// Caracteres
console.log(myName[0])

// Métodos comunes
// toUpperCase() | toLowerCase() | 
// indexOf("...") índice donde encuentra la palabra entre paréntesis
// includes("...") comprueba si existe el string entre paréntesis
// slice(0, 11) recorta el texto entre los índices colocados en los paréntesis
// replace("1", "5") reemplaza la primer palabra de la cadena de texto por la segunda

// Template literals
// Con comillas invertidas, se puede colocar texto en más de un renglón
let message = `Hola, soy
Isidro`

// Interpolación
console.log (`Hola, ${myName} tu edad es ${myAge}`)