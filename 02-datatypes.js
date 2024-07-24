// DATOS PRIMITIVOS

// STRING
let name = "Isidro"
let mail = "isidromajul@gmail"
let age = "32"

console.log(name, mail, age)

// NUMBERS
let age_number = 32
let height = 1.82 

console.log (age_number, height)

// BOOLEAN
let isDeveloper = true
let isStudent = true

let mayor = 5 < 2

console.log (mayor)

// UNDEFINED
let undefinedValue

console.log (undefinedValue)

// NULL
// Pero es un OBJETO (console.log(typeof ...))
let nullValue = null

console.log (nullValue)

// SYMBOL
// Valores únicos como identificadores de propiedades para los objetos
let mySymbol = Symbol("mysymbol")

// BigINT
// Para representar un número exageradamente grande, que no puede ser representado por NUMBER.
let myBigInt = BigInt(8094738974189738170471307156)
let myBigInt2 = 8094738974189738170471307156n

console.log(myBigInt2)

// Mostrar tipo de datos

console.log (typeof mySymbol)