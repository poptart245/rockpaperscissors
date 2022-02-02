function capitalize(playerPrompt) {
    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === "Rock") {
        (computerSelection === "Rock") ? result = "You tied!" :
        (computerSelection === "Paper") ? result = "You lose! Paper beats Rock!" :  result = "You win! Rock beats Scissors!";
    } else if (playerSelection === "Paper") {
        (computerSelection === "Rock") ? result = "You win! Paper beats Rock!" :
        (computerSelection === "Paper") ? result = "You tied!" : result = "You lose! Scissors beats paper!";
    } else if (playerSelection === "Scissors") {
        (computerSelection === "Rock") ? result = "You lose! Rock beats Scissors!" :
        (computerSelection === "Paper") ? result = "You win! Scissors beats Paper!" : result = "You tied!";
    } else {
        result =  "Oops, something went wrong.";
    }
    console.log(result);
}
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
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}
game();
game();
game();
game();
game();
