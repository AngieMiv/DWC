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