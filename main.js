// Operations
function sum(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

// Get Numbers and Display Them on Event

const numberBtns = document.querySelectorAll(".number");

let display = document.getElementById("userinput");

numberBtns.forEach(btn => {
    btn.onclick = function (btn) {
        display.placeholder == 0 ? display.placeholder = btn.target.value : display.placeholder += btn.target.value;
    }
})

// Add Decimal on Event

const decimalBtn = document.getElementById("decimal");

decimalBtn.onclick = function (btn) {
        display.placeholder += btn.target.value;
        decimalBtn.disabled = true;
    }

// Clear Display on Event

const clearBtn = document.getElementById("clear");

clearBtn.onclick = function (btn) {
    display.placeholder = 0;
    decimalBtn.disabled = false;
}

// Get Operators and Initialize Current Operation & Numbers

const operatorsBtn = document.querySelectorAll(".operator");

let currentOperation = '';

let firstNumber = 0;
let secondNumber = 0;

operatorsBtn.forEach(btn => {
    btn.onclick = function(btn) {
        currentOperation = btn.target.value;
        firstNumber = display.placeholder;
        display.placeholder = '';
        decimalBtn.disabled = false;
    }
})

// Calculate

function calculate(a, b, currentOperation) {
    if(currentOperation == 'sum') {
        return sum(a,b)  
    } else if(currentOperation == 'subtract') {
        return subtract(a,b) 
    } else if(currentOperation == 'multiply') {
        return multiply(a,b)   
    } else if(currentOperation == 'divide') {
        return divide(a,b)
    } 
}

// Get Equals and Show Result

const equalsBtn = document.getElementById("equals");

equalsBtn.onclick = function (btn) {
    secondNumber = display.placeholder;
    display.placeholder = calculate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperation)
}










