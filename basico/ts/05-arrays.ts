// Array

// Declaración

let myArray: any[] = []
let myArray2: boolean[] | string[] | number[] | any[] = new Array() 

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3) // esto tiene empty porque lo que hace es crear un array vacio con el tamaño indicado

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Alexis", "Jacob", "fernando", 21, true] // datos al azar
myArray2 = new Array("Jacob", "fernando", "Alexis")

console.log(myArray)
console.log(myArray2)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "alexis"
myArray2[0] = "jacob"
myArray2[1] = "fernando"
myArray2[4] = "fernando"

console.log(myArray2)

myArray = []
myArray[2] = "alexis"
// myArray[0] = "jacob"
myArray[1] = "fernando"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("alexis")
myArray.push("jacob")
myArray.push("fernando")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("alexis", "fernando")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["alexis", "jacob", "fernando", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["alexis", "jacob", "fernando", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)