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
  
  let operate = (operator, num1, num2) => {
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

let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

let contents = document.getElementById("contents");
let displayNum = contents.textContent;

zero.addEventListener("click", () => {
    contents.style.fontSize = "30px";
    contents.style.marginRight = "10px";
    contents.textContent = "0";
    
  });

  one.addEventListener("click", () => {
    contents.style.fontSize = "30px";
    contents.style.marginRight = "10px";
    contents.textContent = "1";
  });
  
  two.addEventListener("click", () => {
    contents.style.fontSize = "30px";
    contents.style.marginRight = "10px";
    contents.textContent = "2";
  });
  
  three.addEventListener("click", () => {
    contents.style.fontSize = "30px";
    contents.style.marginRight = "10px";
    contents.textContent = "3";
  });


