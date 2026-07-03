export {};

// ==========================================
// 1. TIPOS PRIMITIVOS EN TS
// ==========================================

// Cadenas de texto (string)
// NOTA TS: Todos estos se infieren como tipo 'string'. Puedes usar métodos de strings 
// (como .toUpperCase()) y TS sabrá que existen y autocompletará con IntelliSense en Cursor.
let myName = "Alexis Jacob"
let alias = 'jacobdev'
let email = `fernando.jacob@gmail.com`

// Números (number)
// NOTA TS: Recuerda, no hay distinción entre enteros y decimales. Ambos son tipo 'number'.
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
// NOTA TS OJO AQUÍ: En JS, esto es undefined. En TS, si declaras una variable sin valor 
// y sin tipo explícito, TS le asigna el tipo 'any' (el tipo comodín, que desactiva TS). 
// Para hacerlo correctamente en TS, deberías tiparlo explícitamente si va a cambiar luego.
let undefinedValue: any // (Por inferencia por defecto si está vacía)
console.log(undefinedValue)


// Null
// NOTA TS: El tipo 'null' representa la ausencia intencional de valor. 
// Curiosidad histórica de JS: 'typeof null' devuelve "object". Esto es un bug viejo de JS, 
// pero TypeScript sabe perfectamente distinguir un 'null' real de un objeto.
let nullValue = null
let usuarios: string | null = null; // se declara la variable con el tipo de dato que puede ser string o null

// Symbol
// NOTA TS: Se usan para crear identificadores únicos y anónimos. El tipo se infiere como 'symbol'.
let mySymbol = Symbol("mysymbol")


// BigInt
// NOTA TS: Para representar enteros más grandes que 2^53 - 1. El tipo se infiere como 'bigint'.
// Nota: Si usas la sintaxis de la 'n' al final (myBigInt2), tu archivo de configuración de TS 
// (tsconfig) debe apuntar a una versión de JS moderna (ES2020 o superior), si no, te marcará error.
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// ==========================================
// 2. COMPROBACIÓN DE TIPOS (typeof)
// ==========================================
// El operador 'typeof' sigue funcionando igual en ejecución, pero en TS además existe 
// como "operador de tipo" para copiar tipos de variables a otras.

console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue) // Recordar: imprimirá "object" por comportamiento base de JS
console.log(typeof usuarios) // Recordar: imprimirá "object" por comportamiento base de JS
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)


// ==========================================
// 🚀 NUEVOS DESAFÍOS: PRIMITIVOS Y CASOS EXTREMOS
// ==========================================

// ----------------------------------------------------------------------
// 💡 NIVEL JUNIOR
// ----------------------------------------------------------------------

// Ejercicio 1: El peligro del tipo 'any' implícito
// Declara una variable llamada 'datosDeUsuario' sin inicializar (ej: let datosDeUsuario).
// Pasa el mouse sobre ella en Cursor. Verás que dice que es de tipo 'any'.
// Asignale un número, luego un string, y luego un booleano. 
// ¿Por qué TypeScript no te tira ningún error en rojo a pesar de cambiar drásticamente de tipo?
// el tipo any es un tipo comodín que permite cualquier tipo de dato

let datosDeUsuario: any;
datosDeUsuario = 10;
datosDeUsuario = "10";
datosDeUsuario = true;
console.log(datosDeUsuario);
console.log(typeof datosDeUsuario);


// Ejercicio 2: Tipado explícito de booleanos y strings
// Corrige la variable 'undefinedValue' de la línea 24 para que en lugar de ser 'any', 
// TypeScript sepa explícitamente que ahí va a ir un string en el futuro, o inicialízala correctamente.
// Luego intenta asignarle un booleano para ver cómo el compilador te protege.

// para cambiarlo a string o boolean, se puede hacer de la siguiente manera:
undefinedValue = "10";
undefinedValue = true;
console.log(undefinedValue);
console.log(typeof undefinedValue);

// ----------------------------------------------------------------------
// ⚡ NIVEL MEDIO
// ----------------------------------------------------------------------

// Ejercicio 3: El misterio de 'null' y 'undefined' combinados
// En el desarrollo real, una variable que trae datos de una base de datos puede empezar siendo 'null' (vacía) 
// y luego convertirse en un 'string' cuando los datos cargan.
// Declara una variable llamada 'userEmail' que acepte ÚNICAMENTE los tipos 'string' o 'null'. 
// Inicialízala en 'null' y luego cámbiala a un correo válido.

let userEmail: string | null = null;
console.log(userEmail);
console.log(typeof userEmail);
userEmail = "fernando.jacob@gmail.com";
console.log(userEmail);
console.log(typeof userEmail);


// Ejercicio 4: Métodos autocompletados (IntelliSense)
// Declara una variable de tipo string con tu nombre completo. 
// En la siguiente línea, escribe el nombre de tu variable seguido de un punto `.`.
// Revisa la lista de opciones que te despliega Cursor. Invoca un método que convierta todo tu nombre a mayúsculas.
// Ahora haz lo mismo con una variable numérica (pon el punto `.`) ¿Aparecen los mismos métodos? ¿Por qué?

let myName2: string = "Alexis Jacob";
console.log(myName.toUpperCase); // IntelliSense me muestra los métodos disponibles para el tipo de dato string
console.log(typeof myName2);

let myAge: number = 21;
console.log(myAge.toFixed(2)); // IntelliSense me muestra los métodos disponibles para el tipo de dato number
console.log(typeof myAge);


// ----------------------------------------------------------------------
// 🔥 NIVEL AVANZADO
// ----------------------------------------------------------------------

// Ejercicio 5: Conversiones explícitas de tipo (Type Assertion / Casting)
// A veces recibes un dato que tú sabes con certeza que es un 'string', pero TypeScript cree que es un 'any' o un 'unknown'.
// Imagina que tienes: let valorDesconocido: any = "100";
// Investiga cómo usar la palabra clave 'as' (Type Assertion) para crear una nueva variable llamada 'longitudTexto' 
// asegurándole a TypeScript que trate a 'valorDesconocido' estrictamente como un 'string' para poder medir su largo (.length).

let valorDesconocido: any = "100";
let longitudTexto = (valorDesconocido as string).length; // se usa el operador as para convertir el tipo de dato any a string y luego se usa el método length para obtener la longitud del string
console.log(longitudTexto);
console.log(typeof longitudTexto);


// Ejercicio 6: El operador typeof en el ecosistema de TypeScript
// En TypeScript, 'typeof' no solo funciona dentro de un console.log(), también puede usarse para definir tipos.
// Tienes esta variable base: const personaPlantilla = { nombre: "Alexis", edad: 21 };
// Intenta declarar una nueva variable llamada 'otraPersona' y, en lugar de escribir manualmente su tipo o dejar que lo infiera,
// asígnale explícitamente el tipo usando 'typeof personaPlantilla' (ej: let otraPersona: typeof .... = { ... }).

const personaPlantilla = { nombre: "Alexis", edad: 21 };
let otraPersona: typeof personaPlantilla = { nombre: "Alexis", edad: 21 };
console.log(otraPersona);
console.log(typeof otraPersona);