const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const result = document.getElementById("result");
let finalResult = result.value;
let firstNum = 0;
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const num = this.textContent;
        console.log(num);
        if (finalResult != 0) {
            finalResult = finalResult + num;
            console.log(finalResult);
        } else {
            finalResult = num;
            console.log(finalResult);
        }
        result.value = finalResult;
    })
})

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const num = this.textContent;
        console.log(num);
        result.value = finalResult;
    })
})
