/* Write a function that evaluates a postfix expression (also known as Reverse Polish Notation) and returns the result. 
The expression will contain single-digit integers and the operators +, -, *, and /. 
You can assume the input is always a valid expression!
*/

function evaluatePostFix(expr) {
  // Initialize a stack to store operands
  operandStack = [];

  // Initialize an array to store all possible operators
  operators = ["+", "-", "*", "/"];

  // Loop through the input expresion
  for(let i = 0; i < expr.length; i++){

    if(!operators.includes(expr[i])){
      operandStack.push(parseInt(expr[i]));
    } else {
      let num1 = operandStack.pop();
      let num2 = operandStack.pop();
      let result;

      switch(expr[i]) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          operandStack.push(result);
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = Math.floor(num1 / num2);          
          break;
      }
      operandStack.push(result);
      // console.log(operandStack);
    }
  }
  console.log(operandStack)
}

evaluatePostFix("231*+91");