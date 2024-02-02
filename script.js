function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomString = choices[randomIndex];
    console.log("Computer plays " + randomString);
    return randomString;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'draw';
    }
    if(playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return 'First player loss';
        } else if (computerSelection === 'scissor'){
            return 'First player wins';
        }
    }
    
    if(playerSelection === 'paper'){
        if (computerSelection === 'scissor'){
            return 'First player loss';
        } else if (computerSelection === 'rock'){
            return 'First player wins';
        }
    }
    
    if(playerSelection === 'scissor'){
        if (computerSelection === 'rock'){
            return 'First player loss';
        } else if (computerSelection === 'paper'){
            return 'First player wins';
        }
    }
    
}

