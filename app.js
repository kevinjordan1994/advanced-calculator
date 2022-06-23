`use strict`;

const numBtns = document.querySelectorAll(`.num-btn`);
const calcBtns = document.querySelectorAll(`.calc-btn`);
const numDisplay = document.querySelector(`.num-display`);

class Calculator {
  constructor() {
    this.clear();
  }

  clear() {
    this.prevNum = "";
    this.currentNum = "";
    this.opperator = undefined;
    numDisplay.textContent = "";
  }

  addNumber(number) {
    if (this.prevNum === "" && this.opperator) {
      this.prevNum = this.currentNum;
      this.currentNum = "";
      this.updateDisplay();
    }
    this.currentNum += String(number);
    this.updateDisplay();
  }

  addOpperator(opperator) {
    this.opperator = String(opperator);
  }

  calculate() {
    //TODO: Check the opperator string and do the appropriate calculation.
  }

  updateDisplay() {
    numDisplay.textContent = this.currentNum;
  }
}

const calculator = new Calculator();

numBtns.forEach((button) =>
  button.addEventListener(`click`, function (e) {
    e.preventDefault();
    calculator.addNumber(this.textContent);
  })
);

calcBtns.forEach((button) =>
  button.addEventListener(`click`, function (e) {
    e.preventDefault();
    calculator.addOpperator(this.textContent);
  })
);
