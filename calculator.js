let display = document.getElementById("result");
let currentInput = "";
let currentOperator = "";
let hasCalculated = false;

function clearDisplay() {
    display.value = "0";
    currentInput = "";
    currentOperator = "";
    hasCalculated = false;
}

function appendToDisplay(value) {
    if (hasCalculated) {
        display.value = "0";
        hasCalculated = false;
    }
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
    currentInput += value;
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
        hasCalculated = true;
    } catch (error) {
        display.value = "Error";
    }
}
