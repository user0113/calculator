const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const result = document.getElementById("result");
let prev = 0;
let cur = 0;
let operator = "";

//returns sum of a and b
const add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
};

//returns difference of a and b
const subtract = function(a, b) {
    return parseFloat(a) - parseFloat(b);
};
const multiply = function(toProduct) {
    return toProduct.reduce((product, currentNum) => product * currentNum, 1);
};

//appends pressed number to value displayed
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const num = this.textContent;
        if (cur != 0) {
            cur += num;
            result.value = cur;
        } else {
            cur = num;
            result.value = cur;
        }
        result.value = cur;
    })
})

const operate = function(num1, operator, num2){
    
}
//changes display to show new number after operator is clicked
operators.forEach(opButton => {
    opButton.addEventListener("click", function() {
        if (operator == "") {
            //determines which operator was pressed
            operator = this.textContent;
            console.log("operator: " + operator);
            //saves last number
            prev = cur;
            console.log("previous: " + prev);
            //resets display
            cur = 0;
            result.value = cur;
            //executes operation based on operator and previous number when equal is pressed
        }
        equal.addEventListener("click", function() {
            //addition
            if (operator == "+") {
                sum = add(cur, prev);
                result.value = sum;

                //subtraction
             } //else if (operator == "-") {
            //     cur = subtract(firstNum, cur);
            //     console.log(cur);
            //     console.log(firstNum);
            //     result.value = cur;
            // }
            
        })
    })
})

clear.addEventListener("click", function() {
    cur = 0;
    prev = 0;
    display = 0;
    operator = "";
    result.value = display;
})
