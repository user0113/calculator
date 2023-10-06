const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
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
        if (cur == 0) {
            cur = num;
            result.value = cur;
        } else {
            cur += num;
            result.value = cur;
        }
        console.log("cur: " + cur);
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
        console.log("cur is: " + cur + " and prev is: " + prev);
        //Determines operator based on text content of button pressed
        operator = this.textContent;
        console.log("operator: " + operator);
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
        console.log("cur is: " + cur + " and prev is: " + prev);
        operate(cur, operator, prev);
        cur = "";
        prev = result.value;
        console.log("now cur is: " + cur + " and prev is: " + prev);
    }
})

//Evaluate operation
const operate = function(num1, operator, num2){
    console.log("operating: " + num1 + " " + operator + " " + num2);
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
    console.log("value is: " + result.value)
    //Checks if display value has overflowed display container, changes to expontential 
    if (isOverflow(result.value)) {
        result.value = (parseFloat(result.value)).toExponential(6);
    }  
}

//Overflow checker
const isOverflow = function (number) {
    const numLength = number.length;
    return (numLength > 11);
}
