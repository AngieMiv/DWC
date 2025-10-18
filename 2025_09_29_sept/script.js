/**
 * Práctica: evento onclick con entradas/salidas a través del HTML del documento
*/

/**
 * 1. Lectura de atributo y evento
 * Crea un formulario con un cuadro de texto y un botón.
 * En el cuadro de texto excribiremos nuestro nombre, 
 * y al pulsar el botón nos mostrará un mensaje de bienvenda en un <h1>
*/
function Saludar(){
    let name = document.getElementById
    ("name").value;
    document.getElementById("resultado1")
    .innerHTML = "Hola " + name;
}

/**
 * 2. Casting
 * Crea un formulario con dos campos numéricos y un botón, 
 * al pulsar el botón nos muestre la suma en un <h1>.
 */
function Sumar() {
    let num1 = Number(document.getElementById("number_A").value);
    let num2 = Number(document.getElementById("number_B").value);
    let resultado = num1 + num2;
    document.getElementById("resultado2").innerHTML 
        = "Resultado suma: " + resultado;
}  

/**
 * 3. Dado numérico y alfabético
 * Crea un formulario con dos botones, al pulsar uno nos mostrará 
 * un número aleatoriodel 1 al 6. Al pulsar el otro botón nos 
 * mostrará una letra aleatoria.
 */
function DadoNum(){
    let numero = Math.random() * 6 + 1;
    numero = Math.floor(numero);
    document.getElementById("resultado3a")
    .innerHTML = "El número es: " + numero;
}
function DadoAlf(){
    let letra = Math.random() * 27 + 65;
    letra = Math.floor(letra);
    letra = String.fromCharCode(letra);
    document.getElementById("resultado3b")
    .innerHTML = "La letra es: " + letra;
}

/**
 * 4. Intercambio de datos
 * Crea un formulario con dos cuadros de texto y dos botones.
 * - Al pulsar uno, se escribirá el texto de un cuadro de texto en el otro, borrándose éste.
 * - Y viceversa, al pulsar el otro botón se copiará el texto en el otro sentido.
*/
function Intercambio41(){
    let textoA = document.getElementById
    ("texto4a").value;
    document.getElementById("texto4b")
    .value = textoA;
    ducument.getElementById("texto4a")
    .value = "";
}
function Intercambio42(){
    let textoB = document.getElementById
    ("texto4b").value;
    document.getElementById("texto4a")
    .value = textoB;
    document.getElementById("texto4b")
    .value = "";
}

/**
 * 5. Dados
 * Crea un formulario con tres botones que lancen dados de 6 caras.
 * Cada vez que se pulse uno de los botones se mostrará abajo su resultado, junto con
 * los resultados obtenidos de los otros dos dados (inicialmente valdrán 0).
 * Al pulsar cualquiera de ellos se mostrará la suma de todas las caras.
*/
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;
function LanzarDado(dado){
    let resultado = Math.floor(Math.random() * 6 + 1);
    if(dado === 1){
        dado1 = resultado;
    } else if(dado === 2){
        dado2 = resultado;
    } else if(dado === 3){
        dado3 = resultado;
    }
    let suma = dado1 + dado2 + dado3;
    document.getElementById("resultado5").innerHTML 
    = "Dado 1: " + dado1 + 
    " || Dado 2: " + dado2 + 
    " || Dado 3: " + dado3 + 
    " || Suma: " + suma;
}

/** 6. Color aleatorio
 * Crea un formulario con tres botones que lancen dados de 256 caras (del 0 al 255).
 * Como en el ejercicio anterior, cada vez que se pulse uno de los botones se mostrará abajo su resultado
 * . También, al pulsar cualquiera de ellos se mostrará en un <div> el color resultante de combinar
 * esos tres valores estilo CSS: background-color: rgb(dado1, dado2, dado3) ).
*/
let color1 = 0;
let color2 = 0;
let color3 = 0;
function LanzarColor(color){
    let resultado = Math.floor(Math.random() * 256);
    if(color === 1){
        color1 = resultado;
    } else if(color === 2){
        color2 = resultado;
    } else if(color === 3){
        color3 = resultado;
    }
    document.getElementById("resultado6").innerHTML
    = "Color 1: " + color1 +
    " | Color 2: " + color2 +
    " | Color 3: " + color3;
    document.getElementById("muestraColor").style
    .backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
}   