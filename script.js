let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice() {
    return prompt("rock, paper or ,scissors?")
}

function playRound() {
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice().toLowerCase()
    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        playerScore++
        console.log("You win! " + playerChoice + " beats " + computerChoice)
    } else if (computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "rock" || computerChoice === "scissors" && playerChoice === "paper"){
        computerScore++
        console.log("You Lose! " + computerChoice + " beats " + playerChoice)
    }else {
        console.log("Draw! You both picked " + computerChoice)
    }
}

function playGame() {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i<5; i++) {
        playRound()
    }
    if (playerScore > computerScore) {
        console.log("You win! Score: " + playerScore + " : " + computerScore +"!")
    }else if (playerScore < computerScore) {
        console.log("You lose! Score: " + playerScore + " : " + computerScore +"!")
    }else {
        console.log("Draw! Score: " + playerScore + " : " + computerScore +"!")
    }
}