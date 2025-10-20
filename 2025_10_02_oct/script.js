/** 
 * 1. Solicita una contraseña ("secreto") con hasta 3 intentos.
 * Si acierta, muestra un mensaje de bienvenida.
 * Si falla 3 veces, desactiva el botón de login.
 * */
function solicitarContrasena() {
		const password = "secreto";
		let intentos = 0;
		const maxIntentos = 3;
		const inputPassword = document.getElementById("inputPassword");
		const mensajeLogin = document.getElementById("mensajeLogin");
		const botonLogin = document.getElementById("botonLogin");

		while (intentos < maxIntentos) {
			const contrasenaIngresada = inputPassword.value;
			if (contrasenaIngresada === password) {
				mensajeLogin.textContent = "Welcomeee!";
				return;
			} else {
				intentos++;
				mensajeLogin.textContent = `Bu-buuu, incorrecto. Intento ${intentos} de ${maxIntentos}.`;
				if (intentos === maxIntentos) {
					botonLogin.disabled = true;
					mensajeLogin.textContent = "Has agotado los 3 intentos & El botón de login ha sido desactivado.";
				}
			}
			return; // Salir del bucle después de un intento
		}
	}

// 2. Oculta la imagen al hacer clic en ella y muestra la imagen al hacer clic en el botón.
function ocultarImagen() {
	const img = document.getElementById("photo");
	img.hidden = true;
}
document.getElementById("showBtn").addEventListener("click", function() {
	const img = document.getElementById("photo");
	img.hidden = false;
});

// 3. Muestra la tabla de multiplicar del 1 al 10

function mostrarTablaMultiplicar() {
	let tablaHTML = "<table border='1'><tr><th>X</th>";
	for (let i = 1; i <= 10; i++) {
		tablaHTML += `<th>${i}</th>`;
	}
	tablaHTML += "</tr>";
	for (let i = 1; i <= 10; i++) {
		tablaHTML += `<tr><th>${i}</th>`;
		for (let j = 1; j <= 10; j++) {
			tablaHTML += `<td>${i * j}</td>`;
		}
		tablaHTML += "</tr>";
	}
	tablaHTML += "</table>";
	document.getElementById("tablaMultiplicar").innerHTML = tablaHTML;
}
window.onload = function() {
	mostrarTablaMultiplicar();
};

/**
 * 4. Califica una nota ingresada por el usuario.
 * La nota debe ser numérica y estar entre 0 y 10.
 * Muestra la calificación correspondiente.
 * */
function calificar() {
	const notaInput = document.getElementById("notaInput");
	const calificacionResultado = document.getElementById("calificacionResultado");
	const nota = parseFloat(notaInput.value);
	if (isNaN(nota) || nota < 0 || nota > 10) {
		calificacionResultado.textContent = "Error: Introduce una nota válida entre 0 y 10.";
		return;
	}
	let calificacion;
	if (nota < 5) {
		calificacion = "Insuficiente";
	} else if (nota < 6) {
		calificacion = "Suficiente";
	} else if (nota < 7) {
		calificacion = "Bien";
	} else if (nota < 9) {
		calificacion = "Notable";
	} else {
		calificacion = "Sobresaliente";
	}
	calificacionResultado.textContent = `Calificación: ${calificacion}`;
}
// 5. Coloca 3 imágenes en posiciones aleatorias dentro de la ventana del navegador.
function colocarImagenesAleatorias() {
	const numImagenes = 3;
	const imagenes = [];
	for (let i = 0; i < numImagenes; i++) {
		const img = document.createElement("img");
		img.src = "https://placecats.com/g/100/100";
		img.style.position = "absolute";
		img.style.width = "100px";
		img.style.height = "100px";
		const maxX = window.innerWidth - 100;
		const maxY = window.innerHeight - 100;
		const posX = Math.random() * maxX;
		const posY = Math.random() * maxY;
		img.style.left = `${posX}px`;
		img.style.top = `${posY}px`;
		document.body.appendChild(img);
		imagenes.push(img);
	}
}
function moverImagenes() {
	colocarImagenesAleatorias();
}


