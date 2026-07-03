// if, else if , else

// if (si) si esto se cumple haz esto

let age = 21

if (age == 21) {
    console.log("tienes 21 años capo")
}

// else (si no) si esto no se cumple haz esto

if (age == 21) {
    console.log("tienes 21 años capo")
} else {
    console.log("no tienes 21 años capo")
}

// else if (si no, si) 

if (age == 21) {
    console.log("tienes 21 años capo")
} else if (age < 18) {
    console.log("eres menor de edad")
}
else {
    console.log("no tienes 21 años capo y no sos menor de edad")
}

// operador ternario

const result = age == 21 ? "tienes 21 años capo" : "no tienes 21 años capo"
console.log(result)

// switch case

let day = 7
let dayName 

// esto es una forma poco eficiente
if (day == 0) {
    dayName = "Lunes"
} else if (day == 1) {
    dayName = "Martes"
} else if (day == 2) {
    dayName = "Miercoles"
} else if (day == 3) {
    dayName = "Jueves"
} else if (day == 4) {
    dayName = "Viernes"
} else if (day == 5) {
    dayName = "Sabado"
} else if (day == 6) {
    dayName = "Domingo"
} else {
    dayName = "Dia no valido"
}


// esto es una forma mas eficiente y se ocupa cuando hay muchas opciones 
switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Dia no valido"
        break
}

console.log(dayName)

// switch vs if
// switch es mas eficiente en casos con muchas opciones, menos flexible
// if es mas eficiente en casos con pocas opciones