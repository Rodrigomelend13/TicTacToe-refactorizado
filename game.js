// Funcion para comprobar empate
export function comprobarEmpate(celdas) {
    for (let i = 0; i < celdas.length; i++) {
      if (celdas[i].innerHTML === "") {
        return false;
      }
    }
  
    return true;
  }

// Funcion para comprobar si el jugador actual ha ganado
export function checkWin(jugadorActual, celdas) {
    // Comprobar las combinaciones ganadoras
    if (
      celdas[0].innerHTML === jugadorActual &&
      celdas[1].innerHTML === jugadorActual &&
      celdas[2].innerHTML === jugadorActual
    ) {
      return true;
    } else if (
      celdas[3].innerHTML === jugadorActual &&
      celdas[4].innerHTML === jugadorActual &&
      celdas[5].innerHTML === jugadorActual
    ) {
      return true;
    } else if (
      celdas[6].innerHTML === jugadorActual &&
      celdas[7].innerHTML === jugadorActual &&
      celdas[8].innerHTML === jugadorActual
    ) {
      return true;
    } else if (      
      celdas[0].innerHTML === jugadorActual &&
      celdas[3].innerHTML === jugadorActual &&
      celdas[6].innerHTML === jugadorActual
    ) {
      return true;
    } else if (
      celdas[1].innerHTML === jugadorActual&&
      celdas[4].innerHTML === jugadorActual &&
      celdas[7].innerHTML === jugadorActual
    ) {
      return true;
    } else if (
      celdas[2].innerHTML === jugadorActual &&
      celdas[5].innerHTML === jugadorActual &&
      celdas[8].innerHTML === jugadorActual
    ) {
      return true;
    } else if (
      celdas[0].innerHTML === jugadorActual &&
      celdas[4].innerHTML === jugadorActual&&
      celdas[8].innerHTML === jugadorActual
    ) { 
      return true;
    } else if (
      celdas[2].innerHTML === jugadorActual &&
      celdas[4].innerHTML === jugadorActual &&
      celdas[6].innerHTML === jugadorActual
    ) {
      return true;
    }
  
    // Si ninguna combinación ganadora se cumple, retornar false
    return false;
  } 