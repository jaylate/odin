function getComputerChoice() {
    let r = Math.random();
    return r < 0.33 ? "rock" :
	((r > 0.33 && r < 0.66) ? "paper" : "scissors")
}

function playRound(buttonText) {
    let humanChoice = buttonText.toLowerCase();
    let computerChoice = getComputerChoice();

    function constructGameText() { // Helper function to avoid multiple changes when need to change output
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
    
    div.textContent = `${humanScore}:${computerScore} ${constructGameText()}`;
    winnerdiv.textContent = ''; // Avoid displaying winner before the game ends

    if (humanScore >= 5 || computerScore >= 5) { // Check whether any score is higher than 5 and only then display who won
	if (humanScore == computerScore) {
	    winnerdiv.textContent = `It's a tie! ${humanScore}:${computerScore}`;	    
	} else if (humanScore > computerScore) {
	    winnerdiv.textContent = `You win! ${humanScore}:${computerScore}`;
	} else {
	    winnerdiv.textContent = `You lose! ${humanScore}:${computerScore}`;
	}
	humanScore = computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", (event) => {
	playRound(event.target.textContent); // event.target is an element of clicked button
    });
}

let div = document.querySelector("div");
let winnerdiv = document.querySelector("#winner");
