const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const result = document.getElementById("result");
let prev = "";
let cur = "";
let operator = "";

//Addition
const add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
};

//Subtraction
const subtract = function(a, b) {
    return parseFloat(b) - parseFloat(a);
};

//Multiplication
const multiply = function(a, b) {
    return parseFloat(b) * parseFloat(a);
};

//Division
const divide = function(a, b) {
    return parseFloat(b) / parseFloat(a);
};

//Button press logic
buttons.forEach(button => {
    button.addEventListener("click", function() {
        //Updates display using text content of button that was pressed
        const num = this.textContent;
        //Prevents appending numbers to 0
        if (cur == 0 && !cur.includes(".")) {
            cur = num;
            result.value = cur;
        } else {
            cur += num;
            result.value = cur;
        }
        //Converts overflow to exponential notation
        if (isOverflow(result.value)) {
            result.value = (parseFloat(result.value)).toExponential(6);
        } 
    })
})

//Operator press logic
operators.forEach(opButton => {
    opButton.addEventListener("click", function() {
        //Performs operation if two values and operator have been supplied
        if (cur != "" && prev != "" && operator != "") {
            operate(cur, operator, prev);
            prev = result.value;

        } else {
            prev = result.value;
        }
        cur = "";
        //Determines operator based on text content of button pressed
        operator = this.textContent;
    })
})

//Clear all
clear.addEventListener("click", function() {
    cur = "";
    prev = "";
    operator = "";
    result.value = 0;
})

//Equal button
equals.addEventListener("click", function() {
    if (operator != "" && prev != "" && cur != "") {
        operate(cur, operator, prev);
        cur = "";
        prev = result.value;
    }
})

//Decimal button
decimal.addEventListener("click", function() {
    //Checks if string already contains a decimal
    if (!(String(result.value).includes("."))) {
        if(cur == "") {
            cur = 0;
        }
        cur += ".";
        result.value = cur;
    };
})

//Evaluate operation
const operate = function(num1, operator, num2){
    if (operator == "+") {
        result.value = add(cur, prev);
    } else if (operator == "-") {
        result.value = subtract(cur, prev);
    } else if (operator == "*") {
        result.value = multiply(cur, prev);
    } else if (operator == "/") {
        result.value = divide(cur, prev);
    }
    operator = "";
    //Changes to expontential notation if display value has overflowed display container
    if (isOverflow(result.value)) {
        result.value = (parseFloat(result.value)).toExponential(6);
    }  
}

//Overflow checker
const isOverflow = function (number) {
    const numLength = number.length;
    return (numLength > 11);
}