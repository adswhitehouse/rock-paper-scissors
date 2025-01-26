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

function getHumanChoice() {
  let choiceHuman = prompt(
    "Please enter either 'rock', 'paper' or 'scissors' to play."
  ).toLowerCase();
  return choiceHuman;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("YOU LOSE! Paper beats rock.");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("YOU WIN! Rock beats scissors.");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("YOU LOSE! Scissors beats paper.");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("YOU WIN! Paper beats rock");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log("YOU LOSE! Rock beats scissors");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("YOU WIN! Scissors beats paper");
  } else if (humanChoice == computerChoice) {
    console.log("It's a DRAW!");
  } else {
    computerScore++;
    console.log("Please input a valid choice.");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(
      `You won against the computer in a best of 5 game! The results are ${humanScore} to you and ${computerScore} to the computer.`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost to the computer in a best of 5 game! The results are ${computerScore} to the computer and ${humanScore} to you.`
    );
  } else if (humanScore == computerScore) {
    console.log(
      `You drew with the computer in a best of 5 game! You both scored ${humanScore} points.`
    );
  }
}

playGame();
