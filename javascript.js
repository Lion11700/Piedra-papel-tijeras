let humanScore = 0;
let computerScore = 0;

function getcomputerchoise() {
    let eleccion = ["piedra","papel","tijeras"];
    let random = Math.floor((Math.random() * eleccion.length));
    return eleccion[random];
}

function playRound(playerChoice, computerChoice) {
    if((playerChoice === "piedra" && computerChoice === "tijeras") 
        || (playerChoice === "tijeras" && computerChoice === "papel") 
        || (playerChoice === "papel" && computerChoice === "piedra")) {
            humanScore +=1;
            return "Ganaste";
    }
    else {
        if((computerChoice === "piedra" && playerChoice === "tijeras")
             || (computerChoice === "tijeras" && playerChoice === "papel")
             || (computerChoice === "papel" && playerChoice === "piedra")) {
                computerScore +=1;
                return "Perdiste";
        }
        else {
            return "Empate";
        }
    }
}
function ActualizarUi(mensaje) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = mensaje;
}
function manejarClick(eleccion) {
  if (humanScore < 5 && computerScore < 5) {
    const computerChoice = getComputerChoice();
    const result = playRound(eleccion, computerChoice);
    if (humanScore === 5) {
      document.getElementById("resultado").textContent = "¡Ganaste el juego!";
    } else if (computerScore === 5) {
      document.getElementById("resultado").textContent = "La computadora ganó el juego.";
    }
  }
}
