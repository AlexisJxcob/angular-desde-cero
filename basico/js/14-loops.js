// loops o bucles

// for repite un bloque de codigo un numero determinado de veces

for (let i = 0; i <= 5; i++){
    console.log(`hello ${i}`)
}

const number = [1, 2, 3, 4, 5]

for (let i = 0; i < number.length; i++){
    console.log(`Elemento: ${number[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`hola ${i}`)
    i++
}

// do while

i = 0
do {
    console.log(`hola ${i}`)
    i++
}   while (i < 5)


// for of

let myArray = [1, 2, 3, 4]
let mySet = new Set(["fernando", "alexis", "jacob", "deborah", "cardenas"])
let myMap = new Map([
    ["name", "fernando"],
    ["age", 21],
    ["email", "ferjacobka@gmail.com"]
])

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

// buenas practicas

// break & continue

for (let i = 0; i < 10; i++){
    if (i == 5) {
        continue
    }
    else if (i == 6) {
        break
    }
    console.log(`hola ${i}`)
}