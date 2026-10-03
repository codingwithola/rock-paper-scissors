function playGame () {

let humanScore = 0
let computerScore = 0

while (humanScore < 5 && computerScore < 5) {

function playRound (humanChoice, computerChoice) {
}
function getComputerChoice () {
let computerRandom = Math.floor(Math.random() * 3);

if (computerRandom === 0) {
        console.log(`Computer chose: rock`)
        computerChoice = "rock"
} else if (computerRandom === 1) {
        console.log(`Computer chose: paper`)
        computerChoice = "paper"
} else if (computerRandom === 2) {
        console.log(`Computer chose: scissors`)
        computerChoice = "scissors"
}

}    
   

function getHumanChoice () {
let humanChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
    if (humanChoice === "rock") {
        console.log(`You chose: rock`);
    } else if (humanChoice === "paper") {
        console.log(`You choose: paper`)
    } else if (humanChoice === "scissors") {
        console.log(`You chose: scissors`)
    }



if ((humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")) {
        computerScore
        humanScore
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore += 1
}

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}


console.log (`Your Score: ${humanScore}, Computer Score: ${computerScore}`)

}

playGame();

//BREAK 

