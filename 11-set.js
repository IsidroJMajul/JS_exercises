// SET

// Declaración

let mySet = new Set()
let mySet2 = {} // NO ES UN SET

// Inicialización

mySet = new Set([1, 2, 3, 4, 5, 6, 7])

console.log(mySet)

// Métodos comunes

// ADD y DELETE
// Ojo, no funciona con ÍNDICES como los arrays. Internamente, se les asigna un ID

mySet.add("isi@gmail.com")
mySet.delete(3) 
console.log(mySet)

// HAS

console.log(mySet.has(6))

// SIZE

console.log(mySet.size)

// Convertir un SET a ARRAY

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir ARRAY a SET

mySet = new Set(myArray)
console.log(mySet)

// PRINCIPAL DIFERENCIA set - array. El SET no admite duplicados

mySet.add("isi@gmail.com")
mySet.add("isi@gmail.com")
console.log(mySet)