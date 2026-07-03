export{}

// ==========================================
// 1. ESTRUCTURAS IF, ELSE IF, ELSE
// ==========================================

let age: number = 21

// NOTA TS: Se prefiere el uso de operadores estrictos (===) para evitar que TS 
// te marque advertencias si comparas tipos que él ya sabe que son diferentes.
if (age === 21) {
    console.log("La edad es 21")
}

// else (si no)
if (age === 21) {
    console.log("La edad es 21")
} else {
    console.log("La edad no es 21")
}

// else if (si no, si)
if (age === 21) {
    console.log("La edad es 21")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 21 ni es menor de edad")
}

// ==========================================
// 2. OPERADOR TERNARIO
// ==========================================

// NOTA TS: Aquí TS infiere que 'message' es un tipo string literal o string general.
// Si ambos caminos del ternario devolvieran tipos diferentes (ej: un string y un number),
// TS inferiría que el tipo de la constante es una unión: 'string | number'.
const message: string | number = age === 21 ? "La edad es 21" : "La edad no es 21"
console.log(message)

// ==========================================
// 3. ESTRUCTURA SWITCH
// ==========================================

let day = 3
// NOTA TS: Si dejas 'let dayName' sin inicializar y sin tipo, TS asumirá 'any'.
// Para buenas prácticas en TS, le asignamos explícitamente el tipo 'string'.
let dayName: string 

// switch lo que hace es evaluar el valor de 'day' y ejecutar el bloque que corresponda.    
switch (day) {
    case 0: // case hace que si 'day' es 0, se ejecute el bloque que sigue.
        dayName = "Lunes"
        break // break hace que se salga del switch
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default: // default se ejecuta si ninguno de los 'case' se cumple
        dayName = "Número de día incorrecto"
}

console.log(dayName)


// ==========================================
// 🚀 DESAFÍOS DE PRÁCTICA: NIVEL MEDIO (1 al 5)
// ==========================================

/*
  INSTRUCCIONES:
  Resuelve los siguientes 5 ejercicios de nivel medio en este archivo usando Cursor.
  Presta atención a cómo responde el compilador ante las evaluaciones de tipos.
*/

// Ejercicio 1: Type Narrowing elemental con 'typeof'
// Imagina que tienes una variable que puede recibir un texto o un número:
// let identificador: string | number = "AX-404";
// Escribe una estructura 'if / else'. Si el 'identificador' es de tipo 'string', 
// transforma el texto a mayúsculas dentro del 'if'. Si es un 'number', multiplícalo por 2 dentro del 'else'.
// Observa cómo Cursor sabe exactamente qué métodos sugerirte dentro de cada bloque.

let identificador: string | number = "404";

if (typeof identificador === "string") {
    console.log(identificador.toUpperCase())
} else {
    console.log(identificador * 2)
}



// Ejercicio 2: El switch exhaustivo y tipos literales
// Define un tipo de unión literal para los meses de un trimestre de invierno:
// let mesElegido: "Enero" | "Febrero" | "Marzo" = "Enero";
// Crea un condicional 'switch' para evaluar 'mesElegido'. 
// Intenta añadir un `case "Abril":`. ¿Qué error te da TypeScript antes de ejecutar y por qué?




// Ejercicio 3: Asignación condicional estricta
// Declara una constante llamada 'puedeConducir' (booleano).
// Su valor debe decidirse usando un operador ternario: si una variable 'tieneLicencia' (booleano) 
// Y además la variable 'edadUsuario' (número) es mayor o igual a 18, debe ser true. De lo contrario, false.
// Asegúrate de usar los operadores lógicos correctos en la condición del ternario.
// [Tu código aquí]


// Ejercicio 4: Control de flujo con valores posiblemente nulos
// En las APIs es común recibir datos que pueden ser nulos: `let respuestaServidor: string | null = null;`
// Escribe un condicional que valide si 'respuestaServidor' tiene contenido real (no es null ni vacío "").
// Si pasa la validación, muestra en consola su longitud (`.length`). Si no, muestra un mensaje de error.
// ¿Cómo te protege TypeScript aquí de un potencial fallo en producción?
// [Tu código aquí]


// Ejercicio 5: Switch con evaluaciones lógicas múltiples
// Crea una variable 'notaExamen' que sea un número del 1 al 10.
// Aunque los 'switch' suelen evaluar valores fijos, en JS/TS puedes hacer `switch (true)` 
// para evaluar rangos en los 'case' (ej: `case notaExamen >= 9:`).
// Desarrolla un sistema que asigne a una variable 'calificacionFinal' los textos "Aprobado", "Notable", "Sobresaliente" o "Reprobado" según el rango numérico.
// [Tu código aquí]