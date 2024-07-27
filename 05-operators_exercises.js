/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

let nro1 = 5
let nro2 = 9

function suma(){
    return nro1 + nro2
};

let resta = nro1 - nro2
let multiplicacion = nro1 * nro2
let division = nro1 / nro2
let porcentaje = nro1 % nro2
let exponencial = nro1 ** nro2

console.log (nro1)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myNewVariable = resta
myNewVariable += 3

console.log(myNewVariable)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

let myVariable = -1
console.log(myVariable == myNewVariable)
console.log(myVariable > myNewVariable)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

const iAmDeveloper = true

iAmDeveloper ? console.log("tienes que seguir practicando") : console.log("dedícate a otra cosa")

// 10. Combina operadores aritméticos, de comparáción y lógicas