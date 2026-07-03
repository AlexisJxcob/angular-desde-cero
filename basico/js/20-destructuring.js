let myArray = [1, 2, 3, 4, 5];

let person = {
    name: "Alexis",
    age: 21,
    alias: "jacob"
}

let myValue = myArray[0]; 
console.log(myValue); 

let myName = person.name;
console.log(myName);

// desestructuracion de objetos
// esto nos permite extraer propiedades de un objeto y asignarlas a variables de manera concisa

// sintaxis de desestructuracion en arrays

let [myValue1, myValue2, myValue3, myValue4, myValue5, myValue6] = myArray;
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
console.log(myValue5);
console.log(myValue6); // undefined, ya que no hay un sexto elemento en el array

// sintaxis de arrays con valore por defecto

let [myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue12 = 0, myValue13 = 0, myValue14 = 0] = myArray;
console.log(myValue7); 
console.log(myValue8); 
console.log(myValue9); 
console.log(myValue12); 
console.log(myValue13); 
console.log(myValue14); // 0, ya que no hay un sexto elemento en el array y se asigna el valor por defecto

// ignorar elementos en la desestructuracion de arrays 

let [myValue15, , myValue16, , myValue17] = myArray;
console.log(myValue15); // 1
console.log(myValue16); // 3
console.log(myValue17); // 5

// desestructuracion de objetos

let { name, age, alias } = person; // en objetos se usan llaves {} en lugar de corchetes []
console.log(name); // "Alexis"
console.log(age); // 21
console.log(alias); // "jacob"

// sintaxis de objetos con valores por defecto

let { name2, age2, alias2 } = person;
console.log(name2); // undefined, ya que no hay una propiedad name2 en el objeto person
console.log(age2); // undefined, ya que no hay una propiedad age2 en el objeto person
console.log(alias2); // undefined, ya que no hay una propiedad alias2 en el objeto person

// renombrar variables en la desestructuracion de objetos

let { name: name3, age: age3, alias: alias3 } = person; // en objetos se usan llaves {} en lugar de corchetes []
console.log(name3); // "Alexis"
console.log(age3); // 21
console.log(alias3); // "jacob"
// el orden no importa en la desestructuracion de objetos, ya que se asignan por nombre, no por posicion

// objetos anidados

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

let { name: name4, job: { title: jobTitle } } = person3; // esto hace que se extraiga la propiedad title del objeto job y se asigne a la variable jobTitle
console.log(name4); // "Alexis"
console.log(jobTitle); // "developer"

// propagacion de objetos (...)

let myArray2 = [...myArray] // esto hace una copia del array myArray y lo asigna a myArray2
let myArray3 = [...myArray, 6, 7, 8] // esto hace una copia del array myArray y le agrega los elementos 6, 7 y 8 al final 
console.log(myArray2); // [1, 2, 3, 4, 5]
console.log(myArray3); // [1, 2, 3, 4, 5, 6, 7, 8]

// COMBINACION DE ARRAYS

let myArray4 = [...myArray, ...myArray2, ...myArray3] // esto hace una combinacion de los arrays myArray, myArray2 y myArray3
console.log(myArray4); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8]

// sintaxis de propagacion en objetos

let person4 = { ...person } // esto hace una copia del objeto person y lo asigna a person4
console.log(person4); // { name: "Alexis", age: 21, alias: "jacob" }

let person5 = { ...person, name: "Carlos", email: "jacob@gmail.com" } // esto hace una copia del objeto person y le cambia el valor de la propiedad name a "Carlos"
console.log(person5); // { name: "Carlos", age: 21, alias: "jacob", email: "jacob@gmail.com" }