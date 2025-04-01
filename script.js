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

function getHumanChoice() {
    const human = prompt("Options: rock, paper, scissors").toLowerCase();
    return human;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
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
playGame();