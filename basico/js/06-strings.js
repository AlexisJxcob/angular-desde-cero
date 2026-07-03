// strings

let myName = "Alexis"
let greeting = "Hello " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// longitud
console.log(greeting.length)

// acceso a caracteres 
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting[4])

// metodos comunes 
console.log(greeting.toUpperCase()) // esto es una funcion que tienen todos los strings y las transforma en mayusculas
console.log(greeting.toLowerCase()) // esto transforma en minusculas

console.log(greeting.indexOf("Alexis")) // esto te dice la posicion de la palabra que buscas
console.log(greeting.indexOf("Hello"))
console.log(greeting.indexOf("Alexa")) // si no encuentra la palabra te devuelve -1

console.log(greeting.includes("Alexis")) // si encuentra la palabra te devuelve true
console.log(greeting.includes("Hello"))
console.log(greeting.includes("Alexa")) // si no encuentra la palabra te devuelve false

console.log(greeting.slice(0, 10)) // esto te devuelve el string desde la posicion 0 hasta n

console.log(greeting.replace("Alexis", "Ingeniero Alexis")) // esto te devuelve el string con la palabra que buscas cambiada

// template literals

let message = `La comilla 
invertida
permite hacer 
un texto de
varias lineas` // alt gr + }

console.log(message)

let age = 21
console.log(`Mi nombre es ${myName} y tengo ${age} años`)  // esto es una interpolacion de variables se hace con `comillas invertidas y se ponen las variables entre llaves ${}`