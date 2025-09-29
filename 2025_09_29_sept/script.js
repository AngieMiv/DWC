/**
 <input type="text" value="33" id ="entrada">
 <input type="button" value="pulsa" id ="boton">
 <h1 id ="salida"></h1>
 */
 // ACCESO A LA INTERFAZ (los elementos HTML del documento)

 let entrada = document.getElementById("entrada"); // cuadro de texto
 let boton = document.getElementById("boton");		// boton deseencadenante de evento
 let salida = document.getElementById("salida");	// cabecera h1

// Acceso a sus propiedades
 boton.onclick = function() {	
		 salida.innerHTML = entrada.value;
 }
