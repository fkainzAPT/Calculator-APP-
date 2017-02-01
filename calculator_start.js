/** The Calculator APP
 *
 * Original authors:
 * @author Felix Kainz
 * @editor Noah Hansbery
 *
 * Code cleaning crew:
 * @author Felix Kainz
 * @editor Will Tanaka
 *
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


// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.


//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.


//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.


//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.


//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.


//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.


//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.


//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.


//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.

