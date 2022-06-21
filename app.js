`use strict`;

const numBtns = document.querySelectorAll(`.calc-btn`);
const numDisplay = document.querySelector(`.num-display`);

class Calculator {
  firstNum;
  secondNum;

  constructor() {}

  calculate(num1, num2, operation) {
    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;
    return operation(num1, num2);
  }

  // TODO: FIND OUT WHY THIS IS NOT WORKING
  enterNumber() {
    if (!this.firstNum) {
      this.firstNum = toString(1);
    } else {
      this.firstNum += toString(1);
    }
    numDisplay.textContent = this.firstNum;
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

const calculator = new Calculator();

numBtns.forEach((button) =>
  button.addEventListener(`click`, function (e) {
    e.preventDefault();
    let number = numDisplay.textContent;
    console.log(+number);
    if (+number === 0) numDisplay.textContent = "";
    numDisplay.textContent += button.textContent;
  })
);
