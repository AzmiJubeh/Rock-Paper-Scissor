// 1. Define the options
const options = ['rock', 'paper', 'scissors'];

// 2. Get User Input via a pop-up box
const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();

// 3. Generate a random choice for the computer
// We use Math.random() * 3 to get a number between 0 and 2.99
// Math.floor() rounds it down to 0, 1, or 2
const randomIndex = Math.floor(Math.random() * options.length);
const computerChoice = options[randomIndex];

// 4. Validate input and show results
if (options.includes(userInput)) {
    console.log(`--- Results ---`);
    console.log(`You chose: ${userInput}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    // Quick logic to determine the winner
    if (userInput === computerChoice) {
        console.log("Result: It's a tie! 🤝");
    } else if (
        (userInput === 'rock' && computerChoice === 'scissors') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("Result: You win! 🎉");
    } else {
        console.log("Result: You lose! 💀");
    }
} else {
    console.log("Invalid input! Please refresh and type rock, paper, or scissors.");
}