// OBJETOS
// Colección de propiedades. Similar a maps.

// Sintaxis

let person = {
    name: "Isidro",
    age: 32,
    alias: "Art_Boucaya"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["age"])

// Modificación
// tamb se puede cambiar el tipo de dato
person.name = "Isidro Juan Majul"
person.age = "32"

console.log(person.name)
console.log(person.age)
console.log(typeof person.age)

// Eliminar props

delete person.age
console.log(person)

// Añadir props

person.email = "isidro@gmail.com"
console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Isidro",
    age: 32,
    alias: "Art_Boucaya",
    walk: function () { // agrego función
        console.log("la persona camina")
    }
}

person2.walk()

// Anidar objetos

let person3 = {
    name: "Isidro",
    age: 32,
    alias: "Art_Boucaya",
    walk: function () { // agrego función
        console.log("la persona camina")
    },
    job: { // añado objeto
        name: "Programador",
        exp: 7,
        work: function () {
            // THIS para interpolar una variable definida dentro del mismo objeto
            console.log(`El ${this.name} trabaja`)
        }
    } 
}

person3.job.work()

// Igualdad de objetos

console.log(person)

let person4 = {
    name: 'Isidro Juan Majul',
    alias: 'Art_Boucaya',
    email: 'isidro@gmail.com'
}

console.log(person)
console.log(person4)

console.log(person == person4) //false
// tener en cuenta que los objetos ya NO se guardan por VALOR, sino con una REFERENCIA (similar a un ID)
console.log(person.name == person4.name) //true porque ya el "name" es un valor

// Iteración

// Se accede a las CLAVES
for (let key in person4) {
    // para acceder a los valores, hacerlo a través de []
    console.log(key + ": " + person4[key])
}

// FUNCIONES COMO OBJETOS

function Person (name, age) { // BUENA PRÁCTICA: debería ser una CLASE
    this.name = name
    this.age = age
}

let person5 = new Person ("Isidro", 32)

console.log(person5)
console.log(typeof person5)
