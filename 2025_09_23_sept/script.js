/**
 * Bucle para calcular 253 (máxima precisión entera para JS).
 * Muestra también 253 + 1.
 * Con un bucle calcula 2128 (número de IPv6 disponibles)
 * Calcula el factorial de 128.
 * b) Haz los mismos cálculos utilizando números BigInt
 */
let base = 2;
let resultado = 1;

for (let i = 0; i <= 53; i++) {
		resultado *= base;
}

document.getElementById("r53").innerHTML = resultado;
document.getElementById("r531").innerHTML = resultado + 1;

/**
 * Cálculo de 2^53 con bucle for con BitInt
 */