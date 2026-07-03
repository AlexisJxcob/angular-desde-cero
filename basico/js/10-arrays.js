// array

// declaracion

let myArray = [] // MAS RECOMENDADO
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// inicializacion

myArray = [1]
myArray2 = new Array(1) // crea espacios vacios con los valores que indicamos

console.log(myArray2)
console.log(myArray)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Alexis", "Jacob", 37, true]
myArray2 = new Array("Alexis", "Jacob", 37, true) // permite poner cualquier tipo de dato

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Alexis"
myArray2[1] = "Jacob"
myArray2[2] = 21 // primero crea los espacios y despues los rellena

console.log(myArray2)

myArray = []
myArray[0] = "Alexis"
myArray[1] = "Jacob"
myArray[2] = 21 // va guardando los ultimos valores

console.log(myArray)

// metodos comunes

myArray = []

// push y pop 

myArray.push("Alexis") // esta en la funcion para añadir elementos al array
myArray.push("Jacob")
myArray.push(21)

console.log(myArray)

// pop

console.log(myArray.pop()) // muestra lo que elimina
// myArray.pop()  =>  elimina el ultimo elemento del array

console.log(myArray)

// shift y unshift

myArray.shift() // elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Alexis", "Argentino") // añade un elemento al principio del array
console.log(myArray)

// length

console.log(myArray.length) // muestra la longitud del array

// clear

//myArray.length = 0 => elimina todos los elementos del array (casi no se ocupa) 
myArray = [] // elimina todos los elementos del array
console.log(myArray)

// slice

myArray = ["fernando", "alexis", "jacob", "deborah", "cardenas"]

let myNewArray = myArray.slice(1, 3) 

console.log(myArray)
console.log(myNewArray) // saca los elementos desde la posicion indicada y la cantidad de elementos indicada no altera el array

// splice

myArray.splice(0, 2) // elimina elementos desde la posicion indicada y la cantidad de elementos indicada separado por coma
console.log(myArray)