console.log("Hola mundo")
function getcomputerchoise() {
    let eleccion = ["piedra","papel","tijeras"];
    let random = Math.floor((Math.random() * eleccion.length));
    return eleccion[random];
}
function gethumanchoise() {
    let eleccion = prompt("ingrese cuál va a ser su elección");
    return eleccion;
}
let humanScore = 0;
let computerScore = 0;
while(humanScore < 5 && computerScore <5) {
    let humano = gethumanchoise();
    let computadora = getcomputerchoise();
    console.log(`Tu elección es ${humano} y la computadora eligió ${computadora}`);

    if((humano === "piedra" && computadora === "tijeras") ||
     (humano === "tijeras" && computadora === "papel") || 
     (humano === "papel" && computadora === "piedra")) {
        humanScore +=1;
        console.log(`Ganaste ${humanScore}`);
    }
    else {
        if((computadora === "piedra" && humano === "tijeras")
             || (computadora === "tijeras" && humano === "papel")
             || (computadora === "papel" && humano === "piedra")) {
            computerScore +=1;
            console.log(`Perdiste ${computerScore}`);
        }
        else {
            console.log("empate");
        }
    }
}
if (humanScore === 5) {
    console.log("¡Ganaste el juego!");
} else {
    console.log("La computadora ganó el juego.");
}
