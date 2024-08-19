let firstNumber;
let operator;
let secondNumber;

function operate(a, op, b) { 
    switch (op) {
    case '+':
	return a+b;
    case '-':
	return a-b;
    case '*':
	return a*b;
    case '/':
	if (secondNumber !== 0) 
	    return a/b;
	alert("DIVIDE BY ZERO IS NOT ALLOWED");
	return secondNumber;
    }

}

function processClick(e) {
    let buttonText = e.target.textContent; // This gets a number or an operator from the clicked button's text

    if (Number(buttonText) || buttonText === "0") { // FIXME: 0 works as false, so need to recheck
	display.value += buttonText;
    } else if (buttonText == ".") {
	if (!display.value.includes(".")) { // Avoid too much dots
	    display.value += buttonText;
	}
    } else {
	operator = buttonText;
	if (!firstNumber) { // Equation evaluated after two numbers are provided
	    firstNumber = Number(display.value);
	    display.value = "";
	} else if (!secondNumber) {
	    secondNumber = Number(display.value);
	    firstNumber = operate(firstNumber, operator, secondNumber);
	    display.value = firstNumber;
	}
    }
}

let div = document.getElementById("buttons");
let display = document.getElementById("display");

let equalButton = document.getElementById("equals");
equalButton.addEventListener("click", () => {
    secondNumber = Number(display.value);
    firstNumber = display.value = operate(firstNumber, operator, secondNumber); // To leave result in firstNumber and next input will be in secondNumber
    secondNumber = 0;
});

let clearButton = document.getElementById("clear"); // Works as backspace
clearButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

let clearAllButton = document.getElementById("clear-all"); // Works as AC
clearAllButton.addEventListener("click", () => {
    display.value='';
    firstNumber = secondNumber = 0;
});

let buttonsList = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "/"];
for (let key of buttonsList) { // Constructing calculator's layout
    let button = document.createElement("button");
    button.textContent = key;
    button.addEventListener("click", processClick);
    div.appendChild(button);
}


