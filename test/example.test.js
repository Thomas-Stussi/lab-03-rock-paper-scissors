// IMPORT MODULES under test here:
// import { example } from '../example.js'
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