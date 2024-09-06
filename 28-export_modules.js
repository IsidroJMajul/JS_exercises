/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// Exportación de módulos
// MODULO es una forma de dividir el código en archivos separados y así poder reutilizarlo

// Funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "MoureDev"

// Clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}

// Exportación por defecto
// para importar todo por defecto y sin necesidad de referenciar el nombre de la función o propiedad
// sólo se puede exportar un solo DEFAULT

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }