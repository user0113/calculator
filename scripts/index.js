const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const result = document.getElementById("result");
let prev = 0;
let cur = 0;
let operator = "";
let opPressed = false;

//returns sum of a and b
const add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
};

//returns difference of a and b
const subtract = function(a, b) {
    return parseFloat(a) - parseFloat(b);
};

//appends number to display
buttons.forEach(button => {
    if (opPressed) {clear()}
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

//changes display to show new number after operator is clicked
operators.forEach(opButton => {
    opButton.addEventListener("click", function() {
        //determines which operator was pressed
        operator = this.textContent;
        console.log("operator: " + operator);
    })
})

//clears everything
clear.addEventListener("click", function() {
    cur = 0;
    prev = 0;
    display = 0;
    operator = "";
    result.value = display;
})


const operate = function(num1, operator, num2){
    
}
