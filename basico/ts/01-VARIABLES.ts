export {};

// ==========================================
// 1. REASIGNACIÓN Y DECLARACIÓN EN TS
// ==========================================

// var: Su uso está totalmente desaconsejado en TS porque no respeta el alcance de bloque (block scope)
var helloWorld = "¡Hola variable var TypeScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo variable var TypeScript!"
console.log(helloWorld)


// let: Es la forma estándar en TS para variables que cambiarán de valor.
// NOTA TS: Al asignarle un texto al inicio, TS infiere que 'helloWorld2' es de tipo 'string'.
// Si intentaras hacer: helloWorld2 = 42, TS te daría un error inmediato, cosa que en JS sí se permite.
let helloWorld2 = "¡Hola, variable let TypeScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, variable let TypeScript 2!"
console.log(helloWorld2)


// const: Ideal para valores inmutables.
// NOTA TS: Para el compilador, el tipo de 'helloWorld3' no es simplemente 'string', 
// sino que es exactamente el tipo literal "¡Hola, JavaScript 3!", porque sabe que nunca podrá cambiar.
const helloWorld3 = "¡Hola, variable const TypeScript 3!"
console.log(helloWorld3)

// En JS esto rompe al ejecutar. En TS, el editor te lo subraya en rojo antes de que le des a Play:
// helloWorld3 = "¡Hola de nuevo, TypeScript 2!" 


// ==========================================
// DESAFÍOS Y EJERCICIOS DE PRÁCTICA (De Jr a Avanzado)
// ==========================================

/*
  INSTRUCCIONES:
  Lee cada ejercicio. Si el compilador de TypeScript te marca un error en rojo bajo el código, 
  significa que vas por buen camino entendiendo el tipado estático.
*/

// ----------------------------------------------------------------------
// 💡 NIVEL JUNIOR
// ----------------------------------------------------------------------

// Ejercicio 1: Inferencia básica y mutabilidad
// Crea una variable con 'let' que almacene tu edad (un número). 
// Luego, intenta reasignar esa variable con tu nombre en formato de texto (string).
// Escribe abajo el código e identifica qué error te arroja TypeScript:

let edad: number = 20;
// edad = "20"; // Error: Type 'string' is not assignable to type 'number'.

console.log(edad);

// Ejercicio 2: El poder de 'const' con objetos
// Declara una constante llamada 'config' que guarde un objeto con dos propiedades: { tema: "oscuro", version: 1 }.
// Intenta hacer dos cosas diferentes:
//   A) Modificar la propiedad interna: config.tema = "claro"
//   B) Reasignar el objeto completo: config = { tema: "claro", version: 2 }
// ¿Cuál de las dos acciones permite TypeScript y cuál bloquea por completo? Pruébalo:

const config = { tema: "oscuro", version: 1 };
config.tema = "claro"; // ningun error
// config = { tema: "claro", version: 2 }; // Error: Cannot assign to 'config' because it is a constant.

console.log(config);


// ----------------------------------------------------------------------
// ⚡ NIVEL MEDIO
// ----------------------------------------------------------------------

// Ejercicio 3: Tipado Explícito
// A veces la inferencia no es suficiente (por ejemplo, si declaras una variable vacía para asignarle un valor más tarde).
// Declara una variable llamada 'puntuacion' sin darle un valor inicial, pero asegúrate de que TypeScript 
// SOLO acepte números en el futuro usando tipado explícito (let variable: tipo).

let puntuacion: number = 0; // se declara la variable con el tipo de dato number de manera explícita y se le asigna un valor inicial
puntuacion = 10; // se le asigna un valor inicial de tipo number
// puntuacion = "10"; // Error: Type 'string' is not assignable to type 'number'.

console.log(puntuacion);


// Ejercicio 4: Tipos de Unión (Unions)
// En JavaScript real, una variable a veces puede recibir un ID numérico (104) o un ID en texto ("USR-104").
// Investiga o intenta deducir cómo declarar una variable usando let llamada 'userId' que sea capaz de 
// aceptar de manera segura TANTO un 'string' COMO un 'number', pero que tire error si le pasas un booleano.

let userId: string | number; // se declara la variable con el tipo de dato que puede ser string o number pero no boolean y | es para unir los tipos
userId = "104"; // se le asigna un valor inicial de tipo string
userId = 104; // se le asigna un valor inicial de tipo number
// userId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

console.log(userId);
console.log(typeof userId);


// ----------------------------------------------------------------------
// 🔥 NIVEL AVANZADO
// ----------------------------------------------------------------------

// Ejercicio 5: Tipos Literales Combinados
// Imagina que estás programando un sistema de turnos y el estado de una cita solo puede ser tres opciones estrictas: 
// "pendiente", "confirmado" o "cancelado".
// Declara una variable con 'let' llamada 'estadoTurno' usando tipos de unión literales para restringir que 
// TypeScript lance un error si alguien intenta escribir por error "Pendiente" (con mayúscula) o "terminado".

let estadoTurno: "pendiente" | "confirmado" | "cancelado";
estadoTurno = "pendiente";
estadoTurno = "confirmado";
estadoTurno = "cancelado";
// estadoTurno = "Pendiente"; // Error: Type '"Pendiente"' is not assignable to type '"pendiente" | "confirmado" | "cancelado"'.
// estadoTurno = "terminado"; // Error: Type '"terminado"' is not assignable to type '"pendiente" | "confirmado" | "cancelado"'.
console.log(estadoTurno);
console.log(typeof estadoTurno);


// Ejercicio 6: Tipado de Arreglos (Arrays) e Inmutabilidad con Readonly
// Declara un arreglo de strings que contenga nombres de tecnologías (por ejemplo: ["JS", "TS", "React"]).
// Encuentra la forma en TypeScript de hacer que este array sea de "sólo lectura" (readonly), de modo que 
// si intentas usar un método mutador como `.push("Node")`, el compilador te lo prohíba inmediatamente.

let tecnologias: readonly string[] = ["JS", "TS", "React"];
// tecnologias.push("Node"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(tecnologias);
console.log(typeof tecnologias); 


