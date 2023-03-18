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
            return 'scissor';
    }
}


//Write a function that plays a single round of the game
function playRound() {  

//playerInput
let playerSelection = prompt("Choose you move!").toLowerCase();

//computerInput
let computerSelection = getComputerChoice();

//Determines Outcome
let determineOutcome;
    if(playerSelection === computerSelection){
        determineOutcome = 'It\'s a tie!';
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissor') ||
            (playerSelection === 'scissor' && computerSelection === 'rock')){
        compScore++;
        determineOutcome = 'You Lose!';
    }   
    else if ((playerSelection === 'rock' && computerSelection === 'scissor') || 
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')){
        userScore++;
        determineOutcome = 'You Win!';
    }
    else {determineOutcome = 'Invalid Player Input!'}

//Print Results
    alert('You Chose: ' + playerSelection +
        '\nEnemy Chose: ' + computerSelection +
        '\n' + determineOutcome +
        '\nUserScore: ' + userScore +
        '\nComp Score: ' + compScore);
}

//function that play 5 rounds
function playGame() {
    for (let i=0;i<5;i++){
        playRound();
    }
    alert('Game Over!' +
        '\nFinal Score! \nUserScore: ' + userScore + ' \nEnemy Score: ' + compScore);
}

playGame();
