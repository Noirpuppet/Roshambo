function getComputerChoice(){
    const option = ["rock", "paper", "scissor"];
    const random = option[Math.floor(Math.random() * option.length)];
    return random;
}

getComputerChoice();


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a Draw!";
    }else if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You Win! Rock beats Scissor";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper";
    }else if (playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Paper";
    }else if (playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor";
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("choose Your weapon!");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();