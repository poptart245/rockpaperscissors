function capitalize(playerPrompt) {
    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

let userWins;
let compWins;

// determines winner from player and computer choices
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock") && (computerSelection === "Scissors") || 
        (playerSelection === "Paper") && (computerSelection === "Rock") || 
        (playerSelection === "Scissors") && (computerSelection === "Paper")) {
            result = "You win! " + playerSelection + " beats " + computerSelection + ".";
            userWins++;
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper") || 
        (playerSelection === "Paper") && (computerSelection === "Scissors") || 
        (playerSelection === "Scissors") && (computerSelection === "Rock")) {
            result = "You lose! " + computerSelection + " beats " + playerSelection + ".";
            compWins++;
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock") || 
        (playerSelection === "Paper") && (computerSelection === "Paper") || 
        (playerSelection === "Scissors") && (computerSelection === "Scissors")) {
            result = "You tied!";
    } else {
        result =  "error";
    }
    
    console.log(result);
    return result;
}

// actually runs game
function game() {
    let playerPrompt = prompt("You choose: Rock, Paper, or Scissors?");
    let playerSelection = capitalize(playerPrompt);
    
    const computerChoices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let computerSelection = computerChoices[Math.floor(Math.random() * 
    computerChoices.length)];

    playRound(playerSelection, computerSelection);
}

// runs 5 matches of game
function wholeGame() {
    userWins = 0;
    compWins = 0;

    game();
    console.log("You: " + userWins + " Computer: " + compWins);

    game();
    console.log("You: " + userWins + " Computer: " + compWins);

    game();
    console.log("You: " + userWins + " Computer: " + compWins);

    game();
    console.log("You: " + userWins + " Computer: " + compWins);

    game();
    console.log("You: " + userWins + " Computer: " + compWins);

    if (compWins > userWins) {
        console.log("Awww you lost! Try again!");
    } else if (userWins > compWins) {
        console.log("Sweet! You won!!! Congratulations!");
    } else if (userWins === compWins) {
        console.log("Uh oh, you tied!")
    } else {
        console.log("Something went wrong...");
    }
}

wholeGame();