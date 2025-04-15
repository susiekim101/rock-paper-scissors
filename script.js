let humanScore = 0;
let computerScore = 0;

const playerContainer = document.querySelector(".playerContainer");
const playerScore = document.createElement("h2");
playerScore.setAttribute("id", "playerScore");
playerScore.textContent = humanScore;
playerContainer.appendChild(playerScore);

const computerContainer = document.querySelector(".computerContainer");
const compScore = document.createElement("h2");
compScore.setAttribute("id", "computerScore");
compScore.textContent = computerScore;
computerContainer.appendChild(compScore);

const computerOption = document.querySelector("#computerButton");
const computerIcon = document.createElement("p");
computerIcon.setAttribute("id", "computerIcon");
computerIcon.textContent = "❓";
computerOption.append(computerIcon);

const conclusionContainer = document.querySelector(".conclusionContainer");
const winnerText = document.createElement("p");
winnerText.setAttribute("id", "winner");
winnerText.textContent = "Playing game..."
conclusionContainer.append(winnerText)

const buttons = document.querySelectorAll(".choiceBtn");
const restartButton = document.querySelector("#restartButton");

restartButton.addEventListener("click", () => {
    humanScore = 0;
    playerScore.textContent = humanScore;
    computerScore = 0;
    compScore.textContent = computerScore;
    buttons.forEach( (button) => button.disabled = false);
})

function getComputerChoice() {
    const computer = Math.floor((Math.random() * 3));
    if (computer == 0) {
        computerIcon.textContent = "👊"
        return "rock";
    }
    else if (computer == 1) {
        computerIcon.textContent = "🖐️"
        return "paper";
    }
    else {
        computerIcon.textContent = "✌️"
        return "scissors";
    }
}

function calcResult(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie!";
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        compScore.textContent = computerScore
        return "Computer won!";
    }
    else {
        humanScore++;
        playerScore.textContent = humanScore
        return "You won!";
    }
}

function updateResult() {
    if (humanScore >= 5) {
        winnerText.textContent = "Player won the game!"
        buttons.forEach( (button) => button.disabled = true);
    }
    else if (computerScore >= 5) {
        winnerText.textContent = "Computer won the game!"
        const buttons = document.querySelectorAll("button");
        buttons.forEach( (button) => button.disabled = true);
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    calcResult(humanChoice, computerChoice);
    updateResult();
}

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => playRound("rock"));

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => playRound("paper"));

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => playRound("scissors"));