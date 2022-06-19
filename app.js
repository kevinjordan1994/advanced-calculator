`use strict`;

const firstNumberField = document.querySelector(`.num1`);
const secondNumberField = document.querySelector(`.num2`);
const resultDisplay = document.querySelector(`.result`);
const addBtn = document.querySelector(`.add`);
const subtractBtn = document.querySelector(`.subtract`);
const multiplyBtn = document.querySelector(`.multiply`);
const divideBtn = document.querySelector(`.divide`);

class Calculator {
  constructor() {}

  calculate(num1, num2, operation) {
    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;
    return operation(num1, num2);
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

  updateResult(result) {
    resultDisplay.textContent = result;
  }
}

const calculator = new Calculator();

addBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  const result = calculator.calculate(
    +firstNumberField.value,
    +secondNumberField.value,
    calculator.add
  );
  calculator.updateResult(result);
});

subtractBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  const result = calculator.calculate(
    +firstNumberField.value,
    +secondNumberField.value,
    calculator.subtract
  );
  calculator.updateResult(result);
});

multiplyBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  const result = calculator.calculate(
    +firstNumberField.value,
    +secondNumberField.value,
    calculator.multiply
  );
  calculator.updateResult(result);
});

divideBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  const result = calculator.calculate(
    +firstNumberField.value,
    +secondNumberField.value,
    calculator.divide
  );
  calculator.updateResult(result);
});
