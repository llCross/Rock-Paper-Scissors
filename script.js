document.addEventListener('DOMContentLoaded', () => {
//Write a function that keeps tab of scores
let userScore = parseInt(0);
let compScore = parseInt(0);

//write a function that generate a random response in the form of rock paper scissors

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


//Write a function that plays a single round of the game
function playRound(playerSelection, computerSelection) {  

//Determines Outcome
let determineOutcome;
    if(playerSelection === computerSelection){
        determineOutcome = 'It\'s a tie!';
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'rock')){
        compScore++;
        determineOutcome = 'You Lose!';
    }   
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        userScore++;
        determineOutcome = 'You Win!';
    }
    else {determineOutcome = 'Invalid Player Input!'}

//Print Results
    console.log('You Chose: ' + playerSelection +
        '\nEnemy Chose: ' + computerSelection +
        '\n' + determineOutcome +
        '\nUserScore: ' + userScore +
        '\nComp Score: ' + compScore);

const userScoreboard = document.querySelector('.player-score')
const compScoreboard = document.querySelector('.enemy-score')

userScoreboard.textContent = `Your Score: ${userScore}`;
compScoreboard.textContent = `Enemy Score: ${compScore}`;

const computerChoice = document.querySelector('.ai-choice')
computerChoice.textContent = `The Enemy Chose: ${computerSelection}!`;

}

// Write a function that gets player selection and computer selection, and then calls playRound
function getSelectionsAndPlayRound(event) {
    const playerSelection = event.target.value;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// Get references to the buttons and add click listeners
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', getSelectionsAndPlayRound);
paperButton.addEventListener('click', getSelectionsAndPlayRound);
scissorsButton.addEventListener('click', getSelectionsAndPlayRound);
});
