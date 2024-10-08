const gridSizeInPixels = 960;
let container = document.getElementById("container");

function getRandomColor() {
    function getRandomValue() {
	return Math.floor(Math.random()*255);
    }
    let red = getRandomValue();
    let green = getRandomValue();
    let blue = getRandomValue();
    return `rgb(${red}, ${green}, ${blue}`;
}

function makeGrid(gridSize) {
    while (container.firstChild) { // First clean up the grid by deleting all its children (if exist)
	container.removeChild(container.firstChild);
    }
    for (let i = 0; i < gridSize**2; i++) { // Create size*size grid cells
	let div = document.createElement("div");
	div.innerText = "";
	div.style.width = div.style.height = `${gridSizeInPixels/gridSize}px`;
	div.style.opacity = "0";
	div.addEventListener("mouseover", () => { // Color is left after the mouse hovered over the div
	    div.style.backgroundColor = getRandomColor();
	    if (Number(div.style.opacity) < 1) // After ten tries cell will be completely visible
		div.style.opacity = String(Number(div.style.opacity) + 0.10);
	});
	container.appendChild(div);
    }
}

let button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("Input size of the grid (<= 100)");
    if (size > 100) size = 100;
    makeGrid(size);
});

makeGrid(16);
