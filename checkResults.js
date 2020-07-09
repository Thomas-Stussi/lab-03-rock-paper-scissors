export function checkResults(player, computer) {
    if (player === "rock" && computer === "rock") {
        return 'draw';
        //drawData++;
        //winLoseDraw.textContent = 'Rock ties Rock, its a draw!';
        //console.log('hello');
    }
    if (player === "rock" && computer === "paper") {
        return 'loss';
        //lossData++;
        //winLoseDraw.textContent = 'Paper beats Rock, you lose!';
        //console.log('hello');
    }
    if (player === "rock" && computer === "scissors") {
        return 'win';
        //winData++;
        //winLoseDraw.textContent = 'Rock beats Scissors, you win!';
        //console.log('hello');
    }

    //paper scenarios
    if (player === "paper" && computer === "rock") {
        return 'win';
        //winData++;
        //winLoseDraw.textContent = 'Paper beats Rock, you win!';
        //console.log('hello');
    }
    if (player === "paper" && computer === "paper") {
        return 'draw';
        //drawData++;
        //winLoseDraw.textContent = 'Paper ties Paper, its a draw!';
        //console.log('hello');
    }
    if (player === "paper" && computer === "scissors") {
        return 'loss';
        //lossData++;
        //winLoseDraw.textContent = 'Scissors beats Paper, you lose!';
        //console.log('hello');
    }

    //scissors scenarios
    if (player === "scissors" && computer === "scissors") {
        return 'draw';
        //drawData++;
        //winLoseDraw.textContent = 'Scissors ties Scissors, its a draw!';
        //console.log('hello');
    }
    if (player === "scissors" && computer === "paper") {
        return 'win';
        //winData++;
        //winLoseDraw.textContent = 'Scissors beats Paper, you lose!';
        //console.log('hello');
    }
    if (player === "scissors" && computer === "rock") {
        return 'loss';
        //lossData++;
        //winLoseDraw.textContent = 'Rock beats Paper, you lose!';
        //console.log('hello');
    }
    
}