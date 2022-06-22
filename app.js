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
    previousNumberDisplay.textContent = previousNum + " " + op;
    currentNum = "";
    currentDisplayNumber.textContent = "";
  };

  equal.addEventListener("click", (e) => {
    calculate();
  });

const calculate = (num1, op, num2) => {
  num1 = previousNumberDisplay.textContent;
  op = currentOperator;
  num2 = currentDisplayNumber.textContent

    if (currentOperator === "+") {
    currentDisplayNumber.textContent = parseFloat(num1) + parseFloat(num2)
    previousNumberDisplay.textContent = num1 + " " + num2 + " " + "=";
    
    } else if (currentOperator === "-") {
      currentDisplayNumber.textContent = parseFloat(num1) - parseFloat(num2)
    previousNumberDisplay.textContent = num1 + " " + num2 + " " + "=";

    } else if (currentOperator === "/") {
    currentDisplayNumber.textContent = parseFloat(num1) / parseFloat(num2)
    previousNumberDisplay.textContent = num1 + " " + num2 + " " + "=";

    } else if (currentOperator === "*") {
      currentDisplayNumber.textContent = parseFloat(num1) * parseFloat(num2)
    previousNumberDisplay.textContent = num1 + " " + num2 + " " + "=";
    };
};

// Adds decimal but disappears after next number. ?Relocate fxn
decimal.addEventListener("click", () => {
  currentDisplayNumber.textContent = currentNum + decimal.textContent;
});

 