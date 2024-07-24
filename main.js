let humanScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const humanText = document.getElementById("human-text");
const computerText = document.getElementById("computer-text");
const resultText = document.getElementById("result-text");
const resetButton = document.getElementById("reset");

function updateScore(scoreAdd) {
    humanScore += scoreAdd[1];
    computerScore += scoreAdd[2];

    if (humanScore === 5) {
        alert("You win the game!");
    } else if (computerScore === 5) {
        alert("You lose the game!");
    } 
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

function handleChoice (choice) {
    // Hide the buttons and display user choice
    humanSelection = choice;
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    humanText.style.display = "block";
    humanText.textContent = `You chose ${choice}!`;

    // Get computer choice and display it
    computerSelection = getComputerChoice();
    computerText.style.display = "block";
    computerText.textContent = `The computer chose ${computerSelection}!`;

    // Play the round and display the result
    let result = playRound(humanSelection, computerSelection);
    resultText.style.display = "block";
    resultText.textContent = result[0];
    updateScore(result);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return ["It's a tie!", 0, 0];
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return ["You win! Rock beats scissors!", 1, 0];
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return ["You win! Scissors beats paper!", 1, 0];
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return ["You win! Paper beats rock!", 1, 0];
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return ["You lose! Paper beats rock!", 0, 1];
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return ["You lose! Rock beats scissors!", 0, 1];
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return ["You lose! Scissors beats paper!", 0, 1];
    } else {
        return ["Invalid input! Please enter rock, paper, or scissors.", 0, 0];
    }
}

function resetGame() {
    document.getElementById("score-player").textContent = humanScore;
    document.getElementById("score-computer").textContent = computerScore;
    rock.style.display = "inline-block";
    paper.style.display = "inline-block";
    scissors.style.display = "inline-block";
    humanText.style.display = "none";
    computerText.style.display = "none";
    resultText.style.display = "none";
}

resetGame();

rock.addEventListener("click", () => handleChoice("rock"));
paper.addEventListener("click", () => handleChoice("paper"));
scissors.addEventListener("click", () => handleChoice("scissors"));
resetButton.addEventListener("click", () => resetGame());