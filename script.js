const container = document.querySelector('.container');
const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorbtn = document.querySelector('.scissor');
const displayScore = document.querySelector('.display');
const playerPoint = document.querySelector('.playerPoint');
const computerPoint = document.querySelector('.computerPoint');





rockbtn.addEventListener('click', () =>{
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});

paperbtn.addEventListener('click', () =>{
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});

scissorbtn.addEventListener('click', () =>{
    const playerSelection = 'scissor';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
});

const content = document.createElement('div');
content.classList.add('content');
content.textContent = '-------------------------------'

container.appendChild(content);



const updateScore = function(playerScore, computerScore){
    playerPoint.innerText = `Player Score: ${playerScore}`;

    computerPoint.innerText = `Computer Score: ${computerScore}`;
}


const checkWinner = function(playerScore, computerScore){
    console.log(playerScore, computerScore);
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        h2.innerHTML = "Congrats! you are the winner";
        container.appendChild(h2);
    }else if(computerScore === 5){
        const h2 = document.createElement('h2');
        h2.innerHTML = "You Lose! Computer is the winner";
        container.appendChild(h2);
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////

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
        content.innerHTML = "It's a Draw!";
    }else if (playerSelection === "rock" && computerSelection === "scissor"){
        playerScore++
        content.innerHTML = "You Win! Rock beats Scissor";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        content.innerHTML = "You Lose! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        content.innerHTML = "You Win! Paper beats Rock";
    }else if (playerSelection === "paper" && computerSelection === "scissor"){
        computerScore++
        content.innerHTML = "You Lose! Scissor beats Paper";
    }else if (playerSelection === "scissor" && computerSelection === "paper"){
        playerScore++
        content.innerHTML = "You Win! Scissor beats Paper";
    }else if (playerSelection === "scissor" && computerSelection === "rock"){
        computerScore++
        content.innerHTML = "You Lose! Rock beats Scissor";
    }
}

// function game(){
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("choose Your weapon!");
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if(playerScore > computerScore){
//         console.log("You are the winner!");
//     }else if(computerScore > playerScore){
//         console.log("Computer is the winner!");
//     }else{
//         console.log("It's a Draw!")
//     }
// }

// game();