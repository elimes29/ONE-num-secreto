let intento = 1;
let listaNumerosGenerados = [];
let numSecreto = 0;
let numMaximio = 5;
numSecreto = generarNumeroSecreto();
console.log(numSecreto);
let ban = false;

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", `Escribe un número del 1 al ${numMaximio}`);

function intentoDeUsuario() {
  let sel = parseInt(document.getElementById("valorUsuario").value);

  if (sel > numSecreto) {
    asignarTextoElemento("p", "El numero secreto es menor");
    intento++;
    limpiaImput();
  } else if (sel < numSecreto) {
    asignarTextoElemento("p", "El numero secreto es mayor");
    intento++;
    limpiaImput();
  } else {
    asignarTextoElemento(
      "p",
      `FELICITACIONES acertaste en ${intento} ${intento == 1 ? "vez" : "veces"}`
    );
    //activo boton reiniciar juego
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  return;
}

function limpiaImput() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

function reinicia() {
  //genera el numero aleatorio
  numSecreto = generarNumeroSecreto();
  console.log(numSecreto);
  console.log(listaNumerosGenerados);
  if (!ban) {
    //lleva intento a cero
    intento = 1;
    //desabilita boton
    //document.querySelector("#reiniciar").disabled = 'true';
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    //limpia la caja del input
    limpiaImput();
    //cambia el mensaje
    asignarTextoElemento("p", `Escribe un número del 1 al ${numMaximio}`);
  }
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  numSecreto = Math.floor(Math.random() * numMaximio) + 1;
  console.log(
    `Comprobando lonitud, iguales ${listaNumerosGenerados.length == numMaximio}`
  );
  if (listaNumerosGenerados.length == numMaximio) {
    ban = true;
    asignarTextoElemento("p", "Ya se asignaron todos los números. Fin del JUEGO");
    //desabilita boton
    console.log("Ya se asignaron todos los números");
    document.querySelector("#reiniciar").disabled = "true";
    document.querySelector("#intentar").disabled = "true";
  } else {
    if (listaNumerosGenerados.includes(numSecreto)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosGenerados.push(numSecreto);
      return numSecreto;
    }
  }
}
