"use strict";


let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

let resetBtn = document.querySelector("#reset");

let comment = document.querySelector("#comment");

let scoreUser = 0;
let scorePc = 0;
let gameOver = false;
let limit = 5;

let scoreUserDisplay = document.querySelector("#scoreUser");

let scorePcDisplay = document.querySelector("#scorePc");


/*-----PC Output Function------*/

var myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}



/*-----ROCK Paper Button------*/

rockBtn.addEventListener("click", function () {

    let pcScore = computerPlay();
    if (!gameOver) {
        pcChoise.textContent = pcScore;
    }

    if (pcScore === "Paper" && !gameOver) {
        scorePc += 1;
        scorePcDisplay.textContent = scorePc;
        comment.textContent = "Paper Beats Rock! You Lost :("
    }

    else if (pcScore === "Scissors" && !gameOver) {
        scoreUser += 1;
        scoreUserDisplay.textContent = scoreUser;
        comment.textContent = "Rock Beats Scissors! You Won :)"
    }

    else {
        comment.textContent = "It's a tie! :0  "
    }

    if (!gameOver) {
        userChoise.textContent = "Rock";
    }


    scoreCheck();

})



/*-----Function Paper Button------*/

paperBtn.addEventListener("click", function () {

    let pcScore = computerPlay();
    if (!gameOver) {
        pcChoise.textContent = pcScore;
    }

    if (pcScore == "Scissors" && !gameOver) {
        scorePc += 1;
        scorePcDisplay.textContent = scorePc;
        comment.textContent = "Scissors Beats Paper! You Lost :("
    }

    else if (pcScore == "Rock" && !gameOver) {
        scoreUser += 1;
        scoreUserDisplay.textContent = scoreUser;
        comment.textContent = "Paper Beats Rock! You Won :)"
    }

    else {
        comment.textContent = "It's a tie! :0  "
    }

    if (!gameOver) {
        userChoise.textContent = "Paper";
    }

    scoreCheck();

});


/*-----SCISSORS Paper Button------*/

scissorsBtn.addEventListener("click", function () {

    let pcScore = computerPlay();
    if (!gameOver) {
        pcChoise.textContent = pcScore;
    }

    if (pcScore == "Rock" && !gameOver) {
        scorePc += 1;
        scorePcDisplay.textContent = scorePc;
        comment.textContent = "Rock Beats Scissors! You Lost :("
    }

    else if (pcScore == "Paper" && !gameOver) {
        scoreUser += 1;
        scoreUserDisplay.textContent = scoreUser;
        comment.textContent = "Scissors Beats Paper! You Won :)"
    }

    else {
        comment.textContent = "It's a tie! :0 "
    };

    if (!gameOver) {
        userChoise.textContent = "Scissors";
    }

    scoreCheck();


});

/*-----Score Check Function------*/

let scoreCheck = function () {
    if (scorePc === limit) {
        comment.textContent = "GAME OVER! YOU LOST :(  :(  :(";
        gameOver = true;
    }
    else if (scoreUser === limit) {
        comment.textContent = "YOU WON THE GAME!!! :)  :)  :)";
        gameOver = true;
    }

    if (scoreUser === 5 || scorePc === 5) {
        document.getElementById("reset").style.display = 'block';
    }

    else {
        document.getElementById("reset").style.display = 'none';
    }

}

/*-----RESET------*/

reset.addEventListener("click", function () {
    window.location.reload();
})


