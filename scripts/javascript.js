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

// console.log(getComputerChoice());

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! (Player: ${playerSelection}, Computer: ${computerSelection})`;
    }

    if (
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)
    ) {
        return `Player wins! (Player: ${playerSelection}, Computer: ${computerSelection})`;
    } else {
        return `Computer wins! (Player: ${playerSelection}, Computer: ${computerSelection})`;
    }

    // if (
    //     (playerSelection === `paper` && computerSelection === `scissors`) ||
    //     (playerSelection === `rock` && computerSelection === `paper`) ||
    //     (playerSelection === `scissors` && computerSelection === `rock`)
    // ) {
    //     return `Computer wins! (Player: ${playerSelection}, Computer: ${computerSelection})`;
    // }
}

/*
Result: PLAYER
paper vs rock = 1
rock vs scissors = 1
scissors vs paper = 1

Result: COMPUTER
paper vs scissors = 2
rock vs paper = 2
scissors vs rock = 2

Result: TIE
paper vs paper = tie
rock vs rock = tie
scissors vs scissors = tie
*/

const playerSelection = prompt(`What's your choice? Rock, Paper, or Scissors?`).toLowerCase(); // Player's choice.
const computerSelection = getComputerChoice(); // Computer's choice.

console.log(playRockPaperScissors(playerSelection, computerSelection));