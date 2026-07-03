export {};

// ==========================================
// 1. OPERADORES ARITMÉTICOS Y DE ASIGNACIÓN
// ==========================================

let a = 5  // TS infiere que es 'number'
let b = 11 // TS infiere que es 'number'

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento (Sigue siendo 'number')
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2 
console.log(myVariable)

console.log(myVariable -= 2) 
console.log(myVariable *= 2) 
console.log(myVariable /= 2) 
console.log(myVariable %= 2) 
console.log(myVariable **= 2) 

// ==========================================
// 2. OPERADORES DE COMPARACIÓN (El "Filtro" de TS)
// ==========================================

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que

// NOTA TS CRUCIAL: En JavaScript puro, las siguientes líneas se ejecutan.
// Pero en TypeScript, si intentas hacer `a == "6"` o `a === "6"`, el compilador 
// te va a lanzar un ERROR EN ROJO inmediato porque estás comparando un 'number' con un 'string'.
// Para que TS no proteste en este archivo de práctica, tendrías que forzar los tipos o usar deshabilitadores,
// ya que TS considera que comparar tipos diferentes siempre es un error de lógica del programador.

console.log(a == b) // Igualdad por valor
console.log(a == 6)
// console.log(a == "6")   // ❌ ERROR EN TS: Este tipo de comparación no está permitida.
console.log(a == a)
console.log(a === a) // Igualdad estricta (tipo y valor)
console.log(a === 6)
// console.log(a === "6")  // ❌ ERROR EN TS: Tipos completamente distintos.

console.log(a != 6) // Desigualdad por valor
// console.log(a !== "6") // ❌ ERROR EN TS: Comparación innecesaria para TS porque sabe que nunca serán iguales.

// Curiosidades de la coerción de JS que TS bloquea si las variables están tipadas:
/* console.log(0 == false)
console.log(1 == false)
console.log(2 == false) */
// console.log(0 == "")   // ❌ JS dice true, pero TS te avisa que no tiene sentido comparar número y string
// console.log(0 == " ")  // ❌ Igual que el anterior
// console.log(0 == '')   // ❌ Igual que el anterior
// console.log(0 == "Hola")

console.log(undefined == null)  // JS devuelve true (comparten el mismo comportamiento de "vacío" con ==)
console.log(undefined === null) // JS devuelve false (son tipos primitivos distintos)


// ==========================================
// 3. VALORES TRUTHY Y FALSY (Igual en JS y TS)
// ==========================================
/*
En evaluaciones lógicas (como un 'if' o operadores lógicos), TS hereda las reglas de JS:

Truthy values:
- Todos los números excepto el 0 y -0
- Cadenas de texto no vacías (incluyendo " ")
- Objetos y arrays vacíos {} [] (¡Ojo! En JS los arrays vacíos son truthy)
- El boolean true

Falsy values:
- 0, -0, 0n (BigInt cero)
- null, undefined
- NaN
- Cadenas de texto vacías "", '', ``
- El boolean false
*/


// ==========================================
// 4. OPERADORES LÓGICOS Y TERNARIOS
// ==========================================

// AND (&&)
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false
console.log(5 > 10 && 15 > 20 && 30 > 40) // false

// OR (||)
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true
console.log(5 > 10 || 15 > 20 || 30 > 40) // false

console.log(5 > 10 && 15 > 20 || 30 < 40) // true

// NOT (!)
console.log(!true) // false
console.log(!false) // true
console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 > 10 || 15 > 20)) // false

// Operadores ternarios
// NOTA TS: El operador ternario exige una condición booleana (o evaluable a booleano).
const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo") // ? signigica que si es true, se ejecuta el primer console.log, si es false, se ejecuta el segundo console.log


// ==========================================
// 🚀 NUEVOS DESAFÍOS: OPERADORES Y CONTROL DE TIPOS
// ==========================================

// ----------------------------------------------------------------------
// 💡 NIVEL JUNIOR
// ----------------------------------------------------------------------

// Ejercicio 1: El Operador Ternario y la Asignación de Tipos
// Usa un operador ternario para asignar un valor a una constante llamada 'mensajeEstado'.
// Si una variable booleana 'esAdministrador' es true, el mensaje debe ser "Acceso Total", si no, "Acceso Limitado".
// Verifica de qué tipo infiere TypeScript que es la constante 'mensajeEstado'.

const esAdministrador: boolean = true;
const mensajeEstado: string = esAdministrador ? "Acceso total" : "Acceso limitado";
console.log(mensajeEstado);
console.log(typeof mensajeEstado);

// Ejercicio 2: Evitando la coerción peligrosa
// Intenta escribir un console.log que compare un número y un string usando '===' (por ejemplo, 5 === "5").
// Observa el error exacto que te arroja Cursor. ¿Cómo usarías la función nativa `Number()` de JavaScript 
// para transformar el string y que TypeScript te permita hacer la comparación de forma segura?

// console.log(5 === "5"); // Error: Type 'string' is not assignable to type 'number'.

console.log(5 === Number("5")); // true

// ----------------------------------------------------------------------
// ⚡ NIVEL MEDIO
// ----------------------------------------------------------------------

// Ejercicio 3: Operador Nullish Coalescing (??) - Exclusivo de JS Moderno / TS
// El operador OR (||) a veces da problemas con valores Falsy legítimos (como el número 0 o un string vacío "").
// Investiga cómo funciona el operador de fusión nula (`??`). 
// Crea una variable 'customTimeout' que valga 0. Luego crea otra constante 'finalTimeout' que use `??` 
// para asignarle un valor por defecto de 3000 SI Y SOLO SI 'customTimeout' es null o undefined. 
// Compara qué pasa si usas `||` en lugar de `??`.

let customTimeout: number = 0;
const finalTimeout: number = customTimeout ?? 3000; // con ?? finaltimeout queda en customtimeout pero cuando es || pasa a 3000
console.log(finalTimeout);
console.log(typeof finalTimeout);


// Ejercicio 4: Tipado en operaciones lógicas complejas
// Crea una variable 'resultadoLogico' que combine operadores `&&` y `||`. 
// Asegúrate de que las condiciones evalúen variables de distintos tipos (un string, un number y un boolean).
// ¿Qué tipo de dato final infiere TypeScript para 'resultadoLogico'? ¿Es un booleano o puede ser otra cosa?




// ----------------------------------------------------------------------
// 🔥 NIVEL AVANZADO
// ----------------------------------------------------------------------

// Ejercicio 5: Estrechamiento de Tipos (Type Narrowing) con Operadores de Comparación
// Imagina una función que recibe un parámetro que puede ser `string` o `null`.
// Let inputUsuario: string | null = obtenerDatos(); // Simulamos que puede ser texto o nulo
// Escribe una estructura condicional (if) utilizando operadores de comparación que "demuestre" a TypeScript 
// que dentro del bloque del 'if' la variable 'inputUsuario' es EVALUADA 100% como un `string`, 
// permitiéndote usar métodos como `.length` sin que el compilador se queje de que el valor puede ser null.
// [Tu código aquí]


// Ejercicio 6: El operador de aserción de no nulidad (Non-null Assertion Operator `!`)
// En TypeScript existe un operador que es un signo de exclamación puesto AL FINAL de una variable (ej: variable!).
// Se usa para decirle al compilador: "Oye, sé que crees que esto puede ser null, pero te juro que no lo es".
// Declara una variable que acepte un string o undefined. Intenta aplicar el método `.toUpperCase()` directamente. 
// Verás que TS te da error. Ahora, aplícale el operador `!` justo antes del punto para silenciar al compilador.
// ¿Por qué este operador se considera de alto riesgo para entornos de producción?
// [Tu código aquí]