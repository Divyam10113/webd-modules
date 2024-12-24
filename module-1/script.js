let currentInput = "0";
let previousInput = "";
let operator = null;

function updateDisplay() {
    document.getElementById("display").innerText = currentInput;
}

function num(number) {
    if (number === ".") {
        if (!currentInput.includes(".")) {
            currentInput += number;
        }
    } else {
        if (currentInput === "0") {
            currentInput = number;
        } else {
            currentInput += number;
        }
    }
    updateDisplay();
}

function clr() {
    currentInput = "0";
    previousInput = "";
    updateDisplay();
}

function sign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function perc() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function op(op) {
    if (currentInput === "") return;
    if (previousInput !== "") cal();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}


function cal() {
    if (operator === null || previousInput === "" || currentInput === "") return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
        case "+":
            currentInput = (prev + current).toString();
            break;
        case "-":
            currentInput = (prev - current).toString();
            break;
        case "*":
            currentInput = (prev * current).toString();
            break;
        case "/":
            currentInput = (prev / current)
            if(currentInput.toString().length > 10){
                currentInput = currentInput.toFixed(8);
            }
            else{
                currentInput = currentInput.toString()
            }
            break;
    }
    operator = null;
    previousInput = "";
    updateDisplay();

}


function rem() {
            if(currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1); 
            updateDisplay();
            }
            else if(currentInput.length === 1){
                currentInput = "0";
                updateDisplay();
            }
        

}
