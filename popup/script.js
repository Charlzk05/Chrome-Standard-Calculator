const firstOperandContainer = document.getElementById("firstOperandContainer");
const secondOperandContainer = document.getElementById("secondOperandContainer");

const firstOperandBox = document.getElementById("firstOperandBox");
const operationText = document.getElementById("operationText");
const secondOperandBox = document.getElementById("secondOperandBox");
const answerText = document.getElementById("answerText");

const additionalButton = document.getElementById("additionalButton");
const substractButton = document.getElementById("substractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const equationButton = document.getElementById("equationButton");
const sqrtButton = document.getElementById("sqrtButton");

// FUNCTIONS
function addtional(o1, o2) {
    var a = o1 + o2;
    return a;
}

function substraction(o1, o2) {
    var a = o1 - o2;
    return a;
}

function multiply(o1, o2) {
    var a = o1 * o2;
    return a;
}

function divide(o1, o2) {
    var a = o1 / o2;
    return a;
}

// EVENTS
additionalButton.addEventListener("click", function() {
    operationText.innerText = "+";
    secondOperandBox.disabled = false;
});

substractButton.addEventListener("click", function() {
    operationText.innerText = "−";
    secondOperandBox.disabled = false;
});

multiplyButton.addEventListener("click", function() {
    operationText.innerText = "×";
    secondOperandBox.disabled = false;
});

divideButton.addEventListener("click", function() {
    operationText.innerText = "÷";
    secondOperandBox.disabled = false;
});

sqrtButton.addEventListener("click", function() {
    const o1 = firstOperandBox.value;
    const o2 = secondOperandBox.value;

    if (o1 == "") {

    } else {
        answerText.innerHTML = Math.sqrt(o1);
    }
});

equationButton.addEventListener("click", function() {
    const o1 = firstOperandBox.value;
    const o2 = secondOperandBox.value;

    if (operationText.innerHTML == "+") {
        answerText.innerHTML = addtional(o1, o1);
    } else if (operationText.innerHTML == "−") {
        answerText.innerHTML = substraction(o1, o2);
    } else if (operationText.innerHTML == "×") {
        answerText.innerHTML = multiply(o1, o2);
    } else if (operationText.innerHTML == "÷") {
        answerText.innerHTML = divide(o1, o2);
    }
});