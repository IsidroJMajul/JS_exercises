/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let arrayAnimals = []

arrayAnimals = ["león", "delfín", "tortuga", "tigre", "elefante"]

// 2. Añade dos más. Uno al principio y otro al final

arrayAnimals.push("yacaré")

arrayAnimals.unshift("serpiente")

console.log(arrayAnimals)

// 3. Elimina el que se encuentra en tercera posición

delete arrayAnimals[3]
console.log(arrayAnimals)

// 4. Crea un set que almacene cinco libros

let mySet = new Set()

mySet = new Set(["Harry Potter", "Odiseo", "Rayuela", "1984", "Ficciones"])

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Cosmos")
mySet.add("Harry Potter")

console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("1984")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMapMonth = new Map()
myMapMonth = new Map([
    ["mes1", "Enero"],
    ["mes2", "Febrero"],
    ["mes3", "Marzo"],
    ["mes4", "Abril"],
    ["mes5", "Mayo"],
    ["mes6", "Junio"],
    ["mes7", "Julio"],
    ["mes8", "Agosto"],
    ["mes9", "Septiembre"],
    ["mes10", "Octubre"],
    ["mes11", "Noviembre"],
    ["mes12", "Diciembre"],
    ["summer", "Diciembre, Enero, Febrero"]
])

console.log(myMapMonth)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMapMonth.get("mes5"))
console.log(myMapMonth.has("mes5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

console.log(myMapMonth.keys())

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arraySet = [1, 2, 3]

console.log(arraySet)

setFromArray = new Set(arraySet)

console.log(setFromArray)