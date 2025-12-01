function getComputerChoice()
{
    const randNum = Math.floor(Math.random() * 3);

    return randNum === 0 ? "rock" : randNum === 1 ? "paper" : "scissors";
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    let numRounds = 0;

    function playRound(humanChoice, computerChoice)
    {
        const userChoice = humanChoice.toLowerCase();

        const roundWinnerDisplay = document.querySelector(".round-winner");

        const computerChoiceDisplay = document.querySelector(".computer-choice");
        const userChoiceDisplay = document.querySelector(".user-choice");
        
        computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
        userChoiceDisplay.textContent = `Your choice: ${userChoice}`;

        if(userChoice === computerChoice)
        {
            roundWinnerDisplay.textContent = `Draw! ${userChoice} is equal to ${computerChoice}.`;
        }
        else if((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper"))
        {
            humanScore++;
            roundWinnerDisplay.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        }
        else
        {
            computerScore++;
            roundWinnerDisplay.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    }

    function displayScore(humanScore, computerScore)
    {
        const humanScoreDisplay = document.querySelector(".human-score")
        const computerScoreDisplay = document.querySelector(".computer-score")

        humanScoreDisplay.textContent = `${humanScore}`;
        computerScoreDisplay.textContent = `${computerScore}`;
    }

    function displayWinner(humanScore, computerScore)
    {
        const winnerDisplay = document.querySelector(".winner");
        const humanFinalPoints = document.querySelector(".human-final-points");
        const computerFinalPoints = document.querySelector(".computer-final-points");
        
        humanFinalPoints.textContent = `Your final points: ${humanScore}`;
        computerFinalPoints.textContent = `Computer's final points: ${computerScore}`;
                
        if(humanScore > computerScore)
        {
            winnerDisplay.textContent = `You are the ultimate winner with ${humanScore} points`;
        }
        else if(computerScore > humanScore)
        { 
            winnerDisplay.textContent = `The computer is the ultimate winner with ${computerScore} points`;
        }
        else 
        {
            winnerDisplay.textContent = `You both had ${computerScore} point(s). It's a draw!`;
        }
    }
    
    const rpsButtons = document.querySelectorAll(".rps-buttons button");

    rpsButtons.forEach((item) => {
        item.addEventListener("click", (e) => {
        numRounds++;
        const computerChoice = getComputerChoice();
        playRound(e.target.innerText, computerChoice);
        displayScore(humanScore, computerScore);
        if(numRounds === 5)
        {
            displayWinner(humanScore, computerScore);
        }
        });

    });


}

playGame();


