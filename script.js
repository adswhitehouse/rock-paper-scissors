function getComputerChoice() {
  let choiceComp = Math.floor(Math.random() * 3 + 1);
  if (choiceComp == 1) {
    choiceComp = "rock";
  } else if (choiceComp == 2) {
    choiceComp = "paper";
  } else {
    choiceComp = "scissors";
  }
  return choiceComp;
}

// console.log(getComputerChoice())

function getHumanChoice() {
  let choiceHuman = prompt(
    "Please enter either 'rock', 'paper' or 'scissors' to play."
  ).toLowerCase();
  return choiceHuman;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("YOU LOSE! Paper beats rock.");
  } else if (humanScore == "rock" && computerScore == "scissors") {
    humanScore++;
    console.log("YOU WIN! Rock beats scissors.");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("YOU LOSE! Scissors beats paper.");
  } else if((humanChoice == "paper") && (computerChoice == "rock")) {
    humanScore++;
    console.log("YOU WIN! Paper beats rock");
  } else if((humanChoice == "scissors") && (computerChoice == "rock")) {
    computerScore++;
    console.log("YOU LOSE! Rock beats scissors");
  } else if((humanChoice == "scissors") && (computerChoice == "paper")) {
    humanScore++;
    console.log("YOU WIN! Scissors beats paper")
  } else {
    console.log("It's a DRAW!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
