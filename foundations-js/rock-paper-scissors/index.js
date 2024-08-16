function getComputerChoice() {
    let r = Math.random();
    return r < 0.33 ? "rock" :
	((r > 0.33 && r < 0.66) ? "paper" : "scissors")
}

function getHumanChoice() {
    let userInput = prompt("Input your choice (rock/paper/scissors r/p/s):").toLowerCase();
    switch (userInput) {
    case "rock":
    case "paper":
    case "scissors":
	return userInput;
    case "r":
	return "rock";
    case "p":
	return "paper";
    case "s":
	return "scissors";
    default:
	alert("Invalid input");
	return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
	    return "Tie!";
	}
	switch (humanChoice) {
	case "rock":
	    switch (computerChoice) {
	    case "scissors":
		humanScore++;
		return "You win! Rock beats Scissors";
	    case "paper":
		computerScore++;
		return "You lose! Paper beats Rock";

	    }
	case "scissors":
	    switch (computerChoice) {
	    case "rock":
		computerScore++;
		return "You lose! Rock beats Scissors";
	    case "paper":
		humanScore++;
		return "You win! Scissors beat Paper";
	    }
	case "paper":
	    switch (computerChoice) {
	    case "rock":
		humanScore++;
		return "You win! Paper beats Rock";
	    case "scissors":
		computerScore++;
		return "You lose! Scissors beat Paper";
	    }
	}   
    }

    for (let games = 0; games < 5; games++) {
	let humanSelection = getHumanChoice();
	let computerSelection = getComputerChoice();
	
	console.log(playRound(humanSelection, computerSelection));
    }
    
    if (humanScore == computerScore) {
	alert(`It's a tie! ${humanScore}:${computerScore}`);
    } else if (humanScore > computerScore) {
	alert(`You win! ${humanScore}:${computerScore}`);
    } else {
	alert(`You lose! ${humanScore}:${computerScore}`);
    }
}

playGame();
