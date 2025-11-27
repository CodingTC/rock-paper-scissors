
function getComputerChoice()
{
    const randNum = Math.floor(Math.random() * 3);

    return randNum === 0 ? "rock" : randNum === 1 ? "paper" : "scissors";
}

function getHumanChoice()
{
    return prompt("Choose rock, paper, or scissors by typing it: ");
}


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


let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
