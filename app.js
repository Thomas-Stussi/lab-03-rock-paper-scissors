/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { checkResults } from './checkResults.js';
 

// import functions and grab DOM elements

const button = document.querySelector('#guess-button');
const winLoseDraw = document.querySelector('#winlosedraw');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const draws = document.querySelector('#draws');
const reset = document.getElementById('reset-button');
const resetDiv = document.getElementById('resets');


// initialize state
let winData = 0;
let lossData = 0;
let drawData = 0;
let numberOfResets = 0;

// set event listeners to update state and DOM

button.addEventListener ('click', () => {
    //get the value of the currently selected radio
    const checkedRadio = document.querySelector('input:checked');
    const player = checkedRadio.value;
    

    //create a randomizer for the computer
    const getRandomThrow = Math.floor(Math.random() * 3);

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
    const compareThrows = checkResults(player, computer);

    winLoseDraw.textContent = compareThrows;
    
    if (compareThrows.includes('draw')) {
        drawData++;
    } else if (compareThrows.includes('win')) {
        winData++;
    } else if (compareThrows.includes('lose')) {
        lossData++;
    }
    
    //update spans to reflect new score
    wins.textContent = `Wins: ${winData}`;
    losses.textContent = `Losses: ${lossData}`;
    draws.textContent = `Draws: ${drawData}`;

}
);
//add reset button
reset.addEventListener('click', () => {
    numberOfResets++;
    winData = 0;
    lossData = 0;
    drawData = 0;

    wins.textContent = `Wins: ${winData}`;
    losses.textContent = `Losses: ${lossData}`;
    draws.textContent = `Draws: ${drawData}`;
    resetDiv.textContent = `Resets: ${numberOfResets}`;
});
//test for github``