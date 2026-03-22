function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "piedra";
    } else if (num == 1) {
        return "papel";
    } else {
        return "tijera"
    }
}

function getHumanChoice () {
    let valorUsuario = prompt("Ingresa: piedra, papel o tijera");
    if (valorUsuario !== null && valorUsuario.trim() !== "") {
        valorUsuario = valorUsuario.toLowerCase();
    } else {
        return;
    }
    if (valorUsuario == "piedra" || valorUsuario == "papel" || valorUsuario == "tijera") {
        return valorUsuario;
    } else {
        return alert("Ingresa un valor válido");
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice !== undefined && humanChoice !== null) {
        if (humanChoice == computerChoice) {
            console.log(`Empate. Ambos eligieron ${computerChoice}`);
        } else if (
            (humanChoice == "piedra" && computerChoice == "papel") ||
            (humanChoice == "papel" && computerChoice == "tijera") ||
            (humanChoice == "tijera" && computerChoice == "piedra")
        ) {
            computerScore++;
            console.log(`¡Perdiste!. ${computerChoice} vence a ${humanChoice}. Marcador: Jugador ${humanScore} - Máquina ${computerScore}`);
        } else {
            humanScore++;
            console.log(`¡Ganaste!. ${humanChoice} vence a ${computerChoice}. Marcador: Jugador ${humanScore} - Máquina ${computerScore}`);
        }
    } else {
        return;
    }
}

playRound(humanSelection, computerSelection);