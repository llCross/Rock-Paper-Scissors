//write a prompt for the user to input rock paper or scissors

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){console.log(userInput);
} else {console.log('invalid user input')}
}
//write a function that generate a random response in the form of rock paper scissors
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
//write a function that plays a single round of the game
//Write a function that plays a 5 round game
