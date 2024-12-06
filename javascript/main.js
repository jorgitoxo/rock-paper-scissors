let humanScore = 0;
let computerScore = 0;
const maxScore = 5;
let humanChoice = '';
let computerChoice = '';
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


// Make a random choice out of 3 options for the computer to play.
function getComputerChoice() {
    const options = 3;
    let computerChoice = Math.floor(Math.random() * options);
    return computerChoice = computerChoice === 0 ? 
        "Rock" : computerChoice === 1 ? 
        "Paper" : "Scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        computerChoice === "Rock" ? console.log("Tied round...") :
        computerChoice === "Paper" ? (console.log("“You lose! Paper beats Rock”."), computerScore++)  :
        computerChoice === "Scissors" ? (console.log("“You win! Rock beats Scissors”."), humanScore++) : "";    
    } else if (humanChoice === "Paper") {
        computerChoice === "Paper" ? console.log("Tied round...") :
        computerChoice === "Rock" ? (console.log("“You win! Paper beats Rock”."), humanScore++) :
        computerChoice === "Scissors" ? (console.log("“You lose! Scissors beats Paper”."), computerScore++) : ""
    } else {
        computerChoice === "Scissors" ? console.log("Tied round...") :
        computerChoice === "Paper" ? (console.log("“You win! Scissors beats Paper”."), humanScore++) :
        computerChoice === "Rock" ? (console.log("“You lose! Rock beats Scissors”."), computerScore++) : ""
    }
    console.log(humanChoice + "\t" + computerChoice + "\n" + "H: " + humanScore + "\t" + "C: " + computerScore);
}

function announceResults(humanScore, computerScore) {
    humanScore === computerScore ? (console.log("*** Tie! ***"), alert("*** Tie! ***")) :
    humanScore > computerScore ? (console.log("*** You are winner!!! ***"), alert("*** You are winner!!! ***")) : 
    (console.log("*** You are loser... ***"), alert("*** You are loser... ***"));
}

function playGame() {
    rockButton.addEventListener('click', (humanChoice, computerChoice) => {
        computerChoice = getComputerChoice();
        humanChoice = rockButton.textContent;
        playRound(humanChoice, computerChoice);
    });

    paperButton.addEventListener('click', (humanChoice, computerChoice) => {
        computerChoice = getComputerChoice();
        humanChoice = paperButton.textContent;
        playRound(humanChoice, computerChoice);
    });

    scissorsButton.addEventListener('click', (humanChoice, computerChoice) => {
        computerChoice = getComputerChoice();
        humanChoice = scissorsButton.textContent;
        playRound(humanChoice, computerChoice);
    });
}

playGame();