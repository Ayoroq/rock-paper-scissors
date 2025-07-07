// Import the prompt-sync module to allow user input from the terminal
//const prompt = require("prompt-sync")({sigint: true});

// Initialize js-confetti
const jsConfetti = new JSConfetti()

// Array of possible choices for the game
const choices = ["rock", "paper", "scissors"];

// Function to randomly select the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the user's input and validate it
function getHumanChoice() {
  const userInput = prompt("What is your choice? ").toLowerCase();
  if (choices.includes(userInput)) {
    return userInput;
  }

  // Inform the user if their input is invalid
  console.log("Invalid choice. Please choose rock, paper, or scissors.");
  return null;
}

// Initialize scores for both human and computer
let humanScore = 0;
let computerScore = 0;

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
  // Check for a tie
  if (humanChoice === computerChoice) {
    return "That round is a tie!";
  }
  // Check if the human wins
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win that round! ${humanChoice} beats ${computerChoice}`;
  }
  // Otherwise, the computer wins
  else {
    computerScore++;
    return `You lose that round! ${computerChoice} beats ${humanChoice}`;
  }
}

// get the DOM elements needed to display result
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result");
const currentRound = document.querySelector("#current-round");
const roundSelector = document.querySelector("#game-rounds");
const main = document.querySelector("#main");
const gameContainer = document.querySelector("#game-container");
const final = document.querySelector("#final");
const finalContainer = document.querySelector("#final-container");
const roundNUmber = document.querySelector("#number-of-rounds-container");




// get value from the round selector
let gameRounds = roundSelector.value;

let roundsPlayed = 0;
//

function afterClick(event) {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  roundResult.textContent = result;

  roundsPlayed++;
  displayFinalResult();
  displayCurrentRound();
}

// function to display the final result
function displayFinalResult() {
  if (roundsPlayed === gameRounds) {
    if (humanScore > computerScore) {
      finalResult.textContent += "\nYou win the game!";
      finalContainer.classList.toggle("win");
      roundNUmber.classList.toggle("hidden");
      confetti();
    } else if (humanScore < computerScore) {
      finalResult.textContent += "Game over!\n\nYou lose the game!";
      finalContainer.classList.toggle("lose");
    } else {
      finalResult.textContent += "\nThe game is a tie!";
      finalContainer.classList.toggle("draw");
    }
    final.classList.toggle("hidden");
    
  }
}

function confetti(){
     jsConfetti.addConfetti({
                confettiColors: [
                    'blue',
                    'red',
                    'green',
                    'yellow',
                    'orange',
                ],
                confettiNumber: 1000,
                confettiDuration: 50000,
                confettiParticleShape: [
                    'circle',
                    'square',
                    'triangle',
                    'star',
                    'heart'
                ]
            })
}

function displayCurrentRound() {
  currentRound.textContent = roundsPlayed + 1;
}

// function to log to console when the buttons are clicked
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => button.addEventListener("click", afterClick));

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", () => {
  location.reload();
});

// add event listener for when the rounds change
roundSelector.addEventListener("change", (event) => {
  gameRounds = Number(event.target.value);
  main.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");
});
