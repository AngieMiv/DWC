// a) Haz los siguientes ejercicios utilizando bucles diferentes

// 1) Bucle para calcular 2^53 (máxima precisión entera para JS).
let n = 2;
let x = 53;
let r1 = 1;

for(let i=1; i<=x; i++){
    r1 = r1 * n;
}
document.getElementById("r1").innerHTML 
    = "El resultado es: " + r1;

// 2) Muestra también 2^53 + 1.
let r2 = 1;

let i = x;
while (i > 0) {
    r2 = r2 * n;
    i--;
}
r2 = r2 + 1;

document.getElementById("r2").innerHTML 
    = "El resultado es: " + r2 ;

// 3) Con un bucle calcula 2^128 (número de IPv6 disponibles)
/**
 * Las direcciones IPv6 tienen una longitud de 128 bits, 
 * y cada bit puede tener dos estados (0 o 1). 
 * Al tener 128 bits, el número total de combinaciones posibles de 
 * bits (y, por lo tanto, de direcciones) es 2 
 * multiplicado por sí mismo 128 veces (2^128)
 */
let state = 2;
let bits = 128;
let r3 = 1;

do {
    r3 = r3 * state;
    bits--;
} while (bits > 0);
document.getElementById("r3").innerHTML 
    = "El resultado es: " + r3;

// 4) Calcula el factorial de 128.
let b = 128;
let r4 = 1;

for (let i4 = 1; i4 <= b; i4++) {
    r4 = r4 * i4;
}
document.getElementById("r4").innerHTML 
    = "El resultado es: " + r4;

// b) Haz los mismos cálculos utilizando números BigInt utilizando bucles diferentes

// 5) Calcular 2^53
let nb = 2n;
let xb = 53n;
let r5 = 1n;

for (let ib = 1n; ib <= xb; ib++) {
    r5 = r5 * nb;
}
document.getElementById("r5").innerHTML 
    = "El resultado es: " + r5;

// 6) 2^53 + 1
let r6 = 1n;

let ib = xb
while (ib > 0n) {
    r6 = r6 * nb;
    ib--;
}
r6 = r6 + 1n;
document.getElementById("r6").innerHTML 
    = "El resultado es: " + r6 ;

// 7) 2^128 (nº de IPv6 disponibles)
let stateN = 2n;
let bitsN = 128n;
let r7 = 1n;

do {
    r7 = r7 * stateN;
    bitsN--;
} while (bitsN > 0n);
document.getElementById("r7").innerHTML 
    = "El resultado es: " + r7;

// 8) Factorial de 128
let r8 = 1n;

for (let i=1n; i<=b; i++) {
    r8 = r8 * i;
}
document.getElementById("r8").innerHTML 
    = "El resultado es: " + r8;

// 9) Muestra en la página web un número aleatorio en el rango de 0 a 6
let r9 = Math.random() * 7;
document.getElementById("r9").innerHTML 
    = "El resultado es: " + r9; 

// 10) Lo mismo de antes, pero eliminando la parte decimal del número aleatorio.
// Es decir, debes generar un número cualquiera del conjunto: { 0, 1, 2, 3, 4, 5 }
let r10 = Math.floor(Math.random() * 6);
document.getElementById("r10").innerHTML 
    = "El resultado es: " + r10;

let min = 7;
let max = 13;
for (let x = 1; x <= 100; x++) {
    let r11 = min + Math.floor((max - min) * Math.random());
    document.getElementById("r11").innerHTML 
    += + r11 + ", ";
}

// OBJETO DATE

// a) Visualiza las fechas de 31 de febrero y 32 de marzo de este año.
let r12_feb3 = new Date("2025-02-31")
document.getElementById("r12").innerHTML 
    = r12_feb3;

let r13_mar32 = new Date(2025, 2, 32);
document.getElementById("r13").innerHTML
    = r13_mar32;

// b) Las fechas se almacenan en la memoria como un número:
// el número de milisegundos transcurridos desde... ¿qué fecha?
let r14_unixEpoc = new Date(0);
document.getElementById("r14").innerHTML
    = r14_unixEpoc;

// c) Si restas dos fechas, por ejemplo d1 - d2, ¿qué obtienes?
let day1 = new Date("2025-12-23")
let day2 = new Date("1997-10-01")
let r15_subtract = day1 - day2;
document.getElementById("r15").innerHTML
= r15_subtract + " en milisegundos";

let r15_inDays = r15_subtract / (1000 * 60 * 60 * 24); // Lo convierte a días
document.getElementById("r15days").innerHTML 
    =  r15_inDays + " días";

// d) ¿Cuántos días quedan para que acabe el año?
let today = new Date(); // hoy
let endOfYear = new Date(today.getFullYear(), 11, 31) // ultimo dia de ESTE AÑO

let diff = endOfYear - today;

// pasar de milisegundos a días, 
// y con Math.ceil para redondear hacia arriba bc contamos el día de hoy
let r16_daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

document.getElementById("r16").innerHTML
    = "Quedan " + r16_daysLeft + " días para que acabe el año";

// e) ¿Cuántos años tienes?, ¿y meses?, ¿y días?
let birth = new Date(1997, 9, 1); // octubre es 9 bc empiezan en 0
// el today ya lo tenemos de antes

let diff2 = today - birth;

// años
let r17_years = today.getFullYear() - birth.getFullYear();
if ( today.getMonth() < birth.getMonth() 
    || (today.getMonth() === birth.getMonth() 
    && today.getDate() < birth.getDate())) {
        r17_years--;
};

// meses
let r17_months 
    = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
if (today.getDate() < birth.getDate()) {
    r17_months--; // ajustamos si no ha llegado el día
};

// días
let  r17_days = Math.floor((today - birth) / (1000 * 60 * 60 * 24));

document.getElementById("r17_days").innerHTML = r17_days + " días.";
document.getElementById("r17_months").innerHTML = r17_months + " meses.";
document.getElementById("r17_years").innerHTML = r17_years + " años.";

// OBJETO STRING
function mostrarPalabras() {
    // valor del input y eliminamos los espacios al principio y al final
    let phrase = document.getElementById("phraseInput").value.trim();

    // si está vacío
    if (phrase === "") {
        document.getElementById("r18").innerHTML = "Por favor, escribe algo.";
        return;
    }

    let words = phrase.split(" ");
    let firstWord = words[0];
    let lastWord = words[words.length - 1];

    document.getElementById("r18").innerHTML =
    `La primera palabra es: ${firstWord} <br>y la última es: ${lastWord}`;
}