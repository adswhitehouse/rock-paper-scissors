function getComputerChoice() {
  let choiceComp = Math.floor(Math.random() * 3 + 1);
  if (choiceComp == 1) {
    choiceComp = "rock";
  } else if (choiceComp == 2) {
    choiceComp = "paper";
  } else if (choiceComp == 3) {
    choiceComp = "scissors";
  }
  return choiceComp;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let humanChoice = "";
let computerChoice = "";

let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener("click", () => {
  computerChoice = getComputerChoice();
  humanChoice = "rock";
  playRound(humanChoice, computerChoice);
});

paper.addEventListener("click", () => {
  computerChoice = getComputerChoice();
  humanChoice = "paper";
  playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", () => {
  computerChoice = getComputerChoice();
  humanChoice = "scissors";
  playRound(humanChoice, computerChoice);
});

const roundResult = document.querySelector(".announcement");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

function isScoreFive() {
  if (playerPoints == 5) {
    roundResult.textContent = `You win the game! ${playerPoints} - ${computerPoints} to you.`;
    playerScore.textContent = `Player Score: `;
    computerScore.textContent = `Computer Score: `;
    playerPoints = 0;
    computerPoints = 0;
  } else if (computerPoints == 5) {
    roundResult.textContent = `Computer wins the game! ${computerPoints} - ${playerPoints} to the computer.`;
    playerScore.textContent = `Player Score: `;
    computerScore.textContent = `Computer Score: `;
    playerPoints = 0;
    computerPoints = 0;
  }
}

function playRound(human, computer) {
  if (human == computer) {
    roundResult.textContent = `It's a draw! You both chose ${human}.`;
    isScoreFive();
  } else if (human == "rock" && computer == "scissors") {
    roundResult.textContent = `You win! Computer chose scissors.`;
    playerPoints++;
    playerScore.textContent = `Player Score: ` + playerPoints.toString();
    isScoreFive();
  } else if (human == "rock" && computer == "paper") {
    roundResult.textContent = `You lose! Computer chose paper.`;
    computerPoints++;
    computerScore.textContent = `Computer Score: ` + computerPoints.toString();
    isScoreFive();
  } else if (human == "paper" && computer == "rock") {
    roundResult.textContent = `You win! Computer chose rock.`;
    playerPoints++;
    playerScore.textContent = `Player Score: ` + playerPoints.toString();
    isScoreFive();
  } else if (human == "paper" && computer == "scissors") {
    roundResult.textContent = `You lose! Computer chose scissors.`;
    computerPoints++;
    computerScore.textContent = `Computer Score: ` + computerPoints.toString();
    isScoreFive();
  } else if (human == "scissors" && computer == "paper") {
    roundResult.textContent = `You win! Computer chose paper.`;
    playerPoints++;
    playerScore.textContent = `Player Score: ` + playerPoints.toString();
    isScoreFive();
  } else if (human == "scissors" && computer == "rock") {
    roundResult.textContent = `You lose! Computer chose rock.`;
    computerPoints++;
    computerScore.textContent = `Computer Score: ` + computerPoints.toString();
    isScoreFive();
  }
}
