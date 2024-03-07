// Computer's choice
function genRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function getComputerChoice() {
    if (genRandomNumber() <= 33) {
        return `rock`;
    } else if (genRandomNumber() <= 66) {
        return `paper`;
    } else if (genRandomNumber() <= 99) {
        return `scissors`;
    }
}

// Results
function playerWins(playerSelection, computerSelection) {
    playerScore++;
    return `Player wins!\nPlayer: ${playerSelection}, Computer: ${computerSelection}.\nScore: ${playerScore}.`;
}

function computerWins(playerSelection, computerSelection) {
    computerScore++;
    return `Computer wins!\nPlayer: ${playerSelection}, Computer: ${computerSelection}.\nScore: ${playerScore}.`;
}

function noneWins(playerSelection, computerSelection) {
    return `Tie!\nPlayer: ${playerSelection}, Computer: ${computerSelection}.\nScore: ${playerScore}.`;
}

// RockPaperScissors Round calculation
function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { // Tie.
        return noneWins(playerSelection, computerSelection);
    }

    if ( // Player wins.
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)
    ) {
        return playerWins(playerSelection, computerSelection);
    } else { // Computer wins.
        return computerWins(playerSelection, computerSelection);
    }
}

// RockPaperScissors Winner calculation
function getWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return `Tie game! Player: ${playerScore}, Computer: ${computerScore}.`;
    } else if (playerScore > computerScore) {
        return `Player wins! Player: ${playerScore}, Computer: ${computerScore}.`;
    } else {
        return `Computer wins! Player: ${playerScore}, Computer: ${computerScore}.`;
    }
}

// Game start
function playGame() {
    const computerSelection = getComputerChoice(); // Computer's choice.
    const playerSelection = prompt(`What's your choice? Rock, Paper, or Scissors?`, `paper`).toLowerCase(); // Player's choice.
    return playRockPaperScissors(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;

for (let rounds = prompt(`How many rounds do you wish to play?`, 5); rounds > 0; rounds--) {
    console.log(playGame());
}

console.log(getWinner(playerScore, computerScore));