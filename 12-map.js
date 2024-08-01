// Map
// colección de elementos donde c/u es único, compuestos por una clave y un valor

// Declaración

let myMap = new Map()

console.log(myMap)

// Incialización

myMap = new Map([
    ["name", "Isidro"],
    ["mail", "isidro@gmail.com"],
    ["age", 32]
])

console.log(myMap)

// Métodos y propiedades
// SET
myMap.set("alias", "art boucaya") //agrega un elemento a la estructura de datos
myMap.set("name", "Isidro Juan Majul") //como ya existe la clave, modifica el valor

console.log(myMap)

// GET
console.log(myMap.get("mail"))

// HAS
// para comprobar si una clave existe o no

console.log(myMap.has("surname"))
console.log(myMap.has("age"))