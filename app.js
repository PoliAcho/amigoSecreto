// El principal objetivo de este desafío es fortalecer tus 
// habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos=[];
let cantAmigos=0;
let numeroSorteado=0;
let nombreAmigo="";
let amigoSecreto="";
function agregarAmigo() {
  let input = document.getElementById("amigo");        // Capturar el input
  let nombreAmigo = input.value.trim();                // Eliminar espacios extras
  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  if (listaAmigos.includes(nombreAmigo)) {
    alert("Este nombre ya está en la lista.");
    return;
  }
  listaAmigos.push(nombreAmigo);                       // Agrega el nombre a la lista
  document.getElementById("amigo").value = "";
  asignarTextoElemento('h1','Amigo Secreto');          // Por si sorteó con lista vacia
  asignarTextoElemento('h2','Escribe un nombre')       // Por si sorteó con lista vacia
  actualizarListaAmigos();
  input.value="";
  return;
}
function sortearAmigo(){
  cantAmigos=listaAmigos.length;
  if (cantAmigos > 0){
    numeroSorteado=Math.floor(Math.random()*(cantAmigos));
    amigoSecreto=listaAmigos[numeroSorteado];
    asignarTextoElemento('h1',amigoSecreto + ' ...');
    asignarTextoElemento('h2','... es tu Amigo Secreto');
  }else{
    asignarTextoElemento('h1','¡Oh...! :(');
    asignarTextoElemento('h2','... que pena ... ¿sin amigos?  ¡INVÉNTALOS!')
  }
  return;
}
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  if (!elementoHTML) {
    console.warn("El elemento no existe:", elemento);
    return;
  }
  if (elementoHTML.tagName === "INPUT" && elementoHTML.type === "text") {
    elementoHTML.setAttribute("placeholder", texto);
  } else {
    elementoHTML.innerHTML = texto;
  }
  return;
}
function actualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  if (!lista) {
    console.warn("No se encontró el elemento con id 'listaAmigos'");
    return;
  }
  lista.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = listaAmigos[i];
    lista.appendChild(item);
  }
  /*listaAmigos.forEach(amigo => {                   // Sugerencia de ChatGPT
    let item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });*/
}
