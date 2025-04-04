let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    function getComputerChoice() {
        const computer = Math.floor((Math.random() * 3));
        if (computer == 0) {
            return "rock";
        }
        else if (computer == 1) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        return "Tie!";
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        return "Computer won!";
    }
    else {
        humanScore++;
        return "You won!";
    }
}

const rockButton = document.querySelector("#rockButton")
rockButton.addEventListener("click", () => console.log(playRound("rock")))

const paperButton = document.querySelector("#paperButton")
paperButton.addEventListener("click", () => console.log(playRound("paper")))

const scissorsButton = document.querySelector("#scissorsButton")
scissorsButton.addEventListener("click", () => console.log(playRound("scissors")))

/*
function getHumanChoice() {
    const human = prompt("Options: rock, paper, scissors").toLowerCase();
    return human;
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        human = getHumanChoice();
        computer = getComputerChoice();
        console.log("Computer: " + computer);
        playRound(human, computer);
        console.log("User score: " + humanScore + " | Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You won");
    }
    else if (computerScore > humanScore) {
        console.log("Sorry, the computer won.");
    }
    else {
        console.log("It's a tie!");
    }
}
playGame(); */