// 1. Escribe un comentario en una línea

// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/* 
Esto es un
comentario en
varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// STRING
let name = "Isidro"
// NUMBER
let age = 32
// BOOLEAN
let isMale = true
// UNDEFINED
let undefinedValue
// NULL
let nullValue = null
// SYMBOL
let mySymbol = Symbol("symbol")
// BIGINT
let myBigInt = 889174891789188917489178918891748917891889174891789188917489178918891748917891n

// 4. Imprime por consola el valor de todas las variables

console.log (name, age, isMale, undefinedValue, nullValue, mySymbol, myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log (typeof name,typeof age,typeof isMale,typeof undefinedValue,typeof nullValue,typeof mySymbol,typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = "Juan"
age = 40
isMale = false

console.log (name, age, false)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 32
undefinedValue = "Ahora soy STRING"

console.log (name, undefinedValue)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const fullName = ["Isidro Juan Majul"]

console.log (fullName)

// 9. A continuación, modifica los valores de las constantes
// Si bien las CONSTANTES son inmodificables, puede modificarse mediante un ARRAY.

fullName[0] = 40 // Se asigna la posición a cambiar (0) y se coloca su contenido

console.log (fullName)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser