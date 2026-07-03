// ==========================================
// 1. COMENTARIOS Y SINTAXIS COMA BASE
// ==========================================

// Esto es un comentario simple (Igual en JS y TS)

/*
Esto es
un comentario
en varias líneas (Igual en JS y TS)
*/

// En TS, las comillas dobles, simples y backticks funcionan exactamente igual para crear Strings.
console.log("¡Hola, TypeScript!")
console.log('¡Hola, TypeScript!')
console.log(`¡Hola, TypeScript!`)

// NOTA TS: Aunque para la consola se vea igual, TS está infiriendo automáticamente 
// que estos datos son de tipo 'string'.

// ==========================================
// 2. TIPOS DE DATOS: LA GRAN DIFERENCIA EN TS
// ==========================================

// NOTA TS: Aquí hay un cambio conceptual crucial entre JS y TS:
console.log("5") // TS infiere que esto es un 'string' (texto). No puedes usarlo para matemáticas directas.
console.log(5)   // TS infiere que esto es un 'number' (número). 

// ==========================================
// 3. OPERACIONES MATEMÁTICAS
// ==========================================

// NOTA TS: En TS, el operador aritmético exige que ambos lados sean de tipo 'number'.
// Si intentas hacer `"5" + 2`, JavaScript lo concatena (`"52"`), pero el compilador de 
// TypeScript te lanzaría una advertencia/error en el editor antes de ejecutarlo porque estás 
// mezclando un 'string' con un 'number'.

console.log(5 + 2)  // Suma (Resultado: 7)
console.log(5 - 2)  // Resta (Resultado: 3)
console.log(5 * 2)  // Multiplicación (Resultado: 10)
console.log(5 / 2)  // División (Resultado: 2.5) -> A diferencia de otros lenguajes, en TS/JS no existe 'int' o 'float', todo es 'number'.
console.log(5 % 2)  // Módulo / Resto de la división (Resultado: 1)
console.log(5 ** 2) // Potencia (Resultado: 25)