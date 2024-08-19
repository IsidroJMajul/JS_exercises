/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// Clases
// sirven para hacer plantillas de objetos. las props se asignan a posteriori

class Person {

    constructor(name, age, alias) { //palabra reservada "constructor"
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Brais", 37, "MoureDev") //para instanciarla, en la variable se agrega con "new {class}"
let person2 = new Person("Brais", 37, "MoureDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// recordar que se asignan los valores POR ORDEN según el orden del constructor
let person3 = new DefaultPerson("Brais", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "MoureDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas
// para evitar que se modifiquen las propiedades
// el caracter reservado #{nombre de la prop}

class PrivatePerson {

    #bank //primero, definir al principio de la clase

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank //luego, declararla
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

/* // No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank */

console.log(person5)

// GETTERS y SETTERS
// GET: método de sólo lectura - SET: método de sólo edición

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() { // sólo lectura
        return this.#name
    }

    set bank(bank) { //sólo edición
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// Herencia
// se hereda props y comportamiento de una clase

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() { //sobrescribe a la función "sound" de la clase padre
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) { //"constructor" exclusivo del local
        super(name) // "super" llama a la clase padre (en este caso, al parametro "name")
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog") //parametro "name" hereda lo mismo que la clase ANIMAL
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos
// no es necesario instanciar la clase para acceder a la clase

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

// let myClass = new MathOperations() -> no hace falta instanciarla para utilizar la función "sum"
console.log(MathOperations.sum(5, 10))