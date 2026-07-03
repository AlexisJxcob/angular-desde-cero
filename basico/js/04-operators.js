// los operadores sirven para realizar operaciones matematicas

// operadores aritmeticos

let a = 2
let b = 10

console.log(a + b) // operador aritmetico de suma
console.log(a - b) // operador aritmetico de resta
console.log(a * b) // operador aritmetico de multiplicacion
console.log(a / b) // operador aritmetico de division

console.log(a % b) // operador aritmetico de modulo es el resto de la division
console.log(a ** b) // operador aritmetico de exponente

b++
console.log(b) // operador de incremento aumenta en 1

a--
console.log(a) // operador de decremento disminuye en 1

// operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 3 // operador de asignacion de suma
console.log(myVariable)


myVariable -= 3 // operador de asignacion de resta
console.log(myVariable)

myVariable *= 3 // operador de asignacion de multiplicacion
console.log(myVariable)

myVariable /= 3 // operador de asignacion de division
console.log(myVariable)

myVariable %= 3 // operador de asignacion de modulo
console.log(myVariable)

myVariable **= 3 // operador de asignacion de exponente
console.log(myVariable)

// operadores de comparacion

console.log(a)

console.log(a > b)  // operador de comparacion de mayor que
console.log(a < b)  // operador de comparacion de menor que
console.log(10 >= 10) // operador de comparacion de mayor o igual que
console.log(a <= b) // operador de comparacion de menor o igual que
console.log(a == 6) // operador de comparacion de igualdad por valor
console.log(a == "6") // operador de comparacion de igualdad por valor
console.log(a == b) // operador de comparacion de igualdad por identidad
console.log(a === 1) // operador de comparacion de igualdad por valor y tipo
console.log(a === "1") // operador de comparacion de igualdad por valor y tipo mismo valor pero diferente tipo de dato es falso


console.log(a != 1) // operador de comparacion de desigualdad
console.log(a !== "1") // operador de comparacion de desigualdad por valor y tipo

// truthy values
// todos los numeros positivos y negativos menos 0 son verdaderos
// todas las strings menos las vacias son verdaderos
// todos los boolean true son verdaderos
console.log(0 == false)
console.log(0 === false)
console.log(0 == "")
console.log(0 === "")
console.log(0 == null)
console.log(0 === null)
console.log(0 == undefined)
console.log(0 === undefined)
console.log(null == undefined)
console.log(null === undefined)

// falsy values
// 0
// ""
// undefined
// null
// NaN
// todos los boolean false son falsos

// operadores logicos

// && and 
console.log(10 < 5 && 15 < 5) // si ambos son falsos devuelve falso
console.log(10 > 5 && 15 > 5) // si ambos son verdaderos devuelve verdadero
console.log(10 < 5 && 10 > 5) // si alguno es falso devuelve falso
// || or

console.log(10 < 5 || 15 < 5) // si ambos son falsos devuelve falso
console.log(10 > 5 || 15 > 5) // si ambos son verdaderos devuelve verdadero
console.log(10 < 5 || 10 > 5) // si uno es falso devuelve verdadero porque tiene que ser true uno o el otro para ser verdadero

// ! not
console.log(!(10 < 5 && 15 < 5))
console.log(!(10 < 5 || 15 < 5))
console.log(!true)
console.log(!false)

// operadores ternarios

let isRaining = false
isRaining = true

isRaining ? console.log("It's raining") : console.log("It's not raining")