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

function playRound(human, computer) {
  if (playerPoints == 5) {
    roundResult.textContent = `You win the game!`;
    playerScore.textContent = `Player Score: `;
    computerScore.textContent = `Computer Score: `;
    playerPoints = 0;
    computerPoints = 0;
  } else if (computerPoints == 5) {
    roundResult.textContent = `Computer wins the game!`;
    playerScore.textContent = `Player Score: `;
    computerScore.textContent = `Computer Score: `;
    playerPoints = 0;
    computerPoints = 0;
  } else if (human == computer) {
    roundResult.textContent = `It's a draw! You both chose ${human}.`;
  } else if (human == "rock" && computer == "scissors") {
    roundResult.textContent = `You win! Computer chose scissors.`;
    playerPoints++;
    playerScore.textContent = `Player Score: ` + playerPoints.toString();
  } else if (human == "rock" && computer == "paper") {
    roundResult.textContent = `You lose! Computer chose paper.`;
    computerPoints++;
    computerScore.textContent = `Computer Score: ` + computerPoints.toString();
  } else if (human == "paper" && computer == "rock") {
    roundResult.textContent = `You win! Computer chose rock.`;
    playerPoints++;
    playerScore.textContent = `Player Score: ` + playerPoints.toString();
  } else if (human == "paper" && computer == "scissors") {
    roundResult.textContent = `You lose! Computer chose scissors`;
    computerPoints++;
    computerScore.textContent = `Computer Score: ` + computerPoints.toString();
  } else if (human == "scissors" && computer == "paper") {
    roundResult.textContent = `You win! Computer chose paper`;
    playerPoints++;
    playerScore.textContent = `Player Score: ` + playerPoints.toString();
  } else if (human == "scissors" && computer == "rock") {
    roundResult.textContent = `You lose! Computer chose rock.`;
    computerPoints++;
    computerScore.textContent = `Computer Score: ` + computerPoints.toString();
  }
}

// function getHumanChoice() {
//   let choiceHuman = prompt(
//     "Please enter either 'rock', 'paper' or 'scissors' to play."
//   ).toLowerCase();
//   return choiceHuman;
// }

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice == "rock" && computerChoice == "paper") {
//     computerScore++;
//     console.log("YOU LOSE! Paper beats rock.");
//   } else if (humanChoice == "rock" && computerChoice == "scissors") {
//     humanScore++;
//     console.log("YOU WIN! Rock beats scissors.");
//   } else if (humanChoice == "paper" && computerChoice == "scissors") {
//     computerScore++;
//     console.log("YOU LOSE! Scissors beats paper.");
//   } else if (humanChoice == "paper" && computerChoice == "rock") {
//     humanScore++;
//     console.log("YOU WIN! Paper beats rock");
//   } else if (humanChoice == "scissors" && computerChoice == "rock") {
//     computerScore++;
//     console.log("YOU LOSE! Rock beats scissors");
//   } else if (humanChoice == "scissors" && computerChoice == "paper") {
//     humanScore++;
//     console.log("YOU WIN! Scissors beats paper");
//   } else if (humanChoice == computerChoice) {
//     console.log("It's a DRAW!");
//   } else {
//     console.log("Please only input a valid choice of rock, paper of scissors.");
//   }
// }

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   if (humanScore > computerScore) {
//     console.log(
//       `You won against the computer in a best of 5 game! The results are ${humanScore} to you and ${computerScore} to the computer.`
//     );
//   } else if (computerScore > humanScore) {
//     console.log(
//       `You lost to the computer in a best of 5 game! The results are ${computerScore} to the computer and ${humanScore} to you.`
//     );
//   } else if (humanScore == computerScore) {
//     console.log(
//       `You drew with the computer in a best of 5 game! You both scored ${humanScore} points.`
//     );
//   }
// }

// playGame();
