
export function checkResults(player, computer) {
    if (player === "rock" && computer === "rock") {
        return 'Rock ties Rock, its a draw!';
    }
    if (player === "rock" && computer === "paper") {
        return 'Paper beats Rock, you lose!';
    }
    if (player === "rock" && computer === "scissors") {
        return 'Rock beats Scissors, you win!';        
    }

    //paper scenarios
    if (player === "paper" && computer === "rock") {
        return 'Paper beats Rock, you win!';
    }
    if (player === "paper" && computer === "paper") {
        return 'Paper ties Paper, its a draw!';
    }
    if (player === "paper" && computer === "scissors") {
        return 'Scissors beats Paper, you lose!';
    }

    //scissors scenarios
    if (player === "scissors" && computer === "scissors") {
        return 'Scissors ties Scissors, its a draw!';
    }
    if (player === "scissors" && computer === "paper") {
        return 'Scissors beats Paper, you lose!';
    }
    if (player === "scissors" && computer === "rock") {
        return 'Rock beats Scissors, you lose!';
    }
}