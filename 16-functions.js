// FUNCIONES

// SIMPLES

function myFunction () {
    console.log("Hola, mi función!")
}

for (let i = 0; i < 5; i++){
    myFunction()
}

// CON PARÁMETROS

function myFunctionParams(name) {
    console.log(`Hola, ${name}`)
}

myFunctionParams("isidro")
myFunctionParams(1234)

// ANÓNIMAS
// sin nombre definido y capaces de ser asignadas a CONST

const myFunc2 = function(name){
    console.log(`Hola, ${name}`)
}

myFunc2("Isidro J Majul")

// ARROW

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc3("función flecha")

myFunc4("más flecha que nunca")

// PARÁMETROS

function sum(a,b) {
    console.log(a+b)
}

sum(5,6)

// VALORES POR DEFECTO

function defaultSum(a=0, b=0){
    console.log(a+b)
}

// RETORNO DE VALORES

function mult(a,b) {
    return a * b
}

console.log(mult(5,10))

// ANIDADAS

function extern() {
    console.log("funcion externa")
    function intern() {
        console.log("funcion interna")
    }
    intern()
}

extern()

// DE ORDEN SUPERIOR

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, ("función de orden superior"))

// ForEach
// función que nos sirve para ejecutar bucles

myArray = [1, 2, 3, 4, 5, 6, 7]

myArray.forEach(function(value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))