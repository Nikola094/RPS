const elements = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerNumCount = document.getElementById('playerNumberCount');
const computerNumCount = document.getElementById('computerNumberCount')
let playerScore = 0;
let computerScore = 0;


function gameLogic(playerChoice) {
    let computerChoice = elements[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice){
        result = " no one "
    }
    else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "the Player" : " the Computer";
                break;
            case "paper":
                result = (computerChoice === "rock") ? " the Player" : " the Computer";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? " the Player" : " the Computer";
         }
    }
    playerDisplay.textContent = `  ${playerChoice}`
    computerDisplay.textContent =  ` ${computerChoice}`
    resultDisplay.textContent =  ` ${result}`

    switch(result){
        case "the Player":
        playerScore++;
        playerNumCount.textContent = playerScore;
        break;
        case " the Computer":
        computerScore++;
        computerNumCount.textContent = computerScore;
    }
}