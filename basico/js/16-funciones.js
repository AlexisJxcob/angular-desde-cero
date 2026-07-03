// funciones

let name = "fernando"

// simple
function myFunc() {
    console.log("Hola funcion!") 
}

myFunc()

for (let i = 0; i < 5; i++){
    myFunc()
}

// con parametros

function myFunctionWithParements (name) {
    console.log(`hola ${name}`)
}

myFunctionWithParements("fernando")
myFunctionWithParements("alexis")
myFunctionWithParements("jacob")
myFunctionWithParements("deborah")
myFunctionWithParements("cardenas")

// funciones anonimas

// primero hay que declararlas
const myFunction = function() {
    console.log("hola")
}

myFunction()

// arrow functions

// primero hay que declararlas
const myFunctionArrow = (name) => {
    console.log(`hola ${name}`)
}

myFunctionArrow("Jacob")

const myFunctionArrow2 = name => {console.log(`hola ${name}`)}

myFunctionArrow2("alexis")

// parametros

function sum(a, b){
    console.log(a + b)
}

sum(5, 7)
sum()
sum(5)
sum(b = 10)

function sum2(a = 0, b = 0){
    console.log(a + b)
}

sum2(5, 10)
sum2()
sum2(5)
sum2(b = 10)

// return

function mult(a, b){
    return a * b
}

let result = mult(5, 10)
console.log(result)

// funciones anidadas

function extern(){
    console.log("funcion externa")
    function intern(){
        console.log("funcion interna")
    }
    intern() // llamarlo desde la funcion externa
}

extern()
// intern() error fuera del scope

// funciones de orden superior

function applyFunct(func, param){
    func(param)
}

applyFunct(myFunctionArrow2, "Orden superior") // funcion dentro de funcion

// forEach

myArray = ["fernando", "alexis", "jacob", "deborah", "cardenas"]

myArray.forEach(function (value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))