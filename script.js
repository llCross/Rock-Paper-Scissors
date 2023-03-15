//write a function called getComputerChoice that will randomly return Rock, Paper, or Scissors
const computerSelection = getComputerChoice();

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}
//write a function that plays a single round of Rock Paper Scissors that uses 2 parameters (playerSelection, computerSelection)
//function 2 need to also declare the winner of each round
//make playerSelection function case insensitive
//IMPORTANT!!!  you want to return the results of this function not console.log them
//write a function called game() then call the playRound function inside of this one to play a 5 round game that keeps score and reports winners and loser at the end.