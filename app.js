let calcAdd = (a, b) => {
    return a + b;
  };
  
  let calcSubtract = (a, b) => {
    return a - b;
  };
  
  let calcMultiply = (a, b) => {
    return a * b;
  };
  
  let calcDivide = (a, b) => {
    return a / b;
  };
  
  // switched operator and num1 in arguments but didnt check results
  let operate = (num1, operator, num2) => {
    if (operator === "*") {
        return calcMultiply(num1, num2);
        } if (operator === "/") {
              return calcDivide(num1, num2);
              }
    if (operator === "+") {
      return calcAdd(num1, num2);
    } if (operator === "-") {
      return calcSubtract(num1, num2);
    };
   
  };


let contents = document.getElementById("contents");
let calcBody = document.getElementById("calc-body");
let buttonBody = document.getElementsByClassName("button-body");
let operator = document.getElementsByClassName("operator");



//  Buttons work but operators and edges need to be excluded
calcBody.addEventListener("click", e => {
    let displayNum = contents.textContent;
    let target = e.target.textContent;
        // console.log(target);
    let key = e.target;
    let action = key.dataset.action;

    //  Only add works for the operators...
     if (
    key === operator[0] || 
    key === operator[1] || 
    key === operator[2] || 
    key === operator[3] || 
    key === operator[4] || 
    displayNum === "0" ||
    displayNum === "+" 
    // action === "divide"
    ) {
      contents.textContent = key.textContent;
    } else {
        contents.textContent = displayNum + key.textContent; 
    // firstNumberSet working as intended.
    // let firstNumberSet = displayNum + key.textContent;
    // console.log(firstNumberSet);
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "multiply" 
    ) {
      // Works
      key.dataset.firstNumberSet = displayNum;
      let firstNumberSet = key.dataset.firstNumberSet;
      console.log(firstNumberSet + " is first number set");
      // Works
      key.dataset.operator = action;
      let operator = key.dataset.operator;
          console.log(operator + " is the operator")
      
      // Works
    } else if (action === "calculate") {
      let secondNumberSet = displayNum;
          console.log(secondNumberSet + " is second number set");
      
    }

    
  
 

});




