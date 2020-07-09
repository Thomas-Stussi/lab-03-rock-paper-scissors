/* eslint-disable no-unused-vars */
/* eslint-disable no-console */


// import functions and grab DOM elements

const button = document.querySelector('#guess-button');
const winLoseDraw = document.querySelector('#winlosedraw');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const draws = document.querySelector('#draws');



// initialize state
let winData = 0;
let lossData = 0;
let drawData = 0;

// set event listeners to update state and DOM

button.addEventListener ('click', () => {
    //get the value of the currently selected radio
    const checkedRadio = document.querySelector('input:checked');
    const player = checkedRadio.value;
    //console
    //console.log(player);

    //create a randomizer for the computer
    const getRandomThrow = Math.floor(Math.random() * 3);
    //console.log(getRandomThrow);

    //create function that converts computerPlay into computerThrow
    function computerThrow() {
        if (getRandomThrow === 0) {
            return 'rock';
        }
        if (getRandomThrow === 1) {
            return 'paper';
        }
        if (getRandomThrow === 2) {
            return 'scissors';
        }
    }
    const computer = computerThrow();

    console.log(computer);
    console.log(player);

    //add function with nine different win loss draw scenarios

    //rock scenarios
    if (player === "rock" && computer === "rock") {
        drawData++;
        winLoseDraw.textContent = 'Rock ties Rock, its a draw!';
        //console.log('hello');
    }
    if (player === "rock" && computer === "paper") {
        lossData++;
        winLoseDraw.textContent = 'Paper beats Rock, you lose!';
        //console.log('hello');
    }
    if (player === "rock" && computer === "scissors") {
        winData++;
        winLoseDraw.textContent = 'Rock beats Scissors, you win!';
        //console.log('hello');
    }

    //paper scenarios
    if (player === "paper" && computer === "rock") {
        winData++;
        winLoseDraw.textContent = 'Paper beats Rock, you win!';
        //console.log('hello');
    }
    if (player === "paper" && computer === "paper") {
        drawData++;
        winLoseDraw.textContent = 'Paper ties Paper, its a draw!';
        //console.log('hello');
    }
    if (player === "paper" && computer === "scissors") {
        lossData++;
        winLoseDraw.textContent = 'Scissors beats Paper, you lose!';
        //console.log('hello');
    }

    //scissors scenarios
    if (player === "scissors" && computer === "scissors") {
        drawData++;
        winLoseDraw.textContent = 'Scissors ties Scissors, its a draw!';
        //console.log('hello');
    }
    if (player === "scissors" && computer === "paper") {
        winData++;
        winLoseDraw.textContent = 'Scissors beats Paper, you lose!';
        //console.log('hello');
    }
    if (player === "scissors" && computer === "rock") {
        lossData++;
        winLoseDraw.textContent = 'Rock beats Paper, you lose!';
        //console.log('hello');
    }
    
    //update spans to reflect new score
    wins.textContent = `Wins: ${winData}`;
    losses.textContent = `Losses: ${lossData}`;
    draws.textContent = `Draws: ${drawData}`;



    //console wins draws and losses
    //console.log(winData);
    //console.log(lossData);
    //console.log(drawData);


}
);