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

    const actual = checkResults(player, computer);

    expect.equal(actual, 'draw');  
});

test('rock paper = loss', (expect) => {
    const player = 'rock';
    const computer = 'paper';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'loss');  
});

test('rock scissors = win', (expect) => {
    const player = 'rock';
    const computer = 'scissors';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'win');  
});

test('paper rock = win', (expect) => {
    const player = 'paper';
    const computer = 'rock';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'win');  
});

test('paper paper = draw', (expect) => {
    const player = 'paper';
    const computer = 'paper';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'draw');  
});

test('paper scissors = loss', (expect) => {
    const player = 'paper';
    const computer = 'scissors';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'loss');  
});

test('scissors rock = loss', (expect) => {
    const player = 'scissors';
    const computer = 'rock';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'loss');  
});

test('scissors paper = win', (expect) => {
    const player = 'scissors';
    const computer = 'paper';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'win');  
});

test('scissors scissors = draw', (expect) => {
    const player = 'scissors';
    const computer = 'scissors';

    const actual = checkResults(player, computer);

    expect.equal(actual, 'draw');  
});