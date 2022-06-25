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
    // console.log(this.opperator, this.prevNum, this.currentNum);
  }

  addOpperator(opperator) {
    if (this.opperator) {
      this.calculate();
    }
    this.opperator = String(opperator);
    // console.log(this.opperator, this.prevNum, this.currentNum);
  }

  calculate() {
    //TODO: Check the opperator string and do the appropriate calculation.
    if (this.prevNum !== "" && numDisplay.textContent !== "") {
      switch (this.opperator) {
        case "+":
          this.currentNum = String(+this.prevNum + +numDisplay.textContent);
          this.updateDisplay();
          this.prevNum = this.currentNum;
          this.currentNum = "";
          break;

        case "-":
          this.currentNum = String(+this.prevNum - +numDisplay.textContent);
          this.updateDisplay();
          this.prevNum = this.currentNum;
          this.currentNum = "";
          break;

        case "*":
          this.currentNum = String(+this.prevNum * +numDisplay.textContent);
          this.updateDisplay();
          this.prevNum = this.currentNum;
          this.currentNum = "";
          break;

        case "/":
          this.currentNum = String(+this.prevNum / +numDisplay.textContent);
          this.updateDisplay();
          this.prevNum = this.currentNum;
          this.currentNum = "";
          break;

        default:
          this.currentNum = "";
          break;
      }
    }
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
