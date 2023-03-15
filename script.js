//write a prompt for the user to input rock paper or scissors

const playerSelection = (userInput) => {
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){console.log(userInput);
} else {console.log('invalid user input')}
}
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
function determineOutcome(playerSelection, getComputerChoice) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 'It\'s a tie!'
    }

    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose!'
    }

    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        return 'You Lose!'
    }

    else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        return 'You Lose!'
    }
    
    else {
        return 'You Win!'
    }
}

//write a function that plays a single round of the game
//Write a function that plays a 5 round game
