// CONDICIONALES
// IF, ELSE IF, ELSE

// if

let age = 20

if (age > 18) {
    console.log("Eres mayor de edad")
}

// else

if (age > 18) {
    console.log("Eres MAYOR de edad")
} else {
    console.log("Eres MENOR de edad")
}

// else if

if (age == 32) {
    console.log("tu edad es 32")
} else if  (age > 18) {
    console.log("Eres MAYOR de edad")
} else  {
    console.log("Eres MENOR de edad")
}

// Operador ternario

const message = age == 32 ? "tu edad es 32" : "Eres MENOR de edad"
console.log (message)

// SWITCH
// Es recomendable para anidar "else if" y cuando se verifica muchas condiciones contra una única variable

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Martes"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default: //caso por defecto si los "cases" no se cumplen
        dayName = "No hay día asignado"
}

console.log(dayName)