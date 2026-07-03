// crea una variable para cada tipo de operacion arimetica

let a = 2
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// crea una variable para cada tipo de asignacion, que haga uso de las variables anteriores

let myVariable = 2
console.log(myVariable)
myVariable += 3
console.log(myVariable)
myVariable -= 3
console.log(myVariable)
myVariable *= 3
console.log(myVariable)
myVariable /= 3
console.log(myVariable)
myVariable %= 3
console.log(myVariable)
myVariable **= 3
console.log(myVariable)

// imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

console.log(10 > 1)
console.log(a < b)
console.log(10 >= 10) 
console.log(a <= b)
console.log(b == b)
console.log(a != b)

// utiliza el comparador or

console.log(10 > 5 || 15 > 5)
console.log(10 < 5 || 10 > 5)

// utiliza el comparador and

console.log(10 > 5 && 15 > 5)
console.log(10 < 5 && 10 > 5)

// utiliza ambos comparadores or y and

console.log(10 > 5 || 15 > 5 && 10 < 5)
console.log(10 > 11 && 15 > 5 || 10 < 5)



// utiliza el comparador not

console.log(!(10 > 5 && 15 > 5))
console.log(!(10 > 5 || 15 > 5))

// utiliza el operador ternario

let isRaining = false
isRaining = true
isRaining ? console.log("It's raining") : console.log("It's not raining")
