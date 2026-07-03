// tipos de datos primitivos

// 1. string son cadenas de texto
    let name = "Jacob, Alexis"

// 2. number son numeros enteros y decimales maximo 64 bits
    let age = 21 // entero
    let height = 1.72 // float/decimal

// 3. boolean son verdadero o falso
    let isMarried = true // true o false
    let isSingle = false // true o false

// 4. null son nulos
    let nullValue = null
    console.log(nullValue)

// 5. undefined indica la ausencia de valor en variables declaradas pero no inicializadas, propiedades inexistentes en objetos, o funciones sin return explícito
let undefinedValue
console.log(undefinedValue)

// 6. symbol son únicos e inmutables
    let symbol1 = Symbol("id")
    let symbol2 = Symbol("id")
    console.log(symbol1 === symbol2)

// 7. bigint son números enteros grandes sin límites
    let bigInt = 123456789012345678901234567890n
    let bigInt2 = BigInt(123456789012345678901234567890)
    console.log(bigInt === bigInt2)

// mostrar los tipos de datos
console.log(typeof name)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isMarried)
console.log(typeof isSingle)
console.log(typeof nullValue)
console.log(typeof undefinedValue)
console.log(typeof symbol1)
console.log(typeof bigInt)