// clases

//let person = {
//    name: "Alexis",
//    age: 21,
//    alias: "jacob"
//}

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

// sintaxis de clases

let person = new Person("Alexis", 21, "jacob");
let person2 = new Person("Carlos", 22, "carlos123");
console.log(person);
console.log(person2);

// valores por defecto

class defaultPerson {
    constructor(name = "default name", age = 0, alias = "no alias") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new defaultPerson();
console.log(person3);

person3.name = "Maria";
console.log(person3);

// acceso a propiedades

console.log(person.name);
console.log(person["age"]);
console.log(person.alias);

// funciones dentro de clases

class PersonWithMethods {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}

let person4 = new PersonWithMethods("Alexis", 21, "jacob");
person4.walk();

// propiedades privadas

class PrivatePerson {

    #bank
    
    constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
}
    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Alexis", 21, "jacob", "banco 1000");
console.log(person5);
console.log(person5.bank); // undefined
//console.log(person5.#bank); -> Private field '#bank' must be declared in an enclosing class

// getters y setters

class PersonWithGettersSetters {

    #name;
    #age;
    #alias;
    #bank;
    

    constructor(name, age, alias, bank) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    } 

    get name() {
        return this.#name;
    }

    set bank(bank) {
        this.#bank = bank;
    }

}

let person6 = new PersonWithGettersSetters("Alexis", 21, "jacob", "banco 1000");
console.log(person6);
console.log(person6.name); // Alexis
console.log(person6.age); // undefined
console.log(person6.alias); // undefined
console.log(person6.bank); // undefined

person6.bank = "banco 2000";
console.log(person6.bank); // banco 2000

// herencia

// Clase Padre
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        console.log(`${this.name} makes a sound`); // Quitamos "generic" para que se adapte a lo que buscabas
    }
}

// Clase Hijo: Dog
class Dog extends Animal {
    // Si no vas a cambiar el comportamiento de sound(), no necesitas declararlo aquí.
    // Al heredar de Animal, ya sabe hacer sound().
    
    run() {
        console.log(`${this.name} is running`);
    }
}

// Clase Hijo: Fish
class Fish extends Animal {
    swim() { // Corregido de 'swin' a 'swim'
        console.log(`${this.name} is swimming`);
    }
}

// --- Pruebas ---

let myDog = new Dog("Rex", 5);
myDog.sound(); // Rex makes a sound (Heredado de Animal)
myDog.run();   // Rex is running (Propio de Dog)

let myFish = new Fish("Nemo", 2);
myFish.sound(); // Nemo makes a sound (Heredado de Animal)
myFish.swim();  // Nemo is swimming (Propio de Fish)

// Esto dará error correctamente porque los peces no corren:
// myFish.run(); // TypeError: myFish.run is not a function

// metodos estáticos

class MathOperations {
    static sum(a, b) {
        return a + b;
    }
}