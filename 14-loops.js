// LOOPS - BUCLES
// estructura de control que permite repetir bloque de código

// FOR
// condición se evalúa en cada iteración

// dentro del FOR, creo una variable (i); que se cumpla cierta condición (<5); condición posterior a la ejecución (una vez que vale 0, pasa a valer 1, y así sucesivamente)
for (let i = 0; i < 5; i++){
    console.log("hola")
}

const numbers = [1,2,3,4,5,6,7]

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento nro: ${numbers[i]}`)
}

// WHILE

let i = 0
while (i < 5) {
    console.log(`Hola ${[i]}`)
    i++
}

// DO WHILE
// se ejecuta al menos 1 vez. se ejecuta 1ero el DO y desp evalúa la condición WHILE

i = 6
do {
    console.log(`Hola DO ${[i]}`)
    i++
} while (i < 5)

