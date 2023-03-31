// Definir los jugadores y su respectivo símbolo
import { comprobarEmpate,checkWin} from "./game.js";
import { $, $all } from "./dom.js";

const player1 = "X";
const player2 = "O";

// Variables para llevar la cuenta de los turnos y el jugador actual
let turnoActual = 1;
let jugadorActual = player1;

// Obtener todas las celdas del tablero
const celdas = $all(".cell"); // celdas | celda

// TODO Agregar un evento de click a cada celda con la funcion 'marcarCelda'
celdas.forEach( celda => celda.addEventListener("click", () => marcarCelda(celda) ))

// funcion para marcar la celda
function marcarCelda(celda) {
  console.log(celda)
  // Comprobar si la celda ya ha sido marcada
  if (celda.innerHTML !== "") {
    alert("Esta celda ya ha sido marcada. Por favor seleccione otra.");
    return;
  }

  // TODO Marcar la celda con el símbolo del jugador actual
  celda.innerHTML = jugadorActual;

  // TODO Comprobar si el jugador actual ha ganado, si es así, mostrar el mensaje de ganador en el elemento con id 'result' y terminar la ejecución de la función (ver ejemplo de los condicionales de arriba y abajo que terminan con return)
   if (checkWin(jugadorActual, celdas)) {
    $('#result').innerHTML = `El ganador es ${jugadorActual}`
    return;
  }

//  Comprobar si hay empate
  if (comprobarEmpate(celdas)) {
     $("#result").innerHTML = "¡Empate!";
    return;
   }

  // Cambiar al siguiente jugador
   turnoActual++;
  jugadorActual = turnoActual % 2 === 0 ? player2 : player1;
 }


// Este evento se ejecuta cuando se hace click en el botón de reiniciar, lo que hay aqui es una funcion flecha, escribe el codigo dentro del bloque como con otra funcion normal
$("#reset").addEventListener("click", () => {
  // TODO Reiniciar las variables de turnos y jugador actual
  turnoActual = 1;
  jugadorActual = player1;

  // TODO Reiniciar el contenido de todas las celdas
celdas.forEach( celda => celda.innerHTML = "")


  // TODO Reiniciar el contenido del elemento de id 'result
  $("#result").innerHTML = "";
});
