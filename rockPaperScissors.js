function playRound (humanChoice, computerChoice) {
let computerRandom = Math.floor(Math.random() * 2);
let humanScore = 0
let computerScore = 0


function getComputerChoice () {
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
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

