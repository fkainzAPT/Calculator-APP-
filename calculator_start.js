/** TODO:
 * 2. Bootstrap it to make it pretty!
 * 6. Challenge: Add trig functions (in radian AND degree mode)
 * 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
 * 8. Super Challenge: Add ( and ) buttons that work!
 * 9. Super Duper Challenge: Add exponents (negatives too!)
 */
var current_input = "";
var memory = "0";
var operator = 0;
var degree = true;

/**
 * displays the requested string
 */
function displayCurrentInput() {
    if (current_input == "") {
        document.getElementById('screen').value = memory;
    }
    else {
        document.getElementById('screen').value = current_input;
    }
}

/**
 * add a digit to the number string
 * @param {number} dig digit to be added to number on screen
 */
function addDigit(dig) {
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else if (current_input.length < 30) {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears everything.
 */
function allClear() {
    current_input = "";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 *  Clear the current input back to 0
 */
function cancel() {
    current_input = "";
    displayCurrentInput();
}

/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 * @param {string} op stores the specified operator
 */
function storeOperator(op) {
    if (current_input == "") {
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
    memory = current_input; //store value
    currentInput = "";
    displayCurrentInput();
}

/**
 *  Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    };
    if (operator == 2 && current_input != "0") {
        current_input = eval(memory) / eval(current_input);
    };
    if (operator == 2 && current_input == "0") {
        current_input = "ERROR"
    };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Changes the sign of the input
 */
function changeSign() {
    if (current_input == "") {
        return;
    }
    current_input = current_input * (-1);
    displayCurrentInput();
}

/**
 * Function calculates the percentage of the current input
 */
function percentage() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = current_input / 100;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
/**
 *  Calculate the factorial of the current input
 */
function factorial() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    var fac = current_input;
    if (fac < 0 || (fac + "").indexOf(".") != -1) {
        fac = "ERROR";
    }
    else if (fac == 0) {
        fac = 1;
    }
    else {
        for (i = 1; i < current_input; i++) {
            fac = fac * i;
        }
    }
    current_input = fac;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 *  Calculate the square of the current input
 */
function square() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = Math.pow(current_input, 2);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the square root of a function
 */
function squareRoot() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = Math.sqrt(current_input);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the inverse
 */
function inverse() {
    if (current_input == "") {
        return;
    }
    if (current_input == 0) {
        current_input = "ERROR";
        operator = 0;
        memory = "0";
        displayCurrentInput();
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = 1 / current_input;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the sine
 */
function tigSin() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (degree == true) {
        current_input = Math.sin(current_input * (Math.PI / 180));
    }
    else {
        current_input = Math.sin(current_input);
    }
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

/**
 * Function calculates the cosine
 */
function tigCos() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (degree == true) {
        current_input = Math.cos(current_input * (Math.PI / 180));
    }
    else {
        current_input = Math.cos(current_input);
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
