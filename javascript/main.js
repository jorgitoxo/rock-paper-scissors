// console.log("Hi, there!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    const options = 3;
    
    // Make a random choice out of 3 for the computer to play.
    switch (Math.floor(Math.random() * options)) {
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
    
    let humanChoice = prompt("What do you pick? Rock, paper or scissors");
    
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
