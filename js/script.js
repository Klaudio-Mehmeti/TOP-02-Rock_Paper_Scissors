"use strict";

/*-----Random Output Function------*/

var myArray = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}


/*-----Game Play Round Function------*/



function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Is a draw. Try again!"
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "Rock beat Scissors. You Won :)!"
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "Rock don't beat Paper. You lost :("
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "Paper beat Rock. You Won :)!"
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "Paper don't beat Scissors. You lost :("
    }

    else if (playerSelection == "SCISSORS" && computerPlay == "ROCK") {
        return "Scissors don't beat Rock. You lost :("
    }
    else if (playerSelection == "SCISSORS" && computerPlay == "PAPER") {
        return "Scissors beat Paper. You Won :)!"
    }
    else if (playerSelection != myArray) {
        return "Wrong input. Try again!"
    }
};


// const playerSelection = prompt("Insert Rock, Paper or Scissors!").toUpperCase();

// const computerSelection = computerPlay();


// console.log(playRound(playerSelection, computerSelection));

/*-----Game 5 rounds Function------*/




function game() {
    const playerSelection = prompt("Insert Rock, Paper or Scissors!").toUpperCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
};





for (let i = 0; i < 5; i++) {
    game();
};









