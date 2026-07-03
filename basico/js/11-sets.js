// set

// declaracion

let mySet = new Set()
console.log(mySet)

// inicializacion

mySet = new Set(["fernando", "alexis", "jacob", "deborah", "cardenas"])

console.log(mySet)

// metodos comunes

mySet.add("34") // agrega un elemento al findel del set 
console.log(mySet)

mySet.delete("fernando") // elimina un elemento del set
console.log(mySet)

// has

console.log(mySet.has("alexis")) // comprueba si un elemento existe en el set
console.log(mySet.has("fernando"))

// size

console.log(mySet.size) // muestra la longitud del set

// convertir un set en un array

let myArray = Array.from(mySet) // convierte un set en un array
console.log(myArray)

// convertir un array en un set

mySet = new Set(myArray) // convierte un array en un set
console.log(mySet)


