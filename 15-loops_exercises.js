/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i < 21; i++){
    console.log("for: " + i)
}

let i = 1
while (i < 21) {
    console.log("while: " + i)
    i++
}

i = 1
do {
    console.log("do while: " + i)
    i++
} while (i < 21)

myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let number of myNumbers) {
    console.log("for of: " + number)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0;
for (let i = 1; i <= 100; i++) {
    total= i + i
}
console.log(total)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 0; i <= 50; i++){
    if (i % 2 == 0){
        console.log("for: " + i)
    }
}

i = 0
do {
    if (i%2 == 0){
    console.log("do while: " + i)
    }
    i++
} while (i < 21)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

myNames = ["Isidro", "Majo", "Manuel", "Nicolás"]
for (i of myNames){
    console.log(i)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myNameVocals = "Isidro";
let vocals = ["a", "e", "i", "o", "u"];
let vocalCount = 0;

for (let i of myNameVocals.toLowerCase()) {  // Convertimos a minúsculas para comparación
    if (vocals.includes(i)) {  // Verificamos si la letra actual es una vocal
        vocalCount++;  // Incrementamos el contador de vocales
    }
}

console.log("Número de vocales:", vocalCount);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

numbersMulti = [1, 2, 3, 4, 5]
totalMulti = 1

for (let i of numbersMulti) {
    totalMulti = totalMulti * i
}
console.log(totalMulti)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

i = 1  // Inicializamos i en 1
do {
    console.log("5 x " + i + " = " + (5 * i));  // Imprimimos la multiplicación
    i++;  // Incrementamos i en 1
}
while (i <= 10);  // Continuamos el bucle hasta que i sea mayor que 10


// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10