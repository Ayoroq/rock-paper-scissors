// Import the prompt-sync module to allow user input from the terminal
//const prompt = require("prompt-sync")({sigint: true});

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
  console.log("Invalid choice. Please choose rock, paper, or scissors.")
  return null;
}

// Initialize scores for both human and computer
let humanScore = 0;
let computerScore = 0;

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
    // Check for a tie
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } 
    // Check if the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } 
    // Otherwise, the computer wins
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Function to play the full game (5 rounds)
function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`)
        // Play a round and display the result
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log('--------------------------------\n')
    }
    // Display final scores and the winner
    console.log("Game over!");
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Start
playGame()