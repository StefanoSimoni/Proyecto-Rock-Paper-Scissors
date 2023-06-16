let getComputerChoice = () => {
    let random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    let choice
    if(random === 1) {
        choice = "piedra"
    } else if(random === 2) {
        choice = "papel"
    } else {
        choice = "tijeras"
    }
    return choice
}

let playRound = (playerSelection, computerSelection) => {
    let result
    if(playerSelection === computerSelection) {
        result = "Empate!"
    } else if((playerSelection == "piedra") && (computerSelection == "tijeras")) {
        result = "Ganaste! Piedra vence a tijeras"
    } else if((playerSelection == "papel") && (computerSelection == "piedra")) {
        result = "Ganaste! Papel vence a piedra"
    } else if((playerSelection == "tijeras") && (computerSelection == "papel")) {
        result = "Ganaste! Tijeras vence a papel"
    } else {
        result = "Perdiste! " + (computerSelection[0].toUpperCase() + computerSelection.substring(1)) + " vence a " + playerSelection
    }
    return result
}

let game = () => {
    let asd = [5]
    let countPlayer = 0
    let countComputer = 0
    let text
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("¿Piedra, papel o tijeras?", "Ingrese piedra, papel o tijeras").toLowerCase()
        const computerSelection = getComputerChoice()
        asd[i] = playRound(playerSelection, computerSelection) + "\n"
        if(asd[i].includes("Ganaste")) {
            countPlayer += 1
        } else if(asd[i].includes("Perdiste")) {
            countComputer += 1
        }
    }
    if(countPlayer > countComputer) {
        text = "Ganaste " + countPlayer + " a " + countComputer
    } else if(countComputer > countPlayer) {
        text = "Perdiste " + countComputer + " a " + countPlayer
    } else {
        text = "Empataste " + countPlayer + " a " + countComputer
    }
    return asd.join("") + "\n" + text
}

console.log(game())