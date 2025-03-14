const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");

function calculator(operator) {
  const num1 = parseInt(number1.value);
  const num2 = parseInt(number2.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.innerText = "Please enter a valid  number";
    return;
  }

  switch (operator) {
    case "+":
      result.innerText = `sum:${num1 + num2}`;

      break;
    case "-":
      result.innerText = `Sub:${num1 - num2}`;

      break;
    case "*":
      result.innerText = `Mul:${num1 * num2}`;
      break;
    case "/":
        if(num2 === 0){
            result.innerText= 'cannot divide by zero';
        }
      result.innerText = `Div:${num1 / num2}`;
      break;
    default: {
    }
  }
}
