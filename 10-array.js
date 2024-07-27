// ARRAY
// Estructura de datos: en una misma variable se guardan un conjunto de datos.

// Declaración

let myArray = []
let myArray2 = new Array()

// Inicialización

myArray = [1, 2, 3, 4, 5, 6, 7]
myArray2 = new Array (1) //sólo reserva el espacio

myArray[1] = "Isidro"

console.log(myArray2)
console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Libertad")
myArray.push("Mouredev")
myArray.push("Cristina")

console.log(myArray)

console.log(myArray.pop())

console.log(myArray)

// SHIFT y UNSHIFT

myArray.shift()
myArray.unshift("Majo")
console.log(myArray)

// LENGTH

myArray.length
console.log(myArray.length)

// CLEAR

// myArray = []
console.log(myArray)

// SLICE

myArray.slice(1)
console.log(myArray.slice(1))

// SPLICE

myArray.splice(1)
console.log(myArray)