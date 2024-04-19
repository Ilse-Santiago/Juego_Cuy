let jugador = "";
let enemigo = "";
let triunfos = 0;
let perdidas = 0;

function iniciarJuego(){
    let imagenJugador = document.getElementById("imagen-jugador");
    let inputPiedra = document.getElementById("piedra");
    let inputPapel = document.getElementById("papel");
    let inputTijeras = document.getElementById("tijeras");
    let mensaje = document.getElementById("mensaje");

    if(inputPiedra.checked){
        jugador = "Piedra-Cuy";
        imagenJugador.innerHTML='<img src="./img/piedra.png" alt="piedra">';
    }else if(inputPapel.checked){
        jugador = "Cuyi-Papel";
        imagenJugador.innerHTML='<img src="./img/papel.png" alt="papel">';
    }else if(inputTijeras.checked){
        jugador = "Corta-Cuy";
        imagenJugador.innerHTML='<img src="./img/scissors.png" alt="tijeras">';
    }else{
        alert("❌ No has seleccionado mascota aún 😢");
    }
    if(jugador != ""){
    mensaje = mensaje.innerHTML;
    ocultarsecciones();
    opcionEnemigo();
    }
}
function ocultarsecciones(){
    let seccionEleccionJugador = document.querySelector(".eleccion-Jugador");
    seccionEleccionJugador.style.display = "none";
    let seccionCombate = document.querySelector(".combate");
    seccionCombate.removeAttribute("hidden");

}
function opcionEnemigo(){
    let opcionEnemigo = aleatorio(1,3);
    let mensajeEnemigo = document.getElementById("mensaje");
    let imagenEnemigo = document.getElementById("imagen-enemigo");

    if(opcionEnemigo == 1){
        enemigo = "Piedra-Cuy";
        mensajeEnemigo.innerHTML = "Has seleccionado a: "+jugador+" y la máquina ha seleccionado a: "+enemigo;
        imagenEnemigo.innerHTML='<img src="./img/piedra.png" alt="piedra">';
    }else if (opcionEnemigo == 2){
        enemigo = "Cuyi-Papel";
        mensajeEnemigo.innerHTML = "Has seleccionado a: "+jugador+" y la máquina ha seleccionado a: "+enemigo;
        imagenEnemigo.innerHTML='<img src="./img/papel.png" alt="papel">';
    }else {
        enemigo = "Corta-Cuy";
        mensajeEnemigo.innerHTML = "Has seleccionado a: "+jugador+" y la máquina ha seleccionado a: "+enemigo;
        imagenEnemigo.innerHTML='<img src="./img/scissors.png" alt="tijeras">';
    }
    mensajeEnemigo = mensajeEnemigo.innerHTML;
    resultado();
}
function resultado(){
    let mensaje = document.getElementById("resultado");
    let reiniciar = document.getElementById("boton-reiniciar");
    let continuar = document.getElementById("boton-continuar");
    let spanVictorias = document.getElementById("victorias");
    let spanPerdidas = document.getElementById("perdidas");

    if(jugador == enemigo){
        mensaje.innerHTML="🍀EMPATE"
    }else if (jugador == "Piedra-Cuy" && enemigo == "Corta-Cuy"){
        mensaje.innerHTML="👑VICTORIA!!!👑";
        triunfos = triunfos+1;
    }else if (jugador == "Cuyi-Papel" && enemigo == "Piedra-Cuy"){  
        mensaje.innerHTML="👑VICTORIA!!!👑"
        triunfos = triunfos+1;
    }else if (jugador == "Corta-Cuy" && enemigo == "Cuyi-Papel"){
        mensaje.innerHTML="👑VICTORIA!!!👑"
        triunfos = triunfos+1;
    }else{
        mensaje.innerHTML="☠️HAS PERDIDO!☠️";
        perdidas = perdidas+1;
    }
   
    mensaje = mensaje.innerHTML;
    spanVictorias.innerHTML = triunfos;
    spanPerdidas.innerHTML = perdidas;
    if(triunfos == 3 || perdidas == 3){
        reiniciar.removeAttribute("hidden");
    }else{
        continuar.removeAttribute("hidden");
    }
}
function continuarJuego(){
    let seccionEleccionJugador = document.querySelector(".eleccion-Jugador");
    seccionEleccionJugador.style.display = "";
    let seccionCombate = document.querySelector(".combate");
    seccionCombate.setAttribute("hidden",true);
}
function reiniciarJuego(){
    location.reload();
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}