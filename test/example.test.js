// IMPORT MODULES under test here:
// import { example } from '../example.js'
import { checkResults } from '../checkResults.js';

const computerPlay = Math.floor(Math.random() * 3);
function computerThrow() {
    if (computerPlay === 0) {
        return 'rock';
    }
    if (computerPlay === 1) {
        return 'paper';
    }
    if (computerPlay === 2) {
        return 'scissors';
    }
}



    

const test = QUnit.test;

test('it should take in a number and return rock paper or scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = computerThrow();
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
});

test('rock rock = draw', (expect) => {
    const player = 'rock';
    const computer = 'rock';
    const expected = 'Rock ties Rock, its a draw!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('rock paper = loss', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'Paper beats Rock, you lose!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('rock scissors = win', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'Rock beats Scissors, you win!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('paper rock = win', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'Paper beats Rock, you win!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('paper paper = draw', (expect) => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'Paper ties Paper, its a draw!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('paper scissors = loss', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'Scissors beats Paper, you lose!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('scissors rock = loss', (expect) => {
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'Rock beats Scissors, you lose!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('scissors paper = win', (expect) => {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'Scissors beats Paper, you lose!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});

test('scissors scissors = draw', (expect) => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'Scissors ties Scissors, its a draw!';

    const actual = checkResults(player, computer);

    expect.equal(actual, expected);  
});