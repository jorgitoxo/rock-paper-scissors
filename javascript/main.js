const maxScore = 5;
let humanScore = 0;
let computerScore = 0;
const buttonsPanel = document.querySelector(".buttons-panel");
const scoreboardPanel = document.querySelector(".scoreboard-panel");
const announcementPanel = document.querySelector(".announcement-panel");

// Make a random choice out of 3 options for the computer to play.
function getComputerChoice() {
    const options = 3;
    let computerChoice = Math.floor(Math.random() * options);
    return computerChoice = computerChoice === 0 ? "Rock" 
        : computerChoice === 1 ? "Paper" 
        : "Scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        computerChoice === "Rock" ?
            (announcementPanel.textContent = "Tied round...")
        : computerChoice === "Paper" ?
            ((announcementPanel.textContent = `“You lose! Paper beats Rock.”`), computerScore++)
        : computerChoice === "Scissors" ?
            ((announcementPanel.textContent = `“You win! Rock beats Scissors.”`), humanScore++)
        : "";
    } else if (humanChoice === "Paper") {
        computerChoice === "Paper" ?
            (announcementPanel.textContent = `"Tied round..."`)
        : computerChoice === "Rock" ?
            ((announcementPanel.textContent = `“You win! Paper beats Rock.”`), humanScore++)
        : computerChoice === "Scissors" ?
            ((announcementPanel.textContent = `“You lose! Scissors beats Paper.”`), computerScore++)
        : "";
    } else {
        computerChoice === "Scissors" ?
            (announcementPanel.textContent = `"Tied round..."`)
        : computerChoice === "Paper" ?
            ((announcementPanel.textContent = `“You win! Scissors beats Paper.”`), humanScore++)
        : computerChoice === "Rock" ? 
            ((announcementPanel.textContent = `“You lose! Rock beats Scissors.”`), computerScore++)
        : "";
    }
    
    scoreboardPanel.textContent = `Player:[${humanScore}]` + "\n" + `Computer:[${computerScore}]`;
    if ((humanScore === maxScore) || (computerScore === maxScore)) {
        announceResults(humanScore, computerScore);
        reset();
    }
}

function announceResults(humanScore, computerScore) {
    humanScore > computerScore ? ((announcementPanel.textContent = `*** You are winner!!! ***`), alert("*** You are winner!!! ***"))
    : ((announcementPanel.textContent = `*** You are loser... ***`), alert("*** You are loser... ***"));
    return;
}

function reset () {
    humanScore = 0;
    computerScore = 0;
    announcementPanel.textContent = 'Play again?';
}

function playGame() {
    // why does having the event handler inside a while result in a page crash?
    buttonsPanel.addEventListener('click', (event) => {
        let computerChoice = getComputerChoice();
        let humanChoice = event.target.textContent;
        playRound(humanChoice, computerChoice);    
    });    
}

playGame();
