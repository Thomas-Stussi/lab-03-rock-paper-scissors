/* eslint-disable no-console */


// import functions and grab DOM elements

const button = document.querySelector('#guess-button');
const winLoseDraw = document.querySelector('#winlosedraw');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const draws = document.querySelector('#draws');



// initialize state
let winsData = 0;
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
   
    //paper scenarios

    //scissors scenarios

    //something


    //console wins draws and losses
    console.log(winsData);
    console.log(lossData);
    console.log(drawData);


}
);