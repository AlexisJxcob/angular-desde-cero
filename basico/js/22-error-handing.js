// error

let myObject
// console.log(myObject.name) // TypeError: Cannot read property 'name' of undefined

// try...catch

try {
    console.log(myObject.name)
    console.log("finzaliza el programa")
} catch {
    console.log("se ha producido un error")
}

// catpurar el error

try {
    console.log(myObject.name)
    console.log("finzaliza el programa")
} catch (error) {
    console.log("se ha producido un error", error.message) 
}

// finally

try {
    console.log(myObject.name)
    console.log("finzaliza el programa")
} catch {
    console.log("se ha producido un error")
}
finally {
    console.log("siempre se ejecuta")
}

// throw

function suminteger(a, b) {
    if (!(Number.isInteger(a)|| Number.isInteger(b))) {
        throw new Error("solo suman numeros enteros")
}
    return a + b
}

try {
    console.log(sum(5, 10))
    console.log(sum(5, "10")) // 510
    console.log(sum("5", 10))
    console.log(sum("5", "10")) // NaN
} catch (error) {
    console.log("se ha producido un error", error.message)
}

//throw new Error("esto es un error")