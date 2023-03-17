const getPlayerChoice = playerSelection();
const getComputerChoice = computerSelection(); 

//Write a function that keeps tab of scores
let userScore = parseInt(0);
let compScore = parseInt(0);

//write a prompt for the user to input rock paper or scissors

function playerSelection () {
    move = prompt('Choose your move!').toLowerCase();
    return move;
}
//write a function that generate a random response in the form of rock paper scissors

function computerSelection () {
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
function determineOutcome(getPlayerChoice, getComputerChoice) {   

    if(getPlayerChoice === getComputerChoice){
        return 'It\'s a tie!';
    }

    else if(getPlayerChoice === 'rock' && getComputerChoice === 'paper'){
        compScore++;
        return 'You Lose!';
    }

    else if(getPlayerChoice === 'paper' && getComputerChoice === 'scissor'){
        compScore++;
        return 'You Lose!';
    }

    else if(getPlayerChoice === 'scissor' && getComputerChoice === 'rock'){
        compScore++;
        return 'You Lose!';
    }
    
    else {
        userScore++;
        return 'You Win!';
    }
}
//write a function that plays a single round of the game
function playRound () {
    console.log('You chose:' + playerSelection ())
    console.log('The enemy chose:' + computerSelection())
    console.log(determineOutcome(getPlayerChoice, getComputerChoice))
    console.log('User Score: ' + userScore)
    console.log('Comp Score: ' + compScore)
}
playRound ();
//Write a function that plays a 5 round game while also keeping tabs of score
    for (let i=1;i<5;i++) {
        playRound ()
    }