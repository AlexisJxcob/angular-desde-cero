// map

// declaracion

let myMap = new Map()
console.log(myMap)

// inicializacion

myMap = new Map([
    ["name", "fernando"],
    ["age", 21],
    ["email", "ferjacobka@gmail.com"]
])

console.log(myMap)

// metodos y propiedades

// set

myMap.set("alias", "alexis") // añade un elemento al map si no existe la variable se crea y si existe se sobreescribe
myMap.set("name", "alexis")
console.log(myMap)

// key

console.log(myMap.keys())

// values

console.log(myMap.values())

// get

console.log(myMap.get("name")) // devuelve el valor de la variable
console.log(myMap.get("nameeee"))

// size

console.log(myMap.size) // devuelve la longitud del map

// has

console.log(myMap.has("name")) // devuelve true si la variable existe en el map
console.log(myMap.has("nameeee")) // devuelve false si la variable no existe en el map

// delete

myMap.delete("email") // elimina la variable del map
console.log(myMap)

// clear

myMap.clear() // elimina todos los elementos del map
console.log(myMap)

