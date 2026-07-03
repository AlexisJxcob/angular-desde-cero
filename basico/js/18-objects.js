// objets
// objetos son una coleccion de propiedades y metodos
// sintaxis

let person = {
    name: "Alexis",
    age: 21,
    alias: "jacob"
}

// acceso a propiedades

// notacion de punto
console.log(person.name)

// notacion de corchetes
console.log(person["age"])
console.log(person["alias"])

// moficacion de propiedades

person.name = "Alexis argentino"
console.log(person.name)

person["age"] = "22"
console.log(person["age"])

console.log(typeof person) //devuelve objeto
console.log(typeof person.name) // devuelve string

// js es un lenguaje de tipado dinamico
console.log(typeof person.age) // devuelve STRING y se declaro inicialmente como NUMERO

// eliminar propiedades
delete person.age
console.log(person)

// nueva propiedad
person.email = "ferjacobka@gmail.com"
console.log(person)

// metodos (funciones)
// funciones que estan dentro de un objeto

let person2 = {
    name: "Alexis",
    age: 21,
    alias: "jacob",
    walk: function() {
        console.log(`${person2.name} is walking`)
    }
}

person2.walk()

// anidacion de objetos

let person3 = {
    name: "Alexis",
    age: 21,
    alias: "jacob",
    walk: function() {
        console.log(`${person3.name} is walking`)
    },
    job: {
        title: "developer",
        exp: 2,
        company: "google"
    }
}

console.log(person3)
console.log(person3.job)
console.log(person3.job.title) // se puede acceder a las propiedades de un objeto anidado

let person4 = {
    name: "Alexis",
    age: 21,
    alias: "jacob",
}

console.log(person)
console.log(person4)

console.log(person === person4) // devuelve false porque son objetos diferentes
console.log(person == person4) // devuelve false porque son objetos diferentes 
// tienen direcciones de memoria diferentes 

console.log(person.alias == person4.alias) 

console.log(typeof person.name)
console.log(typeof person4.name) 

// iteracion

// lo que hacemos aca es recorrer el objeto y acceder a sus propiedades
for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}


// funciones como objetos constructor
function person1(name, age){ // deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new person1("Alexis", 21)
console.log(person5)