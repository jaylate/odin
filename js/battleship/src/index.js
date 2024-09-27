import "./style.css";

const Game = require("./game");
const container = document.querySelector(".container");
const computerCheckbox = document.querySelector("#computer-checkbox");
const playButton = document.querySelector("#play-button");
const game = new Game(container);

game.randomlyPlaceShips(10);

playButton.addEventListener("click", () => {
  game.start(computerCheckbox.checked);
});
