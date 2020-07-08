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