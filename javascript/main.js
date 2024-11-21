// console.log("Hi, there!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options);
    const options = 3;
    
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
    
    let humanChoice = prompt("What do you pick? Rock, paper or scissors").toLowerCase();
    
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        computerChoice === "Rock" ? console.log("Tied round") :
        computerChoice === "Paper" ? (console.log("“You lose! Paper beats Rock”."), computerScore++)  :
        computerChoice === "Scissors" ? (console.log("“You win! Rock beats Scissors”."), humanScore++) : "";    
    } else if (humanChoice === "Paper") {
        computerChoice === "Paper" ? console.log("Tied round") :
        computerChoice === "Rock" ? (console.log("“You win! Paper beats Rock”."), humanScore++) :
        computerChoice === "Scissors" ? (console.log("“You lose! Scissors beats Paper”."), computerScore++) : ""
    } else {
        computerChoice === "Scissors" ? console.log("Tied round") :
        computerChoice === "Paper" ? (console.log("“You win! Scissors beats Paper”."), humanScore++) :
        computerChoice === "Rock" ? (console.log("“You lose! Rock beats Scissors”."), computerScore++) : ""
    }
    
    console.log(humanChoice + "\t" + humanScore);
    console.log(computerChoice + "\t" + computerScore);
}
