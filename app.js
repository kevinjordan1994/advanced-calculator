`use strict`;

const numBtns = document.querySelectorAll(`.num-btn`);
const calcBtns = document.querySelectorAll(`.calc-btn`);
const numDisplay = document.querySelector(`.num-display`);

class Calculator {
  prevNum = undefined;
  currentNum = undefined;
  prevOpperator = undefined;

  constructor() {
    this.clear();
  }

  calculate(num1, num2, operation) {
    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;
    return operation(num1, num2);
  }

  clear() {
    this.prevNum = undefined;
    this.currentNum = undefined;
    this.prevOpperator = undefined;
    numDisplay.textContent = "0";
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
    if (+number === 0) numDisplay.textContent = "";
    numDisplay.textContent += button.textContent;
  })
);

calcBtns.forEach((button) =>
  button.addEventListener(`click`, function (e) {
    e.preventDefault();
    calculator.prevOpperator = this.dataset.opperator;
    if (!calculator.prevNum) {
      calculator.prevNum = Number(numDisplay.textContent);
      numDisplay.textContent = "0";
      console.log(`First number stored`);
    } else {
      calculator.currentNum = Number(numDisplay.textContent);
      console.log(calculator.prevNum, calculator.currentNum);
      numDisplay.textContent = calculator.calculate(
        calculator.prevNum,
        calculator.currentNum,
        calculator.add
      );
    }
    console.log(calculator.prevOpperator);
  })
);
