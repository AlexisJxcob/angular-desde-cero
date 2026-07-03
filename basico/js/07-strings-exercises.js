// 1- concatena 2 cadenas de texto

let nombre = "Alexis"
let apellido = "Jacob"

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}, un gusto`)

// 2- muestra la longitud de un string

console.log(nombre.length)
console.log(apellido.length)

// 3- muestra el primer caracter de un string y el ultimo

console.log(nombre[0])
console.log(nombre[nombre.length - 1])
console.log(apellido[0])
console.log(apellido[apellido.length - 1]) // esto es para sacar el ultimo caracter

// 4- convierte un string en mayusculas y minusculas

console.log(nombre.toUpperCase())
console.log(apellido.toLowerCase())

// 5- haz un string de varias lineas

let stringLineas = `esto es un string
de varias
lineas`

// 6- haz una interpolacion de variables en un string

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}, un gusto`)

// 7- reemplaza todos los espacion en blancos de un string por un guion 

console.log(stringLineas.replaceAll(" ", "-"))

// 8- comprueba si el string tiene una palabra en concreta

console.log(stringLineas.includes("string"))

// 9- comprueba si dos string son iguales

console.log(stringLineas === stringLineas)
console.log(stringLineas === nombre)
console.log(stringLineas === apellido)

// 10- comprueba si dos string tienen la misma longitud

console.log(stringLineas.length === stringLineas.length)
console.log(stringLineas.length === nombre.length)
console.log(stringLineas.length === apellido.length)