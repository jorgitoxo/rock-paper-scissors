console.log("Hi, there!");

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
    console.log(humanChoice.slice(0, 1))
    console.log(("rock" || "paper" || "scissors"));
    

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

    // Replace if statement below with switch case above
    // Problem with || operator and printing past first check option to console
    // if (humanChoice.toLowerCase() === ("rock" || "paper" || "scissors")) {
    //     console.log(humanChoice);
    //     // alert("You chose: " + message);
    // } 
    
    return humanChoice;
}
