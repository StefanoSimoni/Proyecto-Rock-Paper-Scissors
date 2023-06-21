const gameButtons = document.querySelectorAll('button')
const results = document.getElementById("results")

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

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice()
        if(button.textContent.toLowerCase() === "piedra") {
            game(results.textContent = (playRound("piedra", computerSelection)))
        } else if(button.textContent.toLowerCase() === "papel") {
            game(results.textContent = (playRound("papel", computerSelection)))
        } else if(button.textContent.toLowerCase() === "tijeras") {
            game(results.textContent = (playRound("tijeras", computerSelection)))
        }
    })
})

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

let countPlayer = 0
let countComputer = 0

let game = (results) => {
    let text
    if(results.includes("Ganaste")) {
        countPlayer += 1
    } else if(results.includes("Perdiste")) {
        countComputer += 1
    }
    if(countPlayer + countComputer == 5) {
        gameButtons.forEach((button) => {
            button.disabled = true
        })
        const score = document.createElement("div")
        score.setAttribute("id", "score")
        if(countPlayer > countComputer) {
            text = "Ganaste " + countPlayer + " a " + countComputer
        } else if(countComputer > countPlayer) {
            text = "Perdiste " + countComputer + " a " + countPlayer
        } else {
            text = "Empataste " + countPlayer + " a " + countComputer
        }
        score.innerHTML = text
        document.body.appendChild(score)
    }
}