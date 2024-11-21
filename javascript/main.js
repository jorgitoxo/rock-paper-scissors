// console.log("Hi, there!");
function getComputerChoice() {
    const options = 3;
    let computerChoice = Math.floor(Math.random() * options);
    
    // Make a random choice out of 3 for the computer to play.
    switch (computerChoice) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        default:
            computerChoice = "Scissors"
            break;
    }
    return computerChoice
}

function getHumanChoice() {
    
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    
    switch (humanChoice.slice(0, 1)) {
        case ("r"):
            humanChoice = "Rock"
            alert("You chose: " + humanChoice);
            break;
        case ("p"):
            humanChoice = "Paper"
            alert("You chose: " + humanChoice);
            break;
         case ("s"):
            humanChoice = "Scissors"
            alert("You chose: " + humanChoice);
            break;
        default:
            humanChoice = getComputerChoice();
            alert("It was chosen for you: " + humanChoice);
            break;
    }
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

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
        console.log(humanChoice + "\t" + computerChoice);
        console.log("H: " + humanScore + "\t" + "C: " + computerScore);
    }
    
    for (let round = 1; round < rounds + 1; round++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
        console.log("Round: " + round);
    }
    
    humanScore === computerScore ? (console.log("*** Tie! ***"), alert("*** Tie! ***")) :
    humanScore > computerScore ? (console.log("*** You are winner!!! ***"), alert("*** You are winner!!! ***")) : 
    (console.log("*** You are loser... ***"), alert("*** You are loser... ***"));

    return;
}
