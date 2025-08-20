let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let eleccion = ["piedra","papel","tijeras"];
    let random = Math.floor((Math.random() * eleccion.length));
    return eleccion[random];
}

function playRound(playerChoice, computerChoice) {
    if((playerChoice === "piedra" && computerChoice === "tijeras") 
        || (playerChoice === "tijeras" && computerChoice === "papel") 
        || (playerChoice === "papel" && computerChoice === "piedra")) {
            humanScore +=1;
            return `Ganaste ${humanScore} - ${computerScore}`;
    }
    else {
        if((computerChoice === "piedra" && playerChoice === "tijeras")
             || (computerChoice === "tijeras" && playerChoice === "papel")
             || (computerChoice === "papel" && playerChoice === "piedra")) {
                computerScore +=1;
                return `Perdiste ${humanScore} - ${computerScore}`;
        }
        else {
            return `Empate ${humanScore} - ${computerScore}`;
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
    ActualizarUi(result);
    if (humanScore === 5) {
      ActualizarUi("¡Ganaste el juego!");
    } else if (computerScore === 5) {
      ActualizarUi("La computadora ganó el juego.");
    }
  }
}

document.getElementById("piedra").addEventListener("click", () => manejarClick("piedra"));
document.getElementById("papel").addEventListener("click", () => manejarClick("papel"));
document.getElementById("tijeras").addEventListener("click", () => manejarClick("tijeras"));