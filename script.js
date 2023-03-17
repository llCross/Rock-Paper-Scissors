//Write a function that keeps tab of scores
let userScore = parseInt(0);
let compScore = parseInt(0);

//write a prompt for the user to input rock paper or scissors
const playerSelection = prompt('Choose your move!').toLowerCase();

//write a function that generate a random response in the form of rock paper scissors
const computerSelection = getComputerChoice();

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
//Write a function that determines the winner and the loser of the game
function determineOutcome(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        return 'It\'s a tie!';
    }

    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++;
        return 'You Lose!';
    }

    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        compScore++;
        return 'You Lose!';
    }

    else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        compScore++;
        return 'You Lose!';
    }
    
    else {
        userScore++;
        return 'You Win!';
    }
}
//write a function that plays a single round of the game
function playGame () {
    console.log('You chose:' + playerSelection)
    console.log('The enemy chose:' + computerSelection)
    console.log(determineOutcome(playerSelection, computerSelection))
    console.log('User Score: ' + userScore)
    console.log('Comp Score: ' + compScore)
}
playGame()


//Write a function that plays a 5 round game