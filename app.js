let currentNum = "";
let previousNum = "";
let currentOperator = "";

const currentDisplayNumber = document.getElementById("currentDisplay");
const previousNumberDisplay = document.getElementById("previousNumber");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");

const numberButtons = document.querySelectorAll(".number")
  numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      handleNumber(e.target.textContent)
    });
  });

  const handleNumber = number => {
    if (currentNum.length <= 10) {
      currentNum += number;
      currentDisplayNumber.textContent = currentNum;
    }
  };


const operators = document.querySelectorAll(".operator");
  operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
    });
  });

  const handleOperator = (op) => {
    currentOperator = op;
    previousNum = currentNum;
    previousNumberDisplay.textContent = previousNum;
    currentNum = "";
    currentDisplayNumber.textContent = "";
  };

