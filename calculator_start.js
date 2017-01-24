/** TODO:
 * 2. Bootstrap it to make it pretty!
 * 6. Challenge: Add trig functions (in radian AND degree mode)
 * 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
 * 8. Super Challenge: Add ( and ) buttons that work!
 * 9. Super Duper Challenge: Add exponents (negatives too!)
 */
var currentInput = "";
var memory = "0";
var operator = 0;
var degree = true;

/**
 * displays the requested string
 */
function displayCurrentInput() {
    if (currentInput == "") {
        document.getElementById('screen').value = memory;
    }
    else {
        document.getElementById('screen').value = currentInput;
    }
}

/**
 * add a digit to the number string
 * @param {number} dig digit to be added to number on screen
 */
function addDigit(dig) {
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    }
    else if (currentInput.length < 30) {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears everything.
 */
function allClear() {
    currentInput = "";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 *  Clear the current input back to 0
 */
function cancel() {
    currentInput = "";
    displayCurrentInput();
}

/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 * @param {string} op stores the specified operator
 */
function storeOperator(op) {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = currentInput; //store value
    currentInput = "";
    displayCurrentInput();
}

/**
 *  Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2 && currentInput != "0") {
        currentInput = eval(memory) / eval(currentInput);
    };
    if (operator == 2 && currentInput == "0") {
        currentInput = "ERROR"
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Changes the sign of the input
 */
function changeSign() {
    if (currentInput == "") {
        return;
    }
    currentInput = currentInput * (-1);
    displayCurrentInput();
}

/**
 * Function calculates the percentage of the current input
 */
function percentage() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    currentInput = currentInput / 100;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
/**
 *  Calculate the factorial of the current input
 */
function factorial() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    var fac = currentInput;
    if (fac < 0 || (fac + "").indexOf(".") != -1) {
        fac = "ERROR";
    }
    else if (fac == 0) {
        fac = 1;
    }
    else {
        for (i = 1; i < currentInput; i++) {
            fac = fac * i;
        }
    }
    currentInput = fac;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 *  Calculate the square of the current input
 */
function square() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    currentInput = Math.pow(currentInput, 2);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the square root of a function
 */
function squareRoot() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    currentInput = Math.sqrt(currentInput);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the inverse
 */
function inverse() {
    if (currentInput == "") {
        return;
    }
    if (currentInput == 0) {
        currentInput = "ERROR";
        operator = 0;
        memory = "0";
        displayCurrentInput();
        return;
    }
    if (operator > 0) {
        calculate();
    }
    currentInput = 1 / currentInput;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the sine
 */
function tigSin() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (degree == true) {
        currentInput = Math.sin(currentInput * (Math.PI / 180));
    }
    else {
        currentInput = Math.sin(currentInput);
    }
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the cosine
 */
function tigCos() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (degree == true) {
        currentInput = Math.cos(currentInput * (Math.PI / 180));
    }
    else {
        currentInput = Math.cos(currentInput);
    }
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * This function changes the trig degree btween radians and degrees
 */
function tigDegree() {
    if (degree == false) {
        degree = true;
    }
    else {
        degree = false;
    }
}
