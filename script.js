let playerScore = 0;
let computerScore = 0;

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
        playerScore++
        return "You Win! Rock beats Scissor";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        return "You Lose! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        return "You Win! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissor"){
        computerScore++
        return "You Lose! Scissor beats Paper";
    }else if (playerSelection === "scissor" && computerSelection === "paper"){
        playerScore++
        return "You Win! Scissor beats Paper";
    }else if (playerSelection === "scissor" && computerSelection === "rock"){
        computerScore++
        return "You Lose! Rock beats Scissor";
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("choose Your weapon!");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore){
        console.log("You are the winner!");
    }else if(computerScore > playerScore){
        console.log("Computer is the winner!");
    }else{
        console.log("It's a Draw!")
    }
}

game();