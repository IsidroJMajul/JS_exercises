/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let myPc = "EliteBook"

console.log("Hola, esta es tu pc: " + myPc)

// 2. Muestra la longitud de una cadena de texto

console.log(myPc.length)

// 3. Muestra el primer y último carácter de un string

console.log(myPc[0])
console.log(myPc[8])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(myPc.toLowerCase())
console.log(myPc.toUpperCase())

// 5. Crea una cadena de texto en varias líneas

console.log(`esta es
    mi cadena de texto
    de varias lineas`)

// 6. Interpola el valor de una variable en un string

let myHome = `Mi vieja ${myPc} necesita un cambio`
console.log(myHome)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let myHomeConGuiones = myHome.replaceAll(" ", "-")
console.log(myHomeConGuiones)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myHome.includes("cambio"))

// 9. Comprueba si dos strings son iguales

console.log(myHome == myHomeConGuiones)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(myHome.length)
console.log(myHomeConGuiones.length)

console.log(myHome.length == myHomeConGuiones.length)
