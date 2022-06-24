let currentNum = "";
let previousNum = "";
let currentOperator = "";

const currentDisplayNumber = document.getElementById("currentDisplay");
const previousNumberDisplay = document.getElementById("previousNumber");
const equal = document.querySelector(".equal");
const deleteNumber = document.getElementById("delete");

const decimal = document.querySelector(".decimal");
  decimal.addEventListener("click", () => {
    addDecimal();
  });
  const addDecimal = () => {
    if (!currentNum.includes(".")) {
      currentNum += ".";
      currentDisplayNumber.textContent = currentNum;
    }
  };

const clear = document.querySelector(".clear");
  clear.addEventListener("click", (e) => {
    currentNum = "";
    previousNum = "";
    currentOperator = "";
    currentDisplayNumber.textContent = "0";
    previousNumberDisplay.textContent = "";
  });

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


  // Added criteria in order for equals to work.
  equal.addEventListener("click", (e) => {
    if (previousNum != "" && currentNum != "") {
      calculate();
      currentNum = currentDisplayNumber.textContent;
      previousNum = previousNumberDisplay.textContent;
    }
  });


const calculate = (num1, op, num2) => {
  previousNum = previousNumberDisplay.textContent;
  num1 = previousNumberDisplay.textContent;

  op = currentOperator;

  currentNum = currentDisplayNumber.textContent;
  num2 = currentDisplayNumber.textContent

    if (currentOperator === "+") {
    currentDisplayNumber.textContent = parseFloat(num1) + parseFloat(num2);
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


deleteNumber.addEventListener("click", () => {
  let currentNum = currentDisplayNumber.textContent;
  currentNum = currentNum.slice(0, -1);
  currentDisplayNumber.textContent = currentNum;
});
