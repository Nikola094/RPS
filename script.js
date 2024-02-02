const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomString = choices[randomIndex];
    console.log("Computer plays " + randomString);
    return randomString;
}


function playRound(playerSelection, computerSelection){

    const lowerCasePlayerSelection = playerSelection.toLowerCase();

    if (lowerCasePlayerSelection === computerSelection){
        return 'draw';
    }
    if(lowerCasePlayerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return 'First player loss';
        } else if (computerSelection === 'scissor'){
            return 'First player wins';
        }
    }
    
    if(lowerCasePlayerSelection === 'paper'){
        if (computerSelection === 'scissor'){
            return 'First player loss';
        } else if (computerSelection === 'rock'){
            return 'First player wins';
        }
    }
    
    if(lowerCasePlayerSelection === 'scissor'){
        if (computerSelection === 'rock'){
            return 'First player loss';
        } else if (computerSelection === 'paper'){
            return 'First player wins';
        } 
    }
    
}

function playGame(result){
    let playerChoice = prompt("enter a valid symbol");
    let computerResponse = getComputerChoice();
    playerSelection = playerChoice;
    result = playRound(playerChoice, computerResponse);
    return result;
}