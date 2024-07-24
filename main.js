let humanScore = 0;
let computerScore = 0;

function updateScore(scoreAdd) {
    humanScore += scoreAdd[0];
    computerScore += scoreAdd[1];
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    return humanChoice;
}

function getComputerChoice() {
    let npcChoice = Math.floor(Math.random() * 3);
    switch(npcChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return [0, 0];
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        return [1, 0];
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper!");
        return [1, 0];
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        return [1, 0];
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!");
        return [0, 1];
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        return [0, 1];
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!");
        return [0, 1];
    } else {
        console.log("Invalid input! Please enter rock, paper, or scissors.");
        return [0, 0];
    }
}

while (humanScore < 5 && computerScore < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let score = playRound(humanSelection, computerSelection);
    updateScore(score);
}

if (humanScore === 5) {
    console.log("You win the game!");
} else {
    console.log("You lose the game!");
}
