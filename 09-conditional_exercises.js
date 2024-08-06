/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let age = 32

if (age == 32) {
    console.log("Isidro")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let username = "isidro"
let password = "IsidroJS"

if (username == "isidro" && password == "IsidroJS") {
    console.log("Ingreso correcto")
} else {
    console.log("Usuario y/o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number > 0) {
    console.log("Positivo")
} else if (number < 0) {
    console.log("Negativo")
} else {
    console.log("Cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let mayorEdad = 20
let faltaAños = 18

if (mayorEdad >= 18) {
    console.log("Puede votar")
} else {
    console.log(`Usted no puede votar. Le faltan ${faltaAños-mayorEdad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const esAdulto = 18

esAdulto >= 18 ? console.log("Eres mayor de edad") : console.log("Todavía eres menor de edad")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 3

if (month == 1) {
    console.log("Enero")
} else if (month == 2){
    console.log("Febrero")
}else if (month == 3){
    console.log("Marzo")
}else if (month == 4){
    console.log("Abril")
}else if (month == 5){
    console.log("Mayo")
}else if (month == 6){
    console.log("Junio")
}else if (month == 7){
    console.log("Julio")
}else if (month == 8){
    console.log("Agosto")
}else if (month == 9){
    console.log("Septiembre")
}else if (month == 10){
    console.log("Octubre")
}else if (month == 11){
    console.log("Noviembre")
}else if (month == 12){
    console.log("Diciembre")
}else{
    console.log("No es un mes válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "hin"
let greeting

switch (language) {
    case "es":
        greeting = "Hola!"
        break
    case "en":
        greeting = "Hello!"
        break
    case "fr":
        greeting = "Salut"
        break
    default:
        greeting = "No está configurado el idioma"
}

console.log(greeting)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7