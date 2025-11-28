
function getComputerChoice()
{
    const randNum = Math.floor(Math.random() * 3);

    return randNum === 0 ? "rock" : randNum === 1 ? "paper" : "scissors";
}

function getHumanChoice()
{
    return prompt("Choose rock, paper, or scissors by typing it: ");
}



function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        const userChoice = humanChoice.toLowerCase();
        
        console.log(`Computer's choice: ${computerChoice}`);
        console.log(`Your choice: ${userChoice}`);

        if(userChoice === computerChoice)
        {
            console.log(`Draw! ${userChoice} is equal to ${computerChoice}.`);
        }
        else if((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper"))
        {
            humanScore++;
            console.log(`You win! ${userChoice} beats ${computerChoice}.`);
        }
        else
        {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }
    
    for(let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    console.log(`Your final points: ${humanScore}`);
    console.log(`Computer's final points: ${computerScore}`);
    
    if(humanScore > computerScore)
    {
        console.log(`You are the ultimate winner with ${humanScore} points`);
    }
    else if(computerScore > humanScore)
    { 
        console.log(`The computer is the ultimate winner with ${computerScore} points`);
    }
    else 
    {
        console.log(`You both had ${computerScore} point(s). It's a draw!`);
    }
}

playGame();
