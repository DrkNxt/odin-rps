const results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    return prompt("rock, paper or ,scissors?");
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice === "rock" && computerChoice === "scissors" || 
            playerChoice === "paper" && computerChoice === "rock" || 
            playerChoice === "scissors" && computerChoice === "paper"){
        playerScore++;
        results.innerHTML = `You win! ${playerChoice} beats ${computerChoice}
            </br>Current score: You ${playerScore}-${computerScore} COM`;
    } else if (computerChoice === "rock" && playerChoice === "scissors" || 
                computerChoice === "paper" && playerChoice === "rock" || 
                computerChoice === "scissors" && playerChoice === "paper"){
        computerScore++;
        results.innerHTML = `You lose! ${computerChoice} beats ${playerChoice}
            </br>Current score: You ${playerScore}-${computerScore} COM`;
    }else {
        results.innerHTML = `Draw! You both picked ${computerChoice}
            </br>Current score: You ${playerScore}-${computerScore} COM`;
    }
    if (playerScore >= 5) {
        results.innerHTML += `<br>You win the game!`;
        playerScore = 0;
        computerScore = 0;
    }else if (computerScore >= 5) {
        results.innerHTML += `<br>You lose the game!`;
        playerScore = 0;
        computerScore = 0;
    }
}

document.addEventListener("click", e => {
    switch (e.target.id) {
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
});