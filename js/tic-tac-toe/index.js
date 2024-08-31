const game = (function () {
    let gameBoard = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
    ];

    function Player(x) {
	this.player = x;
    }

    const p1 = new Player("X");
    const p2 = new Player("O");
    let playerCounter = 0;

    const currentPlayer = () => { // 0 is even, so first is X and only afterwards counter is incremented
	return playerCounter++ % 2 == 0 ? p1.player : p2.player;
    };
    
    const showBoard = () => {
	return gameBoard;
    };
    
    const checkGameState = () => {
	const checkRow = (x) => gameBoard.some(row => row.every(val => val === x));
	const checkColumn = (x) => gameBoard[0].some((_, columnIndex) => gameBoard.every(row => row[columnIndex] === x));
	const checkDiagonal = (x) => { // Checking two diagonals (issue: fixed size)
	    return (gameBoard[0][0] === x && gameBoard[1][1] === x && gameBoard[2][2] === x) ||
		(gameBoard[0][2] === x && gameBoard[1][1] === x && gameBoard[2][0] === x);
	};

	const checkForPlayer = (x) => checkRow(x) || checkColumn(x) || checkDiagonal(x);

	if (checkForPlayer(p1.player)) {
	    alert("WON "+p1.player);
	    playerCounter = 0;
	} else if (checkForPlayer(p2.player)) {
	    alert("WON "+p2.player);
	    playerCounter = 0;
	} else if (gameBoard.every(row => !row.includes(" "))) { // If board is full then Tie
	    alert("TIE");
	    playerCounter = 0;
	}
    };
    
    const move = (x, y) => {
	if (gameBoard[y-1][x-1] !== " ") return;
	gameBoard[y-1][x-1] = currentPlayer();
    };

    const resetGame = () => {
	playerCounter = 0;
	gameBoard = [
	    [" ", " ", " "],
	    [" ", " ", " "],
	    [" ", " ", " "]
	];
    }

    return {showBoard, checkGameState, move, resetGame};
})();

const gameui = (function() {
    let gameBoardElement = document.querySelector(".container>.gametable");
    let resetButton = document.querySelector(".container>.reset");
    resetButton.addEventListener("click", () => {
	game.resetGame();
	redrawBoard();
    });
    let gameBoardSize = 3;
   
    const redrawBoard = () => {
	let gameBoard = game.showBoard();
	gameBoardElement.innerHTML = "";
	for (let i = 0; i < gameBoardSize; i++) {
	    for (let j = 0; j < gameBoardSize; j++){
		let gameCell = document.createElement("div");
		gameCell.innerHTML = gameBoard[i][j];
		gameCell.dataset.row = j+1;
		gameCell.dataset.cell = i+1;
		gameCell.addEventListener("click", () => {
		    game.move(gameCell.dataset.row, gameCell.dataset.cell);
		    redrawBoard();
		    game.checkGameState();
		});
		gameBoardElement.appendChild(gameCell);
	    }
	}
    }
    return {redrawBoard};
})();

gameui.redrawBoard();
