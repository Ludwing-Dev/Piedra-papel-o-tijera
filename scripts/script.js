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
    let valorUsuario = prompt('Ingresa "piedra, papel o tijera"');
    if (valorUsuario !== null && valorUsuario.trim() !== "") {
        valorUsuario = valorUsuario.toLowerCase();
    } else {
        return;
    }
    if (valorUsuario == "piedra" || valorUsuario == "papel" || valorUsuario == "tijera") {
            return valorUsuario;
        } else {
            return alert("Ingresa un valor válido")
        }
}

getHumanChoice()

